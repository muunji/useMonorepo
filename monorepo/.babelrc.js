// mobie & libs 의 babelrc 파일 합치기
// 공통 컴포넌트 사용할 수 있도록 설정

module.exports = function (api){
  api.cache(true);

  const isStorybookOrBuild=
    process.env.NX_TASK_TARGET_TARGET ==='build' ||
    process.env.NX_TASK_TARGET_TARGET?.includes('storybook');

  if (isStorybookOrBuild){
    return {
      presets: [
        [ '@nx.react/babel',{
          runtime: 'automatic',
          useBuiltIns : 'usage'
        }]
      ],
      plugins:[],
    };
  }
  return {
    presets: [
      ['module:metro-react-native-babel-preset',{useTransformReactJSX: true}]
    ],
    plugins:[],
  }
}