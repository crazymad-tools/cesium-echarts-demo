define([
  'echarts',
  'echarts-gl',
  './data/population',
  'http://cdnjs.cloudflare.com/ajax/libs/ramda/0.25.0/ramda.min.js'
], function (
  echarts,
  echartsGl,
  population,
  R
) {
  function Echarts3D (id) {
    this.id = id
  }

  Echarts3D.prototype.init = function () {
    var data = R.clone(population)
    data = data.filter(function (dataItem) {
      return dataItem[2] > 0;
    }).map(function (dataItem) {
      return [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])];
    });

    var dom = document.getElementById(this.id)
    this.layer = echarts.init(dom)
    this.layer.setOption({
      backgroundColor: '#000',
      globe: {
        baseTexture: "resources/images/world.topo.bathy.200401.jpg",
        heightTexture: "resources/images/world.topo.bathy.200401.jpg",
        shading: 'lambert',
        environment: 'resources/images/starfield.jpg',
        light: {
          main: {
            intensity: 2
          }
        },
        viewControl: {
          autoRotate: false
        }
      },
      visualMap: {
        max: 40,
        calculable: true,
        realtime: false,
        inRange: {
          colorLightness: [0.2, 0.9]
        },
        textStyle: {
          color: '#fff'
        },
        controller: {
          inRange: {
            color: 'red'
          }
        },
        outOfRange: {
          colorAlpha: 0
        }
      },
      series: [{
        type: 'bar3D',
        coordinateSystem: 'globe',
        data: data,
        barSize: 0.6,
        minHeight: 0.2,
        silent: true,
        itemStyle: {
          color: 'orange'
        }
      }]
    })
  }

  return Echarts3D
})
