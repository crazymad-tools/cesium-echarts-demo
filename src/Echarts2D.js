define([
  'echarts'
], function (
  echarts
) {
  function Echarts2D (id) {
    this.id = id
  }

  Echarts2D.prototype.init = function () {
    var dom = document.getElementById(this.id)
    this.layer = echarts.init(dom)
    console.log(this.layer)
    this.layer.setOption({color: ['#db6862'],
      tooltip: {
        trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
        yAxis: [
        {
          type: 'value'
        }
      ],
        series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    })
  }

  return Echarts2D
})
