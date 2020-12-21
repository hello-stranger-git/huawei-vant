<template>
  <div style="width:100%;text-align: center;">
    <canvas id="barCanvas" style="width:100%;" height="300px"></canvas>
  </div>
</template>

<script>
import Bar from '@/components/canvas/bar.js'
export default {
  methods: {
    draw() {
      Bar.init(document.getElementById('barCanvas'))
      const option = {
        // 柱状图标题
        legend: {
          data: ['销售额', '客流人数'],
          color: ['#F8C498', '#56BE9B']
        },
        // y轴
        yAxis: [
          {
            axisLine: {
              // 轴线
              show: false
            },
            splitLine: {
              // 线
              show: false,
              dash: 4
            },
            axisTick: {
              // 刻度
              show: false
            },
            axisLabel: [0, 100, 200, 300, 400, 500]
          },
          {
            // label标题
            name: '--客单价',
            // 是否显示label
            axisLabelShow: true,
            axisLine: {
              // 轴线
              show: false
            },
            splitLine: {
              // 线
              show: false,
              dash: 4
            },
            axisTick: {
              // 刻度
              show: false
            },
            axisLabel: [
              0,
              1000000,
              2000000,
              3000000,
              30000000,
              5000000,
              1005000
            ]
          }
        ],
        // x轴
        xAxis: [
          {
            axisLine: {
              // 轴线
              show: true
            },
            axisTick: {
              // 刻度
              show: false
            },
            axisLabel: ['今日', '日', '六', '歇', '11/12', '11/11', '11/10'],
            otherLabel: [47, 148, 234, 214, 65, 168, 180]
          }
        ],
        // 数据
        series: [
          {
            data: [100, 160, 480, 100, 250, 180, 220]
          },

          {
            data: [
              1000000,
              1500000,
              2012458,
              3250158,
              4101452,
              1001245,
              3801254
            ]
          },
          {
            data: [40, 25, 90, 30, 100, 80, 60]
          }
        ]
      }
      Bar.setOption(option)
    }
  },
  mounted() {
    this.draw()
  }
}
</script>

<style></style>
