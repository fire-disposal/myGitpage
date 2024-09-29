export const option = {
  title: {
      text: 'Sankey Diagram Example',
      left: 'center'
  },
  tooltip: {
      trigger: 'item',
      formatter: function (params) {
          if (params.data.value) {
              return `${params.data.source} -> ${params.data.target}<br />流量: ${params.data.value}`;
          }
          return `${params.name}`;
      }
  },
  series: {
      type: "sankey",
      layout: "none",
      emphasis: {
          focus: "adjacency",
      },
      data: [
          { name: 'A' },
          { name: 'B' },
          { name: 'C' },
          { name: 'D' }
      ],
      links: [
          { source: 'A', target: 'B', value: 10 },
          { source: 'A', target: 'C', value: 15 },
          { source: 'B', target: 'D', value: 10 },
          { source: 'C', target: 'D', value: 5 }
      ],
      itemStyle: {
          borderColor: '#aaa',
          borderWidth: 1,
      },
      lineStyle: {
          color: 'source',
          curveness: 0.5
      }
  },
  backgroundColor: '#f4f4f4', // 背景颜色
  toolbox: {
      show: true,
      feature: {
          saveAsImage: { // 保存为图片功能
              title: '保存为图片',
              type: 'png',
              name: 'sankey-diagram'
          },
          restore: { // 恢复默认视图
              title: '恢复'
          },
          dataView: { // 数据视图
              readOnly: true
          }
      }
  }
};
