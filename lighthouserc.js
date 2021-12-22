module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    "assert": {
      "assertions": {
        "categories:performance": ["warn", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 1 }],
        "dom-size": ["error", { "maxNumericValue": 3000 }],
        "offscreen-images": "off",
        "color-contrast": "off",
        "tap-targets": "off"
      }
    }
  },
};