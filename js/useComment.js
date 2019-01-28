$(document).ready(function (e) {
	ImgIputHandler.Init();
});

var ImgIputHandler = {
	facePath: [{
		faceName: "微笑",
		facePath: "0-weixiao.gif"
	},
	{
		faceName: "撇嘴",
		facePath: "1-piezui.gif"
	},
	{
		faceName: "色",
		facePath: "2-se.gif"
	},
	{
		faceName: "发呆",
		facePath: "3-fadai.gif"
	},
	{
		faceName: "得意",
		facePath: "4-deyi.gif"
	},
	{
		faceName: "流泪",
		facePath: "5-liulei.gif"
	},
	{
		faceName: "害羞",
		facePath: "6-haixiu.gif"
	},
	{
		faceName: "闭嘴",
		facePath: "7-bizui.gif"
	},
	{
		faceName: "大哭",
		facePath: "8-daku.gif"
	},
	{
		faceName: "尴尬",
		facePath: "9-ganga.gif"
	},
	{
		faceName: "发怒",
		facePath: "10-fanun.gif"
	},
	{
		faceName: "调皮",
		facePath: "11-tiaopi.gif"
	},
	{
		faceName: "龇牙",
		facePath: "13-ciya.gif"
	},
	{
		faceName: "惊讶",
		facePath: "14-jinya.gif"
	},
	{
		faceName: "难过",
		facePath: "15-nanguo.gif"
	},
	{
		faceName: "酷",
		facePath: "16-ku.gif"
	},
	{
		faceName: "冷汗",
		facePath: "17-lenghan.gif"
	},
	{
		faceName: "抓狂",
		facePath: "18-zhuakuang.gif"
	},
	{
		faceName: "吐",
		facePath: "19-tu.gif"
	},
	{
		faceName: "偷笑",
		facePath: "20-touxiao.gif"
	},
	{
		faceName: "可爱",
		facePath: "21-keai.gif"
	},
	{
		faceName: "白眼",
		facePath: "22-baiyan.gif"
	},
	{
		faceName: "傲慢",
		facePath: "23-aoman.gif"
	},
	{
		faceName: "饥饿",
		facePath: "24-jie.gif"
	},
	{
		faceName: "困",
		facePath: "25-kun.gif"
	},
	{
		faceName: "惊恐",
		facePath: "26-jinkong.gif"
	},
	{
		faceName: "流汗",
		facePath: "27-liulei.gif"
	},
	{
		faceName: "憨笑",
		facePath: "28-hanxiao.gif"
	},
	{
		faceName: "大兵",
		facePath: "29-dabin.gif"
	},
	{
		faceName: "奋斗",
		facePath: "30-fendou.gif"
	},
	{
		faceName: "咒骂",
		facePath: "31-zhouma.gif"
	},
	{
		faceName: "疑问",
		facePath: "32-yiwen.gif"
	},
	{
		faceName: "嘘",
		facePath: "33-xu.gif"
	},
	{
		faceName: "晕",
		facePath: "34-yun.gif"
	},
	{
		faceName: "折磨",
		facePath: "35-zhemo.gif"
	},
	{
		faceName: "衰",
		facePath: "36-shuai.gif"
	},
	{
		faceName: "骷髅",
		facePath: "37-kulou.gif"
	},
	{
		faceName: "敲打",
		facePath: "38-qiaoda.gif"
	},
	{
		faceName: "再见",
		facePath: "39-zaijian.gif"
	},
	{
		faceName: "擦汗",
		facePath: "40-cahan.gif"
	},
	],
	Init: function () {
		//评论框失去焦点
		$(".comment-text").focusout(function () {
			$(this).css("box-shadow", "none");
			$(this).css("-moz-box-shadow", "none");
			$(this).css("-webkit-box-shadow", "none");
		});
		//评论框获取焦点
		$(".comment-text").focus(function () {
			$(this).css("box-shadow", "0 0 3px #ccc");
			$(this).css("-moz-box-shadow", "0 0 3px #ccc");
			$(this).css("-webkit-box-shadow", "0 0 3px #ccc");
		});

		//取消表情选择
		document.onclick = function (e) {
			if (e.target.className != 'faceDiv' && e.target.className != 'faceBtn') {
				$(".faceDiv").hide();
			};
		}
		// 提交表单
		$(".postBtn").click(function () {
			if($(".comment-text").html()==""){
				return false;
			}
			$(".use-comment-wrap").prepend(`
			<div class="ly-sayBox">
				<div class="ly-head"><img src="./img/use-header.png"></div>
				<div class="ly-main">
					<div class="ly-top" onmouseleave="mLeave(this)" onmouseenter="mEnter(this)">
						<div class="ly-name">
							枕头煎蛋
						</div>
						<div class="ly-say">
						${trainformFace($(".comment-text").html())}
						</div>
						<div class="ly-info">
							01-16 15:04:42 来自 武汉市光谷校区
							<span class="ly-reply" onclick="addReply(this,1)">回复 <img src="./img/commentSay.png" alt=""></span>
							<span class="ly-detele" onclick="removeSelf(this,1)">删除 <img src="./img/commentDeleter.png" alt=""></span>
						</div>
					</div>
				</div> 
			</div>`)
		});
	},

	insertAtCursor: function (myField, myValue) {
		// if (document.selection) {
		// 	myField.focus();
		// 	sel = document.selection.createRange();
		// 	sel.text = myValue;
		// 	sel.select();
		// 	console.log(1, sel)
		// } else if (myField.selectionStart || myField.selectionStart == "0") {
		// 	console.log(2)
		// 	var startPos = myField.selectionStart;
		// 	var endPos = myField.selectionEnd;
		// 	var restoreTop = myField.scrollTop;
		// 	myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
		// 	if (restoreTop > 0) {
		// 		myField.scrollTop = restoreTop;
		// 	}
		// 	myField.focus();
		// 	myField.selectionStart = startPos + myValue.length;
		// 	myField.selectionEnd = startPos + myValue.length;
		// } else {
		myField.html(myField.html() + myValue);
		myField.focus();
		// }
	}
}

function mEnter(that) {
	$(that).children('.ly-info').find('span').show();
}
function mLeave(that) {
	$(that).children('.ly-info').find('span').hide();
}
// 表情转换函数
function trainformFace(contents) {
	var pattern1 = /\[[\u4e00-\u9fa5]+\]/g;
	var pattern2 = /\[[\u4e00-\u9fa5]+\]/;
	var str = contents;
	content = contents.match(pattern1)||[];
	for (i = 0; i < content.length; i++) {
		for (j = 0; j < ImgIputHandler.facePath.length; j++) {
			var src = "";
			if ("[" + ImgIputHandler.facePath[j].faceName + "]" == content[i]) {
				src = "<img src='./img/" + ImgIputHandler.facePath[j].facePath + "'>";
				break;
			}
		}
		if (src != "") {
			str = str.replace(pattern2, src);
		}
	}
	return str
}
//回復按按鈕
function addReply(that,isChild) {
	$(".use-comment-wrap .comment-entry").remove();
	$(that).parent().after(`
	<div class="comment-entry">
		<div class="comment-text" contenteditable="true"></div>
		<div class="regexpFont"><span>0</span>/300</div>
		<div class="faceDiv"></div>
		<div class="comment-Foot"> <a class="faceBtn" onclick="openFace(this)"></a><a class="postBtn" onclick="replySome(this,${isChild})">发表</a> </div>
	</div>
	`)
}
//发表
function replySome(that,isChild) {
	var father= $(that).parent().parent();
	var commentSay = $(that).parent().parent().find(".comment-text").html();
	if(commentSay==""){
		return false;
	}
	if(isChild!=1){
		var fatherBox = father.parent().parent().parent();
	}else{
		var fatherBox = father.parent().parent();
	}
	fatherBox.append(`
	<div class="child-item">
		<div class="ly-head"><img src="./img/use-header.png"></div>
		<div class="child-main" onmouseleave="mLeave(this)" onmouseenter="mEnter(this)">
			<div class="child-text">
				<span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span>
				<div><b>echo</b> 回复 <b>海王 亚瑟</b></div>
				${trainformFace(commentSay)}
			</div>
			<div class="ly-info">
				01-16 15:04:42 来自 武汉市光谷校区 <span class="ly-reply" onclick="addReply(this,0)">回复 <img src="./img/commentSay.png"
					alt=""></span><span class="ly-detele" onclick="removeSelf(this,0)">删除<img src="./img/commentDeleter.png" alt=""></span>
			</div>
		</div>
	</div>
	`)
	father.hide();
}
//添加表情控件
function openFace(that) {
	console.log($(".faceDiv").height())
	var faceBox = $(that).parent().prev()
	if (faceBox.height() < 1) {
		faceBox.stop().show().animate({
			height: "138px"
		}, 300);
		if (faceBox.children().length == 0) {
			for (var i = 0; i < ImgIputHandler.facePath.length; i++) {
				faceBox.append("<img title='" + ImgIputHandler.facePath[i].faceName + "' src='./img/" + ImgIputHandler.facePath[i].facePath + "' />");
			}
			faceBox.children("img").click(function () {
				var that = $(this).parent()
				that.stop().animate({
					height: "0px"
				}, 300, function () {
					that.hide();
				});
				ImgIputHandler.insertAtCursor(that.prev().prev(), "[" + $(this).attr("title") + "]");
			});
		}
	} else {
		faceBox.stop().animate({
			height: "0px"
		}, 300, function () {
			faceBox.hide();
		});
	}
}

//删除元素
function removeSelf(that,isNum){
	if(isNum !=1){
		var parentBox = $(that).parent().parent().parent();
	}else{
		var parentBox = $(that).parent().parent().parent().parent();
	}
	parentBox.remove();
}

//统计字数
function seeFontNum(this) {
	$(".regexpFont span").html($(this).html().length);
}

/** 
 * @function escapeHTML 转义html脚本 < > & " ' 
 * @param a - 
 *            字符串 
 */  
var escapeHTML=function(a){  
    a = "" + a;  
    return a.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, '"').replace(/'/g, "'");;  
}
/** 
 * @function unescapeHTML 还原html脚本 < > & " ' 
 * @param a - 
 *            字符串 
 */  
var unescapeHTML=function(a){  
    a = "" + a;  
    return a.replace(/</g, "<").replace(/>/g, ">").replace(/&/g, "&").replace(/"/g, '"').replace(/'/g, "'");  
}