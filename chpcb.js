(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"chpcb_atlas_", frames: [[515,3986,90,91],[515,3698,105,103],[1561,3301,200,51],[2632,0,1314,740],[2648,3366,320,50],[3504,3447,351,561],[3733,3019,353,418],[1955,3366,691,417],[1256,3366,697,419],[3748,1912,182,380],[3808,2294,182,380],[1904,2497,950,520],[1250,1484,1247,583],[1780,3019,1248,345],[0,1484,1248,583],[0,2069,950,520],[0,2591,950,520],[3115,3447,387,558],[1256,3130,303,203],[2558,742,1248,583],[952,2069,950,520],[3857,3439,191,393],[1955,3785,287,199],[1561,3130,173,169],[3857,3834,173,169],[2856,2497,950,520],[3733,3439,10,4],[3745,3439,9,4],[952,2591,826,537],[2558,1327,1248,583],[0,0,1314,740],[0,742,1314,740],[1316,0,1314,740],[2648,3447,465,549],[345,3698,168,359],[175,3698,168,359],[0,3698,173,366],[2566,3785,50,50],[2970,3366,50,50],[3030,3019,701,426],[0,3113,630,583],[632,3130,622,583],[3032,3998,80,80],[3930,2847,120,120],[1780,2591,120,120],[3808,2847,120,120],[3114,4007,80,80],[1780,2713,120,120],[1780,2835,120,120],[2244,3837,120,120],[3857,4005,220,55],[2366,3837,220,55],[2282,1424,220,55],[2366,3894,220,55],[2366,3951,220,55],[2588,3998,220,55],[3808,2676,280,55],[2810,3998,220,55],[2366,4008,220,55],[3808,2733,280,55],[1638,1424,320,50],[1316,1424,320,50],[1960,1424,320,50],[2244,3785,320,50],[3808,2790,280,55],[1316,742,1240,680],[3196,4007,80,80],[2244,3959,120,120],[2499,1912,1247,583]]}
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
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.星 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._101n2 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._32提示 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._3d體驗劇場 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.眼鏡 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.眼鏡2 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.APP畫面2 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.APP介面1 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bbbbbbbbb = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bbbbbbbbbpng複製 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ccccccccccc = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.cddgfdge = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cwecfwe = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.dsddqwaregtfew = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.gfdsfsdfsdfdsfwerw = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.gwefceww = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.手拿 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.lk = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.桌子2 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.mjhyngbfv = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.mmmmmmmm = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.nk = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.popopopopopo = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.popopopopopopng複製 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.rhebdgwew = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.sg1 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.sg2 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.平板大 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.TT畫面 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.U32BG = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.U32學習目標1 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.U32學習目標2 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.vd = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.vvvvvvvvvvvv = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.vvvvvvvvvvvvpng複製 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.wwwwwwwwwwww = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.x = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.xx = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.白幕由上往下 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.右 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.左 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.提示 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.提示w = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.提示x = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.提示xw = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.現在位置w = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.現在位置x = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.現在位置xw = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0000_創新歷程 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0001_創立理念 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0002_心路歷程 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0003_核心人物 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0004_納智捷汽車 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0005_裕隆集團 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0006_CH1公司歷程 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0000_女生服裝 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0001_男生服裝 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0002_CH2服裝儀容 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0000_數位科技體驗區 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0001_AR實車賞車 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0002_ThinkTouch = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0004_迎賓區 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0005_CH3銷售SOP = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.跨殺小啦 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.首頁w = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.體驗劇場 = function() {
	this.spriteSheet = ss["chpcb_atlas_"];
	this.gotoAndStop(68);
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


(lib.補間動畫107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.白幕由上往下();
	this.instance.parent = this;
	this.instance.setTransform(-350.5,-213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350.5,-213,701,426);


(lib.補間動畫106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.白幕由上往下();
	this.instance.parent = this;
	this.instance.setTransform(-350.5,-213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350.5,-213,701,426);


(lib.補間動畫105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.右();
	this.instance.parent = this;
	this.instance.setTransform(-315,-291.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-315,-291.5,630,583);


(lib.補間動畫104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.右();
	this.instance.parent = this;
	this.instance.setTransform(-315,-291.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-315,-291.5,630,583);


(lib.補間動畫102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.左();
	this.instance.parent = this;
	this.instance.setTransform(-311,-291.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311,-291.5,622,583);


(lib.補間動畫101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.popopopopopopng複製();
	this.instance.parent = this;
	this.instance.setTransform(-86.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-84.5,173,169);


(lib.補間動畫100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.popopopopopopng複製();
	this.instance.parent = this;
	this.instance.setTransform(-86.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-84.5,173,169);


(lib.補間動畫99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.APP畫面2();
	this.instance.parent = this;
	this.instance.setTransform(-345.5,-208.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.5,-208.5,691,417);


(lib.補間動畫98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.APP畫面2();
	this.instance.parent = this;
	this.instance.setTransform(-345.5,-208.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.5,-208.5,691,417);


(lib.補間動畫97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.popopopopopo();
	this.instance.parent = this;
	this.instance.setTransform(-86.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-84.5,173,169);


(lib.補間動畫96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.popopopopopo();
	this.instance.parent = this;
	this.instance.setTransform(-86.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-84.5,173,169);


(lib.補間動畫95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.popopopopopo();
	this.instance.parent = this;
	this.instance.setTransform(-86.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-84.5,173,169);


(lib.補間動畫94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.popopopopopo();
	this.instance.parent = this;
	this.instance.setTransform(-86.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-84.5,173,169);


(lib.補間動畫93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.手拿();
	this.instance.parent = this;
	this.instance.setTransform(-193.5,-279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.5,-279,387,558);


(lib.補間動畫92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.手拿();
	this.instance.parent = this;
	this.instance.setTransform(-193.5,-279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.5,-279,387,558);


(lib.補間動畫91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.nk();
	this.instance.parent = this;
	this.instance.setTransform(-143.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.5,-99.5,287,199);


(lib.補間動畫90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.nk();
	this.instance.parent = this;
	this.instance.setTransform(-143.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.5,-99.5,287,199);


(lib.補間動畫89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.nk();
	this.instance.parent = this;
	this.instance.setTransform(-143.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.5,-99.5,287,199);


(lib.補間動畫88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.nk();
	this.instance.parent = this;
	this.instance.setTransform(-143.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.5,-99.5,287,199);


(lib.補間動畫86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.lk();
	this.instance.parent = this;
	this.instance.setTransform(-151.5,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.5,-101.5,303,203);


(lib.補間動畫85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.眼鏡2();
	this.instance.parent = this;
	this.instance.setTransform(-176.5,-209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.5,-209,353,418);


(lib.補間動畫83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.眼鏡2();
	this.instance.parent = this;
	this.instance.setTransform(-176.5,-209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.5,-209,353,418);


(lib.補間動畫82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.眼鏡2();
	this.instance.parent = this;
	this.instance.setTransform(-176.5,-209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.5,-209,353,418);


(lib.補間動畫77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mmmmmmmm();
	this.instance.parent = this;
	this.instance.setTransform(-27,-196.5);

	this.instance_1 = new lib.wwwwwwwwwwww();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-164,-169.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-196.5,328,393);


(lib.補間動畫76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mmmmmmmm();
	this.instance.parent = this;
	this.instance.setTransform(-27,-196.5);

	this.instance_1 = new lib.wwwwwwwwwwww();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-164,-169.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-196.5,328,393);


(lib.補間動畫75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bbbbbbbbb();
	this.instance.parent = this;
	this.instance.setTransform(-91,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-190,182,380);


(lib.補間動畫74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bbbbbbbbb();
	this.instance.parent = this;
	this.instance.setTransform(-91,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-190,182,380);


(lib.rtevg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.gwefceww();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


(lib.元件107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.gfdsfsdfsdfdsfwerw();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


(lib.元件106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mjhyngbfv();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


(lib.元件105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.APP介面1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件105, new cjs.Rectangle(0,0,697,419), null);


(lib.元件103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.平板大();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件103, new cjs.Rectangle(0,0,826,537), null);


(lib.元件102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bbbbbbbbbpng複製();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件102, new cjs.Rectangle(0,0,182,380), null);


(lib.元件101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.cddgfdge();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件101, new cjs.Rectangle(0,0,1247,583), null);


(lib.元件99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.rhebdgwew();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件99, new cjs.Rectangle(0,0,950,520), null);


(lib.元件98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ccccccccccc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件98, new cjs.Rectangle(0,0,950,520), null);


(lib.元件97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.dsddqwaregtfew();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件97, new cjs.Rectangle(0,0,1248,583), null);


(lib.元件96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.vvvvvvvvvvvv();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件96, new cjs.Rectangle(0,0,168,359), null);


(lib.元件95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.體驗劇場();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件95, new cjs.Rectangle(0,0,1247,583), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.星星();
	this.instance.parent = this;
	this.instance.setTransform(7,5);

	this.instance_1 = new lib.星();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,5,90,91);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U32BG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,1314,740), null);


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
	this.instance = new lib._32提示();
	this.instance.parent = this;
	this.instance.setTransform(-657,-369);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hint, new cjs.Rectangle(-657,-369,1314,740), null);


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
	this.instance = new lib.課程地圖_0002s_0002_ThinkTouch();
	this.instance.parent = this;
	this.instance.setTransform(-160,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-25,320,50);


(lib.chp32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._3d體驗劇場();
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
	this.instance = new lib.U32學習目標2();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan2, new cjs.Rectangle(0,1,1314,740), null);


(lib.nissan1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U32學習目標1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan1, new cjs.Rectangle(0,0,1314,740), null);


(lib.補間動畫81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.sg2();
	this.instance.parent = this;
	this.instance.setTransform(-174.5,12.5);

	this.instance_1 = new lib.sg1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-159.5,12.5);

	this.instance_2 = new lib.元件95();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,0,623.5,291.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-623.5,-291.5,1247,583);


(lib.元件100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫81("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(623.5,291.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件100, new cjs.Rectangle(0,0,1247,583), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件7();
	this.instance.parent = this;
	this.instance.setTransform(45,45.5,1,1,0,0,0,45,45.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,105,103), null);


(lib.元件5複製10 = function(mode,startPosition,loop) {
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
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5複製9 = function(mode,startPosition,loop) {
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
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5複製8 = function(mode,startPosition,loop) {
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
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5複製7 = function(mode,startPosition,loop) {
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
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5複製6 = function(mode,startPosition,loop) {
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
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(52.5,50.9,1,1,0,0,0,52.5,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("_32");
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
		
		
		this.local.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(979);
		}
	}
	this.frame_247 = function() {
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
		
		this.goooooo.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_21.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_21()
		{
			this.gotoAndPlay(248);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.hint.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_22.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_22()
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
		
		
		this.local.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(979);
		}
	}
	this.frame_405 = function() {
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
		
		this.gvregveew.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_11.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_11()
		{
			this.gotoAndPlay(406);
		}
	}
	this.frame_415 = function() {
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
		
		this.jtyhrbgve.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_12.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_12()
		{
			this.gotoAndPlay(416);
		}
	}
	this.frame_441 = function() {
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
		
		this.nbtvredc.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_13.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_13()
		{
			this.gotoAndPlay(442);
		}
	}
	this.frame_452 = function() {
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
		
		this.grvwef.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay(453);
		}
	}
	this.frame_462 = function() {
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
		
		this.kmuynbtgvf.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_15.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_15()
		{
			this.gotoAndPlay(463);
		}
	}
	this.frame_471 = function() {
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
		
		this.jythrgve.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_16.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_16()
		{
			this.gotoAndPlay(472);
		}
	}
	this.frame_847 = function() {
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
		
		this.fewfwegwewfwe.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_17.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_17()
		{
			this.gotoAndPlay(848);
		}
	}
	this.frame_857 = function() {
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
		
		this.gergfwerfw.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_18.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_18()
		{
			this.gotoAndPlay(858);
		}
	}
	this.frame_925 = function() {
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
		
		this.gerwfweqwweqwwqdsa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_19.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_19()
		{
			this.gotoAndPlay(926);
		}
	}
	this.frame_934 = function() {
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
		
		this.kjunhbhytr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_20.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_20()
		{
			this.gotoAndPlay(935);
		}
	}
	this.frame_975 = function() {
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
		
		
		this.local.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop(984);
		}
	}
	this.frame_979 = function() {
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
		
		this.e04.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_24.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_24()
		{
			this.gotoAndPlay(258);
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
	this.frame_984 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.gg.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop(975);
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(54).call(this.frame_54).wait(168).call(this.frame_222).wait(25).call(this.frame_247).wait(158).call(this.frame_405).wait(10).call(this.frame_415).wait(26).call(this.frame_441).wait(11).call(this.frame_452).wait(10).call(this.frame_462).wait(9).call(this.frame_471).wait(376).call(this.frame_847).wait(10).call(this.frame_857).wait(68).call(this.frame_925).wait(9).call(this.frame_934).wait(41).call(this.frame_975).wait(4).call(this.frame_979).wait(5).call(this.frame_984).wait(1));

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
	this.home.setTransform(1561.2,83.6,1.462,1.462,0,0,0,0.7,0.6);
	new cjs.ButtonHelper(this.home, 0, 1, 2);

	this.local = new lib._3now();
	this.local.parent = this;
	this.local.setTransform(1844.1,83.6,1.462,1.462,0,0,0,0.6,0.6);
	new cjs.ButtonHelper(this.local, 0, 1, 2);

	this.hint = new lib._2hint();
	this.hint.parent = this;
	this.hint.setTransform(1702.7,83.6,1.462,1.462,0,0,0,0.7,0.6);
	new cjs.ButtonHelper(this.hint, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},54).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},168).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},25).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},9).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},149).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},10).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},26).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},11).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},10).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},9).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},376).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},10).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},68).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},9).to({state:[{t:this.home},{t:this.local},{t:this.instance_1}]},41).to({state:[]},4).wait(6));

	// 圖層 80
	this.kjunhbhytr = new lib.元件107();
	this.kjunhbhytr.parent = this;
	this.kjunhbhytr.setTransform(961.7,615.4,0.234,0.234,0,0,0,475.1,260.1);
	this.kjunhbhytr._off = true;
	new cjs.ButtonHelper(this.kjunhbhytr, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.kjunhbhytr).wait(926).to({_off:false},0).to({regX:475,regY:260,scaleX:1.46,scaleY:1.46,y:615.3},8).to({regX:475.6,regY:260.1,scaleX:0.04,scaleY:0.04},8).to({_off:true},1).wait(42));

	// 圖層 78
	this.gerwfweqwweqwwqdsa = new lib.元件5複製10();
	this.gerwfweqwweqwwqdsa.parent = this;
	this.gerwfweqwweqwwqdsa.setTransform(963.3,334.9,1.462,1.462,0,0,0,52.5,-0.3);
	this.gerwfweqwweqwwqdsa._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gerwfweqwweqwwqdsa).wait(925).to({_off:false},0).to({_off:true},1).wait(59));

	// 圖層 77
	this.gergfwerfw = new lib.元件106();
	this.gergfwerfw.parent = this;
	this.gergfwerfw.setTransform(961.7,625.6,0.263,0.263,0,0,0,475,260.1);
	this.gergfwerfw._off = true;
	new cjs.ButtonHelper(this.gergfwerfw, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.gergfwerfw).wait(848).to({_off:false},0).to({scaleX:1.46,scaleY:1.46,y:625.7},9).to({regX:474.7,regY:260.8,scaleX:0.07,scaleY:0.07,y:625.6},8).to({_off:true},1).wait(119));

	// 圖層 76
	this.fewfwegwewfwe = new lib.元件5複製9();
	this.fewfwegwewfwe.parent = this;
	this.fewfwegwewfwe.setTransform(949.2,327.8,1.462,1.462,0,0,0,52.5,-0.3);
	this.fewfwegwewfwe._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fewfwegwewfwe).wait(847).to({_off:false},0).to({_off:true},1).wait(137));

	// 圖層 60 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_591 = new cjs.Graphics().p("EAl/BRTMAAAg+CMBsSAAAMAAAA+Cg");
	var mask_graphics_632 = new cjs.Graphics().p("EAl/BRTMAAAg+CMBsSAAAMAAAA+Cg");
	var mask_graphics_780 = new cjs.Graphics().p("EAl/BRTMAAAg+CMBsSAAAMAAAA+Cg");
	var mask_graphics_922 = new cjs.Graphics().p("EAl/BRTMAAAg+CMBsSAAAMAAAA+Cg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(591).to({graphics:mask_graphics_591,x:936.1,y:520.3}).wait(41).to({graphics:mask_graphics_632,x:936.1,y:520.3}).wait(1).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_graphics_780,x:936.1,y:520.3}).wait(86).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_graphics_922,x:936.1,y:520.3}).wait(63));

	// 圖層 59
	this.instance_2 = new lib.補間動畫91("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(2082,947.8,1.462,1.462);
	this.instance_2._off = true;

	this.instance_3 = new lib.補間動畫90("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1829.1,912.7,1.462,1.462);
	this.instance_3._off = true;

	this.instance_4 = new lib.補間動畫88("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1693.2,912.7,1.462,1.462);
	this.instance_4._off = true;

	this.instance_5 = new lib.補間動畫89("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1585.1,917.1,1.462,1.462);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},591).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_5}]},12).to({state:[]},1).to({state:[{t:this.instance_5}]},147).to({state:[]},86).to({state:[{t:this.instance_5}]},56).to({state:[]},22).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(591).to({_off:false},0).to({_off:true,x:1829.1,y:912.7},11).wait(383));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(591).to({_off:false},11).to({_off:true,x:1693.2},9).wait(374));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(602).to({_off:false},9).to({_off:true,x:1585.1,y:917.1},9).wait(365));

	// 圖層 58 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_564 = new cjs.Graphics().p("Eg65BRTMAAAgzZMB8xAAAMAAAAzZg");
	var mask_1_graphics_632 = new cjs.Graphics().p("Eg65BRTMAAAgzZMB8xAAAMAAAAzZg");
	var mask_1_graphics_780 = new cjs.Graphics().p("Eg65BRTMAAAgzZMB8xAAAMAAAAzZg");
	var mask_1_graphics_922 = new cjs.Graphics().p("Eg65BRTMAAAgzZMB8xAAAMAAAAzZg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(564).to({graphics:mask_1_graphics_564,x:421.6,y:520.3}).wait(68).to({graphics:mask_1_graphics_632,x:421.6,y:520.3}).wait(1).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_1_graphics_780,x:421.6,y:520.3}).wait(86).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_1_graphics_922,x:421.6,y:520.3}).wait(63));

	// 圖層 57
	this.instance_6 = new lib.補間動畫86("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-173.1,949.1,1.462,1.462);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(564).to({_off:false},0).to({x:-4,y:904.5},8).to({x:343.5},13).to({x:395.1,y:909.2},6).wait(41).to({startPosition:0},0).to({_off:true},1).wait(147).to({_off:false},0).to({_off:true},86).wait(56).to({_off:false},0).to({_off:true},22).wait(41));

	// 圖層 71
	this.instance_7 = new lib.cwecfwe();
	this.instance_7.parent = this;
	this.instance_7.setTransform(48,536,1.462,1.462);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(788).to({_off:false},0).to({_off:true},78).wait(56).to({_off:false},0).to({_off:true},22).wait(41));

	// 圖層 75 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_816 = new cjs.Graphics().p("Eg0qBBuMAAAhl9MCpAAAAMAAABl9g");
	var mask_2_graphics_922 = new cjs.Graphics().p("Eg0qBBuMAAAhl9MCpAAAAMAAABl9g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(816).to({graphics:mask_2_graphics_816,x:744.6,y:420.6}).wait(50).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_2_graphics_922,x:744.6,y:420.6}).wait(63));

	// 圖層 74
	this.instance_8 = new lib.補間動畫106("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(961,-122.7,1.462,1.462);
	this.instance_8._off = true;

	this.instance_9 = new lib.補間動畫107("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(961,499.9,1.462,1.462);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},816).to({state:[{t:this.instance_9}]},31).to({state:[]},19).to({state:[{t:this.instance_9}]},56).to({state:[]},22).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(816).to({_off:false},0).to({_off:true,y:499.9},31).wait(138));

	// 圖層 73 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_788 = new cjs.Graphics().p("EgDqBRTMAAAiFIMCV7AAAMAAACFIg");
	var mask_3_graphics_922 = new cjs.Graphics().p("EgDqBRTMAAAiFIMCV7AAAMAAACFIg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(788).to({graphics:mask_3_graphics_788,x:936.1,y:520.3}).wait(78).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_3_graphics_922,x:936.1,y:520.3}).wait(63));

	// 圖層 70
	this.instance_10 = new lib.補間動畫104("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(2332.7,614.6,1.462,1.462);
	this.instance_10._off = true;

	this.instance_11 = new lib.補間動畫105("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(1417.7,614.6,1.462,1.462);

	var maskedShapeInstanceList = [this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},788).to({state:[{t:this.instance_11}]},24).to({state:[]},54).to({state:[{t:this.instance_11}]},56).to({state:[]},22).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(788).to({_off:false},0).to({_off:true,x:1417.7},24).wait(173));

	// 圖層 72 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_788 = new cjs.Graphics().p("EhFhBOjMAAAh/oMCSlAAAMAAAB/og");
	var mask_4_graphics_922 = new cjs.Graphics().p("EhFhBOjMAAAh/oMCSlAAAMAAAB/og");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(788).to({graphics:mask_4_graphics_788,x:493.2,y:502.7}).wait(78).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_4_graphics_922,x:493.2,y:502.7}).wait(63));

	// 圖層 68
	this.instance_12 = new lib.補間動畫102("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-406.3,614.6,1.462,1.462);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(788).to({_off:false},0).to({x:502.8},24).to({_off:true},54).wait(56).to({_off:false},0).to({_off:true},22).wait(41));

	// 圖層 67
	this.instance_13 = new lib.補間動畫100("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(961,541.5,1.462,1.462);
	this.instance_13._off = true;

	this.instance_14 = new lib.補間動畫101("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(467,541.5,1.462,1.462);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(722).to({_off:false},0).to({_off:true,x:467},22).wait(241));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(722).to({_off:false},22).wait(6).to({startPosition:0},0).to({x:398.3,y:690.2},10).to({x:408.9,y:596.3},6).to({alpha:0},13).to({_off:true},1).wait(86).to({_off:false,x:1327.8,y:601.1,alpha:1},0).to({x:717.8,y:758.3},20).wait(8).to({startPosition:0},0).to({x:689.3,y:851.3},8).to({y:789.3},7).wait(7).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(23).to({x:1399.3,y:832.2},0).to({x:1075,y:784.6},13).wait(6).to({startPosition:0},0).to({x:1036.8,y:848.9},6).to({x:1058.3,y:767.8},6).to({_off:true},1).wait(9));

	// 圖層 66
	this.instance_15 = new lib.補間動畫98("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(696.4,619,1.462,1.462);
	this.instance_15.alpha = 0.25;
	this.instance_15._off = true;

	this.instance_16 = new lib.補間動畫99("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(696.4,619,1.462,1.462);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(705).to({_off:false},0).to({_off:true,alpha:1},6).wait(274));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(705).to({_off:false},6).wait(55).to({startPosition:0},0).to({alpha:0},13).to({_off:true},1).wait(86).to({_off:false,alpha:1},0).wait(14).to({startPosition:0},0).wait(41).to({startPosition:0},0).wait(23).to({startPosition:0},0).to({_off:true},32).wait(9));

	// 圖層 65
	this.instance_17 = new lib.補間動畫94("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(1323.4,778.3,1.462,1.462);
	this.instance_17._off = true;

	this.instance_18 = new lib.補間動畫95("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(860.1,510.5,1.462,1.462);
	this.instance_18._off = true;

	this.instance_19 = new lib.補間動畫96("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(828.8,585.4,1.462,1.462);
	this.instance_19._off = true;

	this.instance_20 = new lib.補間動畫97("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(836.3,488.9,1.462,1.462);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},675).to({state:[{t:this.instance_18}]},13).to({state:[{t:this.instance_18}]},5).to({state:[{t:this.instance_19}]},10).to({state:[{t:this.instance_20}]},6).to({state:[]},1).wait(275));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(675).to({_off:false},0).to({_off:true,x:860.1,y:510.5},13).wait(297));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(675).to({_off:false},13).wait(5).to({startPosition:0},0).to({_off:true,x:828.8,y:585.4},10).wait(282));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(693).to({_off:false},10).to({_off:true,x:836.3,y:488.9,alpha:0},6).wait(276));

	// 圖層 64
	this.instance_21 = new lib.元件105();
	this.instance_21.parent = this;
	this.instance_21.setTransform(696.3,617.5,1.462,1.462,0,0,0,348.6,209.5);
	this.instance_21.alpha = 0.238;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(666).to({_off:false},0).to({alpha:1},9).wait(28).to({alpha:0},6).to({_off:true},1).wait(275));

	// 圖層 63
	this.instance_22 = new lib.元件103();
	this.instance_22.parent = this;
	this.instance_22.setTransform(1668.3,864,0.37,0.37,0,0,0,413.3,268.6);
	this.instance_22.alpha = 0.16;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(646).to({_off:false},0).to({x:1349.9,alpha:0.5},3).to({regX:413,regY:268.5,scaleX:1.46,scaleY:1.46,x:691.3,y:621.9,alpha:1},12).wait(105).to({alpha:0},13).to({_off:true},1).wait(86).to({_off:false,alpha:1},0).wait(78).to({_off:true},32).wait(9));

	// 圖層 62 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_633 = new cjs.Graphics().p("EAw9BRfMAAAhYSMBg/AAAMAAABYSg");
	var mask_5_graphics_866 = new cjs.Graphics().p("EAw9BRfMAAAhYSMBg/AAAMAAABYSg");
	var mask_5_graphics_880 = new cjs.Graphics().p("EAw9BRfMAAAhYSMBg/AAAMAAABYSg");
	var mask_5_graphics_921 = new cjs.Graphics().p("EAw9BRfMAAAhYSMBg/AAAMAAABYSg");
	var mask_5_graphics_944 = new cjs.Graphics().p("EAw9BRfMAAAhYSMBg/AAAMAAABYSg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(633).to({graphics:mask_5_graphics_633,x:934,y:521.5}).wait(147).to({graphics:null,x:0,y:0}).wait(86).to({graphics:mask_5_graphics_866,x:934,y:521.5}).wait(14).to({graphics:mask_5_graphics_880,x:934,y:521.5}).wait(41).to({graphics:mask_5_graphics_921,x:934,y:521.5}).wait(23).to({graphics:mask_5_graphics_944,x:934,y:521.5}).wait(41));

	// 圖層 61
	this.instance_23 = new lib.補間動畫92("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(1577.8,948.6,1.462,1.462);
	this.instance_23._off = true;

	this.instance_24 = new lib.補間動畫93("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(1577.8,637.2,1.462,1.462);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_23,this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(633).to({_off:false},0).to({_off:true,y:637.2},13).wait(339));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(633).to({_off:false},13).wait(120).to({startPosition:0},0).to({alpha:0},13).to({_off:true},1).wait(86).to({_off:false,alpha:1},0).wait(14).to({startPosition:0},0).wait(41).to({startPosition:0},0).wait(23).to({startPosition:0},0).to({_off:true},32).wait(9));

	// 圖層 55
	this.instance_25 = new lib.TT畫面();
	this.instance_25.parent = this;
	this.instance_25.setTransform(48,189,1.462,1.462);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(552).to({_off:false},0).to({_off:true},81).wait(147).to({_off:false},0).to({_off:true},86).wait(119));

	// 圖層 54 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_501 = new cjs.Graphics().p("EgqXBR2MAAAho8MBcdAAAMAAABo8g");
	var mask_6_graphics_540 = new cjs.Graphics().p("EgqXBR2MAAAho8MBcdAAAMAAABo8g");
	var mask_6_graphics_551 = new cjs.Graphics().p("EgqXBR2MAAAho8MBcdAAAMAAABo8g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(501).to({graphics:mask_6_graphics_501,x:320.6,y:523.8}).wait(39).to({graphics:mask_6_graphics_540,x:320.6,y:523.8}).wait(11).to({graphics:mask_6_graphics_551,x:320.6,y:523.8}).wait(434));

	// 圖層 53
	this.instance_26 = new lib.補間動畫82("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(-126.4,727.9,1.462,1.462);
	this.instance_26._off = true;

	this.instance_27 = new lib.補間動畫83("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(-10.9,673.8,1.462,1.462);
	this.instance_27._off = true;

	this.instance_28 = new lib.補間動畫85("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(370.5,727.9,1.462,1.462);

	var maskedShapeInstanceList = [this.instance_26,this.instance_27,this.instance_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_26}]},501).to({state:[{t:this.instance_27}]},7).to({state:[{t:this.instance_27}]},6).to({state:[{t:this.instance_27}]},7).to({state:[{t:this.instance_27}]},7).to({state:[{t:this.instance_27}]},6).to({state:[{t:this.instance_28}]},6).to({state:[]},12).wait(433));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(501).to({_off:false},0).to({_off:true,x:-10.9,y:673.8},7).wait(477));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(501).to({_off:false},7).to({x:78.3,y:716.2},6).to({x:158.1,y:683.3},7).to({x:200.3,y:716.2},7).to({x:270.8,y:691.3},6).to({_off:true,x:370.5,y:727.9},6).wait(445));

	// 圖層 52
	this.instance_29 = new lib.元件102();
	this.instance_29.parent = this;
	this.instance_29.setTransform(1425,688.5,1.462,1.462,0,0,0,91,190.1);
	this.instance_29.alpha = 0.328;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(485).to({_off:false},0).to({alpha:1},13).to({_off:true},54).wait(433));

	// 圖層 51
	this.instance_30 = new lib.元件101();
	this.instance_30.parent = this;
	this.instance_30.setTransform(961.1,624.8,1.462,1.462,0,0,0,623.6,291.5);
	this.instance_30.alpha = 0.352;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(485).to({_off:false},0).to({alpha:1},13).to({_off:true},54).wait(433));

	// 圖層 49
	this.jythrgve = new lib.rtevg();
	this.jythrgve.parent = this;
	this.jythrgve.setTransform(989.6,624.2,0.37,0.37,0,0,0,475.1,260.1);
	this.jythrgve._off = true;
	new cjs.ButtonHelper(this.jythrgve, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.jythrgve).wait(463).to({_off:false},0).to({scaleX:1.46,scaleY:1.46},8).to({regX:477.2,regY:261.6,scaleX:0.03,scaleY:0.03,x:989.5,y:624.1},7).to({_off:true},1).wait(506));

	// 圖層 41
	this.kmuynbtgvf = new lib.元件5複製8();
	this.kmuynbtgvf.parent = this;
	this.kmuynbtgvf.setTransform(838,431.4,1.462,1.462,0,0,0,52.5,-0.2);
	this.kmuynbtgvf._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kmuynbtgvf).wait(462).to({_off:false},0).to({_off:true},1).wait(522));

	// 提示間情
	this.grvwef = new lib.元件99();
	this.grvwef.parent = this;
	this.grvwef.setTransform(960.3,637.3,0.171,0.171,0,0,0,475.1,260);
	this.grvwef._off = true;
	new cjs.ButtonHelper(this.grvwef, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.grvwef).wait(442).to({_off:false},0).to({regX:475,regY:260.1,scaleX:1.46,scaleY:1.46,y:637.4},10).to({regX:475.4,regY:261.6,scaleX:0.03,scaleY:0.03,y:637.3},9).to({_off:true},1).wait(523));

	// 星星知我星
	this.nbtvredc = new lib.元件5複製7();
	this.nbtvredc.parent = this;
	this.nbtvredc.setTransform(1188.6,429.5,1.462,1.462,0,0,0,52.5,-0.2);
	this.nbtvredc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nbtvredc).wait(441).to({_off:false},0).to({_off:true},1).wait(543));

	// 結
	this.instance_31 = new lib.vvvvvvvvvvvvpng複製();
	this.instance_31.parent = this;
	this.instance_31.setTransform(1349,254,2.155,2.155);

	this.instance_32 = new lib.眼鏡();
	this.instance_32.parent = this;
	this.instance_32.setTransform(1352,219,1.462,1.462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_31}]},430).to({state:[{t:this.instance_32}]},11).to({state:[]},44).wait(500));

	// 人客
	this.instance_33 = new lib.vd();
	this.instance_33.parent = this;
	this.instance_33.setTransform(48,202,1.462,1.462);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(430).to({_off:false},0).to({_off:true},55).wait(500));

	// 2背景
	this.instance_34 = new lib.桌子2();
	this.instance_34.parent = this;
	this.instance_34.setTransform(48,193,1.462,1.462);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(430).to({_off:false},0).to({_off:true},55).wait(500));

	// 提示哥哥
	this.jtyhrbgve = new lib.元件98();
	this.jtyhrbgve.parent = this;
	this.jtyhrbgve.setTransform(960.3,640.3,0.179,0.179,0,0,0,475.1,260.4);
	this.jtyhrbgve._off = true;
	new cjs.ButtonHelper(this.jtyhrbgve, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.jtyhrbgve).wait(406).to({_off:false},0).to({regX:475,regY:260,scaleX:1.46,scaleY:1.46,y:640.2},9).to({regY:260.9,scaleX:0.03,scaleY:0.03,y:640.3},8).to({_off:true},1).wait(561));

	// 高速星星
	this.gvregveew = new lib.元件5複製6();
	this.gvregveew.parent = this;
	this.gvregveew.setTransform(947.8,274.3,1.462,1.462,0,0,0,52.5,-0.3);
	this.gvregveew._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gvregveew).wait(405).to({_off:false},0).to({_off:true},1).wait(579));

	// 眼鏡仔
	this.instance_35 = new lib.元件97();
	this.instance_35.parent = this;
	this.instance_35.setTransform(961.7,622,1.462,1.462,0,0,0,624,291.6);
	this.instance_35.alpha = 0.5;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(387).to({_off:false},0).to({alpha:1},11).to({_off:true},32).wait(555));

	// 圖層 28 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_269 = new cjs.Graphics().p("EhQ/A61MAAAh1pMCh+AAAMAAAB1pg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(269).to({graphics:mask_7_graphics_269,x:568.1,y:666.6}).wait(716));

	// J
	this.instance_36 = new lib.補間動畫74("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(-133,754.2,1.462,1.462);
	this.instance_36._off = true;

	this.instance_37 = new lib.補間動畫75("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(748.3,754.2,1.462,1.462);

	this.instance_38 = new lib.元件96();
	this.instance_38.parent = this;
	this.instance_38.setTransform(762.9,753.6,1.462,1.462,0,0,0,84,179.6);
	this.instance_38._off = true;

	var maskedShapeInstanceList = [this.instance_36,this.instance_37,this.instance_38];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_36}]},269).to({state:[{t:this.instance_36}]},10).to({state:[{t:this.instance_36}]},4).to({state:[{t:this.instance_36}]},5).to({state:[{t:this.instance_36}]},5).to({state:[{t:this.instance_36}]},5).to({state:[{t:this.instance_36}]},5).to({state:[{t:this.instance_36}]},5).to({state:[{t:this.instance_36}]},6).to({state:[{t:this.instance_37}]},5).to({state:[{t:this.instance_38}]},18).to({state:[{t:this.instance_38}]},6).to({state:[{t:this.instance_38}]},18).to({state:[]},69).wait(555));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(269).to({_off:false},0).to({x:133,y:723.6},10).to({x:193.6,y:744.7},4).to({x:271.1,y:770.2},5).to({x:341.6,y:716.6},5).to({x:447.4,y:754.2},5).to({x:550.8,y:716.6},5).to({x:635.3,y:754.2},5).to({x:712.9,y:735.2},6).to({_off:true,x:748.3,y:754.2},5).wait(666));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(337).to({_off:false},0).wait(6).to({scaleX:1.14,scaleY:1.14,x:874.6,y:688.8},18).to({_off:true},69).wait(555));

	// 圖層 21 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_269 = new cjs.Graphics().p("EhBYA56MAAAhzzMCCxAAAMAAABzzg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(269).to({graphics:mask_8_graphics_269,x:468.1,y:672.4}).wait(716));

	// 人客
	this.instance_39 = new lib.補間動畫76("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(-534,744.7,1.462,1.462);
	this.instance_39._off = true;

	this.instance_40 = new lib.補間動畫77("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(290.9,744.7,1.462,1.462);

	var maskedShapeInstanceList = [this.instance_39,this.instance_40];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_39}]},269).to({state:[{t:this.instance_39}]},10).to({state:[{t:this.instance_39}]},5).to({state:[{t:this.instance_39}]},4).to({state:[{t:this.instance_39}]},5).to({state:[{t:this.instance_39}]},5).to({state:[{t:this.instance_39}]},5).to({state:[{t:this.instance_39}]},5).to({state:[{t:this.instance_39}]},6).to({state:[{t:this.instance_40}]},5).to({state:[]},111).wait(555));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(269).to({_off:false},0).to({x:-355.5},10).to({x:-308.6},5).to({x:-198.2},4).to({x:-108.9},5).to({x:8.5,y:711.8},5).to({x:121.2,y:742.3},5).to({x:191.7,y:707.1},5).to({x:262.6,y:760.7},6).to({_off:true,x:290.9,y:744.7},5).wait(666));

	// 背景
	this.instance_41 = new lib.元件100();
	this.instance_41.parent = this;
	this.instance_41.setTransform(962.5,622,1.462,1.462,0,0,0,623.5,291.6);
	this.instance_41.alpha = 0.32;
	this.instance_41._off = true;

	this.instance_42 = new lib.sg2();
	this.instance_42.parent = this;
	this.instance_42.setTransform(707,640,1.462,1.462);

	this.instance_43 = new lib.sg1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(729,640,1.462,1.462);

	this.instance_44 = new lib.元件95();
	this.instance_44.parent = this;
	this.instance_44.setTransform(962.5,622,1.462,1.462,0,0,0,623.5,291.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_41}]},256).to({state:[{t:this.instance_41}]},12).to({state:[{t:this.instance_44},{t:this.instance_43},{t:this.instance_42}]},1).to({state:[{t:this.instance_44}]},105).to({state:[]},56).wait(555));
	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(256).to({_off:false},0).to({alpha:1},12).to({_off:true},1).wait(716));

	// 底圖
	this.instance_45 = new lib.元件1();
	this.instance_45.parent = this;
	this.instance_45.setTransform(959.8,540.5,1.462,1.462,0,0,0,656.7,369.8);
	this.instance_45.alpha = 0.379;
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(256).to({_off:false},0).to({alpha:1},12).wait(707).to({_off:true},1).wait(9));

	// 圖層 6
	this.e04 = new lib.e04();
	this.e04.parent = this;
	this.e04.setTransform(1779.6,136.4,1.7,1.7);
	this.e04._off = true;
	new cjs.ButtonHelper(this.e04, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.e04).wait(979).to({_off:false},0).to({_off:true},1).wait(5));

	// 圖層 5
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

	this.instance_46 = new lib.現在位置_1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(959.3,542,1.477,1.477,0,0,0,0,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_46},{t:this.chp2},{t:this.chp3},{t:this.chp11},{t:this.chp12},{t:this.chp21},{t:this.chp22},{t:this.chp111},{t:this.chp112},{t:this.chp31},{t:this.chp32},{t:this.chp33},{t:this.chp34},{t:this.chp35},{t:this.chp121},{t:this.chp122},{t:this.chp1}]},979).to({state:[]},1).wait(5));

	// 圖層 8
	this.gg = new lib.e04();
	this.gg.parent = this;
	this.gg.setTransform(1779.6,136.4,1.7,1.7);
	this.gg._off = true;
	new cjs.ButtonHelper(this.gg, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.gg).wait(984).to({_off:false},0).wait(1));

	// 圖層 7
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

	this.chp32_1 = new lib.chp32();
	this.chp32_1.parent = this;
	this.chp32_1.setTransform(1447.4,722.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp32_1, 0, 1, 1);

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

	this.instance_47 = new lib.現在位置_1();
	this.instance_47.parent = this;
	this.instance_47.setTransform(959.3,542,1.477,1.477,0,0,0,0,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_47},{t:this.chp2a},{t:this.chp3a},{t:this.chp11a},{t:this.chp12a},{t:this.chp21a},{t:this.chp22a},{t:this.chp111a},{t:this.chp112a},{t:this.chp31a},{t:this.chp32_1},{t:this.chp33a},{t:this.chp34a},{t:this.chp35a},{t:this.chp121a},{t:this.chp122a},{t:this.chp1a}]},984).wait(1));

	// 圖層 4
	this.instance_48 = new lib.元件1();
	this.instance_48.parent = this;
	this.instance_48.setTransform(959.8,540.5,1.462,1.462,0,0,0,656.7,369.8);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(979).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).wait(1));

	// x
	this.goooooo = new lib.x_1();
	this.goooooo.parent = this;
	this.goooooo.setTransform(1676.1,285.1,1.7,1.7);
	this.goooooo._off = true;
	new cjs.ButtonHelper(this.goooooo, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.goooooo).wait(247).to({_off:false},0).to({_off:true},1).wait(737));

	// 圖層 2
	this.instance_49 = new lib.hint();
	this.instance_49.parent = this;
	this.instance_49.setTransform(1540.7,273.7,0.274,0.274);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(223).to({_off:false},0).to({scaleX:1.46,scaleY:1.46,x:960.7,y:547.5},5).wait(19).to({scaleX:0.27,scaleY:0.27,x:1540.7,y:273.7},8).to({_off:true},1).wait(729));

	// hint
	this.instance_50 = new lib.元件100();
	this.instance_50.parent = this;
	this.instance_50.setTransform(962.5,622,1.462,1.462,0,0,0,623.5,291.6);
	this.instance_50.alpha = 0.32;

	this.instance_51 = new lib.元件1();
	this.instance_51.parent = this;
	this.instance_51.setTransform(959.8,540.5,1.462,1.462,0,0,0,656.7,369.8);
	this.instance_51.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_51},{t:this.instance_50}]},223).to({state:[{t:this.instance_51},{t:this.instance_50}]},32).to({state:[]},1).wait(729));

	// 下一頁
	this.nissannext = new lib.nissannext();
	this.nissannext.parent = this;
	this.nissannext.setTransform(1764.2,1030.9,1.462,1.462,0,0,0,100.1,25.6);
	this.nissannext._off = true;
	new cjs.ButtonHelper(this.nissannext, 0, 1, 2, false, new lib.nissannext(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nissannext).wait(220).to({_off:false},0).wait(2).to({_off:true},1).wait(762));

	// 迎賓前2
	this.nissan2 = new lib.nissan2();
	this.nissan2.parent = this;
	this.nissan2.setTransform(961.7,541.6,1.462,1.462,0,0,0,657.1,370.2);
	this.nissan2.alpha = 0.5;
	this.nissan2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissan2).wait(113).to({_off:false},0).to({alpha:0.949},19).to({alpha:1},2).wait(52).to({_off:true},37).wait(762));

	// 迎賓前
	this.nissan1 = new lib.nissan1();
	this.nissan1.parent = this;
	this.nissan1.setTransform(961.7,541.6,1.462,1.462,0,0,0,657.1,370.2);
	this.nissan1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.nissan1).to({alpha:1},23).wait(89).to({_off:true},1).wait(872));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960.9,541.3,1921.3,1082);
// library properties:
lib.properties = {
	width: 1920,
	height: 1082,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/chpcb_atlas_.png", id:"chpcb_atlas_"},
		{src:"sounds/_32.mp3", id:"_32"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;