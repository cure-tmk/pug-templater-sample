{
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            "> 1% in JP",
            "iOS >= 7",
            "ie >= 9",
            "Android >= 4"
          ],
        },
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
  ]
}
