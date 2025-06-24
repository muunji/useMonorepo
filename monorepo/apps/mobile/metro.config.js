const path = require('path')
const { withNxMetro } = require('@nx/react-native');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot,'../../')

const defaultConfig = getDefaultConfig(projectRoot);
const { assetExts, sourceExts } = defaultConfig.resolver;


/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const customConfig = {
  // cacheVersion: 'mobile',
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'cjs', 'mjs', 'svg'],
    blockList:exclusionList([
      // 중복된 경로 막기
      new RegExp(`${workspaceRoot}/node_modules/.*`)
    ]),
    extraNodeModules:{
      '@libs':path.resolve(workspaceRoot,'libs'),
      // ...require('node-libs-react-native'),
      react: path.resolve(workspaceRoot,'node_modules/react'),
      'react-native':path.resolve(workspaceRoot,'node_modules/react-native'),
    '@libs/ui': path.resolve(workspaceRoot, 'libs/shared/ui/src'),
    }
  },
    watchFolders: [
    path.resolve(workspaceRoot,'libs'),
    path.resolve(workspaceRoot,'node_modules')
  ],
};

module.exports = withNxMetro(mergeConfig(defaultConfig, customConfig), {
  // Change this to true to see debugging info.
  // Useful if you have issues resolving modules
  debug: false,
  // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
  // extensions: [],
  // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)

});
