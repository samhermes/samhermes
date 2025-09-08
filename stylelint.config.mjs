/** @type {import("stylelint").Config} */
export default {
  "extends": ["stylelint-config-standard-scss"],
  "rules": {
    "media-feature-range-notation": null,
    "value-keyword-case": [
      "lower",
      {
        "camelCaseSvgKeywords": true
      }
    ],
    "no-descending-specificity": null,
    "no-invalid-position-at-import-rule": null,
  },
};
