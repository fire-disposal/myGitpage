var Chart2 = echarts.init(document.getElementById("main2"));

var option2 = {
  legend: {
    width: 350,
    left: 0,
    top:0,
  },
  tooltip: {},
  dataset: {
    source: [
      ["product", "2012", "2013", "2014", "2015"],
      ["Matcha Latte", 41.1, 30.4, 65.1, 53.3],
      ["Milk Tea", 86.5, 92.1, 85.7, 83.1],
      ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4],
    ],
  },
  xAxis: [
    {
      type: "category",
      gridIndex: 0,
    },
    {
      type: "category",
      gridIndex: 1,
    },
  ],
  yAxis: [
    {
      gridIndex: 0,
    },
    {
      gridIndex: 1,
    },
  ],
  grid: [
    {
	  top : "20%",
      bottom: "50%",
    },
    {
      top: "60%",
	  bottom: "10%",
    },
  ],
  series: [
    {
      type: "bar",
      seriesLayoutBy: "row",
    },
    {
      type: "bar",
      seriesLayoutBy: "row",
    },
    {
      type: "bar",
      seriesLayoutBy: "row",
    },
    {
      type: "bar",
      xAxisIndex: 1,
      yAxisIndex: 1,
    },
    {
      type: "bar",
      xAxisIndex: 1,
      yAxisIndex: 1,
    },
    {
      type: "bar",
      xAxisIndex: 1,
      yAxisIndex: 1,
    },
    {
      type: "bar",
      xAxisIndex: 1,
      yAxisIndex: 1,
    },
  ],
};

Chart2.setOption(option2);