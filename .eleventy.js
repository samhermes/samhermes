const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (config) {
    config.addPlugin(pluginRss);

    config.addFilter("bust", (url) => {
        const [urlPart, paramPart] = url.split("?");
        const params = new URLSearchParams(paramPart || "");
        params.set("v", DateTime.local().toFormat("X"));
        return `${urlPart}?${params}`;
    });

    config.addFilter('postsFilter', function (collection, post) {
        if (!post) return collection;
        return collection.filter(item => item.data.selected)
    })

    config.addCollection('projects', collection =>
        collection.getFilteredByGlob('_projects/*.md').sort((a, b) => {
            return Number(a.data.order) - Number(b.data.order);
        })
    )
};
