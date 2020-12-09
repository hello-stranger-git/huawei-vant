<template>
  <div class="lineChart">
    <div id="lineChart" style="width: 100%; height: 250px"></div>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      // 所有配置
      type: Object,
      default: null
    },
    // 图的label
    label: {
      type: Array,
      default: function() {
        return []
      }
    },
    // x轴的label
    xLabel: {
      type: Array,
      default: function() {
        return []
      }
    },
    // x轴的名字
    xName: {
      type: String,
      default: ''
    },
    // y轴的名字
    yName: {
      type: String,
      default: ''
    },
    // 第一条线的名字
    dataName1: {
      type: String,
      default: ''
    },
    // 第一条线的数据
    data1: {
      type: Array,
      default: function() {
        return []
      }
    },
    // 第二条线的名字
    dataName2: {
      type: String,
      default: ''
    },
    // 第二条线的数据
    data2: {
      type: Array,
      default: function() {
        return []
      }
    },
    // 第三条线的名字
    dataName3: {
      type: String,
      default: ''
    },
    // 第三条线的数据
    data3: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('lineChart'))
      let option = null
      if (this.option) {
        option = this.option
      } else {
        option = {
          // 提示工具
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line',
              lineStyle: {
                width: '2', // 鼠标图上去数据显示的那条线的样式
                color: {
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(91,179,252,0)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(91,179,252,0.2)' // 100% 处的颜色
                    }
                  ]
                }
              }
            }
          },
          // label
          legend: {
            data: this.label,
            icon: 'circle', //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
            itemWidth: 10, // 设置宽度
            itemHeight: 10, // 设置高度
            itemGap: 40 // 设置间距
          },
          xAxis: [
            {
              type: 'category',
              name: this.xName,
              nameTextStyle: {
                // 设置坐标轴名字样式
                padding: [-30, 0, -10, -15]
              },
              boundaryGap: false,
              data: this.xLabel,
              axisLine: {
                // 线
                show: true,
                symbol: ['none', 'arrow'],
                symbolSize: [5, 8],
                lineStyle: {
                  // 设置坐标轴线的颜色
                  color: 'rgb(147,147,149)'
                }
              },
              axisTick: {
                show: false // 不显示刻度线
              },
              axisLabel: {
                // 设置很坐标label样式
                textStyle: {
                  // 设置文本样式
                  color: '#3D3D3E',
                  fontSize: '13'
                },
                padding: [0, 0, 0, 25] // 设置文本离轴的padding
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: this.yName,
              nameTextStyle: {
                // 设置坐标轴名字样式
                padding: [0, -25, -10, 0]
              },
              axisLine: {
                // 线
                show: true,
                symbol: ['none', 'arrow'], // 设置箭头方向
                symbolSize: [5, 8], // 设置箭头大小
                lineStyle: {
                  // 设置坐标轴线的颜色
                  color: 'rgb(147,147,149)'
                }
              },
              axisTick: {
                // 刻度
                show: false
              },

              axisLabel: {
                // 设置很坐标label样式
                textStyle: {
                  color: '#3D3D3E',
                  fontSize: '13'
                }
              },
              splitLine: { show: false } // 去掉Y轴分割线
            }
          ],
          series: [
            {
              name: this.dataName1,
              type: 'line',
              symbol: 'none', // 去掉线上的小圆点
              areaStyle: {
                // 设置填充渐变色
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#7373D0'
                    },
                    {
                      offset: 1,
                      color: '#fff'
                    }
                  ])
                }
              },
              data: this.data1,
              smooth: true, // 设置线的平滑度

              itemStyle: {
                normal: {
                  color: 'rgba(104,104,205,0.8)', // 设置覆盖颜色
                  label: {
                    show: false, // 显示值
                    // position: "top", //值在上方显示
                    textStyle: {
                      color: '#585859', // 值得颜色
                      fontWeight: 400
                    }
                  }
                }
              }
            },

            {
              name: this.dataName2,
              type: 'line',
              symbol: 'none', // 去掉线上的小圆点
              // stack: "总量",
              areaStyle: {
                // 设置渐变颜色
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#39DCD9'
                    },
                    {
                      offset: 1,
                      color: '#fff'
                    }
                  ])
                }
              },
              data: this.data2,
              smooth: true,

              itemStyle: {
                normal: {
                  color: 'rgba(28,217,211,0.8)', // 设置覆盖颜色
                  label: {
                    show: false, // 显示值
                    // position: "top", //值在上方显示
                    textStyle: {
                      color: '#585859', // 值得颜色
                      fontWeight: 400
                    }
                  }
                }
              }
            },
            {
              name: this.dataName3,
              symbol: 'none', // 去掉线上的小圆点
              type: 'line',
              // stack: "总量",//堆叠
              areaStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#1A9DD5'
                    },
                    {
                      offset: 1,
                      color: '#fff'
                    }
                  ])
                }
              },
              data: this.data3,
              smooth: true,
              itemStyle: {
                normal: {
                  color: 'rgba(49,163,212,1)', // 设置覆盖颜色
                  label: {
                    show: false, // 显示值
                    // position: "top", //值在上方显示
                    textStyle: {
                      color: '#585859', // 值得颜色
                      fontWeight: 400
                    }
                  }
                }
              }
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
