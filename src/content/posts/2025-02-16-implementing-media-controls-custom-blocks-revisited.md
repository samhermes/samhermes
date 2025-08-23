---
title: Implementing media controls in custom blocks, revisited
date: 2025-02-16T12:52:00 -6
tags: ['WordPress']
---
I last [wrote about this topic in 2019](https://samhermes.com/posts/implementing-media-controls-in-custom-blocks), and, well, not a lot has changed since then. However, I left a list of questions at the end of that post, and never returned to answer them. Let’s take a look in a wholistic way, answering those questions along the way.

## Add block attributes

In the block.json file, we want to add at least one new attribute for storing the media file’s ID. Previously, I was storing the URL of the large image size, but that was fragile and made evolving the block over time more difficult. Additionally, the `<MediaUpload>` component needs an ID for the `value` prop, which shows the currently selected image to the user in the media modal. This is useful for cases where someone wants to switch the currently selected image.

```json
"attributes": {
	...
	"mediaId": {
		"type": "number",
		"default": 0
	}
}
```

If you’re using `render.php` to display the image on the front end, you could get by with only `mediaId`. In the event that you’re using the `save` function, you’ll want to store a few more image attributes. If you’re using the image as a background image, you’ll need an attribute for the image URL. If you’re using an image tag, you’ll also want to store the image alt attribute.

```json
"attributes": {
	...
	"mediaURL": {
		"type": "string"
	},
	"mediaAlt": {
		"type": "string"
	}
}
```

## Add components to Edit function

There are a number of components that you could use to add media controls to a block, and quite a few components available from third parties. WordPress provides `MediaPlaceholder` and `MediaUpload`.

Import them like so:

```jsx
import { MediaPlaceholder, MediaUpload } from '@wordpress/block-editor';
```

The placeholder component is great for prompting a user to upload or select an image, and once they’ve done that, we can display the image in its place.

This component could be placed in the main content area, or you could add it to the block settings panel in the sidebar. It just depends on what’s appropriate for your block. The functionality remains the same.

```jsx
{mediaId ? (
	// If an image has been selected, display here using mediaUrl
) : (
	<MediaPlaceholder
	  onSelect={onSelectMedia}
	  allowedTypes={['image']}
	/>
)}
```

By default, this component can accept images, videos, or audio files, so this limits it down to just images as well.

## Handling the onSelect callback

To use the MediaPlaceholder component, we need to handle what happens when a user selects an image. To do this, we can pass a function in to the `onSelect` prop of the placeholder. [It will give you the media object](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/media-placeholder/README.md#onselect), so it’s pretty easy to take those values and store them in the block attributes. Here, we just take the media file’s ID and store it in the `mediaId` attribute we previously created.

```jsx
const onSelectMedia = (media) => {
	setAttributes({
		mediaId: media.id,
	});
};
```

## Optional: Store the image’s URL in block attributes

In my previous version of this post, I was using lodash to retrieve the image URL and storing that in block attributes. At the time, I wasn’t aware of just how little lodash’s `get()` function was doing. All we really need is a question mark. Multiple question marks. Poetic.

Inside the `onSelectMedia` function above, we can log out the details of the media file to get a better look at what WordPress is giving us.

```jsx
console.log(media);
```

Build the block, reload the page, select a new image, and pop open the developer console. There, you’ll find a rather large amount of data about the image. We can conditionally pull any of this and store it in the block’s attributes. Or, access directly inside the block (more on that below).

If we want to get the `large` image size, we could check for its existence and save it to a variable if it exists, falling back to the full size if not. As these values get pretty nested, we need to check for the existence of each layer using `?` after each. This replaces the functionality of the `get()` function from lodash.

```jsx
const src =
	media.sizes?.large?.url ||
	media.media_details?.sizes?.large?.source_url ||
	media.url;
```

We could then update the `setAttributes` function to store that value:

```jsx
setAttributes({
	mediaId: media.id,
	mediaUrl: src,
});
```

## Optional: Add control for removing or updating image

This will depend on your unique use case, but it’s helpful to allow a user to update the image in your block after they’ve set it. There are a number of ways to go about this. In the previous version of this post, I suggested [adding a control to the block toolbar](https://samhermes.com/posts/implementing-media-controls-in-custom-blocks/). You could also add this control in the main edit area of the block, or in the block settings sidebar.

In whatever way you implement this, the component that you’ll use is `<MediaUpload>`. This component works just like the `<MediaPlaceholder>` component, but allows you to define a `render` function, meaning you can create any UI that you’d like. You could use the `IconButton` component from WordPress in the toolbar, or the `Button` component in the sidebar.

To remove the image, you could call `setAttributes` and set the `mediaId` to zero. Or, to update, you could hook the `<MediaUpload>` component to the same `onSelectMedia` callback as before using the `onSelect` prop. The remove and edit buttons will need to be separate in the UI, and this generally makes more sense for a user. The media modal from WordPress doesn’t allow for the removal of a selection.

## Putting it all together

Here’s the entire Edit function that we’ve created, with just the media controls. You’re like to have other controls mixed in here, but I’ve pulled this back for better understanding:

```jsx
import { useBlockProps, MediaPlaceholder, MediaUpload } from '@wordpress/block-editor';

export default function Edit({
	attributes: {
		mediaId,
		mediaUrl,
		mediaAlt,
	},
	setAttributes,
}) {
	const onSelectMedia = (media) => {
		const src =
			media.sizes?.large?.url ||
			media.media_details?.sizes?.large?.source_url ||
			media.url;

		setAttributes({
			mediaId: media.id,
			mediaUrl: src,
			mediaAlt: media.alt
		});
	};

	return (
		<div {...useBlockProps()}>
			{mediaUrl ? (
				// If an image has been selected, display here
			) : (
				<MediaPlaceholder
					onSelect={onSelectMedia}
					allowedTypes={['image']}
				/>
			)}
		</div>
	);
}
```