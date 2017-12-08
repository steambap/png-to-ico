module.exports = {
  extends: ["eslint-config-alloy"],
  env: {
    mocha: true
  },
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    quotes: [
      "error",
      "double"
    ],
    strict: [
      "off",
      "safe"
    ]
  }
};
