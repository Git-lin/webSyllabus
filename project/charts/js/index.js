/**
* 功能：调用统计图表功能
**/
/************************************************/
/* DOM加载完毕后执行（多媒体资源尚未开始加载） */
/************************************************/
document.onreadystatechange = function() {
	if(document.readyState == "interactive") {
		auCharts("weekExpense", {
			axisX: ["周一","周二","周三","周四","周五","周六","周日"],
			axisY: [
				{
					typeName: "餐饮",
					value: [182,100,278,143,112,79,123]
				},
				{
					typeName: "生活用品",
					value: [263,114,151,45,106,180,230]
				},
				{
					typeName: "交通",
					value: [123,198,220,262,201,40,290]
				},
				{
					typeName: "其它",
					value: [103,177,166,120,499,141,180]
				}
			]
		});
	}
}
