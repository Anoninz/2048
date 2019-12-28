(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{216:function(v,_,t){"use strict";t.r(_);var d=t(0),r=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"步骤五：构建网络优化模型并进行求解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤五：构建网络优化模型并进行求解"}},[v._v("#")]),v._v(" 步骤五：构建网络优化模型并进行求解")]),v._v(" "),t("h3",{attrs:{id:"教学内容："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#教学内容："}},[v._v("#")]),v._v(" 教学内容：")]),v._v(" "),t("p",[v._v("介绍《跨境电商供应链管理》第五章第三节内容，通过实例让学生熟悉学过的网络优化模型。通过建立一个简化的四级供应链模型，对工厂和仓库进行选址，以实现整条供应链成本最小为目标，以网络优化模型为基础，利用Excel的Solver工具来对模型进行求解。")]),v._v(" "),t("h3",{attrs:{id:"实验操作："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实验操作："}},[v._v("#")]),v._v(" 实验操作：")]),v._v(" "),t("p",[v._v("根据下面案例条件，构建网络优化模型进行求解。\n假设海外工厂每生产一部手机，其原材料成本60%来自我国深圳，在当地采购其余40%，下表所示为所得到的三大地区的手机原材料成本，手机在深圳的原材料平均成本设为1000元。")]),v._v(" "),t("table",[t("tr",[t("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"4"}},[v._v("原材料成本计算                单位：元/台")])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("当地采购价格")]),v._v(" "),t("td",[v._v("中国深圳采购价格")]),v._v(" "),t("td",[v._v("最终原材料成本")])]),v._v(" "),t("tr",[t("td",[v._v("东欧")]),v._v(" "),t("td",[v._v("2870")]),v._v(" "),t("td",[v._v("1000")]),v._v(" "),t("td",[v._v("1748")])]),v._v(" "),t("tr",[t("td",[v._v("东南亚")]),v._v(" "),t("td",[v._v("1553")]),v._v(" "),t("td",[v._v("1000")]),v._v(" "),t("td",[v._v("1221")])]),v._v(" "),t("tr",[t("td",[v._v("拉美")]),v._v(" "),t("td",[v._v("851")]),v._v(" "),t("td",[v._v("1000")]),v._v(" "),t("td",[v._v("940")])])]),v._v(" "),t("p",[v._v("下表所示为在假设生产成本与人均收入成正比，根据我国深圳手机生产成本与2015年各地区人均收入所计算得出的三大地区手机生产成本。")]),v._v(" "),t("table",[t("tr",[t("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"5"}},[v._v("\n    生产成本计算 "),t("span",{staticStyle:{"margin-left":"10px","font-size":"12px"}},[v._v("单位：元/台")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("2015 年当地人均收入（元/年）")]),v._v(" "),t("td",[v._v("2014 年当地人均收入（元/年）")]),v._v(" "),t("td",[v._v("国内生产成本（万元/万台）")]),v._v(" "),t("td",[v._v("当地生产成本（万元/万台）")])]),v._v(" "),t("tr",[t("td",[v._v("东欧")]),v._v(" "),t("td",[v._v("69927")]),v._v(" "),t("td",{attrs:{rowspan:"3"}},[v._v("47970")]),v._v(" "),t("td",{attrs:{rowspan:"3"}},[v._v("26")]),v._v(" "),t("td",[v._v("38")])]),v._v(" "),t("tr",[t("td",[v._v("东南亚")]),v._v(" "),t("td",[v._v("14190")]),v._v(" "),t("td",[v._v("8")])]),v._v(" "),t("tr",[t("td",[v._v("拉美")]),v._v(" "),t("td",[v._v("70636")]),v._v(" "),t("td",[v._v("28")])])]),v._v(" "),t("p",[v._v("下表所示为整条供应链的总关税成本，包括供应商到工厂、工厂到仓库、以及仓库到市场三部分关税成本。其中，在当地采购及运输的关税成本忽略不计。值得注意的是，该成本中包含海外工厂从深圳采购原材料所发生的关税。")]),v._v(" "),t("table",[t("tr",[t("td",{attrs:{colspan:"5"}},[v._v("\n        总关税成本\n        "),t("span",{staticStyle:{"font-size":"12px","margin-left":"100px"}},[v._v("单位：万元 万台")])])]),v._v(" "),t("tr",[t("td",[v._v("工厂")]),v._v(" "),t("td",[v._v("仓库")]),v._v(" "),t("td",{attrs:{colspan:"3"}},[v._v("总关税成本")])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td",[v._v("东欧市场")]),v._v(" "),t("td",[v._v("东南亚市场")]),v._v(" "),t("td",[v._v("拉美市场")])]),v._v(" "),t("tr",[t("td",{attrs:{rowspan:"3"}},[v._v("东欧")]),v._v(" "),t("td",[v._v("东欧")]),v._v(" "),t("td",[v._v("120")]),v._v(" "),t("td",[v._v("390")]),v._v(" "),t("td",[v._v("663")])]),v._v(" "),t("tr",[t("td",[v._v("东南亚")]),v._v(" "),t("td",[v._v("717")]),v._v(" "),t("td",[v._v("390")]),v._v(" "),t("td",[v._v("611")])]),v._v(" "),t("tr",[t("td",[v._v("拉美")]),v._v(" "),t("td",[v._v("719")]),v._v(" "),t("td",[v._v("682")]),v._v(" "),t("td",[v._v("663")])]),v._v(" "),t("tr",[t("td",{attrs:{rowspan:"3"}},[v._v("东南亚")]),v._v(" "),t("td",[v._v("东欧")]),v._v(" "),t("td",[v._v("427")]),v._v(" "),t("td",[v._v("697")]),v._v(" "),t("td",[v._v("970")])]),v._v(" "),t("tr",[t("td",[v._v("东南亚")]),v._v(" "),t("td",[v._v("427")]),v._v(" "),t("td",[v._v("100")]),v._v(" "),t("td",[v._v("321")])]),v._v(" "),t("tr",[t("td",[v._v("拉美")]),v._v(" "),t("td",[v._v("377")]),v._v(" "),t("td",[v._v("340")]),v._v(" "),t("td",[v._v("321")])]),v._v(" "),t("tr",[t("td",{attrs:{rowspan:"3"}},[v._v("拉美")]),v._v(" "),t("td",[v._v("东欧")]),v._v(" "),t("td",[v._v("226")]),v._v(" "),t("td",[v._v("496")]),v._v(" "),t("td",[v._v("769")])]),v._v(" "),t("tr",[t("td",[v._v("东南亚")]),v._v(" "),t("td",[v._v("516")]),v._v(" "),t("td",[v._v("189")]),v._v(" "),t("td",[v._v("410")])]),v._v(" "),t("tr",[t("td",[v._v("拉美")]),v._v(" "),t("td",[v._v("226")]),v._v(" "),t("td",[v._v("189")]),v._v(" "),t("td",[v._v("170")])])]),v._v(" "),t("p",[v._v("下表所示为整条供应链的运输成本，包括供应商到工厂，工厂到仓库以及仓库到市场三部分的运输成本，假设单位手机的运输成本一定，一定数量手机的运输成本与运输距离成正比。单位手机的运输成本计算如下：\n一个20GB的集装箱从上海到洛杉矶的运费为54275元，每个集装箱可装8000个手机，以上海到洛杉矶的直线距离为运输距离，为12523km，由此得每万台手机每公里的运输成本约为0.5元。以各地区的中心城市之间的直线距离作为运输距离，由此得到如下表所示的总运输成本。")]),v._v(" "),t("table",[t("tr",[t("td",{attrs:{colspan:"5"}},[v._v("\n      总运输成本\n      "),t("span",{staticStyle:{"font-size":"12px"}},[v._v("单位：万元/万台")])])]),v._v(" "),t("tr",[t("td",{attrs:{rowspan:"2"}},[v._v("工厂")]),v._v(" "),t("td",{attrs:{rowspan:"2"}},[v._v("仓库")]),v._v(" "),t("td",{attrs:{colspan:"3"}},[v._v("总运输成本")])]),v._v(" "),t("tr",[t("td",[v._v("东欧市场")]),v._v(" "),t("td",[v._v("东南亚市场")]),v._v(" "),t("td",[v._v("拉美市场")])]),v._v(" "),t("tr",[t("td",{attrs:{rowspan:"3"}},[v._v("东欧")]),v._v(" "),t("td",[v._v("东欧")]),v._v(" "),t("td",[v._v("0.5")]),v._v(" "),t("td",[v._v("0.7")]),v._v(" "),t("td",[v._v("1.4")])]),v._v(" "),t("tr",[t("td",[v._v("东南亚")]),v._v(" "),t("td",[v._v("1.5")]),v._v(" "),t("td",[v._v("0.7")]),v._v(" "),t("td",[v._v("2.0")])]),v._v(" "),t("tr",[t("td",[v._v("拉美")]),v._v(" "),t("td",[v._v("1.8")]),v._v(" "),t("td",[v._v("1.4")]),v._v(" "),t("td",[v._v("1.4")])]),v._v(" "),t("tr",[t("td",{attrs:{rowspan:"3"}},[v._v("东南亚")]),v._v(" "),t("td",[v._v("东欧")]),v._v(" "),t("td",[v._v("1.0")]),v._v(" "),t("td",[v._v("1.2")]),v._v(" "),t("td",[v._v("2.0")])]),v._v(" "),t("tr",[t("td",[v._v("东南亚")]),v._v(" "),t("td",[v._v("1.0")]),v._v(" "),t("td",[v._v("0.1")]),v._v(" "),t("td",[v._v("1.4")])]),v._v(" "),t("tr",[t("td",[v._v("拉美")]),v._v(" "),t("td",[v._v("1.8")]),v._v(" "),t("td",[v._v("1.4")]),v._v(" "),t("td",[v._v("1.4")])]),v._v(" "),t("tr",[t("td",{attrs:{rowspan:"3"}},[v._v("拉美")]),v._v(" "),t("td",[v._v("东欧")]),v._v(" "),t("td",[v._v("1.1")]),v._v(" "),t("td",[v._v("1.3")]),v._v(" "),t("td",[v._v("2.1")])]),v._v(" "),t("tr",[t("td",[v._v("东南亚")]),v._v(" "),t("td",[v._v("1.6")]),v._v(" "),t("td",[v._v("0.8")]),v._v(" "),t("td",[v._v("2.1")])]),v._v(" "),t("tr",[t("td",[v._v("拉美")]),v._v(" "),t("td",[v._v("1.1")]),v._v(" "),t("td",[v._v("0.8")]),v._v(" "),t("td",[v._v("0.8")])])]),v._v(" "),t("h3",{attrs:{id:"实验效果："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实验效果："}},[v._v("#")]),v._v(" 实验效果：")]),v._v(" "),t("p",[v._v("通过建立网络优化模型，分别计算出原材料成本、生产成本、总关税成本以及总运输成本，通过决策变量的变化，以Solver工具求得最优解。将理论转化为实践，真正学会了如何进行网络优化模型的建立。")]),v._v(" "),t("p",[t("router-link",{attrs:{to:"/"}},[v._v("回到目录")])],1)])}),[],!1,null,null,null);_.default=r.exports}}]);