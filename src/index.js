define([
  './Echarts2D',
  './Echarts3D',
  'echarts'
], function (
  Echars2D,
  Echars3D,
  echarts
) {
  var buttons = document.getElementsByClassName('btn')

  function clear () {
    var containers = document.getElementsByClassName('container')
    for (var i = 0, len = containers.length; i < len; i++) {
      echarts.dispose(containers[i])
      containers[i].style.display = 'none'
    }
  }

  buttons[0].addEventListener('click', function () {
    clear()
    document.getElementById('echarts-2d-demo').style.display = 'block'
    var layer = new Echars2D('echarts-2d-demo')
    layer.init()
  })
  buttons[1].addEventListener('click', function () {
    clear()
    document.getElementById('echarts-3d-demo').style.display = 'block'
    var layer = new Echars3D('echarts-3d-demo')
    layer.init()
  })
})
