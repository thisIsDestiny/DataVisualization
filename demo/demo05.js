$(function () {

    initTimer()

    initChart()

    initBtn()
})

var myChart
var option = {
    title: {
        text: '异步数据加载示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: []
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: []
    }]
}

function initChart() {

    myChart = echarts.init(document.getElementById('main'));

    // 显示标题，图例和空的坐标轴
    myChart.setOption(option);

}

function initBtn(){

    $("#request").click(function () {

        requestData(true)
    })
}

var url = "http://localhost:80/EcharsDemo/NewDataServlet"

function initTimer(){

    window.setInterval(function () {

        requestData(false)

    },1000)
}

function requestData(isShowLoading){

    if(isShowLoading)myChart.showLoading();

    $.get(url,null,function (data,status) {

        var array = JSON.parse(data)

        console.log(option)
        $.each(array,function (idx) {
             option.series[0].data.push(array[idx])
        })

        myChart.setOption(option);

        if(isShowLoading)myChart.hideLoading();
    })
}

