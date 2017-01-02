(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"chpcc_atlas_", frames: [[3781,3392,200,51],[2500,2730,512,512],[1368,0,1314,740],[3779,3974,173,354],[3750,2145,173,354],[0,2097,1248,583],[3014,2730,1052,192],[3014,2924,1052,192],[2500,2145,1248,583],[1054,4783,1052,150],[0,3419,1052,150],[0,3875,1052,150],[1054,4631,1052,150],[3954,3974,140,140],[0,3723,1052,150],[2108,3750,1052,150],[1054,4479,1052,150],[1054,3719,1052,150],[2108,3902,1052,150],[2885,3446,1052,150],[0,3267,1052,150],[0,4635,1052,150],[1054,3871,1052,150],[1054,4023,1052,150],[1054,3567,1052,150],[1054,4327,1052,150],[2108,3598,1052,150],[0,4027,1052,150],[2108,4358,1052,150],[2108,4510,1052,150],[0,4331,1052,150],[2108,4054,1052,150],[1054,4175,1052,150],[0,4483,1052,150],[0,4179,1052,150],[0,3571,1052,150],[2108,4206,1052,150],[2108,4662,1052,150],[1316,1484,1248,583],[3939,3118,150,150],[0,1512,1248,583],[1250,2654,1248,583],[0,2682,1248,583],[1250,2069,1248,583],[3162,3598,615,160],[3162,4084,615,160],[0,0,1366,768],[3162,3922,615,160],[3162,3760,615,160],[3926,1463,158,332],[3926,1797,158,332],[3559,3118,320,50],[3014,3118,543,326],[1250,3239,543,326],[2684,742,1279,719],[1795,3239,543,326],[2340,3244,543,326],[2684,0,1314,740],[1368,742,1314,740],[0,770,1314,740],[1316,770,50,50],[1316,822,50,50],[4000,0,80,80],[3965,1108,120,120],[3965,986,120,120],[3965,742,120,120],[3688,4246,80,80],[3965,1230,120,120],[3960,3270,120,120],[3965,864,120,120],[3559,3341,220,55],[3162,4246,220,55],[3162,4360,220,55],[3828,4330,220,55],[3606,4330,220,55],[3384,4303,220,55],[3559,3284,280,55],[3162,4303,220,55],[3384,4246,220,55],[3559,3170,280,55],[3750,2657,320,50],[3750,2605,320,50],[3750,2553,320,50],[3750,2501,320,50],[3559,3227,280,55],[3779,3598,179,374],[2684,1463,1240,680],[3606,4246,80,80],[2885,3244,120,120]]}
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



(lib._101n2 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._22 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._33提示 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.男人客 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.男人客_1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.流程01BG = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.流程02對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.流程02對話2 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.流程02BG = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.流程03對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.流程03對話2 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.流程03對話3 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.流程03對話4 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.流程03O = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.流程04對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.流程05對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.流程05對話2 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.流程06對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.流程07對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.流程07對話2 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.流程08對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.流程09對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.流程09對話2 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.流程10對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.流程10對話2 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.流程11對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.流程11對話2 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.流程11對話3 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.流程12對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.流程12對話2 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.流程13對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.流程14對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.流程15對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.流程16對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.流程17對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.流程18對話1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.流程18對話2 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.流程18對話3 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.流程22對話4 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.arrow = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.bg1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.bg3 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.J1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.J3 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.手機模式 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.L2 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.L4 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.女人客 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.女人客_1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.ThinkTouch = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.T行車安全螢幕畫面 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.T影音娛樂螢幕畫面 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.TT螢幕畫面 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.T系統設定螢幕畫面 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.T電話通訊螢幕畫面 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.U31BG = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.U33學習目標1 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.U33學習目標2 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.x = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.xx = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.提示 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.提示w = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.提示x = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.提示xw = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.現在位置w = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.現在位置x = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.現在位置xw = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0000_創新歷程 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0001_創立理念 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0002_心路歷程 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0003_核心人物 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0004_納智捷汽車 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0005_裕隆集團 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0006_CH1公司歷程 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0000_女生服裝 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0001_男生服裝 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0002_CH2服裝儀容 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0000_數位科技體驗區 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0001_AR實車賞車 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0003_3D體驗劇場 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0004_迎賓區 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0005_CH3銷售SOP = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.賣車的 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.跨殺小啦 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.首頁w = function() {
	this.spriteSheet = ss["chpcc_atlas_"];
	this.gotoAndStop(88);
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


(lib.wife = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.女人客();
	this.instance.parent = this;
	this.instance.setTransform(-79,-166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wife, new cjs.Rectangle(-79,-166,158,332), null);


(lib.man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.男人客();
	this.instance.parent = this;
	this.instance.setTransform(-87,-177);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man, new cjs.Rectangle(-87,-177,173,354), null);


(lib.chp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._22();
	this.instance.parent = this;
	this.instance.setTransform(-256,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256,-255,512,512);


(lib.bg3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg3();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg3_1, new cjs.Rectangle(-624,-291,1248,583), null);


(lib.bg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(-624,-291,1248,583), null);


(lib._21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程22對話4();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._21, new cjs.Rectangle(-624,-291,1248,583), null);


(lib.L4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.L4();
	this.instance.parent = this;
	this.instance.setTransform(-308,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.L4_1, new cjs.Rectangle(-308,-80,615,160), null);


(lib.L2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.L2();
	this.instance.parent = this;
	this.instance.setTransform(-308,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.L2_1, new cjs.Rectangle(-308,-80,615,160), null);


(lib.J3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.J3();
	this.instance.parent = this;
	this.instance.setTransform(-308,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.J3_1, new cjs.Rectangle(-308,-80,615,160), null);


(lib.J1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.J1();
	this.instance.parent = this;
	this.instance.setTransform(-308,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.J1_1, new cjs.Rectangle(-308,-80,615,160), null);


(lib.bg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1_1, new cjs.Rectangle(-624,-291,1248,583), null);


(lib.arrow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.752,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.8,117.5);


(lib.JJ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.賣車的();
	this.instance.parent = this;
	this.instance.setTransform(-84,-174,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.JJ, new cjs.Rectangle(-84,-174,167,349), null);


(lib.couple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.男人客_1();
	this.instance.parent = this;
	this.instance.setTransform(-21,-177);

	this.instance_1 = new lib.女人客_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-152,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.couple, new cjs.Rectangle(-152,-177,304,354), null);


(lib.bggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程01BG();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bggg, new cjs.Rectangle(-624,-291,1248,583), null);


(lib.bg2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib.流程02BG();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_2, new cjs.Rectangle(-624,-291,1248,583), null);


(lib._12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程02對話2();
	this.instance.parent = this;
	this.instance.setTransform(-526,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._12, new cjs.Rectangle(-526,-95,1052,192), null);


(lib._11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程02對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._11, new cjs.Rectangle(-526,-95,1052,192), null);


(lib.x_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.x();
	this.instance.parent = this;
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.4,scaleY:1.4,x:-35,y:-34},0).wait(1).to({scaleX:1,scaleY:1,x:-25,y:-24},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-24,50,50);


(lib.hint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._33提示();
	this.instance.parent = this;
	this.instance.setTransform(-657,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hint, new cjs.Rectangle(-657,-370,1314,740), null);


(lib._3nowx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.現在位置x();
	this.instance.parent = this;
	this.instance.setTransform(-58,-48);

	this.instance_1 = new lib.現在位置xw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-57,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-48,120,120);


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


(lib._2hintx = function(mode,startPosition,loop) {
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


(lib._2hint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提示();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-39.5);

	this.instance_1 = new lib.提示w();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-59,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


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
	this.instance = new lib.ThinkTouch();
	this.instance.parent = this;
	this.instance.setTransform(-160,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-24,320,50);


(lib.chp32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0002s_0003_3D體驗劇場();
	this.instance.parent = this;
	this.instance.setTransform(-160,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-24,320,50);


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
	this.instance = new lib.課程地圖_0001s_0000_女生服裝();
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


(lib.nissannext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._101n2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17,x:-17.2,y:-4.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:6.9,y:1.8},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,51);


(lib.nissan2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U33學習目標2();
	this.instance.parent = this;
	this.instance.setTransform(-657,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan2, new cjs.Rectangle(-657,-370,1314,740), null);


(lib.nissan1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U33學習目標1();
	this.instance.parent = this;
	this.instance.setTransform(-657,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan1, new cjs.Rectangle(-657,-370,1314,740), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U31BG();
	this.instance.parent = this;
	this.instance.setTransform(-657,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-657,-370,1314,740), null);


(lib.bg_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_2, new cjs.Rectangle(-624,-291,1248,583), null);


(lib.red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(9.7,1,1).p("ArespIW9AAIAAZTI29AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.red, new cjs.Rectangle(-78.3,-85.8,156.7,171.7), null);


(lib.O = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程03O();
	this.instance.parent = this;
	this.instance.setTransform(-70,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.O, new cjs.Rectangle(-70,-69,140,140), null);


(lib._38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程18對話3();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._38, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程18對話2();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._37, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程18對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._36, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程17對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._35, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._344 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程15對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._344, new cjs.Rectangle(-526,-68,1052,150), null);


(lib._34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程16對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._34, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程14對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._33, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程13對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._32, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程12對話2();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._31, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程12對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._30, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程11對話3();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._29, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程11對話2();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._28, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程11對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._27, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程10對話2();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._26, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程10對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._25, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程09對話2();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._24, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程09對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._23, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程08對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._22_1, new cjs.Rectangle(-526,-69,1052,150), null);


(lib._21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib.流程07對話2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._21_1, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程07對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._20, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程06對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._19, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程05對話2();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._18, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程05對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._17, new cjs.Rectangle(-526,-67,1052,150), null);


(lib._16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程04對話1();
	this.instance.parent = this;
	this.instance.setTransform(-526,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._16, new cjs.Rectangle(-526,-66,1052,150), null);


(lib._15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程03對話4();
	this.instance.parent = this;
	this.instance.setTransform(-526,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._15, new cjs.Rectangle(-526,-66,1052,150), null);


(lib._14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程03對話3();
	this.instance.parent = this;
	this.instance.setTransform(-526,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._14, new cjs.Rectangle(-526,-66,1052,150), null);


(lib._13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.流程03對話2();
	this.instance.parent = this;
	this.instance.setTransform(-526,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._13, new cjs.Rectangle(-526,-66,1052,150), null);


(lib._12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib.流程03對話1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-526,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._12_1, new cjs.Rectangle(-526,-66,1052,150), null);


(lib._11push = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.TT螢幕畫面();
	this.instance.parent = this;
	this.instance.setTransform(-368,-209,0.577,0.577);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-368,-209,738,414.9);


(lib._115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.手機模式();
	this.instance.parent = this;
	this.instance.setTransform(-249,-169,0.428,0.428);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._115, new cjs.Rectangle(-249,-169,584,328.3), null);


(lib._114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.T系統設定螢幕畫面();
	this.instance.parent = this;
	this.instance.setTransform(-272,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._114, new cjs.Rectangle(-272,-163,543,326), null);


(lib._113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.T行車安全螢幕畫面();
	this.instance.parent = this;
	this.instance.setTransform(-272,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._113, new cjs.Rectangle(-272,-163,543,326), null);


(lib._112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.T電話通訊螢幕畫面();
	this.instance.parent = this;
	this.instance.setTransform(-272,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._112, new cjs.Rectangle(-272,-163,543,326), null);


(lib._111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.T影音娛樂螢幕畫面();
	this.instance.parent = this;
	this.instance.setTransform(-272,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._111, new cjs.Rectangle(-272,-163,543,326), null);


(lib._11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib.TT螢幕畫面();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-368,-209,0.577,0.577);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._11_1, new cjs.Rectangle(-368,-209,738,414.9), null);


(lib.arrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.arrow1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,56.4,58.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({alpha:0.02},0).wait(14).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-58.7,112.8,117.5);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		playSound("_331");
	}
	this.frame_54 = function() {
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
	}
	this.frame_222 = function() {
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
		
		this.nissannext.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_24.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_24()
		{
			this.gotoAndPlay(223);
		}
	}
	this.frame_249 = function() {
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
		
		this.gogoooo.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_63.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_63()
		{
			this.gotoAndPlay(250);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.hint.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_64.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_64()
		{
			this.gotoAndPlay(224);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.local.addEventListener("click", fl_ClickToGoToAndStopAtFrame_26.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_26()
		{
			this.gotoAndStop(5414);
		}
	}
	this.frame_338 = function() {
		playSound("_332");
	}
	this.frame_1443 = function() {
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
		
		this.gooooo.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_67.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_67()
		{
			this.gotoAndPlay(1444);
		}
	}
	this.frame_1464 = function() {
		playSound("_333");
	}
	this.frame_1885 = function() {
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
		
		this.fuuuu.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_69.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_69()
		{
			this.gotoAndPlay(1886);
		}
	}
	this.frame_1900 = function() {
		playSound("_334");
	}
	this.frame_2242 = function() {
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
		
		this.ckkkkk.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_70.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_70()
		{
			this.gotoAndPlay(2243);
		}
	}
	this.frame_2256 = function() {
		playSound("_335");
	}
	this.frame_3934 = function() {
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
		
		this.e0e0e0e.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_71.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_71()
		{
			this.gotoAndPlay(3935);
		}
	}
	this.frame_3945 = function() {
		playSound("_336");
	}
	this.frame_4229 = function() {
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
		
		this.wefwef.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_72.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_72()
		{
			this.gotoAndPlay(4320);
		}
	}
	this.frame_4248 = function() {
		playSound("_337");
	}
	this.frame_5003 = function() {
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
		
		this.arrow1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_75.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_75()
		{
			this.gotoAndPlay(5004);
		}
	}
	this.frame_5024 = function() {
		playSound("_338");
	}
	this.frame_5223 = function() {
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
		
		this.arrow2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_76.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_76()
		{
			this.gotoAndPlay(5224);
		}
	}
	this.frame_5408 = function() {
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
		
		
		this.local22.addEventListener("click", fl_ClickToGoToAndStopAtFrame_27.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_27()
		{
			this.gotoAndStop(5419);
		}
	}
	this.frame_5414 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.e04.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_78.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_78()
		{
			this.gotoAndPlay(263);
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
		
		this.chp22.addEventListener("click", fl_ClickToGoToWebPage_18);
		
		function fl_ClickToGoToWebPage_18() {
			window.open("chpbb.html", "_self");
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
	this.frame_5419 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.gg.addEventListener("click", fl_ClickToGoToAndStopAtFrame_28.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_28()
		{
			this.gotoAndStop(5408);
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp1a.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		function fl_ClickToGoToWebPage_19() {
			window.open("chpa.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp11a.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			window.open("chpaa.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp12a.addEventListener("click", fl_ClickToGoToWebPage_9);
		
		function fl_ClickToGoToWebPage_9() {
			window.open("chpab.html", "_self");
		}
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp112a.addEventListener("click", fl_ClickToGoToWebPage_11);
		
		function fl_ClickToGoToWebPage_11() {
			window.open("chpaab.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp121a.addEventListener("click", fl_ClickToGoToWebPage_12);
		
		function fl_ClickToGoToWebPage_12() {
			window.open("chpaba.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp122a.addEventListener("click", fl_ClickToGoToWebPage_13);
		
		function fl_ClickToGoToWebPage_13() {
			window.open("chpabb.html", "_self");
		}
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp2a.addEventListener("click", fl_ClickToGoToWebPage_16);
		
		function fl_ClickToGoToWebPage_16() {
			window.open("chpb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp21a.addEventListener("click", fl_ClickToGoToWebPage_17);
		
		function fl_ClickToGoToWebPage_17() {
			window.open("chpba.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp22a.addEventListener("click", fl_ClickToGoToWebPage_18);
		
		function fl_ClickToGoToWebPage_18() {
			window.open("chpbb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp3a.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		function fl_ClickToGoToWebPage_19() {
			window.open("chpc.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp31a.addEventListener("click", fl_ClickToGoToWebPage_20);
		
		function fl_ClickToGoToWebPage_20() {
			window.open("chpca.html", "_self");
		}
		
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp34a.addEventListener("click", fl_ClickToGoToWebPage_23);
		
		function fl_ClickToGoToWebPage_23() {
			window.open("chpcd.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp35a.addEventListener("click", fl_ClickToGoToWebPage_24);
		
		function fl_ClickToGoToWebPage_24() {
			window.open("chpce.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp111a.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("chpaaa.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp32.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("chpcb.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(45).call(this.frame_54).wait(168).call(this.frame_222).wait(27).call(this.frame_249).wait(89).call(this.frame_338).wait(1105).call(this.frame_1443).wait(21).call(this.frame_1464).wait(421).call(this.frame_1885).wait(15).call(this.frame_1900).wait(342).call(this.frame_2242).wait(14).call(this.frame_2256).wait(1678).call(this.frame_3934).wait(11).call(this.frame_3945).wait(284).call(this.frame_4229).wait(19).call(this.frame_4248).wait(755).call(this.frame_5003).wait(21).call(this.frame_5024).wait(199).call(this.frame_5223).wait(185).call(this.frame_5408).wait(6).call(this.frame_5414).wait(5).call(this.frame_5419).wait(1));

	// Actions
	this.instance = new lib._3nowx();
	this.instance.parent = this;
	this.instance.setTransform(1843.6,82,1.458,1.458);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.instance_1 = new lib._2hintx();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1701.7,82.2,1.458,1.458,0,0,0,-0.4,0.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.home = new lib._1main();
	this.home.parent = this;
	this.home.setTransform(1560.8,83.5,1.461,1.461,0,0,0,0.7,0.6);
	new cjs.ButtonHelper(this.home, 0, 1, 2);

	this.local = new lib._3now();
	this.local.parent = this;
	this.local.setTransform(1843.6,83.5,1.461,1.461,0,0,0,0.6,0.6);
	new cjs.ButtonHelper(this.local, 0, 1, 2);

	this.hint = new lib._2hint();
	this.hint.parent = this;
	this.hint.setTransform(1702.3,83.5,1.461,1.461,0,0,0,0.7,0.6);
	new cjs.ButtonHelper(this.hint, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},54).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},168).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},27).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1182).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},442).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},357).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1692).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},295).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},750).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},24).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},196).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},24).to({state:[{t:this.home},{t:this.instance_1},{t:this.local}]},185).to({state:[]},1).wait(11));

	// bg
	this.instance_2 = new lib.bg_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(959.8,541.6,1.461,1.461);
	this.instance_2.alpha = 0.379;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(260).to({_off:false},0).to({alpha:1},14).wait(5134).to({_off:true},1).wait(11));

	// 1.2
	this.instance_3 = new lib._12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(959.9,883.5,1.499,1.499);
	this.instance_3.alpha = 0.379;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(612).to({_off:false},0).to({alpha:1},10).wait(142).to({alpha:0},10).to({_off:true},1).wait(4645));

	// 1.1
	this.instance_4 = new lib._11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(959.7,885,1.499,1.499,0,0,0,-0.1,-0.5);
	this.instance_4.alpha = 0.379;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(324).to({_off:false},0).to({alpha:1},15).wait(265).to({alpha:0},10).to({_off:true},1).wait(4805));

	// couple
	this.instance_5 = new lib.couple();
	this.instance_5.parent = this;
	this.instance_5.setTransform(2541.5,699.3,1.921,1.921);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(274).to({_off:false},0).to({x:2166.7,y:708.4},10).to({x:2027.6,y:652.4},5).to({x:1770.1,y:708.4},7).to({x:1582.8,y:664.4},4).to({x:1554.2,y:708.4},4).to({alpha:0.32},8).to({_off:true},1).wait(5107));

	// J
	this.instance_6 = new lib.JJ();
	this.instance_6.parent = this;
	this.instance_6.setTransform(2083.7,717.5,1.842,1.842,0,0,0,-1,-0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(274).to({_off:false},0).to({x:1898.6,y:683.5},5).to({x:1693.4,y:717.5},5).to({x:1565,y:670.5},5).to({x:1171.1,y:660.1},10).to({x:1066.3,y:688.8},5).to({alpha:0.32},8).to({_off:true},1).wait(5107));

	// bg2
	this.instance_7 = new lib.bg2_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(963.2,622.2,1.462,1.462,0,0,0,0.1,0.5);
	this.instance_7.alpha = 0.32;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(314).to({_off:false},0).to({alpha:1},10).wait(449).to({alpha:0.219},5).to({_off:true},1).wait(4641));

	// bg1
	this.instance_8 = new lib.bggg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(962.7,621.4,1.462,1.462,0,0,0,0.1,-0.1);
	this.instance_8.alpha = 0.379;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(260).to({_off:false},0).to({alpha:1},14).wait(30).to({alpha:0},10).to({_off:true},1).wait(5105));

	// 3.8
	this.instance_9 = new lib._38();
	this.instance_9.parent = this;
	this.instance_9.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_9.alpha = 0.34;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4585).to({_off:false},0).to({alpha:1},9).wait(130).to({alpha:0.34},5).to({_off:true},1).wait(690));

	// 3.7
	this.instance_10 = new lib._37();
	this.instance_10.parent = this;
	this.instance_10.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_10.alpha = 0.34;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4420).to({_off:false},0).to({alpha:1},9).wait(151).to({alpha:0.34},5).to({_off:true},1).wait(834));

	// 3.6
	this.instance_11 = new lib._36();
	this.instance_11.parent = this;
	this.instance_11.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_11.alpha = 0.34;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4230).to({_off:false},0).to({alpha:1},9).wait(176).to({alpha:0.34},5).to({_off:true},1).wait(999));

	// 手機
	this.instance_12 = new lib._115();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1269.5,514.1,1.793,1.793,0,0,0,-0.1,1.7);
	this.instance_12.alpha = 0.34;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4230).to({_off:false},0).to({alpha:1},9).wait(485).to({alpha:0.34},5).to({_off:true},1).wait(690));

	// 3.5
	this.instance_13 = new lib._35();
	this.instance_13.parent = this;
	this.instance_13.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_13.alpha = 0.34;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4119).to({_off:false},0).to({alpha:1},9).wait(101).to({_off:true},1).wait(1190));

	// 3.4
	this.instance_14 = new lib._34();
	this.instance_14.parent = this;
	this.instance_14.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_14.alpha = 0.34;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3935).to({_off:false},0).to({alpha:1},9).wait(170).to({alpha:0.34},5).to({_off:true},1).wait(1300));

	// 系統
	this.instance_15 = new lib._114();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1269.5,514.1,1.793,1.793,0,0,0,-0.1,1.7);
	this.instance_15.alpha = 0.34;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(3935).to({_off:false},0).to({alpha:1},9).wait(170).to({alpha:0.34},5).to({_off:true},1).wait(1300));

	// 3.4....
	this.instance_16 = new lib._344();
	this.instance_16.parent = this;
	this.instance_16.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_16.alpha = 0.34;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3825).to({_off:false},0).to({alpha:1},9).wait(100).to({_off:true},1).wait(1485));

	// red
	this.instance_17 = new lib.red();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1271.3,447.1,1.783,1.112,0,0,0,0.2,-0.2);
	this.instance_17.alpha = 0.34;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(3654).to({_off:false},0).to({y:523.8,alpha:1},9).wait(156).to({alpha:0},5).to({_off:true},1).wait(1595));

	// 3.3
	this.instance_18 = new lib._33();
	this.instance_18.parent = this;
	this.instance_18.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_18.alpha = 0.34;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(3654).to({_off:false},0).to({alpha:1},9).wait(156).to({alpha:0.34},5).to({_off:true},1).wait(1595));

	// red
	this.instance_19 = new lib.red();
	this.instance_19.parent = this;
	this.instance_19.setTransform(1026.4,447.1,1.783,1.112,0,0,0,0.2,-0.2);
	this.instance_19.alpha = 0.34;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3519).to({_off:false},0).to({y:526.7,alpha:1},9).wait(121).to({alpha:0},5).to({_off:true},1).wait(1765));

	// 3.2
	this.instance_20 = new lib._32();
	this.instance_20.parent = this;
	this.instance_20.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_20.alpha = 0.34;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(3519).to({_off:false},0).to({alpha:1},9).wait(121).to({alpha:0.34},5).to({_off:true},1).wait(1765));

	// red
	this.instance_21 = new lib.red();
	this.instance_21.parent = this;
	this.instance_21.setTransform(1516.1,305.5,1.783,1.112,0,0,0,0.2,-0.2);
	this.instance_21.alpha = 0.34;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(3274).to({_off:false},0).to({y:376.3,alpha:1},9).wait(231).to({alpha:0},5).to({_off:true},1).wait(1900));

	// 3.1
	this.instance_22 = new lib._31();
	this.instance_22.parent = this;
	this.instance_22.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_22.alpha = 0.34;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(3407).to({_off:false},0).to({alpha:1},9).wait(98).to({alpha:0.34},5).to({_off:true},1).wait(1900));

	// 3.0
	this.instance_23 = new lib._30();
	this.instance_23.parent = this;
	this.instance_23.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_23.alpha = 0.34;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(3274).to({_off:false},0).to({alpha:1},9).wait(119).to({alpha:0.34},5).to({_off:true},1).wait(2012));

	// red
	this.instance_24 = new lib.red();
	this.instance_24.parent = this;
	this.instance_24.setTransform(1274.2,305.5,1.783,1.112,0,0,0,0.2,-0.2);
	this.instance_24.alpha = 0.34;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(2824).to({_off:false},0).to({y:373.3,alpha:1},9).wait(436).to({alpha:0},5).to({_off:true},1).wait(2145));

	// 2.9
	this.instance_25 = new lib._29();
	this.instance_25.parent = this;
	this.instance_25.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_25.alpha = 0.34;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(3082).to({_off:false},0).to({alpha:1},10).wait(172).to({alpha:0.34},10).to({_off:true},1).wait(2145));

	// 2.8
	this.instance_26 = new lib._28();
	this.instance_26.parent = this;
	this.instance_26.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_26.alpha = 0.34;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(2965).to({_off:false},0).to({alpha:1},10).wait(97).to({alpha:0.34},10).to({_off:true},1).wait(2337));

	// 2.7
	this.instance_27 = new lib._27();
	this.instance_27.parent = this;
	this.instance_27.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_27.alpha = 0.34;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(2824).to({_off:false},0).to({alpha:1},10).wait(121).to({alpha:0.34},10).to({_off:true},1).wait(2454));

	// 2.6
	this.instance_28 = new lib._26();
	this.instance_28.parent = this;
	this.instance_28.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_28.alpha = 0.34;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(2704).to({_off:false},0).to({alpha:1},10).wait(100).to({alpha:0.34},10).to({_off:true},1).wait(2595));

	// 2.5
	this.instance_29 = new lib._25();
	this.instance_29.parent = this;
	this.instance_29.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_29.alpha = 0.34;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(2526).to({_off:false},0).to({alpha:1},9).wait(169).to({alpha:0.34},5).to({_off:true},1).wait(2710));

	// red
	this.instance_30 = new lib.red();
	this.instance_30.parent = this;
	this.instance_30.setTransform(1029.4,305.5,1.783,1.112,0,0,0,0.2,-0.2);
	this.instance_30.alpha = 0.34;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(2526).to({_off:false},0).to({y:373.3,alpha:1},9).wait(284).to({alpha:0},5).to({_off:true},1).wait(2595));

	// 2.4
	this.instance_31 = new lib._24();
	this.instance_31.parent = this;
	this.instance_31.setTransform(961.2,923.3,1.52,1.52,0,0,0,-0.5,-0.5);
	this.instance_31.alpha = 0.34;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(2381).to({_off:false},0).to({alpha:1},7).wait(131).to({alpha:0.34},7).to({_off:true},1).wait(2893));

	// 2.3
	this.instance_32 = new lib._23();
	this.instance_32.parent = this;
	this.instance_32.setTransform(961.2,923.3,1.52,1.52,0,0,0,-0.5,-0.5);
	this.instance_32.alpha = 0.34;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(2243).to({_off:false},0).to({alpha:1},7).wait(126).to({alpha:0.34},5).to({_off:true},1).wait(3038));

	// 行車
	this.instance_33 = new lib._113();
	this.instance_33.parent = this;
	this.instance_33.setTransform(1269.5,514.1,1.793,1.793,0,0,0,-0.1,1.7);
	this.instance_33.alpha = 0.34;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(2243).to({_off:false},0).to({alpha:1},5).wait(1571).to({alpha:0.34},5).to({_off:true},1).wait(1595));

	// 2.2
	this.instance_34 = new lib._22_1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(961.2,926.2,1.52,1.52,0,0,0,-0.5,-0.5);
	this.instance_34.alpha = 0.34;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(2136).to({_off:false},0).to({alpha:1},7).wait(99).to({_off:true},1).wait(3177));

	// 2.1
	this.instance_35 = new lib._21_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(961.2,923.3,1.52,1.52,0,0,0,-0.5,-0.5);
	this.instance_35.alpha = 0.34;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(2024).to({_off:false},0).to({alpha:1},7).wait(98).to({alpha:0.34},7).to({_off:true},1).wait(3283));

	// 2.0
	this.instance_36 = new lib._20();
	this.instance_36.parent = this;
	this.instance_36.setTransform(961.2,923.3,1.52,1.52,0,0,0,-0.5,-0.5);
	this.instance_36.alpha = 0.34;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1886).to({_off:false},0).to({alpha:1},7).wait(126).to({alpha:0.34},5).to({_off:true},1).wait(3395));

	// 電話
	this.instance_37 = new lib._112();
	this.instance_37.parent = this;
	this.instance_37.setTransform(1269.5,514.1,1.793,1.793,0,0,0,-0.1,1.7);
	this.instance_37.alpha = 0.34;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1886).to({_off:false},0).to({alpha:1},5).wait(240).to({alpha:0.34},5).to({_off:true},1).wait(3283));

	// 1.9
	this.instance_38 = new lib._19();
	this.instance_38.parent = this;
	this.instance_38.setTransform(961.2,923.3,1.52,1.52,0,0,0,-0.5,-0.5);
	this.instance_38.alpha = 0.34;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1779).to({_off:false},0).to({alpha:1},7).wait(99).to({_off:true},1).wait(3534));

	// 1.8
	this.instance_39 = new lib._18();
	this.instance_39.parent = this;
	this.instance_39.setTransform(961.2,923.3,1.52,1.52,0,0,0,-0.5,-0.5);
	this.instance_39.alpha = 0.34;
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1603).to({_off:false},0).to({alpha:1},7).wait(164).to({alpha:0.34},5).to({_off:true},1).wait(3640));

	// 1.7
	this.instance_40 = new lib._17();
	this.instance_40.parent = this;
	this.instance_40.setTransform(961.2,923.3,1.52,1.52,0,0,0,-0.5,-0.5);
	this.instance_40.alpha = 0.34;
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1444).to({_off:false},0).to({alpha:1},7).wait(148).to({alpha:0.34},5).to({_off:true},1).wait(3815));

	// 影音
	this.instance_41 = new lib._111();
	this.instance_41.parent = this;
	this.instance_41.setTransform(1269.5,514.1,1.793,1.793,0,0,0,-0.1,1.7);
	this.instance_41.alpha = 0.34;
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(1444).to({_off:false},0).to({alpha:1},5).wait(325).to({alpha:0.34},5).to({_off:true},1).wait(3640));

	// 1.6
	this.instance_42 = new lib._16();
	this.instance_42.parent = this;
	this.instance_42.setTransform(961.2,923.3,1.52,1.52,0,0,0,-0.5,-0.5);
	this.instance_42.alpha = 0.34;
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(1339).to({_off:false},0).to({alpha:1},7).wait(97).to({_off:true},1).wait(3976));

	// O
	this.instance_43 = new lib.O();
	this.instance_43.parent = this;
	this.instance_43.setTransform(879,661.6,1.357,1.357,0,0,0,0.1,0.8);
	this.instance_43.alpha = 0.34;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(1161).to({_off:false},0).to({y:725.2,alpha:1},7).wait(21).to({alpha:0},5).to({x:1083.1,y:666.9,alpha:0.34},1).to({y:725.2,alpha:1},7).wait(25).to({alpha:0},5).to({x:1276.5,y:658.9,alpha:0.34},1).to({y:725.2,alpha:1},7).wait(19).to({alpha:0},5).to({x:1472.6,y:656.3,alpha:0.34},1).to({y:725.2,alpha:1},7).wait(21).to({alpha:0},6).to({x:1674,y:656.3,alpha:0.34},1).to({y:725.2,alpha:1},7).wait(27).to({alpha:0},0).to({_off:true},1).wait(4085));

	// 1.5
	this.instance_44 = new lib._15();
	this.instance_44.parent = this;
	this.instance_44.setTransform(961.2,923.3,1.52,1.52,0,0,0,-0.5,-0.5);
	this.instance_44.alpha = 0.34;
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(1154).to({_off:false},0).to({alpha:1},7).wait(173).to({alpha:0.34},5).to({_off:true},1).wait(4080));

	// 1.4
	this.instance_45 = new lib._14();
	this.instance_45.parent = this;
	this.instance_45.setTransform(961.2,923.3,1.52,1.52,0,0,0,-0.5,-0.5);
	this.instance_45.alpha = 0.34;
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(1044).to({_off:false},0).to({alpha:1},7).wait(98).to({alpha:0.34},5).to({_off:true},1).wait(4265));

	// 1.3
	this.instance_46 = new lib._13();
	this.instance_46.parent = this;
	this.instance_46.setTransform(961.2,923.3,1.52,1.52,0,0,0,-0.5,-0.5);
	this.instance_46.alpha = 0.34;
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(914).to({_off:false},0).to({alpha:1},5).wait(120).to({alpha:0.34},5).to({_off:true},1).wait(4375));

	// 1.2
	this.instance_47 = new lib._12_1();
	this.instance_47.parent = this;
	this.instance_47.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_47.alpha = 0.34;
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(782).to({_off:false},0).to({alpha:1},5).wait(122).to({alpha:0.34},5).to({_off:true},1).wait(4505));

	// push5
	this.wefwef = new lib._11push();
	this.wefwef.parent = this;
	this.wefwef.setTransform(1269.6,513.5,1.409,1.409,0,0,0,-0.1,1.7);
	this.wefwef._off = true;
	new cjs.ButtonHelper(this.wefwef, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.wefwef).wait(4229).to({_off:false},0).to({_off:true},1).wait(1190));

	// push4
	this.e0e0e0e = new lib._11push();
	this.e0e0e0e.parent = this;
	this.e0e0e0e.setTransform(1269.6,513.5,1.409,1.409,0,0,0,-0.1,1.7);
	this.e0e0e0e._off = true;
	new cjs.ButtonHelper(this.e0e0e0e, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.e0e0e0e).wait(3934).to({_off:false},0).to({_off:true},1).wait(1485));

	// push3
	this.ckkkkk = new lib._11push();
	this.ckkkkk.parent = this;
	this.ckkkkk.setTransform(1269.6,513.5,1.409,1.409,0,0,0,-0.1,1.7);
	this.ckkkkk._off = true;
	new cjs.ButtonHelper(this.ckkkkk, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ckkkkk).wait(2242).to({_off:false},0).to({_off:true},1).wait(3177));

	// push2
	this.fuuuu = new lib._11push();
	this.fuuuu.parent = this;
	this.fuuuu.setTransform(1269.6,513.5,1.409,1.409,0,0,0,-0.1,1.7);
	this.fuuuu._off = true;
	new cjs.ButtonHelper(this.fuuuu, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.fuuuu).wait(1885).to({_off:false},0).to({_off:true},1).wait(3534));

	// push1
	this.gooooo = new lib._11push();
	this.gooooo.parent = this;
	this.gooooo.setTransform(1269.6,513.5,1.409,1.409,0,0,0,-0.1,1.7);
	this.gooooo._off = true;
	new cjs.ButtonHelper(this.gooooo, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.gooooo).wait(1443).to({_off:false},0).to({_off:true},1).wait(3976));

	// 1.1
	this.instance_48 = new lib._11_1();
	this.instance_48.parent = this;
	this.instance_48.setTransform(1269.6,513.5,1.409,1.409,0,0,0,-0.1,1.7);
	this.instance_48.alpha = 0.34;
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(777).to({_off:false},0).to({alpha:1},10).wait(655).to({_off:true},1).wait(337).to({_off:false},0).wait(104).to({_off:true},1).wait(251).to({_off:false},0).wait(105).to({_off:true},1).wait(1583).to({_off:false,alpha:0.34},0).to({alpha:1},9).wait(99).to({_off:true},1).wait(185).to({_off:false},0).wait(109).to({_off:true},1).wait(1191));

	// bg
	this.instance_49 = new lib.bg_2();
	this.instance_49.parent = this;
	this.instance_49.setTransform(964.3,618.5,1.462,1.462,0,0,0,0.1,0.6);
	this.instance_49.alpha = 0.34;
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(777).to({_off:false},0).to({alpha:1},8).wait(3929).to({alpha:0.34},10).to({_off:true},1).wait(695));

	// arrow2
	this.arrow2 = new lib.arrow_1();
	this.arrow2.parent = this;
	this.arrow2.setTransform(876.8,981.6);
	this.arrow2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.arrow2).wait(5223).to({_off:false},0).to({_off:true},1).wait(196));

	// arrow
	this.arrow1 = new lib.arrow_1();
	this.arrow1.parent = this;
	this.arrow1.setTransform(876.8,981.6);
	this.arrow1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.arrow1).wait(5003).to({_off:false},0).to({_off:true},1).wait(416));

	// L4
	this.instance_50 = new lib.L4_1();
	this.instance_50.parent = this;
	this.instance_50.setTransform(1418.8,918,1.418,1.418,0,0,0,-0.5,0.1);
	this.instance_50.alpha = 0.34;
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(5168).to({_off:false},0).to({alpha:1},10).wait(46).to({alpha:0.34},9).to({_off:true},1).wait(186));

	// J3
	this.instance_51 = new lib.J3_1();
	this.instance_51.parent = this;
	this.instance_51.setTransform(503.7,916.5,1.418,1.418,0,0,0,-0.7,-0.9);
	this.instance_51.alpha = 0.34;
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(5008).to({_off:false},0).to({alpha:1},10).wait(206).to({alpha:0.34},9).to({_off:true},1).wait(186));

	// L2
	this.instance_52 = new lib.L2_1();
	this.instance_52.parent = this;
	this.instance_52.setTransform(1418.8,918,1.418,1.418,0,0,0,-0.5,0.1);
	this.instance_52.alpha = 0.34;
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(4890).to({_off:false},0).to({alpha:1},10).wait(104).to({alpha:0.34},9).to({_off:true},1).wait(406));

	// J1
	this.instance_53 = new lib.J1_1();
	this.instance_53.parent = this;
	this.instance_53.setTransform(503.7,916.5,1.418,1.418,0,0,0,-0.7,-0.9);
	this.instance_53.alpha = 0.34;
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(4743).to({_off:false},0).to({alpha:1},10).wait(251).to({alpha:0.34},9).to({_off:true},1).wait(406));

	// bg1
	this.instance_54 = new lib.bg1_1();
	this.instance_54.parent = this;
	this.instance_54.setTransform(964.3,618.3,1.462,1.462,0,0,0,0.1,0.5);
	this.instance_54.alpha = 0.34;
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(4729).to({_off:false},0).to({alpha:1},14).wait(495).to({_off:true},1).wait(181));

	// 2.2
	this.baaack = new lib.chp3();
	this.baaack.parent = this;
	this.baaack.setTransform(1622.5,806.5,0.454,0.454);
	this.baaack._off = true;
	new cjs.ButtonHelper(this.baaack, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.baaack).wait(5408).to({_off:false},0).to({_off:true},1).wait(11));

	// man
	this.instance_55 = new lib.man();
	this.instance_55.parent = this;
	this.instance_55.setTransform(1322.3,668.9,1.925,1.925,0,0,0,-0.8,-0.7);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(5277).to({_off:false},0).to({x:1172.8,y:702.4},9).to({x:1031.4},10).wait(10).to({alpha:0.32},8).to({_off:true},1).wait(105));

	// wife
	this.instance_56 = new lib.wife();
	this.instance_56.parent = this;
	this.instance_56.setTransform(971.7,700.3,1.867,1.867,0,0,0,0.1,-0.4);
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(5277).to({_off:false},0).to({x:832.9,y:733.8},7).to({x:664,y:706.7},8).to({x:473.3,y:733.8},7).wait(7).to({alpha:0.32},8).to({_off:true},1).wait(105));

	// couple
	this.instance_57 = new lib.couple();
	this.instance_57.parent = this;
	this.instance_57.setTransform(2150,699.3,1.921,1.921);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(5250).to({_off:false},0).to({x:1905.8,y:658},10).to({x:1584.4,y:704.5},5).to({x:1298.1},11).to({_off:true},1).wait(143));

	// J
	this.instance_58 = new lib.JJ();
	this.instance_58.parent = this;
	this.instance_58.setTransform(2029.3,722,1.842,1.842,0,0,0,-1,-0.1);
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(5268).to({_off:false},0).to({x:1743,y:711.5},8).to({x:1672.3,y:722},8).to({x:1552.6,y:683.4},7).to({x:1509.1,y:722},8).wait(7).to({alpha:0.32},8).to({_off:true},1).wait(105));

	// 2.1
	this.instance_59 = new lib._21();
	this.instance_59.parent = this;
	this.instance_59.setTransform(964.1,619,0.333,0.333,0,0,0,0,0.6);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(5389).to({_off:false},0).to({regY:0.5,scaleX:1.46,scaleY:1.46},14).wait(5).to({_off:true},1).wait(11));

	// bg3
	this.instance_60 = new lib.bg3_1();
	this.instance_60.parent = this;
	this.instance_60.setTransform(964.3,618.3,1.462,1.462,0,0,0,0.1,0.5);
	this.instance_60.alpha = 0.32;
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(5315).to({_off:false},0).to({alpha:1},9).wait(84).to({_off:true},1).wait(11));

	// bg2
	this.instance_61 = new lib.bg2_1();
	this.instance_61.parent = this;
	this.instance_61.setTransform(964.3,618.3,1.462,1.462,0,0,0,0.1,0.5);
	this.instance_61.alpha = 0.34;
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(5239).to({_off:false},0).to({alpha:1},14).wait(61).to({_off:true},95).wait(11));

	// 圖層 9
	this.gg = new lib.e04();
	this.gg.parent = this;
	this.gg.setTransform(1779.6,136.4,1.7,1.7);
	this.gg._off = true;
	new cjs.ButtonHelper(this.gg, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.gg).wait(5419).to({_off:false},0).wait(1));

	// 圖層 8
	this.chp1a = new lib.ch1();
	this.chp1a.parent = this;
	this.chp1a.setTransform(521.2,263.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp1a, 0, 1, 1);

	this.chp122a = new lib.chp122();
	this.chp122a.parent = this;
	this.chp122a.setTransform(1350.8,390.7,1.464,1.464);
	new cjs.ButtonHelper(this.chp122a, 0, 1, 1);

	this.chp121a = new lib.chp121();
	this.chp121a.parent = this;
	this.chp121a.setTransform(1350.8,293.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp121a, 0, 1, 1);

	this.chp35a = new lib.chp35();
	this.chp35a.parent = this;
	this.chp35a.setTransform(1447.4,993,1.61,1.61);
	new cjs.ButtonHelper(this.chp35a, 0, 1, 1);

	this.chp34a = new lib.chp34();
	this.chp34a.parent = this;
	this.chp34a.setTransform(1447.4,902.9,1.61,1.61);
	new cjs.ButtonHelper(this.chp34a, 0, 1, 1);

	this.chp33a = new lib.chp33();
	this.chp33a.parent = this;
	this.chp33a.setTransform(1447.4,814.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp33a, 0, 1, 1);

	this.chp32 = new lib.chp32();
	this.chp32.parent = this;
	this.chp32.setTransform(1447.4,722.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp32, 0, 1, 1);

	this.chp31a = new lib.chp31();
	this.chp31a.parent = this;
	this.chp31a.setTransform(1447.4,625.6,1.61,1.61);
	new cjs.ButtonHelper(this.chp31a, 0, 1, 1);

	this.chp112a = new lib.chp112();
	this.chp112a.parent = this;
	this.chp112a.setTransform(1350.8,196.8,1.464,1.464);
	new cjs.ButtonHelper(this.chp112a, 0, 1, 1);

	this.chp111a = new lib.chp111();
	this.chp111a.parent = this;
	this.chp111a.setTransform(1350.8,87.7,1.464,1.464);
	new cjs.ButtonHelper(this.chp111a, 0, 1, 1);

	this.chp22a = new lib.chp22();
	this.chp22a.parent = this;
	this.chp22a.setTransform(962.4,590.6,1.464,1.464);
	new cjs.ButtonHelper(this.chp22a, 0, 1, 1);

	this.chp21a = new lib.chp21();
	this.chp21a.parent = this;
	this.chp21a.setTransform(962.4,471.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp21a, 0, 1, 1);

	this.chp12a = new lib.chp12();
	this.chp12a.parent = this;
	this.chp12a.setTransform(961.4,330.1,1.464,1.464,0,0,0,-0.7,-0.6);
	new cjs.ButtonHelper(this.chp12a, 0, 1, 1);

	this.chp11a = new lib.chp11();
	this.chp11a.parent = this;
	this.chp11a.setTransform(962.6,136.3,1.464,1.464,0,0,0,0.1,0.5);
	new cjs.ButtonHelper(this.chp11a, 0, 1, 1);

	this.chp3a = new lib.ch3();
	this.chp3a.parent = this;
	this.chp3a.setTransform(529.4,835.1,1.464,1.464);
	new cjs.ButtonHelper(this.chp3a, 0, 1, 1);

	this.chp2a = new lib.ch2();
	this.chp2a.parent = this;
	this.chp2a.setTransform(524,536.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp2a, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2a},{t:this.chp3a},{t:this.chp11a},{t:this.chp12a},{t:this.chp21a},{t:this.chp22a},{t:this.chp111a},{t:this.chp112a},{t:this.chp31a},{t:this.chp32},{t:this.chp33a},{t:this.chp34a},{t:this.chp35a},{t:this.chp121a},{t:this.chp122a},{t:this.chp1a}]},5419).wait(1));

	// 圖層 12
	this.e04 = new lib.e04();
	this.e04.parent = this;
	this.e04.setTransform(1779.6,136.4,1.7,1.7);
	this.e04._off = true;
	new cjs.ButtonHelper(this.e04, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.e04).wait(5414).to({_off:false},0).to({_off:true},1).wait(5));

	// 圖層 7
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

	this.chp32_1 = new lib.chp32();
	this.chp32_1.parent = this;
	this.chp32_1.setTransform(1447.4,722.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp32_1, 0, 1, 1);

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

	this.chp22 = new lib.chp22();
	this.chp22.parent = this;
	this.chp22.setTransform(962.4,590.6,1.464,1.464);
	new cjs.ButtonHelper(this.chp22, 0, 1, 1);

	this.chp21 = new lib.chp21();
	this.chp21.parent = this;
	this.chp21.setTransform(962.4,471.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp21, 0, 1, 1);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2},{t:this.chp3},{t:this.chp11},{t:this.chp12},{t:this.chp21},{t:this.chp22},{t:this.chp111},{t:this.chp112},{t:this.chp31},{t:this.chp32_1},{t:this.chp33},{t:this.chp34},{t:this.chp35},{t:this.chp121},{t:this.chp122},{t:this.chp1}]},5414).to({state:[]},1).wait(5));

	// 圖層 1
	this.instance_62 = new lib.現在位置_1();
	this.instance_62.parent = this;
	this.instance_62.setTransform(959.3,542,1.477,1.477,0,0,0,0,1.1);

	this.instance_63 = new lib.bg_1();
	this.instance_63.parent = this;
	this.instance_63.setTransform(959.8,541.6,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_63},{t:this.instance_62}]},5414).to({state:[]},1).to({state:[{t:this.instance_63},{t:this.instance_62}]},4).wait(1));

	// xx
	this.gogoooo = new lib.x_1();
	this.gogoooo.parent = this;
	this.gogoooo.setTransform(1687.4,299.3,1.7,1.7);
	this.gogoooo._off = true;
	new cjs.ButtonHelper(this.gogoooo, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.gogoooo).wait(249).to({_off:false},0).to({_off:true},1).wait(5170));

	// hint
	this.instance_64 = new lib.hint();
	this.instance_64.parent = this;
	this.instance_64.setTransform(1551.9,263.7,0.278,0.278,0,0,0,0.4,0.4);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(223).to({_off:false},0).to({scaleX:1.46,scaleY:1.46,x:961.1,y:544.4},6).wait(21).to({scaleX:0.28,scaleY:0.28,x:1551.9,y:263.7},9).to({_off:true},1).wait(5160));

	// 下一頁
	this.nissannext = new lib.nissannext();
	this.nissannext.parent = this;
	this.nissannext.setTransform(1763.7,1030.6,1.462,1.462,0,0,0,100.1,25.6);
	this.nissannext._off = true;
	new cjs.ButtonHelper(this.nissannext, 0, 1, 2, false, new lib.nissannext(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nissannext).wait(220).to({_off:false},0).wait(2).to({_off:true},1).wait(5197));

	// 迎賓前2
	this.nissan2 = new lib.nissan2();
	this.nissan2.parent = this;
	this.nissan2.setTransform(1921,1082.8,1.462,1.462,0,0,0,657.1,370.2);
	this.nissan2.alpha = 0.5;
	this.nissan2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissan2).wait(113).to({_off:false},0).to({alpha:0.949},20).to({alpha:1},1).wait(52).to({_off:true},37).wait(5197));

	// 迎賓前
	this.nissan1 = new lib.nissan1();
	this.nissan1.parent = this;
	this.nissan1.setTransform(1921,1082.8,1.462,1.462,0,0,0,657.1,370.2);
	this.nissan1.alpha = 0.5;

	this.instance_65 = new lib.bg_1();
	this.instance_65.parent = this;
	this.instance_65.setTransform(959.8,541.6,1.461,1.461);
	this.instance_65.alpha = 0.379;

	this.instance_66 = new lib.bggg();
	this.instance_66.parent = this;
	this.instance_66.setTransform(962.7,621.4,1.462,1.462,0,0,0,0.1,-0.1);
	this.instance_66.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nissan1}]}).to({state:[{t:this.nissan1}]},23).to({state:[{t:this.nissan1}]},89).to({state:[]},1).to({state:[{t:this.instance_66},{t:this.instance_65}]},110).to({state:[{t:this.instance_66},{t:this.instance_65}]},36).to({state:[]},1).wait(5160));
	this.timeline.addTween(cjs.Tween.get(this.nissan1).to({alpha:1},23).wait(89).to({_off:true},1).wait(5307));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,541.8,1920.8,1081.7);
// library properties:
lib.properties = {
	width: 1920,
	height: 1082,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/chpcc_atlas_.png", id:"chpcc_atlas_"},
		{src:"sounds/_331.mp3", id:"_331"},
		{src:"sounds/_332.mp3", id:"_332"},
		{src:"sounds/_333.mp3", id:"_333"},
		{src:"sounds/_334.mp3", id:"_334"},
		{src:"sounds/_335.mp3", id:"_335"},
		{src:"sounds/_336.mp3", id:"_336"},
		{src:"sounds/_337.mp3", id:"_337"},
		{src:"sounds/_338.mp3", id:"_338"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;