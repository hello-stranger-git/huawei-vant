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
      // 数据
      // 数据格式[
      //   { value: 335, name: '直接访问' },
      //   { value: 310, name: '邮件营销' },
      //   { value: 234, name: '联盟广告' },
      //   { value: 135, name: '视频广告' },
      //   { value: 1548, name: '搜索引擎' }
      // ]
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
                  show: true,
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
