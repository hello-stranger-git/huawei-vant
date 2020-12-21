/** @type {HTMLCanvasElement} */
class BarCanvas {
  // 初始化,获得canvas元素
  init (ele) {
    this.ele = ele
    this.ctx = this.ele.getContext('2d')
    this.setRatio()
    // canvas的高和宽
    this.ctxH = this.ele.height
    this.ctxW = this.ele.width

    // 图形内边距
    this.cPadding = 58
    // 纵坐标长度
    this.yAxisH = this.ctxH - this.cPadding * 2
    // 横坐标长度
    this.xAxisW = this.ctxW - this.cPadding * 2
    // 横轴坐标原点
    this.originX = this.cPadding
    // 纵坐标原点
    this.originY = this.ctxH - this.cPadding
  }

  // 解决模糊
  setRatio () {
    const device = window.devicePixelRatio || 1
    const canDevice = this.ctx.backingStorePixelRatio || 1
    const ratio = device / canDevice
    const oldW = this.ele.width
    const oldH = this.ele.height
    this.ele.width = ratio * oldW
    this.ele.height = ratio * oldH
    this.ele.style.width = oldW + 'px'
    this.ele.style.height = oldH + 'px'
  }

  // 画横线，x,y为开始坐标，x2,y2为结束坐标,color为线的颜色,width为线的宽度,虚线的宽窄
  drawLine (x, y, x2, y2, color, width, dash) {
    this.ctx.beginPath()
    if (dash) {
      this.ctx.setLineDash([dash])
    }
    this.ctx.strokeStyle = color
    this.ctx.lineWidth = width
    this.ctx.moveTo(x, y)
    this.ctx.lineTo(x2, y2)
    this.ctx.stroke()
    this.ctx.closePath()
  }

  // 画图
  draw () {
    this.ctx.translate(0.5, 0.5)// 把 canvas的坐标原点 设置到 0.5,0.5的位置；// 解决 线模糊的问题
    // 画第一条y轴
    if (this.option.yAxis[0].axisLine.show) {
      this.drawLine(this.originX, this.originY, this.originX, this.cPadding, '#000', 1, false)
    }
    // 画第二条y轴
    if (this.option.yAxis[1].axisLine.show) {
      this.drawLine(this.ctxW - this.cPadding, this.originY, this.ctxW - this.cPadding, this.cPadding, '#000', 1, false)
    }
    // 显示第二条纵轴的label
    if (this.option.yAxis[1].axisLabelShow) {
      this.ctx.save()
      this.ctx.fillStyle = '#565656'
      this.ctx.font = '20px Arial'
      this.ctx.fillText(this.option.yAxis[1].name, this.ctxW - this.cPadding * 2 + 80, this.cPadding + 4)
      this.ctx.restore()
    }
    // 画x轴
    if (this.option.xAxis[0].axisLine.show) {
      this.drawLine(this.originX, this.originY, this.ctxW - this.cPadding, this.originY, '#000', 1, false)
    }
    // 画刻度
    this.drawMarker()

    this.ctx.translate(-0.5, -0.5)
  }

  // 格式化数据
  format (value) {
    return (value + '').substr(0, 3) + 'W'
  }

  // 画刻度
  drawMarker () {
    // 画第一条y轴刻度
    // 平均每个刻度的长度
    this.ctx.save()
    const oneValuey = this.yAxisH / this.yAxisNum
    this.ctx.textAlign = 'right'
    for (let i = 0; i < this.yAxisNum; i++) {
      this.ctx.font = '20px Arial'
      this.ctx.fillText(this.option.yAxis[0].axisLabel[i], this.originX - 10, this.originY - oneValuey * i + 3)
      if (i > 0) {
        // 画刻度
        if (this.option.yAxis[0].axisTick.show) {
          this.drawLine(this.originX, this.originY - oneValuey * i, this.originX - 5, this.originY - oneValuey * i, '#000', 1, false)
        }
        // 画线

        if (this.option.yAxis[0].splitLine.show) {
          this.drawLine(this.originX, this.originY - oneValuey * i, this.ctxW - this.cPadding, this.originY - oneValuey * i, '#000', 1, this.option.yAxis[0].splitLine.dash)
        }
      }
    }
    this.ctx.restore()
    // 画第二条y轴刻度
    // 平均每个刻度的长度
    this.ctx.save()
    this.ctx.font = '400 10 PingFang SC #565656'
    this.ctx.textAlign = 'left'
    this.ctx.font = '20px Arial'
    for (let i = 0; i < this.yAxisNum; i++) {
      const label = this.format(this.option.yAxis[1].axisLabel[i])
      this.ctx.fillText(label, this.ctxW - this.cPadding + 5, this.originY - oneValuey * i + 3)
      if (i > 0) {
        // 画刻度
        if (this.option.yAxis[1].axisTick.show) {
          this.drawLine(this.ctxW - this.cPadding, this.originY - oneValuey * i, this.ctxW - this.cPadding + 5, this.originY - oneValuey * i, '#000', 1, false)
        }
        // 画线

        if (this.option.yAxis[1].splitLine.show) {
          this.drawLine(this.originX, this.originY - oneValuey * i, this.ctxW - this.cPadding, this.originY - oneValuey * i, '#000', 1, this.option.yAxis[0].splitLine.dash)
        }
      }
    }
    this.ctx.restore()

    // 画x轴刻度
    this.ctx.save()
    // 平均每一个x刻度的宽度
    const oneValuex = this.xAxisW / this.xAxisNum

    this.ctx.textAlign = 'left'
    this.ctx.font = '20px Arial'
    for (let i = 0; i < this.xAxisNum; i++) {
      this.ctx.fillText(this.option.xAxis[0].axisLabel[i], this.originX + oneValuex * i + oneValuex / 2, this.originY + 25)
      // 添加人数
      this.ctx.fillText('(人数)', this.cPadding - 50, this.originY + 55)
      this.ctx.fillText(this.option.xAxis[0].otherLabel[i], this.originX + oneValuex * i + oneValuex / 2, this.originY + 55)
      if (i > 0) {
        if (this.option.xAxis[0].axisTick.show) {
          this.drawLine(this.originX + oneValuex * i, this.originY, this.originX + oneValuex * i, this.originY + 5, '#000', 1, false)
        }
      }
    }
    this.ctx.restore()
  }

  // 画矩形
  drawReact (x, y, w, h, color) {
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.rect(x, y, w, h)
    this.ctx.fillStyle = color
    this.ctx.fill()
    this.ctx.closePath()
    this.ctx.restore()
  }

  // 画柱状图
  drawBar () {
    // 平均每一个x刻度的宽度
    const oneValuex = this.xAxisW / this.xAxisNum
    const barWidth = oneValuex / 4

    // 画第一条柱状图
    for (let i = 0; i < this.xAxisNum; i++) {
      this.animation()
      const barHeight = this.option.series[0].data[i] * this.yAxisH / 600 * (this.count / 10000)
      const x = this.originX + oneValuex * i + barWidth
      const y = this.originY - barHeight
      const color = '#F8C498'
      this.ctx.strokeStyle = '#F1835B'
      this.ctx.textAlign = 'center'
      this.ctx.save()
      this.ctx.fillStyle = '#F1835B'
      this.ctx.font = '20px Arial'
      this.ctx.fillText(this.option.series[0].data[i], x + 20, y - 2)
      this.ctx.restore()
      this.ctx.restore()
      this.drawReact(x, y, barWidth, barHeight, color)
    }
    // 画第二条柱状图
    for (let i = 0; i < this.xAxisNum; i++) {
      const barHeight = this.option.series[1].data[i] * this.yAxisH / 6000000 * (this.count / 10000)
      const x = this.originX + oneValuex * i + barWidth * 2
      const y = this.originY - barHeight
      const color = '#56BE9B'
      this.ctx.save()
      this.drawReact(x, y, barWidth, barHeight, color)
      this.ctx.restore()
    }
    // 画第三条虚线
    for (let i = 0; i < this.xAxisNum; i++) {
      const barHeight = this.option.series[2].data[i] * this.yAxisH / 600 * (this.count / 10000)
      const x = this.originX + oneValuex * i
      const y = this.originY - barHeight
      const color = '#E60012'
      this.ctx.textAlign = 'center'
      this.ctx.beginPath()
      this.ctx.save()
      this.ctx.fillStyle = '#E60012'
      this.ctx.font = '20px Arial'
      this.ctx.fillText(this.option.series[2].data[i], x + 45, y - 8)
      this.ctx.restore()
      this.drawLine(x + 10, y, x + barWidth * 4, y, color, 1, 3)
      this.ctx.closePath()
    }
  }

  drawArc (x, y, r, sAngle, eAngle, color) {
    this.ctx.beginPath()
    this.ctx.save()
    this.ctx.arc(x, y, r, Math.PI * sAngle, Math.PI * eAngle)
    this.ctx.fillStyle = color
    this.ctx.fill()
    this.ctx.restore()
    this.ctx.closePath()
  }

  // 画柱状图标题
  drawLegend () {
    for (let i = 0; i < this.option.legend.data.length; i++) {
      this.drawArc(this.xAxisW / 2 + i * 150, this.cPadding, 15, 0, 2, this.option.legend.color[i])
      this.ctx.save()
      this.ctx.font = '12px Arial'
      this.ctx.fillStyle = '#565656'
      this.ctx.font = '20px Arial'
      this.ctx.fillText(this.option.legend.data[i], this.xAxisW / 2 + 80 + i * 160, this.cPadding + 6)
      this.ctx.restore()
    }
  }

  setOption (option) {
    this.option = option
    this.count = 0
    // y轴分的段数
    this.yAxisNum = 6
    // x轴分的段数
    this.xAxisNum = this.option.xAxis[0].axisLabel.length
    this.animation()
  }

  animation () {
    requestAnimationFrame(() => {
      this.count += 10
      if (this.count <= 10000) {
        this.ctx.clearRect(0, 0, this.ele.width, this.ele.height)

        this.draw()
        // 画柱状图
        this.drawBar()
        // 画柱状图标题
        this.drawLegend()
      } else {
        this.count = 10000
      }
    })
  }
}
export default new BarCanvas()
