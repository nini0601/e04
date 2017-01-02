(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[2747,1590,300,51],[3349,1484,200,124],[2747,1537,470,51],[2747,1484,600,51],[0,1958,1314,740],[1316,1958,1314,740],[2747,0,1314,740],[2747,742,1314,740],[2632,1958,1314,740],[0,0,2745,1956],[3049,1590,175,51],[3219,1537,50,51],[3278,1590,50,51],[3226,1590,50,51],[3271,1537,50,51]]}
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



(lib._01continue = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._01logo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._01logo字 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._01字 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._021 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._022 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._023 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._024 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._025 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._02car = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._02replay = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._02start1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._02start2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._02start3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._02start4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
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


(lib.補間動畫35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._01continue();
	this.instance.parent = this;
	this.instance.setTransform(-105.4,-17.9,0.703,0.703);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.4,-17.9,210.9,35.8);


(lib.補間動畫34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._01continue();
	this.instance.parent = this;
	this.instance.setTransform(-105.4,-17.9,0.703,0.703);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.4,-17.9,210.9,35.8);


(lib.補間動畫33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._01continue();
	this.instance.parent = this;
	this.instance.setTransform(-105.4,-17.9,0.703,0.703);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.4,-17.9,210.9,35.8);


(lib.補間動畫32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._01continue();
	this.instance.parent = this;
	this.instance.setTransform(-105.4,-17.9,0.703,0.703);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.4,-17.9,210.9,35.8);


(lib.補間動畫31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._01continue();
	this.instance.parent = this;
	this.instance.setTransform(-105.4,-17.9,0.703,0.703);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.4,-17.9,210.9,35.8);


(lib.補間動畫30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._01continue();
	this.instance.parent = this;
	this.instance.setTransform(-105.4,-17.9,0.703,0.703);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.4,-17.9,210.9,35.8);


(lib._02趴數字 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhhCFICYkXIAsATIioESgAAmB1QgQgZAAgiQAAgmASgUQAQgUAZAAQAYAAAPAUQARAUABAlQAAAigRAaQgQAZgYAAQgaAAgRgZgABBBRQAAAJAFAIQAEAIAHAAQAGAAAEgIQAEgIAAgJQAAgYgOAAQgQAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAZAAQAYAAAPATQASAVgBAmQAAAigQAZQgRAYgXAAQgbAAgQgYgAhegsQAAAJAFAHQADAIAIAAQAFAAAFgIQAFgIAAgIQAAgYgPAAQgQAAAAAYg");
	this.shape.setTransform(10.7,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag1B7QgYgVAAgdQAAgfAXgRQgngVAAg4QAAgjAZgbQAcgcAoAAQAoAAAbAaQAbAbAAAlQAAA4goAUQAXASAAAfQAAAcgYAWQgZAUgcAAQgeAAgXgUgAAAA2QgGAAgFAGQgEAHAAAHQAAAWAPAAQAQAAAAgXQAAgHgFgGQgEgHgGAAIgBABgAgPgsQgGAIAAAKQAAANAGAJQAHAJAIgBQAKABAHgJQAFgJAAgNQAAgLgGgHQgHgIgJAAQgIAAgHAIg");
	this.shape_1.setTransform(-14.2,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgoCJIAOgZQAPgcAFgRQgfABgYgWQgggcAAg1QAAguAdggQAcgfAoAAQAnAAAZAfQAaAfAAAvQAAAlgaA4QgWAwgfAngAgSghQgHAHAAANQAAAfAlACQACgEADgKQAEgLAAgKQAAgLgHgHQgHgHgJAAQgKAAgGAHg");
	this.shape_2.setTransform(-14.2,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhhCFICYkXIAsATIioESgAAmB1QgQgZAAgiQAAgmASgUQAQgUAZAAQAYAAAQAUQARAUAAAlQAAAigQAaQgSAZgYAAQgZAAgRgZgABBBRQAAAJAFAIQAEAIAGAAQAHAAAEgIQAFgIAAgJQgBgYgPAAQgPAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAYAAQAaAAAPATQARAVAAAmQAAAigRAZQgRAYgYAAQgaAAgQgYgAhegsQAAAJAEAHQAEAIAHAAQAHAAAEgIQAEgIAAgIQAAgYgPAAQgPAAAAAYg");
	this.shape_3.setTransform(19.1,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhJBhQgcgrAAg7QAAhFAgglQAcgfArAAQAqAAAbAhQAfAlAABCQAAA6geAtQgeAugpAAQgsAAgegugAgZAiQAAAVAHAPQAIASALgBQALABAIgTQAIgRAAgTQAAgxgbAAQgaAAAAAyg");
	this.shape_4.setTransform(-6.5,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTCQQABg4gCgwIgChLIgOADIgMAEIgRg9IBHggIArgWIARAKIgECDIgCCSg");
	this.shape_5.setTransform(-25.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhhCFICYkXIAsATIinESgAAnB1QgRgZAAgiQAAgmASgUQAQgUAZAAQAYAAAPAUQARAUABAlQAAAigRAaQgRAZgXAAQgaAAgQgZgABBBRQAAAJAEAIQAFAIAHAAQAGAAAFgIQADgIAAgJQABgYgPAAQgQAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAZAAQAZAAAOATQARAVAAAmQAAAigQAZQgRAYgXAAQgaAAgRgYgAhegsQAAAJAFAHQADAIAIAAQAFAAAFgIQAFgIgBgIQAAgYgOAAQgQAAAAAYg");
	this.shape_6.setTransform(15.9,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTCQQAAg4gBgwIgChLIgNADIgNAEIgRg9IBHggIAqgWIASAKIgECDIgBCSg");
	this.shape_7.setTransform(-7.2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhhCFICYkXIAsATIinESgAAnB1QgRgZAAgiQAAgmASgUQAQgUAZAAQAYAAAQAUQAQAUABAlQAAAigRAaQgQAZgZAAQgZAAgQgZgABBBRQAAAJAEAIQAFAIAGAAQAHAAAFgIQADgIAAgJQABgYgQAAQgPAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAZAAQAZAAAOATQARAVAAAmQAAAigQAZQgRAYgXAAQgaAAgRgYgAhegsQAAAJAEAHQAFAIAHAAQAFAAAFgIQAFgIgBgIQAAgYgOAAQgQAAAAAYg");
	this.shape_8.setTransform(16.7,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag/CNIgIgSQAagwALgYQANgfAAgYQAAgSgLgJQgJgIgMAAQgMAAgMAFIAJhhQAbgJAfAAQAnAAAZAWQAYAWgBAlQAAA4hQBeIAfAAIAWgCIARgCIgIAbIgHAbg");
	this.shape_9.setTransform(-6.4,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhhCFICYkXIAsATIioESgAAmB1QgQgZAAgiQAAgmASgUQAQgUAZAAQAYAAAQAUQARAUAAAlQAAAigQAaQgSAZgYAAQgZAAgRgZgABBBRQAAAJAFAIQAEAIAGAAQAHAAAEgIQAFgIAAgJQgBgYgPAAQgPAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAYAAQAaAAAPATQARAVAAAmQAAAigRAZQgRAYgYAAQgaAAgQgYgAhegsQAAAJAEAHQAEAIAHAAQAHAAAEgIQAEgIABgIQgBgYgPAAQgPAAAAAYg");
	this.shape_10.setTransform(17.3,0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgxCNIgGgbIgHgaQAUAGAOAAQANAAAIgHQAHgIAAgLQAAgLgHgHQgJgIgPAAIgHAAIgHgkQAPgCAIgKQAGgHAAgKQAAgYgcAAQgPAAgWAGIAHhbQAggLAjABQAmAAAZAVQAaAWAAAhQAAAjgNAVQgMASgeARQAlAQAAAmQAAAfgXASQgVAPgfAAQgfAAgHgCg");
	this.shape_11.setTransform(-6.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhhCFICYkXIAsATIioESgAAmB1QgQgZAAgiQAAgmASgUQAQgUAZAAQAYAAAPAUQASAUAAAlQAAAigRAaQgRAZgXAAQgaAAgRgZgABBBRQAAAJAEAIQAFAIAHAAQAGAAAFgIQADgIAAgJQAAgYgOAAQgQAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAZAAQAZAAAOATQASAVgBAmQAAAigQAZQgRAYgXAAQgbAAgQgYgAhegsQAAAJAFAHQADAIAIAAQAFAAAFgIQAFgIAAgIQAAgYgPAAQgQAAAAAYg");
	this.shape_12.setTransform(18.7,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGCLIAAgtIhkAAIAYgvQAJgTAIgdQAIgbgCgnIAwAAIgDhHIBaAAIgFCTIgCArIACAAQASAAAFgBQAGAAAHgDIgGAWIgGAYIgaAAIAAAtgAglA0IAfAAIgChBQgOApgPAYg");
	this.shape_13.setTransform(-6.7,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhhCFICYkXIAsATIioESgAAmB1QgQgZAAgiQAAgmASgUQAQgUAZAAQAYAAAPAUQARAUABAlQAAAigRAaQgQAZgYAAQgaAAgRgZgABBBRQAAAJAFAIQAEAIAHAAQAGAAAEgIQAEgIAAgJQAAgYgOAAQgQAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAYAAQAZAAAPATQASAVgBAmQAAAigQAZQgRAYgYAAQgaAAgQgYgAhegsQAAAJAFAHQADAIAHAAQAGAAAFgIQAFgIAAgIQAAgYgQAAQgPAAAAAYg");
	this.shape_14.setTransform(17.4,0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhACJIgDgYIgEgZQAUALATAAQAsAAAAgcQAAgZgiAAQgWAAgUAJIgTgUQAHgdAMg/IANhSIBkAAIANAAIALgCIgQBZIhMAAIgIAdQAUgFAUAAQAdAAAVAWQAVAVAAAgQAAAvgfAaQgcAWgsAAQgZAAgUgFg");
	this.shape_15.setTransform(-6.6,0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTCQQABg4gCgwIgChLIgNADIgNAEIgRg9IBHggIAqgWIASAKIgECDIgCCSg");
	this.shape_16.setTransform(-24.2,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhhCFICYkXIAsATIioESgAAmB1QgQgZAAgiQAAgmASgUQAQgUAZAAQAYAAAPAUQASAUAAAlQAAAigQAaQgSAZgXAAQgaAAgRgZgABBBRQAAAJAFAIQAEAIAHAAQAGAAAEgIQAFgIAAgJQAAgYgPAAQgQAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAYAAQAaAAAPATQARAVAAAmQgBAigQAZQgRAYgYAAQgaAAgQgYgAhegsQAAAJAEAHQAFAIAGAAQAHAAAEgIQAEgIABgIQgBgYgPAAQgPAAAAAYg");
	this.shape_17.setTransform(18.1,0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAECTQgrgBgagcQgageAAg3QAAgpATgtQARgoAjg1IBVASQgNAMgbAeQgbAlgGAPQAQgHARAAQAdAAATAWQATAWAAAjQAAAzgYAdQgXAdgnAAIgCAAgAgPAgQgEAJAAAKQAAAQAGAMQAHANAKAAQAJAAAIgMQAHgLAAgNQAAgPgHgJQgHgJgLAAQgKAAgIAJg");
	this.shape_18.setTransform(-6.4,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag/CJQAHgzANg5QALgwAKggIggACQgWABgMADIgDhfICqABIANAQIgUAnQgWAvgNAhQgYBDgQBNg");
	this.shape_19.setTransform(-6.1,0.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhhCFICYkXIAsATIinESgAAnB1QgRgZAAgiQAAgmASgUQAQgUAZAAQAYAAAQAUQAQAUABAlQAAAigQAaQgRAZgZAAQgZAAgQgZgABBBRQAAAJAEAIQAFAIAGAAQAHAAAFgIQADgIAAgJQAAgYgPAAQgPAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAZAAQAYAAAPATQARAVABAmQAAAigRAZQgRAYgXAAQgaAAgRgYgAhegsQAAAJAEAHQAFAIAHAAQAGAAAEgIQAFgIgBgIQABgYgPAAQgQAAAAAYg");
	this.shape_20.setTransform(18.4,0.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhhCFICYkXIAsATIinESgAAnB1QgRgZAAgiQAAgmASgUQAQgUAZAAQAYAAAQAUQAQAUABAlQAAAigRAaQgRAZgXAAQgaAAgQgZgABBBRQAAAJAEAIQAFAIAHAAQAGAAAFgIQADgIAAgJQABgYgPAAQgQAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAZAAQAZAAAOATQARAVAAAmQAAAigQAZQgRAYgXAAQgaAAgRgYgAhegsQAAAJAFAHQADAIAIAAQAFAAAFgIQAFgIgBgIQAAgYgOAAQgQAAAAAYg");
	this.shape_21.setTransform(19.9,0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag/CNIgIgSQAbgwAKgYQANgfAAgYQAAgSgLgJQgJgIgMAAQgMAAgMAFIAJhhQAbgJAfAAQAnAAAZAWQAXAWAAAlQAAA4hQBeIAfAAIAWgCIARgCIgIAbIgHAbg");
	this.shape_22.setTransform(-25,0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhACNIgIgSQAcgwAJgYQAOgfAAgYQAAgSgLgJQgJgIgMAAQgMAAgLAFIAIhhQAbgJAfAAQAnAAAYAWQAZAWAAAlQAAA4hQBeIAdAAIAXgCIARgCIgIAbIgHAbg");
	this.shape_23.setTransform(-21.8,0.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhhCFICYkXIAsATIioESgAAmB1QgQgZAAgiQAAgmASgUQAQgUAZAAQAYAAAPAUQASAUAAAlQAAAigRAaQgQAZgYAAQgaAAgRgZgABBBRQAAAJAFAIQAEAIAHAAQAGAAAEgIQAEgIABgJQAAgYgPAAQgQAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAYAAQAZAAAQATQAQAVAAAmQAAAigQAZQgRAYgYAAQgaAAgQgYgAhegsQAAAJAFAHQAEAIAGAAQAGAAAFgIQAEgIABgIQgBgYgPAAQgPAAAAAYg");
	this.shape_24.setTransform(17.5,0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhACNIgIgSQAcgwAJgYQAOgfAAgYQAAgSgLgJQgJgIgMAAQgMAAgLAFIAIhhQAbgJAfAAQAnAAAYAWQAYAWAAAlQAAA4hQBeIAeAAIAXgCIARgCIgIAbIgHAbg");
	this.shape_25.setTransform(-22.6,0.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhACNIgIgSQAbgwAKgYQAOgfAAgYQAAgSgLgJQgJgIgMAAQgMAAgLAFIAIhhQAbgJAfAAQAnAAAYAWQAZAWAAAlQAAA4hQBeIAdAAIAXgCIARgCIgIAbIgHAbg");
	this.shape_26.setTransform(-24.6,0.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhhCFICYkXIAsATIinESgAAnB1QgRgZAAgiQAAgmASgUQAQgUAZAAQAYAAAQAUQAQAUABAlQAAAigQAaQgRAZgZAAQgZAAgQgZgABBBRQAAAJAEAIQAFAIAGAAQAHAAAEgIQAFgIAAgJQgBgYgPAAQgPAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAYAAQAaAAAPATQAQAVABAmQAAAigRAZQgRAYgYAAQgZAAgRgYgAhegsQAAAJAEAHQAFAIAGAAQAHAAAEgIQAEgIAAgIQABgYgQAAQgPAAAAAYg");
	this.shape_27.setTransform(18.3,0.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag/CNIgJgSQAbgwAKgYQAOgfAAgYQAAgSgLgJQgJgIgMAAQgMAAgMAFIAJhhQAbgJAfAAQAnAAAYAWQAZAWAAAlQAAA4hQBeIAdAAIAXgCIARgCIgIAbIgHAbg");
	this.shape_28.setTransform(-23.3,0.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag/CJQAIgzAMg5QAKgwALggIggACQgWABgMADIgDhfICqABIANAQIgUAnQgWAvgNAhQgYBDgQBNg");
	this.shape_29.setTransform(-5.3,0.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhhCFICYkXIAsATIinESgAAnB1QgRgZAAgiQAAgmASgUQAQgUAZAAQAYAAAQAUQAQAUABAlQAAAigQAaQgRAZgZAAQgZAAgQgZgABBBRQAAAJAFAIQAEAIAGAAQAHAAAEgIQAFgIAAgJQgBgYgPAAQgPAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAYAAQAaAAAPATQAQAVABAmQAAAigRAZQgRAYgYAAQgZAAgRgYgAhegsQAAAJAEAHQAFAIAGAAQAHAAAEgIQAEgIAAgIQABgYgQAAQgPAAAAAYg");
	this.shape_30.setTransform(19.2,0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag2B7QgXgVAAgdQAAgfAXgRQgngVAAg4QAAgjAZgbQAcgcAoAAQAoAAAbAaQAbAbAAAlQAAA4goAUQAXASABAfQAAAcgaAWQgYAUgcAAQgeAAgYgUgAAAA2QgGAAgEAGQgFAHgBAHQAAAWAQAAQAQAAAAgXQAAgHgFgGQgEgHgGAAIgBABgAgPgsQgGAIAAAKQAAANAGAJQAHAJAIgBQAKABAGgJQAGgJAAgNQAAgLgGgHQgHgIgJAAQgJAAgGAIg");
	this.shape_31.setTransform(-5.7,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhACNIgIgSQAbgwALgYQANgfAAgYQAAgSgLgJQgJgIgMAAQgMAAgLAFIAIhhQAbgJAfAAQAnAAAYAWQAYAWAAAlQAAA4hQBeIAfAAIAWgCIARgCIgIAbIgHAbg");
	this.shape_32.setTransform(-24.3,0.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhhCFICYkXIAsATIioESgAAmB1QgQgZAAgiQAAgmASgUQAQgUAZAAQAYAAAPAUQARAUABAlQAAAigRAaQgRAZgXAAQgaAAgRgZgABBBRQAAAJAEAIQAFAIAHAAQAGAAAFgIQADgIAAgJQAAgYgOAAQgQAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAZAAQAZAAAOATQASAVgBAmQAAAigQAZQgRAYgXAAQgbAAgQgYgAhegsQAAAJAFAHQADAIAIAAQAFAAAFgIQAFgIAAgIQAAgYgPAAQgQAAAAAYg");
	this.shape_33.setTransform(20.5,0.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhACNIgIgSQAcgwAJgYQAOgfAAgYQAAgSgLgJQgJgIgMAAQgMAAgLAFIAIhhQAbgJAfAAQAnAAAYAWQAYAWABAlQAAA4hRBeIAeAAIAXgCIARgCIgIAbIgHAbg");
	this.shape_34.setTransform(-5,0.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgxCNIgGgbIgHgaQAUAGAOAAQANAAAIgHQAHgIAAgLQAAgLgHgHQgJgIgPAAIgHAAIgHgkQAPgCAIgKQAGgHAAgKQAAgYgcAAQgPAAgWAGIAHhbQAggLAjABQAmAAAZAVQAaAWAAAhQAAAjgNAVQgMASgeARQAlAQAAAmQAAAfgXASQgVAPgfAAQgfAAgHgCg");
	this.shape_35.setTransform(-23.2,0.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhhCFICYkXIAsATIinESgAAnB1QgRgZAAgiQAAgmASgUQAQgUAZAAQAYAAAQAUQAQAUABAlQAAAigQAaQgRAZgZAAQgZAAgQgZgABBBRQAAAJAEAIQAFAIAGAAQAHAAAFgIQADgIABgJQgBgYgPAAQgPAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAZAAQAYAAAPATQARAVABAmQAAAigRAZQgRAYgXAAQgaAAgRgYgAhegsQAAAJAEAHQAFAIAHAAQAGAAAEgIQAFgIgBgIQABgYgPAAQgQAAAAAYg");
	this.shape_36.setTransform(18.8,0.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag/CJQAIgzAMg5QAKgwALggIggACQgXABgLADIgEhfICqABIAPAQIgVAnQgWAvgNAhQgYBDgQBNg");
	this.shape_37.setTransform(-4.7,0.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhhCFICYkXIAsATIinESgAAnB1QgRgZAAgiQAAgmASgUQAQgUAZAAQAYAAAQAUQAQAUABAlQAAAigQAaQgRAZgZAAQgZAAgQgZgABBBRQAAAJAEAIQAFAIAGAAQAHAAAFgIQAEgIAAgJQgBgYgPAAQgPAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAZAAQAYAAAQATQAQAVABAmQAAAigRAZQgRAYgXAAQgaAAgRgYgAhegsQAAAJAEAHQAFAIAHAAQAGAAAEgIQAFgIgBgIQABgYgPAAQgQAAAAAYg");
	this.shape_38.setTransform(19.7,0.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag2B7QgXgVAAgdQAAgfAXgRQgngVAAg4QAAgjAZgbQAcgcAoAAQAoAAAbAaQAbAbAAAlQAAA4goAUQAYASAAAfQAAAcgaAWQgYAUgcAAQgeAAgYgUgAAAA2QgGAAgFAGQgEAHgBAHQABAWAPAAQAQAAAAgXQAAgHgFgGQgEgHgGAAIgBABgAgPgsQgGAIAAAKQAAANAHAJQAFAJAJgBQALABAFgJQAGgJAAgNQAAgLgGgHQgHgIgJAAQgJAAgGAIg");
	this.shape_39.setTransform(-5.1,0.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgTCQQAAg4gBgwIgChLIgOADIgMAEIgRg9IBHggIAqgWIASAKIgECDIgBCSg");
	this.shape_40.setTransform(-4.4,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag/CNIgIgSQAagwAKgYQAOgfAAgYQAAgSgLgJQgJgIgMAAQgMAAgMAFIAJhhQAbgJAfAAQAnAAAZAWQAYAWAAAlQAAA4hQBeIAdAAIAXgCIARgCIgIAbIgHAbg");
	this.shape_41.setTransform(-3.6,0.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhhCFICYkXIAsATIioESgAAmB1QgQgZAAgiQAAgmASgUQAQgUAZAAQAYAAAPAUQARAUABAlQAAAigRAaQgQAZgYAAQgaAAgRgZgABBBRQAAAJAFAIQAEAIAHAAQAGAAAFgIQADgIAAgJQAAgYgOAAQgQAAAAAYgAh5gJQgQgYAAgjQAAgmASgVQAQgTAYAAQAZAAAPATQASAVgBAmQAAAigQAZQgRAYgYAAQgaAAgQgYgAhegsQAAAJAFAHQADAIAHAAQAGAAAFgIQAFgIAAgIQAAgYgQAAQgPAAAAAYg");
	this.shape_42.setTransform(21.5,0.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgGCLIAAgtIhkAAIAYgvQAJgTAIgdQAIgbgCgnIAwAAIgDhHIBaAAIgFCTIgCArIACAAQASAAAFgBQAGAAAHgDIgGAWIgGAYIgaAAIAAAtgAglA0IAfAAIgChBQgOApgPAYg");
	this.shape_43.setTransform(-24.8,0.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ag/CJQAHgzANg5QAKgwALggIggACQgWABgMADIgEhfICrABIAOAQIgVAnQgXAvgMAhQgYBDgQBNg");
	this.shape_44.setTransform(-3.3,0.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag1B7QgYgVAAgdQAAgfAXgRQgngVAAg4QAAgjAZgbQAcgcAoAAQAoAAAbAaQAbAbAAAlQAAA4goAUQAXASAAAfQABAcgZAWQgZAUgcAAQgeAAgXgUgAAAA2QgGAAgEAGQgGAHAAAHQAAAWAQAAQAQAAAAgXQAAgHgFgGQgEgHgGAAIgBABgAgPgsQgGAIAAAKQAAANAGAJQAHAJAIgBQAKABAHgJQAFgJAAgNQAAgLgGgHQgHgIgJAAQgIAAgHAIg");
	this.shape_45.setTransform(-3.7,0.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgTCQQAAg4gBgwIgChLIgOADIgMAEIgRg9IBHggIArgWIARAKIgECDIgBCSg");
	this.shape_46.setTransform(-5.7,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhACNIgHgSQAbgwAKgYQANgfAAgYQAAgSgLgJQgJgIgMAAQgMAAgMAFIAJhhQAbgJAfAAQAnAAAZAWQAXAWAAAlQAAA4hQBeIAfAAIAWgCIARgCIgIAbIgHAbg");
	this.shape_47.setTransform(-4.8,0.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhACJIgDgYIgEgZQAUALATAAQAsAAAAgcQAAgZgiAAQgWAAgUAJIgTgUQAHgdAMg/IANhSIBkAAIANAAIALgCIgQBZIhMAAIgIAdQAUgFAUAAQAdAAAVAWQAVAVAAAgQAAAvgfAaQgcAWgsAAQgZAAgUgFg");
	this.shape_48.setTransform(-23.5,0.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag/CJQAHgzANg5QALgwAKggIggACQgXABgLADIgEhfICqABIAPAQIgVAnQgXAvgMAhQgYBDgQBNg");
	this.shape_49.setTransform(-4.6,0.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag2B7QgXgVAAgdQAAgfAXgRQgngVAAg4QAAgjAZgbQAbgcApAAQAnAAAcAaQAbAbAAAlQAAA4goAUQAYASgBAfQAAAcgZAWQgXAUgdAAQgeAAgYgUgAAAA2QgGAAgFAGQgEAHAAAHQAAAWAPAAQAQAAAAgXQAAgHgFgGQgEgHgGAAIgBABgAgPgsQgGAIAAAKQAAANAHAJQAFAJAJgBQALABAFgJQAGgJAAgNQAAgLgGgHQgHgIgJAAQgIAAgHAIg");
	this.shape_50.setTransform(-4.9,0.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAECTQgrgBgagcQgageAAg3QAAgpATgtQARgoAjg1IBVASQgNAMgbAeQgbAlgGAPQAQgHARAAQAdAAATAWQATAWAAAjQAAAzgYAdQgXAdgnAAIgCAAgAgPAgQgEAJAAAKQAAAQAGAMQAHANAKAAQAJAAAIgMQAHgLAAgNQAAgPgHgJQgHgJgLAAQgKAAgIAJg");
	this.shape_51.setTransform(-24,0.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag/CJQAIgzAMg5QALgwAKggIggACQgXABgLADIgEhfICqABIAPAQIgVAnQgXAvgMAhQgYBDgQBNg");
	this.shape_52.setTransform(-3.9,0.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ag1B7QgYgVAAgdQAAgfAXgRQgngVAAg4QAAgjAZgbQAbgcApAAQAoAAAbAaQAbAbAAAlQAAA4goAUQAYASgBAfQAAAcgZAWQgXAUgdAAQgeAAgXgUgAAAA2QgGAAgFAGQgEAHAAAHQAAAWAPAAQAQAAAAgXQAAgHgFgGQgEgHgGAAIgBABgAgPgsQgGAIAAAKQAAANAHAJQAFAJAJgBQALABAFgJQAGgJAAgNQAAgLgGgHQgHgIgJAAQgJAAgGAIg");
	this.shape_53.setTransform(-25.1,0.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag2B7QgXgVAAgdQAAgfAXgRQgngVAAg4QAAgjAZgbQAbgcApAAQAnAAAcAaQAbAbAAAlQAAA4goAUQAXASABAfQAAAcgZAWQgYAUgdAAQgeAAgYgUgAAAA2QgGAAgEAGQgGAHAAAHQAAAWAQAAQAQAAAAgXQAAgHgFgGQgEgHgGAAIgBABgAgPgsQgGAIAAAKQAAANAGAJQAHAJAIgBQAKABAHgJQAFgJAAgNQAAgLgGgHQgHgIgJAAQgJAAgGAIg");
	this.shape_54.setTransform(-24.7,0.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag1B7QgYgVAAgdQAAgfAXgRQgngVAAg4QAAgjAZgbQAbgcApAAQAnAAAcAaQAbAbAAAlQAAA4goAUQAYASAAAfQAAAcgZAWQgYAUgdAAQgeAAgXgUgAAAA2QgGAAgEAGQgGAHAAAHQAAAWAQAAQAQAAAAgXQAAgHgFgGQgEgHgGAAIgBABgAgPgsQgGAIAAAKQAAANAGAJQAHAJAIgBQAKABAHgJQAFgJAAgNQAAgLgGgHQgHgIgJAAQgIAAgHAIg");
	this.shape_55.setTransform(-23.4,0.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag2B7QgXgVAAgdQAAgfAXgRQgngVAAg4QAAgjAZgbQAbgcApAAQAnAAAcAaQAbAbAAAlQAAA4goAUQAYASgBAfQAAAcgZAWQgYAUgcAAQgeAAgYgUgAAAA2QgGAAgFAGQgEAHAAAHQAAAWAPAAQAQAAAAgXQAAgHgFgGQgEgHgGAAIgBABgAgPgsQgGAIAAAKQAAANAHAJQAFAJAJgBQALABAFgJQAGgJAAgNQAAgLgGgHQgHgIgJAAQgIAAgHAIg");
	this.shape_56.setTransform(-24.4,0.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTCQQAAg4gBgwIgChLIgNADIgNAEIgRg9IBHggIAqgWIASAKIgECDIgCCSg");
	this.shape_57.setTransform(-4.7,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("Ag/CJQAIgzAMg5QAKgwALggIggACQgXABgLADIgDhfICqABIANAQIgUAnQgXAvgMAhQgYBDgQBNg");
	this.shape_58.setTransform(-3.6,0.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgoCJIAOgZQAPgcAFgRQgfABgYgWQgggcAAg1QAAguAdggQAcgfAoAAQAnAAAZAfQAaAfAAAvQAAAlgaA4QgWAwgfAngAgSghQgHAHAAANQAAAfAlACQACgEADgKQAEgLAAgKQAAgLgHgHQgHgHgJAAQgKAAgGAHg");
	this.shape_59.setTransform(-24.4,0.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhJBhQgcgrAAg7QAAhFAgglQAcgfArAAQAqAAAbAhQAfAlAABCQAAA6geAtQgeAugpAAQgsAAgegugAgZAiQAAAVAHAPQAIASALgBQALABAIgTQAIgRAAgTQAAgxgbAAQgaAAAAAyg");
	this.shape_60.setTransform(-17.4,0.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("ADICHICZkXIAsATIipETgAFQB3QgRgZAAghQABgnARgVQAQgTAaAAQAYAAAPATQARAVAAAmQAAAhgQAaQgRAZgYAAQgaAAgQgZgAFrBTQAAAJAEAIQAEAIAHAAQAHAAAEgIQAEgIAAgJQAAgXgPAAQgQAAABAXgAgfBiQgcgsAAg7QAAhEAgglQAbgfAsgBQAqAAAbAiQAfAkAABCQAAA7geAtQgeAugqgBQgrABgegugAAQAjQAAAUAHAQQAIARALAAQALAAAJgSQAIgRgBgTQAAgygbAAQgaAAAAAzgAj5BiQgcgsAAg7QAAhEAgglQAcgfArgBQAqAAAcAiQAeAkAABCQAAA7gdAtQgeAugqgBQgsABgegugAjJAjQAAAUAHAQQAHARAMAAQALAAAJgSQAHgRAAgTQAAgygbAAQgaAAAAAzgAmFCLQABg4gCgwIgChMIgNAEIgNAEIgRg9IBIggIArgXIARALIgDCCIgCCTgACvgHQgQgYAAgiQAAgnASgVQARgTAYAAQAZAAAPATQARAVAAAnQAAAhgRAZQgRAYgXAAQgaAAgRgYgADKgqQABAJAEAHQAEAJAHgBQAGAAAEgIQAFgIAAgIQAAgXgPAAQgQAAAAAXg");
	this.shape_61.setTransform(0.2,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:-14.2}},{t:this.shape}]}).to({state:[{t:this.shape_2,p:{x:-14.2}},{t:this.shape}]},7).to({state:[{t:this.shape_5,p:{x:-25.8}},{t:this.shape_4,p:{x:-6.5}},{t:this.shape_3,p:{x:19.1}}]},7).to({state:[{t:this.shape_5,p:{x:-22.6}},{t:this.shape_7,p:{x:-7.2}},{t:this.shape_6,p:{x:15.9}}]},3).to({state:[{t:this.shape_7,p:{x:-23.4}},{t:this.shape_9,p:{x:-6.4}},{t:this.shape_8,p:{x:16.7}}]},3).to({state:[{t:this.shape_7,p:{x:-24}},{t:this.shape_11,p:{x:-6.4}},{t:this.shape_10,p:{x:17.3}}]},5).to({state:[{t:this.shape_5,p:{x:-25.4}},{t:this.shape_13,p:{x:-6.7}},{t:this.shape_12,p:{x:18.7}}]},5).to({state:[{t:this.shape_16,p:{x:-24.2}},{t:this.shape_15,p:{x:-6.6}},{t:this.shape_14,p:{x:17.4}}]},5).to({state:[{t:this.shape_7,p:{x:-24.8}},{t:this.shape_18,p:{x:-6.4}},{t:this.shape_17,p:{x:18.1}}]},5).to({state:[{t:this.shape_5,p:{x:-24.8}},{t:this.shape_19,p:{x:-6.1}},{t:this.shape_6,p:{x:18.1}}]},5).to({state:[{t:this.shape_16,p:{x:-25.1}},{t:this.shape_1,p:{x:-6.5}},{t:this.shape_14,p:{x:18.3}}]},5).to({state:[{t:this.shape_16,p:{x:-25.1}},{t:this.shape_2,p:{x:-6.5}},{t:this.shape_20,p:{x:18.4}}]},5).to({state:[{t:this.shape_22,p:{x:-25}},{t:this.shape_4,p:{x:-5.7}},{t:this.shape_21,p:{x:19.9}}]},5).to({state:[{t:this.shape_23,p:{x:-21.8}},{t:this.shape_7,p:{x:-6.4}},{t:this.shape_8,p:{x:16.7}}]},5).to({state:[{t:this.shape_25},{t:this.shape_23,p:{x:-5.6}},{t:this.shape_24,p:{x:17.5}}]},5).to({state:[{t:this.shape_22,p:{x:-23.2}},{t:this.shape_11,p:{x:-5.6}},{t:this.shape_17,p:{x:18.1}}]},5).to({state:[{t:this.shape_26},{t:this.shape_13,p:{x:-5.9}},{t:this.shape_21,p:{x:19.5}}]},5).to({state:[{t:this.shape_28,p:{x:-23.3}},{t:this.shape_15,p:{x:-5.8}},{t:this.shape_27,p:{x:18.3}}]},5).to({state:[{t:this.shape_9,p:{x:-24}},{t:this.shape_18,p:{x:-5.6}},{t:this.shape_24,p:{x:18.9}}]},5).to({state:[{t:this.shape_23,p:{x:-24}},{t:this.shape_29,p:{x:-5.3}},{t:this.shape_8,p:{x:18.9}}]},5).to({state:[{t:this.shape_28,p:{x:-24.2}},{t:this.shape_31,p:{x:-5.7}},{t:this.shape_30,p:{x:19.2}}]},5).to({state:[{t:this.shape_32},{t:this.shape_2,p:{x:-5.7}},{t:this.shape_30,p:{x:19.2}}]},5).to({state:[{t:this.shape_11,p:{x:-25}},{t:this.shape_4,p:{x:-5.1}},{t:this.shape_33}]},5).to({state:[{t:this.shape_11,p:{x:-21.8}},{t:this.shape_5,p:{x:-5.8}},{t:this.shape_10,p:{x:17.3}}]},5).to({state:[{t:this.shape_11,p:{x:-22.6}},{t:this.shape_34},{t:this.shape_17,p:{x:18.1}}]},5).to({state:[{t:this.shape_35},{t:this.shape_11,p:{x:-5}},{t:this.shape_12,p:{x:18.7}}]},5).to({state:[{t:this.shape_11,p:{x:-24.6}},{t:this.shape_13,p:{x:-5.3}},{t:this.shape_30,p:{x:20.1}}]},5).to({state:[{t:this.shape_11,p:{x:-23.4}},{t:this.shape_15,p:{x:-5.2}},{t:this.shape_36}]},5).to({state:[{t:this.shape_11,p:{x:-24}},{t:this.shape_18,p:{x:-5}},{t:this.shape_21,p:{x:19.5}}]},5).to({state:[{t:this.shape_11,p:{x:-24}},{t:this.shape_37},{t:this.shape_10,p:{x:19.5}}]},5).to({state:[{t:this.shape_11,p:{x:-24.3}},{t:this.shape_39,p:{x:-5.1}},{t:this.shape_38}]},5).to({state:[{t:this.shape_11,p:{x:-24.3}},{t:this.shape_2,p:{x:-5.1}},{t:this.shape_24,p:{x:19.8}}]},5).to({state:[{t:this.shape_13,p:{x:-25.3}},{t:this.shape_4,p:{x:-3.7}},{t:this.shape_27,p:{x:21.9}}]},5).to({state:[{t:this.shape_13,p:{x:-22}},{t:this.shape_40},{t:this.shape_12,p:{x:18.7}}]},5).to({state:[{t:this.shape_13,p:{x:-22.9}},{t:this.shape_41},{t:this.shape_21,p:{x:19.5}}]},5).to({state:[{t:this.shape_13,p:{x:-23.4}},{t:this.shape_11,p:{x:-3.6}},{t:this.shape_30,p:{x:20.1}}]},5).to({state:[{t:this.shape_43},{t:this.shape_13,p:{x:-3.9}},{t:this.shape_42}]},5).to({state:[{t:this.shape_13,p:{x:-23.6}},{t:this.shape_15,p:{x:-3.8}},{t:this.shape_24,p:{x:20.2}}]},5).to({state:[{t:this.shape_13,p:{x:-24.2}},{t:this.shape_18,p:{x:-3.6}},{t:this.shape_3,p:{x:20.9}}]},5).to({state:[{t:this.shape_13,p:{x:-24.3}},{t:this.shape_44},{t:this.shape_12,p:{x:20.9}}]},5).to({state:[{t:this.shape_13,p:{x:-24.5}},{t:this.shape_45},{t:this.shape_24,p:{x:21.1}}]},5).to({state:[{t:this.shape_13,p:{x:-24.5}},{t:this.shape_2,p:{x:-3.7}},{t:this.shape_8,p:{x:21.2}}]},5).to({state:[{t:this.shape_15,p:{x:-25.2}},{t:this.shape_4,p:{x:-4.9}},{t:this.shape_24,p:{x:20.7}}]},5).to({state:[{t:this.shape_15,p:{x:-22}},{t:this.shape_46,p:{x:-5.7}},{t:this.shape_14,p:{x:17.4}}]},5).to({state:[{t:this.shape_15,p:{x:-22.8}},{t:this.shape_47,p:{x:-4.8}},{t:this.shape_27,p:{x:18.3}}]},5).to({state:[{t:this.shape_15,p:{x:-23.4}},{t:this.shape_11,p:{x:-4.9}},{t:this.shape_36}]},5).to({state:[{t:this.shape_15,p:{x:-24.8}},{t:this.shape_13,p:{x:-5.1}},{t:this.shape_24,p:{x:20.2}}]},5).to({state:[{t:this.shape_48},{t:this.shape_15,p:{x:-5}},{t:this.shape_6,p:{x:19}}]},5).to({state:[{t:this.shape_15,p:{x:-24.2}},{t:this.shape_18,p:{x:-4.9}},{t:this.shape_27,p:{x:19.6}}]},5).to({state:[{t:this.shape_15,p:{x:-24.2}},{t:this.shape_49,p:{x:-4.6}},{t:this.shape_14,p:{x:19.7}}]},5).to({state:[{t:this.shape_15,p:{x:-24.4}},{t:this.shape_50,p:{x:-4.9}},{t:this.shape_21,p:{x:19.9}}]},5).to({state:[{t:this.shape_15,p:{x:-24.5}},{t:this.shape_2,p:{x:-5}},{t:this.shape_21,p:{x:19.9}}]},5).to({state:[{t:this.shape_18,p:{x:-25}},{t:this.shape_4,p:{x:-4.3}},{t:this.shape_6,p:{x:21.3}}]},5).to({state:[{t:this.shape_18,p:{x:-21.8}},{t:this.shape_5,p:{x:-5}},{t:this.shape_17,p:{x:18.1}}]},5).to({state:[{t:this.shape_18,p:{x:-22.6}},{t:this.shape_23,p:{x:-4.2}},{t:this.shape_24,p:{x:18.9}}]},5).to({state:[{t:this.shape_18,p:{x:-23.2}},{t:this.shape_11,p:{x:-4.2}},{t:this.shape_21,p:{x:19.5}}]},5).to({state:[{t:this.shape_18,p:{x:-24.6}},{t:this.shape_13,p:{x:-4.5}},{t:this.shape_3,p:{x:20.9}}]},5).to({state:[{t:this.shape_18,p:{x:-23.4}},{t:this.shape_15,p:{x:-4.4}},{t:this.shape_27,p:{x:19.6}}]},5).to({state:[{t:this.shape_51},{t:this.shape_18,p:{x:-4.2}},{t:this.shape_8,p:{x:20.3}}]},5).to({state:[{t:this.shape_18,p:{x:-24}},{t:this.shape_52,p:{x:-3.9}},{t:this.shape_17,p:{x:20.3}}]},5).to({state:[{t:this.shape_18,p:{x:-24.3}},{t:this.shape_31,p:{x:-4.3}},{t:this.shape_27,p:{x:20.5}}]},5).to({state:[{t:this.shape_18,p:{x:-24.3}},{t:this.shape_2,p:{x:-4.3}},{t:this.shape_14,p:{x:20.6}}]},5).to({state:[{t:this.shape_49,p:{x:-24.7}},{t:this.shape_4,p:{x:-4.3}},{t:this.shape_3,p:{x:21.3}}]},5).to({state:[{t:this.shape_52,p:{x:-21.5}},{t:this.shape_7,p:{x:-5}},{t:this.shape_6,p:{x:18.1}}]},5).to({state:[{t:this.shape_19,p:{x:-22.3}},{t:this.shape_9,p:{x:-4.2}},{t:this.shape_8,p:{x:18.9}}]},5).to({state:[{t:this.shape_29,p:{x:-22.9}},{t:this.shape_11,p:{x:-4.2}},{t:this.shape_10,p:{x:19.5}}]},9).to({state:[{t:this.shape_49,p:{x:-24.3}},{t:this.shape_13,p:{x:-4.4}},{t:this.shape_12,p:{x:20.9}}]},8).to({state:[{t:this.shape_29,p:{x:-23.1}},{t:this.shape_15,p:{x:-4.4}},{t:this.shape_14,p:{x:19.7}}]},8).to({state:[{t:this.shape_19,p:{x:-23.7}},{t:this.shape_18,p:{x:-4.2}},{t:this.shape_17,p:{x:20.3}}]},11).to({state:[{t:this.shape_52,p:{x:-23.7}},{t:this.shape_19,p:{x:-3.9}},{t:this.shape_6,p:{x:20.4}}]},9).to({state:[{t:this.shape_29,p:{x:-24}},{t:this.shape_1,p:{x:-4.3}},{t:this.shape_14,p:{x:20.6}}]},9).to({state:[{t:this.shape_29,p:{x:-24}},{t:this.shape_2,p:{x:-4.3}},{t:this.shape_20,p:{x:20.6}}]},10).to({state:[{t:this.shape_53,p:{x:-25.1}},{t:this.shape_4,p:{x:-4}},{t:this.shape_24,p:{x:21.6}}]},8).to({state:[{t:this.shape_31,p:{x:-21.9}},{t:this.shape_46,p:{x:-4.8}},{t:this.shape_14,p:{x:18.3}}]},8).to({state:[{t:this.shape_39,p:{x:-22.7}},{t:this.shape_47,p:{x:-3.9}},{t:this.shape_30,p:{x:19.2}}]},8).to({state:[{t:this.shape_53,p:{x:-23.3}},{t:this.shape_11,p:{x:-4}},{t:this.shape_38}]},9).to({state:[{t:this.shape_54},{t:this.shape_13,p:{x:-4.2}},{t:this.shape_24,p:{x:21.1}}]},8).to({state:[{t:this.shape_55,p:{x:-23.4}},{t:this.shape_15,p:{x:-4.1}},{t:this.shape_21,p:{x:19.9}}]},8).to({state:[{t:this.shape_1,p:{x:-24.1}},{t:this.shape_18,p:{x:-4}},{t:this.shape_27,p:{x:20.5}}]},10).to({state:[{t:this.shape_31,p:{x:-24.1}},{t:this.shape_49,p:{x:-3.7}},{t:this.shape_14,p:{x:20.6}}]},9).to({state:[{t:this.shape_55,p:{x:-24.3}},{t:this.shape_50,p:{x:-4}},{t:this.shape_6,p:{x:20.8}}]},11).to({state:[{t:this.shape_56},{t:this.shape_2,p:{x:-4.1}},{t:this.shape_6,p:{x:20.8}}]},10).to({state:[{t:this.shape_2,p:{x:-25.1}},{t:this.shape_4,p:{x:-4}},{t:this.shape_24,p:{x:21.6}}]},10).to({state:[{t:this.shape_2,p:{x:-21.9}},{t:this.shape_57},{t:this.shape_20,p:{x:18.4}}]},9).to({state:[{t:this.shape_2,p:{x:-22.7}},{t:this.shape_47,p:{x:-3.9}},{t:this.shape_30,p:{x:19.2}}]},9).to({state:[{t:this.shape_2,p:{x:-23.3}},{t:this.shape_11,p:{x:-3.9}},{t:this.shape_24,p:{x:19.8}}]},9).to({state:[{t:this.shape_2,p:{x:-24.7}},{t:this.shape_13,p:{x:-4.2}},{t:this.shape_8,p:{x:21.2}}]},8).to({state:[{t:this.shape_2,p:{x:-23.5}},{t:this.shape_15,p:{x:-4.1}},{t:this.shape_21,p:{x:19.9}}]},9).to({state:[{t:this.shape_2,p:{x:-24.1}},{t:this.shape_18,p:{x:-3.9}},{t:this.shape_14,p:{x:20.6}}]},8).to({state:[{t:this.shape_2,p:{x:-24.1}},{t:this.shape_58},{t:this.shape_20,p:{x:20.6}}]},9).to({state:[{t:this.shape_2,p:{x:-24.4}},{t:this.shape_50,p:{x:-4}},{t:this.shape_6,p:{x:20.8}}]},8).to({state:[{t:this.shape_59},{t:this.shape_2,p:{x:-4}},{t:this.shape_3,p:{x:20.9}}]},6).to({state:[{t:this.shape_46,p:{x:-36.7}},{t:this.shape_60},{t:this.shape_4,p:{x:4.4}},{t:this.shape_27,p:{x:30}}]},7).to({state:[]},12).to({state:[{t:this.shape_61}]},3).to({state:[]},6).to({state:[{t:this.shape_61}]},4).to({state:[]},17).to({state:[{t:this.shape_61}]},2).to({state:[]},1).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-25.9,104,49.8);


(lib._02趴數 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006633").s().p("EgnSACvIAAldMBOlAAAIAAFdg");
	this.shape.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.9,-17,503,35);


(lib._02start4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._02start4();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._02start4_1, new cjs.Rectangle(-24.5,-25,50,51), null);


(lib._02lastbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EhmuA55MAAAhzxMDNdAAAMAAABzxg");
	this.shape.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-657,-370.5,1315,741);


(lib._02Car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._02car();
	this.instance.parent = this;
	this.instance.setTransform(-131.2,-93.3,0.096,0.096);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.2,-93.3,263.4,187.6);


(lib._01字_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._01字();
	this.instance.parent = this;
	this.instance.setTransform(-299.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._01字_1, new cjs.Rectangle(-299.5,-25,600,51), null);


(lib._01logo字_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._01logo字();
	this.instance.parent = this;
	this.instance.setTransform(-234.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234.5,-25,470,51);


(lib._01LOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._01logo();
	this.instance.parent = this;
	this.instance.setTransform(-99.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-61.5,200,124);


(lib._01bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhmuA55MAAAhzxMDNdAAAMAAABzxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._01bg, new cjs.Rectangle(-657.5,-370.5,1315,741), null);


(lib._02start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._02start2();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-25);

	this.instance_1 = new lib._02start4_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.5,0.6,1,1,0,0,0,0.5,0.5);

	this.instance_2 = new lib._02start3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.5,-25);

	this.instance_3 = new lib._02start1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-74.5,-25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AC4AAQAABMg2A2QgmAmgxAMQgVAFgWAAQhLAAg2g3Qg2g2AAhMQAAhMA2g2QA2g2BLAAQAWAAAVAFQAxALAmAmQA2A2AABMg");
	this.shape.setTransform(-98.9,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAkIh6AAIAAhKIB6AAIAAguICTBUIiTBVg");
	this.shape_1.setTransform(-96.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 圖層 2
	this.lastbg = new lib._02lastbg();
	this.lastbg.parent = this;
	this.lastbg.setTransform(-0.1,0.1,0.191,0.101);
	this.lastbg.alpha = 0.172;

	this.timeline.addTween(cjs.Tween.get(this.lastbg).wait(1));

}).prototype = getMCSymbolPrototype(lib._02start, new cjs.Rectangle(-125.5,-37.4,251,75), null);


(lib._02replayicon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._02replay();
	this.instance.parent = this;
	this.instance.setTransform(-68.5,-25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AgCBhQgLAAgNgDQgkgKgTghQgSggAJgkQAKgkAhgTQAggTAjAKQAlAKATAgQAFAKADANIAYAGIgmAmIgEAEIAAAAAC4AAQAABMg2A2QgmAngxALQgVAFgWAAQhLAAg2g3Qg2g2AAhMQAAhMA2g2QA2g2BLAAQAWAAAVAFQAxALAmAmQA2A2AABMgAA8AlIgRhAIApALABGAcIgDAEIgBAA");
	this.shape.setTransform(-87,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfgfIAnALIAYAGIgkAmIgEADIAAAAIAEgDIgEADIgBABIgFAEg");
	this.shape_1.setTransform(-79.4,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// 圖層 2
	this.lastbg = new lib._02lastbg();
	this.lastbg.parent = this;
	this.lastbg.setTransform(-0.1,0.1,0.175,0.101);
	this.lastbg.alpha = 0.191;

	this.timeline.addTween(cjs.Tween.get(this.lastbg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.3,-37.4,230.7,75);


(lib._01continue_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫30("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.5,0.5);

	this.instance_1 = new lib.補間動畫31("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0.5);

	this.instance_2 = new lib.補間動畫32("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,0.5);

	this.instance_3 = new lib.補間動畫33("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.5,0.5);

	this.instance_4 = new lib.補間動畫34("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.5,0.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.補間動畫35("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},9).to({state:[]},10).to({state:[{t:this.instance_1}]},10).to({state:[]},10).to({state:[{t:this.instance_2}]},10).to({state:[]},10).to({state:[{t:this.instance_3}]},10).to({state:[]},10).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_5}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({_off:true},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_212 = function() {
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
		
		this.bg.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_34.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_34()
		{
			this.gotoAndPlay(215);
		}
	}
	this.frame_894 = function() {
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
		
		this.replay.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_17.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_17()
		{
			this.gotoAndPlay(215);
		}
		
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.go.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.open("contents.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(212).call(this.frame_212).wait(682).call(this.frame_894).wait(1));

	// Logo字
	this.instance = new lib._01logo字_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(961.1,791.1,1.717,1.717,0,0,0,0.5,0.5);
	this.instance.alpha = 0.148;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({alpha:0.68},17).to({alpha:1},31).to({alpha:0.148},25).to({alpha:0},15).to({_off:true},1).wait(747));

	// Logo
	this.instance_1 = new lib._01LOGO("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(959.6,334.9,1.979,1.979,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.148},19).to({alpha:1},20).to({alpha:0.148},20).to({alpha:1},48).to({alpha:0.5},25).to({alpha:0},15).to({x:959.4,alpha:0.801},14).to({x:959.6,alpha:1},26).wait(25).to({startPosition:0},0).to({_off:true},1).wait(682));

	// 顧問
	this.instance_2 = new lib._01字_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(961.3,728.1,2.018,2.018,0,0,0,0.6,0.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(147).to({_off:false},0).to({alpha:0.801},14).to({alpha:1},26).wait(25).to({_off:true},1).wait(682));

	// continue
	this.instance_3 = new lib._01continue_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(961.1,954.2,1.462,1.462);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(212).to({_off:false},0).to({_off:true},1).wait(682));

	// Background
	this.bg = new lib._01bg();
	this.bg.parent = this;
	this.bg.setTransform(961,542.1,1.462,1.462,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(212).to({_off:true},1).wait(682));

	// 進入課程
	this.go = new lib._02start();
	this.go.parent = this;
	this.go.setTransform(958.8,542.2,3.156,3.156,0,0,0,3.5,0.6);
	this.go.alpha = 0;
	this.go._off = true;

	this.timeline.addTween(cjs.Tween.get(this.go).wait(874).to({_off:false},0).to({alpha:1},20).wait(1));

	// replay
	this.replay = new lib._02replayicon();
	this.replay.parent = this;
	this.replay.setTransform(1573.5,921.5,1.424,1.424,0,0,0,-0.2,0.5);
	this.replay._off = true;

	this.timeline.addTween(cjs.Tween.get(this.replay).wait(894).to({_off:false},0).wait(1));

	// Last
	this.lastbg = new lib._02lastbg();
	this.lastbg.parent = this;
	this.lastbg.setTransform(961,541.6,1.462,1.462,0,0,0,0.6,0.1);
	this.lastbg.alpha = 0.32;
	this.lastbg._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lastbg).wait(869).to({_off:false},0).to({alpha:0.879},10).wait(16));

	// 趴數
	this.instance_4 = new lib._02趴數("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(141.5,976.9,0.36,1.17,0,0,0,0.7,0.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(214).to({_off:false},0).to({regX:0.6,regY:0.6,scaleX:0.9,x:276.7,y:976.8},135).to({scaleX:1.81,x:504.8},155).to({scaleX:2.71,x:731},140).to({scaleX:3.61,x:959.1},135).to({startPosition:0},90).to({startPosition:0},5).wait(20).to({startPosition:0},0).wait(1));

	// 趴數字
	this.instance_5 = new lib._02趴數字("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(85,917.6,1.462,1.462,0,0,0,0.5,-1.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(260).to({_off:false},0).to({regX:0.6,x:249.4,startPosition:89},89).to({x:706.9,startPosition:244},155).to({x:1153.3,startPosition:384},140).to({x:1608.2,startPosition:519},135).wait(38).to({startPosition:557},0).to({regX:0.5,x:1595.6,startPosition:570},13).to({alpha:0.5,startPosition:580},7).to({alpha:1,startPosition:590},6).to({alpha:0.5,startPosition:595},7).to({alpha:1,startPosition:600},6).to({alpha:0.5,startPosition:599},7).to({alpha:1,startPosition:609},6).to({_off:true},1).wait(25));

	// Car
	this.instance_6 = new lib._02Car("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(138.5,885.3,0.979,0.979,0,0,0,0.6,0.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(214).to({_off:false},0).to({x:406.4},135).to({x:864.4},155).to({x:1312.5},140).to({x:1768.8},135).to({startPosition:0},90).to({startPosition:0},5).wait(20).to({startPosition:0},0).wait(1));

	// Word
	this.instance_7 = new lib._021();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,1.462,1.462);

	this.instance_8 = new lib._022();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0,1.462,1.462);

	this.instance_9 = new lib._023();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,1.462,1.462);

	this.instance_10 = new lib._024();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0,1.462,1.462);

	this.instance_11 = new lib._025();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1.462,1.462);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},214).to({state:[{t:this.instance_8}]},135).to({state:[{t:this.instance_9}]},155).to({state:[{t:this.instance_10}]},140).to({state:[{t:this.instance_11}]},135).to({state:[{t:this.instance_11}]},90).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_11}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(779).to({_off:false},0).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(959.9,542,1921.9,1083);
// library properties:
lib.properties = {
	width: 1920,
	height: 1083,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;