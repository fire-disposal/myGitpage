export var option = {
  dataset: {
    source: [
      ["年份", "计算机科学", "物理学", "化学", "生物学"],
      ["2018", 200, 120, 80, 140],
      ["2019", 150, 190, 130, 110],
      ["2020", 180, 110, 160, 170],
      ["2021", 210, 240, 100, 90],
    ],
  },
  title: {
    text: '不同领域文献发文量',
    left: 'center',  // 标题居中
    top: '10',  // 标题放在顶部
  },
  legend: {
    orient: 'horizontal',
    left: 'center',  // 图例居中
    bottom: 10,  // 图例放在底部
    data: ["计算机科学", "物理学", "化学", "生物学"],
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: "category",
    data: ["2018", "2019", "2020", "2021"],
    axisPointer: {
      type: "shadow",
    },
    axisLabel: {},
  },
  yAxis: {
    type: "value",
    name: "发文量",
  },
  grid: {
    left: '10%',  // 左边距
    right: '10%',  // 右边距
    bottom: '15%',  // 下边距
    top: '20%',  // 上边距
    containLabel: true,  // 包含标签
  },
  series: [
    {
      type: "line",
      name: "计算机科学",
      encode: {
        x: "年份",
        y: "计算机科学",
      },
    },
    {
      type: "line",
      name: "物理学",
      encode: {
        x: "年份",
        y: "物理学",
      },
    },
    {
      type: "line",
      name: "化学",
      encode: {
        x: "年份",
        y: "化学",
      },
    },
    {
      type: "line",
      name: "生物学",
      encode: {
        x: "年份",
        y: "生物学",
      },
    },
  ],
  toolbox: {
    feature: {
      restore: {},
      saveAsImage: {}
    }
  },
};
