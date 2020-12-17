<template>
  <div>
    <div id="annularChart" style="width: 100%; height: 150px"></div>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      // 所有参数,自定义
      type: Object,
      default: null
    },
    tooltip: {
      // 提示工具
      type: Object,
      default: null
    },
    legend: {
      // 标题
      type: Array,
      default: function() {
        return ['']
      }
    },
    series: {
      type: Array,
      default: function() {
        return []
      }
    },
    seriesName: {
      // 数据来源名称
      type: String,
      default: ''
    }
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(
        document.getElementById('annularChart')
      )
      let option = {}
      if (this.option) {
        option = this.option
      } else {
        option = {
          tooltip: {
            show: false, // 取消点击显示数据
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 10,
            data: this.legend
          },
          series: [
            {
              // 取消鼠标移上去饼图放大
              hoverAnimation: false,
              name: this.seriesName,
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: false, // 不显示值
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: this.series
            }
          ]
        }
      }
      myChart.setOption(option)
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>

<style lang="less" scoped></style>
