module.exports = {
  extends: ["eslint-config-alloy"],
  globals: {
    describe: false,
    it: false
  },
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    quotes: [
      "error",
      "double"
    ]
  }
};
