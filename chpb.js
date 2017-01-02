(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"chpb_atlas_", frames: [[902,2978,1300,505],[3045,3082,839,534],[2204,3082,839,534],[0,3136,839,534],[1454,0,1314,740],[1454,1484,1314,740],[1034,1611,200,51],[3342,1484,396,1408],[2770,1484,570,1596],[752,0,700,1500],[2144,2226,500,500],[752,1606,280,55],[0,0,750,1700],[2770,0,1314,740],[4022,1588,50,50],[1396,1502,50,50],[2770,742,1314,740],[1454,742,1314,740],[1242,2226,900,750],[0,2384,900,750],[1364,1554,80,80],[3862,1767,120,120],[1242,1733,120,120],[1242,1611,120,120],[1364,1636,80,80],[3740,1767,120,120],[3740,1645,120,120],[3862,1645,120,120],[3740,1889,220,55],[3740,1946,220,55],[3740,2003,220,55],[3740,2288,220,55],[3740,2231,220,55],[3740,2060,220,55],[1074,1554,280,55],[3740,2117,220,55],[3740,2174,220,55],[3740,1484,320,50],[752,1502,320,50],[1074,1502,320,50],[3740,1536,320,50],[752,1554,320,50],[3740,1588,280,55],[0,1702,1240,680],[3984,1645,80,80],[1242,1855,120,120]]}
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



(lib._03button = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._03button1 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._03button2 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._03button3 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._03 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._02 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._101n2 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._1男全身正面1 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._1全身正面1 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bb = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.car = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CH2服裝儀容 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.gg = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.U12背景 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.x = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.xx = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.學習目標1 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.學習目標2 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.右邊字稿 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.左邊圖稿 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.提示 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.提示w = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.提示x = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.提示xw = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.現在位置w = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.現在位置x = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.現在位置xw = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0000_創新歷程 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0001_創立理念 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0002_心路歷程 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0003_核心人物 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0004_納智捷汽車 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0005_裕隆集團 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0006_CH1公司歷程 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0000_女生服裝 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0001_男生服裝 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0000_數位科技體驗區 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0001_AR實車賞車 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0002_ThinkTouch = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0003_3D體驗劇場 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0004_迎賓區 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0005_CH3銷售SOP = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.跨殺小啦 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.首頁w = function() {
	this.spriteSheet = ss["chpb_atlas_"];
	this.gotoAndStop(45);
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


(lib.補間動畫13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._03button();
	this.instance.parent = this;
	this.instance.setTransform(-650,-252.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-650,-252.5,1300,505);


(lib.補間動畫11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._03();
	this.instance.parent = this;
	this.instance.setTransform(-657,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-657,-370,1314,740);


(lib._033 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._03button3();
	this.instance.parent = this;
	this.instance.setTransform(-204,-130,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-130,407,259.1);


(lib._032 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._03button2();
	this.instance.parent = this;
	this.instance.setTransform(-204,-130,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-130,407,259.1);


(lib._031 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._03button1();
	this.instance.parent = this;
	this.instance.setTransform(-204,-130,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-130,407,259.1);


(lib.g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._1全身正面1();
	this.instance.parent = this;
	this.instance.setTransform(-285,-798);

	this.instance_1 = new lib.gg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-375,-868);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-285,-798,570,1596);


(lib.b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._1男全身正面1();
	this.instance.parent = this;
	this.instance.setTransform(-198,-704);

	this.instance_1 = new lib.bb();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-362,-750);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198,-704,396,1408);


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
	this.instance = new lib._02();
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
	this.instance = new lib.CH2服裝儀容();
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


(lib.RR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.右邊字稿();
	this.instance.parent = this;
	this.instance.setTransform(-450,-374);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.RR, new cjs.Rectangle(-450,-374,900,750), null);


(lib.LL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.左邊圖稿();
	this.instance.parent = this;
	this.instance.setTransform(-450,-374);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.LL, new cjs.Rectangle(-450,-374,900,750), null);


(lib._12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.學習目標2();
	this.instance.parent = this;
	this.instance.setTransform(-657,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._12, new cjs.Rectangle(-657,-370,1314,740), null);


(lib._11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.學習目標1();
	this.instance.parent = this;
	this.instance.setTransform(-657,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._11, new cjs.Rectangle(-657,-370,1314,740), null);


(lib._10car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._10car, new cjs.Rectangle(-249.5,-249.5,500,500), null);


(lib._new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.chp1 = new lib._031();
	this.chp1.parent = this;
	this.chp1.setTransform(-393.2,-73.2,0.942,0.942);
	new cjs.ButtonHelper(this.chp1, 0, 1, 1);

	this.chp2 = new lib._032();
	this.chp2.parent = this;
	this.chp2.setTransform(3.6,-71.7,0.942,0.942);
	new cjs.ButtonHelper(this.chp2, 0, 1, 1);

	this.chp3 = new lib._033();
	this.chp3.parent = this;
	this.chp3.setTransform(400.8,-67.6,0.942,0.942,0,0,0,0,2.6);
	new cjs.ButtonHelper(this.chp3, 0, 1, 1);

	this.instance = new lib.補間動畫13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.5,113.9);

	this.instance_1 = new lib.補間動畫11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.chp3},{t:this.chp2},{t:this.chp1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._new, new cjs.Rectangle(-656.5,-369.5,1314,740), null);


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
		
		this.home.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			window.open("contents.html", "_self");
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
			this.gotoAndPlay(367);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_110.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_110()
		{
			this.gotoAndPlay(410);
		}
	}
	this.frame_49 = function() {
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
		
		this.rr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_101.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_101()
		{
			this.gotoAndPlay(55);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.LL.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_102.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_102()
		{
			this.gotoAndPlay(55);
		}
	}
	this.frame_69 = function() {
		playSound("_2_converted");
	}
	this.frame_359 = function() {
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
		
		this.nissannext.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_103.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_103()
		{
			this.gotoAndPlay(365);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.hint.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_105.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_105()
		{
			this.gotoAndPlay(368);
		}
	}
	this.frame_391 = function() {
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
		
		this.xxx.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_104.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_104()
		{
			this.gotoAndPlay(393);
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
			this.gotoAndPlay(368);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_113.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_113()
		{
			this.gotoAndPlay(412);
		}
	}
	this.frame_399 = function() {
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
		
		this.bb.addEventListener("click", fl_ClickToGoToWebPage_27);
		
		function fl_ClickToGoToWebPage_27() {
			window.open("chpba.html/", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.gg.addEventListener("click", fl_ClickToGoToWebPage_28);
		
		function fl_ClickToGoToWebPage_28() {
			window.open("chpbb.html", "_self");
		}
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_112.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_112()
		{
			this.gotoAndPlay(410);
		}
	}
	this.frame_414 = function() {
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
		
		this.ee.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_111.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_111()
		{
			this.gotoAndPlay(398);
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(20).call(this.frame_69).wait(290).call(this.frame_359).wait(32).call(this.frame_391).wait(8).call(this.frame_399).wait(15).call(this.frame_414).wait(1));

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

	this.instance = new lib._3nowx();
	this.instance.parent = this;
	this.instance.setTransform(1843.6,82,1.458,1.458);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.instance_1 = new lib._2hintx();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1701.7,82.2,1.458,1.458,0,0,0,-0.4,0.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.hint},{t:this.local}]}).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},29).to({state:[]},1).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},39).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},290).to({state:[]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},4).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},27).to({state:[{t:this.home},{t:this.local},{t:this.hint}]},8).to({state:[]},1).wait(15));

	// 車
	this.instance_2 = new lib._10car();
	this.instance_2.parent = this;
	this.instance_2.setTransform(961.6,1204.7,0.606,0.606,0,0,0,0.7,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({y:741.6},26).to({alpha:0.379},9).to({_off:true},1).wait(376));

	// bg
	this.instance_3 = new lib._new();
	this.instance_3.parent = this;
	this.instance_3.setTransform(960.8,542.4,1.462,1.462,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({alpha:0.551},5).to({alpha:0},6).to({_off:true},1).wait(374));

	// RR
	this.rr = new lib.RR();
	this.rr.parent = this;
	this.rr.setTransform(720.2,-529.8,1.467,1.467,0,0,0,0.1,1.1);
	this.rr._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rr).wait(34).to({_off:false},0).to({x:1260.2,y:550.2},14).wait(1).to({_off:true},1).wait(365));

	// LL
	this.LL = new lib.LL();
	this.LL.parent = this;
	this.LL.setTransform(1320.4,1626.3,1.467,1.467,0,0,0,0.1,1);
	this.LL._off = true;

	this.timeline.addTween(cjs.Tween.get(this.LL).wait(34).to({_off:false},0).to({x:660.2,y:550},14).wait(1).to({_off:true},1).wait(365));

	// next
	this.nissannext = new lib.nissannext();
	this.nissannext.parent = this;
	this.nissannext.setTransform(1761,1029,1.459,1.459,0,0,0,100.2,25.7);
	this.nissannext._off = true;
	new cjs.ButtonHelper(this.nissannext, 0, 1, 2, false, new lib.nissannext(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nissannext).wait(357).to({_off:false},0).wait(2).to({_off:true},1).wait(55));

	// 1
	this.instance_4 = new lib._11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(960.5,542.3,1.459,1.459);
	this.instance_4.alpha = 0.5;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).to({alpha:1},25).wait(90).to({_off:true},1).wait(245));

	// 2
	this.instance_5 = new lib._12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(960.5,542.3,1.459,1.459);
	this.instance_5.alpha = 0.5;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(170).to({_off:false},0).to({alpha:1},19).wait(170).to({_off:true},1).wait(55));

	// G
	this.gg = new lib.g();
	this.gg.parent = this;
	this.gg.setTransform(1393.9,607.4,0.608,0.608,0,0,0,0.3,-0.4);
	this.gg._off = true;
	new cjs.ButtonHelper(this.gg, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.gg).wait(399).to({_off:false},0).to({_off:true},1).wait(15));

	// B
	this.bb = new lib.b();
	this.bb.parent = this;
	this.bb.setTransform(604.4,601.1,0.689,0.689);
	this.bb._off = true;
	new cjs.ButtonHelper(this.bb, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.bb).wait(399).to({_off:false},0).to({_off:true},1).wait(15));

	// xx
	this.xxx = new lib.x_1();
	this.xxx.parent = this;
	this.xxx.setTransform(1669.7,307.3,1.7,1.7);
	this.xxx._off = true;
	new cjs.ButtonHelper(this.xxx, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.xxx).wait(391).to({_off:false},0).to({_off:true},1).wait(23));

	// hint
	this.instance_6 = new lib.hint();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1540.2,265.9,0.335,0.335,0,0,0,0,1.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(369).to({_off:false},0).to({regX:0.1,regY:1,scaleX:1.46,scaleY:1.46,x:961.3,y:543.7},5).wait(18).to({regX:0,regY:1.1,scaleX:0.34,scaleY:0.34,x:1540.2,y:265.9},5).to({_off:true},1).wait(17));

	// eeee
	this.ee = new lib.e04();
	this.ee.parent = this;
	this.ee.setTransform(1750,124.5,1.7,1.7);
	this.ee._off = true;
	new cjs.ButtonHelper(this.ee, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.ee).wait(414).to({_off:false},0).wait(1));

	// 圖層 4
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp3},{t:this.chp11},{t:this.chp12},{t:this.chp21},{t:this.chp22},{t:this.chp111},{t:this.chp112},{t:this.chp31},{t:this.chp32},{t:this.chp33},{t:this.chp34},{t:this.chp35},{t:this.chp121},{t:this.chp122},{t:this.chp1}]},414).wait(1));

	// 圖層 3
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

	this.chp2 = new lib.ch2();
	this.chp2.parent = this;
	this.chp2.setTransform(524,536.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp2, 0, 1, 1);

	this.chp12_1 = new lib.chp12();
	this.chp12_1.parent = this;
	this.chp12_1.setTransform(961.4,330.1,1.464,1.464,0,0,0,-0.7,-0.6);
	new cjs.ButtonHelper(this.chp12_1, 0, 1, 1);

	this.chp11_1 = new lib.chp11();
	this.chp11_1.parent = this;
	this.chp11_1.setTransform(962.6,136.3,1.464,1.464,0,0,0,0.1,0.5);
	new cjs.ButtonHelper(this.chp11_1, 0, 1, 1);

	this.instance_7 = new lib.現在位置_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(959.3,542,1.477,1.477,0,0,0,0,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.chp11_1},{t:this.chp12_1},{t:this.chp2},{t:this.ch3},{t:this.chp21_1},{t:this.chp22_1},{t:this.chp111_1},{t:this.chp112_1},{t:this.chp31_1},{t:this.chp32_1},{t:this.chp33_1},{t:this.chp34_1},{t:this.chp35_1},{t:this.chp121_1},{t:this.chp122_1},{t:this.chp1_1}]},409).to({state:[{t:this.instance_7},{t:this.chp2}]},5).wait(1));

	// bg
	this.gg_1 = new lib.g();
	this.gg_1.parent = this;
	this.gg_1.setTransform(1393.9,607.4,0.608,0.608,0,0,0,0.3,-0.4);
	new cjs.ButtonHelper(this.gg_1, 0, 1, 2);

	this.bb_1 = new lib.b();
	this.bb_1.parent = this;
	this.bb_1.setTransform(604.4,601.1,0.689,0.689);
	new cjs.ButtonHelper(this.bb_1, 0, 1, 2);

	this.instance_8 = new lib.U12背景();
	this.instance_8.parent = this;
	this.instance_8.setTransform(2,2,1.46,1.459);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.bb_1},{t:this.gg_1}]},364).to({state:[{t:this.instance_8},{t:this.bb_1},{t:this.gg_1}]},34).to({state:[{t:this.instance_8}]},1).to({state:[]},1).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_8}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,542.7,1934.9,1354.9);
// library properties:
lib.properties = {
	width: 1920,
	height: 1083,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/chpb_atlas_.png", id:"chpb_atlas_"},
		{src:"sounds/_2_converted.mp3", id:"_2_converted"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;