module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    "assert": {
      "assertions": {
        // "categories:performance": ["warn", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "dom-size": ["error", { "maxNumericValue": 3000 }],
      }
    }
  },
};