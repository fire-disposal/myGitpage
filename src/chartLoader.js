// chartLoader.js - 挂载并初始化图表。
import "./style.css";
import * as echarts from "echarts";
import { fieldData } from "./Data.js";
//导入文件为对象
const importAll = (r) => {
	let optionslist = {};
	r.keys().forEach((key) => {
		const optionName = key.replace("./", "").replace(".js", ""); // 获取文件名作为选项名
		optionslist[optionName] = r(key).option; // 修复了这里的变量名
	});
	return optionslist;
};

const optionsList = importAll(require.context("./chartList", false, /\.js$/)); // 导入所有选项

document.addEventListener("DOMContentLoaded", function () {
	// 初始化并挂载图表
	var ChartInstance1 = echarts.init(document.getElementById("main1"));
	ChartInstance1.setOption(optionsList.chart1_1); // 修复了这里的变量名

	var ChartInstance2 = echarts.init(document.getElementById("main2"));
	ChartInstance2.setOption(optionsList.chart2_1[2018]); // 修复了这里的变量名

	//初始化文本区域
	const matchingText = fieldData["chart1_1"] || ""; // 从fieldData中获取描述文本
	document.getElementById("textarea1").value = matchingText; // 将匹配的文本写入textarea

	// 监听下拉选框变化，更新图表
	document.getElementById("select1").addEventListener("change", function () {
		ChartInstance1.clear(); // 清空 chart1
		ChartInstance1.setOption(optionsList[this.value]); // 修复了这里的访问方式

		// 根据选择项写入匹配的文本到textarea
		const matchingText = fieldData[this.value] || ""; // 从fieldData中获取描述文本
		document.getElementById("textarea1").value = matchingText; // 将匹配的文本写入textarea
	});



	// 监听下拉选框变化，更新图表
	document.getElementById("select2").addEventListener("change", function () {
		ChartInstance2.setOption(optionsList.chart2_1[this.value]); // 更新图表选项
	  });
});
