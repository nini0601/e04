(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"chpaaa_atlas_", frames: [[1316,0,1314,740],[2632,0,1314,740],[0,1484,1300,300],[0,742,1314,740],[2318,1998,200,51],[804,1994,250,51],[0,0,1314,740],[0,1786,400,600],[2558,742,1000,600],[3560,1746,400,600],[1316,1424,1000,600],[402,1786,400,600],[2558,1344,1000,600],[3560,1244,500,500],[3560,742,500,500],[2318,1546,220,55],[4044,1746,50,50],[1208,1786,50,50],[3962,1746,80,80],[3948,244,120,120],[3948,0,120,120],[3948,122,120,120],[2440,1424,80,80],[3948,488,120,120],[3948,610,120,120],[2318,1424,120,120],[2318,1774,220,55],[1056,1994,220,55],[2318,1831,220,55],[2318,1603,220,55],[2318,1717,220,55],[2640,1946,280,55],[2318,1888,220,55],[2318,1660,220,55],[2922,1946,280,55],[804,1942,320,50],[804,1838,320,50],[804,1786,320,50],[2318,1946,320,50],[804,1890,320,50],[3204,1946,280,55],[1316,742,1240,680],[1126,1786,80,80],[3948,366,120,120]]}
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



(lib._011 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._101n1 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._101n1_1 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._101n2 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._101n2_1 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._111back = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._111 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._111L = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._111LW = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._111M = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._111MW = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._111R = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._111RW = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._111zback = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._111zgo = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.核心人物 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.x = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.xx = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.提示 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.提示w = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.提示x = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.提示xw = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.現在位置w = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.現在位置x = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.現在位置xw = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0000_創新歷程 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0001_創立理念 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0002_心路歷程 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0004_納智捷汽車 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0005_裕隆集團 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0006_CH1公司歷程 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0000_女生服裝 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0001_男生服裝 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0002_CH2服裝儀容 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0000_數位科技體驗區 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0001_AR實車賞車 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0002_ThinkTouch = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0003_3D體驗劇場 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0004_迎賓區 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0005_CH3銷售SOP = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.跨殺小啦 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.首頁w = function() {
	this.spriteSheet = ss["chpaaa_atlas_"];
	this.gotoAndStop(43);
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
	this.instance = new lib._011();
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
	this.instance = new lib.核心人物();
	this.instance.parent = this;
	this.instance.setTransform(-110,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chp111, new cjs.Rectangle(-110,-27,220,55), null);


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


(lib.屏幕 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("A/KMvIAA5dMA+VAAAIAAZdg");
	this.shape.setTransform(0.5,0,3.294,4.54);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.屏幕, new cjs.Rectangle(-656.5,-370,1314,740), null);


(lib.nissannext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._101n2_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17,x:-17.2,y:-4.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:6.9,y:1.8},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,51);


(lib.nissan2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._101n2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan2, new cjs.Rectangle(0,0,1314,740), null);


(lib.nissan1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._101n1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan1, new cjs.Rectangle(0,0,1314,740), null);


(lib.nissanword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._101n1_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissanword, new cjs.Rectangle(0,0,1300,300), null);


(lib._111zgo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111zgo();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.84,scaleY:0.84,x:-210.5,y:-211},0).wait(1).to({scaleX:1,scaleY:1,x:-249.5,y:-250},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.5,-250,500,500);


(lib._111zback_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111zback();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.84,scaleY:0.84,x:-210.5,y:-211},0).wait(1).to({scaleX:1,scaleY:1,x:-249.5,y:-250},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.5,-250,500,500);


(lib._111RW_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111RW();
	this.instance.parent = this;
	this.instance.setTransform(-499.5,-299.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._111RW_1, new cjs.Rectangle(-499.5,-299.5,1000,600), null);


(lib._111Rr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111R();
	this.instance.parent = this;
	this.instance.setTransform(-199.5,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._111Rr, new cjs.Rectangle(-199.5,-300,400,600), null);


(lib._111R_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111R();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.09,scaleY:1.09,x:-18.1,y:-27.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:8.3,y:12.4},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,600);


(lib._111MW_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111MW();
	this.instance.parent = this;
	this.instance.setTransform(-499.5,-299.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._111MW_1, new cjs.Rectangle(-499.5,-299.5,1000,600), null);


(lib._111Mm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111M();
	this.instance.parent = this;
	this.instance.setTransform(-199.5,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._111Mm, new cjs.Rectangle(-199.5,-300,400,600), null);


(lib._111M_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111M();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.08,scaleY:1.08,x:-16.4,y:-24.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:14.8,y:22.2},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,600);


(lib._111LW_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// word
	this.instance = new lib._111LW();
	this.instance.parent = this;
	this.instance.setTransform(-499.5,-299.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._111LW_1, new cjs.Rectangle(-499.5,-299.5,1000,600), null);


(lib._111Ll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111L();
	this.instance.parent = this;
	this.instance.setTransform(-199.5,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._111Ll, new cjs.Rectangle(-199.5,-300,400,600), null);


(lib._111L_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111L();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.08,scaleY:1.08,x:-16.4,y:-24.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:14.8,y:22.2},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,600);


(lib._111back_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111back();
	this.instance.parent = this;
	this.instance.setTransform(-93.5,-18.6,0.752,0.752);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ABGgNIAVAFIggAfIgDADIgBABAAzAfIgPg2IAiAKACbAAQAABAgtAtQggAggqAKQgRAEgTAAQg/AAgtguQgtgtAAhAQAAg/AtguQAtgtA/AAQATAAARAEQAqAKAgAfQAtAuAAA/gAgCBRQgJAAgLgDQgegIgPgbQgQgbAIgeQAIgeAcgQQAbgQAdAJQAfAIAQAaQAEAJACALAA7AXIgDADIAAAA");
	this.shape.setTransform(-74.1,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgagaIAhAJIAUAGIgeAfIgDADIgBAAIAEgDIgEADIAAAAIgFAEg");
	this.shape_1.setTransform(-67.8,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AgCBhQgLAAgNgDQgkgKgTghQgSggAJgkQAKgkAhgTQAggTAjAKQAlAKATAgQAFAKADANIAYAGIgmAmIgEAEAC4AAQAABMg2A2QgmAngxALQgVAFgWAAQhLAAg2g3Qg2g2AAhMQAAhMA2g2QA2g2BLAAQAWAAAVAFQAxALAmAmQA2A2AABMgAA8AlIgRhAIApALABGAcIgDAEIgBAAIAAAA");
	this.shape_2.setTransform(-88.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfgfIAnALIAYAGIgkAmIgEADIgBABIgFAEgAgIAbIAEgDIgEADgAgIAbg");
	this.shape_3.setTransform(-80.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("ACbAAQAABAgtAtQggAggqAKQgRAEgTAAQg/AAgtguQgtgtAAhAQAAg/AtguQAtgtA/AAQATAAARAEQAqAKAgAfQAtAuAAA/gAgCBRQgJAAgLgDQgegIgPgbQgQgbAIgeQAIgeAcgQQAbgQAdAJQAfAIAQAaQAEAJACALIAVAFIggAfIgDADAAzAfIgPg2IAiAKAA7AXIgDADIAAAAIgBAB");
	this.shape_4.setTransform(-74.1,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgagaIAhAJIAUAGIgeAfIgEADIAAAAIgFAEgAgHAXIAEgDIgDADgAgHAXg");
	this.shape_5.setTransform(-67.8,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:0.752,scaleY:0.752,x:-93.5,y:-18.6}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance,p:{scaleX:0.896,scaleY:0.896,x:-111.5,y:-22.3}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{scaleX:0.752,scaleY:0.752,x:-93.5,y:-18.6}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{scaleX:0.752,scaleY:0.752,x:-93.5,y:-18.6}}]},1).wait(1));

	// 圖層 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF8C5").s().p("AtBETQlahxAAiiQAAigFahzQFZhyHoAAQHpAAFZByQFaBzAACgQAACilaBxQlZBznpAAQnoAAlZhzg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF8C5").s().p("AtBETQlahxAAiiQAAihFahyQFZhyHoAAQHpAAFZByQFaByAAChQAACilaBxQlZBznpAAQnoAAlZhzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-39,236,78);


(lib._111_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1314,740);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		playSound("nana_converted");
	}
	this.frame_23 = function() {
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.home.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			window.open("contents.html", "_self");
		}
	}
	this.frame_199 = function() {
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
		
		this.nissannext.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_89.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_89()
		{
			this.gotoAndPlay(201);
		}
	}
	this.frame_248 = function() {
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
		
		this.xx.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_97.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_97()
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
		
		this.hint.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_98.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_98()
		{
			this.gotoAndPlay(223);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_120.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_120()
		{
			this.gotoAndPlay(2645);
		}
	}
	this.frame_255 = function() {
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
		
		this.chin.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_90.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_90()
		{
			this.gotoAndPlay(257);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.hint.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_99.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_99()
		{
			this.gotoAndPlay(223);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_117.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_117()
		{
			this.gotoAndPlay(2645);
		}
	}
	this.frame_276 = function() {
		playSound("嚴慶齡");
	}
	this.frame_944 = function() {
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
		
		this.nextwen.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_91.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_91()
		{
			this.gotoAndPlay(946);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.hint.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_101.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_101()
		{
			this.gotoAndPlay(2495);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_122.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_122()
		{
			this.gotoAndPlay(2655);
		}
	}
	this.frame_970 = function() {
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
		
		this.wen.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_92.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_92()
		{
			this.gotoAndPlay(972);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.hint.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_104.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_104()
		{
			this.gotoAndPlay(2525);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_125.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_125()
		{
			this.gotoAndPlay(2665);
		}
	}
	this.frame_982 = function() {
		playSound("吳舜文");
	}
	this.frame_1521 = function() {
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
		
		this.nexttai.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_93.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_93()
		{
			this.gotoAndPlay(1523);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.hint.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_107.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_107()
		{
			this.gotoAndPlay(2555);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_127.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_127()
		{
			this.gotoAndPlay(2675);
		}
	}
	this.frame_1544 = function() {
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
		
		this.tai.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_94.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_94()
		{
			this.gotoAndPlay(1546);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.hint.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_113.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_113()
		{
			this.gotoAndPlay(2585);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_129.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_129()
		{
			this.gotoAndPlay(2685);
		}
	}
	this.frame_1577 = function() {
		playSound("嚴凱泰");
	}
	this.frame_2446 = function() {
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
		
		this.tailast.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_95.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_95()
		{
			this.gotoAndPlay(2448);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.hint.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_115.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_115()
		{
			this.gotoAndPlay(2615);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_131.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_131()
		{
			this.gotoAndPlay(2695);
		}
	}
	this.frame_2489 = function() {
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
		
		this.goreview.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_96.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_96()
		{
			this.gotoAndPlay(15);
		}
		
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.gonext.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("chpaab.html", "_self");
		}
	}
	this.frame_2519 = function() {
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
		
		this.x1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_102.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_102()
		{
			this.gotoAndPlay(940);
		}
	}
	this.frame_2549 = function() {
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
		
		this.x2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_106.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_106()
		{
			this.gotoAndPlay(965);
		}
	}
	this.frame_2579 = function() {
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
		
		this.x3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_112.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_112()
		{
			this.gotoAndPlay(1515);
		}
	}
	this.frame_2609 = function() {
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
		
		this.x4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_114.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_114()
		{
			this.gotoAndPlay(1542);
		}
	}
	this.frame_2639 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.x5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_116.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_116()
		{
			this.gotoAndPlay(2445);
		}
		
		
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_2649 = function() {
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
		
		this.e04.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_119.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_119()
		{
			this.gotoAndPlay(254);
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
	this.frame_2659 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.dsdsd.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_123.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_123()
		{
			this.gotoAndPlay(940);
		}
		
		
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
		
		this.chp32a.addEventListener("click", fl_ClickToGoToWebPage_21);
		
		function fl_ClickToGoToWebPage_21() {
			window.open("chpcb.html", "_self");
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
	}
	this.frame_2669 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.ppp.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_126.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_126()
		{
			this.gotoAndPlay(965);
		}
		
		
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
		
		this.chp1b.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		function fl_ClickToGoToWebPage_19() {
			window.open("chpa.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp11b.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			window.open("chpaa.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp12b.addEventListener("click", fl_ClickToGoToWebPage_9);
		
		function fl_ClickToGoToWebPage_9() {
			window.open("chpab.html", "_self");
		}
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp112b.addEventListener("click", fl_ClickToGoToWebPage_11);
		
		function fl_ClickToGoToWebPage_11() {
			window.open("chpaab.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp121b.addEventListener("click", fl_ClickToGoToWebPage_12);
		
		function fl_ClickToGoToWebPage_12() {
			window.open("chpaba.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp122b.addEventListener("click", fl_ClickToGoToWebPage_13);
		
		function fl_ClickToGoToWebPage_13() {
			window.open("chpabb.html", "_self");
		}
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp2b.addEventListener("click", fl_ClickToGoToWebPage_16);
		
		function fl_ClickToGoToWebPage_16() {
			window.open("chpb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp21b.addEventListener("click", fl_ClickToGoToWebPage_17);
		
		function fl_ClickToGoToWebPage_17() {
			window.open("chpba.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp22b.addEventListener("click", fl_ClickToGoToWebPage_18);
		
		function fl_ClickToGoToWebPage_18() {
			window.open("chpbb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp3b.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		function fl_ClickToGoToWebPage_19() {
			window.open("chpc.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp31b.addEventListener("click", fl_ClickToGoToWebPage_20);
		
		function fl_ClickToGoToWebPage_20() {
			window.open("chpca.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp32b.addEventListener("click", fl_ClickToGoToWebPage_21);
		
		function fl_ClickToGoToWebPage_21() {
			window.open("chpcb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp33b.addEventListener("click", fl_ClickToGoToWebPage_22);
		
		function fl_ClickToGoToWebPage_22() {
			window.open("chpcc.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp34b.addEventListener("click", fl_ClickToGoToWebPage_23);
		
		function fl_ClickToGoToWebPage_23() {
			window.open("chpcd.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp35b.addEventListener("click", fl_ClickToGoToWebPage_24);
		
		function fl_ClickToGoToWebPage_24() {
			window.open("chpce.html", "_self");
		}
	}
	this.frame_2679 = function() {
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
		
		this.fvdfvef.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_128.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_128()
		{
			this.gotoAndPlay(1515);
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp1c.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		function fl_ClickToGoToWebPage_19() {
			window.open("chpa.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp11c.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			window.open("chpaa.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp12c.addEventListener("click", fl_ClickToGoToWebPage_9);
		
		function fl_ClickToGoToWebPage_9() {
			window.open("chpab.html", "_self");
		}
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp112c.addEventListener("click", fl_ClickToGoToWebPage_11);
		
		function fl_ClickToGoToWebPage_11() {
			window.open("chpaab.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp121c.addEventListener("click", fl_ClickToGoToWebPage_12);
		
		function fl_ClickToGoToWebPage_12() {
			window.open("chpaba.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp122c.addEventListener("click", fl_ClickToGoToWebPage_13);
		
		function fl_ClickToGoToWebPage_13() {
			window.open("chpabb.html", "_self");
		}
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp2c.addEventListener("click", fl_ClickToGoToWebPage_16);
		
		function fl_ClickToGoToWebPage_16() {
			window.open("chpb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp21c.addEventListener("click", fl_ClickToGoToWebPage_17);
		
		function fl_ClickToGoToWebPage_17() {
			window.open("chpba.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp22c.addEventListener("click", fl_ClickToGoToWebPage_18);
		
		function fl_ClickToGoToWebPage_18() {
			window.open("chpbb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp3c.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		function fl_ClickToGoToWebPage_19() {
			window.open("chpc.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp31c.addEventListener("click", fl_ClickToGoToWebPage_20);
		
		function fl_ClickToGoToWebPage_20() {
			window.open("chpca.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp32c.addEventListener("click", fl_ClickToGoToWebPage_21);
		
		function fl_ClickToGoToWebPage_21() {
			window.open("chpcb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp33c.addEventListener("click", fl_ClickToGoToWebPage_22);
		
		function fl_ClickToGoToWebPage_22() {
			window.open("chpcc.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp34c.addEventListener("click", fl_ClickToGoToWebPage_23);
		
		function fl_ClickToGoToWebPage_23() {
			window.open("chpcd.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp35c.addEventListener("click", fl_ClickToGoToWebPage_24);
		
		function fl_ClickToGoToWebPage_24() {
			window.open("chpce.html", "_self");
		}
	}
	this.frame_2689 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.erferf.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_130.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_130()
		{
			this.gotoAndPlay(1542);
		}
		
		
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
		
		this.chp1d.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		function fl_ClickToGoToWebPage_19() {
			window.open("chpa.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp11d.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			window.open("chpaa.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp12d.addEventListener("click", fl_ClickToGoToWebPage_9);
		
		function fl_ClickToGoToWebPage_9() {
			window.open("chpab.html", "_self");
		}
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp112d.addEventListener("click", fl_ClickToGoToWebPage_11);
		
		function fl_ClickToGoToWebPage_11() {
			window.open("chpaab.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp121d.addEventListener("click", fl_ClickToGoToWebPage_12);
		
		function fl_ClickToGoToWebPage_12() {
			window.open("chpaba.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp122d.addEventListener("click", fl_ClickToGoToWebPage_13);
		
		function fl_ClickToGoToWebPage_13() {
			window.open("chpabb.html", "_self");
		}
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp2d.addEventListener("click", fl_ClickToGoToWebPage_16);
		
		function fl_ClickToGoToWebPage_16() {
			window.open("chpb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp21d.addEventListener("click", fl_ClickToGoToWebPage_17);
		
		function fl_ClickToGoToWebPage_17() {
			window.open("chpba.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp22d.addEventListener("click", fl_ClickToGoToWebPage_18);
		
		function fl_ClickToGoToWebPage_18() {
			window.open("chpbb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp3d.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		function fl_ClickToGoToWebPage_19() {
			window.open("chpc.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp31d.addEventListener("click", fl_ClickToGoToWebPage_20);
		
		function fl_ClickToGoToWebPage_20() {
			window.open("chpca.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp32d.addEventListener("click", fl_ClickToGoToWebPage_21);
		
		function fl_ClickToGoToWebPage_21() {
			window.open("chpcb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp33d.addEventListener("click", fl_ClickToGoToWebPage_22);
		
		function fl_ClickToGoToWebPage_22() {
			window.open("chpcc.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp34d.addEventListener("click", fl_ClickToGoToWebPage_23);
		
		function fl_ClickToGoToWebPage_23() {
			window.open("chpcd.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp35d.addEventListener("click", fl_ClickToGoToWebPage_24);
		
		function fl_ClickToGoToWebPage_24() {
			window.open("chpce.html", "_self");
		}
	}
	this.frame_2699 = function() {
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
		
		this.errer.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_132.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_132()
		{
			this.gotoAndPlay(2445);
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp1e.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		function fl_ClickToGoToWebPage_19() {
			window.open("chpa.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp11e.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			window.open("chpaa.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp12e.addEventListener("click", fl_ClickToGoToWebPage_9);
		
		function fl_ClickToGoToWebPage_9() {
			window.open("chpab.html", "_self");
		}
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp112e.addEventListener("click", fl_ClickToGoToWebPage_11);
		
		function fl_ClickToGoToWebPage_11() {
			window.open("chpaab.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp121e.addEventListener("click", fl_ClickToGoToWebPage_12);
		
		function fl_ClickToGoToWebPage_12() {
			window.open("chpaba.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp122e.addEventListener("click", fl_ClickToGoToWebPage_13);
		
		function fl_ClickToGoToWebPage_13() {
			window.open("chpabb.html", "_self");
		}
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp2e.addEventListener("click", fl_ClickToGoToWebPage_16);
		
		function fl_ClickToGoToWebPage_16() {
			window.open("chpb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp21e.addEventListener("click", fl_ClickToGoToWebPage_17);
		
		function fl_ClickToGoToWebPage_17() {
			window.open("chpba.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp22e.addEventListener("click", fl_ClickToGoToWebPage_18);
		
		function fl_ClickToGoToWebPage_18() {
			window.open("chpbb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp3e.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		function fl_ClickToGoToWebPage_19() {
			window.open("chpc.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp31e.addEventListener("click", fl_ClickToGoToWebPage_20);
		
		function fl_ClickToGoToWebPage_20() {
			window.open("chpca.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp32e.addEventListener("click", fl_ClickToGoToWebPage_21);
		
		function fl_ClickToGoToWebPage_21() {
			window.open("chpcb.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp33e.addEventListener("click", fl_ClickToGoToWebPage_22);
		
		function fl_ClickToGoToWebPage_22() {
			window.open("chpcc.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp34e.addEventListener("click", fl_ClickToGoToWebPage_23);
		
		function fl_ClickToGoToWebPage_23() {
			window.open("chpcd.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.chp35e.addEventListener("click", fl_ClickToGoToWebPage_24);
		
		function fl_ClickToGoToWebPage_24() {
			window.open("chpce.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(4).call(this.frame_23).wait(176).call(this.frame_199).wait(49).call(this.frame_248).wait(7).call(this.frame_255).wait(21).call(this.frame_276).wait(668).call(this.frame_944).wait(26).call(this.frame_970).wait(12).call(this.frame_982).wait(539).call(this.frame_1521).wait(23).call(this.frame_1544).wait(33).call(this.frame_1577).wait(869).call(this.frame_2446).wait(43).call(this.frame_2489).wait(30).call(this.frame_2519).wait(30).call(this.frame_2549).wait(30).call(this.frame_2579).wait(30).call(this.frame_2609).wait(30).call(this.frame_2639).wait(10).call(this.frame_2649).wait(10).call(this.frame_2659).wait(10).call(this.frame_2669).wait(10).call(this.frame_2679).wait(10).call(this.frame_2689).wait(10).call(this.frame_2699).wait(1));

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
	this.home.setTransform(1560.8,83.6,1.461,1.461,0,0,0,0.6,0.6);
	new cjs.ButtonHelper(this.home, 0, 1, 2);

	this.local = new lib._3now();
	this.local.parent = this;
	this.local.setTransform(1843.7,83.6,1.461,1.461,0,0,0,0.6,0.6);
	new cjs.ButtonHelper(this.local, 0, 1, 2);

	this.hint = new lib._2hint();
	this.hint.parent = this;
	this.hint.setTransform(1702.2,83.6,1.461,1.461,0,0,0,0.6,0.6);
	new cjs.ButtonHelper(this.hint, 0, 1, 2);

	this.x1 = new lib.x_1();
	this.x1.parent = this;
	this.x1.setTransform(1664.6,290.1,1.7,1.7);
	new cjs.ButtonHelper(this.x1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},23).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},176).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},48).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},7).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},688).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},1).to({state:[{t:this.home},{t:this.local},{t:this.hint}]},25).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},550).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},1).to({state:[{t:this.home},{t:this.local},{t:this.hint}]},22).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},901).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},31).to({state:[]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},15).to({state:[{t:this.home},{t:this.hint},{t:this.x1},{t:this.local}]},25).to({state:[]},1).to({state:[{t:this.home},{t:this.local},{t:this.hint}]},4).to({state:[{t:this.home},{t:this.local},{t:this.hint}]},25).to({state:[]},1).to({state:[{t:this.home},{t:this.local},{t:this.hint}]},4).to({state:[{t:this.home},{t:this.local},{t:this.hint}]},25).to({state:[]},1).to({state:[{t:this.home},{t:this.local},{t:this.hint}]},4).to({state:[{t:this.home},{t:this.local},{t:this.hint}]},25).to({state:[]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},4).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},25).to({state:[]},1).wait(60));

	// backbg
	this.instance_2 = new lib.屏幕();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960.8,543.9,1.467,1.467,0,0,0,0.6,0.1);
	this.instance_2.alpha = 0.738;

	this.goreview = new lib._111zback_1();
	this.goreview.parent = this;
	this.goreview.setTransform(630.4,541.1,0.984,0.984,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.goreview, 0, 1, 2);

	this.gonext = new lib._111zgo_1();
	this.gonext.parent = this;
	this.gonext.setTransform(1297.1,541.1,0.984,0.984,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.gonext, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{scaleX:1.467}}]},2479).to({state:[{t:this.instance_2,p:{scaleX:1.461}},{t:this.gonext},{t:this.goreview}]},10).to({state:[]},1).wait(210));

	// back常駐
	this.local_1 = new lib._3now();
	this.local_1.parent = this;
	this.local_1.setTransform(1843.7,83.6,1.461,1.461,0,0,0,0.6,0.6);
	new cjs.ButtonHelper(this.local_1, 0, 1, 2);

	this.hint_1 = new lib._2hint();
	this.hint_1.parent = this;
	this.hint_1.setTransform(1702.2,83.6,1.461,1.461,0,0,0,0.6,0.6);
	new cjs.ButtonHelper(this.hint_1, 0, 1, 2);

	this.home_1 = new lib._1main();
	this.home_1.parent = this;
	this.home_1.setTransform(1560.8,83.6,1.461,1.461,0,0,0,0.6,0.6);
	new cjs.ButtonHelper(this.home_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.home_1},{t:this.hint_1},{t:this.local_1}]},2479).to({state:[{t:this.home_1},{t:this.hint_1},{t:this.local_1}]},10).to({state:[]},1).wait(210));

	// 提示
	this.instance_3 = new lib.hint();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1561.5,235,0.303,0.303,0,0,0,0,1.2);
	this.instance_3._off = true;

	this.xx = new lib.x_1();
	this.xx.parent = this;
	this.xx.setTransform(1688.1,284.3,1.7,1.7);
	new cjs.ButtonHelper(this.xx, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},222).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3},{t:this.xx}]},19).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},5).to({state:[]},1).wait(2445));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(222).to({_off:false},0).to({regX:0.1,regY:1.1,scaleX:1.43,scaleY:1.43,x:958.7,y:542.5},7).wait(20).to({regX:0,regY:1.2,scaleX:0.3,scaleY:0.3,x:1561.5,y:235},5).to({_off:true},1).wait(2445));

	// 裕隆前話
	this.nissanword = new lib.nissanword();
	this.nissanword.parent = this;
	this.nissanword.setTransform(960.9,938.3,1.461,1.461,0,0,0,650,150.1);
	this.nissanword.alpha = 0.5;
	this.nissanword._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissanword).wait(9).to({_off:false},0).to({regX:650.1,y:938.2,alpha:0.539},3).to({regX:650,y:938.3,alpha:1},31).wait(70).to({_off:true},1).wait(2586));

	// 裕隆前
	this.nissan1 = new lib.nissan1();
	this.nissan1.parent = this;
	this.nissan1.setTransform(961,541.1,1.461,1.461,0,0,0,657.1,370.1);
	this.nissan1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.nissan1).to({alpha:1},23).wait(90).to({_off:true},1).wait(2586));

	// 下一頁
	this.nissannext = new lib.nissannext();
	this.nissannext.parent = this;
	this.nissannext.setTransform(1762.8,1030.1,1.461,1.461,0,0,0,100,25.6);
	this.nissannext._off = true;
	new cjs.ButtonHelper(this.nissannext, 0, 1, 2, false, new lib.nissannext(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nissannext).wait(197).to({_off:false},0).wait(2).to({_off:true},1).wait(2500));

	// 裕隆前2
	this.nissan2 = new lib.nissan2();
	this.nissan2.parent = this;
	this.nissan2.setTransform(961,541.1,1.461,1.461,0,0,0,657.1,370.1);
	this.nissan2.alpha = 0.5;
	this.nissan2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissan2).wait(114).to({_off:false},0).to({alpha:1},20).wait(65).to({_off:true},1).wait(2500));

	// 嚴慶齡
	this.instance_4 = new lib._111Ll();
	this.instance_4.parent = this;
	this.instance_4.setTransform(374.3,561.2,1.461,1.461,0,0,0,0.5,0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.chin = new lib._111L_1();
	this.chin.parent = this;
	this.chin.setTransform(374.4,561.4,1.461,1.461,0,0,0,200.1,300.1);
	new cjs.ButtonHelper(this.chin, 0, 1, 2, false, new lib._111L_1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},200).to({state:[{t:this.instance_4}]},21).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.chin}]},33).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},19).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},668).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},24).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},564).to({state:[{t:this.instance_4}]},9).to({state:[]},1).to({state:[{t:this.instance_4}]},919).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_4}]},1).to({state:[]},20).wait(210));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(200).to({_off:false},0).to({alpha:1},21).wait(1).to({_off:true},33).wait(1).to({_off:false,regX:0.6,regY:0.1,x:374.5,y:561.4},0).to({regX:0.5,scaleX:0.91,scaleY:0.91,x:244.6,y:425.7},19).wait(670).to({regX:0.6,x:244.7},0).to({scaleX:1.46,scaleY:1.46,x:374.5,y:561.4},24).to({alpha:0.5},1).to({_off:true},1).wait(564).to({_off:false},0).wait(9).to({_off:true},1).wait(919).to({_off:false},0).to({alpha:1},5).wait(1).to({_off:true},20).wait(210));

	// 齡word
	this.instance_5 = new lib._111LW_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1167.7,580.3,1.461,1.461,0,0,0,0.6,0.6);
	this.instance_5.alpha = 0.5;
	this.instance_5._off = true;

	this.nextwen = new lib._111back_1();
	this.nextwen.parent = this;
	this.nextwen.setTransform(240.8,973.1,1.461,1.461);
	new cjs.ButtonHelper(this.nextwen, 0, 1, 2, false, new lib._111back_1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},267).to({state:[{t:this.instance_5}]},8).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5},{t:this.nextwen}]},668).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},12).to({state:[]},1).wait(1742));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(267).to({_off:false},0).to({alpha:1},8).wait(670).to({alpha:0},12).to({_off:true},1).wait(1742));

	// 吳舜文
	this.instance_6 = new lib._111Mm();
	this.instance_6.parent = this;
	this.instance_6.setTransform(959,566.1,1.461,1.461,0,0,0,0.5,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.wen = new lib._111M_1();
	this.wen.parent = this;
	this.wen.setTransform(666.7,127.6,1.461,1.461);
	new cjs.ButtonHelper(this.wen, 0, 1, 2, false, new lib._111M_1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},200).to({state:[{t:this.instance_6}]},21).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},33).to({state:[]},1).to({state:[{t:this.instance_6}]},698).to({state:[{t:this.instance_6}]},15).to({state:[{t:this.wen}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},22).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},527).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},21).to({state:[{t:this.instance_6}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},919).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},1).to({state:[]},20).wait(210));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(200).to({_off:false},0).to({alpha:1},21).wait(34).to({regX:0.6,x:959.1,alpha:0.5},0).to({_off:true},1).wait(698).to({_off:false},0).to({alpha:1},15).to({_off:true,regX:0,regY:0,x:666.7,y:127.6},1).wait(1).to({_off:false,regX:0.6,regY:0.1,x:959.1,y:566.1},0).to({scaleX:0.91,scaleY:0.91,x:244.7,y:425.7},22).wait(529).to({scaleX:1.46,scaleY:1.46,x:959.1,y:566.1},21).to({alpha:0.5},1).to({_off:true},1).wait(919).to({_off:false},0).to({alpha:1},5).wait(1).to({_off:true},20).wait(210));

	// 文word
	this.instance_7 = new lib._111MW_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1167.7,580.3,1.461,1.461,0,0,0,0.6,0.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.nexttai = new lib._111back_1();
	this.nexttai.parent = this;
	this.nexttai.setTransform(240.8,973.1,1.461,1.461);
	new cjs.ButtonHelper(this.nexttai, 0, 1, 2, false, new lib._111back_1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},983).to({state:[{t:this.instance_7}]},11).to({state:[{t:this.instance_7},{t:this.nexttai}]},527).to({state:[]},1).wait(1178));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(983).to({_off:false},0).to({alpha:1},11).wait(527).to({_off:true},1).wait(1178));

	// 嚴凱泰
	this.instance_8 = new lib._111Rr();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1543.6,561.4,1.461,1.461,0,0,0,0.6,0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.tai = new lib._111R_1();
	this.tai.parent = this;
	this.tai.setTransform(1251.2,122.9,1.461,1.461);
	this.tai.alpha = 0.5;
	this.tai._off = true;
	new cjs.ButtonHelper(this.tai, 0, 1, 2, false, new lib._111R_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(200).to({_off:false},0).to({alpha:1},21).wait(34).to({alpha:0.5},0).to({_off:true},1).wait(698).to({_off:false},0).wait(16).to({_off:true},1).wait(573).to({_off:false,alpha:1},1).to({scaleX:0.91,scaleY:0.91,x:244.7,y:425.7},31).wait(871).to({scaleX:1.46,scaleY:1.46,x:1543.6,y:561.4},22).wait(1).to({_off:true},20).wait(210));
	this.timeline.addTween(cjs.Tween.get(this.tai).wait(1535).to({_off:false},0).to({alpha:1},9).to({_off:true,regX:0.6,regY:0.1,x:1543.6,y:561.4},1).wait(1155));

	// 泰word
	this.instance_9 = new lib._111RW_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1167.7,580.3,1.461,1.461,0,0,0,0.6,0.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.tailast = new lib._111back_1();
	this.tailast.parent = this;
	this.tailast.setTransform(240.8,973.1,1.461,1.461);
	new cjs.ButtonHelper(this.tailast, 0, 1, 2, false, new lib._111back_1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},1565).to({state:[{t:this.instance_9}]},11).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9},{t:this.tailast}]},869).to({state:[]},1).wait(253));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1565).to({_off:false},0).to({alpha:1},11).wait(870).to({_off:true},1).wait(253));

	// bg
	this.instance_10 = new lib._111_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(960,541.5,1.461,1.461,0,0,0,657,370.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(200).to({_off:false},0).wait(56).to({startPosition:0},0).wait(2233).to({startPosition:0},0).to({_off:true},1).wait(210));

	// x3
	this.x3 = new lib.x_1();
	this.x3.parent = this;
	this.x3.setTransform(1685.9,288,1.7,1.7,0,0,0,-0.1,-0.6);
	this.x3._off = true;
	new cjs.ButtonHelper(this.x3, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.x3).wait(2579).to({_off:false},0).to({_off:true},1).wait(120));

	// x4
	this.x4 = new lib.x_1();
	this.x4.parent = this;
	this.x4.setTransform(1702,290.1,1.7,1.7);
	this.x4._off = true;
	new cjs.ButtonHelper(this.x4, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.x4).wait(2609).to({_off:false},0).to({_off:true},1).wait(90));

	// x5
	this.x5 = new lib.x_1();
	this.x5.parent = this;
	this.x5.setTransform(1686.9,286.3,1.7,1.7);
	this.x5._off = true;
	new cjs.ButtonHelper(this.x5, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.x5).wait(2639).to({_off:false},0).to({_off:true},1).wait(60));

	// w
	this.instance_11 = new lib.hint();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1561.5,235,0.303,0.303,0,0,0,0,1.2);
	this.instance_11._off = true;

	this.x2 = new lib.x_1();
	this.x2.parent = this;
	this.x2.setTransform(1679.5,290.1,1.7,1.7);
	new cjs.ButtonHelper(this.x2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},2494).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_11}]},20).to({state:[]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_11},{t:this.x2}]},20).to({state:[]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_11}]},20).to({state:[]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_11}]},20).to({state:[]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_11}]},20).to({state:[]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2494).to({_off:false},0).to({regX:0.1,regY:1.1,scaleX:1.43,scaleY:1.43,x:958.7,y:542.5},5).wait(20).to({_off:true},1).wait(4).to({_off:false,regX:0,regY:1.2,scaleX:0.3,scaleY:0.3,x:1561.5,y:235},0).to({regX:0.1,regY:1.1,scaleX:1.43,scaleY:1.43,x:958.7,y:542.5},5).wait(20).to({_off:true},1).wait(4).to({_off:false,regX:0,regY:1.2,scaleX:0.3,scaleY:0.3,x:1561.5,y:235},0).to({regX:0.1,regY:1.1,scaleX:1.43,scaleY:1.43,x:958.7,y:542.5},5).wait(20).to({_off:true},1).wait(4).to({_off:false,regX:0,regY:1.2,scaleX:0.3,scaleY:0.3,x:1561.5,y:235},0).to({regX:0.1,regY:1.1,scaleX:1.43,scaleY:1.43,x:958.7,y:542.5},5).wait(20).to({_off:true},1).wait(4).to({_off:false,regX:0,regY:1.2,scaleX:0.3,scaleY:0.3,x:1561.5,y:235},0).to({regX:0.1,regY:1.1,scaleX:1.43,scaleY:1.43,x:958.7,y:542.5},5).wait(20).to({_off:true},1).wait(60));

	// bg
	this.instance_12 = new lib._111Ll();
	this.instance_12.parent = this;
	this.instance_12.setTransform(244.6,425.7,0.913,0.913,0,0,0,0.5,0.1);

	this.nextwen_1 = new lib._111back_1();
	this.nextwen_1.parent = this;
	this.nextwen_1.setTransform(240.8,973.1,1.461,1.461);
	new cjs.ButtonHelper(this.nextwen_1, 0, 1, 2, false, new lib._111back_1(), 3);

	this.instance_13 = new lib._111LW_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1167.7,580.3,1.461,1.461,0,0,0,0.6,0.6);

	this.instance_14 = new lib._111_1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(960,541.5,1.461,1.461,0,0,0,657,370.1);

	this.instance_15 = new lib._111Mm();
	this.instance_15.parent = this;
	this.instance_15.setTransform(959.1,566.1,1.461,1.461,0,0,0,0.6,0.1);
	this.instance_15.alpha = 0.5;

	this.taii = new lib._111Rr();
	this.taii.parent = this;
	this.taii.setTransform(1543.6,561.4,1.461,1.461,0,0,0,0.6,0.1);
	this.taii.alpha = 0.5;

	this.instance_16 = new lib._111MW_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1167.7,580.3,1.461,1.461,0,0,0,0.6,0.6);

	this.instance_17 = new lib._111RW_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1167.7,580.3,1.461,1.461,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.nextwen_1},{t:this.instance_12,p:{regX:0.5,scaleX:0.913,scaleY:0.913,x:244.6,y:425.7,alpha:1}}]},2494).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.nextwen_1},{t:this.instance_12,p:{regX:0.5,scaleX:0.913,scaleY:0.913,x:244.6,y:425.7,alpha:1}}]},25).to({state:[]},1).to({state:[{t:this.instance_14},{t:this.taii,p:{scaleX:1.461,scaleY:1.461,x:1543.6,y:561.4,alpha:0.5}},{t:this.instance_12,p:{regX:0.6,scaleX:1.461,scaleY:1.461,x:374.5,y:561.4,alpha:0.5}},{t:this.instance_15,p:{scaleX:1.461,scaleY:1.461,x:959.1,y:566.1,alpha:0.5}}]},4).to({state:[{t:this.instance_14},{t:this.taii,p:{scaleX:1.461,scaleY:1.461,x:1543.6,y:561.4,alpha:0.5}},{t:this.instance_12,p:{regX:0.6,scaleX:1.461,scaleY:1.461,x:374.5,y:561.4,alpha:0.5}},{t:this.instance_15,p:{scaleX:1.461,scaleY:1.461,x:959.1,y:566.1,alpha:0.5}}]},25).to({state:[]},1).to({state:[{t:this.instance_14},{t:this.instance_16},{t:this.nextwen_1},{t:this.instance_15,p:{scaleX:0.913,scaleY:0.913,x:244.7,y:425.7,alpha:1}}]},4).to({state:[{t:this.instance_14},{t:this.instance_16},{t:this.nextwen_1},{t:this.instance_15,p:{scaleX:0.913,scaleY:0.913,x:244.7,y:425.7,alpha:1}}]},25).to({state:[]},1).to({state:[{t:this.instance_14},{t:this.instance_15,p:{scaleX:1.461,scaleY:1.461,x:959.1,y:566.1,alpha:0.5}},{t:this.instance_12,p:{regX:0.6,scaleX:1.461,scaleY:1.461,x:374.5,y:561.4,alpha:0.5}},{t:this.taii,p:{scaleX:1.461,scaleY:1.461,x:1543.6,y:561.4,alpha:0.5}}]},4).to({state:[{t:this.instance_14},{t:this.instance_15,p:{scaleX:1.461,scaleY:1.461,x:959.1,y:566.1,alpha:0.5}},{t:this.instance_12,p:{regX:0.6,scaleX:1.461,scaleY:1.461,x:374.5,y:561.4,alpha:0.5}},{t:this.taii,p:{scaleX:1.461,scaleY:1.461,x:1543.6,y:561.4,alpha:0.5}}]},25).to({state:[]},1).to({state:[{t:this.instance_14},{t:this.instance_17},{t:this.nextwen_1},{t:this.taii,p:{scaleX:0.913,scaleY:0.913,x:244.7,y:425.7,alpha:1}}]},4).to({state:[{t:this.instance_14},{t:this.instance_17},{t:this.nextwen_1},{t:this.taii,p:{scaleX:0.913,scaleY:0.913,x:244.7,y:425.7,alpha:1}}]},25).to({state:[]},1).wait(60));

	// x1
	this.e04 = new lib.e04();
	this.e04.parent = this;
	this.e04.setTransform(1771.7,132.6,1.7,1.7);
	this.e04._off = true;
	new cjs.ButtonHelper(this.e04, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.e04).wait(2649).to({_off:false},0).to({_off:true},1).wait(50));

	// w
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2},{t:this.chp3},{t:this.chp11},{t:this.chp12},{t:this.chp21},{t:this.chp22},{t:this.chp112},{t:this.chp31},{t:this.chp32},{t:this.chp33},{t:this.chp34},{t:this.chp35},{t:this.chp121},{t:this.chp122},{t:this.chp1}]},2649).to({state:[]},1).wait(50));

	// ax
	this.dsdsd = new lib.e04();
	this.dsdsd.parent = this;
	this.dsdsd.setTransform(1771.7,132.6,1.7,1.7);
	this.dsdsd._off = true;
	new cjs.ButtonHelper(this.dsdsd, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.dsdsd).wait(2659).to({_off:false},0).to({_off:true},1).wait(40));

	// a
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

	this.chp32a = new lib.chp32();
	this.chp32a.parent = this;
	this.chp32a.setTransform(1447.4,722.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp32a, 0, 1, 1);

	this.chp31a = new lib.chp31();
	this.chp31a.parent = this;
	this.chp31a.setTransform(1447.4,625.6,1.61,1.61);
	new cjs.ButtonHelper(this.chp31a, 0, 1, 1);

	this.chp112a = new lib.chp112();
	this.chp112a.parent = this;
	this.chp112a.setTransform(1350.8,196.8,1.464,1.464);
	new cjs.ButtonHelper(this.chp112a, 0, 1, 1);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2a},{t:this.chp3a},{t:this.chp11a},{t:this.chp12a},{t:this.chp21a},{t:this.chp22a},{t:this.chp112a},{t:this.chp31a},{t:this.chp32a},{t:this.chp33a},{t:this.chp34a},{t:this.chp35a},{t:this.chp121a},{t:this.chp122a},{t:this.chp1a}]},2659).to({state:[]},1).wait(40));

	// bx
	this.ppp = new lib.e04();
	this.ppp.parent = this;
	this.ppp.setTransform(1771.7,132.6,1.7,1.7);
	this.ppp._off = true;
	new cjs.ButtonHelper(this.ppp, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.ppp).wait(2669).to({_off:false},0).to({_off:true},1).wait(30));

	// b
	this.chp1b = new lib.ch1();
	this.chp1b.parent = this;
	this.chp1b.setTransform(521.2,263.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp1b, 0, 1, 1);

	this.chp122b = new lib.chp122();
	this.chp122b.parent = this;
	this.chp122b.setTransform(1350.8,390.7,1.464,1.464);
	new cjs.ButtonHelper(this.chp122b, 0, 1, 1);

	this.chp121b = new lib.chp121();
	this.chp121b.parent = this;
	this.chp121b.setTransform(1350.8,293.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp121b, 0, 1, 1);

	this.chp35b = new lib.chp35();
	this.chp35b.parent = this;
	this.chp35b.setTransform(1447.4,993,1.61,1.61);
	new cjs.ButtonHelper(this.chp35b, 0, 1, 1);

	this.chp34b = new lib.chp34();
	this.chp34b.parent = this;
	this.chp34b.setTransform(1447.4,902.9,1.61,1.61);
	new cjs.ButtonHelper(this.chp34b, 0, 1, 1);

	this.chp33b = new lib.chp33();
	this.chp33b.parent = this;
	this.chp33b.setTransform(1447.4,814.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp33b, 0, 1, 1);

	this.chp32b = new lib.chp32();
	this.chp32b.parent = this;
	this.chp32b.setTransform(1447.4,722.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp32b, 0, 1, 1);

	this.chp31b = new lib.chp31();
	this.chp31b.parent = this;
	this.chp31b.setTransform(1447.4,625.6,1.61,1.61);
	new cjs.ButtonHelper(this.chp31b, 0, 1, 1);

	this.chp112b = new lib.chp112();
	this.chp112b.parent = this;
	this.chp112b.setTransform(1350.8,196.8,1.464,1.464);
	new cjs.ButtonHelper(this.chp112b, 0, 1, 1);

	this.chp22b = new lib.chp22();
	this.chp22b.parent = this;
	this.chp22b.setTransform(962.4,590.6,1.464,1.464);
	new cjs.ButtonHelper(this.chp22b, 0, 1, 1);

	this.chp21b = new lib.chp21();
	this.chp21b.parent = this;
	this.chp21b.setTransform(962.4,471.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp21b, 0, 1, 1);

	this.chp12b = new lib.chp12();
	this.chp12b.parent = this;
	this.chp12b.setTransform(961.4,330.1,1.464,1.464,0,0,0,-0.7,-0.6);
	new cjs.ButtonHelper(this.chp12b, 0, 1, 1);

	this.chp11b = new lib.chp11();
	this.chp11b.parent = this;
	this.chp11b.setTransform(962.6,136.3,1.464,1.464,0,0,0,0.1,0.5);
	new cjs.ButtonHelper(this.chp11b, 0, 1, 1);

	this.chp3b = new lib.ch3();
	this.chp3b.parent = this;
	this.chp3b.setTransform(529.4,835.1,1.464,1.464);
	new cjs.ButtonHelper(this.chp3b, 0, 1, 1);

	this.chp2b = new lib.ch2();
	this.chp2b.parent = this;
	this.chp2b.setTransform(524,536.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp2b, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2b},{t:this.chp3b},{t:this.chp11b},{t:this.chp12b},{t:this.chp21b},{t:this.chp22b},{t:this.chp112b},{t:this.chp31b},{t:this.chp32b},{t:this.chp33b},{t:this.chp34b},{t:this.chp35b},{t:this.chp121b},{t:this.chp122b},{t:this.chp1b}]},2669).to({state:[]},1).wait(30));

	// cx
	this.fvdfvef = new lib.e04();
	this.fvdfvef.parent = this;
	this.fvdfvef.setTransform(1771.7,132.6,1.7,1.7);
	this.fvdfvef._off = true;
	new cjs.ButtonHelper(this.fvdfvef, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.fvdfvef).wait(2679).to({_off:false},0).to({_off:true},1).wait(20));

	// c
	this.chp1c = new lib.ch1();
	this.chp1c.parent = this;
	this.chp1c.setTransform(521.2,263.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp1c, 0, 1, 1);

	this.chp122c = new lib.chp122();
	this.chp122c.parent = this;
	this.chp122c.setTransform(1350.8,390.7,1.464,1.464);
	new cjs.ButtonHelper(this.chp122c, 0, 1, 1);

	this.chp121c = new lib.chp121();
	this.chp121c.parent = this;
	this.chp121c.setTransform(1350.8,293.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp121c, 0, 1, 1);

	this.chp35c = new lib.chp35();
	this.chp35c.parent = this;
	this.chp35c.setTransform(1447.4,993,1.61,1.61);
	new cjs.ButtonHelper(this.chp35c, 0, 1, 1);

	this.chp34c = new lib.chp34();
	this.chp34c.parent = this;
	this.chp34c.setTransform(1447.4,902.9,1.61,1.61);
	new cjs.ButtonHelper(this.chp34c, 0, 1, 1);

	this.chp33c = new lib.chp33();
	this.chp33c.parent = this;
	this.chp33c.setTransform(1447.4,814.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp33c, 0, 1, 1);

	this.chp32c = new lib.chp32();
	this.chp32c.parent = this;
	this.chp32c.setTransform(1447.4,722.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp32c, 0, 1, 1);

	this.chp31c = new lib.chp31();
	this.chp31c.parent = this;
	this.chp31c.setTransform(1447.4,625.6,1.61,1.61);
	new cjs.ButtonHelper(this.chp31c, 0, 1, 1);

	this.chp112c = new lib.chp112();
	this.chp112c.parent = this;
	this.chp112c.setTransform(1350.8,196.8,1.464,1.464);
	new cjs.ButtonHelper(this.chp112c, 0, 1, 1);

	this.chp22c = new lib.chp22();
	this.chp22c.parent = this;
	this.chp22c.setTransform(962.4,590.6,1.464,1.464);
	new cjs.ButtonHelper(this.chp22c, 0, 1, 1);

	this.chp21c = new lib.chp21();
	this.chp21c.parent = this;
	this.chp21c.setTransform(962.4,471.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp21c, 0, 1, 1);

	this.chp12c = new lib.chp12();
	this.chp12c.parent = this;
	this.chp12c.setTransform(961.4,330.1,1.464,1.464,0,0,0,-0.7,-0.6);
	new cjs.ButtonHelper(this.chp12c, 0, 1, 1);

	this.chp11c = new lib.chp11();
	this.chp11c.parent = this;
	this.chp11c.setTransform(962.6,136.3,1.464,1.464,0,0,0,0.1,0.5);
	new cjs.ButtonHelper(this.chp11c, 0, 1, 1);

	this.chp3c = new lib.ch3();
	this.chp3c.parent = this;
	this.chp3c.setTransform(529.4,835.1,1.464,1.464);
	new cjs.ButtonHelper(this.chp3c, 0, 1, 1);

	this.chp2c = new lib.ch2();
	this.chp2c.parent = this;
	this.chp2c.setTransform(524,536.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp2c, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2c},{t:this.chp3c},{t:this.chp11c},{t:this.chp12c},{t:this.chp21c},{t:this.chp22c},{t:this.chp112c},{t:this.chp31c},{t:this.chp32c},{t:this.chp33c},{t:this.chp34c},{t:this.chp35c},{t:this.chp121c},{t:this.chp122c},{t:this.chp1c}]},2679).to({state:[]},1).wait(20));

	// dx
	this.erferf = new lib.e04();
	this.erferf.parent = this;
	this.erferf.setTransform(1771.7,132.6,1.7,1.7);
	this.erferf._off = true;
	new cjs.ButtonHelper(this.erferf, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.erferf).wait(2689).to({_off:false},0).to({_off:true},1).wait(10));

	// d
	this.chp1d = new lib.ch1();
	this.chp1d.parent = this;
	this.chp1d.setTransform(521.2,263.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp1d, 0, 1, 1);

	this.chp122d = new lib.chp122();
	this.chp122d.parent = this;
	this.chp122d.setTransform(1350.8,390.7,1.464,1.464);
	new cjs.ButtonHelper(this.chp122d, 0, 1, 1);

	this.chp121d = new lib.chp121();
	this.chp121d.parent = this;
	this.chp121d.setTransform(1350.8,293.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp121d, 0, 1, 1);

	this.chp35d = new lib.chp35();
	this.chp35d.parent = this;
	this.chp35d.setTransform(1447.4,993,1.61,1.61);
	new cjs.ButtonHelper(this.chp35d, 0, 1, 1);

	this.chp34d = new lib.chp34();
	this.chp34d.parent = this;
	this.chp34d.setTransform(1447.4,902.9,1.61,1.61);
	new cjs.ButtonHelper(this.chp34d, 0, 1, 1);

	this.chp33d = new lib.chp33();
	this.chp33d.parent = this;
	this.chp33d.setTransform(1447.4,814.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp33d, 0, 1, 1);

	this.chp32d = new lib.chp32();
	this.chp32d.parent = this;
	this.chp32d.setTransform(1447.4,722.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp32d, 0, 1, 1);

	this.chp31d = new lib.chp31();
	this.chp31d.parent = this;
	this.chp31d.setTransform(1447.4,625.6,1.61,1.61);
	new cjs.ButtonHelper(this.chp31d, 0, 1, 1);

	this.chp112d = new lib.chp112();
	this.chp112d.parent = this;
	this.chp112d.setTransform(1350.8,196.8,1.464,1.464);
	new cjs.ButtonHelper(this.chp112d, 0, 1, 1);

	this.chp22d = new lib.chp22();
	this.chp22d.parent = this;
	this.chp22d.setTransform(962.4,590.6,1.464,1.464);
	new cjs.ButtonHelper(this.chp22d, 0, 1, 1);

	this.chp21d = new lib.chp21();
	this.chp21d.parent = this;
	this.chp21d.setTransform(962.4,471.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp21d, 0, 1, 1);

	this.chp12d = new lib.chp12();
	this.chp12d.parent = this;
	this.chp12d.setTransform(961.4,330.1,1.464,1.464,0,0,0,-0.7,-0.6);
	new cjs.ButtonHelper(this.chp12d, 0, 1, 1);

	this.chp11d = new lib.chp11();
	this.chp11d.parent = this;
	this.chp11d.setTransform(962.6,136.3,1.464,1.464,0,0,0,0.1,0.5);
	new cjs.ButtonHelper(this.chp11d, 0, 1, 1);

	this.chp3d = new lib.ch3();
	this.chp3d.parent = this;
	this.chp3d.setTransform(529.4,835.1,1.464,1.464);
	new cjs.ButtonHelper(this.chp3d, 0, 1, 1);

	this.chp2d = new lib.ch2();
	this.chp2d.parent = this;
	this.chp2d.setTransform(524,536.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp2d, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2d},{t:this.chp3d},{t:this.chp11d},{t:this.chp12d},{t:this.chp21d},{t:this.chp22d},{t:this.chp112d},{t:this.chp31d},{t:this.chp32d},{t:this.chp33d},{t:this.chp34d},{t:this.chp35d},{t:this.chp121d},{t:this.chp122d},{t:this.chp1d}]},2689).to({state:[]},1).wait(10));

	// ex
	this.errer = new lib.e04();
	this.errer.parent = this;
	this.errer.setTransform(1771.7,132.6,1.7,1.7);
	this.errer._off = true;
	new cjs.ButtonHelper(this.errer, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.errer).wait(2699).to({_off:false},0).wait(1));

	// e
	this.chp1e = new lib.ch1();
	this.chp1e.parent = this;
	this.chp1e.setTransform(521.2,263.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp1e, 0, 1, 1);

	this.chp122e = new lib.chp122();
	this.chp122e.parent = this;
	this.chp122e.setTransform(1350.8,390.7,1.464,1.464);
	new cjs.ButtonHelper(this.chp122e, 0, 1, 1);

	this.chp121e = new lib.chp121();
	this.chp121e.parent = this;
	this.chp121e.setTransform(1350.8,293.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp121e, 0, 1, 1);

	this.chp35e = new lib.chp35();
	this.chp35e.parent = this;
	this.chp35e.setTransform(1447.4,993,1.61,1.61);
	new cjs.ButtonHelper(this.chp35e, 0, 1, 1);

	this.chp34e = new lib.chp34();
	this.chp34e.parent = this;
	this.chp34e.setTransform(1447.4,902.9,1.61,1.61);
	new cjs.ButtonHelper(this.chp34e, 0, 1, 1);

	this.chp33e = new lib.chp33();
	this.chp33e.parent = this;
	this.chp33e.setTransform(1447.4,814.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp33e, 0, 1, 1);

	this.chp32e = new lib.chp32();
	this.chp32e.parent = this;
	this.chp32e.setTransform(1447.4,722.3,1.61,1.61);
	new cjs.ButtonHelper(this.chp32e, 0, 1, 1);

	this.chp31e = new lib.chp31();
	this.chp31e.parent = this;
	this.chp31e.setTransform(1447.4,625.6,1.61,1.61);
	new cjs.ButtonHelper(this.chp31e, 0, 1, 1);

	this.chp112e = new lib.chp112();
	this.chp112e.parent = this;
	this.chp112e.setTransform(1350.8,196.8,1.464,1.464);
	new cjs.ButtonHelper(this.chp112e, 0, 1, 1);

	this.chp22e = new lib.chp22();
	this.chp22e.parent = this;
	this.chp22e.setTransform(962.4,590.6,1.464,1.464);
	new cjs.ButtonHelper(this.chp22e, 0, 1, 1);

	this.chp21e = new lib.chp21();
	this.chp21e.parent = this;
	this.chp21e.setTransform(962.4,471.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp21e, 0, 1, 1);

	this.chp12e = new lib.chp12();
	this.chp12e.parent = this;
	this.chp12e.setTransform(961.4,330.1,1.464,1.464,0,0,0,-0.7,-0.6);
	new cjs.ButtonHelper(this.chp12e, 0, 1, 1);

	this.chp11e = new lib.chp11();
	this.chp11e.parent = this;
	this.chp11e.setTransform(962.6,136.3,1.464,1.464,0,0,0,0.1,0.5);
	new cjs.ButtonHelper(this.chp11e, 0, 1, 1);

	this.chp3e = new lib.ch3();
	this.chp3e.parent = this;
	this.chp3e.setTransform(529.4,835.1,1.464,1.464);
	new cjs.ButtonHelper(this.chp3e, 0, 1, 1);

	this.chp2e = new lib.ch2();
	this.chp2e.parent = this;
	this.chp2e.setTransform(524,536.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp2e, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2e},{t:this.chp3e},{t:this.chp11e},{t:this.chp12e},{t:this.chp21e},{t:this.chp22e},{t:this.chp112e},{t:this.chp31e},{t:this.chp32e},{t:this.chp33e},{t:this.chp34e},{t:this.chp35e},{t:this.chp121e},{t:this.chp122e},{t:this.chp1e}]},2699).wait(1));

	// ww
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

	this.chp22_1 = new lib.chp22();
	this.chp22_1.parent = this;
	this.chp22_1.setTransform(962.4,590.6,1.464,1.464);
	new cjs.ButtonHelper(this.chp22_1, 0, 1, 1);

	this.chp21_1 = new lib.chp21();
	this.chp21_1.parent = this;
	this.chp21_1.setTransform(962.4,471.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp21_1, 0, 1, 1);

	this.chp12_1 = new lib.chp12();
	this.chp12_1.parent = this;
	this.chp12_1.setTransform(961.4,330.1,1.464,1.464,0,0,0,-0.7,-0.6);
	new cjs.ButtonHelper(this.chp12_1, 0, 1, 1);

	this.chp11_1 = new lib.chp11();
	this.chp11_1.parent = this;
	this.chp11_1.setTransform(962.6,136.3,1.464,1.464,0,0,0,0.1,0.5);
	new cjs.ButtonHelper(this.chp11_1, 0, 1, 1);

	this.chp3_1 = new lib.ch3();
	this.chp3_1.parent = this;
	this.chp3_1.setTransform(529.4,835.1,1.464,1.464);
	new cjs.ButtonHelper(this.chp3_1, 0, 1, 1);

	this.chp2_1 = new lib.ch2();
	this.chp2_1.parent = this;
	this.chp2_1.setTransform(524,536.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp2_1, 0, 1, 1);

	this.instance_18 = new lib.chp111();
	this.instance_18.parent = this;
	this.instance_18.setTransform(1350.8,87.1,1.464,1.464,0,0,0,0,0.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18},{t:this.chp2_1},{t:this.chp3_1},{t:this.chp11_1},{t:this.chp12_1},{t:this.chp21_1},{t:this.chp22_1},{t:this.chp112_1},{t:this.chp31_1},{t:this.chp32_1},{t:this.chp33_1},{t:this.chp34_1},{t:this.chp35_1},{t:this.chp121_1},{t:this.chp122_1},{t:this.chp1_1}]},2644).to({state:[{t:this.instance_18}]},5).to({state:[]},1).to({state:[{t:this.instance_18},{t:this.chp2_1},{t:this.chp3_1},{t:this.chp11_1},{t:this.chp12_1},{t:this.chp21_1},{t:this.chp22_1},{t:this.chp112_1},{t:this.chp31_1},{t:this.chp32_1},{t:this.chp33_1},{t:this.chp34_1},{t:this.chp35_1},{t:this.chp121_1},{t:this.chp122_1},{t:this.chp1_1}]},4).to({state:[{t:this.instance_18}]},5).to({state:[]},1).to({state:[{t:this.instance_18},{t:this.chp2_1},{t:this.chp3_1},{t:this.chp11_1},{t:this.chp12_1},{t:this.chp21_1},{t:this.chp22_1},{t:this.chp112_1},{t:this.chp31_1},{t:this.chp32_1},{t:this.chp33_1},{t:this.chp34_1},{t:this.chp35_1},{t:this.chp121_1},{t:this.chp122_1},{t:this.chp1_1}]},4).to({state:[{t:this.instance_18}]},5).to({state:[]},1).to({state:[{t:this.instance_18},{t:this.chp2_1},{t:this.chp3_1},{t:this.chp11_1},{t:this.chp12_1},{t:this.chp21_1},{t:this.chp22_1},{t:this.chp112_1},{t:this.chp31_1},{t:this.chp32_1},{t:this.chp33_1},{t:this.chp34_1},{t:this.chp35_1},{t:this.chp121_1},{t:this.chp122_1},{t:this.chp1_1}]},4).to({state:[{t:this.instance_18}]},5).to({state:[]},1).to({state:[{t:this.instance_18},{t:this.chp2_1},{t:this.chp3_1},{t:this.chp11_1},{t:this.chp12_1},{t:this.chp21_1},{t:this.chp22_1},{t:this.chp112_1},{t:this.chp31_1},{t:this.chp32_1},{t:this.chp33_1},{t:this.chp34_1},{t:this.chp35_1},{t:this.chp121_1},{t:this.chp122_1},{t:this.chp1_1}]},4).to({state:[{t:this.instance_18}]},5).to({state:[]},1).to({state:[{t:this.instance_18},{t:this.chp2_1},{t:this.chp3_1},{t:this.chp11_1},{t:this.chp12_1},{t:this.chp21_1},{t:this.chp22_1},{t:this.chp112_1},{t:this.chp31_1},{t:this.chp32_1},{t:this.chp33_1},{t:this.chp34_1},{t:this.chp35_1},{t:this.chp121_1},{t:this.chp122_1},{t:this.chp1_1}]},4).to({state:[{t:this.instance_18}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(2644).to({_off:false},0).wait(5).to({_off:true},1).wait(4).to({_off:false},0).wait(5).to({_off:true},1).wait(4).to({_off:false},0).wait(5).to({_off:true},1).wait(4).to({_off:false},0).wait(5).to({_off:true},1).wait(4).to({_off:false},0).wait(5).to({_off:true},1).wait(4).to({_off:false},0).wait(6));

	// bgg
	this.instance_19 = new lib.現在位置_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(960.8,541.7,1.477,1.477,0,0,0,0,1);

	this.instance_20 = new lib._111_1("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(960,541.5,1.461,1.461,0,0,0,657,370.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20},{t:this.instance_19}]},2644).to({state:[{t:this.instance_20},{t:this.instance_19}]},5).to({state:[]},1).to({state:[{t:this.instance_20},{t:this.instance_19}]},4).to({state:[{t:this.instance_20},{t:this.instance_19}]},5).to({state:[]},1).to({state:[{t:this.instance_20},{t:this.instance_19}]},4).to({state:[{t:this.instance_20},{t:this.instance_19}]},5).to({state:[]},1).to({state:[{t:this.instance_20},{t:this.instance_19}]},4).to({state:[{t:this.instance_20},{t:this.instance_19}]},5).to({state:[]},1).to({state:[{t:this.instance_20},{t:this.instance_19}]},4).to({state:[{t:this.instance_20},{t:this.instance_19}]},5).to({state:[]},1).to({state:[{t:this.instance_20},{t:this.instance_19}]},4).to({state:[{t:this.instance_20},{t:this.instance_19}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960.9,541.9,1920,1081.3);
// library properties:
lib.properties = {
	width: 1920,
	height: 1083,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/chpaaa_atlas_.png", id:"chpaaa_atlas_"},
		{src:"sounds/吳舜文_.mp3", id:"吳舜文"},
		{src:"sounds/nana_converted.mp3", id:"nana_converted"},
		{src:"sounds/嚴慶齡_.mp3", id:"嚴慶齡"},
		{src:"sounds/嚴凱泰_.mp3", id:"嚴凱泰"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;