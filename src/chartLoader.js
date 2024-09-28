//chartLoader.js 挂载并初始化图表。
import './style.css';
import * as echarts from 'echarts';

import { option as option1 } from ".//options/chart1.js"; // 命名导入并赋予别名
import { option as option2 } from ".//options/chart2.js";
import { option as option3 } from ".//options/chart3.js";


window.onload = function () {
	var Chart1 = echarts.init(document.getElementById("main1"));
    Chart1.setOption(option1);
    
	var Chart2 = echarts.init(document.getElementById("main2"));
	Chart2.setOption(option2);

	var Chart3 = echarts.init(document.getElementById("main3"));
	Chart3.setOption(option3);
};
