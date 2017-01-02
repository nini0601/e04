(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"chpab_atlas_", frames: [[2558,1241,400,400],[3330,1615,359,320],[2960,1615,368,322],[0,1608,1411,107],[1413,1643,1395,107],[3691,1615,311,107],[3860,1213,200,200],[0,0,1314,740],[2960,1241,200,200],[2632,0,1314,740],[666,1968,200,51],[1316,1424,1177,182],[2558,742,698,497],[0,1484,1060,108],[1316,0,1314,740],[0,742,1314,740],[3854,1724,220,55],[4044,628,50,50],[4044,680,50,50],[1225,1484,80,80],[2685,1860,120,120],[3948,384,120,120],[3948,262,120,120],[4004,1612,80,80],[3948,506,120,120],[2283,1912,120,120],[2807,1860,120,120],[0,1933,220,55],[2405,1912,220,55],[444,1933,220,55],[3330,1937,220,55],[3691,1936,220,55],[2960,1551,280,55],[222,1933,220,55],[2929,1939,220,55],[1719,1912,280,55],[3691,1884,320,50],[2363,1860,320,50],[3691,1832,320,50],[1719,1860,320,50],[2041,1860,320,50],[2001,1912,280,55],[1316,742,1240,680],[3258,1213,600,400],[3162,1346,80,80],[3948,140,120,120],[2960,1443,261,106],[0,1717,1393,106],[2458,1752,461,106],[3258,742,658,469],[0,1825,861,106],[3162,1241,93,103],[3860,1415,196,195],[3918,1135,67,74],[1413,1608,129,20],[3948,628,94,102],[3987,1135,67,74],[1395,1752,1061,106],[863,1860,854,106],[3918,1027,161,106],[1062,1484,161,106],[3948,0,138,138],[3918,919,161,106],[3918,742,175,175],[3691,1724,161,106]]}
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



(lib.下一頁Button = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.圖片1 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.圖片2 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.圖片3 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.圖片4 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.圖片5 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.洞察 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._0121 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.細緻 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._101n1 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._101n2 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._2321 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.luxgen1 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.luxgen2png複製 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.U12背景 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.U12學習目標改 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.創立理念 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.x = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.xx = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.提示 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.提示w = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.提示x = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.提示xw = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.現在位置w = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.現在位置x = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.現在位置xw = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0000_創新歷程 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0002_心路歷程 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0003_核心人物 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0004_納智捷汽車 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0005_裕隆集團 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0006_CH1公司歷程 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0000_女生服裝 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0001_男生服裝 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0002_CH2服裝儀容 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0000_數位科技體驗區 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0001_AR實車賞車 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0002_ThinkTouch = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0003_3D體驗劇場 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0004_迎賓區 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0005_CH3銷售SOP = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.跨殺小啦 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.電視 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.首頁w = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖24 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖27 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖28 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖30 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖36 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖37 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖37複製 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖38 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖39複製 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖41 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖42 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖44 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖46 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖52 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖53 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖54 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖55 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖56 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖57 = function() {
	this.spriteSheet = ss["chpab_atlas_"];
	this.gotoAndStop(64);
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


(lib.補間動畫26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.下一頁Button();
	this.instance.parent = this;
	this.instance.setTransform(-73.3,-73.3,0.366,0.366);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-73.3,146.6,146.6);


(lib.補間動畫24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖30();
	this.instance.parent = this;
	this.instance.setTransform(-247.2,-176.2,0.751,0.751);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.2,-176.2,494.4,352.4);


(lib.補間動畫21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.text = new cjs.Text("Gen", "65px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(0,-39.8,0.977,0.977);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3D69B").s().p("AsIMJQlDlBAAnIQAAnGFDlDQFClCHGABQHIgBFCFCQFCFDAAHGQAAHIlCFBQlCFCnIAAQnGAAlClCg");
	this.shape.setTransform(-1.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-109.9,230,219.9);


(lib.補間動畫20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.text = new cjs.Text("Gen", "65px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(0,-39.8,0.977,0.977);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3D69B").s().p("AsJMKQlClCAAnIQAAnHFClCQFClBHHgBQHIABFCFBQFCFCAAHHQAAHIlCFCQlCFCnIAAQnHAAlClCg");
	this.shape.setTransform(-1.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-109.9,230,219.9);


(lib.補間動畫19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.text = new cjs.Text("Lux", "64px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 80;
	this.text.lineWidth = 247;
	this.text.parent = this;
	this.text.setTransform(0,-62.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8EB4E3").s().p("AsZMaQlJlJABnRQgBnQFJlJQFJlJHQABQAbgBAcACQGuASE1E1QFIFJAAHQQAAHRlIFJQk1E1muASIg3ABQnQAAlJlIg");
	this.shape.setTransform(-1.7,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.5,-137.8,251.1,275.7);


(lib.補間動畫18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.text = new cjs.Text("Lux", "64px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 80;
	this.text.lineWidth = 247;
	this.text.parent = this;
	this.text.setTransform(0,-62.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8EB4E3").s().p("AsZMaQlIlJAAnRQAAnQFIlJQFJlIHQAAQAbgBAcACQGuASE1E1QFIFJAAHQQAAHRlIFJQk1E1muASIg3ABQnQAAlJlIg");
	this.shape.setTransform(-1.7,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.5,-137.8,251.1,275.7);


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
	this.instance = new lib._0121();
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
	this.instance = new lib.創立理念();
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
	this.instance = new lib.U12學習目標改();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan2, new cjs.Rectangle(0,1,1314,740), null);


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
	this.instance = new lib._2321();
	this.instance.parent = this;
	this.instance.setTransform(66.9,54.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissanword, new cjs.Rectangle(66.9,54.4,1177,182), null);


(lib.tv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.電視();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.602,1.602);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tv, new cjs.Rectangle(0,0,961,640.7), null);


(lib.sub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圖片4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.624,0.624);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sub, new cjs.Rectangle(0,0,870.9,66.8), null);


(lib.luxgen2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.luxgen2png複製();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.802,0.802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.luxgen2, new cjs.Rectangle(0,0,849.8,86.6), null);


(lib.luxgen1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.luxgen1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.luxgen1_1, new cjs.Rectangle(0,0,443.9,316.1), null);


(lib.lux = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圖片1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.698,0.698);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lux, new cjs.Rectangle(0,0,250.5,223.3), null);


(lib.gen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圖片2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gen, new cjs.Rectangle(0,0,255.2,223.3), null);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖57();
	this.instance.parent = this;
	this.instance.setTransform(5.8,132.7,0.741,0.741);

	this.instance_1 = new lib.點陣圖56();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件32, new cjs.Rectangle(0,0,125,211.2), null);


(lib.元件31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖55();
	this.instance.parent = this;
	this.instance.setTransform(0.1,122.6,0.741,0.74);

	this.instance_1 = new lib.點陣圖54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.801,0.801);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件31, new cjs.Rectangle(0,0,119.4,201.1), null);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.細緻();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.492,0.492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件22, new cjs.Rectangle(0,0,98.3,98.3), null);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.洞察();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.491,0.491);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件21, new cjs.Rectangle(0,0,98.3,98.3), null);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖39複製();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.787,0.788);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(0,0,101.5,15.8), null);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖37複製();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件19, new cjs.Rectangle(0,0,135.9,135.2), null);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖36();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.717,0.717);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件17, new cjs.Rectangle(0,0,617.3,76), null);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖44();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.742,0.742);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(0,0,787.2,78.7), null);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(0,0,94,102), null);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(0,0,67,74), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖38();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(0,0,67,74), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖37();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(0,0,93,103), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖28();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.738,0.738);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,340.1,78.2), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖27();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.682,0.682);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,950,72.3), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖24();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,144.2,58.6), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圖片5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.547,0.547);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,170.3,58.6), null);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫26("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(73.3,73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.6,146.6);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖53();
	this.instance.parent = this;
	this.instance.setTransform(0,117.6,0.741,0.741);

	this.instance_1 = new lib.元件22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.1,49.1,1,1,0,0,0,49.1,49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件30, new cjs.Rectangle(0,0,119.3,196.1), null);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖52();
	this.instance.parent = this;
	this.instance.setTransform(0,125.1,0.741,0.741);

	this.instance_1 = new lib.元件21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.3,49.1,1,1,0,0,0,49.1,49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件29, new cjs.Rectangle(0,0,119.3,203.6), null);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 12
	this.instance = new lib.元件32();
	this.instance.parent = this;
	this.instance.setTransform(686.4,112,1,1,0,0,0,62.5,105.6);
	this.instance.alpha = 0.148;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(83).to({_off:false},0).to({alpha:1},15).wait(577));

	// 圖層 11
	this.instance_1 = new lib.元件31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(467.7,114.6,1,1,0,0,0,59.6,100.6);
	this.instance_1.alpha = 0.148;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({_off:false},0).to({alpha:1},14).wait(589));

	// 圖層 10
	this.instance_2 = new lib.元件30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(234.6,117,1,1,0,0,0,59.6,98);
	this.instance_2.alpha = 0.172;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({alpha:1},15).wait(600));

	// 圖層 9
	this.instance_3 = new lib.元件29();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.4,115.8,1,1,0,0,0,59.6,101.8);
	this.instance_3.alpha = 0.172;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).to({alpha:1},15).wait(612));

	// 圖層 7
	this.instance_4 = new lib.元件19();
	this.instance_4.parent = this;
	this.instance_4.setTransform(718.3,67.6,1.02,1.02,0,0,0,68,67.5);
	this.instance_4.alpha = 0.27;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({x:690.8,alpha:1},6).wait(627));

	// 圖層 6
	this.instance_5 = new lib.元件20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(605.7,68.2,1,1,0,0,0,50.8,7.9);
	this.instance_5.alpha = 0.27;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({x:578.2,alpha:1},8).wait(632));

	// 圖層 5
	this.instance_6 = new lib.元件19();
	this.instance_6.parent = this;
	this.instance_6.setTransform(490.8,67.6,1.02,1.02,0,0,0,68,67.5);
	this.instance_6.alpha = 0.27;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({x:463.3,alpha:1},7).wait(640));

	// 圖層 4
	this.instance_7 = new lib.元件20();
	this.instance_7.parent = this;
	this.instance_7.setTransform(378.2,68.2,1,1,0,0,0,50.8,7.9);
	this.instance_7.alpha = 0.172;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({x:350.7,alpha:1},7).wait(646).to({x:388.2},0).wait(1));

	// 圖層 3
	this.instance_8 = new lib.元件19();
	this.instance_8.parent = this;
	this.instance_8.setTransform(263.3,67.6,1.02,1.02,0,0,0,68,67.5);
	this.instance_8.alpha = 0.148;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({x:235.8,alpha:1},7).wait(653).to({x:273.3},0).wait(1));

	// 圖層 2
	this.instance_9 = new lib.元件20();
	this.instance_9.parent = this;
	this.instance_9.setTransform(151.8,67.9,1,1,0,0,0,50.8,7.9);
	this.instance_9.alpha = 0.148;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).to({x:124.3,alpha:1},8).wait(660).to({x:161.8},0).wait(1));

	// 圖層 1
	this.instance_10 = new lib.元件19();
	this.instance_10.parent = this;
	this.instance_10.setTransform(36.8,67.6,1.02,1.02,0,0,0,68,67.5);
	this.instance_10.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:9.3,alpha:1},7).wait(667).to({x:46.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-1.2,138.6,137.9);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件15();
	this.instance.parent = this;
	this.instance.setTransform(47,51,1,1,0,0,0,47,51);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},16).to({alpha:0},15).to({alpha:1},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,102);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件12();
	this.instance.parent = this;
	this.instance.setTransform(33.5,37,1,1,0,0,0,33.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(0,0,67,74), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件13();
	this.instance.parent = this;
	this.instance.setTransform(33.5,37,1,1,0,0,0,33.5,37);
	this.instance.alpha = 0.129;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.98},10).to({alpha:0},30).to({alpha:1},16).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,74);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件10();
	this.instance.parent = this;
	this.instance.setTransform(33.5,37,1,1,0,0,0,33.5,37);
	this.instance.alpha = 0.281;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0.129},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,74);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件8();
	this.instance.parent = this;
	this.instance.setTransform(46.5,51.5,1,1,0,0,0,46.5,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},47).to({alpha:1},33).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,103);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		playSound("nana");
	}
	this.frame_19 = function() {
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
	this.frame_224 = function() {
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
		
		this.nissannext.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay(226);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.hint.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(226);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(1310);
		}
	}
	this.frame_258 = function() {
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
		
		this.GOGOGOGO.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(260);
		}
	}
	this.frame_293 = function() {
		playSound("me");
	}
	this.frame_1271 = function() {
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
		
		this.hint.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(1274);
		}
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.next.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("chpabb.html", "_self");
		}
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			this.gotoAndPlay(1320);
		}
	}
	this.frame_1304 = function() {
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
		
		this.EEEE.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(1270);
		}
	}
	this.frame_1314 = function() {
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
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.e04.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_9.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_9()
		{
			this.gotoAndPlay(260);
		}
	}
	this.frame_1324 = function() {
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
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.jjj.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			this.gotoAndPlay(1270);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(6).call(this.frame_19).wait(205).call(this.frame_224).wait(34).call(this.frame_258).wait(35).call(this.frame_293).wait(978).call(this.frame_1271).wait(33).call(this.frame_1304).wait(10).call(this.frame_1314).wait(10).call(this.frame_1324).wait(1));

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
	this.home.setTransform(1558.3,83.4,1.459,1.459,0,0,0,0.7,0.6);
	new cjs.ButtonHelper(this.home, 0, 1, 2);

	this.local = new lib._3now();
	this.local.parent = this;
	this.local.setTransform(1840.6,83.4,1.459,1.459,0,0,0,0.6,0.6);
	new cjs.ButtonHelper(this.local, 0, 1, 2);

	this.hint = new lib._2hint();
	this.hint.parent = this;
	this.hint.setTransform(1699.4,83.4,1.459,1.459,0,0,0,0.7,0.6);
	new cjs.ButtonHelper(this.hint, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},19).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},205).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},33).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},6).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},1007).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},33).to({state:[]},1).wait(20));

	// X
	this.EEEE = new lib.x_1();
	this.EEEE.parent = this;
	this.EEEE.setTransform(1671.5,295.5,1.7,1.7);
	this.EEEE._off = true;
	new cjs.ButtonHelper(this.EEEE, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.EEEE).wait(1304).to({_off:false},0).to({_off:true},1).wait(20));

	// XX
	this.GOGOGOGO = new lib.x_1();
	this.GOGOGOGO.parent = this;
	this.GOGOGOGO.setTransform(1677,295.5,1.7,1.7);
	this.GOGOGOGO._off = true;
	new cjs.ButtonHelper(this.GOGOGOGO, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.GOGOGOGO).wait(258).to({_off:false},0).to({_off:true},1).wait(1066));

	// HINT
	this.instance_2 = new lib.hint();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1588.7,251.8,0.257,0.257);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(225).to({_off:false},0).to({scaleX:1.45,scaleY:1.45,x:958.8,y:542.5},5).wait(29).to({scaleX:0.26,scaleY:0.26,x:1588.7,y:251.8},4).to({_off:true},1).wait(1010).to({_off:false,scaleX:0.26,scaleY:0.26,x:1589.5,y:242.9},0).to({scaleX:1.45,scaleY:1.45,x:958.8,y:542.5},5).wait(25).to({_off:true},1).wait(20));

	// 下一頁
	this.next = new lib.元件34();
	this.next.parent = this;
	this.next.setTransform(1779.7,950.7,1.459,1.459,0,0,0,73.5,73.5);
	this.next._off = true;
	new cjs.ButtonHelper(this.next, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.next).wait(1271).to({_off:false},0).to({_off:true},1).wait(53));

	// 飛出來
	this.instance_3 = new lib.元件18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(487.3,548.3,1.459,1.459,0,0,0,68,67.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1028).to({_off:false},0).wait(228).to({_off:true},1).wait(68));

	// 閃亮
	this.instance_4 = new lib.元件14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1321.2,385.1,1.459,1.459,0,0,0,47.3,51.1);

	this.instance_5 = new lib.元件11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1203.3,459.5,1.459,1.459,0,0,0,33.5,37.1);

	this.instance_6 = new lib.元件9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(529.4,790.5,1.459,1.459,0,0,0,33.5,37.1);

	this.instance_7 = new lib.元件7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(442.5,709.6,1.459,1.459,0,0,0,46.6,51.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},861).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},109).to({state:[]},1).wait(354));

	// 車
	this.instance_8 = new lib.補間動畫24("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(472.5,567.8,1.459,1.459,0,0,0,0.1,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(849).to({_off:false},0).to({x:897.8},8).wait(113).to({startPosition:0},0).to({x:812.7},5).to({regX:0,regY:0,x:2193.7,y:567.7},7).to({_off:true},1).wait(342));

	// 創新
	this.instance_9 = new lib.元件2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1221.1,795.7,1.459,1.459,0,0,0,72.2,29.4);
	this.instance_9.alpha = 0.379;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(572).to({_off:false},0).to({alpha:1},15).wait(45).to({alpha:0},16).to({_off:true},1).wait(676));

	// 細緻
	this.instance_10 = new lib.元件1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(559.3,795.7,1.459,1.459,0,0,0,85.2,29.4);
	this.instance_10.alpha = 0.379;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(536).to({_off:false},0).to({alpha:1},16).wait(80).to({alpha:0},16).to({_off:true},1).wait(676));

	// 字幕
	this.instance_11 = new lib.圖片3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(276,819,0.91,0.91);

	this.instance_12 = new lib.sub();
	this.instance_12.parent = this;
	this.instance_12.setTransform(911.1,867.3,1.459,1.459,0,0,0,435.6,33.6);
	this.instance_12.alpha = 0.238;
	this.instance_12._off = true;

	this.instance_13 = new lib.元件3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(904,866.1,1.459,1.459,0,0,0,475.3,36.3);
	this.instance_13.alpha = 0.43;
	this.instance_13._off = true;

	this.instance_14 = new lib.元件4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(923.3,858.9,1.459,1.459,0,0,0,170.2,39.3);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.點陣圖44();
	this.instance_15.parent = this;
	this.instance_15.setTransform(325,806,1.083,1.083);

	this.instance_16 = new lib.元件16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(900.3,863.4,1.459,1.459,0,0,0,393.9,39.5);
	this.instance_16._off = true;

	this.instance_17 = new lib.元件17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(892.7,852.3,1.459,1.459,0,0,0,308.8,38.1);
	this.instance_17.alpha = 0.148;
	this.instance_17._off = true;

	this.instance_18 = new lib.點陣圖46();
	this.instance_18.parent = this;
	this.instance_18.setTransform(414,790,1.232,1.232);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},388).to({state:[{t:this.instance_12}]},118).to({state:[{t:this.instance_12}]},7).to({state:[{t:this.instance_13}]},225).to({state:[{t:this.instance_13}]},6).to({state:[{t:this.instance_14}]},62).to({state:[{t:this.instance_14}]},20).to({state:[]},29).to({state:[{t:this.instance_15}]},6).to({state:[{t:this.instance_16}]},129).to({state:[{t:this.instance_16}]},11).to({state:[{t:this.instance_17}]},9).to({state:[{t:this.instance_17}]},8).to({state:[{t:this.instance_18}]},97).to({state:[{t:this.instance_18}]},141).to({state:[]},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(506).to({_off:false},0).to({alpha:1},7).to({_off:true},225).wait(587));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(738).to({_off:false},0).to({alpha:1},6).to({_off:true},62).wait(519));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(806).to({_off:false},0).to({alpha:1},20).to({_off:true},29).wait(470));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(990).to({_off:false},0).to({alpha:0},11).to({_off:true},9).wait(315));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1010).to({_off:false},0).to({alpha:1},8).to({_off:true},97).wait(210));

	// gen
	this.instance_19 = new lib.gen();
	this.instance_19.parent = this;
	this.instance_19.setTransform(1216.8,590,1.459,1.459,0,0,0,127.8,111.8);
	this.instance_19.alpha = 0.238;
	this.instance_19._off = true;

	this.text = new cjs.Text("Genius", "65px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(1216,529.4,1.426,1.426);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AZyAAQAAKsnkHiQniHkqsAAQqsAAninkQnkniAAqsQAAqqHknkQHinjKsAAQKsAAHiHjQHkHkAAKqg");
	this.shape.setTransform(1213.4,587.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3D69B").s().p("AxuRvQnWnXAAqYQAAqYHWnXQHWnVKYAAQKZAAHWHVQHWHXAAKYQAAKYnWHXQnWHWqZAAQqYAAnWnWg");
	this.shape_1.setTransform(1213.4,587.7);

	this.instance_20 = new lib.補間動畫20("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(1216.2,587.6,1.459,1.459,0,0,0,0.1,0.1);
	this.instance_20._off = true;

	this.instance_21 = new lib.補間動畫21("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(1057.7,589.8,1.459,1.459,0,0,0,0.1,0.1);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},436).to({state:[{t:this.instance_19}]},24).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{text:"Genius"}}]},232).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{text:"Geniu"}}]},3).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{text:"Geni"}}]},4).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{text:"Gen"}}]},5).to({state:[{t:this.instance_20}]},9).to({state:[{t:this.instance_21}]},23).to({state:[{t:this.instance_21}]},9).to({state:[{t:this.instance_21}]},20).to({state:[{t:this.instance_21}]},41).to({state:[{t:this.instance_21}]},37).to({state:[]},429).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(436).to({_off:false},0).to({alpha:1},24).to({_off:true},232).wait(633));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(713).to({_off:false},0).to({_off:true,x:1057.7,y:589.8,alpha:0},23).wait(589));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(713).to({_off:false},23).wait(9).to({alpha:0.16},0).to({alpha:1},20).wait(41).to({startPosition:0},0).to({alpha:0},37).to({_off:true},429).wait(53));

	// lux
	this.instance_22 = new lib.luxgen1_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(892.8,576.2,1.459,1.459,0,0,0,222.1,158.1);
	this.instance_22.alpha = 0.289;
	this.instance_22._off = true;

	this.instance_23 = new lib.luxgen2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(897.1,870.1,1.459,1.459,0,0,0,425.1,43.5);

	this.instance_24 = new lib.lux();
	this.instance_24.parent = this;
	this.instance_24.setTransform(564.8,592.1,1.459,1.459,0,0,0,125.4,111.7);
	this.instance_24.alpha = 0.238;
	this.instance_24._off = true;

	this.text_1 = new cjs.Text("Luxury", "64px 'Calibri'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 80;
	this.text_1.lineWidth = 247;
	this.text_1.parent = this;
	this.text_1.setTransform(565.9,534.2,1.459,1.459);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8EB4E3").s().p("AyGSGQnfngAAqmQAAqmHfnhQHgneKmAAQAoAAAoACQJzAbHEHBQHfHhAAKmQAAKmnfHgQnEHEpzAbQgoABgoAAQqmAAngngg");
	this.shape_2.setTransform(563.7,588.7);

	this.instance_25 = new lib.補間動畫18("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(566,625.7,1.459,1.459);
	this.instance_25._off = true;

	this.instance_26 = new lib.補間動畫19("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(814.1,623.6,1.459,1.459);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},296).to({state:[{t:this.instance_22}]},14).to({state:[{t:this.instance_22},{t:this.instance_23,p:{alpha:1}}]},9).to({state:[{t:this.instance_22},{t:this.instance_23,p:{alpha:0.512}}]},46).to({state:[{t:this.instance_22},{t:this.instance_23,p:{alpha:0.32}}]},4).to({state:[{t:this.instance_22},{t:this.instance_23,p:{alpha:0.148}}]},3).to({state:[{t:this.instance_22},{t:this.instance_23,p:{alpha:0.109}}]},3).to({state:[{t:this.instance_22},{t:this.instance_23,p:{alpha:0}}]},4).to({state:[]},2).to({state:[{t:this.instance_24}]},23).to({state:[{t:this.instance_24}]},21).to({state:[{t:this.shape_2},{t:this.text_1,p:{text:"Luxury"}}]},249).to({state:[{t:this.shape_2},{t:this.text_1,p:{text:"Luxur"}}]},3).to({state:[{t:this.shape_2},{t:this.text_1,p:{text:"Luxu"}}]},4).to({state:[{t:this.shape_2},{t:this.text_1,p:{text:"Lux"}}]},4).to({state:[{t:this.instance_25}]},28).to({state:[{t:this.instance_26}]},23).to({state:[{t:this.instance_26}]},9).to({state:[{t:this.instance_26}]},20).to({state:[{t:this.instance_26}]},41).to({state:[{t:this.instance_26}]},37).to({state:[]},429).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(296).to({_off:false},0).to({alpha:1},14).wait(55).to({alpha:0.512},0).wait(4).to({alpha:0.32},0).wait(3).to({alpha:0.148},0).wait(3).to({alpha:0.109},0).wait(4).to({alpha:0},0).to({_off:true},2).wait(944));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(404).to({_off:false},0).to({alpha:1},21).to({_off:true},249).wait(651));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(713).to({_off:false},0).to({_off:true,x:814.1,y:623.6,alpha:0},23).wait(589));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(713).to({_off:false},23).wait(9).to({alpha:0.121},0).to({alpha:1},20).wait(41).to({startPosition:0},0).to({alpha:0},37).to({_off:true},429).wait(53));

	// 開
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgA4MDVJAAAIAABxMjVJAAAg");
	this.shape_3.setTransform(894.6,570.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EhqkAA5IAAhxMDVJAAAIAABxg");
	this.shape_4.setTransform(894.6,570.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgEmMDVJAAAIAAJNMjVJAAAg");
	this.shape_5.setTransform(894.6,570.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EhqkAEnIAApNMDVJAAAIAAJNg");
	this.shape_6.setTransform(894.6,570.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgIUMDVJAAAIAAQpMjVJAAAg");
	this.shape_7.setTransform(894.6,571.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EhqkAIVIAAwpMDVJAAAIAAQpg");
	this.shape_8.setTransform(894.6,571.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgMCMDVJAAAIAAYFMjVJAAAg");
	this.shape_9.setTransform(894.6,572);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EhqkAMDIAA4FMDVJAAAIAAYFg");
	this.shape_10.setTransform(894.6,572);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgPwMDVJAAAIAAfhMjVJAAAg");
	this.shape_11.setTransform(894.6,572.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EhqkAPxIAA/hMDVJAAAIAAfhg");
	this.shape_12.setTransform(894.6,572.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgTeMDVJAAAMAAAAm9MjVJAAAg");
	this.shape_13.setTransform(894.6,573.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EhqkATfMAAAgm9MDVJAAAMAAAAm9g");
	this.shape_14.setTransform(894.6,573.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgXQMDVJAAAMAAAAuhMjVJAAAg");
	this.shape_15.setTransform(894.6,573.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("EhqkAXRMAAAguhMDVJAAAMAAAAuhg");
	this.shape_16.setTransform(894.6,573.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgbBMDVJAAAMAAAA2DMjVJAAAg");
	this.shape_17.setTransform(894.6,573.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("EhqkAbCMAAAg2DMDVJAAAMAAAA2Dg");
	this.shape_18.setTransform(894.6,573.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgezMDVJAAAMAAAA9nMjVJAAAg");
	this.shape_19.setTransform(894.6,573.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("EhqkAe0MAAAg9nMDVJAAAMAAAA9ng");
	this.shape_20.setTransform(894.6,573.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgikMDVJAAAMAAABFJMjVJAAAg");
	this.shape_21.setTransform(894.6,573.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("EhqkAilMAAAhFJMDVJAAAMAAABFJg");
	this.shape_22.setTransform(894.6,573.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgmWMDVJAAAMAAABMtMjVJAAAg");
	this.shape_23.setTransform(894.6,573.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("EhqkAmXMAAAhMtMDVJAAAMAAABMtg");
	this.shape_24.setTransform(894.6,573.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgqHMDVJAAAMAAABUPMjVJAAAg");
	this.shape_25.setTransform(894.6,573.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("EhqkAqIMAAAhUPMDVJAAAMAAABUPg");
	this.shape_26.setTransform(894.6,573.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ehqkgt5MDVJAAAMAAABbzMjVJAAAg");
	this.shape_27.setTransform(894.6,573.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("EhqkAt5MAAAhbyMDVJAAAMAAABbyg");
	this.shape_28.setTransform(894.6,573.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkguiMDVJAAAMAAABdFMjVJAAAg");
	this.shape_29.setTransform(894.6,573.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("EhqkAujMAAAhdFMDVJAAAMAAABdFg");
	this.shape_30.setTransform(894.6,573.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgvLMDVJAAAMAAABeXMjVJAAAg");
	this.shape_31.setTransform(894.6,573.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("EhqkAvMMAAAheXMDVJAAAMAAABeXg");
	this.shape_32.setTransform(894.6,573.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ehqkgv0MDVJAAAMAAABfpMjVJAAAg");
	this.shape_33.setTransform(894.6,573.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("EhqkAv1MAAAhfpMDVJAAAMAAABfpg");
	this.shape_34.setTransform(894.6,573.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgwdMDVJAAAMAAABg7MjVJAAAg");
	this.shape_35.setTransform(894.6,573.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("EhqkAweMAAAhg7MDVJAAAMAAABg7g");
	this.shape_36.setTransform(894.6,573.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgxGMDVJAAAMAAABiNMjVJAAAg");
	this.shape_37.setTransform(894.6,573.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("EhqkAxHMAAAhiNMDVJAAAMAAABiNg");
	this.shape_38.setTransform(894.6,573.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgxwMDVJAAAMAAABjgMjVJAAAg");
	this.shape_39.setTransform(894.6,573.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("EhqkAxwMAAAhjfMDVJAAAMAAABjfg");
	this.shape_40.setTransform(894.6,573.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgyZMDVJAAAMAAABkyMjVJAAAg");
	this.shape_41.setTransform(894.6,573.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("EhqkAyaMAAAhkzMDVJAAAMAAABkzg");
	this.shape_42.setTransform(894.6,573.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgzCMDVJAAAMAAABmFMjVJAAAg");
	this.shape_43.setTransform(894.6,573.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("EhqkAzDMAAAhmFMDVJAAAMAAABmFg");
	this.shape_44.setTransform(894.6,573.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhqkgzrMDVJAAAMAAABnXMjVJAAAg");
	this.shape_45.setTransform(894.6,573.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("EhqkAzsMAAAhnXMDVJAAAMAAABnXg");
	this.shape_46.setTransform(894.6,573.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ehqkg0UMDVJAAAMAAABopMjVJAAAg");
	this.shape_47.setTransform(894.6,573.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("EhqkA0VMAAAhopMDVJAAAMAAABopg");
	this.shape_48.setTransform(894.6,573.3);

	this.instance_27 = new lib.補間動畫19("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(814.1,623.6,1.459,1.459);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},273).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.instance_27}]},961).to({state:[]},16).wait(53));

	// 小動畫
	this.instance_28 = new lib.tv();
	this.instance_28.parent = this;
	this.instance_28.setTransform(895.7,637.6,1.459,1.459,0,0,0,480.6,320.5);
	this.instance_28.alpha = 0.48;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(225).to({_off:false},0).wait(39).to({alpha:1},8).to({_off:true},1000).wait(53));

	// 圖層 4
	this.jjj = new lib.e04();
	this.jjj.parent = this;
	this.jjj.setTransform(1779.6,136.4,1.7,1.7);
	this.jjj._off = true;
	new cjs.ButtonHelper(this.jjj, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.jjj).wait(1324).to({_off:false},0).wait(1));

	// 圖層 3
	this.e04 = new lib.e04();
	this.e04.parent = this;
	this.e04.setTransform(1779.6,136.4,1.7,1.7);
	this.e04._off = true;
	new cjs.ButtonHelper(this.e04, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.e04).wait(1314).to({_off:false},0).to({_off:true},1).wait(10));

	// 圖層 2
	this.chp1 = new lib.ch1();
	this.chp1.parent = this;
	this.chp1.setTransform(521.2,263.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp1, 0, 1, 1);

	this.chp122 = new lib.chp122();
	this.chp122.parent = this;
	this.chp122.setTransform(1350.8,390.7,1.464,1.464);
	new cjs.ButtonHelper(this.chp122, 0, 1, 1);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2},{t:this.chp3},{t:this.chp11},{t:this.chp12},{t:this.chp21},{t:this.chp22},{t:this.chp111},{t:this.chp112},{t:this.chp31},{t:this.chp32},{t:this.chp33},{t:this.chp34},{t:this.chp35},{t:this.chp122},{t:this.chp1}]},1314).to({state:[]},1).to({state:[{t:this.chp2},{t:this.chp3},{t:this.chp11},{t:this.chp12},{t:this.chp21},{t:this.chp22},{t:this.chp111},{t:this.chp112},{t:this.chp31},{t:this.chp32},{t:this.chp33},{t:this.chp34},{t:this.chp35},{t:this.chp122},{t:this.chp1}]},9).wait(1));

	// 圖層 1
	this.chp1_1 = new lib.ch1();
	this.chp1_1.parent = this;
	this.chp1_1.setTransform(521.2,263.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp1_1, 0, 1, 1);

	this.chp122_1 = new lib.chp122();
	this.chp122_1.parent = this;
	this.chp122_1.setTransform(1350.8,390.7,1.464,1.464);
	new cjs.ButtonHelper(this.chp122_1, 0, 1, 1);

	this.chp121 = new lib.chp121();
	this.chp121.parent = this;
	this.chp121.setTransform(1350.8,293.5,1.464,1.464);
	new cjs.ButtonHelper(this.chp121, 0, 1, 1);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp11_1},{t:this.chp12_1},{t:this.chp2_1},{t:this.ch3},{t:this.chp21_1},{t:this.chp22_1},{t:this.chp111_1},{t:this.chp112_1},{t:this.chp31_1},{t:this.chp32_1},{t:this.chp33_1},{t:this.chp34_1},{t:this.chp35_1},{t:this.chp121},{t:this.chp122_1},{t:this.chp1_1}]},1309).to({state:[{t:this.chp121}]},5).to({state:[]},1).to({state:[{t:this.chp11_1},{t:this.chp12_1},{t:this.chp2_1},{t:this.ch3},{t:this.chp21_1},{t:this.chp22_1},{t:this.chp111_1},{t:this.chp112_1},{t:this.chp31_1},{t:this.chp32_1},{t:this.chp33_1},{t:this.chp34_1},{t:this.chp35_1},{t:this.chp121},{t:this.chp122_1},{t:this.chp1_1}]},4).to({state:[{t:this.chp121}]},5).wait(1));

	// 小動畫bg
	this.instance_29 = new lib.U12背景();
	this.instance_29.parent = this;
	this.instance_29.setTransform(0,0,1.459,1.459);

	this.instance_30 = new lib.tv();
	this.instance_30.parent = this;
	this.instance_30.setTransform(895.7,637.6,1.459,1.459,0,0,0,480.6,320.5);

	this.next_1 = new lib.元件34();
	this.next_1.parent = this;
	this.next_1.setTransform(1779.7,950.7,1.459,1.459,0,0,0,73.5,73.5);
	new cjs.ButtonHelper(this.next_1, 0, 1, 1);

	this.instance_31 = new lib.現在位置_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(959.3,542,1.477,1.477,0,0,0,0,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29}]},225).to({state:[{t:this.instance_29}]},39).to({state:[{t:this.instance_29},{t:this.next_1},{t:this.instance_30}]},1010).to({state:[{t:this.instance_29},{t:this.next_1},{t:this.instance_30}]},30).to({state:[]},1).to({state:[{t:this.instance_29},{t:this.instance_31}]},4).to({state:[{t:this.instance_29},{t:this.instance_31}]},5).to({state:[]},1).to({state:[{t:this.instance_29},{t:this.instance_31}]},4).to({state:[{t:this.instance_29},{t:this.instance_31}]},5).wait(1));

	// 下一頁
	this.nissannext = new lib.nissannext();
	this.nissannext.parent = this;
	this.nissannext.setTransform(1761,1029,1.459,1.459,0,0,0,100.2,25.7);
	this.nissannext._off = true;
	new cjs.ButtonHelper(this.nissannext, 0, 1, 2, false, new lib.nissannext(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nissannext).wait(222).to({_off:false},0).wait(2).to({_off:true},1).wait(1100));

	// 裕隆前話
	this.nissanword = new lib.nissanword();
	this.nissanword.parent = this;
	this.nissanword.setTransform(959.9,937.3,1.459,1.459,0,0,0,650.2,150.2);
	this.nissanword.alpha = 0.5;
	this.nissanword._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissanword).wait(9).to({_off:false},0).to({alpha:1},34).wait(70).to({_off:true},1).wait(1211));

	// 裕隆前2
	this.nissan2 = new lib.nissan2();
	this.nissan2.parent = this;
	this.nissan2.setTransform(959.8,540.5,1.459,1.459,0,0,0,657.1,370.2);
	this.nissan2.alpha = 0.5;
	this.nissan2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissan2).wait(114).to({_off:false},0).to({alpha:0.949},18).to({alpha:1},2).wait(90).to({_off:true},1).wait(1100));

	// 裕隆前
	this.nissan1 = new lib.nissan1();
	this.nissan1.parent = this;
	this.nissan1.setTransform(959.8,540.5,1.459,1.459,0,0,0,657.1,370.2);
	this.nissan1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.nissan1).to({alpha:1},23).wait(90).to({_off:true},1).wait(1211));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960.8,541.2,1917.7,1080);
// library properties:
lib.properties = {
	width: 1920,
	height: 1082,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/chpab_atlas_.png", id:"chpab_atlas_"},
		{src:"sounds/me.mp3", id:"me"},
		{src:"sounds/nana.mp3", id:"nana"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;