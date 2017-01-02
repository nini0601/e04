(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"chpabb_atlas_", frames: [[402,2296,400,400],[0,2296,400,400],[3088,1324,65,144],[3160,576,600,550],[2558,576,600,600],[2200,2214,548,516],[550,742,548,516],[1100,1200,548,516],[2200,1696,548,516],[1650,1200,548,516],[0,1260,548,516],[550,1260,548,516],[1100,1718,548,516],[550,1778,548,516],[1650,1718,548,516],[0,1778,548,516],[2750,2164,548,516],[3300,2164,548,516],[1100,2236,548,516],[0,742,548,516],[3516,1646,548,516],[1866,682,548,516],[2966,1646,548,516],[3160,1128,548,516],[1316,682,548,516],[2416,1178,548,516],[1650,2236,512,512],[2558,0,1149,574],[3088,1178,65,144],[0,0,1314,740],[3850,2221,220,55],[3709,0,50,50],[2416,682,74,321],[2966,1178,120,120],[2966,1300,120,120],[2966,1544,80,80],[2966,1422,120,120],[3850,2449,220,55],[3850,2278,220,55],[3850,2563,220,55],[3850,2164,220,55],[3850,2335,220,55],[804,2353,280,55],[3850,2392,220,55],[3850,2506,220,55],[804,2410,280,55],[3762,104,320,50],[3762,156,320,50],[3762,52,320,50],[3762,0,320,50],[3762,208,320,50],[804,2296,280,55],[1316,0,1240,680],[3048,1544,80,80],[2416,1005,120,120]]}
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



(lib.下一頁Button3 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.下一頁Button = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.未命名5png複製 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._1241top1L = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._1241top1R = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._12420091L = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._12420091R = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._12420092L = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._12420101R = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._12420111L = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._12420111R = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._12420112Lpng複製 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._12420112Rpng複製2 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._12420121L = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._12420121R = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._12420131L = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._12420131R = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._12420132L = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._12420132R = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._12420141L = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib._12420141R = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib._12420142L = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib._12420151Rpng複製 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib._12420152Lpng複製 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib._12420161Rpng複製 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib._12420162Lpng複製 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib._124buttonback = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib._1png複製 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.qwer = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.U12背景 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.創新歷程 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.xx = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.zsd = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.提示x = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.提示xw = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.現在位置w = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0001_創立理念 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0002_心路歷程 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0003_核心人物 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0004_納智捷汽車 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0005_裕隆集團 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0006_CH1公司歷程 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0000_女生服裝 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0001_男生服裝 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0002_CH2服裝儀容 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0000_數位科技體驗區 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0001_AR實車賞車 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0002_ThinkTouch = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0003_3D體驗劇場 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0004_迎賓區 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0005_CH3銷售SOP = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.跨殺小啦 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.首頁w = function() {
	this.spriteSheet = ss["chpabb_atlas_"];
	this.gotoAndStop(54);
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


(lib.補間動畫30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.未命名5png複製();
	this.instance.parent = this;
	this.instance.setTransform(-25.9,-118.5,0.797,1.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-118.5,51.9,237.1);


(lib.補間動畫26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.下一頁Button();
	this.instance.parent = this;
	this.instance.setTransform(-73.3,-73.3,0.366,0.366);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-73.3,146.6,146.6);


(lib.元件36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._124buttonback();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.509,0.509);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,260.7,260.7);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["chpabb_atlas_"],27), null, new cjs.Matrix2D(0.996,0,0,0.996,-572.2,-285.9)).s().p("EhZZAsqMAAAhZTMCyyAAAMAAABZTg");
	this.shape.setTransform(572.2,285.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,1144.3,571.7), null);


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
	this.instance = new lib.創新歷程();
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


(lib.測試啦 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.qwer();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.798,1.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.9,237.1);


(lib.看三小 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.zsd();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.701,0.738);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.9,237.1);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫26("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(73.3,73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.6,146.6);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫30("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(25.9,118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.4},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.9,237.1);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
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
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(85);
		}
	}
	this.frame_28 = function() {
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
		
		
		this.sp4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_48.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_48()
		{
			this.gotoAndStop(31);
		}
	}
	this.frame_31 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.bt1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_55.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_55()
		{
			this.gotoAndStop(28);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.gp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_56.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_56()
		{
			this.gotoAndStop(35);
		}
	}
	this.frame_35 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.asd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_63.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_63()
		{
			this.gotoAndStop(40);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.qwe.addEventListener("click", fl_ClickToGoToAndStopAtFrame_64.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_64()
		{
			this.gotoAndStop(31);
		}
	}
	this.frame_40 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.gp2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_59.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_59()
		{
			this.gotoAndStop(47);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.bt2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_60.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_60()
		{
			this.gotoAndStop(35);
		}
	}
	this.frame_47 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.haha.addEventListener("click", fl_ClickToGoToAndStopAtFrame_65.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_65()
		{
			this.gotoAndStop(51);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.sisi.addEventListener("click", fl_ClickToGoToAndStopAtFrame_66.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_66()
		{
			this.gotoAndStop(40);
		}
	}
	this.frame_51 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.gfgfg.addEventListener("click", fl_ClickToGoToAndStopAtFrame_67.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_67()
		{
			this.gotoAndStop(55);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.sasa.addEventListener("click", fl_ClickToGoToAndStopAtFrame_68.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_68()
		{
			this.gotoAndStop(47);
		}
	}
	this.frame_55 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.jkjk.addEventListener("click", fl_ClickToGoToAndStopAtFrame_69.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_69()
		{
			this.gotoAndStop(60);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.frd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_70.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_70()
		{
			this.gotoAndStop(51);
		}
	}
	this.frame_60 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.sgfdgdsfgs.addEventListener("click", fl_ClickToGoToAndStopAtFrame_71.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_71()
		{
			this.gotoAndStop(65);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.jutyngf.addEventListener("click", fl_ClickToGoToAndStopAtFrame_72.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_72()
		{
			this.gotoAndStop(55);
		}
	}
	this.frame_65 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.grewvfsagthytetrutegbr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_74.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_74()
		{
			this.gotoAndStop(70);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.liukyjhntgbfdv.addEventListener("click", fl_ClickToGoToAndStopAtFrame_75.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_75()
		{
			this.gotoAndStop(60);
		}
	}
	this.frame_70 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.kijuyhngbf.addEventListener("click", fl_ClickToGoToAndStopAtFrame_76.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_76()
		{
			this.gotoAndStop(75);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.fewsdcv.addEventListener("click", fl_ClickToGoToAndStopAtFrame_77.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_77()
		{
			this.gotoAndStop(65);
		}
	}
	this.frame_75 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.dhtrdbvsdvcdfdgw.addEventListener("click", fl_ClickToGoToAndStopAtFrame_78.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_78()
		{
			this.gotoAndStop(80);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.bvbvbvbvbfgre.addEventListener("click", fl_ClickToGoToAndStopAtFrame_79.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_79()
		{
			this.gotoAndStop(70);
		}
	}
	this.frame_80 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.lkiujhnbgvdfrgsrgr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_81.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_81()
		{
			this.gotoAndStop(75);
		}
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp1.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("chpa.html", "_self");
		}
	}
	this.frame_89 = function() {
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
		
		this.e04.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(0);
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(3).call(this.frame_31).wait(4).call(this.frame_35).wait(5).call(this.frame_40).wait(7).call(this.frame_47).wait(4).call(this.frame_51).wait(4).call(this.frame_55).wait(5).call(this.frame_60).wait(5).call(this.frame_65).wait(5).call(this.frame_70).wait(5).call(this.frame_75).wait(5).call(this.frame_80).wait(9).call(this.frame_89).wait(1));

	// Actions
	this.local = new lib._3now();
	this.local.parent = this;
	this.local.setTransform(1840.6,83.4,1.459,1.459,0,0,0,0.6,0.6);
	new cjs.ButtonHelper(this.local, 0, 1, 2);

	this.hint = new lib._2hint();
	this.hint.parent = this;
	this.hint.setTransform(1699.4,83.4,1.459,1.459,0,0,0,0.7,0.6);
	new cjs.ButtonHelper(this.hint, 0, 1, 2);

	this.home = new lib._1main();
	this.home.parent = this;
	this.home.setTransform(1558.3,83.4,1.459,1.459,0,0,0,0.7,0.6);
	new cjs.ButtonHelper(this.home, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.hint},{t:this.local}]}).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},28).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},3).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},4).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},5).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},7).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},4).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},4).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},5).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},5).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},5).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},5).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},5).to({state:[]},1).wait(9));

	// 內容
	this.chp1 = new lib.元件36();
	this.chp1.parent = this;
	this.chp1.setTransform(1462.7,757.1,1.459,1.459,0,0,0,130.3,130.4);
	new cjs.ButtonHelper(this.chp1, 0, 1, 1);

	this.instance = new lib._12420162Lpng複製();
	this.instance.parent = this;
	this.instance.setTransform(154,221,1.459,1.459);

	this.lkiujhnbgvdfrgsrgr = new lib.看三小();
	this.lkiujhnbgvdfrgsrgr.parent = this;
	this.lkiujhnbgvdfrgsrgr.setTransform(32.5,446.5,1.459,1.459,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.lkiujhnbgvdfrgsrgr, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.lkiujhnbgvdfrgsrgr},{t:this.instance},{t:this.chp1}]},80).to({state:[]},1).wait(9));

	// 內容
	this.instance_1 = new lib._12420161Rpng複製();
	this.instance_1.parent = this;
	this.instance_1.setTransform(956,221,1.459,1.459);

	this.instance_2 = new lib._12420152Lpng複製();
	this.instance_2.parent = this;
	this.instance_2.setTransform(154,221,1.459,1.459);

	this.bvbvbvbvbfgre = new lib.看三小();
	this.bvbvbvbvbfgre.parent = this;
	this.bvbvbvbvbfgre.setTransform(32.5,446.5,1.459,1.459,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.bvbvbvbvbfgre, 0, 1, 1);

	this.dhtrdbvsdvcdfdgw = new lib.測試啦();
	this.dhtrdbvsdvcdfdgw.parent = this;
	this.dhtrdbvsdvcdfdgw.setTransform(1843.7,619.6,1.459,1.459,0,0,0,26.1,118.7);
	new cjs.ButtonHelper(this.dhtrdbvsdvcdfdgw, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.dhtrdbvsdvcdfdgw},{t:this.bvbvbvbvbfgre},{t:this.instance_2},{t:this.instance_1}]},75).to({state:[]},1).wait(14));

	// 內容
	this.instance_3 = new lib._12420151Rpng複製();
	this.instance_3.parent = this;
	this.instance_3.setTransform(956,221,1.462,1.462);

	this.instance_4 = new lib._12420142L();
	this.instance_4.parent = this;
	this.instance_4.setTransform(154,221,1.459,1.459);

	this.fewsdcv = new lib.看三小();
	this.fewsdcv.parent = this;
	this.fewsdcv.setTransform(32.5,446.5,1.459,1.459,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.fewsdcv, 0, 1, 1);

	this.kijuyhngbf = new lib.測試啦();
	this.kijuyhngbf.parent = this;
	this.kijuyhngbf.setTransform(1843.7,619.6,1.459,1.459,0,0,0,26.1,118.7);
	new cjs.ButtonHelper(this.kijuyhngbf, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.kijuyhngbf},{t:this.fewsdcv},{t:this.instance_4},{t:this.instance_3}]},70).to({state:[]},1).wait(19));

	// 內容
	this.instance_5 = new lib._12420141R();
	this.instance_5.parent = this;
	this.instance_5.setTransform(956,221,1.459,1.459);

	this.instance_6 = new lib._12420141L();
	this.instance_6.parent = this;
	this.instance_6.setTransform(154,221,1.459,1.459);

	this.liukyjhntgbfdv = new lib.看三小();
	this.liukyjhntgbfdv.parent = this;
	this.liukyjhntgbfdv.setTransform(32.5,446.5,1.459,1.459,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.liukyjhntgbfdv, 0, 1, 1);

	this.grewvfsagthytetrutegbr = new lib.測試啦();
	this.grewvfsagthytetrutegbr.parent = this;
	this.grewvfsagthytetrutegbr.setTransform(1843.7,619.6,1.459,1.459,0,0,0,26.1,118.7);
	new cjs.ButtonHelper(this.grewvfsagthytetrutegbr, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.grewvfsagthytetrutegbr},{t:this.liukyjhntgbfdv},{t:this.instance_6},{t:this.instance_5}]},65).to({state:[]},1).wait(24));

	// 內容
	this.instance_7 = new lib._12420132R();
	this.instance_7.parent = this;
	this.instance_7.setTransform(956,221,1.459,1.459);

	this.instance_8 = new lib._12420132L();
	this.instance_8.parent = this;
	this.instance_8.setTransform(154,221,1.459,1.459);

	this.jutyngf = new lib.看三小();
	this.jutyngf.parent = this;
	this.jutyngf.setTransform(32.5,446.5,1.459,1.459,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.jutyngf, 0, 1, 1);

	this.sgfdgdsfgs = new lib.測試啦();
	this.sgfdgdsfgs.parent = this;
	this.sgfdgdsfgs.setTransform(1843.7,619.6,1.459,1.459,0,0,0,26.1,118.7);
	new cjs.ButtonHelper(this.sgfdgdsfgs, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.sgfdgdsfgs},{t:this.jutyngf},{t:this.instance_8},{t:this.instance_7}]},60).to({state:[]},1).wait(29));

	// 內容
	this.instance_9 = new lib._12420131R();
	this.instance_9.parent = this;
	this.instance_9.setTransform(956,221,1.459,1.459);

	this.instance_10 = new lib._12420131L();
	this.instance_10.parent = this;
	this.instance_10.setTransform(154,221,1.459,1.459);

	this.frd = new lib.看三小();
	this.frd.parent = this;
	this.frd.setTransform(32.5,446.5,1.459,1.459,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.frd, 0, 1, 1);

	this.jkjk = new lib.測試啦();
	this.jkjk.parent = this;
	this.jkjk.setTransform(1843.7,619.6,1.459,1.459,0,0,0,26.1,118.7);
	new cjs.ButtonHelper(this.jkjk, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.jkjk},{t:this.frd},{t:this.instance_10},{t:this.instance_9}]},55).to({state:[]},1).wait(34));

	// 內容
	this.instance_11 = new lib._12420121R();
	this.instance_11.parent = this;
	this.instance_11.setTransform(956,221,1.459,1.459);

	this.instance_12 = new lib._12420121L();
	this.instance_12.parent = this;
	this.instance_12.setTransform(154,221,1.459,1.459);

	this.sasa = new lib.看三小();
	this.sasa.parent = this;
	this.sasa.setTransform(32.5,446.5,1.459,1.459,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.sasa, 0, 1, 1);

	this.gfgfg = new lib.測試啦();
	this.gfgfg.parent = this;
	this.gfgfg.setTransform(1843.7,619.6,1.459,1.459,0,0,0,26.1,118.7);
	new cjs.ButtonHelper(this.gfgfg, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.gfgfg},{t:this.sasa},{t:this.instance_12},{t:this.instance_11}]},51).to({state:[]},1).wait(38));

	// 內容
	this.instance_13 = new lib._12420112Rpng複製2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(956,221,1.462,1.462);

	this.instance_14 = new lib._12420112Lpng複製();
	this.instance_14.parent = this;
	this.instance_14.setTransform(154,221,1.462,1.462);

	this.sisi = new lib.看三小();
	this.sisi.parent = this;
	this.sisi.setTransform(32.5,446.5,1.459,1.459,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.sisi, 0, 1, 1);

	this.haha = new lib.測試啦();
	this.haha.parent = this;
	this.haha.setTransform(1843.7,619.6,1.459,1.459,0,0,0,26.1,118.7);
	new cjs.ButtonHelper(this.haha, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.haha},{t:this.sisi},{t:this.instance_14},{t:this.instance_13}]},47).to({state:[]},1).wait(42));

	// 內容
	this.instance_15 = new lib._12420111R();
	this.instance_15.parent = this;
	this.instance_15.setTransform(956,221,1.459,1.459);

	this.instance_16 = new lib._12420111L();
	this.instance_16.parent = this;
	this.instance_16.setTransform(154,221,1.459,1.459);

	this.bt2 = new lib.看三小();
	this.bt2.parent = this;
	this.bt2.setTransform(32.5,446.5,1.459,1.459,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.bt2, 0, 1, 1);

	this.gp2 = new lib.測試啦();
	this.gp2.parent = this;
	this.gp2.setTransform(1843.7,619.8,1.459,1.459,0,0,0,26.1,118.8);
	new cjs.ButtonHelper(this.gp2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.gp2},{t:this.bt2},{t:this.instance_16},{t:this.instance_15}]},40).to({state:[]},1).wait(49));

	// 內容
	this.instance_17 = new lib._12420101R();
	this.instance_17.parent = this;
	this.instance_17.setTransform(956,221,1.459,1.459);

	this.instance_18 = new lib._12420092L();
	this.instance_18.parent = this;
	this.instance_18.setTransform(154,221,1.459,1.459);

	this.qwe = new lib.看三小();
	this.qwe.parent = this;
	this.qwe.setTransform(32.5,446.5,1.459,1.459,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.qwe, 0, 1, 1);

	this.asd = new lib.測試啦();
	this.asd.parent = this;
	this.asd.setTransform(1843.7,619.6,1.459,1.459,0,0,0,26.1,118.7);
	new cjs.ButtonHelper(this.asd, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.asd},{t:this.qwe},{t:this.instance_18},{t:this.instance_17}]},35).to({state:[]},1).wait(54));

	// 內容
	this.instance_19 = new lib._12420091R();
	this.instance_19.parent = this;
	this.instance_19.setTransform(956,221,1.459,1.459);

	this.instance_20 = new lib._12420091L();
	this.instance_20.parent = this;
	this.instance_20.setTransform(154,221,1.459,1.459);

	this.bt1 = new lib.看三小();
	this.bt1.parent = this;
	this.bt1.setTransform(32.9,446.5,1.459,1.459,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.bt1, 0, 1, 1);

	this.gp1 = new lib.測試啦();
	this.gp1.parent = this;
	this.gp1.setTransform(1844,619.6,1.459,1.459,0,0,0,26.1,118.7);
	new cjs.ButtonHelper(this.gp1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.gp1},{t:this.bt1},{t:this.instance_20},{t:this.instance_19}]},31).to({state:[]},1).wait(58));

	// 又見
	this.sp4 = new lib.元件33();
	this.sp4.parent = this;
	this.sp4.setTransform(1806.1,446.5,1.459,1.459,0,0,0,0.1,0.1);
	this.sp4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sp4).wait(28).to({_off:false},0).to({_off:true},1).wait(61));

	// 往事紀錄
	this.instance_21 = new lib._1241top1R();
	this.instance_21.parent = this;
	this.instance_21.setTransform(961,273,1.288,1.288);

	this.instance_22 = new lib._1241top1L();
	this.instance_22.parent = this;
	this.instance_22.setTransform(156,256,1.306,1.306);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22},{t:this.instance_21}]},28).to({state:[]},1).wait(61));

	// XX
	this.e04 = new lib.e04();
	this.e04.parent = this;
	this.e04.setTransform(1779.6,136.4,1.7,1.7);
	this.e04._off = true;
	new cjs.ButtonHelper(this.e04, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.e04).wait(89).to({_off:false},0).wait(1));

	// 圖層 1
	this.chp1_1 = new lib.ch1();
	this.chp1_1.parent = this;
	this.chp1_1.setTransform(521.2,263.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp1_1, 0, 1, 1);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2},{t:this.chp3},{t:this.chp11},{t:this.chp12},{t:this.chp21},{t:this.chp22},{t:this.chp111},{t:this.chp112},{t:this.chp31},{t:this.chp32},{t:this.chp33},{t:this.chp34},{t:this.chp35},{t:this.chp121},{t:this.chp1_1}]},89).wait(1));

	// 圖層 2
	this.chp1_2 = new lib.ch1();
	this.chp1_2.parent = this;
	this.chp1_2.setTransform(521.2,263.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp1_2, 0, 1, 1);

	this.chp122 = new lib.chp122();
	this.chp122.parent = this;
	this.chp122.setTransform(1350.8,390.7,1.464,1.464);
	new cjs.ButtonHelper(this.chp122, 0, 1, 1);

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

	this.chp22_1 = new lib.chp22();
	this.chp22_1.parent = this;
	this.chp22_1.setTransform(962.4,590.6,1.464,1.464);
	new cjs.ButtonHelper(this.chp22_1, 0, 1, 1);

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

	this.instance_23 = new lib.現在位置_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(959.3,542,1.477,1.477,0,0,0,0,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23},{t:this.chp11_1},{t:this.chp12_1},{t:this.chp2_1},{t:this.ch3},{t:this.chp21_1},{t:this.chp22_1},{t:this.chp111_1},{t:this.chp112_1},{t:this.chp31_1},{t:this.chp32_1},{t:this.chp33_1},{t:this.chp34_1},{t:this.chp35_1},{t:this.chp121_1},{t:this.chp122},{t:this.chp1_2}]},84).to({state:[{t:this.instance_23},{t:this.chp122}]},5).wait(1));

	// 下一頁
	this.next = new lib.元件34();
	this.next.parent = this;
	this.next.setTransform(1779.7,950.7,1.459,1.459,0,0,0,73.5,73.5);
	new cjs.ButtonHelper(this.next, 0, 1, 1);

	this.instance_24 = new lib.下一頁Button3();
	this.instance_24.parent = this;
	this.instance_24.setTransform(1680,841,0.535,0.535);

	this.instance_25 = new lib.元件1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(1681.8,943.6,0.318,0.318,0,0,0,572.1,285.9);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next}]}).to({state:[{t:this.instance_24}]},7).to({state:[{t:this.instance_25}]},8).to({state:[{t:this.instance_25}]},12).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(15).to({_off:false},0).to({regY:285.8,scaleX:1.46,scaleY:1.46,x:955.6,y:603},12).wait(63));

	// 小動畫bg
	this.instance_26 = new lib.U12背景();
	this.instance_26.parent = this;
	this.instance_26.setTransform(0,0,1.459,1.459);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({_off:true},81).wait(3).to({_off:false},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,541,1931.6,1080);
// library properties:
lib.properties = {
	width: 1920,
	height: 1082,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/chpabb_atlas_.png", id:"chpabb_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;