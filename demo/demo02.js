$(function () {

    initChart()
})

function initChart() {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    myChart.setOption({
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                roseType: 'angle',
                data:[
                    {
                        value:35,
                        name:'普通及鼠标悬浮下背景阴影',
                        itemStyle: {
                            // 阴影的大小
                            shadowBlur: 200,
                            // 阴影水平方向上的偏移
                            shadowOffsetX: 0,
                            // 阴影垂直方向上的偏移
                            shadowOffsetY: 0,
                            // 阴影颜色
                            shadowColor: 'rgba(0, 0, 0, 1)',
                            //鼠标覆盖高亮样式
                            emphasis: {
                                shadowBlur: 200,
                                shadowColor: 'rgba(200, 200, 0, 1)'
                            }
                        }
                    },
                    {
                        value:40,
                        name:'自定义标签样式',
                        //标签样式
                        label: {
                            //字体样式
                            textStyle: {
                                color: 'rgba(0, 200, 0, 0.3)'
                            }
                        },
                        //文本指示线样式
                        labelLine: {
                            //指示线样式
                            lineStyle: {
                                color: 'rgba(200, 0, 0, 0.3)'
                            }
                        }
                    },
                    {
                        value:45,
                        name:'扇形的颜色',
                        // 设置扇形的颜色
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    {
                        value:50,
                        name:'搜索引擎'
                    },

                ],
                visualMap: {
                    // 不显示 visualMap 组件，只用于明暗度的映射
                    show: true,
                    // 映射的最小值为 80
                    min: 35,
                    // 映射的最大值为 600
                    max: 50,
                    inRange: {
                        // 明暗度的范围是 0 到 1
                        colorLightness: [0, 1]
                    }
                }
            }
        ]
    })
}


