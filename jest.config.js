module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverage: true,
  // 一组glob模式，指示一组应为其收集覆盖率信息的文件。如果文件与指定的 glob 模式匹配，则即使该文件不存在测试，也将为其收集覆盖率信息，并且在测试套件中从不需要它。
  // collectCoverageFrom: [
  //   '**/*.{js,jsx}',
  //   '!**/node_modules/**',
  //   '!**/vendor/**'
  // ],
  collectCoverageFrom: [
    '**/src/packages/Google.vue'
    // '**/src/views/**',
    // '!**/node_modules/**',
    // '!**/vendor/**'
  ],

  // 测试覆盖率报告输出目录
  coverageDirectory: 'coverage',

  // 指示应使用哪个提供程序来检测覆盖范围的代码。允许的值为 babel（默认）或 v8。
  // 请注意，使用 v8 被认为是实验性的。这使用了 V8 的内置代码覆盖率，而不是基于 Babel 的代码覆盖率。它没有经过很好的测试，并且在 Node 的最后几个版本中也得到了改进。使用最新版本的 Node（在撰写本文时为v14）会产生更好的结果。
  coverageProvider: 'babel',

  // Jest 在编写覆盖率报告时使用的报告人姓名列表。可以使用任何伊斯坦布尔记者
  coverageReporters: ["json", "lcov", "text", "clover"],

  // 覆盖率阈值，如果没有达到阈值则测试失败
  // coverageThreshold: {
  //   "global": {
  //     "branches": 50,
  //     "functions": 50,
  //     "lines": 50,
  //     "statements": 50
  //   },
  //   "./src/components/": {
  //     "branches": 40,
  //     "statements": 40
  //   },
  //   "./src/reducers/**/*.js": {
  //     "statements": 90
  //   },
  //   "./src/api/very-important-module.js": {
  //     "branches": 100,
  //     "functions": 100,
  //     "lines": 100,
  //     "statements": 100
  //   }
  // },

  // // 通常，在收集代码覆盖率时会忽略测试文件。使用此选项，您可以覆盖此行为，并在代码覆盖率中包含否则被忽略的文件。
  // forceCoverageMatch: ["**/*.t.js"]
}
