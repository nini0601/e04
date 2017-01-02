(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"chpcd_atlas_", frames: [[2500,1909,90,91],[2500,1816,90,91],[2500,1606,105,103],[2500,1711,105,103],[1934,3467,200,51],[2164,4977,1080,220],[967,4218,700,440],[2164,4755,1080,220],[1067,5433,1065,145],[0,4882,1080,220],[2149,5199,1065,145],[1082,5139,1065,145],[2500,3179,965,535],[967,3776,700,440],[1250,2654,1248,583],[1934,3716,965,535],[2134,5493,1065,145],[3467,3179,512,512],[2901,3716,965,535],[1669,4253,700,440],[0,3239,965,535],[2149,5346,1065,145],[967,3239,965,535],[2371,4253,700,440],[1082,5286,1065,145],[0,0,1314,740],[3750,2585,220,140],[3750,2443,220,140],[0,5473,1065,145],[0,5326,1065,145],[0,5104,1080,220],[3750,2009,320,215],[3750,2226,320,215],[0,3776,965,535],[0,4660,1080,220],[1082,4695,1080,220],[1082,4917,1080,220],[3882,1118,173,354],[3882,1808,150,150],[3750,2935,320,50],[2632,1424,1248,583],[2500,2009,1248,583],[0,2069,1248,583],[0,1484,1248,583],[2500,2594,1248,583],[1250,2069,1248,583],[1250,1484,1248,583],[0,2654,1248,583],[0,4313,615,160],[0,4475,615,160],[3073,4253,500,500],[3246,4755,615,160],[3246,4917,615,160],[3882,1474,158,332],[1316,0,1314,740],[2632,0,1314,740],[0,742,1314,740],[1316,742,1314,740],[4042,1474,50,50],[4042,1526,50,50],[3972,2525,80,80],[3948,488,120,120],[3948,610,120,120],[2500,1484,120,120],[3972,2607,80,80],[3948,366,120,120],[3948,244,120,120],[3948,122,120,120],[2156,3296,220,55],[2156,3410,220,55],[1934,3239,220,55],[2156,3239,220,55],[1934,3410,220,55],[1934,3353,220,55],[3750,3044,280,55],[2156,3353,220,55],[1934,3296,220,55],[3750,3101,280,55],[3750,2727,320,50],[3750,2831,320,50],[3750,2883,320,50],[3750,2779,320,50],[3750,2987,280,55],[3874,742,179,374],[2632,742,1240,680],[3972,2443,80,80],[3948,0,120,120]]}
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



(lib.星星 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.星星_1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.星 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.星_1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._101n2 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._11 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._11_1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._12 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._12_1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._13 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._13_1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._14 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._21 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._21_1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._21_2 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._22 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._22_1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._22_2 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._23 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._23_1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib._24 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib._24_1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib._25 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib._25_1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib._26 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib._34提示 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib._31 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib._32 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib._32_1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib._33 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib._41 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib._42 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib._42_1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib._44 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib._45 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib._46 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib._47 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.男人客 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.arrow = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.AR實車賞車 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.bg1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.bg2_1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.bg22 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.bg3 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.bg4 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.bgg = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.J1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.J3 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.jj = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.L2 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.L4 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.女人客 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.U32BG = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.U34學習目標1 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.U34學習目標2 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.U34底 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.x = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.xx = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.提示 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.提示w = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.提示x = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.提示xw = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.現在位置w = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.現在位置x = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.現在位置xw = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0000_創新歷程 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0001_創立理念 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0002_心路歷程 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0003_核心人物 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0004_納智捷汽車 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0005_裕隆集團 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0006_CH1公司歷程 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0000_女生服裝 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0001_男生服裝 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0002_CH2服裝儀容 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0000_數位科技體驗區 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0002_ThinkTouch = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0003_3D體驗劇場 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0004_迎賓區 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0005_CH3銷售SOP = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.賣車的 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.跨殺小啦 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.首頁w = function() {
	this.spriteSheet = ss["chpcd_atlas_"];
	this.gotoAndStop(86);
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


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U32BG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,1314,740), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-624,-291,1248,583), null);


(lib.point = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AtbAAIOXoTIABQmgAA9DEIAAmIIMfAAIAAGIg");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.point, new cjs.Rectangle(-86,-52.6,172,106.3), null);


(lib._33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._33();
	this.instance.parent = this;
	this.instance.setTransform(-533,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._33_1, new cjs.Rectangle(-533,-72,1065,145), null);


(lib._32_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._32_1();
	this.instance.parent = this;
	this.instance.setTransform(-533,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._32_2, new cjs.Rectangle(-533,-72,1065,145), null);


(lib.red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(27.3,1,1).p("ArespIW9AAIAAZTI29AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.red, new cjs.Rectangle(-87.1,-94.6,174.2,189.2), null);


(lib._26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._26();
	this.instance.parent = this;
	this.instance.setTransform(-533,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._26_1, new cjs.Rectangle(-533,-72,1065,145), null);


(lib._23_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._23_1();
	this.instance.parent = this;
	this.instance.setTransform(-350,-219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._23_2, new cjs.Rectangle(-350,-219,700,440), null);


(lib.bg4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg4();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg4_1, new cjs.Rectangle(-624,-291,1248,583), null);


(lib._42_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._42();
	this.instance.parent = this;
	this.instance.setTransform(-160,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._42_2, new cjs.Rectangle(-160,-107,320,215), null);


(lib.bg2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg2_1();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_2, new cjs.Rectangle(-624,-291,1248,583), null);


(lib._21_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._21_2();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._21_3, new cjs.Rectangle(-624,-291,1248,583), null);


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


(lib.chp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._22_2();
	this.instance.parent = this;
	this.instance.setTransform(-256,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256,-255,512,512);


(lib.J1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.J1();
	this.instance.parent = this;
	this.instance.setTransform(-308,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.J1_1, new cjs.Rectangle(-308,-80,615,160), null);


(lib._13_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._13();
	this.instance.parent = this;
	this.instance.setTransform(-540,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._13_2, new cjs.Rectangle(-540,-110,1080,220), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.星星_1();
	this.instance.parent = this;
	this.instance.setTransform(7,5);

	this.instance_1 = new lib.星_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,5,90,91);


(lib.arrow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.752,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.8,117.5);


(lib._21_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib._21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-483,-267);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-483,-267,965,535);


(lib._25_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._25();
	this.instance.parent = this;
	this.instance.setTransform(-483,-267);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-483,-267,965,535);


(lib.元件7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_2 = new lib.星星();
	this.instance_2.parent = this;
	this.instance_2.setTransform(7,5);

	this.instance_3 = new lib.星();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,5,90,91);


(lib._22_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._22();
	this.instance.parent = this;
	this.instance.setTransform(-483,-267);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-483,-267,965,535);


(lib.bg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1_1, new cjs.Rectangle(-624,-291,1248,583), null);


(lib._47_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._47();
	this.instance.parent = this;
	this.instance.setTransform(-540,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._47_1, new cjs.Rectangle(-540,-109,1080,220), null);


(lib._46_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._46();
	this.instance.parent = this;
	this.instance.setTransform(-540,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._46_1, new cjs.Rectangle(-540,-109,1080,220), null);


(lib._45_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._45();
	this.instance.parent = this;
	this.instance.setTransform(-540,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._45_1, new cjs.Rectangle(-540,-109,1080,220), null);


(lib._44_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._44();
	this.instance.parent = this;
	this.instance.setTransform(-483,-267);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-483,-267,965,535);


(lib._42_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib._42_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-160,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._42_3, new cjs.Rectangle(-160,-107,320,215), null);


(lib._41_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._41();
	this.instance.parent = this;
	this.instance.setTransform(-540,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._41_1, new cjs.Rectangle(-540,-109,1080,220), null);


(lib.bg3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg3();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg3_1, new cjs.Rectangle(-624,-291,1248,583), null);


(lib._32_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAkQgMgOAAgWQAAgWANgNQAOgOAUgBQAWAAAMAOQANAOABAWQAAAXgNAOQgNAOgWAAQgWgBgNgOg");
	this.shape.setTransform(0.7,-15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjAkQgMgOAAgWQAAgWANgNQAOgOAVgBQAVAAANAOQANAOAAAWQAAAXgNAOQgNAOgWAAQgWgBgNgOg");
	this.shape_1.setTransform(8.5,-15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjAkQgMgOAAgWQAAgWANgNQAOgOAUgBQAWAAANAOQANAOAAAWQAAAXgNAOQgNAOgWAAQgWgBgNgOg");
	this.shape_2.setTransform(-7.2,-15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjAkQgMgOAAgWQAAgWANgNQAOgOAUgBQAWAAAMAOQANAOABAWQAAAXgNAOQgNAOgWAAQgWgBgNgOg");
	this.shape_3.setTransform(0.7,-15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiAkQgNgOAAgWQAAgWAOgNQANgOAVgBQAUAAAOAOQANAOAAAWQAAAXgNAOQgNAOgWAAQgWgBgMgOg");
	this.shape_4.setTransform(-15.1,-15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiAkQgNgOAAgWQAAgWAOgNQANgOAVgBQAUAAANAOQANAOABAWQgBAXgMAOQgNAOgWAAQgWgBgMgOg");
	this.shape_5.setTransform(24.3,-15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjAkQgMgOAAgWQAAgWANgNQAOgOAUgBQAWAAANAOQANAOAAAWQAAAXgNAOQgNAOgWAAQgWgBgNgOg");
	this.shape_6.setTransform(-23,-15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjAkQgMgOAAgWQAAgWANgNQAOgOAUgBQAWAAAMAOQANAOABAWQAAAXgNAOQgNAOgWAAQgWgBgNgOg");
	this.shape_7.setTransform(0.7,-15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiAkQgNgOAAgWQAAgWAOgNQANgOAVgBQAUAAAOAOQANAOAAAWQAAAXgNAOQgNAOgWAAQgWgBgMgOg");
	this.shape_8.setTransform(-30.8,-15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiAkQgNgOAAgWQAAgWAOgNQANgOAVgBQAUAAANAOQANAOABAWQgBAXgMAOQgNAOgWAAQgWgBgMgOg");
	this.shape_9.setTransform(24.3,-15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjAkQgMgOAAgWQAAgWANgNQAOgOAUgBQAWAAANAOQANAOAAAWQAAAXgNAOQgNAOgWAAQgWgBgNgOg");
	this.shape_10.setTransform(-38.7,-15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:0.7}}]},17).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:0.7}},{t:this.shape,p:{x:16.5}}]},3).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_5,p:{x:24.3}}]},3).to({state:[{t:this.shape_8},{t:this.shape_4},{t:this.shape_7},{t:this.shape_3,p:{x:16.5}},{t:this.shape,p:{x:32.2}}]},3).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9},{t:this.shape_5,p:{x:40.1}}]},3).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9},{t:this.shape_5,p:{x:40.1}}]},3).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9},{t:this.shape_5,p:{x:40.1}}]},3).to({state:[]},3).to({state:[{t:this.shape,p:{x:0.7}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:0.7}},{t:this.shape,p:{x:16.5}}]},3).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_5,p:{x:24.3}}]},3).to({state:[{t:this.shape_8},{t:this.shape_4},{t:this.shape_7},{t:this.shape_3,p:{x:16.5}},{t:this.shape,p:{x:32.2}}]},3).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9},{t:this.shape_5,p:{x:40.1}}]},3).to({state:[]},1).to({state:[{t:this.shape,p:{x:0.7}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:0.7}},{t:this.shape,p:{x:16.5}}]},3).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_5,p:{x:24.3}}]},3).to({state:[{t:this.shape_8},{t:this.shape_4},{t:this.shape_7},{t:this.shape_3,p:{x:16.5}},{t:this.shape,p:{x:32.2}}]},3).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9},{t:this.shape_5,p:{x:40.1}}]},3).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9},{t:this.shape_5,p:{x:40.1}}]},5).wait(1));

	// 圖層 1
	this.instance_1 = new lib._32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-42,-26,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.43,scaleY:0.43,x:-47,y:-29},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-53,y:-33},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-60,y:-37},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:-66,y:-41},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-68,y:-43},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-70,y:-44},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-73,y:-46},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-75,y:-47},0).wait(1).to({scaleX:0.71,scaleY:0.7,x:-78,y:-49},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-85,y:-54},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-92,y:-58},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-98,y:-62},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-103,y:-65},0).wait(1).to({scaleX:1,scaleY:1,x:-110,y:-69},0).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-26,83.6,53.2);


(lib._22_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib._22_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-533,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._22_4, new cjs.Rectangle(-533,-72,1065,145), null);


(lib.red_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(8,1,1).p("ArespIW9AAIAAZTI29AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.red_1, new cjs.Rectangle(-77.5,-85,155,170), null);


(lib._25_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib._25_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-350,-219);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._25_3, new cjs.Rectangle(-350,-219,700,440), null);


(lib._24_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._24_1();
	this.instance.parent = this;
	this.instance.setTransform(-533,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._24_2, new cjs.Rectangle(-533,-72,1065,145), null);


(lib._12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._12_1();
	this.instance.parent = this;
	this.instance.setTransform(-533,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._12_2, new cjs.Rectangle(-533,-72,1065,145), null);


(lib._31_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAkQgMgOAAgWQAAgWANgNQAOgOAUgBQAWAAAMAOQANAOABAWQAAAXgNAOQgNAOgWAAQgWgBgNgOg");
	this.shape.setTransform(0.7,-15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjAkQgMgOAAgWQAAgWANgNQAOgOAVgBQAVAAANAOQANAOAAAWQAAAXgNAOQgNAOgWAAQgWgBgNgOg");
	this.shape_1.setTransform(8.5,-15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjAkQgMgOAAgWQAAgWANgNQAOgOAUgBQAWAAANAOQANAOAAAWQAAAXgNAOQgNAOgWAAQgWgBgNgOg");
	this.shape_2.setTransform(-7.2,-15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjAkQgMgOAAgWQAAgWANgNQAOgOAUgBQAWAAAMAOQANAOABAWQAAAXgNAOQgNAOgWAAQgWgBgNgOg");
	this.shape_3.setTransform(0.7,-15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiAkQgNgOAAgWQAAgWAOgNQANgOAVgBQAUAAAOAOQANAOAAAWQAAAXgNAOQgNAOgWAAQgWgBgMgOg");
	this.shape_4.setTransform(-15.1,-15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiAkQgNgOAAgWQAAgWAOgNQANgOAVgBQAUAAANAOQANAOABAWQgBAXgMAOQgNAOgWAAQgWgBgMgOg");
	this.shape_5.setTransform(24.3,-15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjAkQgMgOAAgWQAAgWANgNQAOgOAUgBQAWAAANAOQANAOAAAWQAAAXgNAOQgNAOgWAAQgWgBgNgOg");
	this.shape_6.setTransform(-23,-15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjAkQgMgOAAgWQAAgWANgNQAOgOAUgBQAWAAAMAOQANAOABAWQAAAXgNAOQgNAOgWAAQgWgBgNgOg");
	this.shape_7.setTransform(0.7,-15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiAkQgNgOAAgWQAAgWAOgNQANgOAVgBQAUAAAOAOQANAOAAAWQAAAXgNAOQgNAOgWAAQgWgBgMgOg");
	this.shape_8.setTransform(-30.8,-15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiAkQgNgOAAgWQAAgWAOgNQANgOAVgBQAUAAANAOQANAOABAWQgBAXgMAOQgNAOgWAAQgWgBgMgOg");
	this.shape_9.setTransform(24.3,-15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjAkQgMgOAAgWQAAgWANgNQAOgOAUgBQAWAAANAOQANAOAAAWQAAAXgNAOQgNAOgWAAQgWgBgNgOg");
	this.shape_10.setTransform(-38.7,-15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:0.7}}]},17).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:0.7}},{t:this.shape,p:{x:16.5}}]},3).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_5,p:{x:24.3}}]},3).to({state:[{t:this.shape_8},{t:this.shape_4},{t:this.shape_7},{t:this.shape_3,p:{x:16.5}},{t:this.shape,p:{x:32.2}}]},3).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9},{t:this.shape_5,p:{x:40.1}}]},3).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9},{t:this.shape_5,p:{x:40.1}}]},3).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9},{t:this.shape_5,p:{x:40.1}}]},3).to({state:[]},3).to({state:[{t:this.shape,p:{x:0.7}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:0.7}},{t:this.shape,p:{x:16.5}}]},3).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_5,p:{x:24.3}}]},3).to({state:[{t:this.shape_8},{t:this.shape_4},{t:this.shape_7},{t:this.shape_3,p:{x:16.5}},{t:this.shape,p:{x:32.2}}]},3).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9},{t:this.shape_5,p:{x:40.1}}]},3).to({state:[]},1).to({state:[{t:this.shape,p:{x:0.7}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:0.7}},{t:this.shape,p:{x:16.5}}]},3).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_5,p:{x:24.3}}]},3).to({state:[{t:this.shape_8},{t:this.shape_4},{t:this.shape_7},{t:this.shape_3,p:{x:16.5}},{t:this.shape,p:{x:32.2}}]},3).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9},{t:this.shape_5,p:{x:40.1}}]},8).wait(1));

	// 圖層 1
	this.instance = new lib._31();
	this.instance.parent = this;
	this.instance.setTransform(-42,-26,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.43,scaleY:0.43,x:-47,y:-29},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-53,y:-33},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-60,y:-37},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:-66,y:-41},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-68,y:-43},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-70,y:-44},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-73,y:-46},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-75,y:-47},0).wait(1).to({scaleX:0.71,scaleY:0.7,x:-78,y:-49},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-85,y:-54},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-92,y:-58},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-98,y:-62},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-103,y:-65},0).wait(1).to({scaleX:1,scaleY:1,x:-110,y:-69},0).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-26,83.6,53.2);


(lib.JJ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.jj();
	this.instance.parent = this;
	this.instance.setTransform(-250,-249);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.JJ, new cjs.Rectangle(-250,-249,500,500), null);


(lib.bg22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg22();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg22_1, new cjs.Rectangle(-624,-291,1248,583), null);


(lib.bg2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib.bg2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_3, new cjs.Rectangle(-624,-291,1248,583), null);


(lib._24_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib._24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-483,-267);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-483,-267,965,535);


(lib._23_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib._23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-483,-267);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-483,-267,965,535);


(lib.JJ_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib.賣車的();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-84,-174,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.JJ_1, new cjs.Rectangle(-84,-174,167,349), null);


(lib.couple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.男人客();
	this.instance.parent = this;
	this.instance.setTransform(-21,-177);

	this.instance_1 = new lib.女人客();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-152,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.couple, new cjs.Rectangle(-152,-177,304,354), null);


(lib.bggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bgg();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bggg, new cjs.Rectangle(-624,-291,1248,583), null);


(lib._12_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib._12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-540,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._12_3, new cjs.Rectangle(-540,-110,1080,220), null);


(lib._11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-540,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._11_2, new cjs.Rectangle(-540,-110,1080,220), null);


(lib._21_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_2 = new lib._21_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-350,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib._21_5, new cjs.Rectangle(-350,-220,700,440), null);


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AtbAAIOXoTIABQmgAA9DEIAAmIIMfAAIAAGIg");
	this.shape_1.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.point_1, new cjs.Rectangle(-86,-52.6,172,106.3), null);


(lib._14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._14();
	this.instance.parent = this;
	this.instance.setTransform(-533,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._14_1, new cjs.Rectangle(-533,-73,1065,145), null);


(lib._13_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib._13_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-533,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._13_3, new cjs.Rectangle(-533,-73,1065,145), null);


(lib._11_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib._11_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-350,-219);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._11_3, new cjs.Rectangle(-350,-219,700,440), null);


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
	this.instance = new lib._34提示();
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
	this.instance = new lib.AR實車賞車();
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
	this.instance = new lib.U34學習目標2();
	this.instance.parent = this;
	this.instance.setTransform(-657,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan2, new cjs.Rectangle(-657,-370,1314,740), null);


(lib.nissan1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U34學習目標1();
	this.instance.parent = this;
	this.instance.setTransform(-657,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan1, new cjs.Rectangle(-657,-370,1314,740), null);


(lib.bg_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib.U34底();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-657,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_2, new cjs.Rectangle(-657,-370,1314,740), null);


(lib.star1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件7();
	this.instance.parent = this;
	this.instance.setTransform(45,45.5,1,1,0,0,0,45,45.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.star1, new cjs.Rectangle(0,0,105,103), null);


(lib.star1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib.元件7_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45,45.5,1,1,0,0,0,45,45.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.star1_1, new cjs.Rectangle(0,0,105,103), null);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// 圖層 1
	this.instance = new lib.star1();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


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


(lib.star_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// 圖層 1
	this.instance_1 = new lib.star1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("_341");
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
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.local.addEventListener("click", fl_ClickToGoToAndStopAtFrame_28.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_28()
		{
			this.gotoAndStop(3439);
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
			this.gotoAndStop(3439);
		}
	}
	this.frame_284 = function() {
		playSound("_342");
	}
	this.frame_739 = function() {
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
		
		this.star1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_55.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_55()
		{
			this.gotoAndPlay(740);
		}
	}
	this.frame_754 = function() {
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
		
		this.one.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_56.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_56()
		{
			this.gotoAndPlay(755);
		}
	}
	this.frame_759 = function() {
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
		
		this.two.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_57.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_57()
		{
			this.gotoAndPlay(760);
		}
	}
	this.frame_764 = function() {
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
		
		this.three.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_58.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_58()
		{
			this.gotoAndPlay(766);
		}
	}
	this.frame_769 = function() {
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
		
		this.four.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_59.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_59()
		{
			this.gotoAndPlay(771);
		}
	}
	this.frame_774 = function() {
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
		
		this.five.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_60.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_60()
		{
			this.gotoAndPlay(775);
		}
	}
	this.frame_919 = function() {
		playSound("_343");
	}
	this.frame_1129 = function() {
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
		
		this.star4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_61.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_61()
		{
			this.gotoAndPlay(1132);
		}
	}
	this.frame_1142 = function() {
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
		
		this.back.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_62.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_62()
		{
			this.gotoAndPlay(1144);
		}
	}
	this.frame_1164 = function() {
		playSound("_344");
	}
	this.frame_3099 = function() {
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
		
		this.arrow1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_65.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_65()
		{
			this.gotoAndPlay(3100);
		}
	}
	this.frame_3109 = function() {
		playSound("_345");
	}
	this.frame_3319 = function() {
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
		
		this.arrow2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_66.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_66()
		{
			this.gotoAndPlay(3320);
		}
	}
	this.frame_3434 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.baaack.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("chpc.html", "_self");
		}
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.local.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(3444);
		}
	}
	this.frame_3439 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.e04.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_67.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_67()
		{
			this.gotoAndPlay(260);
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
		
		this.chp35.addEventListener("click", fl_ClickToGoToWebPage_24);
		
		function fl_ClickToGoToWebPage_24() {
			window.open("chpce.html", "_self");
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
	this.frame_3444 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.gg.addEventListener("click", fl_ClickToGoToAndStopAtFrame_30.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_30()
		{
			this.gotoAndStop(3434);
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
		
		this.chp33a.addEventListener("click", fl_ClickToGoToWebPage_22);
		
		function fl_ClickToGoToWebPage_22() {
			window.open("chpcc.html", "_self");
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
		
		this.chp32a.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("chpcb.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(50).call(this.frame_54).wait(168).call(this.frame_222).wait(27).call(this.frame_249).wait(35).call(this.frame_284).wait(455).call(this.frame_739).wait(15).call(this.frame_754).wait(5).call(this.frame_759).wait(5).call(this.frame_764).wait(5).call(this.frame_769).wait(5).call(this.frame_774).wait(145).call(this.frame_919).wait(210).call(this.frame_1129).wait(13).call(this.frame_1142).wait(22).call(this.frame_1164).wait(1935).call(this.frame_3099).wait(10).call(this.frame_3109).wait(210).call(this.frame_3319).wait(115).call(this.frame_3434).wait(5).call(this.frame_3439).wait(5).call(this.frame_3444).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},54).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},168).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},27).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},479).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},15).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},5).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},5).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},5).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},5).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},355).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},13).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1957).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},220).to({state:[{t:this.home},{t:this.instance_1},{t:this.local}]},115).to({state:[]},1).wait(10));

	// bg
	this.instance_2 = new lib.bg_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(959.8,541.6,1.461,1.461);
	this.instance_2.alpha = 0.379;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(260).to({_off:false},0).to({alpha:1},14).wait(3160).to({_off:true},1).wait(10));

	// 1.3
	this.instance_3 = new lib._13_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(961.4,883.5,1.499,1.499);
	this.instance_3.alpha = 0.379;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(606).to({_off:false},0).to({alpha:1},5).wait(58).to({alpha:0},10).to({_off:true},1).wait(2765));

	// 1.2
	this.instance_4 = new lib._12_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(959.9,883.5,1.499,1.499);
	this.instance_4.alpha = 0.379;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(519).to({_off:false},0).to({alpha:1},10).wait(69).to({alpha:0},10).to({_off:true},1).wait(2836));

	// 1.1
	this.instance_5 = new lib._11_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(959.7,885,1.499,1.499,0,0,0,-0.1,-0.5);
	this.instance_5.alpha = 0.379;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(304).to({_off:false},0).to({alpha:1},15).wait(195).to({alpha:0},10).to({_off:true},1).wait(2920));

	// couple
	this.instance_6 = new lib.couple();
	this.instance_6.parent = this;
	this.instance_6.setTransform(2541.5,699.3,1.921,1.921);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(274).to({_off:false},0).to({x:2166.7,y:708.4},10).to({x:2027.6,y:652.4},5).to({x:1770.1,y:708.4},7).to({x:1582.8,y:664.4},4).to({x:1554.2,y:708.4},4).wait(371).to({x:1376,y:670.9},0).to({x:1179,y:708.4},4).to({x:985.2,y:670.9},5).to({x:715.3,y:708.4},5).to({x:418.2,y:667.5,alpha:0.559},5).wait(5).to({regX:0.1,regY:0.1,x:-25.1,y:708.6,alpha:0.281},5).to({regX:0,regY:0,x:-179,y:708.4,alpha:0},5).to({_off:true},1).wait(2735));

	// J
	this.instance_7 = new lib.JJ_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(2083.7,717.5,1.842,1.842,0,0,0,-1,-0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(274).to({_off:false},0).to({x:1875,y:683.5},5).to({x:1616.7,y:717.5},5).to({x:1290.6,y:670.5},5).to({x:977.6,y:717.5},5).to({x:625.4,y:660.1},5).to({x:257.5,y:717.5},5).wait(371).to({regX:-0.9,x:257.7},14).to({regX:-1,x:-39.5,y:676.5,alpha:0.559},5).wait(5).to({x:-338.1,y:717.5,alpha:0.281},5).to({x:-636.7,alpha:0},5).to({_off:true},1).wait(2735));

	// bg1
	this.instance_8 = new lib.bggg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(962.7,621.4,1.462,1.462,0,0,0,0.1,-0.1);
	this.instance_8.alpha = 0.379;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(260).to({_off:false},0).to({alpha:1},14).wait(430).to({alpha:0},10).to({_off:true},1).wait(2730));

	// five
	this.five = new lib._25_2();
	this.five.parent = this;
	this.five.setTransform(959.9,622.8,1.439,1.439);
	this.five._off = true;
	new cjs.ButtonHelper(this.five, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.five).wait(774).to({_off:false},0).to({_off:true},1).wait(2670));

	// four
	this.four = new lib._24_3();
	this.four.parent = this;
	this.four.setTransform(959.9,622.8,1.439,1.439);
	this.four._off = true;
	new cjs.ButtonHelper(this.four, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.four).wait(769).to({_off:false},0).to({_off:true},1).wait(2675));

	// three
	this.three = new lib._23_3();
	this.three.parent = this;
	this.three.setTransform(959.9,622.8,1.439,1.439);
	this.three._off = true;
	new cjs.ButtonHelper(this.three, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.three).wait(764).to({_off:false},0).to({_off:true},1).wait(2680));

	// two
	this.two = new lib._22_3();
	this.two.parent = this;
	this.two.setTransform(959.9,622.8,1.439,1.439);
	this.two._off = true;
	new cjs.ButtonHelper(this.two, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.two).wait(759).to({_off:false},0).to({_off:true},1).wait(2685));

	// one
	this.one = new lib._21_4();
	this.one.parent = this;
	this.one.setTransform(959.9,622.8,1.439,1.439);
	this.one._off = true;
	new cjs.ButtonHelper(this.one, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.one).wait(754).to({_off:false},0).to({_off:true},1).wait(2690));

	// starhint
	this.instance_9 = new lib._21_4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(959.3,623.4,0.284,0.284);
	this.instance_9._off = true;
	new cjs.ButtonHelper(this.instance_9, 0, 1, 1);

	this.instance_10 = new lib._22_3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(959.9,622.8,1.439,1.439);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 1);

	this.instance_11 = new lib._23_3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(959.9,622.8,1.439,1.439);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 1);

	this.instance_12 = new lib._24_3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(959.9,622.8,1.439,1.439);
	new cjs.ButtonHelper(this.instance_12, 0, 1, 1);

	this.instance_13 = new lib._25_2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(959.9,622.8,1.439,1.439);
	this.instance_13._off = true;
	new cjs.ButtonHelper(this.instance_13, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},742).to({state:[{t:this.instance_9}]},11).to({state:[]},1).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_10}]},2).to({state:[]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},3).to({state:[]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},4).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},9).to({state:[]},1).wait(2660));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(742).to({_off:false},0).to({scaleX:1.44,scaleY:1.44,x:959.9,y:622.8},11).to({_off:true},1).wait(2691));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(770).to({_off:false},0).wait(3).to({_off:true},1).wait(1).to({_off:false},0).to({scaleX:0.25,scaleY:0.25,x:959.3,y:623.4},9).to({_off:true},1).wait(2660));

	// star
	this.star1 = new lib.star();
	this.star1.parent = this;
	this.star1.setTransform(896.9,350.3,1.461,1.461,0,0,0,52.6,-0.3);
	this.star1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.star1).wait(739).to({_off:false},0).to({_off:true},1).wait(2705));

	// J
	this.instance_14 = new lib.JJ();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-231.9,687.1,1.264,1.264,0,0,0,-0.4,0.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(719).to({_off:false},0).to({x:-7,y:659.5},7).to({x:141.7,y:697.5},6).to({x:211,y:687.1},7).wait(45).to({alpha:0.219},5).to({_off:true},1).wait(2655));

	// bg22
	this.instance_15 = new lib.bg22_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(959.9,618.1,1.462,1.462,0,0,0,0,0.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(714).to({_off:false},0).wait(70).to({alpha:0.219},5).to({_off:true},1).wait(2655));

	// couple
	this.instance_16 = new lib.couple();
	this.instance_16.parent = this;
	this.instance_16.setTransform(2198.5,631.3,1.832,1.832,0,0,0,0.1,-0.1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(719).to({_off:false},0).to({x:2001.3,y:690.1},7).to({x:1762.5,y:655.5},6).to({x:1553.9,y:631.3},7).wait(45).to({alpha:0.219},5).to({_off:true},1).wait(2655));

	// bg2
	this.instance_17 = new lib.bg2_3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(963.2,622.2,1.462,1.462,0,0,0,0.1,0.5);
	this.instance_17.alpha = 0.32;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(709).to({_off:false},0).to({alpha:1},10).wait(65).to({alpha:0.219},5).to({_off:true},1).wait(2655));

	// 3.2
	this.instance_18 = new lib._32_3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(1676.6,334.5,1.565,1.565,0,0,0,-0.2,0.6);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(824).to({_off:false},0).wait(80).to({_off:true},1).wait(2540));

	// 3.1
	this.instance_19 = new lib._31_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(247.6,324.9,1.565,1.565);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(794).to({_off:false},0).wait(80).to({_off:true},1).wait(2570));

	// bg3
	this.instance_20 = new lib.bg3_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(959.9,618.1,1.462,1.462,0,0,0,0,0.5);
	this.instance_20.alpha = 0.34;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(789).to({_off:false},0).to({alpha:1},5).wait(110).to({alpha:0.34},5).to({_off:true},1).wait(2535));

	// 4.7
	this.instance_21 = new lib._47_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(959.9,881.1,1.499,1.499,0,0,0,0,1.1);
	this.instance_21.alpha = 0.34;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1568).to({_off:false},0).to({alpha:1},6).wait(190).to({alpha:0.34},5).to({_off:true},1).wait(1675));

	// 4.6
	this.instance_22 = new lib._46_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(960,881,1.499,1.499,0,0,0,0.1,1);
	this.instance_22.alpha = 0.34;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1398).to({_off:false},0).to({alpha:1},6).wait(160).to({alpha:0.34},5).to({_off:true},1).wait(1875));

	// 4.5
	this.instance_23 = new lib._45_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(959.9,881.1,1.499,1.499,0,0,0,0,1.1);
	this.instance_23.alpha = 0.34;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1155).to({_off:false},0).to({alpha:1},14).wait(225).to({alpha:0.34},5).to({_off:true},1).wait(2045));

	// 4.4
	this.back = new lib._44_1();
	this.back.parent = this;
	this.back.setTransform(959.9,622.8,1.439,1.439);
	this.back._off = true;
	new cjs.ButtonHelper(this.back, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1142).to({_off:false},0).to({_off:true},1).wait(2302));

	// 4.3
	this.star4 = new lib.star_1();
	this.star4.parent = this;
	this.star4.setTransform(1323.3,441.2,1.461,1.461,0,0,0,52.6,-0.3);

	this.instance_24 = new lib._44_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(959.3,623.5,0.223,0.223);
	this.instance_24._off = true;
	new cjs.ButtonHelper(this.instance_24, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.star4}]},1129).to({state:[]},1).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_24}]},9).to({state:[]},1).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_24}]},10).to({state:[]},1).wait(2290));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1132).to({_off:false},0).to({scaleX:1.44,scaleY:1.44,x:959.9,y:622.8},9).to({_off:true},1).wait(2).to({_off:false},0).to({scaleX:0.22,scaleY:0.22,x:959.3,y:623.5},10).to({_off:true},1).wait(2290));

	// 4.1
	this.instance_25 = new lib._41_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(959.9,885.8,1.499,1.499,0,0,0,0,1);
	this.instance_25.alpha = 0.34;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(914).to({_off:false},0).to({alpha:1},10).wait(190).to({alpha:0.34},10).to({_off:true},1).wait(2320));

	// 4.2
	this.instance_26 = new lib._42_3();
	this.instance_26.parent = this;
	this.instance_26.setTransform(1323.3,697.4,1.478,1.478,0,0,0,-0.3,0.8);
	this.instance_26.alpha = 0.34;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1019).to({_off:false},0).to({y:532.2,alpha:1},10).wait(740).to({alpha:0.34},10).to({_off:true},1).wait(1665));

	// bg4
	this.instance_27 = new lib.bg4_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(961.4,619.7,1.462,1.462,0,0,0,0.1,0.5);
	this.instance_27.alpha = 0.34;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(907).to({_off:false},0).to({alpha:1},7).wait(855).to({alpha:0.34},10).to({_off:true},1).wait(1665));

	// 1.4
	this.instance_28 = new lib._14_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(961.2,923.3,1.52,1.52,0,0,0,-0.5,-0.5);
	this.instance_28.alpha = 0.34;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(2017).to({_off:false},0).to({alpha:1},7).wait(100).to({alpha:0.34},5).to({_off:true},1).wait(1315));

	// point
	this.instance_29 = new lib.point_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(1130.5,269.4,0.884,0.883,0,0,0,0,0.4);
	this.instance_29.alpha = 0.34;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(2060).to({_off:false},0).to({x:1099.3,alpha:1},10).to({x:1130.5},10).to({x:1099.3},10).to({regX:0.1,regY:0.5,x:1117.6,y:269.5},9).to({regX:0,regY:0.4,x:1099.3,y:269.4},8).to({regX:0.1,regY:0.5,x:1099.4,y:269.5},17).to({regX:0,regY:0.4,x:1099.3,y:269.4,alpha:0.34},5).to({_off:true},1).wait(1315));

	// red
	this.instance_30 = new lib.red_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(882.5,204.2,1.428,1.617,0,0,0,-0.1,-0.6);
	this.instance_30.alpha = 0.34;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1899).to({_off:false},0).to({y:331.1,alpha:1},10).wait(215).to({alpha:0.34},5).to({_off:true},1).wait(1315));

	// 1.3
	this.instance_31 = new lib._13_3();
	this.instance_31.parent = this;
	this.instance_31.setTransform(961.2,923.3,1.52,1.52,0,0,0,-0.5,-0.5);
	this.instance_31.alpha = 0.34;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1894).to({_off:false},0).to({alpha:1},5).wait(115).to({alpha:0.34},5).to({_off:true},1).wait(1425));

	// 1.2
	this.instance_32 = new lib._12_2();
	this.instance_32.parent = this;
	this.instance_32.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_32.alpha = 0.34;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1789).to({_off:false},0).to({alpha:1},5).wait(95).to({alpha:0.34},5).to({_off:true},1).wait(1550));

	// 1.1
	this.instance_33 = new lib._11_3();
	this.instance_33.parent = this;
	this.instance_33.setTransform(1269.6,513.5,1.409,1.409,0,0,0,-0.1,1.7);
	this.instance_33.alpha = 0.34;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1784).to({_off:false},0).to({alpha:1},10).wait(330).to({alpha:0.34},5).to({_off:true},1).wait(1315));

	// red2
	this.instance_34 = new lib.red();
	this.instance_34.parent = this;
	this.instance_34.setTransform(1630.9,247.2,0.476,0.475,0,0,0,1.9,-0.6);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(2424).to({_off:false},0).to({alpha:0.34},14).to({alpha:1},14).to({alpha:0.34},14).to({alpha:1},13).to({_off:true},1).wait(965));

	// 2.6
	this.instance_35 = new lib._26_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_35.alpha = 0.34;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(2387).to({_off:false},0).to({alpha:1},7).wait(150).to({alpha:0.34},10).to({_off:true},1).wait(890));

	// 2.5
	this.instance_36 = new lib._23_2();
	this.instance_36.parent = this;
	this.instance_36.setTransform(1269.6,509.1,1.409,1.409,0,0,0,-0.1,1.7);
	this.instance_36._off = true;

	this.instance_37 = new lib._25_3();
	this.instance_37.parent = this;
	this.instance_37.setTransform(1269.6,509.1,1.409,1.409,0,0,0,-0.1,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_36}]},2389).to({state:[{t:this.instance_36}]},96).to({state:[{t:this.instance_36}]},5).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_37}]},63).to({state:[]},1).wait(890));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(2389).to({_off:false},0).wait(96).to({alpha:0.34},5).to({_off:true,alpha:1},1).wait(954));

	// 2.4
	this.instance_38 = new lib._24_2();
	this.instance_38.parent = this;
	this.instance_38.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_38.alpha = 0.34;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(2272).to({_off:false},0).to({alpha:1},7).wait(100).to({alpha:0.34},5).to({_off:true},1).wait(1060));

	// 2.3
	this.instance_39 = new lib._23_2();
	this.instance_39.parent = this;
	this.instance_39.setTransform(1269.6,509.1,1.409,1.409,0,0,0,-0.1,1.7);
	this.instance_39.alpha = 0.34;
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(2265).to({_off:false},0).to({alpha:1},9).wait(114).to({_off:true},1).wait(1056));

	// red1
	this.instance_40 = new lib.red();
	this.instance_40.parent = this;
	this.instance_40.setTransform(1561.3,247.2,0.476,0.475,0,0,0,1.9,-0.6);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(2159).to({_off:false},0).to({alpha:0.34},14).to({alpha:1},14).to({alpha:0.34},14).to({alpha:1},13).to({_off:true},1).wait(1230));

	// 2.2
	this.instance_41 = new lib._22_4();
	this.instance_41.parent = this;
	this.instance_41.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(2139).to({_off:false},0).wait(120).to({alpha:0.34},7).to({_off:true},1).wait(1178));

	// 2.1
	this.instance_42 = new lib._21_5();
	this.instance_42.parent = this;
	this.instance_42.setTransform(1269.6,513.5,1.409,1.409,0,0,0,-0.1,1.7);
	this.instance_42.alpha = 0.34;
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(2129).to({_off:false},0).to({alpha:1},10).wait(120).to({alpha:0.34},7).to({_off:true},1).wait(1178));

	// P2
	this.instance_43 = new lib.point();
	this.instance_43.parent = this;
	this.instance_43.setTransform(1801.4,744.1,1,1,0,0,0,0,0.5);
	this.instance_43.alpha = 0.34;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(2649).to({_off:false},0).to({x:1746.2,alpha:1},15).wait(150).to({_off:true},1).wait(630));

	// 3.3
	this.instance_44 = new lib._33_1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_44.alpha = 0.34;
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(2639).to({_off:false},0).to({alpha:1},10).wait(165).to({alpha:0.34},10).to({_off:true},1).wait(620));

	// P1
	this.instance_45 = new lib.point();
	this.instance_45.parent = this;
	this.instance_45.setTransform(1634.8,499.4,1,1,0,0,0,0,0.5);
	this.instance_45.alpha = 0.34;
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(2564).to({_off:false},0).to({x:1550.3,alpha:1},15).wait(55).to({_off:true},1).wait(810));

	// 3.2
	this.instance_46 = new lib._32_2();
	this.instance_46.parent = this;
	this.instance_46.setTransform(961.2,923.4,1.52,1.52,0,0,0,-0.5,0.6);
	this.instance_46.alpha = 0.34;
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(2555).to({_off:false},0).to({alpha:1},9).wait(70).to({alpha:0.34},5).to({_off:true},1).wait(805));

	// 3.1
	this.instance_47 = new lib._25_3();
	this.instance_47.parent = this;
	this.instance_47.setTransform(1269.6,509.1,1.409,1.409,0,0,0,-0.1,1.7);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(2555).to({_off:false},0).wait(264).to({alpha:0.34},5).to({_off:true},1).wait(620));

	// bg
	this.instance_48 = new lib.bg_1();
	this.instance_48.parent = this;
	this.instance_48.setTransform(964.3,618.5,1.462,1.462,0,0,0,0.1,0.6);
	this.instance_48.alpha = 0.34;
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(1778).to({_off:false},0).to({alpha:1},6).wait(1035).to({alpha:0.34},5).to({_off:true},1).wait(620));

	// arrow2
	this.arrow2 = new lib.arrow_1();
	this.arrow2.parent = this;
	this.arrow2.setTransform(876.8,981.6);
	this.arrow2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.arrow2).wait(3319).to({_off:false},0).to({_off:true},1).wait(125));

	// arrow
	this.arrow1 = new lib.arrow_1();
	this.arrow1.parent = this;
	this.arrow1.setTransform(876.8,981.6);
	this.arrow1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.arrow1).wait(3099).to({_off:false},0).to({_off:true},1).wait(345));

	// L4
	this.instance_49 = new lib.L4_1();
	this.instance_49.parent = this;
	this.instance_49.setTransform(1418.8,918,1.418,1.418,0,0,0,-0.5,0.1);
	this.instance_49.alpha = 0.34;
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(3264).to({_off:false},0).to({alpha:1},10).wait(46).to({alpha:0.34},9).to({_off:true},1).wait(115));

	// J3
	this.instance_50 = new lib.J3_1();
	this.instance_50.parent = this;
	this.instance_50.setTransform(503.7,916.5,1.418,1.418,0,0,0,-0.7,-0.9);
	this.instance_50.alpha = 0.34;
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(3104).to({_off:false},0).to({alpha:1},10).wait(206).to({alpha:0.34},9).to({_off:true},1).wait(115));

	// L2
	this.instance_51 = new lib.L2_1();
	this.instance_51.parent = this;
	this.instance_51.setTransform(1418.8,918,1.418,1.418,0,0,0,-0.5,0.1);
	this.instance_51.alpha = 0.34;
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(2986).to({_off:false},0).to({alpha:1},10).wait(104).to({alpha:0.34},9).to({_off:true},1).wait(335));

	// J1
	this.instance_52 = new lib.J1_1();
	this.instance_52.parent = this;
	this.instance_52.setTransform(503.7,916.5,1.418,1.418,0,0,0,-0.7,-0.9);
	this.instance_52.alpha = 0.34;
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(2839).to({_off:false},0).to({alpha:1},10).wait(251).to({alpha:0.34},9).to({_off:true},1).wait(335));

	// pad
	this.instance_53 = new lib._42_2();
	this.instance_53.parent = this;
	this.instance_53.setTransform(695.4,763.6,1.319,1.318,0,0,0,0.1,0.3);
	this.instance_53.alpha = 0.34;
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(3104).to({_off:false},0).to({y:665,alpha:1},10).wait(20).to({x:1429.4,y:877.6},35).wait(95).to({_off:true},1).wait(180));

	// bg1
	this.instance_54 = new lib.bg1_1();
	this.instance_54.parent = this;
	this.instance_54.setTransform(964.3,618.3,1.462,1.462,0,0,0,0.1,0.5);
	this.instance_54.alpha = 0.34;
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(2825).to({_off:false},0).to({alpha:1},14).wait(495).to({_off:true},1).wait(110));

	// 2.2
	this.baaack = new lib.chp3();
	this.baaack.parent = this;
	this.baaack.setTransform(1622.5,806.5,0.454,0.454);
	this.baaack._off = true;
	new cjs.ButtonHelper(this.baaack, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.baaack).wait(3434).to({_off:false},0).to({_off:true},1).wait(10));

	// 2.1
	this.instance_55 = new lib._21_3();
	this.instance_55.parent = this;
	this.instance_55.setTransform(964.1,619,0.333,0.333,0,0,0,0,0.6);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(3415).to({_off:false},0).to({regY:0.5,scaleX:1.46,scaleY:1.46},14).wait(5).to({_off:true},1).wait(10));

	// bg2
	this.instance_56 = new lib.bg2_2();
	this.instance_56.parent = this;
	this.instance_56.setTransform(964.3,618.3,1.462,1.462,0,0,0,0.1,0.5);
	this.instance_56.alpha = 0.34;
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(3335).to({_off:false},0).to({alpha:1},14).wait(85).to({_off:true},1).wait(10));

	// xx
	this.gogoooo = new lib.x_1();
	this.gogoooo.parent = this;
	this.gogoooo.setTransform(1687.4,299.3,1.7,1.7);
	this.gogoooo._off = true;
	new cjs.ButtonHelper(this.gogoooo, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.gogoooo).wait(249).to({_off:false},0).to({_off:true},1).wait(3195));

	// hint
	this.instance_57 = new lib.hint();
	this.instance_57.parent = this;
	this.instance_57.setTransform(1551.9,263.7,0.278,0.278,0,0,0,0.4,0.4);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(223).to({_off:false},0).to({scaleX:1.46,scaleY:1.46,x:961.1,y:544.4},6).wait(21).to({scaleX:0.28,scaleY:0.28,x:1551.9,y:263.7},9).to({_off:true},1).wait(3185));

	// 下一頁
	this.nissannext = new lib.nissannext();
	this.nissannext.parent = this;
	this.nissannext.setTransform(1763.7,1030.6,1.462,1.462,0,0,0,100.1,25.6);
	this.nissannext._off = true;
	new cjs.ButtonHelper(this.nissannext, 0, 1, 2, false, new lib.nissannext(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nissannext).wait(220).to({_off:false},0).wait(2).to({_off:true},1).wait(3222));

	// 迎賓前2
	this.nissan2 = new lib.nissan2();
	this.nissan2.parent = this;
	this.nissan2.setTransform(1921,1082.8,1.462,1.462,0,0,0,657.1,370.2);
	this.nissan2.alpha = 0.5;
	this.nissan2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissan2).wait(113).to({_off:false},0).to({alpha:0.949},20).to({alpha:1},1).wait(52).to({_off:true},37).wait(3222));

	// 迎賓前
	this.nissan1 = new lib.nissan1();
	this.nissan1.parent = this;
	this.nissan1.setTransform(1921,1082.8,1.462,1.462,0,0,0,657.1,370.2);
	this.nissan1.alpha = 0.5;

	this.instance_58 = new lib.bg_2();
	this.instance_58.parent = this;
	this.instance_58.setTransform(959.8,541.6,1.461,1.461);
	this.instance_58.alpha = 0.379;

	this.instance_59 = new lib.bggg();
	this.instance_59.parent = this;
	this.instance_59.setTransform(962.7,621.4,1.462,1.462,0,0,0,0.1,-0.1);
	this.instance_59.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nissan1}]}).to({state:[{t:this.nissan1}]},23).to({state:[{t:this.nissan1}]},89).to({state:[]},1).to({state:[{t:this.instance_59},{t:this.instance_58}]},110).to({state:[{t:this.instance_59},{t:this.instance_58}]},36).to({state:[]},1).wait(3185));
	this.timeline.addTween(cjs.Tween.get(this.nissan1).to({alpha:1},23).wait(89).to({_off:true},1).wait(3332));

	// 圖層 5
	this.gg = new lib.e04();
	this.gg.parent = this;
	this.gg.setTransform(1779.6,136.4,1.7,1.7);
	this.gg._off = true;
	new cjs.ButtonHelper(this.gg, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.gg).wait(3444).to({_off:false},0).wait(1));

	// 圖層 4
	this.chp34 = new lib.chp34();
	this.chp34.parent = this;
	this.chp34.setTransform(1447.4,902.9,1.61,1.61);
	new cjs.ButtonHelper(this.chp34, 0, 1, 1);

	this.chp32a = new lib.chp32();
	this.chp32a.parent = this;
	this.chp32a.setTransform(1447.4,722.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp32a, 0, 1, 1);

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

	this.chp33a = new lib.chp33();
	this.chp33a.parent = this;
	this.chp33a.setTransform(1447.4,814.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp33a, 0, 1, 1);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2a},{t:this.chp3a},{t:this.chp11a},{t:this.chp12a},{t:this.chp21a},{t:this.chp22a},{t:this.chp111a},{t:this.chp112a},{t:this.chp31a},{t:this.chp33a},{t:this.chp35a},{t:this.chp121a},{t:this.chp122a},{t:this.chp1a},{t:this.chp32a},{t:this.chp34}]},3444).wait(1));

	// 圖層 3
	this.e04 = new lib.e04();
	this.e04.parent = this;
	this.e04.setTransform(1779.6,136.4,1.7,1.7);
	this.e04._off = true;
	new cjs.ButtonHelper(this.e04, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.e04).wait(3439).to({_off:false},0).to({_off:true},1).wait(5));

	// 圖層 2
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

	this.chp34_1 = new lib.chp34();
	this.chp34_1.parent = this;
	this.chp34_1.setTransform(1447.4,902.9,1.61,1.61);
	new cjs.ButtonHelper(this.chp34_1, 0, 1, 1);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2},{t:this.chp3},{t:this.chp11},{t:this.chp12},{t:this.chp21},{t:this.chp22},{t:this.chp111},{t:this.chp112},{t:this.chp31},{t:this.chp32},{t:this.chp33},{t:this.chp34_1},{t:this.chp35},{t:this.chp121},{t:this.chp122},{t:this.chp1}]},3439).to({state:[]},1).wait(5));

	// 圖層 1
	this.instance_60 = new lib.現在位置_1();
	this.instance_60.parent = this;
	this.instance_60.setTransform(959.3,542,1.477,1.477,0,0,0,0,1.1);

	this.instance_61 = new lib.元件1();
	this.instance_61.parent = this;
	this.instance_61.setTransform(959.8,540.5,1.462,1.462,0,0,0,656.7,369.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_61},{t:this.instance_60}]},3439).to({state:[]},1).to({state:[{t:this.instance_61},{t:this.instance_60}]},4).wait(1));

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
		{src:"images/chpcd_atlas_.png", id:"chpcd_atlas_"},
		{src:"sounds/_341.mp3", id:"_341"},
		{src:"sounds/_342.mp3", id:"_342"},
		{src:"sounds/_343.mp3", id:"_343"},
		{src:"sounds/_344.mp3", id:"_344"},
		{src:"sounds/_345.mp3", id:"_345"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;