/* ------------------------------------------------------------------------------
 *
 *  # Echarts - chart combinations
 *
 *  Chart combination configurations
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */

$(function () {

    // Set paths
    // ------------------------------

    require.config({
        paths: {
            echarts: 'assets/js/plugins/visualization/echarts'
        }
    });



    // Configuration
    // ------------------------------

    require(

        // Add necessary charts
        [
          'echarts',
          'echarts/theme/limitless',
          'echarts/chart/line',
          'echarts/chart/bar',
          'echarts/chart/pie',


          'echarts/chart/scatter',
          'echarts/chart/k',
          'echarts/chart/radar',
          'echarts/chart/gauge'
        ],


        // Charts setup
        function (ec, limitless) {


            // Initialize charts
            // ------------------------------

            // var line_bar = ec.init(document.getElementById('line_bar'), limitless);
            var column_pie = ec.init(document.getElementById('column_pie'), limitless);
            // var scatter_pie = ec.init(document.getElementById('scatter_pie'), limitless);
            // var scatter_line = ec.init(document.getElementById('scatter_line'), limitless);
            //
            var connect_pie = ec.init(document.getElementById('connect_pie'), limitless);
            var connect_column = ec.init(document.getElementById('connect_column'), limitless);
            //
            // var candlestick_scatter = ec.init(document.getElementById('candlestick_scatter'), limitless);



            // Charts options
            // ------------------------------
            //
            // Column and pie connection
            //

            // Pie options
            connect_pie_options = {

                // Add title
                title: {
                    text: 'Browser popularity',
                    subtext: 'Open source data',
                    x: 'center'
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['Internet Explorer','Opera','Safari','Firefox','Chrome']
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [{
                    name: 'Browser',
                    type: 'pie',
                    radius: '75%',
                    center: ['50%', '57.5%'],
                    data: [
                        {value: 335, name: 'Internet Explorer'},
                        {value: 310, name: 'Opera'},
                        {value: 234, name: 'Safari'},
                        {value: 135, name: 'Firefox'},
                        {value: 1548, name: 'Chrome'}
                    ]
                }]
            };

            // Column options
            connect_column_options = {

                // Setup grid
                grid: {
                    x: 40,
                    x2: 47,
                    y: 35,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                // Add legend
                legend: {
                    data: ['Internet Explorer','Opera','Safari','Firefox','Chrome']
                },

                // Add toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    x: 'right',
                    y: 35,
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        magicType: {
                            show: true,
                            title: {
                                line: 'Switch to line chart',
                                bar: 'Switch to bar chart',
                                stack: 'Switch to stack',
                                tiled: 'Switch to tiled'
                            },
                            type: ['line', 'bar', 'stack', 'tiled']
                        },
                        restore: {
                            show: true,
                            title: 'Restore'
                        },
                        saveAsImage: {
                            show: true,
                            title: 'Same as image',
                            lang: ['Save']
                        }
                    }
                },

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    splitArea: {show: true}
                }],

                // Add series
                series: [
                    {
                        name: 'Internet Explorer',
                        type: 'bar',
                        stack: 'Total',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'Opera',
                        type: 'bar',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Safari',
                        type: 'bar',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Firefox',
                        type: 'bar',
                        stack: 'Total',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'Chrome',
                        type: 'bar',
                        stack: 'Total',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };

            // Connect charts
            connect_pie.connect(connect_column);
            connect_column.connect(connect_pie);


            //
            // Column and pie combination
            //

            column_pie_options = {

                // Setup grid
                grid: {
                    x: 10,
                    x2: 45,
                    y: 35,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Enable drag recalculate
                calculable: true,

                // Add legend
                legend: {
                    data: ['Direct','Email','Print','Video','Search engine','Google','Bing','Yahoo','Other']
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    splitLine: {show: false},
                    data: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    position: 'right'
                }],

                // Add series
                series: [
                    {
                        name: 'Direct',
                        type: 'bar',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'Email',
                        type: 'bar',
                        tooltip: {trigger: 'item'},
                        stack: 'Advertisement',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Print',
                        type: 'bar',
                        tooltip: {trigger: 'item'},
                        stack: 'Advertisement',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Video',
                        type: 'bar',
                        tooltip: {trigger: 'item'},
                        stack: 'Advertisement',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'Search engine',
                        type: 'line',
                        data: [862, 1018, 964, 1026, 1679, 1600, 1570]
                    },

                    // Pie
                    {
                        name: 'Search engine',
                        type: 'pie',
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b}: {c} ({d}%)'
                        },
                        center: [150, 130],
                        radius: [0, 65],
                        itemStyle:　{
                            normal: {
                                labelLine: {
                                    length: 20
                                }
                            }
                        },
                        data: [
                            {value: 1048, name: 'Google'},
                            {value: 251, name: 'Bing'},
                            {value: 147, name: 'Yahoo'},
                            {value: 102, name: 'Other'}
                        ]
                    }
                ]
            };







            // Apply options
            // ------------------------------

            connect_pie.setOption(connect_pie_options);
            connect_column.setOption(connect_column_options);
            column_pie.setOption(column_pie_options);



            // Resize charts
            // ------------------------------

            window.onresize = function () {
                setTimeout(function (){
                    connect_pie.resize();
                    connect_column.resize();
                    column_pie.resize();
                }, 200);
            }
        }
    );
});