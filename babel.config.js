module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@screens": "./src/screens",
            "@containers": "./src/containers",
            "@components": "./src/components",
            "@routes": "./src/routes",
            "@styles": "./src/styles",
            "@common": "./src/common",
            "@navigation": "./src/navigation",
            "@utils": "./src/utils",
            "@assets": "./src/assets",
            "@hooks": "./src/hooks",
            "@redux": "./src/redux",
            "@services": "./src/services",
            "@models": "./src/models",
          },
        },
      ],
    ],
  };
};
