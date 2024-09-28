// chartLoader.js - 挂载并初始化图表。
import "./style.css";
import * as echarts from "echarts";
import { fieldData } from "./fielddata.js";
//导入文件为对象
const importAll = (r) => {
	let options = {};
	r.keys().forEach((key) => {
		const optionName = key.replace("./", "").replace(".js", ""); // 获取文件名作为选项名
		options[optionName] = r(key).option;
	});
	return options;
};

const options = importAll(require.context("./options", false, /\.js$/)); // 导入所有选项

document.addEventListener("DOMContentLoaded", function () {
	// 初始化并挂载图表
	var Chart1 = echarts.init(document.getElementById("main1"));
	Chart1.setOption(options.chart1); // 使用解构赋值前的对象访问

	var Chart2 = echarts.init(document.getElementById("main2"));
	Chart2.setOption(options.chart2);

    //初始化文本区域
    const matchingText = fieldData["chart1"] || ""; // 从fieldData中获取描述文本
	document.getElementById("textarea1").value = matchingText; // 将匹配的文本写入textarea


	// 监听下拉选框变化，更新图表
	document.getElementById("select").addEventListener("change", function () {
		Chart1.clear(); // 清空 chart1
		Chart1.setOption(options[this.value]);

		// 根据选择项写入匹配的文本到textarea
		const matchingText = fieldData[this.value] || ""; // 从fieldData中获取描述文本
		document.getElementById("textarea1").value = matchingText; // 将匹配的文本写入textarea
	});
});
