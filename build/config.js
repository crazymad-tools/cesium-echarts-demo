/*global require*/
requirejs.config({
  baseUrl: '.',
  paths: {
    'echarts': './lib/echarts/echarts',
    'echarts-gl': './lib/echarts/echarts-gl',
    'cesiumLib': './lib/cesium/Cesium'
  },
  shim: {
    'echarts-gl': {
      deps: ['echarts']
    }
  }
})
require(['src/index'], function () {
  console.log('app is loading')
})
