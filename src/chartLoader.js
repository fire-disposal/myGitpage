// chartLoader.js - 挂载并初始化图表。
import "./style.css";
import * as echarts from "echarts";
import { fieldData, set1, set2, set3 } from "./Data.js";

// 导入所有图表选项的函数
const importAllChartOptions = (context) => {
	const optionsList = {};
	context.keys().forEach((key) => {
		const optionName = key.replace("./", "").replace(".js", "");
		optionsList[optionName] = context(key).option;
	});
	return optionsList;
};

// 获取所有图表的选项列表
const chartOptions = importAllChartOptions(
	require.context("./chartOptions", false, /\.js$/)
);

// DOM内容加载完成后执行的函数
document.addEventListener("DOMContentLoaded", () => {
	//-----------------------------初始化-----------------------------//

	const initializeChart = (chartInstance, chartOption, chartId) => {
		try {
			chartInstance.setOption(chartOption);
		} catch (error) {
			alert(`初始化图表 ${chartId} 失败: ${error.message}`);
		}
	};

	// 初始化表一
	const chartInstance1 = echarts.init(document.getElementById("main1"));
	chartInstance1.setOption(chartOptions.chart1_1);
	const initialMatchingText = fieldData["1"];
	document.getElementById("textarea1").value = initialMatchingText;

	// 初始化表二
	const chartInstance2 = echarts.init(document.getElementById("main2"));
	chartInstance2.setOption(chartOptions.chart2_1);

	// 初始化表三
	const chartInstance3 = echarts.init(document.getElementById("main3"));
	chartInstance3.setOption(chartOptions.chart3_1);

	//-----------------------------下拉监听-----------------------------//

	// 表一下拉
	document.getElementById("select1").addEventListener("change", function () {
		const selectedValue = this.value;
		const ci = chartInstance1;
		// 刷新图表 更新文本
		switch (selectedValue) {
			case "1":
				ci.clear();
				ci.setOption(chartOptions.chart1_1);
				document.getElementById("textarea1").value = fieldData["1"];
				break;
			case "2":
				ci.clear();
				ci.setOption(chartOptions.chart1_2);
				document.getElementById("textarea1").value = fieldData["2"];
				break;
			case "3":
				ci.clear();
				ci.setOption(chartOptions.chart1_3);
				document.getElementById("textarea1").value = fieldData["3"];
				break;
		}
	});

	//表二下拉
	document.getElementById("select2").addEventListener("change", function () {
		const selectedValue = this.value;
		const ci = chartInstance2;
		//折线图、柱状图切换
		const currentOption = ci.getOption(); // 获取当前选项对象
		switch (selectedValue) {
			case "1":
				currentOption.series.forEach(function (series) {
					series.type = "line";
					series.stack = undefined;
					series.areaStyle = undefined;
				});
				ci.setOption(currentOption);
				break;
			case "2":
				currentOption.series.forEach(function (series) {
					series.type = "bar";
					series.stack = undefined;
					series.areaStyle = undefined;
				});
				ci.setOption(currentOption);
				break;
			case "3": // 切换为堆叠图
				currentOption.series.forEach(function (series) {
					series.type = "bar";
					series.stack = "total";
				});
				ci.setOption(currentOption);
				break;
			case "4": // 切换到面积堆叠
				currentOption.series.forEach(function (series) {
					series.type = "line";
					series.stack = "total";
					series.areaStyle = {};
				});
				ci.setOption(currentOption);
				break;
		}
	});

	//表三下拉
	document.getElementById("select3").addEventListener("change", function () {
		const selectedValue = this.value;
		const ci = chartInstance3; // 将chartInstance3赋给ci
		const currentOption = ci.getOption(); // 获取当前选项对象
		//可能是1,2,3,4
		switch (selectedValue) {
			case "1":
				currentOption.series[0].data = set1.data;
				currentOption.series[0].links = set1.links;
				ci.setOption(currentOption);
				break;
			case "2":
				currentOption.series[0].data = set2.data;
				currentOption.series[0].links = set2.links;
				ci.setOption(currentOption);
				break;
			case "3":
				currentOption.series[0].data = set3.data;
				currentOption.series[0].links = set3.links;
				ci.setOption(currentOption);
				break;
		}
	});
});
