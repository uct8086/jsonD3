option = {
    title: {
        text: '多雷达图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        left: 'center',
        data: [ '降水量', '蒸发量']
    },
    name : {
        formatter:function(a,b){ // b是所有对象
            return a + "\n" + a;
        },
        textStyle: {color:'red'}
    },
    radar: [
        {
            indicator: (function (){
                var res = [];
                for (var i = 1; i <= 12; i++) {
                    if(i == 1){
                        res.push({name:i, axisLabel: {show: true, fontSize: 8, color: '#A5A5A5', align: 'center'}, color:'#888f9b'});
                        continue;
                    }
                    res.push({name: i, max: 100, color: '#888F9B'});
                }
                return res;
            })(),
            axisLine:{
                show: true,
                lineStyle:{
                    color: '#C8C8C8',
                    opacity:0.3
                },
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color: '#C8C8C8',
                    opacity:0.3
                }
            },
            splitArea:{
                show: true,
                areaStyle:{
                    color: '#fff'
                }
            },
            radius: 150
        }
    ],
    series: [
        
        {
            type: 'radar',
            radarIndex: 0,
            areaStyle: {
                
            },
            data: [
                {
                    name: '降水量',
                    value: [20, 21,33, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8,23, 43],
                    areaStyle: {
                        color: "#4D8FFF",
                        opacity: .2
                    },
                    lineStyle:{
                        width: 1,
                        color: "#4D8FFF",
                        opacity: 1,
                    },
                    symbol:'circle',
                    itemStyle:{
                        color: "#4D8FFF",
                        opacity:1
                    }
                },
                {
                    name: '蒸发量',
                    value: [44, 33, 44, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 11, 22],
                    areaStyle: {
                        color: "#8AE3C0",
                        opacity:.2
                    },
                    lineStyle:{
                        width: 1,
                        color: "#8AE3C0",
                        opacity: 1,
                    },
                    symbol:'circle',
                    itemStyle:{
                        color: "#8AE3C0",
                    }
                }
            ]
        }
    ]
};
