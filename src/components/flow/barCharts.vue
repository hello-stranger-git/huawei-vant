<template>
  <div class="barCharts">
    <div id="barCharts" style="width: 100%;height: 350px;"></div>
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
    // 第一条y轴的名字
    yName1: {
      type: String,
      default: ''
    },
    // 第二条y轴的名字
    yName2: {
      type: String,
      default: ''
    },
    // 第一条柱状图的名字
    dataName1: {
      type: String,
      default: ''
    },
    // 第一条柱状图的数据
    data1: {
      type: Array,
      default: function() {
        return []
      }
    },
    // 第二条柱状图的名字
    dataName2: {
      type: String,
      default: ''
    },
    // 第二条柱状图的数据
    data2: {
      type: Array,
      default: function() {
        return []
      }
    },
    // 第三条条柱状图的名字
    dataName3: {
      type: String,
      default: ''
    },
    // 第三条柱状图的数据
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
      const myChart = this.$echarts.init(document.getElementById('barCharts'))
      let option = null
      if (this.option) {
        option = this.option
      } else {
        // 指定图表的配置项和数据
        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          legend: {
            data: this.label, // 轴代表的数据label
            right: 25, // 偏移
            top: 10,
            icon: 'circle', //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
            itemWidth: 10, // 设置宽度
            itemHeight: 10, // 设置高度
            itemGap: 20 // 设置间距
          },
          xAxis: [
            {
              type: 'category',
              data: this.xLabel,
              name: this.xName,
              axisLine: {
                lineStyle: {
                  // 设置坐标轴线的颜色
                  color: '#707070'
                }
              },
              axisPointer: {
                type: 'shadow'
              },
              axisTick: {
                // 刻度
                show: false // 不显示刻度线
              },
              splitLine: { show: false } // 去除网格分割线
            }
          ],

          yAxis: [
            {
              type: 'value',
              name: this.yName1,
              min: 0,
              max: 1500,
              interval: 500,
              nameTextStyle: {
                padding: [0, 15, 0, 0]
              },
              axisLabel: {
                formatter: function(value) {
                  const val = value + ''
                  if (val.length > 3) {
                    return val.substr(0, 1) + ',' + val.substr(1)
                  } else {
                    return val
                  }
                },
                textStyle: {
                  color: '#565656',
                  opacity: '0.5',
                  fontSize: '10'
                },
                margin: 4
              },
              axisLine: {
                // 线
                show: false
              },
              axisTick: {
                // 刻度
                show: false
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: '#70707099',
                  type: 'dashed'
                }
              }
            }
          ],
          series: [
            {
              name: this.dataName1,
              showBackground: true,
              type: 'bar',
              data: this.data1,
              itemStyle: {
                normal: {
                  color: '#FF8181', // 设置柱子颜色
                  label: {
                    show: false, // 柱子上显示值
                    position: 'top', // 值在柱子上方显示
                    textStyle: {
                      color: '#f1835b80', // 值得颜色
                      fontSize: '9px'
                    },
                    formatter: function(value) {
                      const val = value.data + ''
                      if (val.length > 3) {
                        return (
                          '￥' +
                          val.substr(0, val.length - 3) +
                          ',' +
                          val.substr(val.length - 3)
                        )
                      } else {
                        return '￥' + val
                      }
                    }
                  }
                }
              },
              barWidth: 8 // 设置柱子宽度，单位为px
            },

            {
              name: this.dataName2,
              showBackground: true,
              type: 'bar',
              data: this.data2,
              itemStyle: {
                normal: {
                  color: '#56BE9B', // 设置柱子颜色
                  label: {
                    show: true, // 柱子上显示值
                    position: 'top', // 值在柱子上方显示
                    textStyle: {
                      color: '#343434', // 值得颜色
                      fontSize: '14px'
                    }
                  }
                }
              },
              barWidth: 8 // 设置柱子宽度，单位为px
            },

            {
              name: this.dataName3,
              type: 'bar',

              showBackground: true,
              data: this.data3,
              itemStyle: {
                normal: {
                  color: '#F8C498', // 设置柱子颜色
                  label: {
                    show: false, // 柱子上显示值
                    position: 'top', // 值在柱子上方显示
                    textStyle: {
                      color: '#B82B43' // 值得颜色
                    }
                  }
                }
              },
              barWidth: 8 // 设置柱子宽度，单位为px
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

<style lang="less" scoped>
.barCharts {
  height: 300px;
}
</style>
