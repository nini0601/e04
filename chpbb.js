(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"chpbb_atlas_", frames: [[541,2340,1250,620],[1316,0,1250,620],[0,742,570,1596],[541,2962,1250,620],[1252,3584,436,1548],[1316,622,1250,620],[0,2340,539,1592],[0,4616,1250,620],[1252,5134,429,1535],[572,1244,1250,620],[0,5760,711,522],[0,5238,720,520],[722,5522,70,200],[1144,6364,70,200],[713,5760,100,200],[815,5766,220,55],[0,0,1314,740],[1004,6378,100,5],[1004,6385,100,5],[1004,6371,100,5],[1100,6648,100,5],[1137,5310,100,5],[1004,6364,100,5],[1004,6293,209,69],[933,6393,209,69],[722,6393,209,69],[933,6464,209,69],[1004,6222,209,69],[722,5380,209,69],[722,5309,209,69],[722,6535,209,69],[722,5238,209,69],[722,6464,209,69],[722,5451,209,69],[933,6535,209,69],[1690,3584,720,510],[1793,2890,720,510],[1683,6158,720,510],[1690,4608,720,510],[1793,2378,720,510],[0,6284,720,510],[0,6796,720,510],[1683,6670,720,510],[1683,5134,720,510],[1683,5646,720,510],[722,6671,705,515],[1793,1866,720,510],[1690,4096,720,510],[1824,1244,720,510],[944,6606,50,50],[933,5238,120,120],[933,5360,120,120],[996,6606,50,50],[1048,6606,50,50],[937,5710,50,50],[1035,6153,50,50],[1087,6153,50,50],[1037,5710,50,50],[1055,5238,80,80],[815,5644,120,120],[722,6606,220,55],[937,5653,220,55],[937,5539,220,55],[815,5823,220,55],[937,5482,220,55],[815,5880,220,55],[722,6279,280,55],[937,5596,220,55],[722,6336,280,55],[713,6118,320,50],[713,6170,320,50],[713,6014,320,50],[713,6066,320,50],[713,5962,320,50],[713,6222,280,55],[0,3934,1240,680],[1035,6081,70,70],[1035,5937,70,70],[1035,6009,70,70],[1055,5320,70,70],[1127,5392,70,70],[1137,5238,70,70],[1127,5320,70,70],[1055,5392,70,70],[1144,6566,80,80],[815,5522,120,120]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._1bg = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1bgpng複製 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1全身正面 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._2bg = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._2全身右側 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._3bg = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._3全身背面 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._4bg = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._4全身左側 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._5bg = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CS = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.前言 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.manbtL = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.manbtR = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.rvgc = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.女生服裝 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.女生BG = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.vce = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.vcepng複製 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.vcepng複製3 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.vcepng複製4 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.vcepng複製5 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.vcepng複製6 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.womanbt1pass = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.womanbt1up = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.womanbt2pass = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.womanbt2up = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.womanbt3pass = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.womanbt3up = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.womanbt4pass = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.womanbt4up = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.womanbt5pass = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.womanbt5up = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.womanbt6pass = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.womanbt6up = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.word1 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.word1png複製2 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.word1png複製3 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.word1png複製6 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.word1png複製7 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.word2png複製5 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.word2png複製6 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.word2png複製7 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.word2png複製8 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.word2png複製9 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.word3png複製2 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.word3png複製3 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.word3png複製4 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.word3png複製5 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.xx = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.提示x = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.提示xw = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.提點按鈕png複製10 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.提點按鈕png複製5 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.提點按鈕png複製6 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.提點按鈕png複製7 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.提點按鈕png複製8 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.提點按鈕png複製9 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.現在位置w = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0000_創新歷程 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0001_創立理念 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0002_心路歷程 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0003_核心人物 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0004_納智捷汽車 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0005_裕隆集團 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0006_CH1公司歷程 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0001_男生服裝 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0002_CH2服裝儀容 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0000_數位科技體驗區 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0001_AR實車賞車 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0002_ThinkTouch = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0003_3D體驗劇場 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0004_迎賓區 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0005_CH3銷售SOP = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.跨殺小啦 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.關閉按鈕png複製10 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.關閉按鈕png複製11 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.關閉按鈕png複製2 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.關閉按鈕png複製4 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.關閉按鈕png複製6 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.關閉按鈕png複製7 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.關閉按鈕png複製8 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.關閉按鈕png複製9 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.首頁w = function() {
	this.spriteSheet = ss["chpbb_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.補間動畫5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.rvgc();
	this.instance.parent = this;
	this.instance.setTransform(-40,-80,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-80,80,160);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提點按鈕png複製10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提點按鈕png複製9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.關閉按鈕png複製11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提點按鈕png複製8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.關閉按鈕png複製10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提點按鈕png複製7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.關閉按鈕png複製9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.關閉按鈕png複製8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提點按鈕png複製6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提點按鈕png複製5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.關閉按鈕png複製7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.womanbt6up();
	this.instance.parent = this;

	this.instance_1 = new lib.womanbt6pass();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,69);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.womanbt5up();
	this.instance.parent = this;

	this.instance_1 = new lib.womanbt5pass();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,69);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.womanbt4up();
	this.instance.parent = this;

	this.instance_1 = new lib.womanbt4pass();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,69);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.womanbt3up();
	this.instance.parent = this;

	this.instance_1 = new lib.womanbt3pass();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,69);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.womanbt2up();
	this.instance.parent = this;

	this.instance_1 = new lib.womanbt2pass();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,69);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manbtL();
	this.instance.parent = this;
	this.instance.setTransform(-35,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(-35,-100,70,200), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manbtR();
	this.instance.parent = this;
	this.instance.setTransform(-35,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-35,-100,70,200), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.womanbt1up();
	this.instance.parent = this;

	this.instance_1 = new lib.womanbt1pass();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,69);


(lib._3now = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.現在位置();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-39.5);

	this.instance_1 = new lib.現在位置w();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-57,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib._2hint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提示x();
	this.instance.parent = this;
	this.instance.setTransform(-59,-48);

	this.instance_1 = new lib.提示xw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-59,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-48,120,120);


(lib._1main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.首頁();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-39.5);

	this.instance_1 = new lib.首頁w();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-59,-49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib.現在位置_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.跨殺小啦();
	this.instance.parent = this;
	this.instance.setTransform(-620,-339);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.現在位置_1, new cjs.Rectangle(-620,-339,1240,680), null);


(lib.e04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.xx();
	this.instance.parent = this;
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5,scaleY:1.5,x:-38,y:-37},0).wait(1).to({scaleX:1,scaleY:1,x:-25,y:-24},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-24,50,50);


(lib.chp35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0002s_0000_數位科技體驗區();
	this.instance.parent = this;
	this.instance.setTransform(-160,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-25,320,50);


(lib.chp34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0002s_0001_AR實車賞車();
	this.instance.parent = this;
	this.instance.setTransform(-160,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-25,320,50);


(lib.chp33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0002s_0002_ThinkTouch();
	this.instance.parent = this;
	this.instance.setTransform(-160,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-25,320,50);


(lib.chp32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0002s_0003_3D體驗劇場();
	this.instance.parent = this;
	this.instance.setTransform(-160,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-25,320,50);


(lib.chp31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0002s_0004_迎賓區();
	this.instance.parent = this;
	this.instance.setTransform(-160,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-25,320,50);


(lib.chp22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.女生服裝();
	this.instance.parent = this;
	this.instance.setTransform(-110,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-27,220,55);


(lib.chp21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0001s_0001_男生服裝();
	this.instance.parent = this;
	this.instance.setTransform(-110,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-27,220,55);


(lib.chp122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0000s_0000_創新歷程();
	this.instance.parent = this;
	this.instance.setTransform(-110,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-27,220,55);


(lib.chp121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0000s_0001_創立理念();
	this.instance.parent = this;
	this.instance.setTransform(-110,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-27,220,55);


(lib.chp12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0000s_0004_納智捷汽車();
	this.instance.parent = this;
	this.instance.setTransform(-110,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-27,220,55);


(lib.chp112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0000s_0002_心路歷程();
	this.instance.parent = this;
	this.instance.setTransform(-110,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-27,220,55);


(lib.chp111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0000s_0003_核心人物();
	this.instance.parent = this;
	this.instance.setTransform(-110,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-27,220,55);


(lib.chp11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0000s_0005_裕隆集團();
	this.instance.parent = this;
	this.instance.setTransform(-110,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-27,220,55);


(lib.ch3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0002s_0005_CH3銷售SOP();
	this.instance.parent = this;
	this.instance.setTransform(-140,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-27,280,55);


(lib.ch2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0001s_0002_CH2服裝儀容();
	this.instance.parent = this;
	this.instance.setTransform(-140,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-27,280,55);


(lib.ch1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0000s_0006_CH1公司歷程();
	this.instance.parent = this;
	this.instance.setTransform(-140,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-27,280,55);


(lib.轉轉人 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.asdfgh.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop(9);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.nbvc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(29);
		}
	}
	this.frame_9 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.qwer.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(19);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.gyuhnjk.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(0);
		}
	}
	this.frame_19 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.fghesd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(29);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.vfdvgsagfew.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(9);
		}
	}
	this.frame_29 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.jngbfvd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
			this.gotoAndStop(0);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.dsebvcfwes.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			this.gotoAndStop(19);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(1));

	// 人
	this.jngbfvd = new lib.元件3();
	this.jngbfvd.parent = this;
	this.jngbfvd.setTransform(-84.7,-52);
	new cjs.ButtonHelper(this.jngbfvd, 0, 1, 1);

	this.dsebvcfwes = new lib.元件2();
	this.dsebvcfwes.parent = this;
	this.dsebvcfwes.setTransform(289.3,-52);
	new cjs.ButtonHelper(this.dsebvcfwes, 0, 1, 1);

	this.instance = new lib._2全身右側();
	this.instance.parent = this;
	this.instance.setTransform(23,-324,0.365,0.365);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.dsebvcfwes},{t:this.jngbfvd}]},29).wait(1));

	// 人
	this.fghesd = new lib.元件3();
	this.fghesd.parent = this;
	this.fghesd.setTransform(-84.7,-52);
	new cjs.ButtonHelper(this.fghesd, 0, 1, 1);

	this.vfdvgsagfew = new lib.元件2();
	this.vfdvgsagfew.parent = this;
	this.vfdvgsagfew.setTransform(289.3,-52);
	new cjs.ButtonHelper(this.vfdvgsagfew, 0, 1, 1);

	this.instance_1 = new lib._3全身背面();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,-342,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.vfdvgsagfew},{t:this.fghesd}]},19).to({state:[]},1).wait(10));

	// 人
	this.qwer = new lib.元件3();
	this.qwer.parent = this;
	this.qwer.setTransform(-84.7,-52);
	new cjs.ButtonHelper(this.qwer, 0, 1, 1);

	this.gyuhnjk = new lib.元件2();
	this.gyuhnjk.parent = this;
	this.gyuhnjk.setTransform(289.3,-52);
	new cjs.ButtonHelper(this.gyuhnjk, 0, 1, 1);

	this.instance_2 = new lib._4全身左側();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12,-333,0.377,0.377);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.gyuhnjk},{t:this.qwer}]},9).to({state:[]},1).wait(20));

	// 人
	this.asdfgh = new lib.元件3();
	this.asdfgh.parent = this;
	this.asdfgh.setTransform(-84.7,-52);
	new cjs.ButtonHelper(this.asdfgh, 0, 1, 1);

	this.nbvc = new lib.元件2();
	this.nbvc.parent = this;
	this.nbvc.setTransform(289.3,-52);
	new cjs.ButtonHelper(this.nbvc, 0, 1, 1);

	this.instance_3 = new lib._1全身正面();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-331,0.358,0.358);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.nbvc},{t:this.asdfgh}]}).to({state:[]},1).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.7,-331,444.1,572.2);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(40,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:105.3},15).to({startPosition:0},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,160);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.face.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(49);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.top.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(99);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.bot.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_12.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_12()
		{
			this.gotoAndPlay(149);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.ac.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_13.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_13()
		{
			this.gotoAndPlay(199);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.peibei.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_17.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_17()
		{
			this.gotoAndPlay(249);
		}
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.home.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("contents.html", "_self");
		}
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_21.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_21()
		{
			this.gotoAndPlay(290);
		}
	}
	this.frame_49 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.ggwp.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			this.gotoAndStop(0);
		}
	}
	this.frame_61 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.jytrhbfdv.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(64);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.ghghjyesdf.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(74);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.veww.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(84);
		}
	}
	this.frame_69 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_79 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_89 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_111 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.mnbtvrc.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			this.gotoAndPlay(119);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.dxctfvgybhjnkml.addEventListener("click", fl_ClickToGoToAndStopAtFrame_15.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_15()
		{
			this.gotoAndStop(0);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.kmnbtrfdvhgtyjntrhseger.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			this.gotoAndPlay(129);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.kjumnbtrveshrtjntrgbvfsderge.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_9.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_9()
		{
			this.gotoAndPlay(139);
		}
	}
	this.frame_124 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_134 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_144 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_161 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.unybrtvcdsgesrgerscfer.addEventListener("click", fl_ClickToGoToAndStopAtFrame_16.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_16()
		{
			this.gotoAndStop(0);
		}
		
		
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.lyczzz.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_10.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_10()
		{
			this.gotoAndPlay(169);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.leehowhowhandsome.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_11.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_11()
		{
			this.gotoAndPlay(179);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.hjhj.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_20.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_20()
		{
			this.gotoAndPlay(189);
		}
	}
	this.frame_174 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_184 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_194 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_211 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.tsaosha.addEventListener("click", fl_ClickToGoToAndStopAtFrame_17.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_17()
		{
			this.gotoAndStop(0);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.njtrefdetweygewsefe.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay(219);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.kyntjbsrdgfewrsg.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_15.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_15()
		{
			this.gotoAndPlay(229);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.kumnbdfweagfgras.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_16.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_16()
		{
			this.gotoAndPlay(239);
		}
	}
	this.frame_224 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_234 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_244 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_261 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.hyfuiewfhieojsp4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_18.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_18()
		{
			this.gotoAndStop(0);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.mynhtbrhbnyr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_18.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_18()
		{
			this.gotoAndPlay(269);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.hjnbrvfesgvdces.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_19.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_19()
		{
			this.gotoAndPlay(279);
		}
		
		
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_274 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_284 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_294 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.e04e04.addEventListener("click", fl_ClickToGoToAndStopAtFrame_19.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_19()
		{
			this.gotoAndStop(0);
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp1.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		function fl_ClickToGoToWebPage_19() {
			window.open("chpa.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp11.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			window.open("chpaa.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp12.addEventListener("click", fl_ClickToGoToWebPage_9);
		
		function fl_ClickToGoToWebPage_9() {
			window.open("chpab.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp111.addEventListener("click", fl_ClickToGoToWebPage_10);
		
		function fl_ClickToGoToWebPage_10() {
			window.open("chpaaa.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp112.addEventListener("click", fl_ClickToGoToWebPage_11);
		
		function fl_ClickToGoToWebPage_11() {
			window.open("chpaab.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp121.addEventListener("click", fl_ClickToGoToWebPage_12);
		
		function fl_ClickToGoToWebPage_12() {
			window.open("chpaba.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp122.addEventListener("click", fl_ClickToGoToWebPage_13);
		
		function fl_ClickToGoToWebPage_13() {
			window.open("chpabb.html", "_self");
		}
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp2.addEventListener("click", fl_ClickToGoToWebPage_16);
		
		function fl_ClickToGoToWebPage_16() {
			window.open("chpb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp21.addEventListener("click", fl_ClickToGoToWebPage_17);
		
		function fl_ClickToGoToWebPage_17() {
			window.open("chpba.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp3.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		function fl_ClickToGoToWebPage_19() {
			window.open("chpc.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp31.addEventListener("click", fl_ClickToGoToWebPage_20);
		
		function fl_ClickToGoToWebPage_20() {
			window.open("chpca.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp32.addEventListener("click", fl_ClickToGoToWebPage_21);
		
		function fl_ClickToGoToWebPage_21() {
			window.open("chpcb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp33.addEventListener("click", fl_ClickToGoToWebPage_22);
		
		function fl_ClickToGoToWebPage_22() {
			window.open("chpcc.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp34.addEventListener("click", fl_ClickToGoToWebPage_23);
		
		function fl_ClickToGoToWebPage_23() {
			window.open("chpcd.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp35.addEventListener("click", fl_ClickToGoToWebPage_24);
		
		function fl_ClickToGoToWebPage_24() {
			window.open("chpce.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(12).call(this.frame_61).wait(8).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(22).call(this.frame_111).wait(13).call(this.frame_124).wait(10).call(this.frame_134).wait(10).call(this.frame_144).wait(17).call(this.frame_161).wait(13).call(this.frame_174).wait(10).call(this.frame_184).wait(10).call(this.frame_194).wait(17).call(this.frame_211).wait(13).call(this.frame_224).wait(10).call(this.frame_234).wait(10).call(this.frame_244).wait(17).call(this.frame_261).wait(13).call(this.frame_274).wait(10).call(this.frame_284).wait(10).call(this.frame_294).wait(1));

	// Actions
	this.local = new lib._3now();
	this.local.parent = this;
	this.local.setTransform(1843.7,83.6,1.461,1.461,0,0,0,0.6,0.6);
	new cjs.ButtonHelper(this.local, 0, 1, 2);

	this.hint = new lib._2hint();
	this.hint.parent = this;
	this.hint.setTransform(1702.2,83.6,1.461,1.461,0,0,0,0.6,0.6);
	new cjs.ButtonHelper(this.hint, 0, 1, 2);

	this.home = new lib._1main();
	this.home.parent = this;
	this.home.setTransform(1560.8,83.6,1.461,1.461,0,0,0,0.6,0.6);
	new cjs.ButtonHelper(this.home, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.hint},{t:this.local}]}).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},49).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},12).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},8).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},22).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},13).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},17).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},13).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},17).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},13).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},17).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},13).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[]},1).wait(10));

	// 配備解說
	this.instance = new lib.關閉按鈕png複製6();
	this.instance.parent = this;
	this.instance.setTransform(1173,487,0.412,0.412);

	this.instance_1 = new lib._5bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(703,476,0.412,0.412);

	this.mynhtbrhbnyr = new lib.元件20();
	this.mynhtbrhbnyr.parent = this;
	this.mynhtbrhbnyr.setTransform(498.8,468.1,1.461,1.461,0,0,0,25.1,25);
	new cjs.ButtonHelper(this.mynhtbrhbnyr, 0, 1, 1);

	this.hjnbrvfesgvdces = new lib.元件20();
	this.hjnbrvfesgvdces.parent = this;
	this.hjnbrvfesgvdces.setTransform(593.8,677.1,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.hjnbrvfesgvdces, 0, 1, 1);

	this.hyfuiewfhieojsp4 = new lib.元件19();
	this.hyfuiewfhieojsp4.parent = this;
	this.hyfuiewfhieojsp4.setTransform(1768.2,239.8,1.461,1.461,0,0,0,35.1,35.1);
	new cjs.ButtonHelper(this.hyfuiewfhieojsp4, 0, 1, 1);

	this.instance_2 = new lib.vcepng複製6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(526,462,0.238,1.461);

	this.instance_3 = new lib.word1png複製6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(671,243,1.461,1.461);

	this.instance_4 = new lib.word2png複製8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(675,243,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{scaleX:0.412,scaleY:0.412,x:703,y:476}},{t:this.instance,p:{scaleX:0.412,scaleY:0.412,x:1173,y:487}}]},249).to({state:[{t:this.instance_1,p:{scaleX:0.493,scaleY:0.493,x:653,y:452}},{t:this.instance,p:{scaleX:0.493,scaleY:0.493,x:1214,y:463}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.605,scaleY:0.605,x:583,y:416}},{t:this.instance,p:{scaleX:0.605,scaleY:0.605,x:1271,y:431}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.714,scaleY:0.714,x:514,y:383}},{t:this.instance,p:{scaleX:0.714,scaleY:0.714,x:1327,y:400}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.818,scaleY:0.818,x:449,y:351}},{t:this.instance,p:{scaleX:0.818,scaleY:0.818,x:1381,y:371}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.973,scaleY:0.973,x:352,y:302}},{t:this.instance,p:{scaleX:0.973,scaleY:0.973,x:1461,y:327}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.066,scaleY:1.066,x:294,y:273}},{t:this.instance,p:{scaleX:1.066,scaleY:1.066,x:1509,y:301}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.187,scaleY:1.187,x:218,y:235}},{t:this.instance,p:{scaleX:1.187,scaleY:1.187,x:1572,y:266}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.303,scaleY:1.303,x:146,y:199}},{t:this.instance,p:{scaleX:1.303,scaleY:1.303,x:1632,y:234}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.343,scaleY:1.343,x:121,y:186}},{t:this.instance,p:{scaleX:1.343,scaleY:1.343,x:1653,y:222}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.375,scaleY:1.375,x:102,y:175}},{t:this.instance,p:{scaleX:1.375,scaleY:1.375,x:1669,y:213}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.432,scaleY:1.432,x:66,y:158}},{t:this.instance,p:{scaleX:1.432,scaleY:1.432,x:1698,y:197}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_2,p:{scaleX:0.238,x:526,y:462}}]},8).to({state:[{t:this.instance_1,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_2,p:{scaleX:0.361,x:529,y:462}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_2,p:{scaleX:0.556,x:521,y:462}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_2,p:{scaleX:0.857,x:521,y:462}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_2,p:{scaleX:1.13,x:524,y:462}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_2,p:{scaleX:1.521,x:523,y:463}},{t:this.instance_3}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_2,p:{scaleX:0.175,x:624,y:674}}]},5).to({state:[{t:this.instance_1,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_2,p:{scaleX:0.253,x:624,y:674}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_2,p:{scaleX:0.304,x:624,y:674}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_2,p:{scaleX:0.391,x:624,y:674}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_2,p:{scaleX:0.45,x:624,y:674}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_2,p:{scaleX:0.565,x:624,y:674}},{t:this.instance_4}]},1).to({state:[]},1).wait(10));

	// 飾品解說
	this.instance_5 = new lib.關閉按鈕png複製4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1184,481,0.433,0.433);

	this.instance_6 = new lib._4bg();
	this.instance_6.parent = this;
	this.instance_6.setTransform(690,469,0.433,0.433);

	this.njtrefdetweygewsefe = new lib.元件18();
	this.njtrefdetweygewsefe.parent = this;
	this.njtrefdetweygewsefe.setTransform(540.7,441.7,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.njtrefdetweygewsefe, 0, 1, 1);

	this.kyntjbsrdgfewrsg = new lib.元件18();
	this.kyntjbsrdgfewrsg.parent = this;
	this.kyntjbsrdgfewrsg.setTransform(583.8,700.9,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.kyntjbsrdgfewrsg, 0, 1, 1);

	this.tsaosha = new lib.元件17();
	this.tsaosha.parent = this;
	this.tsaosha.setTransform(1768.2,239.8,1.461,1.461,0,0,0,35.1,35.1);
	new cjs.ButtonHelper(this.tsaosha, 0, 1, 1);

	this.instance_7 = new lib.vcepng複製5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(565,440,0.232,1.461);

	this.instance_8 = new lib.word1png複製7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(674,243,1.461,1.461);

	this.instance_9 = new lib.word2png複製9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(674,243,1.461,1.461);

	this.kumnbdfweagfgras = new lib.元件18();
	this.kumnbdfweagfgras.parent = this;
	this.kumnbdfweagfgras.setTransform(583.8,866.7,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.kumnbdfweagfgras, 0, 1, 1);

	this.instance_10 = new lib.word3png複製2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(696,244,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6,p:{scaleX:0.433,scaleY:0.433,x:690,y:469}},{t:this.instance_5,p:{scaleX:0.433,scaleY:0.433,x:1184,y:481}}]},199).to({state:[{t:this.instance_6,p:{scaleX:0.526,scaleY:0.526,x:631,y:440}},{t:this.instance_5,p:{scaleX:0.526,scaleY:0.526,x:1232,y:454}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.613,scaleY:0.613,x:576,y:412}},{t:this.instance_5,p:{scaleX:0.613,scaleY:0.613,x:1277,y:430}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.692,scaleY:0.692,x:526,y:387}},{t:this.instance_5,p:{scaleX:0.692,scaleY:0.692,x:1318,y:408}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.812,scaleY:0.812,x:452,y:351}},{t:this.instance_5,p:{scaleX:0.812,scaleY:0.812,x:1381,y:374}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.927,scaleY:0.927,x:380,y:316}},{t:this.instance_5,p:{scaleX:0.927,scaleY:0.927,x:1441,y:342}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.071,scaleY:1.071,x:291,y:272}},{t:this.instance_5,p:{scaleX:1.071,scaleY:1.071,x:1515,y:301}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.187,scaleY:1.187,x:219,y:235}},{t:this.instance_5,p:{scaleX:1.187,scaleY:1.187,x:1575,y:269}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.256,scaleY:1.256,x:177,y:213}},{t:this.instance_5,p:{scaleX:1.256,scaleY:1.256,x:1610,y:250}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.331,scaleY:1.331,x:130,y:190}},{t:this.instance_5,p:{scaleX:1.331,scaleY:1.331,x:1650,y:228}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.391,scaleY:1.391,x:92,y:171}},{t:this.instance_5,p:{scaleX:1.391,scaleY:1.391,x:1680,y:212}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.442,scaleY:1.442,x:60,y:155}},{t:this.instance_5,p:{scaleX:1.442,scaleY:1.442,x:1707,y:197}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.232,x:565,y:440}}]},8).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.259,x:567,y:440}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.439,x:567,y:440}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.588,x:567,y:440}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.857,x:567,y:440}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:1.125,x:567,y:440}},{t:this.instance_8}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.225,x:614,y:697}}]},5).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.271,x:614,y:697}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.387,x:614,y:697}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.518,x:614,y:697}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.592,x:614,y:697}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.645,x:614,y:697}},{t:this.instance_9}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.313,x:611,y:864}}]},5).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.445,x:611,y:864}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.556,x:611,y:864}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.756,x:611,y:864}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.89,x:611,y:864}}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_7,p:{scaleX:0.966,x:612,y:864}},{t:this.instance_10}]},1).to({state:[]},1).wait(50));

	// 下半身解說
	this.unybrtvcdsgesrgerscfer = new lib.元件15();
	this.unybrtvcdsgesrgerscfer.parent = this;
	this.unybrtvcdsgesrgerscfer.setTransform(1196,497.3,0.426,0.426,0,0,0,35.1,35.3);
	new cjs.ButtonHelper(this.unybrtvcdsgesrgerscfer, 0, 1, 1);

	this.instance_11 = new lib._3bg();
	this.instance_11.parent = this;
	this.instance_11.setTransform(694,471,0.426,0.426);

	this.hjhj = new lib.元件21();
	this.hjhj.parent = this;
	this.hjhj.setTransform(554.4,673.6,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.hjhj, 0, 1, 1);

	this.leehowhowhandsome = new lib.元件16();
	this.leehowhowhandsome.parent = this;
	this.leehowhowhandsome.setTransform(506.9,874.3,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.leehowhowhandsome, 0, 1, 1);

	this.lyczzz = new lib.元件16();
	this.lyczzz.parent = this;
	this.lyczzz.setTransform(554.4,450.9,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.lyczzz, 0, 1, 1);

	this.instance_12 = new lib.vcepng複製4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(583,447,0.257,1.461);

	this.instance_13 = new lib.word1png複製3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(674,241,1.461,1.461);

	this.instance_14 = new lib.word3png複製5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(674,244,1.461,1.461);

	this.instance_15 = new lib.word2png複製7();
	this.instance_15.parent = this;
	this.instance_15.setTransform(677,244,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11,p:{scaleX:0.426,scaleY:0.426,x:694,y:471}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.3,scaleX:0.426,scaleY:0.426,x:1196,y:497.3}}]},149).to({state:[{t:this.instance_11,p:{scaleX:0.525,scaleY:0.525,x:633,y:440}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.3,regY:35.5,scaleX:0.525,scaleY:0.525,x:1250.5,y:473.1}}]},1).to({state:[{t:this.instance_11,p:{scaleX:0.616,scaleY:0.616,x:576,y:412}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.3,regY:35.5,scaleX:0.616,scaleY:0.616,x:1300.8,y:450.6}}]},1).to({state:[{t:this.instance_11,p:{scaleX:0.707,scaleY:0.707,x:519,y:384}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.3,regY:35.5,scaleX:0.707,scaleY:0.707,x:1351,y:428.1}}]},1).to({state:[{t:this.instance_11,p:{scaleX:0.823,scaleY:0.823,x:447,y:348}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.3,regY:35.6,scaleX:0.823,scaleY:0.823,x:1414.8,y:399.5}}]},1).to({state:[{t:this.instance_11,p:{scaleX:0.95,scaleY:0.95,x:367,y:308}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.3,regY:35.6,scaleX:0.95,scaleY:0.95,x:1485.2,y:367.9}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.085,scaleY:1.085,x:282,y:266}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.4,regY:35.6,scaleX:1.085,scaleY:1.085,x:1559.7,y:334.6}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.213,scaleY:1.213,x:202,y:226}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.4,regY:35.6,scaleX:1.213,scaleY:1.213,x:1630.2,y:303.2}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.278,scaleY:1.278,x:161,y:206}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.4,regY:35.6,scaleX:1.278,scaleY:1.278,x:1666.7,y:287}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.316,scaleY:1.316,x:137,y:194}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.4,regY:35.6,scaleX:1.316,scaleY:1.316,x:1687.2,y:277.8}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.389,scaleY:1.389,x:92,y:171}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.4,regY:35.6,scaleX:1.389,scaleY:1.389,x:1728,y:259.6}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.426,scaleY:1.426,x:69,y:159}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.4,regY:35.6,scaleX:1.426,scaleY:1.426,x:1748.1,y:250.6}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.hjhj}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:0.257,x:583,y:447}},{t:this.hjhj}]},8).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:0.356,x:583,y:447}},{t:this.hjhj}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:0.488,x:583,y:447}},{t:this.hjhj}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:0.615,x:583,y:447}},{t:this.hjhj}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:0.756,x:583,y:447}},{t:this.hjhj}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:0.922,x:586,y:447}},{t:this.instance_13},{t:this.hjhj}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:0.284,x:538,y:871}},{t:this.hjhj}]},5).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:0.526,x:539,y:871}},{t:this.hjhj}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:0.758,x:538,y:871}},{t:this.hjhj}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:1.081,x:536,y:871}},{t:this.hjhj}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:1.283,x:535,y:871}},{t:this.hjhj}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:1.42,x:536,y:871}},{t:this.instance_14},{t:this.hjhj}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:0.297,x:584,y:669}},{t:this.hjhj}]},5).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:0.4,x:584,y:669}},{t:this.hjhj}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:0.494,x:587,y:669}},{t:this.hjhj}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:0.585,x:584,y:669}},{t:this.hjhj}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:0.711,x:587,y:669}},{t:this.hjhj}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_12,p:{scaleX:0.981,x:583,y:669}},{t:this.hjhj},{t:this.instance_15}]},1).to({state:[]},1).wait(100));

	// 上半身解說
	this.instance_16 = new lib.關閉按鈕png複製2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1170,488,0.407,0.407);

	this.instance_17 = new lib._2bg();
	this.instance_17.parent = this;
	this.instance_17.setTransform(706,478,0.407,0.407);

	this.dxctfvgybhjnkml = new lib.元件13();
	this.dxctfvgybhjnkml.parent = this;
	this.dxctfvgybhjnkml.setTransform(1768.2,239.8,1.461,1.461,0,0,0,35.1,35.1);
	new cjs.ButtonHelper(this.dxctfvgybhjnkml, 0, 1, 1);

	this.mnbtvrc = new lib.元件12();
	this.mnbtvrc.parent = this;
	this.mnbtvrc.setTransform(545.6,387.2,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.mnbtvrc, 0, 1, 1);

	this.kmnbtrfdvhgtyjntrhseger = new lib.元件12();
	this.kmnbtrfdvhgtyjntrhseger.parent = this;
	this.kmnbtrfdvhgtyjntrhseger.setTransform(615,612.3,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.kmnbtrfdvhgtyjntrhseger, 0, 1, 1);

	this.kjumnbtrveshrtjntrgbvfsderge = new lib.元件12();
	this.kjumnbtrveshrtjntrgbvfsderge.parent = this;
	this.kjumnbtrveshrtjntrgbvfsderge.setTransform(600.6,912.5,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.kjumnbtrveshrtjntrgbvfsderge, 0, 1, 1);

	this.instance_18 = new lib.vcepng複製3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(568,384,0.397,1.461);

	this.instance_19 = new lib.word1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(676,240,1.461,1.461);

	this.instance_20 = new lib.word2png複製6();
	this.instance_20.parent = this;
	this.instance_20.setTransform(672,243,1.461,1.461);

	this.instance_21 = new lib.word3png複製4();
	this.instance_21.parent = this;
	this.instance_21.setTransform(673,240,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17,p:{scaleX:0.407,scaleY:0.407,x:706,y:478}},{t:this.instance_16,p:{scaleX:0.407,scaleY:0.407,x:1170,y:488}}]},99).to({state:[{t:this.instance_17,p:{scaleX:0.526,scaleY:0.526,x:631,y:441}},{t:this.instance_16,p:{scaleX:0.526,scaleY:0.526,x:1232,y:454}}]},1).to({state:[{t:this.instance_17,p:{scaleX:0.625,scaleY:0.625,x:570,y:411}},{t:this.instance_16,p:{scaleX:0.625,scaleY:0.625,x:1283,y:427}}]},1).to({state:[{t:this.instance_17,p:{scaleX:0.769,scaleY:0.769,x:481,y:367}},{t:this.instance_16,p:{scaleX:0.769,scaleY:0.769,x:1357,y:386}}]},1).to({state:[{t:this.instance_17,p:{scaleX:0.897,scaleY:0.897,x:400,y:327}},{t:this.instance_16,p:{scaleX:0.897,scaleY:0.897,x:1423,y:349}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.058,scaleY:1.058,x:300,y:278}},{t:this.instance_16,p:{scaleX:1.058,scaleY:1.058,x:1506,y:304}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.16,scaleY:1.16,x:235,y:245}},{t:this.instance_16,p:{scaleX:1.16,scaleY:1.16,x:1559,y:275}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.277,scaleY:1.277,x:162,y:209}},{t:this.instance_16,p:{scaleX:1.277,scaleY:1.277,x:1619,y:241}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.317,scaleY:1.317,x:137,y:196}},{t:this.instance_16,p:{scaleX:1.317,scaleY:1.317,x:1639,y:231}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.373,scaleY:1.373,x:102,y:180}},{t:this.instance_16,p:{scaleX:1.373,scaleY:1.373,x:1669,y:215}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.416,scaleY:1.416,x:75,y:167}},{t:this.instance_16,p:{scaleX:1.416,scaleY:1.416,x:1691,y:203}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.451,scaleY:1.451,x:53,y:156}},{t:this.instance_16,p:{scaleX:1.451,scaleY:1.451,x:1708,y:193}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.instance_18,p:{scaleX:0.397,y:384,x:568}},{t:this.dxctfvgybhjnkml}]},8).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.instance_18,p:{scaleX:0.533,y:384,x:568}},{t:this.dxctfvgybhjnkml}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.instance_18,p:{scaleX:0.668,y:385,x:568}},{t:this.dxctfvgybhjnkml}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.instance_18,p:{scaleX:0.665,y:384,x:568}},{t:this.dxctfvgybhjnkml}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.instance_18,p:{scaleX:0.886,y:384,x:568}},{t:this.dxctfvgybhjnkml}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_19},{t:this.instance_18,p:{scaleX:1.162,y:384,x:569}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_18,p:{scaleX:0.16,y:608,x:643}}]},5).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_18,p:{scaleX:0.179,y:608,x:645}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_18,p:{scaleX:0.295,y:608,x:641}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_18,p:{scaleX:0.372,y:608,x:638}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_18,p:{scaleX:0.377,y:608,x:641}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_18,p:{scaleX:0.334,y:608,x:643}},{t:this.instance_20}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_18,p:{scaleX:0.233,y:909,x:631}}]},5).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_18,p:{scaleX:0.381,y:909,x:631}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_18,p:{scaleX:0.405,y:909,x:630}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_18,p:{scaleX:0.434,y:909,x:631}}]},1).to({state:[{t:this.instance_17,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_18,p:{scaleX:0.478,y:909,x:631}},{t:this.instance_21}]},2).to({state:[]},1).wait(150));

	// 臉部解說
	this.ggwp = new lib.元件10();
	this.ggwp.parent = this;
	this.ggwp.setTransform(1194,475.2,0.452,0.452,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.ggwp, 0, 1, 1);

	this.instance_22 = new lib._1bgpng複製();
	this.instance_22.parent = this;
	this.instance_22.setTransform(678,463,0.452,0.452);

	this.instance_23 = new lib._1bg();
	this.instance_23.parent = this;
	this.instance_23.setTransform(620,434,0.545,0.545);

	this.instance_24 = new lib.元件14();
	this.instance_24.parent = this;
	this.instance_24.setTransform(379.9,159.1,1.461,1.461,0,0,0,40,80);

	this.veww = new lib.元件11();
	this.veww.parent = this;
	this.veww.setTransform(542.8,637.6,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.veww, 0, 1, 1);

	this.ghghjyesdf = new lib.元件11();
	this.ghghjyesdf.parent = this;
	this.ghghjyesdf.setTransform(534.1,477.2,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.ghghjyesdf, 0, 1, 1);

	this.jytrhbfdv = new lib.元件11();
	this.jytrhbfdv.parent = this;
	this.jytrhbfdv.setTransform(375.8,295.2,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.jytrhbfdv, 0, 1, 1);

	this.instance_25 = new lib.vce();
	this.instance_25.parent = this;
	this.instance_25.setTransform(408,294,0.514,1.461);

	this.instance_26 = new lib.word1png複製2();
	this.instance_26.parent = this;
	this.instance_26.setTransform(671,250,1.461,1.461);

	this.instance_27 = new lib.vcepng複製();
	this.instance_27.parent = this;
	this.instance_27.setTransform(561,475,0.25,1.461);

	this.instance_28 = new lib.word2png複製5();
	this.instance_28.parent = this;
	this.instance_28.setTransform(668,248,1.461,1.461);

	this.instance_29 = new lib.word3png複製3();
	this.instance_29.parent = this;
	this.instance_29.setTransform(670,245,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22},{t:this.ggwp,p:{regX:0,regY:0.1,scaleX:0.452,scaleY:0.452,x:1194,y:475.2}}]},49).to({state:[{t:this.instance_23,p:{scaleX:0.545,scaleY:0.545,x:620,y:434}},{t:this.ggwp,p:{regX:35.3,regY:35.1,scaleX:0.545,scaleY:0.545,x:1261.5,y:467.9}}]},1).to({state:[{t:this.instance_23,p:{scaleX:0.643,scaleY:0.643,x:558,y:403}},{t:this.ggwp,p:{regX:35.3,regY:35.1,scaleX:0.643,scaleY:0.643,x:1315.7,y:443.6}}]},1).to({state:[{t:this.instance_23,p:{scaleX:0.76,scaleY:0.76,x:485,y:367}},{t:this.ggwp,p:{regX:35.3,regY:35.1,scaleX:0.76,scaleY:0.76,x:1380.6,y:414.6}}]},1).to({state:[{t:this.instance_23,p:{scaleX:0.853,scaleY:0.853,x:427,y:338}},{t:this.ggwp,p:{regX:35.4,regY:35.1,scaleX:0.853,scaleY:0.853,x:1432.2,y:391.6}}]},1).to({state:[{t:this.instance_23,p:{scaleX:0.966,scaleY:0.966,x:357,y:302}},{t:this.ggwp,p:{regX:35.4,regY:35.2,scaleX:0.966,scaleY:0.966,x:1494.7,y:363.8}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.069,scaleY:1.069,x:292,y:270}},{t:this.ggwp,p:{regX:35.5,regY:35.3,scaleX:1.069,scaleY:1.069,x:1551.4,y:338.6}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.169,scaleY:1.169,x:229,y:240}},{t:this.ggwp,p:{regX:35.5,regY:35.3,scaleX:1.169,scaleY:1.169,x:1606.9,y:313.9}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.241,scaleY:1.241,x:184,y:218}},{t:this.ggwp,p:{regX:35.5,regY:35.3,scaleX:1.241,scaleY:1.241,x:1646.9,y:296.1}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.312,scaleY:1.312,x:140,y:196}},{t:this.ggwp,p:{regX:35.5,regY:35.4,scaleX:1.312,scaleY:1.312,x:1686,y:278.8}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.373,scaleY:1.373,x:102,y:177}},{t:this.ggwp,p:{regX:35.5,regY:35.4,scaleX:1.373,scaleY:1.373,x:1719.8,y:263.7}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.415,scaleY:1.415,x:76,y:164}},{t:this.ggwp,p:{regX:35.5,regY:35.4,scaleX:1.415,scaleY:1.415,x:1743.1,y:253.4}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_24}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_25,p:{scaleX:0.514,x:408,y:294}}]},3).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_25,p:{scaleX:1.113,x:408,y:294}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_25,p:{scaleX:1.693,x:408,y:294}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_25,p:{scaleX:2.294,x:408,y:294}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_25,p:{scaleX:2.766,x:408,y:294}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_26},{t:this.instance_25,p:{scaleX:2.81,x:396,y:293}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:46,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1767.9,y:239.8}},{t:this.jytrhbfdv,p:{x:375.5}},{t:this.ghghjyesdf,p:{x:533.8}},{t:this.veww,p:{x:542.5}},{t:this.instance_27,p:{scaleX:0.25,x:561,y:475}}]},5).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_27,p:{scaleX:0.299,x:565,y:475}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_27,p:{scaleX:0.687,x:563,y:475}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_27,p:{scaleX:0.948,x:563,y:475}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_27,p:{scaleX:1.124,x:558,y:475}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_28},{t:this.instance_27,p:{scaleX:1.152,x:558,y:475}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_27,p:{scaleX:0.243,x:567,y:634}}]},5).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_27,p:{scaleX:0.539,x:565,y:634}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_27,p:{scaleX:0.632,x:567,y:634}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_27,p:{scaleX:0.837,x:565,y:634}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_27,p:{scaleX:1.012,x:565,y:634}}]},1).to({state:[{t:this.instance_23,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv,p:{x:375.8}},{t:this.ghghjyesdf,p:{x:534.1}},{t:this.veww,p:{x:542.8}},{t:this.instance_27,p:{scaleX:1.066,x:569,y:634}},{t:this.instance_29}]},1).to({state:[]},1).wait(205));

	// 選部位
	this.test = new lib.元件9();
	this.test.parent = this;
	this.test.setTransform(1758.7,1022.2,1.461,1.461,0,0,0,104.6,34.6);
	new cjs.ButtonHelper(this.test, 0, 1, 2);

	this.peibei = new lib.元件8();
	this.peibei.parent = this;
	this.peibei.setTransform(1441.5,1022.2,1.461,1.461,0,0,0,104.5,34.6);
	new cjs.ButtonHelper(this.peibei, 0, 1, 2);

	this.ac = new lib.元件7();
	this.ac.parent = this;
	this.ac.setTransform(1124.5,1022.2,1.461,1.461,0,0,0,104.6,34.6);
	new cjs.ButtonHelper(this.ac, 0, 1, 2);

	this.bot = new lib.元件6();
	this.bot.parent = this;
	this.bot.setTransform(804.5,1022.2,1.461,1.461,0,0,0,104.6,34.6);
	new cjs.ButtonHelper(this.bot, 0, 1, 2);

	this.top = new lib.元件5();
	this.top.parent = this;
	this.top.setTransform(486,1022.2,1.461,1.461,0,0,0,104.6,34.6);
	new cjs.ButtonHelper(this.top, 0, 1, 2);

	this.face = new lib.元件1();
	this.face.parent = this;
	this.face.setTransform(168.8,1022.2,1.461,1.461,0,0,0,104.5,34.6);
	new cjs.ButtonHelper(this.face, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.face},{t:this.top},{t:this.bot},{t:this.ac},{t:this.peibei},{t:this.test}]}).to({state:[]},285).wait(10));

	// 圖層 3
	this.instance_30 = new lib.前言();
	this.instance_30.parent = this;
	this.instance_30.setTransform(811,145,1.468,1.468);

	this.instance_31 = new lib.CS();
	this.instance_31.parent = this;
	this.instance_31.setTransform(811,145,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31},{t:this.instance_30}]}).to({state:[]},1).wait(294));

	// xxx
	this.e04e04 = new lib.e04();
	this.e04e04.parent = this;
	this.e04e04.setTransform(1770.1,124.6,1.7,1.7);
	this.e04e04._off = true;
	new cjs.ButtonHelper(this.e04e04, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.e04e04).wait(294).to({_off:false},0).wait(1));

	// now
	this.chp21 = new lib.chp21();
	this.chp21.parent = this;
	this.chp21.setTransform(962.4,471.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp21, 0, 1, 1);

	this.chp1 = new lib.ch1();
	this.chp1.parent = this;
	this.chp1.setTransform(521.2,263.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp1, 0, 1, 1);

	this.chp122 = new lib.chp122();
	this.chp122.parent = this;
	this.chp122.setTransform(1350.8,390.7,1.464,1.464);
	new cjs.ButtonHelper(this.chp122, 0, 1, 1);

	this.chp121 = new lib.chp121();
	this.chp121.parent = this;
	this.chp121.setTransform(1350.8,293.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp121, 0, 1, 1);

	this.chp35 = new lib.chp35();
	this.chp35.parent = this;
	this.chp35.setTransform(1447.4,993,1.61,1.61);
	new cjs.ButtonHelper(this.chp35, 0, 1, 1);

	this.chp34 = new lib.chp34();
	this.chp34.parent = this;
	this.chp34.setTransform(1447.4,902.9,1.61,1.61);
	new cjs.ButtonHelper(this.chp34, 0, 1, 1);

	this.chp33 = new lib.chp33();
	this.chp33.parent = this;
	this.chp33.setTransform(1447.4,814.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp33, 0, 1, 1);

	this.chp32 = new lib.chp32();
	this.chp32.parent = this;
	this.chp32.setTransform(1447.4,722.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp32, 0, 1, 1);

	this.chp31 = new lib.chp31();
	this.chp31.parent = this;
	this.chp31.setTransform(1447.4,625.6,1.61,1.61);
	new cjs.ButtonHelper(this.chp31, 0, 1, 1);

	this.chp112 = new lib.chp112();
	this.chp112.parent = this;
	this.chp112.setTransform(1350.8,196.8,1.464,1.464);
	new cjs.ButtonHelper(this.chp112, 0, 1, 1);

	this.chp111 = new lib.chp111();
	this.chp111.parent = this;
	this.chp111.setTransform(1350.8,87.7,1.464,1.464);
	new cjs.ButtonHelper(this.chp111, 0, 1, 1);

	this.chp12 = new lib.chp12();
	this.chp12.parent = this;
	this.chp12.setTransform(961.4,330.1,1.464,1.464,0,0,0,-0.7,-0.6);
	new cjs.ButtonHelper(this.chp12, 0, 1, 1);

	this.chp11 = new lib.chp11();
	this.chp11.parent = this;
	this.chp11.setTransform(962.6,136.3,1.464,1.464,0,0,0,0.1,0.5);
	new cjs.ButtonHelper(this.chp11, 0, 1, 1);

	this.chp3 = new lib.ch3();
	this.chp3.parent = this;
	this.chp3.setTransform(529.4,835.1,1.464,1.464);
	new cjs.ButtonHelper(this.chp3, 0, 1, 1);

	this.chp2 = new lib.ch2();
	this.chp2.parent = this;
	this.chp2.setTransform(524,536.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2},{t:this.chp3},{t:this.chp11},{t:this.chp12},{t:this.chp111},{t:this.chp112},{t:this.chp31},{t:this.chp32},{t:this.chp33},{t:this.chp34},{t:this.chp35},{t:this.chp121},{t:this.chp122},{t:this.chp1},{t:this.chp21}]},294).wait(1));

	// bggg
	this.chp1_1 = new lib.ch1();
	this.chp1_1.parent = this;
	this.chp1_1.setTransform(521.2,263.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp1_1, 0, 1, 1);

	this.chp122_1 = new lib.chp122();
	this.chp122_1.parent = this;
	this.chp122_1.setTransform(1350.8,390.7,1.464,1.464);
	new cjs.ButtonHelper(this.chp122_1, 0, 1, 1);

	this.chp121_1 = new lib.chp121();
	this.chp121_1.parent = this;
	this.chp121_1.setTransform(1350.8,293.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp121_1, 0, 1, 1);

	this.chp35_1 = new lib.chp35();
	this.chp35_1.parent = this;
	this.chp35_1.setTransform(1447.4,993,1.61,1.61);
	new cjs.ButtonHelper(this.chp35_1, 0, 1, 1);

	this.chp34_1 = new lib.chp34();
	this.chp34_1.parent = this;
	this.chp34_1.setTransform(1447.4,902.9,1.61,1.61);
	new cjs.ButtonHelper(this.chp34_1, 0, 1, 1);

	this.chp33_1 = new lib.chp33();
	this.chp33_1.parent = this;
	this.chp33_1.setTransform(1447.4,814.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp33_1, 0, 1, 1);

	this.chp32_1 = new lib.chp32();
	this.chp32_1.parent = this;
	this.chp32_1.setTransform(1447.4,722.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp32_1, 0, 1, 1);

	this.chp31_1 = new lib.chp31();
	this.chp31_1.parent = this;
	this.chp31_1.setTransform(1447.4,625.6,1.61,1.61);
	new cjs.ButtonHelper(this.chp31_1, 0, 1, 1);

	this.chp112_1 = new lib.chp112();
	this.chp112_1.parent = this;
	this.chp112_1.setTransform(1350.8,196.8,1.464,1.464);
	new cjs.ButtonHelper(this.chp112_1, 0, 1, 1);

	this.chp111_1 = new lib.chp111();
	this.chp111_1.parent = this;
	this.chp111_1.setTransform(1350.8,87.7,1.464,1.464);
	new cjs.ButtonHelper(this.chp111_1, 0, 1, 1);

	this.chp22 = new lib.chp22();
	this.chp22.parent = this;
	this.chp22.setTransform(962.4,590.6,1.464,1.464);
	new cjs.ButtonHelper(this.chp22, 0, 1, 1);

	this.chp21_1 = new lib.chp21();
	this.chp21_1.parent = this;
	this.chp21_1.setTransform(962.4,471.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp21_1, 0, 1, 1);

	this.ch3 = new lib.ch3();
	this.ch3.parent = this;
	this.ch3.setTransform(529.4,835.1,1.464,1.464);
	new cjs.ButtonHelper(this.ch3, 0, 1, 1);

	this.chp2_1 = new lib.ch2();
	this.chp2_1.parent = this;
	this.chp2_1.setTransform(524,536.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp2_1, 0, 1, 1);

	this.chp12_1 = new lib.chp12();
	this.chp12_1.parent = this;
	this.chp12_1.setTransform(961.4,330.1,1.464,1.464,0,0,0,-0.7,-0.6);
	new cjs.ButtonHelper(this.chp12_1, 0, 1, 1);

	this.chp11_1 = new lib.chp11();
	this.chp11_1.parent = this;
	this.chp11_1.setTransform(962.6,136.3,1.464,1.464,0,0,0,0.1,0.5);
	new cjs.ButtonHelper(this.chp11_1, 0, 1, 1);

	this.instance_32 = new lib.現在位置_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(959.3,542,1.477,1.477,0,0,0,0,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_32},{t:this.chp11_1},{t:this.chp12_1},{t:this.chp2_1},{t:this.ch3},{t:this.chp21_1},{t:this.chp22},{t:this.chp111_1},{t:this.chp112_1},{t:this.chp31_1},{t:this.chp32_1},{t:this.chp33_1},{t:this.chp34_1},{t:this.chp35_1},{t:this.chp121_1},{t:this.chp122_1},{t:this.chp1_1}]},289).to({state:[{t:this.instance_32},{t:this.chp22}]},5).wait(1));

	// 轉轉人
	this.instance_33 = new lib.轉轉人();
	this.instance_33.parent = this;
	this.instance_33.setTransform(995.7,577.1,1.461,1.461,0,0,0,489,-25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(295));

	// BG
	this.instance_34 = new lib.女生BG();
	this.instance_34.parent = this;
	this.instance_34.setTransform(0,0,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).to({_off:true},285).wait(4).to({_off:false},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,541,1934.8,1081.3);
// library properties:
lib.properties = {
	width: 1920,
	height: 1082,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/chpbb_atlas_.png", id:"chpbb_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;