(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"chpba_atlas_", frames: [[3136,4282,1195,277],[2597,1002,919,259],[1414,3797,662,530],[4476,1754,200,200],[6863,4519,703,319],[2592,1364,1250,620],[7729,0,396,1408],[3599,742,1250,620],[2095,2990,332,1531],[1340,1316,1250,620],[7223,0,504,1546],[4851,1357,1250,620],[4471,3031,322,1493],[4915,735,1250,620],[5963,3127,711,522],[3843,3765,499,499],[7389,3412,220,55],[1340,0,1255,1314],[0,0,1338,1632],[2429,3038,1323,319],[1269,2464,1267,524],[3314,4561,210,442],[6157,0,1064,733],[5250,3127,711,522],[6676,3127,711,522],[0,1634,1267,524],[4476,1364,324,388],[707,3212,527,553],[3807,3031,662,732],[0,2160,1267,524],[4333,4526,393,424],[1269,1938,1267,524],[2538,2512,1267,524],[3136,3359,585,291],[6167,735,682,1097],[4476,1979,1267,524],[6209,4168,652,504],[3844,1364,630,1097],[6863,4168,395,256],[6103,1834,209,69],[6314,1976,209,69],[6525,1976,209,69],[6525,1834,209,69],[6525,1905,209,69],[6314,1834,209,69],[5287,2505,209,69],[5076,2505,209,69],[5745,1979,209,69],[6103,1905,209,69],[6103,1976,209,69],[6314,1905,209,69],[3518,1002,70,200],[8120,1532,70,200],[2538,1986,1267,524],[6851,1548,1267,525],[6851,735,355,506],[2597,0,1000,1000],[1269,2990,824,805],[3807,2505,1267,524],[2896,4561,416,241],[5745,2075,1267,524],[8012,2075,155,251],[3599,0,1314,740],[5881,682,100,5],[5983,689,100,5],[5881,696,100,5],[5983,696,100,5],[5983,682,100,5],[5881,689,100,5],[4678,1754,100,200],[6345,2601,1267,524],[0,2686,1267,524],[4795,3127,453,913],[2429,3876,705,515],[707,3797,705,515],[7389,3485,705,515],[5250,3651,705,515],[2429,3359,705,515],[5957,3651,705,515],[6664,3651,705,515],[0,3212,705,515],[0,3729,705,515],[3136,3765,705,515],[7371,4002,705,515],[4795,4168,705,515],[5502,4168,705,515],[8127,260,50,50],[5076,2601,1267,524],[7614,2075,396,1408],[8012,2450,120,120],[8012,2328,120,120],[8127,0,50,50],[8127,156,50,50],[8127,208,50,50],[8127,52,50,50],[8127,104,50,50],[0,4329,1479,231],[6736,1834,80,80],[8011,1410,120,120],[5498,2505,220,55],[4795,3031,220,55],[7389,3241,220,55],[7389,3184,220,55],[7389,3298,220,55],[7389,3127,220,55],[7729,1467,280,55],[7389,3355,220,55],[7729,1410,280,55],[2919,1263,320,50],[5559,682,320,50],[4915,682,320,50],[5237,682,320,50],[2597,1263,320,50],[3241,1263,280,55],[1481,4523,1413,186],[4915,0,1240,680],[8120,1878,70,70],[3523,1276,70,70],[8120,1806,70,70],[8120,1950,70,70],[3523,1204,70,70],[8120,1734,70,70],[6736,1916,80,80],[7014,2075,500,500],[8012,2572,120,120],[6851,1243,318,294],[7568,4519,421,412]]}
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



(lib.清爽短髮 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.我準備好了 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.圖層1 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.洞察 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.測驗規則請協助圖中銷售員穿上應有的服裝配件 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._1bg = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._1男全身正面png複製 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._2bg = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._2男全身左側 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._3bg = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._3男全身後面 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._4bg = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._4男全身右側 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._5bg = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._500 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._64c72a58ac604359b2b1549f814af779 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.男生服裝 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._8腳部 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._9袖口 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.歡迎來到單元測驗看來你已經熟悉了成為銷售員該如何穿著那麼你準備好要進行測驗了嗎 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.babe = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.cfewefw = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.correct = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CS = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CSpng複製 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.ddqwfdq = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.dher = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.dw = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.dwcdcw = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.fdsdwqdeqwe = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.fefefwfweq = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.feffewewfewf = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.gfgfgfgffg = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.glass = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.heyhey = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hregr = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.幫幫我__ = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.lighteeee = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.m3white200 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.manbt1pass = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.manbt1up = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.manbt2pass = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.manbt2up = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.manbt3pass = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.manbt3up = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.manbt4pass = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.manbt4up = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.manbt5pass = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.manbt5up = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.manbt6pass = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.manbt6up = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.manbtL = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.manbtR = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.meh = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.mnmnm = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.nnnnn = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.RJ0001 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.S__9781335 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.saasa = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.sio = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.答對囉清爽的髮型能給人舒適專業的印象 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.TB145ToIFXXXXXQXFXXXXXXXXXX___0item_picjpg_400x400 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.U2BG = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.vce = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.vcepng複製 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.vcepng複製3 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.vcepng複製4 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.vcepng複製5 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.vcepng複製6 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.vdgvwegfwe = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.vfvfgnbbbbb = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.wewewew = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.white = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.word1 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.word1png複製2 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.word1png複製3 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.word1png複製4 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.word1png複製5 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.word2 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.word2png複製 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.word2png複製2 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.word2png複製3 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.word2png複製4 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.word3png複製2 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.word3png複製3 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.word3png複製4 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.xx = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.zzzz = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.可以嗎 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.提示x = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.提示xw = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.提點按鈕 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.提點按鈕png複製 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.提點按鈕png複製2 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.提點按鈕png複製3 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.提點按鈕png複製4 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.日系明星髮型 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.現在位置w = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0000_創新歷程 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0001_創立理念 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0002_心路歷程 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0003_核心人物 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0004_納智捷汽車 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0005_裕隆集團 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0006_CH1公司歷程 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0000_女生服裝 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0002_CH2服裝儀容 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0000_數位科技體驗區 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0001_AR實車賞車 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0002_ThinkTouch = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0003_3D體驗劇場 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0004_迎賓區 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0005_CH3銷售SOP = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.請點選適當髮型 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.跨殺小啦 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.關閉按鈕png複製 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.關閉按鈕png複製2 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.關閉按鈕png複製3 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.關閉按鈕png複製4 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.關閉按鈕png複製5 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.關閉按鈕png複製6 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.首頁t = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.首頁w = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖1 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖2 = function() {
	this.spriteSheet = ss["chpba_atlas_"];
	this.gotoAndStop(126);
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


(lib.補間動畫36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.meh();
	this.instance.parent = this;
	this.instance.setTransform(-779.8,-322.5,1.231,1.231);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-779.8,-322.5,1559.7,645.1);


(lib.補間動畫35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.meh();
	this.instance.parent = this;
	this.instance.setTransform(-779.8,-322.5,1.231,1.231);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-779.8,-322.5,1559.7,645.1);


(lib.補間動畫34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsFDIAAhtIBoAAIAABtgAghBtIAAg4QAAg1AlgWQBSgwAxgXQApgXAAgpQAAgdgWgXQgigihlAAQhsAAgtAtQgpApAAAqIAAASIhiAAIAAgSQAAgmATglQAPgfAagaQBLhKCdgBQCSAAA8A9QAxAwAAA1QAAAsgXAjQgaAlgxAWQhLAhghAaQgTAQAAAaIAAAeg");
	this.shape.setTransform(-537.6,108.3);

	this.instance = new lib._8腳部();
	this.instance.parent = this;
	this.instance.setTransform(-829.1,-218.6,0.452,0.452);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsFDIAAhuIBoAAIAABugAghBtIAAg4QAAg1AlgWQBSgxAxgWQApgXAAgpQAAgdgWgXQgigihlAAQhsAAgtAtQgpAqAAApIAAATIhiAAIAAgTQAAgmATgmQAPgeAagaQBLhKCdAAQCSgBA8A9QAxAwAAA1QAAAsgXAjQgaAlgxAWQhLAhghAbQgTAPAAAZIAAAfg");
	this.shape_1.setTransform(727.9,-315.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABYGvIAAiDIjRAAIAAhHIDRAAIAAg4IjvAAIAAg8ICZAAIghhPIh4AAIAAg7IDvAAIAAhAIjGAAIAAg8IDGAAIAAhAIhzAAIhpAAIAAjGIIEAAIAADGIjdAAIAABAIDSAAIAAA8IjSAAIAABAIEOAAIAAA7IiOAAIgtBPIClAAIAAA8Ij4AAIAAA4IDhAAIAABHIjhAAIAACDgABJBxIBlAAIAmhPIilAAgADnkRIBaAAIAAhOIhaAAgABUkRIBTAAIAAhOIhTAAgAhEkRIBZAAIAAhOIhZAAgAlwGoIgIhHIA1AAQAPAAAAgPIAAjwIhLAaQgEAlgTghIgahPIB8giIAAjCIhxAAIAAhHIBxAAIAAi0IBHAAQAeAEgaASIAACeIBSAAIAABHIhSAAIAAClIA0gPIAABOIg0APIAAEsQAAA8gxAAg");
	this.shape_2.setTransform(632.8,-316);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Am7FQICDhLIAAj4IhtAAIAAhGIC4AAIAAEyQA0BPCWAAIHfAAIgTBHInxAAQh/AAhIhaIh4BxgAixDnQB0gqBDg0IApA4QALAXgagIQg/AxhtAlgACgDBIAtg4QBZA8BiAWIgaBIQhtgbhhhHgAjECFIAAg8IClAAIAAhRIiDAAIAAg8ICDAAIAAg8IhOAAQhAAAAAhAIAAh4ICzAAIAAgxIiwAAIAAg8IDwAAIAACpIizAAIAAApQgBAXAXAAIBdAAQAWAAAHgqIBAAIQgLBag4AEIAAA8ICKAAIAAg8QgsgIgBgxIAAh/IC8AAIAAgxIjDAAIAAg8IEDAAIAACpIi8AAIAAApQAAAXAXAAIBlAAQAWAAAIgtIBEALQgIBehHAAIhiAAIAAA8IB8AAIAAA8Ih8AAIAABRICtAAIAAA8gAAgBJICKAAIAAhRIiKAAgAmLleIA9g8QBGAxA1BLIhAA8QgxhDhHg5g");
	this.shape_3.setTransform(536.5,-315.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ak0GrIAAnpQgiA7gtA0Ig1hCQCPibAij/IBSAUQATAHgeASQgLBQgqBzIATAIQAXAHgfAPIAAJIgADBGdIgPhTIBHAAQAXAEgEgWIAApXImqAAIAAhIIJWAAIAABIIhhAAIAAJ/QAAA9g8AAgAiED8IAAmNIEnAAIAAFnIhLAAIAAgPIiRAAIAAA1gAg5B/ICRAAIAAjJIiRAAg");
	this.shape_4.setTransform(440.5,-316.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AmOFTQC4g/AwhXQg0ghg1gTIgTA0IhHgWQA8ioAiisIhtAAIAAhIIB8AAIAaioIBSAPQAPAPgaADIgaCHIBpAAIAPgPIAtAmQAWATgdADIAAA8QAADCgtBtQA0AeAwAtIgpBAQgsgpgpgeQhABpjLBOgAj4BNQA4ATA8AhQAmhlgFigIAAgpIhdAAQgeCSgaBogABFGEIAAqmIFLAAIAAKXIhMAAIAAhAIi0AAIAABPgACQDuIC0AAIAAnIIi0AAg");
	this.shape_5.setTransform(343.7,-316.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhXFjQEch1CZkcIA5AtQAPAVgbAAQg0BfhDBKQBSA9BEBVIhABPQg1hehWhLQheBei6BegAmDGmIAAkwIEVAAIAAEdIg/AAIAAgXIiXAAIAAAqgAlEFBICXAAIAAiPIiXAAgAhECnQBJgeBQhDQhEhEhKg4IA1g0IAcAXQAxhEAig8IiZAAIAAhHICrAAIAAiWIBIAAQAeADgaAUIAAB/IDSAAIAABHIjaAAQgwBXhEBOQAiAeAeAdQAxglBOh/IA4AtQAQAWgbgDQhlC2jrCLgAl4A2IAAhGID/AAIAABGgAl4hMIAAhHID/AAIAABHgAmpjPIAAhIIFOAAIAABIgAl4lTIAAhGID/AAIAABGg");
	this.shape_6.setTransform(249.2,-316.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ah3GIIgThTIBWAAQAPAAAAgPIAAj/ImCAAIAAhRIGCAAIAAipIBHALQBOgwA8g8InuAAIAAhIIIjAAIAPgLIBHBHIgWAMQiHB4hpA8IAABWIF3AAIAABRIl3AAIAAElQAAA8g7AAg");
	this.shape_7.setTransform(153,-315.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiqGEQBThAAAhaIAAi3IDcAAIgEhOIjJAAIAAjDIBkAAIAAg8IiNAAIAAg8ICNAAIAAhiIA8AAQAeAEgaATIAABLIBtAAIAAhiIA8AAQAeAEgbATIAABLICiAAIAAA8IiiAAIAAA8IB8AAIAADDIhWAAQAeAPAiAdIgiAiIBtAAIAAA8IjwAAQAHA8AmBHQAwgxAig4IAxAeQApAagtAAQgpAxgpAtQAhAlAqAAQAWAAAIhDIA4AWIgIAxQgLBLgiAAQhOAAhXhLQg8AxhsAxIgeg8QBlgiA8g1QgxhdgHhLIikAAIAABWICYAAIAAA8IiYAAQAABlhtBTgADBAzICAAAQgigegpgWIAhgaIhaAAgAD9hXIBHAAIAAhLIhHAAgAB6hXIBPAAIAAhLIhPAAgAgIhXIBNAAIAAhLIhNAAgABcjeIBtAAIAAg8IhtAAgAk4GqIAAmVQg4A4gxApIgihAQCahrBSiWIjOAAIAAhIIBtAAIAAilIBLAAQAWAEgWATIAACOIA8AAIALgPIA1AqQAaASgiAEQg0BPhABaIAABCIAPAIIBLhoIAtAeQAWAPgeAEIhHBRQApAaAiAiIgpA1QgtgtgtgeIAAFZg");
	this.shape_8.setTransform(56.8,-315.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Al/GiIAAtDIFOAAIAAFZIhMAAIAAgTIi4AAIAAH9gAk1iXIC4AAIAAhLIi4AAgAk1keIC4AAIAAhHIi4AAgADyGXIgThHIBLAAQAMAAAAgMIAAmfIjAAAIAAAXIhLAAIAAldIFVAAIAAL4QABBAg9AAgAB2iXIDAAAIAAhLIjAAAgAB2keIDAAAIAAhHIjAAAgAixFMIAAlNIFjAAIAAE2IhAAAIAAgeIjjAAIAAA1gAhxDbIDjAAIAAihIjjAAg");
	this.shape_9.setTransform(-38.8,-315.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AmNGxIAAkwIEHAAIAAEhIhAAAIAAgeIiHAAIAAAtgAlNFIICHAAIAAiKIiHAAgADtGpIgQg8IA4AAQAPAAAAgOIAAhMIkGAAIAACWIg+AAIAAmxIGEAAIAAGBQAAAxgwgBgAAeDYIEGAAIAAg1IkGAAgAAeBnIEGAAIAAg1IkGAAgAl+BBIAAhGIDlAAIAABGgAhog1IAAg9IDgAAIAAg8IikAAIAAg7ICkAAIAAg9IjFAAIAAg8IDFAAIAAhOIA8AAQAeADgaATIAAA4IDWAAIAAA8IjWAAIAAA9ICpAAIAAA7IipAAIAAA8IDzAAIAAA9gAl+hFIAAhHIDlAAIAABHgAmrjMIAAhHIE/AAIAABHgAl+lLIAAhHIDlAAIAABHg");
	this.shape_10.setTransform(-135,-316.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-829.1,-375.3,1658.2,750.6);


(lib.補間動畫33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsFDIAAhtIBoAAIAABtgAghBtIAAg4QAAg1AlgWQBSgwAxgXQApgXAAgpQAAgdgWgXQgigihlAAQhsAAgtAtQgpApAAAqIAAASIhiAAIAAgSQAAgmATglQAPgfAagaQBLhKCdgBQCSAAA8A9QAxAwAAA1QAAAsgXAjQgaAlgxAWQhLAhghAaQgTAQAAAaIAAAeg");
	this.shape.setTransform(-537.6,108.3);

	this.instance = new lib._8腳部();
	this.instance.parent = this;
	this.instance.setTransform(-829.1,-218.6,0.452,0.452);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsFDIAAhuIBoAAIAABugAghBtIAAg4QAAg1AlgWQBSgxAxgWQApgXAAgpQAAgdgWgXQgigihlAAQhsAAgtAtQgpAqAAApIAAATIhiAAIAAgTQAAgmATgmQAPgeAagaQBLhKCdAAQCSgBA8A9QAxAwAAA1QAAAsgXAjQgaAlgxAWQhLAhghAbQgTAPAAAZIAAAfg");
	this.shape_1.setTransform(727.9,-315.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABYGvIAAiDIjRAAIAAhHIDRAAIAAg4IjvAAIAAg8ICZAAIghhPIh4AAIAAg7IDvAAIAAhAIjGAAIAAg8IDGAAIAAhAIhzAAIhpAAIAAjGIIEAAIAADGIjdAAIAABAIDSAAIAAA8IjSAAIAABAIEOAAIAAA7IiOAAIgtBPIClAAIAAA8Ij4AAIAAA4IDhAAIAABHIjhAAIAACDgABJBxIBlAAIAmhPIilAAgADnkRIBaAAIAAhOIhaAAgABUkRIBTAAIAAhOIhTAAgAhEkRIBZAAIAAhOIhZAAgAlwGoIgIhHIA1AAQAPAAAAgPIAAjwIhLAaQgEAlgTghIgahPIB8giIAAjCIhxAAIAAhHIBxAAIAAi0IBHAAQAeAEgaASIAACeIBSAAIAABHIhSAAIAAClIA0gPIAABOIg0APIAAEsQAAA8gxAAg");
	this.shape_2.setTransform(632.8,-316);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Am7FQICDhLIAAj4IhtAAIAAhGIC4AAIAAEyQA0BPCWAAIHfAAIgTBHInxAAQh/AAhIhaIh4BxgAixDnQB0gqBDg0IApA4QALAXgagIQg/AxhtAlgACgDBIAtg4QBZA8BiAWIgaBIQhtgbhhhHgAjECFIAAg8IClAAIAAhRIiDAAIAAg8ICDAAIAAg8IhOAAQhAAAAAhAIAAh4ICzAAIAAgxIiwAAIAAg8IDwAAIAACpIizAAIAAApQgBAXAXAAIBdAAQAWAAAHgqIBAAIQgLBag4AEIAAA8ICKAAIAAg8QgsgIgBgxIAAh/IC8AAIAAgxIjDAAIAAg8IEDAAIAACpIi8AAIAAApQAAAXAXAAIBlAAQAWAAAIgtIBEALQgIBehHAAIhiAAIAAA8IB8AAIAAA8Ih8AAIAABRICtAAIAAA8gAAgBJICKAAIAAhRIiKAAgAmLleIA9g8QBGAxA1BLIhAA8QgxhDhHg5g");
	this.shape_3.setTransform(536.5,-315.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ak0GrIAAnpQgiA7gtA0Ig1hCQCPibAij/IBSAUQATAHgeASQgLBQgqBzIATAIQAXAHgfAPIAAJIgADBGdIgPhTIBHAAQAXAEgEgWIAApXImqAAIAAhIIJWAAIAABIIhhAAIAAJ/QAAA9g8AAgAiED8IAAmNIEnAAIAAFnIhLAAIAAgPIiRAAIAAA1gAg5B/ICRAAIAAjJIiRAAg");
	this.shape_4.setTransform(440.5,-316.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AmOFTQC4g/AwhXQg0ghg1gTIgTA0IhHgWQA8ioAiisIhtAAIAAhIIB8AAIAaioIBSAPQAPAPgaADIgaCHIBpAAIAPgPIAtAmQAWATgdADIAAA8QAADCgtBtQA0AeAwAtIgpBAQgsgpgpgeQhABpjLBOgAj4BNQA4ATA8AhQAmhlgFigIAAgpIhdAAQgeCSgaBogABFGEIAAqmIFLAAIAAKXIhMAAIAAhAIi0AAIAABPgACQDuIC0AAIAAnIIi0AAg");
	this.shape_5.setTransform(343.7,-316.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhXFjQEch1CZkcIA5AtQAPAVgbAAQg0BfhDBKQBSA9BEBVIhABPQg1hehWhLQheBei6BegAmDGmIAAkwIEVAAIAAEdIg/AAIAAgXIiXAAIAAAqgAlEFBICXAAIAAiPIiXAAgAhECnQBJgeBQhDQhEhEhKg4IA1g0IAcAXQAxhEAig8IiZAAIAAhHICrAAIAAiWIBIAAQAeADgaAUIAAB/IDSAAIAABHIjaAAQgwBXhEBOQAiAeAeAdQAxglBOh/IA4AtQAQAWgbgDQhlC2jrCLgAl4A2IAAhGID/AAIAABGgAl4hMIAAhHID/AAIAABHgAmpjPIAAhIIFOAAIAABIgAl4lTIAAhGID/AAIAABGg");
	this.shape_6.setTransform(249.2,-316.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ah3GIIgThTIBWAAQAPAAAAgPIAAj/ImCAAIAAhRIGCAAIAAipIBHALQBOgwA8g8InuAAIAAhIIIjAAIAPgLIBHBHIgWAMQiHB4hpA8IAABWIF3AAIAABRIl3AAIAAElQAAA8g7AAg");
	this.shape_7.setTransform(153,-315.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiqGEQBThAAAhaIAAi3IDcAAIgEhOIjJAAIAAjDIBkAAIAAg8IiNAAIAAg8ICNAAIAAhiIA8AAQAeAEgaATIAABLIBtAAIAAhiIA8AAQAeAEgbATIAABLICiAAIAAA8IiiAAIAAA8IB8AAIAADDIhWAAQAeAPAiAdIgiAiIBtAAIAAA8IjwAAQAHA8AmBHQAwgxAig4IAxAeQApAagtAAQgpAxgpAtQAhAlAqAAQAWAAAIhDIA4AWIgIAxQgLBLgiAAQhOAAhXhLQg8AxhsAxIgeg8QBlgiA8g1QgxhdgHhLIikAAIAABWICYAAIAAA8IiYAAQAABlhtBTgADBAzICAAAQgigegpgWIAhgaIhaAAgAD9hXIBHAAIAAhLIhHAAgAB6hXIBPAAIAAhLIhPAAgAgIhXIBNAAIAAhLIhNAAgABcjeIBtAAIAAg8IhtAAgAk4GqIAAmVQg4A4gxApIgihAQCahrBSiWIjOAAIAAhIIBtAAIAAilIBLAAQAWAEgWATIAACOIA8AAIALgPIA1AqQAaASgiAEQg0BPhABaIAABCIAPAIIBLhoIAtAeQAWAPgeAEIhHBRQApAaAiAiIgpA1QgtgtgtgeIAAFZg");
	this.shape_8.setTransform(56.8,-315.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Al/GiIAAtDIFOAAIAAFZIhMAAIAAgTIi4AAIAAH9gAk1iXIC4AAIAAhLIi4AAgAk1keIC4AAIAAhHIi4AAgADyGXIgThHIBLAAQAMAAAAgMIAAmfIjAAAIAAAXIhLAAIAAldIFVAAIAAL4QABBAg9AAgAB2iXIDAAAIAAhLIjAAAgAB2keIDAAAIAAhHIjAAAgAixFMIAAlNIFjAAIAAE2IhAAAIAAgeIjjAAIAAA1gAhxDbIDjAAIAAihIjjAAg");
	this.shape_9.setTransform(-38.8,-315.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AmNGxIAAkwIEHAAIAAEhIhAAAIAAgeIiHAAIAAAtgAlNFIICHAAIAAiKIiHAAgADtGpIgQg8IA4AAQAPAAAAgOIAAhMIkGAAIAACWIg+AAIAAmxIGEAAIAAGBQAAAxgwgBgAAeDYIEGAAIAAg1IkGAAgAAeBnIEGAAIAAg1IkGAAgAl+BBIAAhGIDlAAIAABGgAhog1IAAg9IDgAAIAAg8IikAAIAAg7ICkAAIAAg9IjFAAIAAg8IDFAAIAAhOIA8AAQAeADgaATIAAA4IDWAAIAAA8IjWAAIAAA9ICpAAIAAA7IipAAIAAA8IDzAAIAAA9gAl+hFIAAhHIDlAAIAABHgAmrjMIAAhHIE/AAIAABHgAl+lLIAAhHIDlAAIAABHg");
	this.shape_10.setTransform(-135,-316.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-829.1,-375.3,1658.2,750.6);


(lib.補間動畫30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.lighteeee();
	this.instance.parent = this;
	this.instance.setTransform(-250.3,-435.8,0.795,0.795);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.3,-435.8,500.7,871.8);


(lib.補間動畫29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.lighteeee();
	this.instance.parent = this;
	this.instance.setTransform(-250.3,-435.8,0.795,0.795);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.3,-435.8,500.7,871.8);


(lib.補間動畫16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖2();
	this.instance.parent = this;
	this.instance.setTransform(-221.3,-186.6,1.051,0.906);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221.3,-186.6,442.6,373.2);


(lib.補間動畫15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖2();
	this.instance.parent = this;
	this.instance.setTransform(-210.5,-206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.5,-206,421,412);


(lib.補間動畫12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖1();
	this.instance.parent = this;
	this.instance.setTransform(-159,-147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-147,318,294);


(lib.補間動畫11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖1();
	this.instance.parent = this;
	this.instance.setTransform(-159,-147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-147,318,294);


(lib.補間動畫10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.CSpng複製();
	this.instance.parent = this;
	this.instance.setTransform(-135.6,-99.5,0.381,0.381);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.6,-99.5,271.2,199.1);


(lib.補間動畫9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.CSpng複製();
	this.instance.parent = this;
	this.instance.setTransform(-135.6,-99.5,0.381,0.381);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.6,-99.5,271.2,199.1);


(lib.補間動畫6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.vdgvwegfwe();
	this.instance.parent = this;
	this.instance.setTransform(-40,-80,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-80,80,160);


(lib.補間動畫5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.vdgvwegfwe();
	this.instance.parent = this;
	this.instance.setTransform(-40,-80,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-80,80,160);


(lib.元件51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.洞察();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.781,0.781);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156.3,156.3);


(lib.元件50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.首頁t();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181,181);


(lib.元件49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.feffewewfewf();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.324,1.324);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1678.1,694);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.wewewew();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.31,1.31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1659.9,686.5);


(lib.元件47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.cfewefw();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.541,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,323.6,442);


(lib.元件46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.glass();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.739,0.739);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,432.3,215.1);


(lib.元件45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.fdsdwqdeqwe();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1267,524);


(lib.元件44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ddqwfdq();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.371,1.371);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1736.9,718.3);


(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m3white200();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.055,1.055);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,416.8,270.1);


(lib.元件42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._64c72a58ac604359b2b1549f814af779();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,355,355);


(lib.元件41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg5QANpIAA7RMByhAAAIAAbRg");
	this.shape.setTransform(366.5,87.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件41, new cjs.Rectangle(0,0,733.1,174.6), null);


(lib.元件40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._9袖口();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.256,0.256);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,342.1,417.3);


(lib.元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.sio();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.058,1.307);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,440.1,314.9);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.gfgfgfgffg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.358,1.358);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1721.1,711.8);


(lib.元件37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mnmnm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1267,525);


(lib.元件36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.hregr();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1267,524);


(lib.元件35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.vfvfgnbbbbb();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.388,1.388);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1758.6,727.3);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.dher();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,324,388);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.nnnnn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,355,506);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.babe();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.342,1.342);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1700.5,703.3);


(lib.元件31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.zzzz();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1267,524);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.white();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.665,0.665);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,301.3,607.2);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.RJ0001();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.643,0.643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,643,643);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.saasa();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.397,0.397);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,503.3,208.2);


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.dwcdcw();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.824,0.824);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件27, new cjs.Rectangle(0,0,545.6,603.3), null);


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.答對囉清爽的髮型能給人舒適專業的印象();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.925,0.925);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件26, new cjs.Rectangle(0,0,1172.5,484.9), null);


(lib.元件25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.我準備好了();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.437,0.437);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,401.5,113.2);


(lib.元件23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圖層1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.481,0.554);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318.3,293.6);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.dw();
	this.instance.parent = this;
	this.instance.setTransform(0,50.4,0.713,0.66,-7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,421.5,412.2);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._500();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.706,1.706);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件21, new cjs.Rectangle(0,0,1212.9,890.5), null);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提點按鈕png複製4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.關閉按鈕png複製5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提點按鈕png複製3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.關閉按鈕png複製4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提點按鈕png複製2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.關閉按鈕png複製3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.關閉按鈕png複製2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提點按鈕png複製();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提點按鈕();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.關閉按鈕png複製();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.元件9複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manbt6up();
	this.instance.parent = this;

	this.instance_1 = new lib.manbt6pass();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,69);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manbt6up();
	this.instance.parent = this;

	this.instance_1 = new lib.manbt6pass();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,69);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manbt5up();
	this.instance.parent = this;

	this.instance_1 = new lib.manbt5pass();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,69);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manbt4up();
	this.instance.parent = this;

	this.instance_1 = new lib.manbt4pass();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,69);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manbt3up();
	this.instance.parent = this;

	this.instance_1 = new lib.manbt3pass();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,69);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manbt2up();
	this.instance.parent = this;

	this.instance_1 = new lib.manbt2pass();
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
	this.instance = new lib.manbt1up();
	this.instance.parent = this;

	this.instance_1 = new lib.manbt1pass();
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
	this.instance = new lib.課程地圖_0001s_0000_女生服裝();
	this.instance.parent = this;
	this.instance.setTransform(-110,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-27,220,55);


(lib.chp21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.男生服裝();
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


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.TB145ToIFXXXXXQXFXXXXXXXXXX___0item_picjpg_400x400();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.667,1.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258.5,418.5);


(lib.補間動畫32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.ytjdhgr = new lib.元件43();
	this.ytjdhgr.parent = this;
	this.ytjdhgr.setTransform(0,-197.8,1,1,0,0,0,208.4,135.1);
	new cjs.ButtonHelper(this.ytjdhgr, 0, 1, 1);

	this.dwaesc = new lib.元件42();
	this.dwaesc.parent = this;
	this.dwaesc.setTransform(-14.9,155.6,1,1,0,0,0,177.5,177.5);
	new cjs.ButtonHelper(this.dwaesc, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dwaesc},{t:this.ytjdhgr}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.4,-332.9,416.8,666);


(lib.補間動畫31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.ytjdhgr = new lib.元件43();
	this.ytjdhgr.parent = this;
	this.ytjdhgr.setTransform(0,-197.8,1,1,0,0,0,208.4,135.1);
	new cjs.ButtonHelper(this.ytjdhgr, 0, 1, 1);

	this.dwaesc = new lib.元件42();
	this.dwaesc.parent = this;
	this.dwaesc.setTransform(-14.9,155.6,1,1,0,0,0,177.5,177.5);
	new cjs.ButtonHelper(this.dwaesc, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dwaesc},{t:this.ytjdhgr}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.4,-332.9,416.8,666);


(lib.補間動畫26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.bsfwer = new lib.元件34();
	this.bsfwer.parent = this;
	this.bsfwer.setTransform(228.8,0.2,1.329,1.329,0,0,0,162,194.1);
	new cjs.ButtonHelper(this.bsfwer, 0, 1, 1);

	this.myhbrhgbe = new lib.元件33();
	this.myhbrhgbe.parent = this;
	this.myhbrhgbe.setTransform(-266.6,4.9,1,1,0,0,0,177.5,253);
	new cjs.ButtonHelper(this.myhbrhgbe, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.myhbrhgbe},{t:this.bsfwer}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-444.1,-257.8,888.3,515.7);


(lib.補間動畫25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.bsfwer = new lib.元件34();
	this.bsfwer.parent = this;
	this.bsfwer.setTransform(228.8,0.2,1.329,1.329,0,0,0,162,194.1);
	new cjs.ButtonHelper(this.bsfwer, 0, 1, 1);

	this.myhbrhgbe = new lib.元件33();
	this.myhbrhgbe.parent = this;
	this.myhbrhgbe.setTransform(-266.6,4.9,1,1,0,0,0,177.5,253);
	new cjs.ButtonHelper(this.myhbrhgbe, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.myhbrhgbe},{t:this.bsfwer}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-444.1,-257.8,888.3,515.7);


(lib.補間動畫18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.vrevfregertgw = new lib.元件30();
	this.vrevfregertgw.parent = this;
	this.vrevfregertgw.setTransform(-290.9,-17.9,1,1,0,0,0,150.6,303.6);
	new cjs.ButtonHelper(this.vrevfregertgw, 0, 1, 1);

	this.instance = new lib.元件29();
	this.instance.parent = this;
	this.instance.setTransform(120,0,1,1,0,0,0,321.5,321.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.vrevfregertgw}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-441.5,-321.5,883,643);


(lib.補間動畫17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.vrevfregertgw = new lib.元件30();
	this.vrevfregertgw.parent = this;
	this.vrevfregertgw.setTransform(-290.9,-17.9,1,1,0,0,0,150.6,303.6);
	new cjs.ButtonHelper(this.vrevfregertgw, 0, 1, 1);

	this.instance = new lib.元件29();
	this.instance.parent = this;
	this.instance.setTransform(120,0,1,1,0,0,0,321.5,321.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.vrevfregertgw}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-441.5,-321.5,883,643);


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

	this.instance = new lib._4男全身右側();
	this.instance.parent = this;
	this.instance.setTransform(28,-342,0.388,0.388);

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

	this.instance_1 = new lib._3男全身後面();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11,-331,0.372,0.372);

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

	this.instance_2 = new lib._2男全身左側();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42,-333,0.377,0.377);

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

	this.instance_3 = new lib.可以嗎();
	this.instance_3.parent = this;
	this.instance_3.setTransform(23,-331,0.407,0.407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.nbvc},{t:this.asdfgh}]}).to({state:[]},1).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.7,-331,444.1,573.7);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(40,80);

	this.instance_1 = new lib.補間動畫6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(40,107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance_1}]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:105.3},15).to({_off:true,y:107},1).wait(5));

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
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.home.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("contents.html", "_self");
		}
		
		
		
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
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_20.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_20()
		{
			this.gotoAndPlay(290);
		}
		
		
		
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.test.addEventListener("click", fl_ClickToGoToAndStopAtFrame_23.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_23()
		{
			this.gotoAndStop(319);
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
	}
	this.frame_319 = function() {
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
		
		this.feffewrqw.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_22.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_22()
		{
			this.gotoAndPlay(320);
		}
	}
	this.frame_334 = function() {
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
		
		
		this.vssw.addEventListener("click", fl_ClickToGoToAndStopAtFrame_20.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_20()
		{
			this.gotoAndStop(335);
		}
	}
	this.frame_335 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.dwdewrfwfqwe.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_23.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_23()
		{
			this.gotoAndPlay(336);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.fgv.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_25.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_25()
		{
			this.gotoAndPlay(385);
		}
	}
	this.frame_380 = function() {
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
		
		
		this.agrhrehehertewrw.addEventListener("click", fl_ClickToGoToAndStopAtFrame_25.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_25()
		{
			this.gotoAndStop(437);
		}
	}
	this.frame_436 = function() {
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
		
		
		this.jujyj.addEventListener("click", fl_ClickToGoToAndStopAtFrame_24.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_24()
		{
			this.gotoAndStop(335);
		}
	}
	this.frame_437 = function() {
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
		
		this.vrevfregertgw.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_28.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_28()
		{
			this.gotoAndPlay(438);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.kjhtgfrdcs.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_30.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_30()
		{
			this.gotoAndPlay(486);
		}
	}
	this.frame_467 = function() {
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
		
		this.kghnbf.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_29.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_29()
		{
			this.gotoAndPlay(527);
		}
	}
	this.frame_526 = function() {
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
		
		
		this.gregegergwg.addEventListener("click", fl_ClickToGoToAndStopAtFrame_26.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_26()
		{
			this.gotoAndStop(437);
		}
	}
	this.frame_545 = function() {
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
		
		this.myhbrhgbe.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_31.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_31()
		{
			this.gotoAndPlay(546);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.bsfwer.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_32.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_32()
		{
			this.gotoAndPlay(580);
		}
	}
	this.frame_579 = function() {
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
		
		
		this.gghgfhghh.addEventListener("click", fl_ClickToGoToAndStopAtFrame_27.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_27()
		{
			this.gotoAndStop(545);
		}
	}
	this.frame_613 = function() {
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
		
		this.kjkjjktjher.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_33.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_33()
		{
			this.gotoAndPlay(614);
		}
	}
	this.frame_640 = function() {
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
		
		this.vcxvc.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_35.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_35()
		{
			this.gotoAndPlay(641);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.jhjhjrthtd.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_36.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_36()
		{
			this.gotoAndPlay(677);
		}
	}
	this.frame_676 = function() {
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
		
		
		this.cvb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_28.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_28()
		{
			this.gotoAndStop(640);
		}
	}
	this.frame_709 = function() {
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
		
		this.jhgjhjg.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_34.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_34()
		{
			this.gotoAndPlay(710);
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
		
		this.dwaesc.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_38.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_38()
		{
			this.gotoAndPlay(804);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.ytjdhgr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_39.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_39()
		{
			this.gotoAndPlay(770);
		}
	}
	this.frame_803 = function() {
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
		
		
		this.gergregergwfrqw.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(769);
		}
	}
	this.frame_836 = function() {
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
		
		this.hgdfgwerwdwsfwetwe.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_40.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_40()
		{
			this.gotoAndPlay(837);
		}
	}
	this.frame_854 = function() {
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
		
		this.fewfewfe.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_42.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_42()
		{
			this.gotoAndPlay(855);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.ipoiulokm.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_43.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_43()
		{
			this.gotoAndPlay(855);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.gsdefcew.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_45.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_45()
		{
			this.gotoAndPlay(888);
		}
	}
	this.frame_887 = function() {
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
		
		
		this.trhrthrth.addEventListener("click", fl_ClickToGoToAndStopAtFrame_30.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_30()
		{
			this.gotoAndStop(854);
		}
	}
	this.frame_919 = function() {
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
		
		this.gewrw.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_44.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_44()
		{
			this.gotoAndPlay(920);
		}
	}
	this.frame_934 = function() {
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
		
		this.htyrhrthrhrhetg.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("https://nini0601.github.io/contents/", "_self");
		}
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.gsdfgvdsfew.addEventListener("click", fl_ClickToGoToAndStopAtFrame_31.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_31()
		{
			this.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(12).call(this.frame_61).wait(8).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(22).call(this.frame_111).wait(13).call(this.frame_124).wait(10).call(this.frame_134).wait(10).call(this.frame_144).wait(17).call(this.frame_161).wait(13).call(this.frame_174).wait(10).call(this.frame_184).wait(27).call(this.frame_211).wait(13).call(this.frame_224).wait(10).call(this.frame_234).wait(10).call(this.frame_244).wait(17).call(this.frame_261).wait(13).call(this.frame_274).wait(10).call(this.frame_284).wait(10).call(this.frame_294).wait(25).call(this.frame_319).wait(15).call(this.frame_334).wait(1).call(this.frame_335).wait(45).call(this.frame_380).wait(56).call(this.frame_436).wait(1).call(this.frame_437).wait(30).call(this.frame_467).wait(59).call(this.frame_526).wait(19).call(this.frame_545).wait(34).call(this.frame_579).wait(34).call(this.frame_613).wait(27).call(this.frame_640).wait(36).call(this.frame_676).wait(33).call(this.frame_709).wait(60).call(this.frame_769).wait(34).call(this.frame_803).wait(33).call(this.frame_836).wait(18).call(this.frame_854).wait(33).call(this.frame_887).wait(32).call(this.frame_919).wait(15).call(this.frame_934).wait(456));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.hint},{t:this.local}]}).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},49).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},12).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},8).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},22).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},13).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},17).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},13).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},3).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},24).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},13).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},17).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},13).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},10).to({state:[]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},34).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},15).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},45).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},37).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},19).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},30).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},59).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},19).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},26).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},8).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},34).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},27).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},36).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},33).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},60).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},34).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},33).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},18).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},33).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},32).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},15).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},455).wait(1));

	// 圖層 31
	this.instance = new lib.補間動畫35("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(984.9,601.5);
	this.instance.alpha = 0.23;
	this.instance._off = true;

	this.instance_1 = new lib.補間動畫36("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(984.9,601.5);

	this.gsdfgvdsfew = new lib.元件51();
	this.gsdfgvdsfew.parent = this;
	this.gsdfgvdsfew.setTransform(1378.2,771.2,1,1,0,0,0,78.2,78.2);
	new cjs.ButtonHelper(this.gsdfgvdsfew, 0, 1, 1);

	this.htyrhrthrhrhetg = new lib.元件50();
	this.htyrhrthrhrhetg.parent = this;
	this.htyrhrthrhrhetg.setTransform(1569.5,602.5,1,1,0,0,0,90.5,90.5);
	new cjs.ButtonHelper(this.htyrhrthrhrhetg, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},920).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_1},{t:this.htyrhrthrhrhetg},{t:this.gsdfgvdsfew}]},1).wait(456));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(920).to({_off:false},0).to({_off:true,alpha:1},13).wait(457));

	// 答錯顯示
	this.jujyj = new lib.元件28();
	this.jujyj.parent = this;
	this.jujyj.setTransform(960.7,542.1,1,1,0,0,0,251.7,104.1);
	this.jujyj._off = true;
	new cjs.ButtonHelper(this.jujyj, 0, 1, 1);

	this.gregegergwg = new lib.元件32();
	this.gregegergwg.parent = this;
	this.gregegergwg.setTransform(956.3,601.7,0.27,0.27,0,0,0,850.3,351.7);
	this.gregegergwg._off = true;
	new cjs.ButtonHelper(this.gregegergwg, 0, 1, 1);

	this.gghgfhghh = new lib.元件35();
	this.gghgfhghh.parent = this;
	this.gghgfhghh.setTransform(960.4,540.7,0.182,0.182,0,0,0,879.4,363.7);
	this.gghgfhghh._off = true;
	new cjs.ButtonHelper(this.gghgfhghh, 0, 1, 1);

	this.cvb = new lib.元件37();
	this.cvb.parent = this;
	this.cvb.setTransform(971.2,606.9,0.3,0.3,0,0,0,634.2,262.9);
	this.cvb._off = true;
	new cjs.ButtonHelper(this.cvb, 0, 1, 1);

	this.gergregergwfrqw = new lib.元件44();
	this.gergregergwfrqw.parent = this;
	this.gergregergwfrqw.setTransform(953.4,580.2,0.338,0.338,0,0,0,868.4,359.2);
	this.gergregergwfrqw._off = true;
	new cjs.ButtonHelper(this.gergregergwfrqw, 0, 1, 1);

	this.trhrthrth = new lib.元件48();
	this.trhrthrth.parent = this;
	this.trhrthrth.setTransform(961,564.3,0.381,0.381,0,0,0,830,343.3);
	this.trhrthrth._off = true;
	new cjs.ButtonHelper(this.trhrthrth, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.jujyj).wait(429).to({_off:false},0).to({regX:251.8,scaleX:3.32,scaleY:3.32,x:956.7,y:626.7},7).to({_off:true},1).wait(953));
	this.timeline.addTween(cjs.Tween.get(this.gregegergwg).wait(519).to({_off:false},0).to({scaleX:1,scaleY:1},7).to({_off:true},1).wait(863));
	this.timeline.addTween(cjs.Tween.get(this.gghgfhghh).wait(571).to({_off:false},0).to({regX:879.3,scaleX:1,scaleY:1,x:960.3},8).to({_off:true},1).wait(810));
	this.timeline.addTween(cjs.Tween.get(this.cvb).wait(668).to({_off:false},0).to({regX:633.6,regY:262.5,scaleX:1.32,scaleY:1.32,x:971,y:606.8},8).to({_off:true},1).wait(713));
	this.timeline.addTween(cjs.Tween.get(this.gergregergwfrqw).wait(795).to({_off:false},0).to({scaleX:1,scaleY:1},8).to({_off:true},1).wait(586));
	this.timeline.addTween(cjs.Tween.get(this.trhrthrth).wait(880).to({_off:false},0).to({scaleX:1,scaleY:1},7).to({_off:true},1).wait(502));

	// 答對顯示
	this.agrhrehehertewrw = new lib.元件26();
	this.agrhrehehertewrw.parent = this;
	this.agrhrehehertewrw.setTransform(1007,633.2,0.368,0.368,0,0,0,695,351.2);
	this.agrhrehehertewrw._off = true;
	new cjs.ButtonHelper(this.agrhrehehertewrw, 0, 1, 1);

	this.kghnbf = new lib.元件31();
	this.kghnbf.parent = this;
	this.kghnbf.setTransform(990.7,599.3,0.388,0.388,0,0,0,633.5,262.1);
	this.kghnbf._off = true;
	new cjs.ButtonHelper(this.kghnbf, 0, 1, 1);

	this.kjkjjktjher = new lib.元件36();
	this.kjkjjktjher.parent = this;
	this.kjkjjktjher.setTransform(960.6,606.2,0.323,0.323,0,0,0,633.6,262.1);
	this.kjkjjktjher._off = true;
	new cjs.ButtonHelper(this.kjkjjktjher, 0, 1, 1);

	this.jhgjhjg = new lib.元件38();
	this.jhgjhjg.parent = this;
	this.jhgjhjg.setTransform(960.6,575,0.368,0.368,0,0,0,860.7,356);
	this.jhgjhjg._off = true;
	new cjs.ButtonHelper(this.jhgjhjg, 0, 1, 1);

	this.hgdfgwerwdwsfwetwe = new lib.元件45();
	this.hgdfgwerwdwsfwetwe.parent = this;
	this.hgdfgwerwdwsfwetwe.setTransform(961.6,603.4,0.445,0.445,0,0,0,633.5,262.1);
	this.hgdfgwerwdwsfwetwe._off = true;
	new cjs.ButtonHelper(this.hgdfgwerwdwsfwetwe, 0, 1, 1);

	this.gewrw = new lib.元件49();
	this.gewrw.parent = this;
	this.gewrw.setTransform(961.1,590,0.316,0.316,0,0,0,839.1,346.9);
	this.gewrw._off = true;
	new cjs.ButtonHelper(this.gewrw, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.agrhrehehertewrw).wait(374).to({_off:false},0).to({scaleX:1.48,scaleY:1.48,x:1114.9,y:758.8},6).to({regX:694.9,regY:351.7,scaleX:0.04,scaleY:0.04,x:1007,y:633.2,alpha:0.961},4).to({_off:true},1).wait(1005));
	this.timeline.addTween(cjs.Tween.get(this.kghnbf).wait(459).to({_off:false},0).to({scaleX:1.33,scaleY:1.33,y:599.4},8).to({regX:632.9,regY:262.3,scaleX:0.04,scaleY:0.04},8).to({_off:true},1).wait(914));
	this.timeline.addTween(cjs.Tween.get(this.kjkjjktjher).wait(605).to({_off:false},0).to({scaleX:1.36,scaleY:1.36,x:960.7},8).to({regX:633.7,regY:262.7,scaleX:0.04,scaleY:0.04,y:606.3},8).to({_off:true},1).wait(768));
	this.timeline.addTween(cjs.Tween.get(this.jhgjhjg).wait(702).to({_off:false},0).to({regX:860.6,regY:355.9,scaleX:1,scaleY:1,y:574.9},7).to({regY:355.8,scaleX:0.02,scaleY:0.02},7).to({_off:true},1).wait(673));
	this.timeline.addTween(cjs.Tween.get(this.hgdfgwerwdwsfwetwe).wait(829).to({_off:false},0).to({scaleX:1.35,scaleY:1.35,x:961.5},7).to({regX:633.9,regY:262,scaleX:0.06,scaleY:0.06,x:961.6},7).to({_off:true},1).wait(546));
	this.timeline.addTween(cjs.Tween.get(this.gewrw).wait(913).to({_off:false},0).to({regX:839,regY:347,scaleX:1,scaleY:1,x:961},6).to({_off:true},1).wait(470));

	// 圖層 14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_358 = new cjs.Graphics().p("EAQsBJGMAAAhhqMAjCAAAMAAABhqg");
	var mask_graphics_359 = new cjs.Graphics().p("EAHABJGMAAAhhqMA2aAAAMAAABhqg");
	var mask_graphics_360 = new cjs.Graphics().p("EgCrBJGMAAAhhqMBJxAAAMAAABhqg");
	var mask_graphics_361 = new cjs.Graphics().p("EgMWBJGMAAAhhqMBdHAAAMAAABhqg");
	var mask_graphics_362 = new cjs.Graphics().p("EgWCBJGMAAAhhqMBwfAAAMAAABhqg");
	var mask_graphics_363 = new cjs.Graphics().p("EgfuBJGMAAAhhqMCD3AAAMAAABhqg");
	var mask_graphics_364 = new cjs.Graphics().p("EgpaBJGMAAAhhqMCXPAAAMAAABhqg");
	var mask_graphics_441 = new cjs.Graphics().p("EAQsBJGMAAAhhqMAjCAAAMAAABhqg");
	var mask_graphics_442 = new cjs.Graphics().p("EAHABJGMAAAhhqMA2aAAAMAAABhqg");
	var mask_graphics_443 = new cjs.Graphics().p("EgCrBJGMAAAhhqMBJxAAAMAAABhqg");
	var mask_graphics_444 = new cjs.Graphics().p("EgMWBJGMAAAhhqMBdHAAAMAAABhqg");
	var mask_graphics_445 = new cjs.Graphics().p("EgWCBJGMAAAhhqMBwfAAAMAAABhqg");
	var mask_graphics_446 = new cjs.Graphics().p("EgfuBJGMAAAhhqMCD3AAAMAAABhqg");
	var mask_graphics_447 = new cjs.Graphics().p("EgpaBJGMAAAhhqMCXPAAAMAAABhqg");
	var mask_graphics_448 = new cjs.Graphics().p("EgpaBJGMAAAhhqMCXPAAAMAAABhqg");
	var mask_graphics_580 = new cjs.Graphics().p("EAQsBJGMAAAhhqMAjCAAAMAAABhqg");
	var mask_graphics_581 = new cjs.Graphics().p("EAHABJGMAAAhhqMA2aAAAMAAABhqg");
	var mask_graphics_582 = new cjs.Graphics().p("EgCrBJGMAAAhhqMBJxAAAMAAABhqg");
	var mask_graphics_583 = new cjs.Graphics().p("EgMWBJGMAAAhhqMBdHAAAMAAABhqg");
	var mask_graphics_584 = new cjs.Graphics().p("EgWCBJGMAAAhhqMBwfAAAMAAABhqg");
	var mask_graphics_585 = new cjs.Graphics().p("EgfuBJGMAAAhhqMCD3AAAMAAABhqg");
	var mask_graphics_586 = new cjs.Graphics().p("EgpaBJGMAAAhhqMCXPAAAMAAABhqg");
	var mask_graphics_677 = new cjs.Graphics().p("EAQsBJGMAAAhhqMAjCAAAMAAABhqg");
	var mask_graphics_678 = new cjs.Graphics().p("EAHABJGMAAAhhqMA2aAAAMAAABhqg");
	var mask_graphics_679 = new cjs.Graphics().p("EgCrBJGMAAAhhqMBJxAAAMAAABhqg");
	var mask_graphics_680 = new cjs.Graphics().p("EgMWBJGMAAAhhqMBdHAAAMAAABhqg");
	var mask_graphics_681 = new cjs.Graphics().p("EgWCBJGMAAAhhqMBwfAAAMAAABhqg");
	var mask_graphics_682 = new cjs.Graphics().p("EgfuBJGMAAAhhqMCD3AAAMAAABhqg");
	var mask_graphics_683 = new cjs.Graphics().p("EgpaBJGMAAAhhqMCXPAAAMAAABhqg");
	var mask_graphics_804 = new cjs.Graphics().p("EAQsBJGMAAAhhqMAjCAAAMAAABhqg");
	var mask_graphics_805 = new cjs.Graphics().p("EAHABJGMAAAhhqMA2aAAAMAAABhqg");
	var mask_graphics_806 = new cjs.Graphics().p("EgCrBJGMAAAhhqMBJxAAAMAAABhqg");
	var mask_graphics_807 = new cjs.Graphics().p("EgMWBJGMAAAhhqMBdHAAAMAAABhqg");
	var mask_graphics_808 = new cjs.Graphics().p("EgWCBJGMAAAhhqMBwfAAAMAAABhqg");
	var mask_graphics_809 = new cjs.Graphics().p("EgfuBJGMAAAhhqMCD3AAAMAAABhqg");
	var mask_graphics_810 = new cjs.Graphics().p("EgpaBJGMAAAhhqMCXPAAAMAAABhqg");
	var mask_graphics_888 = new cjs.Graphics().p("EAQsBJGMAAAhhqMAjCAAAMAAABhqg");
	var mask_graphics_889 = new cjs.Graphics().p("EAHABJGMAAAhhqMA2aAAAMAAABhqg");
	var mask_graphics_890 = new cjs.Graphics().p("EgCrBJGMAAAhhqMBJxAAAMAAABhqg");
	var mask_graphics_891 = new cjs.Graphics().p("EgMWBJGMAAAhhqMBdHAAAMAAABhqg");
	var mask_graphics_892 = new cjs.Graphics().p("EgWCBJGMAAAhhqMBwfAAAMAAABhqg");
	var mask_graphics_893 = new cjs.Graphics().p("EgfuBJGMAAAhhqMCD3AAAMAAABhqg");
	var mask_graphics_894 = new cjs.Graphics().p("EgpaBJGMAAAhhqMCXPAAAMAAABhqg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(358).to({graphics:mask_graphics_358,x:331,y:467.8}).wait(1).to({graphics:mask_graphics_359,x:393,y:467.8}).wait(1).to({graphics:mask_graphics_360,x:455,y:467.8}).wait(1).to({graphics:mask_graphics_361,x:516.9,y:467.8}).wait(1).to({graphics:mask_graphics_362,x:578.9,y:467.8}).wait(1).to({graphics:mask_graphics_363,x:640.9,y:467.8}).wait(1).to({graphics:mask_graphics_364,x:702.9,y:467.8}).wait(21).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_graphics_441,x:331,y:467.8}).wait(1).to({graphics:mask_graphics_442,x:393,y:467.8}).wait(1).to({graphics:mask_graphics_443,x:455,y:467.8}).wait(1).to({graphics:mask_graphics_444,x:516.9,y:467.8}).wait(1).to({graphics:mask_graphics_445,x:578.9,y:467.8}).wait(1).to({graphics:mask_graphics_446,x:640.9,y:467.8}).wait(1).to({graphics:mask_graphics_447,x:702.9,y:467.8}).wait(1).to({graphics:mask_graphics_448,x:702.9,y:467.8}).wait(11).to({graphics:null,x:0,y:0}).wait(121).to({graphics:mask_graphics_580,x:331,y:467.8}).wait(1).to({graphics:mask_graphics_581,x:393,y:467.8}).wait(1).to({graphics:mask_graphics_582,x:455,y:467.8}).wait(1).to({graphics:mask_graphics_583,x:516.9,y:467.8}).wait(1).to({graphics:mask_graphics_584,x:578.9,y:467.8}).wait(1).to({graphics:mask_graphics_585,x:640.9,y:467.8}).wait(1).to({graphics:mask_graphics_586,x:702.9,y:467.8}).wait(19).to({graphics:null,x:0,y:0}).wait(72).to({graphics:mask_graphics_677,x:331,y:467.8}).wait(1).to({graphics:mask_graphics_678,x:393,y:467.8}).wait(1).to({graphics:mask_graphics_679,x:455,y:467.8}).wait(1).to({graphics:mask_graphics_680,x:516.9,y:467.8}).wait(1).to({graphics:mask_graphics_681,x:578.9,y:467.8}).wait(1).to({graphics:mask_graphics_682,x:640.9,y:467.8}).wait(1).to({graphics:mask_graphics_683,x:702.9,y:467.8}).wait(19).to({graphics:null,x:0,y:0}).wait(102).to({graphics:mask_graphics_804,x:331,y:467.8}).wait(1).to({graphics:mask_graphics_805,x:393,y:467.8}).wait(1).to({graphics:mask_graphics_806,x:455,y:467.8}).wait(1).to({graphics:mask_graphics_807,x:516.9,y:467.8}).wait(1).to({graphics:mask_graphics_808,x:578.9,y:467.8}).wait(1).to({graphics:mask_graphics_809,x:640.9,y:467.8}).wait(1).to({graphics:mask_graphics_810,x:702.9,y:467.8}).wait(19).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_888,x:331,y:467.8}).wait(1).to({graphics:mask_graphics_889,x:393,y:467.8}).wait(1).to({graphics:mask_graphics_890,x:455,y:467.8}).wait(1).to({graphics:mask_graphics_891,x:516.9,y:467.8}).wait(1).to({graphics:mask_graphics_892,x:578.9,y:467.8}).wait(1).to({graphics:mask_graphics_893,x:640.9,y:467.8}).wait(1).to({graphics:mask_graphics_894,x:702.9,y:467.8}).wait(496));

	// 勾勾
	this.instance_2 = new lib.correct();
	this.instance_2.parent = this;
	this.instance_2.setTransform(691,388,0.595,0.595);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(358).to({_off:false},0).to({_off:true},27).wait(56).to({_off:false},0).wait(7).to({_off:true},11).wait(121).to({_off:false},0).wait(6).to({_off:true},19).wait(72).to({_off:false},0).wait(6).to({_off:true},19).wait(102).to({_off:false},0).wait(6).to({_off:true},19).wait(59).to({_off:false},0).wait(6).to({_off:true},19).wait(477));

	// 圖層 19 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_407 = new cjs.Graphics().p("EgOWBO0MAAAiJGMB98AAAMAAACJGg");
	var mask_1_graphics_490 = new cjs.Graphics().p("EgOWBO0MAAAiJGMB98AAAMAAACJGg");
	var mask_1_graphics_546 = new cjs.Graphics().p("EgOWBO0MAAAiJGMB98AAAMAAACJGg");
	var mask_1_graphics_643 = new cjs.Graphics().p("EgOWBO0MAAAiJGMB98AAAMAAACJGg");
	var mask_1_graphics_770 = new cjs.Graphics().p("EgOWBO0MAAAiJGMB98AAAMAAACJGg");
	var mask_1_graphics_855 = new cjs.Graphics().p("EgOWBO0MAAAiJGMB98AAAMAAACJGg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(407).to({graphics:mask_1_graphics_407,x:714.2,y:504.4}).wait(30).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_1_graphics_490,x:714.2,y:504.4}).wait(29).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_1_graphics_546,x:714.2,y:504.4}).wait(25).to({graphics:null,x:0,y:0}).wait(72).to({graphics:mask_1_graphics_643,x:714.2,y:504.4}).wait(25).to({graphics:null,x:0,y:0}).wait(102).to({graphics:mask_1_graphics_770,x:714.2,y:504.4}).wait(25).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_1_graphics_855,x:714.2,y:504.4}).wait(535));

	// 叉叉
	this.instance_3 = new lib.元件27();
	this.instance_3.parent = this;
	this.instance_3.setTransform(959.8,-301.6,1,1,0,0,0,272.8,301.7);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(407).to({_off:false},0).to({y:540.7},8).to({_off:true},22).wait(53).to({_off:false,y:-301.6},0).to({y:540.7},8).to({_off:true},21).wait(27).to({_off:false,y:-301.6},0).to({y:540.7},8).to({_off:true},17).wait(72).to({_off:false,y:-301.6},0).to({y:540.7},8).to({_off:true},17).wait(102).to({_off:false,y:-301.6},0).to({y:540.7},8).to({_off:true},17).wait(60).to({_off:false,y:-301.6},0).to({y:540.7},8).to({_off:true},17).wait(510));

	// 錯誤頭
	this.fgv = new lib.元件22();
	this.fgv.parent = this;
	this.fgv.setTransform(1190.7,790.1,1,1,0,0,0,210.7,206.1);
	new cjs.ButtonHelper(this.fgv, 0, 1, 1);

	this.instance_4 = new lib.點陣圖2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(980,584);

	this.instance_5 = new lib.補間動畫15("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1190.5,790);
	this.instance_5._off = true;

	this.instance_6 = new lib.補間動畫16("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(494.3,374.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.fgv}]},335).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},49).to({state:[{t:this.instance_6}]},13).to({state:[]},39).to({state:[]},135).wait(818));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(385).to({_off:false},0).to({_off:true,x:494.3,y:374.6},13).wait(992));

	// 正確投
	this.dwdewrfwfqwe = new lib.元件23();
	this.dwdewrfwfqwe.parent = this;
	this.dwdewrfwfqwe.setTransform(1661.1,797.8,1,1,0,0,0,159.1,146.8);
	new cjs.ButtonHelper(this.dwdewrfwfqwe, 0, 1, 1);

	this.instance_7 = new lib.補間動畫11("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1661,798);
	this.instance_7._off = true;

	this.instance_8 = new lib.補間動畫12("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(503,387);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.dwdewrfwfqwe}]},335).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8,p:{x:503,y:387}}]},14).to({state:[{t:this.instance_8,p:{x:1661,y:798}}]},35).to({state:[]},52).to({state:[]},135).wait(818));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(336).to({_off:false},0).to({_off:true,x:503,y:387},14).wait(1040));

	// 第二題
	this.vrevfregertgw = new lib.元件30();
	this.vrevfregertgw.parent = this;
	this.vrevfregertgw.setTransform(1077.6,665.6,1,1,0,0,0,150.6,303.6);
	new cjs.ButtonHelper(this.vrevfregertgw, 0, 1, 1);

	this.kjhtgfrdcs = new lib.元件29();
	this.kjhtgfrdcs.parent = this;
	this.kjhtgfrdcs.setTransform(1488.5,683.5,1,1,0,0,0,321.5,321.5);
	new cjs.ButtonHelper(this.kjhtgfrdcs, 0, 1, 1);

	this.instance_9 = new lib.補間動畫17("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(1368.5,683.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.補間動畫18("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(1368.5,-368.5);
	this.instance_10.alpha = 0;

	this.bsfwer = new lib.元件34();
	this.bsfwer.parent = this;
	this.bsfwer.setTransform(1540.4,714,1.329,1.329,0,0,0,162,194.1);
	new cjs.ButtonHelper(this.bsfwer, 0, 1, 1);

	this.myhbrhgbe = new lib.元件33();
	this.myhbrhgbe.parent = this;
	this.myhbrhgbe.setTransform(1045,718.7,1,1,0,0,0,177.5,253);
	new cjs.ButtonHelper(this.myhbrhgbe, 0, 1, 1);

	this.instance_11 = new lib.補間動畫25("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(1311.6,713.8);
	this.instance_11._off = true;

	this.instance_12 = new lib.補間動畫26("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(1311.6,379.7);
	this.instance_12.alpha = 0;

	this.jhjhjrthtd = new lib.元件40();
	this.jhjhjrthtd.parent = this;
	this.jhjhjrthtd.setTransform(1546.1,744.6,1,1,0,0,0,171.1,208.6);
	new cjs.ButtonHelper(this.jhjhjrthtd, 0, 1, 1);

	this.vcxvc = new lib.元件39();
	this.vcxvc.parent = this;
	this.vcxvc.setTransform(1057.1,714.5,1,1,0,0,0,220.1,157.5);
	new cjs.ButtonHelper(this.vcxvc, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.kjhtgfrdcs},{t:this.vrevfregertgw}]},437).to({state:[{t:this.instance_9}]},90).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.myhbrhgbe},{t:this.bsfwer}]},3).to({state:[{t:this.myhbrhgbe},{t:this.bsfwer}]},5).to({state:[{t:this.instance_11}]},78).to({state:[{t:this.instance_12}]},8).to({state:[{t:this.vcxvc},{t:this.jhjhjrthtd}]},6).to({state:[]},80).to({state:[]},43).wait(630));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(527).to({_off:false},0).to({y:157.5,alpha:0},5).to({_off:true,y:-368.5},5).wait(853));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(623).to({_off:false},0).to({_off:true,y:379.7,alpha:0},8).wait(759));

	// 第二題結尾
	this.instance_13 = new lib.補間動畫29("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(481.3,599.9);
	this.instance_13.alpha = 0.262;
	this.instance_13._off = true;

	this.instance_14 = new lib.補間動畫30("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(481.3,599.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmFhQgQgRAAgWQAAgXAQgQQAQgQAWAAQAYAAAQAQQAPAQAAAXQAAAWgPARQgQAQgYAAQgWAAgQgQgAggCZIgJoJIBRAAIgJIJg");
	this.shape.setTransform(1615.5,511.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah1GEQBlhkA7h7QA7h7AEjfIieAAIAAgzIChAAIAAi9IAxAAIAAC9ID1AAIABCrQAACUgKB5QgMB3gOAfQgNAdgaANQgbANg0ABIhTgCIgRg2QA4AEAgAAQAzAAASgMQASgMAKguQAJgtAGiUQAHiUgDiEIjFAAQgGDmg6CDQg6CBhuBygAmUEPQBYgZBAgaIAAngIiGAAIAAg1IFFAAIAAA1IiNAAIAAHMQBIgcBQgkIAAA0QinBSiuAyg");
	this.shape_1.setTransform(1518.6,509.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AmhGEQBmi5ABkfIAAiyIGOAAQgEhpAAg4IAyAAQAABJAFBYIEJAAIAAAxIkHAAQAHC6AoCeQBRhuAyibIAyARQhDC2hfB/QAaBKApAyQAoAwANAAQAOAAAQg2QAOg2AAg1IAzAaQgHBTgYA3QgYA4giAAQglgBgyg9Qgzg/gXhBQhsBth3BOIglgoQCehnBVhkQgviqgMjcIljAAIAACCIEBAAQgBB3gKBdQgLBdgLAWQgNAVgXANQgWALg/ABIgvgBIgQg0QAhAEAhABQAogBANgFQAOgHAHgKQAIgKAKhQQALhRAAhQIjQAAQgIEGhoDCgADUl4IApghQBCAsAvA7IgrAfQgqgyhFgzg");
	this.shape_2.setTransform(1423.7,510.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AD6GjIAAgmImSAAIAAAlIgyAAIAAkGQhiAihaAVIgYgsQE0hPCQhQInIAAIAAguIF0AAIAAhWIkcAAIAAguIEcAAIAAhNIAwAAIAABNIDIAAIAAAuIjIAAIAABWIBzAAQB5hOBfhmIAoAfQhiBhhOA0IDZAAIAAAuIkeAAQhIAtheAqIFQAAIAAFEgAiYFNIGSAAIAAhLImSAAgAiYDWIGSAAIAAhIImSAAgACLjXIAAhUIh0AAIAAgwIB0AAIAAhIIAzAAIAABIIDlAAIAAAwIjlAAIAABUgAi7jXIAAhUIjlAAIAAgwIDlAAIAAhIIAxAAIAABIIB0AAIAAAwIh0AAIAABUg");
	this.shape_3.setTransform(1328.1,509.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAGGnIgRgxIBiAAQAlgCAIgEQASgJAAgUIAAjNIgNAAQh9C2mIBaIgegwQFZg8CMikImEAAQAbhBAehsIhYAAIAAgzILAAAIAAAzIigAAIAAB7IDSAAIAAAyIjSAAIAADQQAAAjgQAVQgPAVgjACQgkACgzAAgAjxBUIGHAAIAAh7IlfAAQgXBPgRAsgAk4ijQCegPA7hrIj2AAIAABxIgyAAIAAigIGDAAQgSghgbglIAxgUQAiA2AUAkIFYAAIAACgIgyAAIAAhxIjxAAIAABDQAAAHAGAHQAHAIAIgBIC8AAIAAAwIjIAAQgaAAgQgRQgQgRAAgdIAAhJIhjAAQg6CLi4Acg");
	this.shape_4.setTransform(1231.9,509.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAvGmIgOgyQBHACAsAAQA+AAANgGQAMgHAAgUIAAjfQjCCkm5CBIgXgwQF4hmDPiWQkgApkNARIgMgzQAxAAAzgEIAAm7IB5AAQA6g4AVglIA7AMQgTAbgxA2IGSAAIAAFZQApgcBCg/IAhAnQhBA5hLA7IAAEIQAAAlgRATQgTASgvACQgvADgxAAIg6gBgAkCBtQDEgLEpgsIAAhBIntAAgAkCg+IHtAAIAAhWIntAAgAkCjHIHtAAIAAhRIntAAg");
	this.shape_5.setTransform(1136,509.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYGlIAAkCImIAAIAAgzIGIAAIAAibIlTAAIAAgzIFTAAIAAlGIAxAAIAAFGIFPAAIAAAzIlPAAIAACbIGIAAIAAAzImIAAIAAECgACPiyQBRhMBWiFIAtAcQhSB/hYBTgAlclqIAugeQBvB6AvBUIgtAdQg7hohkhlg");
	this.shape_6.setTransform(1039.4,509.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AmgGYIAAgyIFmAAIAAr9IA0AAIAAEtIF9AAIAAAzIl9AAIAAGdIGnAAIAAAyg");
	this.shape_7.setTransform(943.9,508.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},717).to({state:[{t:this.instance_14}]},11).to({state:[{t:this.instance_14},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_14},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},39).to({state:[]},1).wait(621));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(717).to({_off:false},0).to({_off:true,alpha:1},11).wait(662));

	// 第三題
	this.ytjdhgr = new lib.元件43();
	this.ytjdhgr.parent = this;
	this.ytjdhgr.setTransform(1406.4,496.1,1,1,0,0,0,208.4,135.1);
	new cjs.ButtonHelper(this.ytjdhgr, 0, 1, 1);

	this.dwaesc = new lib.元件42();
	this.dwaesc.parent = this;
	this.dwaesc.setTransform(1391.5,849.5,1,1,0,0,0,177.5,177.5);
	new cjs.ButtonHelper(this.dwaesc, 0, 1, 1);

	this.instance_15 = new lib.補間動畫31("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(1406.4,694);
	this.instance_15._off = true;

	this.instance_16 = new lib.補間動畫32("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(1406.4,694);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.dwaesc},{t:this.ytjdhgr}]},769).to({state:[{t:this.instance_15}]},75).to({state:[{t:this.instance_16}]},9).to({state:[]},1).wait(536));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(844).to({_off:false},0).to({_off:true,alpha:0},9).wait(537));

	// 第四題
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AihC+QBwgKA9gnQgXgNhIgdQg0AhgdALIgQgUQAmgQAdgSIgkgNIAOgUQAXAIAXAJQAygfAegrIAXAHQgNAWgTATICAAAIAAAYQgVAjgfAeQAsAYAjAZIgQAVQgegZg1gcQhHAyhzAMgAg8BTQAsASAzAYQAbgbASgbIh8AAIgQAMgAABgvQhUBLh2AdIgNgXQB5gdBShKIAAhXIi+AAIAAgYIC+AAIAAgiIAYAAIAAAiIC8AAIAAAYIi8AAIAABWQBIBICCAhIgMAYQh8ghhOhJgAjNgbQA8goAdhFIAXAGQgEANgMAUQAaARATAXIgSASQgXgbgRgKQgdAsglAYgAB2hRQgRAWgYAUIgVgRQAngYAag4IAZAFIgPAfQAvAoAXAbIgSASQgbgjgmgfg");
	this.shape_8.setTransform(1694.8,910);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABtDSIAAhcIlBAAIAAgZIBMAAIAAkVIhGAAIAAgZIGeAAIAAAZIhJAAIAAEVIBOAAIAAAZIhOAAIAABcgAhuBdIDbAAIAAhMIjbAAgAhugHIDbAAIAAhLIjbAAgAhuhtIDbAAIAAhLIjbAAg");
	this.shape_9.setTransform(1645.7,910.4);

	this.gsdefcew = new lib.元件47();
	this.gsdefcew.parent = this;
	this.gsdefcew.setTransform(1664,653,1,1,0,0,0,161.8,221);
	new cjs.ButtonHelper(this.gsdefcew, 0, 1, 1);

	this.fewfewfe = new lib.Symbol();
	this.fewfewfe.parent = this;
	this.fewfewfe.setTransform(1297.2,679.3,1,1,0,0,0,129.2,209.3);
	new cjs.ButtonHelper(this.fewfewfe, 0, 1, 1);

	this.ipoiulokm = new lib.元件46();
	this.ipoiulokm.parent = this;
	this.ipoiulokm.setTransform(1010.2,704.5,1,1,0,0,0,216.2,107.5);
	new cjs.ButtonHelper(this.ipoiulokm, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ipoiulokm},{t:this.fewfewfe},{t:this.gsdefcew},{t:this.shape_9},{t:this.shape_8}]},854).to({state:[]},66).wait(470));

	// 題目
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjDWIgDgBIgBgDIABgFQAYgyAMgzQALg1AAgzQAAg0gKgzQgNg1gYgyIAAgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIADgCIAGgBIAHABIAEABIACABIACABQAXAyAPA1QAPA1AAA2QAAAcgEAbQgDAbgHAaQgHAbgKAZQgJAZgNAZIgCACIgDACIgEAAIgGAAIgHAAg");
	this.shape_10.setTransform(1807.9,636.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABeDXIgJglIAlAAQAIAAAAgIIAAjnIhSAAIAAglIBSAAIAAhkIAlAAQAPACgNAKIAABYIA3AAIAAAlIg3AAIAAD1QAAAfgeAAgAjTDFIgLglIBwgEIAAg0IhSAAIAAglIBSAAIAAgpIhdAAIAAglIBAAAIgTgyIg7AAIAAglIBMAAIAAhyIAfAAQAQACgNAKIAABmIAfAAIAAh0IAfAAQAPACgNAKIAABoIBNAAIAAAlIg2AAIgTAyIA7AAIAAAlIhaAAIAAApIBPAAIAAAlIhPAAIAAAyIBogHIAAAfIjkAXQgEAKgEAAQgFAAgEgOgAhogLIAdAAIASgyIhCAAgAAoAAIAjgNQAZAwAQA7IglAOQgSg/gVgtgAgYh2IAShIIAcAIQAWAFgUAIIgTA7gAjPivIAcgLIAbA+IgbAMg");
	this.shape_11.setTransform(1775.9,631);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjeCwIBIggIAAiEIhGAAIAAgjIBtAAIAACkQApAlBBAAIDjAAIgHAmIjmAAQhCAAgzgvIhCAzgAAlCjIAAgrIiCAAIAAgfICCAAIAAggIhfAAIAAgeIBfAAIAAgfIhuAAIAAgfIBGAAIgWgvIhEAAIAAgfICCAAIAAgiIh2AAIAAgeIB2AAIAAgqIAlAAQAQACgOAKIAAAeIByAAIAAAeIhyAAIAAAiICHAAIAAAfIhCAAIgcAvIBJAAIAAAfIhyAAIAAAfIBiAAIAAAeIhiAAIAAAgICHAAIAAAfIiHAAIAAArgAAlgjIArAAIAVgvIhVAAgAjGiqIAfgdQAbAXAgApIgiAeQgfgpgZgYg");
	this.shape_12.setTransform(1725.6,630.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AjODEQA/gIAsgbQgJgGgfgKIgMAQIgcgNIAjg0IhIAAIAAgeIBWAAIASggIhPAAIAAhPIBQAAIAAgaIgmAAIglAAIAAgZIAAgXIgrAAIAAgYIArAAIAAgwIBLAAIAAgiIAgAAQAPACgNAKIAAAWIBMAAIAAAwIAoAAIAAAYIgoAAIAAAwIhMAAIAAAaIBPAAIAABPIhgAAIAJAGQARAKgVABIgHAPIB+AAIAAAeIguAAQgJAcgVAbQAXAIAZANIgQAgQgWgQgfgLQg3AnhNAJgAh+B8QAYAFAbALQASgWAJgWIg/AAgAhNAKIA1AAIAAgfIg1AAgAijAKIA0AAIAAgfIg0AAgAhNheIAwAAIAAgZIgwAAgAifheIAwAAIAAgZIgwAAgAhNiPIAwAAIAAgZIgwAAgAifiPIAwAAIAAgZIgwAAgAAKC+QA0gfAqg7Qglg+gHg4QgKAVgPAXIgZgcQA0hWAWh/IAhAIQARACgTAJQgIAngMApIB6AAIAAAlIggAAQgCBdgmBPQAgApA1AfIgdAnQgygpgaghQgvA+gwAcgAB5A/QAeg/ABhPIhGAAQAIBcAfAyg");
	this.shape_13.setTransform(1675.8,631.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AjGDVIAAglIC0AAIAAhMIiAAAIAAgmICAAAIAAhBIh2AAIAAgZIhAAiIgUgoQCFg5A/h5IAqAGQAPAGgSAEIgDAGQBYBrB4AlIgTArQgXgIgrgZIAAAhIhzAAIAABBIB/AAIAAAmIh/AAIAABMICzAAIAAAlgAh2goID1AAQhAgjhGhSQg5BQg2Alg");
	this.shape_14.setTransform(1625.6,629.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhdC0QBOgSAqgpIAXAfQALAOgUgGQgyAlhGAUgABjCSIAYgbQAtAlA4ASIgTAlQg9gWgtgrgAjgCcQBegvAxhKIAlAZQACAKgMgEQg3BQhbAvgAgeBzIAAjzIBQAAIAMgvIhmAAIAAglID5AAIAAAlIhoAAIgPAvIBjAAIAADzgAAIBUICOAAIAAgpIiOAAgAAIAMICOAAIAAgnIiOAAgAAIg6ICOAAIAAgnIiOAAgAjWAAQBHgiAyhDIAiAgQAHAJgUgCQg4BCg/AjgAjdiEQBHgdAzg3IAgAfQABAKgLgEQg3A1hEAfg");
	this.shape_15.setTransform(1575.8,632.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AjhCsQA+gWA9guIAAjgIAlAAQATAEgRAMIAACwQBuhuA4iUIArATQhSC9h/BvIAAATQAAAQANAAIB0AAQASAAAEgTIANg5IAtAKIgPA+QgMAvghAAIiaAAQgiAAAAghIAAgSQgwAhg0AYgABvgUIAogYQA0BHAXBHIgvAVQgahOgqg9gAjgBmQAihFALhsIArAOQAQAFgSAIQgMBngbBAgAhRizIAYglQA/AcApApIgcAnQgpgpg7geg");
	this.shape_16.setTransform(1526,631.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AjgC6QAng6AAhoIAoAGQAFAGgKAGIgDA3QAVAbAQAOIAAiKIhlAAIAAglIDYAAIAAAlIhSAAIAAA0IBCAAIAAAlIhCAAIAABEQAbASAkAAID0AAIgJAlIjrAAQhPAAg8hKQgQA0gRAagAgZCEQAxgMAmgXIgpAAIAAjsIA3AAIAKgnIhSAAIAAglIDPAAIAAAlIhSAAIgSAnIBWAAIAADsIgxAAQAaAPAxAQIgQAjQgxgOgjgbIAVgZIhLAAIAVAbQAIAMgUgEQglATgyAOgAA2BBIBuAAIAAglIhuAAgAA2gCIBuAAIAAglIhuAAgAA2hGIBuAAIAAglIhuAAgAi7g/IAAiYICgAAIAACYgAiZheIBdAAIAAgdIhdAAgAiZiaIBdAAIAAgeIhdAAg");
	this.shape_17.setTransform(1475.6,631.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AjDC1IAAlpIGGAAIAAFmIgmAAIAAgdIk4AAIAAAggAibBwIE4AAIAAhxQgLA0giAAIg6AAQggAAAAgjIAAigIg8AAIAABKQAABxhgAnIgVgfgAibArQBOgZAAhdIAAhFIhOAAgAA8gBQAAAPAOAAIAUAAQARgBAGgrIAoAKIAAh8IhhAAg");
	this.shape_18.setTransform(1425.4,632.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhfDgIAAjXQgvAyg0AeIgYgoQBzhAAihmIiDAAIAAglICMAAQAGgXAEgvIAyAKQAIAIgNACIgKAyIDqAAIAAAlIjyAAQgHAcgKARIDAAAIAAEDQAAAfgfAAIgtAAIgKglIAnAAQAIAAAAgIIAAg0IipAAIAABngAg4BUICpAAIAAgrIipAAgAg4AEICpAAIAAgnIipAAg");
	this.shape_19.setTransform(1375.2,631.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AjHCwQBIghA4hDIAkAfQAHAKgVgCQgzA7hKApgAAsBkIAdgeQBBBHBEAbIgcAnQhIgfg+hMgAjTA9IAAgmIB7AAIAAhoIhWAAIAAglIBWAAIAAhgIAlAEQAQACgOAKIAABQIBhAAIAAhgIAlAEQAPACgNAKIAABQIBiAAIAAAlIhiAAIAABoIB9AAIAAAmgAgxAXIBhAAIAAhoIhhAAg");
	this.shape_20.setTransform(1325.5,631.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AibDhIAAjPIg4AFQgMAPgCgPIgDgjIAoAAIAcgvIhDgxIAUgdIATAOIAxhkIAfAQQAQAIgTAFIgzBaIAWAQIAuhUIAdAQQASAHgTAGIhSCBIA6gCIgSglIAagLQAjA4AGAfIggALIgHgYIgpAFIAADSgAAoDeQglgBAAgkIAAh1IAlAAQAPABgNAKIAABcQAAAOARAAIAnAAQAUgBACgHIAGgbIAlANIgKAlQgGAVghABgAhJDGIAQg9IgdAKQgIgwgOgnIAggKQANAjAKAnQAEgQAEgdIAhAIQANAEgPALQgOBFgJAngACHBfIAggQQArAtAUAyIgkAYQgXg9gkgqgAjkC0QANgsAGhRIAjAHQAQADgQAKQgGBKgMArgAA6BVIAdgQQAZAiAOAbIgkARQgLgdgVghgAglAsIAAjcIBBAAIASgxIAlAEQAWACgUAMIgTAfIB/AAIAADcgAAiAMIB9AAIAAicIhGAAIgKATIApAAIAEgIIAWARQAJAJgMADQgPAggSAXQAUAMALALIgXAWQgNgNgMgJQgbAaggAMgAAYAMIgQgUQAigOAagVQgSgMgQgIIgUAQIgOgWQAigbAYgwIg+AAIAACcIAcAAgAAyhQQAVAHAQAJQANgQAKgVIgsAAg");
	this.shape_21.setTransform(1276.1,631);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAYDWIgFAAIgDgCIgCgCQgNgZgJgZQgKgZgHgbQgHgagDgbQgEgbAAgcQAAgaAEgcQAEgaAIgbQAGgbALgaQAIgZANgZIABgBIACgBIAFgBIAGgBIAGABIAEACQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADQgZAygMA1QgLA0AAAzQAAAzAMA0QALA0AYAyIABAFIgBADIgEABIgGAAIgFAAg");
	this.shape_22.setTransform(1243.3,636.1);

	this.vssw = new lib.元件9複製();
	this.vssw.parent = this;
	this.vssw.setTransform(1125.3,727.2,1.803,1.803);
	new cjs.ButtonHelper(this.vssw, 0, 1, 2);

	this.instance_17 = new lib.幫幫我__();
	this.instance_17.parent = this;
	this.instance_17.setTransform(81,266,0.61,0.61);

	this.instance_18 = new lib._1男全身正面png複製();
	this.instance_18.parent = this;
	this.instance_18.setTransform(486,145,0.641,0.641);

	this.instance_19 = new lib.測驗規則請協助圖中銷售員穿上應有的服裝配件();
	this.instance_19.parent = this;
	this.instance_19.setTransform(957,248);

	this.instance_20 = new lib.請點選適當髮型();
	this.instance_20.parent = this;
	this.instance_20.setTransform(1014,230,0.513,0.513);

	this.instance_21 = new lib.日系明星髮型();
	this.instance_21.parent = this;
	this.instance_21.setTransform(957,534,0.319,0.319);

	this.instance_22 = new lib.清爽短髮();
	this.instance_22.parent = this;
	this.instance_22.setTransform(1496,534,0.271,0.271);

	this.instance_23 = new lib.S__9781335();
	this.instance_23.parent = this;
	this.instance_23.setTransform(106,208);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AjaDKQBBg5AWhoIhKAAIAAgZQAqg2AZgvIhOAAIAAgZIBqAAIAAAZQgmBCgaAjIBDAAIAAAYQgHArgTAqQAuA7B1AAIC9AAIgKAZIioAAQhJAAgqgOQgqgOgcgfQgdAxgbATgAhVCIQArgPAsgbIASATQgxAegnAOgABcB0IANgVQAvAPAvAZIgNAVQgxgagtgOgAhgBVIAAgYIBSAAIAAgnIhGAAIAAgYIBGAAIAAggIAZAAIAAAgIBbAAIAAggIAaAAIAAAgIBIAAIAAAYIhIAAIAAAnIBTAAIAAAYgAALA9IBbAAIAAgnIhbAAgAhTg6QAJgIAAgHIAAiHIBuAAIAABeIhVAAIAAAwQAvgJAvgNIADAZQgtALhLAQgAgxiLIA9AAIAAgtIg9AAgABlgyQgHAAgKgJQgJgIAAgIIAAiFIByAAIAABeIhZAAIAAAgQAAADADADQADADADAAIBfAAIAAAXgABkiLIBAAAIAAgtIhAAAgAjKjGIAQgTQAoAhAfAmIgTARQgjgpghgcg");
	this.shape_23.setTransform(1053.7,301.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhJDLQBVhFAEhtQglAkguAgIgRgWQA0gjAzgwIAAjQIAZAAIAADZQAABRgZA1QgZA0gwAmgAjFDZIgIgZIAoABQAFAAAFgFQAFgEAAgFIAAiMQgeANgeAKIgJgZQAqgOAbgLIAAhzIg/AAIAAgaIA/AAIAAhbIAaAAIAABbIAxAAIAAAaIgxAAIAABoIAxgUIAHAZQgfAOgZAJIAACTQAAARgJAMQgIANgfAAIgZgBgABmDLQgPgJAAgbIAAmDIAaAAIAACGQAogbAngqIATAWQgoAng6AqIAAAqQA8AkAqAnIgRAWQgngmgugeIAACVQAAARAlAAQAZAAAIgLQAJgLADgxIAZALQgCAygPASQgPASgaAAQgtAAgPgIgAhIiVIAZgNQAfA4APAvIgZAMQgSg2gcgwg");
	this.shape_24.setTransform(1003.4,301.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhyDFQAHgJAAgNIAAiiQgwAvguAfIgQgWQB8hUAvhtIimAAIAAgZIDOAAQgGgbgTglIAZgIQAOAfALApIDFAAIAAAZIjqAAQgTAygtA5IAADMQBFgVBBgYIAEAaQhTAfhNAXgABOBhQguhBgShpIAZgGQAKA5ARApQBIgrAlgvIAUASQgxA3hGAnQAeBPBwBLIgQAWQhPg2gthCg");
	this.shape_25.setTransform(953.5,301.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ai/DbIAAlaIC4AAQgCgXgCgqIgvAAIAAgaIBIAAIgBAZQAAAdAFAlICuAAIAAEuQAAARgKAKQgJAKgQABIgoABIghAAIgLgcQAnAEAjAAQAHAAAGgGQAFgFAAgIIAAkPIiQAAQAMBpB1BmIgTASQhohegXhaQgkBhhcBVIgSgTQBdhMApiAIicAAIAAE/g");
	this.shape_26.setTransform(903.6,301.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgTAVQgIgJAAgMQAAgLAIgIQAJgJAKAAQAMAAAIAJQAIAIAAALQAAAMgIAIQgJAJgLAAQgKAAgJgIg");
	this.shape_27.setTransform(872.7,318.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhoDBIAAgkIBWAAIAAkoIhZAaIAAgnICBgoIAAFdIBVAAIAAAkg");
	this.shape_28.setTransform(853.1,301.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgjDWIgDgCIgBgCIACgFQAXgxAMg1QALg0AAgzQAAg0gKg0QgMg0gZgxIgBgEQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAgBIADgBIAHAAIAGAAIAEABIACABIABABQAYAyAPA1QAPA1AAA2QAAAbgEAcQgDAbgHAbQgHAagKAZQgJAagNAYIgCACIgDABIgEABIgFAAIgIAAg");
	this.shape_29.setTransform(1708.2,211.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag6DLIgQgrIArAAQAJAAgBgIIAAliIArAAQATAEgSAMIAAFsQABAZgZAAgAjcBiQBEhlASh3IAvAMQAQAGgSAFQgXB1hBBrgABMhmIAlgUQBGBeAlBoIgwAWQgjhtg9hbg");
	this.shape_30.setTransform(1626.1,206.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AiYDeIAAjvQgQAbgVAXIgaghQBDhNAXiQIApAPQAIAHgOACQgHAugWBAQAXACgRALIAAEogAhKDdIAAmiIEiAAIAAGaIghAAIAAgOIjgAAIAAAWgAgpCiIDgAAIAAlBIjgAAgAgECEIAAiSIA2AAIAAgrIhHAAIAAgmIBHAAIAAgzIAlAAQAQACgOAKIAAAnIBKAAIAAAmIhKAAIAAArIA9AAIAACLIgiAAIAAgQIhYAAIAAAXgAAcBOIBYAAIAAg/IhYAAg");
	this.shape_31.setTransform(1574.2,205.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AjSCvIAAgrIGlAAIAAArgAiTARIAAgqIEoAAIAAAqgAitiDIAAgrIFdAAIAAArg");
	this.shape_32.setTransform(1525.9,206.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAYDWIgFgBIgCgBIgDgCQgMgYgJgaQgLgZgHgaQgHgbgDgbQgEgcAAgbQAAgaAEgbQAEgbAHgbQAHgaAKgaQAKgaAMgZIABgBIACgBIAEgBIAHAAIAGAAIADABQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAIgBAEQgYAxgMA0QgLA0ABA0QgBAzALA0QAMA0AYAyIABAFIgBACIgDACIgHAAIgFAAg");
	this.shape_33.setTransform(1493.5,211.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgXCoIAAg5IA2AAIAAA5gAgRA5IAAgdQAAgcATgKQArgaAagMQAVgLAAgWQAAgQgMgLQgRgSg1AAQg4AAgXAXQgWAWABAVIAAAKIg0AAIAAgKQABgTAJgTQAIgQAOgNQAngoBRAAQBMAAAfAgQAaAZAAAbQAAAXgMASQgNAUgaAMQgnAQgSAOQgKAIABANIAAAQg");
	this.shape_34.setTransform(1460.3,206.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhnDgIAAiHQhAAZgnAKIgOgjQB7gfBWgzIjDAAIAAgkIC3AAIAAgdIh7AAIAAgmIB7AAIAAgjIAdAAQAPAAgLAMIAAAXIBXAAIAAAaIAzgtIAeARQANAKgTAAIhLA7IB8AAIAAAkIisAAIg6AjIClAAIAACwIgnAAIAAgOIi1AAIAAAUgAhACtIC1AAIAAgjIi1AAgAhABrIC1AAIAAgiIi1AAgAAKgdIAjAAIArgdIhOAAgAhbh5IAAgfIh1AAIAAgfIB1AAIAAgoIAdAAQASAAgOAMIAAAcIBvAAIAAgoIAdAAQARAAgNAMIAAAcIB9AAIAAAfIh9AAIAAAbIghAAIAAgbIhvAAIAAAfg");
	this.shape_35.setTransform(1410.7,206.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAFDgIgHglIAoAAQAIABAAgJIAAhfIgQAAQhTBviaAYIgMgqQCHgVBBhIIhyAAIgHASIgkgOQAWgoAOguIApAKQAJAIgRAHIgIAUIChAAIAAgvIjeAAIAAgkIFbAAIAAAkIhWAAIAAAvICHAAIAAAlIiHAAIAABxQAAAcgbgBgAiwhVQBSgGAOgvIhaAAIAAArIgnAAIAAhQIC8AAIAAgxIAkAAQAPACgNAKIAAAlIC7AAIAABOIgfAAQgIAmgbAAIhWAAQgfAAAAgeIAAgxIg8AAQgPBThuAHgAA2hoQAAANAOAAIAyAAQAQAAACgaIAdAHIAAgcIhvAAg");
	this.shape_36.setTransform(1361.2,205.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AigDfIAAj/QgSAfgXAaIgcgiQBLhQARiFIArAKQAKAEgPAKQgHApgVA8IAKAEQAMAEgQAIIAAEwgABlDXIgIgrIAlAAQAMACgDgMIAAk3IjdAAIAAglIE3AAIAAAlIgyAAIAAFNQAAAfggAAgAhECDIAAjOICZAAIAAC6IgnAAIAAgHIhLAAIAAAbgAgdBCIBLAAIAAhoIhLAAg");
	this.shape_37.setTransform(1310.6,206.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AjPCxQBgghAZgtQgbgSgcgKIgJAcIglgMQAfhXARhaIg4AAIAAglIBAAAIAOhYIArAIQAIAIgOACIgOBGIA3AAIAIgIIAYAUQAKAKgPACIAAAfQAABkgXA5QAbAQAZAXIgVAhQgXgVgWgQQghA3hpApgAiBAoQAdAKAgARQATg0gChTIAAgWIgwAAQgQBMgOA2gAAlDKIAAlgICrAAIAAFYIgnAAIAAghIheAAIAAApgABLB8IBeAAIAAjtIheAAg");
	this.shape_38.setTransform(1260.2,206.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgtC5QCTg9BQiTIAeAXQAIALgOAAQgbAxgkAnQArAfAkAtIgiApQgbgxgtgnQgwAxhhAxgAjJDcIAAieICRAAIAACUIgiAAIAAgMIhOAAIAAAWgAioCnIBOAAIAAhKIhOAAgAgjBXQAmgQApgjQgjgjgmgcIAbgcIAOAMQAagjARgfIhPAAIAAglIBZAAIAAhPIAlAAQAQACgNAKIAABDIBtAAIAAAlIhyAAQgZAtgjApIAhAeQAZgTAphCIAeAXQAIAMgOgCQg0Bfh6BIgAjEAcIAAgkICGAAIAAAkgAjEgnIAAglICGAAIAAAlgAjdhrIAAglICuAAIAAAlgAjEiwIAAglICGAAIAAAlg");
	this.shape_39.setTransform(1211,206.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAeDgIgGglIAzAAQAIABAAgJIAAhdQh1BOiiApIgRgnQCUgiByhEIjrAmQgCAPgIgIIgPg0IBIgGIAAjgIBeAAIARgzIAqAIQAIAIgOACIgSAhICEAAIAAC5QAdgVAdgpIAeAfQANAQgXgGQgjAmgrAeIAACHQAAAeggAAgAhkAxIC3gUIAAgeIi3AAgAhkggIC3AAIAAgoIi3AAgAhkhmIC3AAIAAgiIi3AAg");
	this.shape_40.setTransform(1161.6,205.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgWDaIAAiNIjDAAIAAglIDDAAIAAhHIicAAIAAglICcAAIAAiVIAqAAQAQACgOAKIAACJICcAAIAAAlIicAAIAABHIDEAAIAAAlIjEAAIAACNgABNhpQAZgrASg1IArARQAMAIgQAAQgWBBgVAZgAioioIAlgbQAjAhAUAlIgpAdQgUghgfgng");
	this.shape_41.setTransform(1110.8,206.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AjTDCIAAgrICwAAIAAlYIAqAAQATADgRAMIAABxICeAAIAAArIieAAIAACtIDLAAIAAArg");
	this.shape_42.setTransform(1060.4,205);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AjHDaIAAmzICuAAIAAC0IgnAAIAAgKIhgAAIAAEJgAighOIBgAAIAAgnIhgAAgAigiVIBgAAIAAglIhgAAgAB+DUIgKglIAnAAQAGAAAAgGIAAjYIhjAAIAAAMIgoAAIAAi2ICyAAIAAGMQAAAhgfAAgAA+hOIBjAAIAAgnIhjAAgAA+iVIBjAAIAAglIhjAAgAhcCtIAAitIC5AAIAAChIgiAAIAAgQIh2AAIAAAcgAg7ByIB2AAIAAhUIh2AAg");
	this.shape_43.setTransform(1011,207);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AjODhIAAidICIAAIAACWIggAAIAAgQIhHAAIAAAXgAitCrIBHAAIAAhJIhHAAgAB7DdIgIgeIAdAAQAJgBgBgHIAAgoIiIAAIAABOIghAAIAAjhIDLAAIAADIQgBAagZgBgAAQBwICIAAIAAgbIiIAAgAAQA1ICIAAIAAgbIiIAAgAjGAiIAAgkIB3AAIAAAkgAg2gcIAAgeIB0AAIAAggIhUAAIAAgfIBUAAIAAggIhmAAIAAgeIBmAAIAAgqIAgAAQAPACgNAKIAAAeIBvAAIAAAeIhvAAIAAAgIBYAAIAAAfIhYAAIAAAgIB/AAIAAAegAjGgjIAAgmIB3AAIAAAmgAjehpIAAgmICnAAIAAAmgAjGisIAAglIB3AAIAAAlg");
	this.shape_44.setTransform(960.9,206);

	this.instance_24 = new lib.heyhey();
	this.instance_24.parent = this;
	this.instance_24.setTransform(188,157,0.809,0.809);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgqC7QgJgJAAgMQAAgLAJgJQAIgIAMAAQALAAAJAIQAHAJAAALQAAAMgHAIQgIAJgMAAQgMAAgIgIgAgpBTIAAgVQAAgYAJgSQAJgSAcgWQAdgXAKgRQAKgTAAgWQAAgagSgQQgSgQgeAAQgtAAgkAiIAAgrQAqgaAuAAQAtAAAbAZQAbAZAAAnQAAAbgMAYQgMAWgiAdQgYATgIANQgIAMAAAWIAAAUg");
	this.shape_45.setTransform(1502.6,301.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhiDGQA5hlAAimIAAiQIDiAAIAACOIjIAAQgBCvg8BugAgPhfICvAAIAAhcIivAAgAA9DPQgSgCgJgKQgIgLAAgUIAAjQIAYAAIAABNICPAAIAAAYIiPAAIAABwQAAAHAHADQAHACA8AAQAhAAAGgBQAFgCAGgGQAFgGADgTQACgTgBgTIAbAKQAAAQgEAWQgDAXgJAKQgIALgLAEQgKACgyAAIg2AAgAjRCZIAAlWIB2AAIAAFLIgaAAIAAghIhCAAIAAAsgAi3BTIBCAAIAAj2IhCAAg");
	this.shape_46.setTransform(1452.6,301.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ACzDbIAAgvIiVAAIAAAvIgbAAIAAmbIDLAAIAAGbgAAeCSICVAAIAAk3IiVAAgAi2DZIgLgbQAiACAWAAQAEAAAFgEQAFgFgBgGIAAiJQgaAKgxAOIgHgYQAngLArgPIAAh0IhLAAIAAgbIBLAAIAAhZIAbAAIAABZIBDAAIAAAbIhDAAIAABpQAdgIAqgSIAAAaQgfAOgoANIAACUQAAASgJALQgIALgkAAIgggBg");
	this.shape_47.setTransform(1401,300.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAVCXQhTAziKAKIgNgaQB7gIBNgmQhHgRhBgNQAegaAcgcIh+AAIAAgYICWAAQARgRAVgaIAbAIQgIAKgVAZIBzAAQAEgGAJgVIAaADQgBAHgJARIBoAAIAAAYIhzAAQgbAugfAdQBmAeBAAdIgPAXQhTgmhbgYgAheBgQA1AMA4APQAhgdAWgmIh8AAQgTAVgVATgAi3gUIAAh1IBzAAIAAgyIiNAAIAAgZIGmAAIAAAZIiOAAIAAAyIByAAIAAB1gABHgtIBYAAIAAhEIhYAAgAgqgtIBWAAIAAhEIhWAAgAicgtIBYAAIAAhEIhYAAgAgqiJIBWAAIAAgyIhWAAg");
	this.shape_48.setTransform(1351.7,301.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgODWIAAkYQhHBTh3BPIgSgXQC4htBBiWIjvAAIAAgbIGoAAIAAAbIiaAAQgSAngbAqIAAApQCMBPBGA8IgRAWQhwhahRgpIAAD4g");
	this.shape_49.setTransform(1301.9,301.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAVCXQhTAziJAKIgPgaQB7gIBOgmQhHgRhBgNQAegaAcgcIh+AAIAAgYICWAAQARgRAVgaIAbAIQgIAKgVAZIBzAAQAEgGAJgVIAaADQgCAHgHARIBnAAIAAAYIh0AAQgaAugfAdQBmAeBAAdIgPAXQhTgmhbgYgAheBgQA1AMA4APQAhgdAWgmIh8AAQgTAVgVATgAi2gUIAAh1IByAAIAAgyIiNAAIAAgZIGmAAIAAAZIiOAAIAAAyIBzAAIAAB1gABHgtIBZAAIAAhEIhZAAgAgqgtIBWAAIAAhEIhWAAgAicgtIBYAAIAAhEIhYAAgAgqiJIBWAAIAAgyIhWAAg");
	this.shape_50.setTransform(1251.7,301.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AC0DbIAAgvIiWAAIAAAvIgbAAIAAmbIDMAAIAAGbgAAeCSICWAAIAAk3IiWAAgAi2DZIgLgbQAhACAXAAQAFAAAEgEQAEgFAAgGIAAiJQgaAKgxAOIgHgYQAngLArgPIAAh0IhLAAIAAgbIBLAAIAAhZIAbAAIAABZIBCAAIAAAbIhCAAIAABpQAdgIAqgSIAAAaQggAOgnANIAACUQAAASgJALQgJALgjAAIgggBg");
	this.shape_51.setTransform(1201,300.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AjXC9IBSgPIAAikIhKAAIAAgXIBKAAIAAg0IgwAAIAAgVQgOAOgJAGIgOgVQBAg5AmhFIAXAKIgFAKQAnAfAmAoIgTATQghgpglgeQgeAugmAlICCAAIAAAaIg8AAIAAA0IBIAAIAAAXIhIAAIAACdQAzgJAZgHIACAaQhRAThkASgAgUDVIAAgbIAvAAIAOiyIg7AAIAAgYIA9AAIAMifIg2AAIAAgaIC2AAIgGC5IApAAIAAAYIgqAAIgFCyIAwAAIAAAbgAA1C6IBcAAIAFiyIhUAAgABEgQIBTAAIAGifIhMAAgAjOAyIAXgHQATA0AIAxIgYAHQgJg1gRgwgAhUCDQAPgsAGguIAWAIQgDAmgRAzg");
	this.shape_52.setTransform(1151.5,300.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AjMDcIAAlhIAvAAQATgiAQg0IAaAFQgKAagZA3IBWAAIAAFXIgZAAIAAgrIhsAAIAAA1gAiyCOIBsAAIAAh3IhsAAgAiygBIBsAAIAAhrIhsAAgABFDbIgIgZIAsABIAdgBQAGAAAGgGQAHgGADgIQADgHAFgyQAFgyAEg8IAEhzIiCAAQgbA0ghAvIgUgPQBAhWAbhqIAaAHQgMAogQAkICUAAQgDBwgHBgQgJBggIARQgHARgNAIQgNAHgiAAIgpgBgAATgKIAVgOQAtA1AbA9IgUAPQgZg4gwg7g");
	this.shape_53.setTransform(1101.8,300.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("ACPC8QiYAZiYAAIgGgYQAqgWAhgyIhkAAIAAgZIBLAAIAAioQgtAXgqAPIgPgZQBpggAzgzIiVAAIAAgaICqAAQAVgaAKgWIAZAIQgIASgPAWIDiAAIAAAaIiNAAQArAtBlAlIgKAZQgTgHgbgMIgagNIjmAAIAAAkIDgAAIAAAZIjgAAIAAAmIDgAAIAAAZIjgAAIAAAnIEkAAIAAAZIkCAAQgVAhgrAlQB4ABB4gTQgPgOgRgLIAUgRQA7AoAgAlIgUARQgRgUgRgNgAhShgICyAAQghgYgWgaIhEAAQgaAegdAUg");
	this.shape_54.setTransform(1051.6,300.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AA7DcIAAm2IAbAAIAACRQBOA6A1A6IgNAaQgwg4hGgzIAAECgAjQDDQBkg1AmhHQgmg9g1guQgMAUgXAdIgUgSQBHhYAZh+IAbAHQgEARgMArIB6AAQgCB2gtBgQguBhhvA6gAiSg9QA4A2AiAyQAjhLAGheIhnAAQgPApgNAYg");
	this.shape_55.setTransform(1001.8,300.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAaBUIAXgKQAUAiAaAWQAngSAoglIASARQgbAbgwAcQAnAdBAAUIgPAYQiKgzgphVgAhwDDQAKgFAAgIIAAhAQguAag4AQIgPgYQB2gfA7g7IiuAAIAAgZIDVAAQgHgRgIgMIAZgIQAJAQAKAVIC/AAIAAAZIjgAAQgbAhgqAaIAABRQAxgLAwgRIAJAWQhIAZg8AMgAjMgGQAlgWALgxIg7AAIAAgYICRAAIAAgkIhuAAIAAhGIAbAAIAAAtIBTAAIAAg4IAZAAIAADaIgZAAIAAhNIg8AAQgOBAgoAZgAgKgiIAAgZIBeAAIAAhOIhqAAIAAgYIBqAAIAAg6IAaAAIAAA6IBrAAIAAAYIhqAAIAABOIBfAAIAAAZg");
	this.shape_56.setTransform(951.7,301);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("ACdDVIAAgoIk5AAIAAAoIgaAAIAAk2IBxAAIAAhaIiTAAIAAgZIGxAAIAAAZIieAAIAABaIB8AAIAAE2gAicCUIE5AAIAAjcIhiAAIAABrQAAANAKgBIBDAAIAAAZIhGAAQgPABgJgKQgJgLAAgOIAAhuIhOAAQABB4hEA3IgWgSQAhgZAPgiQAPggABhCIhWAAgAgshhIBNAAIAAhaIhNAAg");
	this.shape_57.setTransform(901.6,301.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AhyDAIAAglIBuhuQA2g3ANgYQAMgZAAgcQAAghgTgTQgTgSgjAAQgxAAgwAsIAAgrQAtgjA5AAQAxAAAdAbQAeAbAAAuQAAAkgTAjQgUAhg2A2IhXBXIAAABICwAAIAAAlg");
	this.shape_58.setTransform(850,300.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AC0DbIAAgvIiWAAIAAAvIgbAAIAAmbIDMAAIAAGbgAAeCSICWAAIAAk3IiWAAgAi2DZIgLgbQAiACAVAAQAGAAAEgEQAEgFAAgGIAAiJQgaAKgxAOIgGgYQAmgLArgPIAAh0IhLAAIAAgbIBLAAIAAhZIAbAAIAABZIBCAAIAAAbIhCAAIAABpQAdgIArgSIAAAaQghAOgnANIAACUQAAASgIALQgKALgjAAIgggBg");
	this.shape_59.setTransform(987.6,414);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgODWIAAkZQhHBUh3BPIgSgXQC4htBBiWIjvAAIAAgbIGoAAIAAAbIibAAQgRAngbAqIAAApQCMBPBGA8IgQAWQhxhahRgpIAAD4g");
	this.shape_60.setTransform(938.5,414.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AguDDQAEgGAAgLIAAhjIgjAAQgHBSgjA5IgVgPQApg/AAiAIAAhEICPAAQgFgKgIgJIAVgLQALAPAHAPICTAAIAAAXIhtAAIAAAhIBZAAIAABPIhhAAIAAAkIBXAAIAAAXIhXAAIAAApQAAAGAFADQAGADASAAQAwAAAIgEQAHgEADgYIAXAIQgEAegPAIQgPAIgzAAQgbAAgIgCQgJgDgGgIQgGgIAAgRIAAhgIheAAIAAAkIBHAAIAAAXIhHAAIAAAzQAogKAigMIABAXQgxARgtALgABsA5IBAAAIAAgjIhAAAgAASA5IBAAAIAAgjIhAAAgAhMA5IBGAAIAAgjIhFAAIgBAjgAASAAIBAAAIAAghIhAAAgAhLAAIBFAAIAAghIhFAAgAjZDHQAmhCAchhIAWAOQgdBjgmBEgAjXhCIARgUQAiAYAiAiIgRAVQgZgdgrgegABmhyIASgPQAXAQATAVIgSAQQgWgZgUgNgAhChyIAQgPQAWAPAUAVIgRARQgYgagRgMgACyhNIAAg9IhbAAIAAA2IgXAAIAAhLICKAAIAABSgAhnhNIAAhSICFAAIAABLIgXAAIAAg2IhXAAIAAA9gAjNjFIARgUQAkAbAaAcIgQAUQgbgdgkgagAA8i4IAAgXICcAAIAAAXgAh3i4IAAgXICdAAIAAAXg");
	this.shape_61.setTransform(888.1,413.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AiJDMQAlgzgBhmIAAgoIAZAAIAAAYIA0AAIAAgYIAZAAIAAAtIhNAAQAAANgBALIBxAAIAAhUIiAAAIAAgVICAAAIAAgcIiZAAIAAgWICZAAIAAgZIiAAAIAAgVICAAAIAAgSIAYAAIAAASIB8AAIAAAuIAjAAIAAAWIgjAAIAAAxIh8AAIAABUIBwAAIAAgYIhPAAIAAgtIAYAAIAAAYIA3AAIAAgYIAYAAIAADNIgYAAIAAhCIg2AAIAABAIgZAAIAAhVIBPAAIAAgbIhwAAIAAByIgYAAIAAhyIhyAAQAAALgDAQIBSAAIAABVIgYAAIAAhAIg+AAQgNAtgRAYgAA8gZIBjAAIAAgcIhjAAgAA8hLIBjAAIAAgZIhjAAgAjaDJQAkg5AkhmIAVAMQgmBpgiA6gAjXhGIAPgUQAyAkAYAaIgQATQglgmgkgXgAjRjFIAOgUQApAdAcAiIgPAUQgigkgigbgABoiJIAAgXIgwAAIAAgXIAwAAIAAgjIAaAAIAAAjIBSAAIAAAXIhSAAIAAAXgAgpiJIAAgXIhIAAIAAgXIBIAAIAAgjIAaAAIAAAjIAxAAIAAAXIgxAAIAAAXg");
	this.shape_62.setTransform(838.1,414.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AjYDUIAAgaIC7AAIAAmNIAaAAIAACcIDGAAIAAAbIjGAAIAADWIDcAAIAAAag");
	this.shape_63.setTransform(1502.6,413.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AC0DbIAAgvIiWAAIAAAvIgbAAIAAmbIDMAAIAAGbgAAeCSICWAAIAAk3IiWAAgAi2DZIgLgbQAiACAVAAQAFAAAFgEQAEgFABgGIAAiJQgbAKgxAOIgGgYQAmgLAsgPIAAh0IhNAAIAAgbIBNAAIAAhZIAaAAIAABZIBCAAIAAAbIhCAAIAABpQAdgIArgSIAAAaQghAOgnANIAACUQAAASgIALQgJALgkAAIgggBg");
	this.shape_64.setTransform(1451.9,414);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AA2CeIAMgVQBOAaAzAfIgMAUQgxgdhQgbgAjYDAQAygMBNgnIAQAUQhEAjg7ARgAg9DTIgJgWIAqAAQAFAAADgEQADgFAAgFIAAgzQhEAGhkAFIgGgXQBagVBQgmQhZAGgtACIgJgUQA9gMBCgqIAVANQgnAXggAMQAaAAAtgEIAygFQAFgBAzgaIASAPQiQBLhPAUQBsgFCAgPQgKgMgTgPIAQgRQAqAiAgAmIgPASIgXgaIiKANIAAA5QAAAOgIAJQgJAJgPAAgAByg8QgmAdgyAMIgPgVQAtgJAmgaQgtgqgVhGIgOAAIAAgXICuAAQgHBQgwA1QAbAXA5AQIgNAWQgygQgogcgAByhaQAjgnAMg6IhrAAQAQA9AsAkgAjBgVIAAjAIC+AAIAAAWIhHAAIAAAjIA/AAIAABNIg/AAIAAAkIBLAAIAAAWgAipgrIBHAAIAAgkIhHAAgAiphlICGAAIAAghIiGAAgAipicIBHAAIAAgjIhHAAg");
	this.shape_65.setTransform(1403.1,414.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AA2CeIANgVQBNAaAzAfIgMAUQgxgdhQgbgAjYDAQAygMBNgnIAQAUQhEAjg7ARgAg9DTIgIgWIAoAAQAFAAAEgEQAEgFgBgFIAAgzQhEAGhjAFIgIgXQBbgVBQgmQhZAGgtACIgJgUQA8gMBCgqIAXANQgoAXgfAMQAZAAAugEIAxgFQAEgBA0gaIASAPQiQBLhOAUQBqgFCCgPQgMgMgSgPIAQgRQAqAiAhAmIgQASIgYgaIiJANIAAA5QAAAOgIAJQgJAJgQAAgAByg8QgnAdgxAMIgPgVQAtgJAmgaQgtgqgVhGIgOAAIAAgXICuAAQgHBQgxA1QAdAXA4AQIgNAWQgygQgogcgAByhaQAjgnAMg6IhrAAQARA9ArAkgAjBgVIAAjAIC+AAIAAAWIhHAAIAAAjIA/AAIAABNIg/AAIAAAkIBLAAIAAAWgAipgrIBHAAIAAgkIhHAAgAiphlICFAAIAAghIiFAAgAipicIBHAAIAAgjIhHAAg");
	this.shape_66.setTransform(1353.1,414.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgXCoIAAg4IA2AAIAAA4gAgRA5IAAgdQAAgcATgLQArgZAagMQAVgMAAgVQAAgPgMgMQgSgSg0AAQg4AAgXAXQgVAWAAAWIAAAKIg0AAIAAgKQAAgUAKgUQAIgPAOgOQAngnBRAAQBMAAAfAfQAaAaAAAbQAAAXgMASQgNAUgaALQgnARgRAOQgLAHABAOIAAAQg");
	this.shape_67.setTransform(1447.6,306);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAFDhIgHglIAoAAQAIgBAAgHIAAhgIgQAAQhTBviaAXIgMgoQCHgWBBhIIhyAAIgHARIgkgNQAWgoAOguIApAJQAJAIgRAIIgIAUIChAAIAAgvIjeAAIAAgkIFbAAIAAAkIhWAAIAAAvICHAAIAAAlIiHAAIAABxQAAAbgbABgAiwhVQBSgGAOgvIhaAAIAAArIgnAAIAAhQIC8AAIAAgwIAkAAQAPABgNAKIAAAlIC7AAIAABOIgfAAQgIAmgbgBIhWAAQgfABAAgeIAAgxIg8AAQgPBShuAIgAA2hpQAAAOAOAAIAyAAQAQAAACgZIAdAGIAAgcIhvAAg");
	this.shape_68.setTransform(1398.5,305.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AiLDWIgHglIB5gEQA6gwA3g1IAjAKQAUAHgYAGQgsApg1AlIBpgFQgOgKgOgIIAegbQAyAZAyArIgjAhQgOgPgQgMIkkATQgFALgCAAQgDAAgBgNgAjjC/QAmgnAAg9IAAkOICxAAIAAgvIAkAAQAPACgOAKIAAAjIC6AAIAAAfIluAAIAADzQAABOgvAvgAhwBzIAbgdQARAHAUAMQAbgXAXgeIAjAMQATAGgVAGQgbAXgcAWIAUANIgcAcQglgegvgRgAiQAnQAWgQAAgkIAAglIAZAAQAQACgNAKIAAAqQAAAhgeAbgABUAwIAAh4IgzAAIAAgfIAzAAIAAgdIAfAAQAQACgOAKIAAARIBQAAIAAAfIhQAAIAAB4gAAPAXQAUgOAAgaIAAghIAZAAQAQACgOAKIAAAfQAAAogdAPgAhJAwIAAh4Ig9AAIAAgfIA9AAIAAgdIAfAAQAPACgNAKIAAARIA5AAIAAAfIg5AAIAAB4gACgArQgVAAAAgcIAAhBIAZAAQAPACgNAKIAAAoQAAARAIAAIAKAAQAJAAACgPIACgRIAbAGIgDAaQgEAYgWAAgAgTAbIAAhNIAZAAQAQACgOAKIAABBg");
	this.shape_69.setTransform(1348,305.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AhEDaQgnAAABglIAAhqIAlAAQAPAEgOAIIAABOQABAQAQAAIBmAAQAOAAADgMIAMglIApAMIgLAnQgLAjgnAAgAjUC1QAegzAJgxIAlAKQAOAGgOAGQgHAlggA+gABmBXIAhgXQAxAtAfA2IglAaQgZgxgzg1gAgmBNIAegdQAeAVAdAtIghAaQgZgjgfgcgAg4AuIAAirIgoAAQgcAnhHArIgTgjQBWgtApheIAkAEQANAGgPAGQgHASgNAVIEaAAIAAAlIjhAAIAAAfICuAAIAAAmIiuAAIAAAdICuAAIAAAkIiuAAIAAAlg");
	this.shape_70.setTransform(1298,305.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgtC5QCUg9BQiTIAdAXQAHALgNAAQgbAxgkAnQAsAfAiAtIghApQgbgxgtgnQgxAxhhAxgAjJDcIAAieICQAAIAACUIghAAIAAgMIhOAAIAAAWgAioCnIBOAAIAAhKIhOAAgAgjBXQAmgQApgjQgjgjgngcIAcgcIAPAMQAZgjASgfIhPAAIAAglIBZAAIAAhPIAlAAQAPACgOAKIAABDIBuAAIAAAlIhxAAQgaAtgjApIAhAeQAagTAohCIAeAXQAHAMgNgCQg1Bfh6BIgAjDAcIAAgkICEAAIAAAkgAjDgnIAAglICEAAIAAAlgAjchrIAAglICtAAIAAAlgAjDiwIAAglICEAAIAAAlg");
	this.shape_71.setTransform(1248.3,305.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AimCuIAAlbIFNAAIAAFTIgtAAIAAgdIjzAAIAAAlgAh5BeIDzAAIAAjgIjzAAg");
	this.shape_72.setTransform(1197.9,306);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgBDhIAAleIBcAAIAAhiIAmAAQAQACgPAKIAABWIBeAAIAAFUIgmAAIAAgcIiVAAIAAAmgACCCWIA4AAIAAhoIg4AAgAAlCWIA2AAIAAhoIg2AAgACCAJIA4AAIAAhhIg4AAgAAlAJIA2AAIAAhhIg2AAgAiEDhIAAjNQgjAnghAYIgYglQBYg6AzhZIhzAAIAAgmIBEAAIAAhVIAlAAQAQABgOAKIAABKIAcAAIADgHIAgAVQAJAJgPACQgZAwggAqIAAAfIAIADIAngqIAdAYQAEAJgNgDIgkAcQAWAMAXAYIgXAhQgYgegdgVIAAC1g");
	this.shape_73.setTransform(1146.7,305.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("ABQDXIgGgmIAzAAQAbAAACgiIAKjqIhyAAQgTA3gqAvIgdgiQBBhCASh7IApAOQASAIgUAEQgGAbgJAfICMAAIgKEJQgCBOg9AAgAjODRIAAlRIAzAAQALglAKgxIAvASQAIAHgOADQgFAZgQAhIBIAAIAAFBIgnAAIAAgXIhWAAIAAAngAinCFIBWAAIAAhmIhWAAgAingFIBWAAIAAhWIhWAAgAAOAUIAggjQAoAjAXAhIgjAlQgcgogggeg");
	this.shape_74.setTransform(1098.8,304.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AirDkIgMgvIBKgEIAihAIiFAAIAAglIBhAAIAAiCQgnAZg4AQIgOgnQBkgaA2hAIiBAAIAAglICVAAQAMgWAHgdIAoAIQAIAIgNACQgGARgHAQIDOAAIAAAlIiFAAQApA3BwAZIgMAnQg3gKg5gnIAAAWIioAAIAAAXIC2AAIAAAeIi2AAIAAAUIC2AAIAAAfIi2AAIAAAWIEcAAIAAAlIjzAAIgkA+ICYgJIgjgWIAZgZQBGAnAtApIgfAbIgjgdIkeAZQgCAJgDAAQgCAAgDgDgAhNhSIChAAQgegVgXgnIg0AAQgbApgdATg");
	this.shape_75.setTransform(1048,305.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("ABGDXIAAjkQglgugdgzIAfgYQASAgARAXIAAiHIAlAAQAQACgNAKIAACoQANAbBjA6IgcAnQg5gngbgaIAAC+gAjGCsQBAgpAxhYQgngjgZgPQgOAggXAcIgjgaQBAhPATiGIAqALQAJAIgOAGIgIAlIBLAAIAHgIIAbAYQAGAGgJAFQgdDOiNBigAiGgsQAZAQAoAgQARgsAIgvIhKAAg");
	this.shape_76.setTransform(998,305.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AiaDOIgKghIBEgGIAAgpQgfAShQATIgNgjQBngWBAgtIieAAIAAglIC+AAIAAgiIAkAAQAPACgNAJIAAAXIDDAAIAAAlIiuAAQANAYAcAXIBAgtIAgAOQAWAKgaACIhCAnQAoAbBNAUIgUAjQiMgfg+h2QgWAWgiAZIAAA3IBtgQIAAAiIi9AbQgFAKgFAAQgEAAgEgMgAjZgIQAvgRAAgnIgrAAIAAggIB7AAIAAgbIgwAAIgyAAIAAhSIAlAAQAQACgNAKIAAAnIA6AAIAAg/IAlAAQAQACgOAKIAADNIgnAAIAAhAIguAAQAAA4g5AZgAgbgUIAAglIBXAAIAAg8IhfAAIAAglIBfAAIAAg/IAlAAQAPACgOAKIAAAzIBwAAIAAAlIhwAAIAAA8IBjAAIAAAlg");
	this.shape_77.setTransform(948.3,305.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("ACVDKIAAgTIkoAAIAAATIgnAAIAAkoIByAAIAAhGIiPAAIAAglIGvAAIAAAlIiXAAIAABGIB7AAIAAEogAiTCRIEoAAIAAhZQgKAXgZAAIg3AAQghAAAAghIAAhnIg7AAQAEBrhWA8IgcgjQBKgtgDhXIhLAAgABBAaQAAAQAOAAIAXAAQAOAAAGgjIAbAPIAAhPIhUAAgAghheIA7AAIAAhGIg7AAg");
	this.shape_78.setTransform(897.9,306.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgPATQgFgFAAgOQAAgNAFgFQAEgEALAAQAMAAAEAEQAFAFAAANQAAAOgFAFQgEAEgMAAQgLAAgEgEg");
	this.shape_79.setTransform(867.1,321.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgnCfQgNgCgKgEQgLgEgHgEIgJgFIgDgDIgBgDIgBgEIgBgHQAAgIACgCQABgBAAgBQABAAAAAAQABgBAAAAQABAAABAAQABAAAIAEIARAJQAKAFAOAEQAOAFASgBQAQAAANgEQAOgFAJgJQAIgIAFgMQAFgLAAgOQgBgPgGgLQgFgMgLgJQgLgIgQgFQgPgEgUgBIgfAAIgDAAIgDgCIgCgFIgBgEIABgGIACgEIACgDIAEAAIAcAAQAQAAANgEQAPgGAJgIQAKgJAFgMQAFgMAAgPQAAgLgDgJQgEgKgGgHQgIgIgKgEQgLgEgNAAQgPAAgMAEQgNAEgJAGIgPAKQgGAEgCAAIgDgBIgCgCIgCgDIAAgHIAAgFIABgEIACgDIADgEIAJgHQAHgEAKgEQAKgEAMgDQANgDAOAAQAWAAAPAGQAQAFALALQALAKAFAOQAEAOABARQgBAOgEAOQgEANgHAKQgIAKgLAHQgMAHgOACIAAAAQAQACAOAFQAOAHAKAKQAKAKAGAOQAFANAAAPQAAAVgHAQQgGARgOANQgNAMgTAIQgUAGgZAAQgQAAgOgDg");
	this.shape_80.setTransform(847.9,307.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AjOC3QB/hJANhQIAFgXIhLAAIAAgkIELAAIgICdQgEBSg1AAIg6AAIgGgrIAwAAQAaAAACghIAIh/IhrAAIgCAPQgNBsiNBagAAnjLIAlgQQAvB9BnA3IgdAoQhrg+gziOgAjhgjQBlhGAvhwIAlAYQALAHgPACQgvBmhoBTg");
	this.shape_81.setTransform(1578.9,473.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AB2CeIkFAbQgGAUgFgQIgQguIA+gEQArhmAehhIAtAQQAQAGgVAGQgjBVgkBUICkgMQgTghglgvIAngSQA1A5AuBaIgrAXQgFgPgOgYgAjfgFQBahIA1h3IArAdQAKAKgUACQg1BrhaBLgAAii3IApgNQAnCBBuA0IgiAoQh8hJggiHg");
	this.shape_82.setTransform(1528.8,474.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AhUCgIgEAAIgDgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIgBgHIAAgGIABgEIACgDIADgFIBBhEQAXgZAPgVQANgSAIgRQAHgQADgNQACgNAAgMQAAgMgEgKQgEgLgGgHQgIgJgKgFQgMgEgNAAQgPAAgNAEQgMAEgIAFIgQAKQgGAEgDABIgCgBIgDgCIgBgFIgBgFIABgFIAAgDIACgEIAEgDIAJgIIARgIQALgEAMgDQAMgDANAAQAWAAARAHQAQAGALAMQALALAFAPQAFAOAAAQQAAAPgCAPQgCAQgJARQgJARgPAVQgRAWgZAcIg5A9ICPAAIADABQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIADAEIAAAFIAAAGIgDAEIgCADIgEABg");
	this.shape_83.setTransform(1491,475.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAcAnQgKgCgGgFQgHgFgFgGIgIgLIgJgLIgIgJQgGgEgFgBQgGgDgIAAQgJAAgHAEQgGAEgEAGQgEAGgCAIIgCARQAAAEgDABIgKABIgGAAIgDgBIgCgBIAAgDIAAgHQgBgPAFgLQAEgMAIgIQAJgIALgFQAKgDAOAAQAMAAAKACQAIADAHAFQAGAFAFAFIAKAMIAIAKQADAFAGAEQAEADAGADQAFADAIAAQAJAAAHgEQAGgEAEgGQAFgFABgJQACgJAAgJQAAgDADgCQAEgBAFAAIAHABIAEAAIACACIABAEIAAAIQgBAPgGAKQgFAMgIAIQgJAIgKAEQgLADgMAAQgMAAgIgDg");
	this.shape_84.setTransform(1466,468.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AhPCfIgCAAIgCgDIgCgDIgCgGIACgFIABgFIACgCIADgBIBGAAIAAkCIhCApIgHADQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBgBgBIAAgGIAAgGIABgDIADgEIACgCIBLgwIADgCIACAAIADgBIAFAAIAHAAIAEACQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIABADIAAEdIA8AAIADABIADACIABAFIABAFIgBAGIgBADIgDADIgDAAg");
	this.shape_85.setTransform(1441.6,475.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AjBDVIAAi6IAmAAQAPACgNAKIAABuICGAAIAAinIhzAAIAAAUIgnAAIAAivIAlAAQAQACgOAKIAABpIBzAAIAAicIAkAAQAQACgOAKIAACQIByAAIAAhzIAlAAQAPACgNAKIAACeIgnAAIAAgRIhyAAIAACnICBAAIAAh4IAlAAQAQACgOAKIAACmIgnAAIAAgVIktAAIAAAbg");
	this.shape_86.setTransform(1402.9,473.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAXDiIAAhsQgcAKgOACIgKgfQA8gQArgUQgPgJgUgSQgUAUgTANIgVgbQA2gqATgpIAiAIQAIAIgOACIgKAPIBcAAIAGgGIAbAOQAMAHgSACQgdAfghAXQAhAOBAAKIgIAhIgdgGIAABsIghAAIAAgQIhhAAIAAAUgAA5C3IBhAAIAAgxIhhAAgAAlBuICMAAQgigGgsgVQgPAKgvARgAA5ATIAqAfQAcgWANgNIhRAAgAjWDeIgKgkIAegDIAAhgIAfAAQAQACgOAKIAABOIAfgEIAAhqIghAAIgiAAIAAhXIClAAIAABXIhAAAIAAAYIA8AAIAAAfIg8AAIAAAtIBPgOIAAAgIi5AhQgGAIgDAAQgBAAAAgBQAAAAgBAAQAAgBgBgBQAAAAAAgBgAijAsIBhAAIAAgpIhhAAgAgVghIAAhqIicAAIAAA1IgnAAIAAhUIDDAAIAAgXIieAAIAAggIFbAAIAAAgIicAAIAAAXIDFAAIAABOIgnAAIAAgvIieAAIAABqgAAjgtIAAgXIBzAAIAAAXgAifgtIAAgXIB1AAIAAAXgAAjhcIAAgXIBzAAIAAAXgAifhcIAAgXIB1AAIAAAXg");
	this.shape_87.setTransform(1353.5,474);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgBDiIAAlfIBcAAIAAhiIAmAAQAPACgOAKIAABWIBfAAIAAFVIgnAAIAAgdIiVAAIAAAngACCCVIA4AAIAAhnIg4AAgAAlCVIA2AAIAAhnIg2AAgACCAJIA4AAIAAhhIg4AAgAAlAJIA2AAIAAhhIg2AAgAiEDiIAAjOQgjAoghAXIgYglQBYg6AzhaIhzAAIAAglIBEAAIAAhVIAlAAQAQACgOAJIAABKIAcAAIAEgIIAeAWQAKAKgPABQgaAwgfAqIAAAfIAIADIAngqIAeAYQADAJgNgDIgjAdQAVALAYAYIgYAgQgYgcgdgWIAAC2g");
	this.shape_88.setTransform(976.5,473.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AjBDVIAAi6IAmAAQAPACgNAKIAABuICGAAIAAinIhzAAIAAAUIgnAAIAAivIAlAAQAQACgOAKIAABpIBzAAIAAicIAkAAQAQACgOAKIAACQIByAAIAAhzIAlAAQAPACgNAKIAACeIgnAAIAAgRIhyAAIAACnICBAAIAAh4IAlAAQAQACgOAKIAACmIgnAAIAAgVIktAAIAAAbg");
	this.shape_89.setTransform(927.8,473.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAXDiIAAhsQgcAKgOACIgKgfQA8gQArgUQgPgJgUgSQgUAUgTANIgVgbQA2gqATgpIAiAIQAHAIgNACIgKAPIBcAAIAGgGIAbAOQAMAHgRACQgeAfghAXQAhAOBAAKIgHAhIgegGIAABsIghAAIAAgQIhhAAIAAAUgAA5C3IBhAAIAAgxIhhAAgAAlBuICMAAQgigGgrgVQgQAKgvARgAA5ATIArAfQAbgWANgNIhSAAgAjWDeIgJgkIAdgDIAAhgIAfAAQAPACgNAKIAABOIAfgEIAAhqIghAAIghAAIAAhXICkAAIAABXIhAAAIAAAYIA8AAIAAAfIg8AAIAAAtIBQgOIAAAgIi6AhQgGAIgDAAQgBAAAAgBQAAAAgBAAQAAgBgBgBQAAAAAAgBgAijAsIBhAAIAAgpIhhAAgAgVghIAAhqIicAAIAAA1IgnAAIAAhUIDDAAIAAgXIieAAIAAggIFbAAIAAAgIicAAIAAAXIDFAAIAABOIgnAAIAAgvIieAAIAABqgAAjgtIAAgXIBzAAIAAAXgAifgtIAAgXIB1AAIAAAXgAAjhcIAAgXIBzAAIAAAXgAifhcIAAgXIB1AAIAAAXg");
	this.shape_90.setTransform(878.4,474);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgXDIIAAj5QhCBThmAtIgbgtQCRg8BAiCIi/AAIAAgrIGZAAIAAArIiqAAQgGATgMAWIAAE7gAAvgpIAbgjQBMAnBFBJIgkAlQhAhIhIgqg");
	this.shape_91.setTransform(827.8,475);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgqC7QgJgJAAgMQAAgLAJgIQAIgJAMAAQALAAAJAJQAHAIAAALQAAAMgHAIQgIAJgMAAQgMAAgIgIgAgpBTIAAgVQAAgYAJgSQAJgSAcgWQAdgXAKgRQAKgTAAgWQAAgagSgQQgSgQgeAAQgtAAgkAiIAAgrQAqgaAuAAQAtAAAbAZQAbAZAAAnQAAAbgMAYQgMAWgiAdQgYATgIANQgIAMAAAWIAAAUg");
	this.shape_92.setTransform(1568.1,310.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AADDcIgIgZIAzAAQASgBAFgCQAJgFAAgLIAAhqIgGAAQhCBejLAvIgQgZQC0gfBIhVIjJAAQAOgiAPg4IgtAAIAAgaIFtAAIAAAaIhTAAIAABAIBuAAIAAAaIhuAAIAABsQAAASgIALQgIALgSABIgtABgAh9AsIDLAAIAAhAIi2AAQgMApgJAXgAiihVQBSgHAfg4IiAAAIAAA7IgaAAIAAhUIDKAAQgKgRgOgTIAZgKQASAcAKASICzAAIAABUIgaAAIAAg7Ih9AAIAAAjQAAAEADADQAEAEADAAIBiAAIAAAZIhoAAQgNAAgIgJQgJgJAAgPIAAgmIgzAAQgeBIhgAPg");
	this.shape_93.setTransform(1517.2,310.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AjZDOQAkhLAAiNIAAiqIC0AAQgDgNgMgVIAYgGQAIANAKAbIC9AAIAAAXIlyAAIAAB8QAACogpBWgACkC9QiKANiXAHIgEgVQBTgXBZg2Qg7AGhbAEIgEgVQBRgnAmggIAXAPQgiAbg2AZQAggBA1gEQA2gEAFgCQAFgCAwgjIAUARQhsBOhqAoQB5gFBOgJIgkgiIAUgRQA1AyAfAmIgWAOQgKgNgRgSgABmAlIAAh9IhBAAIAAgWIBBAAIAAgeIAYAAIAAAeIBNAAIAAAWIhNAAIAAB9gAhIAkIAAh8Ig8AAIAAgWIA8AAIAAgeIAYAAIAAAeIBAAAIAAAWIhAAAIAAB8gAAhAaQARgqAHg0IAVAGQgDAtgWAygAiKAUQAUgsACgtIAYAFQgFA1gTApgACeARQgHgHAAgKIAAhCIAXAAIAAA5QAAAHAEACQAFACAjAAIgCAVIgUABQgdAAgJgHgAgWgGIAAg8IAVAAIAAAyQAAAKAPAAIAKgBIAAAVIgQABQgfgBABgUg");
	this.shape_94.setTransform(1466.9,310.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("Ag1DZQgRgCgIgJQgJgKAAgNIAAhkIAaAAIAABeQAAAMAOAEQAOACAsAAQA3AAAKgCQAKgEAEgTQAEgUABgNIAZAHQAAAKgFAWQgFAXgKAJQgLAIgKACQgLABgrAAQg9gBgRgBgAjYDCQAigqAUg+IAZAJQgcBKgcAjgAB2BYIAWgNQAzA9AZAwIgVAMQgagwgzg8gAgSBSIATgMQAfAnAQAfIgXAMQgPgegcgogAhEBDIAAjIIgdAAQgnA8g7AzIgTgTQBchLAphmIAZAHQgKAZgPAcIEmAAIAAAZIj+AAIAAA3IDjAAIAAAXIjjAAIAAA5IDlAAIAAAXIjlAAIAAAqg");
	this.shape_95.setTransform(1417.1,310.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("ABqCEQhBA5hLAfIgQgUQCfhDBLiSIAYAKQgjBCgvAxQA0AuAoAsIgTATQgsgygxgngAjJA3ICAAAIAACZIgaAAIAAgaIhMAAIAAAmIgaAAgAivCdIBMAAIAAhNIhMAAgAgsBdQBgg2Aqg3QhCAHg4ACIgGgYQAxgjAmhJIhdAAIAAgZIBwAAQgOgfgLgPIAZgKQAQAYANAgIB0AAIAAAZIiGAAQgoBHglAiQA/gDAqgFQARgfALgdIAYAJQgtCCiSBMgAjNAGIAAgYICIAAIAAAYgAjNhCIAAgZICIAAIAAAZgAjZiLIAAgZIBHAAQgIgXgMgXIAYgJQANAXAKAgIA6AAIAAAZg");
	this.shape_96.setTransform(1367.3,310.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("ACRDFIAAgnIkgAAIAAAnIgcAAIAAmIIFXAAIAAGIgAiPCDIEgAAIAAkrIkgAAg");
	this.shape_97.setTransform(1317.3,311.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AC6DdIAAgYIiqAAIAAAYIgYAAIAAljIBhAAIAAhSIAZAAIAABSIBhAAIAAFjgAByCrIBIAAIAAiGIhIAAgAAQCrIBJAAIAAiGIhJAAgAByAMIBIAAIAAh4IhIAAgAAQAMIBJAAIAAh4IhJAAgAiJDcIAAi9QgeAegaATIgRgUQBbhAAmhuIh6AAIAAgYICUAAIAAAYQgQA6giAuQAPAKALAIQARgRARgfIAUAOQgOAagUAZQAQAOARAVIgTATQgfgmgigYIAADLgAijjLIAVgQQAZASAZAhIgXAPQgTgbgdgXg");
	this.shape_98.setTransform(1266.5,310.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AjLDcIAAlhIAuAAQATgiAQg0IAaAFQgKAagZA3IBWAAIAAFXIgZAAIAAgrIhsAAIAAA1gAiyCOIBsAAIAAh3IhsAAgAiygBIBsAAIAAhrIhsAAgABFDbIgIgZIAsABIAcgBQAHAAAHgGQAGgGAEgIQACgHAFgyQAFgyAEg8IAEhzIiCAAQgaA0giAvIgUgPQBAhWAbhqIAaAHQgNAogOAkICTAAQgDBwgHBgQgIBggJARQgIARgMAIQgNAHgiAAIgpgBgAATgKIAVgOQAtA1AbA9IgUAPQgYg4gxg7g");
	this.shape_99.setTransform(1217.4,310.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgYDEQCSguBNhiIATATQhUBkiPAxgAiKDbIAAi+QgcAdgjAcIgQgVQBlhMAihZIiBAAIAAgZICeAAIAAAZQgYA3gaAhQAQALAHAFQAbgUAXgfIAVAQQgQAXghAdQAUASAYAZIgSAUQgsgwgjgZIAADQgAgGAsQB4gsBDhWIAVARQhJBah4AtgAgIhkQB2guA7hGIATASQhGBMhuAtgAisjOIAYgNQAbAiAQAfIgaAMQgJgZgggng");
	this.shape_100.setTransform(1167.1,310.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgZDcIAAizIg8AAIAAgWIA8AAIAAg5Ig+AAIAAgWIAjAAQgEglgOglIAOgMIgdAAIAAgYIBEAAQgGgSgNgWIAWgKQAOAZAJAZIAvAAIAAAYIgcAAIAQALQgJAogMAjIAiAAIAAAWIg6AAIAAA5IA6AAIAAAWIg6AAIAACzgAgag8IAaAAQALgqAJgsIhEAAQAQAzAGAjgAimDcIAAi8QgQAWgSAUIgSgRQBIhMAZheIhcAAIAAgZIB1AAIAAAZQgRA/gbAtIAQAOQAOgQANgZIATAPQgNAWgSAWQANAQAJAOIgQATQgPgZgXgYIAADBgAAdDJQA8gzAFhTIgPAAIAAkMIByAAIAAEMIgdAAIAABvQAAALAMAAQAMAAADgMQAEgKgBgxIAYAIQAAAZgDAZQgEAagJAFQgJAGgbgBQgMAAgHgHQgIgIAAgLIAAh3IgVAAQgCBahGA/gABnAtIBCAAIAAg6IhCAAgABngmIBCAAIAAg4IhCAAgABnh3IBCAAIAAg6IhCAAgAhyCvQAcgvARg4IAXAJQgTA9gcAsgAARBUIAUgMQAPAfAKAjIgXAMQgIgigOgggAi9jKIAWgPQAcAZARAZIgWAOQgQgZgdgYg");
	this.shape_101.setTransform(1117.2,310.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("Ai/DbIAAlaIC5AAQgDgXgCgqIgvAAIAAgaIBIAAIgBAZQAAAdAFAlICuAAIAAEuQAAARgJAKQgLAKgPABIgnABIgiAAIgKgcQAnAEAiAAQAHAAAFgGQAGgFAAgIIAAkPIiQAAQAMBpB1BmIgTASQhphegWhaQgkBhhcBVIgSgTQBdhMApiAIicAAIAAE/g");
	this.shape_102.setTransform(1067.2,310.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("ACPC7QiYAaiYAAIgGgYQAqgWAhgyIhkAAIAAgZIBLAAIAAioQgtAXgqAPIgPgZQBpggAzgzIiVAAIAAgaICqAAQAVgaAKgWIAZAIQgIASgPAWIDiAAIAAAaIiNAAQArAtBlAlIgKAZQgTgHgbgMIgagNIjmAAIAAAkIDgAAIAAAZIjgAAIAAAmIDgAAIAAAZIjgAAIAAAnIEkAAIAAAZIkCAAQgVAhgrAlQB4ABB4gTQgPgOgRgLIAUgRQA7AoAgAlIgUARQgRgUgRgOgAhShgICyAAQghgYgWgaIhEAAQgaAegdAUg");
	this.shape_103.setTransform(1017.1,310.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("ACdDVIAAgoIk5AAIAAAoIgaAAIAAk3IBxAAIAAhZIiTAAIAAgZIGxAAIAAAZIieAAIAABZIB8AAIAAE3gAicCUIE5AAIAAjcIhiAAIAABrQAAANAKgBIBDAAIAAAZIhGAAQgPABgJgKQgJgLAAgOIAAhuIhOAAQABB4hEA3IgWgSQAhgZAPgiQAPggABhCIhWAAgAgshiIBNAAIAAhZIhNAAg");
	this.shape_104.setTransform(867.2,310.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AhsCvIAAgtQAnAfAxAAQAmgBAZgTQAYgUAAgjQAAhLhqAAIgfAAIAAgiIAeAAQBeAAAAhHQAAhBhIAAQgogBgjAcIAAgpQAkgWAyAAQArAAAeAZQAdAZAAAoQAABLhMAWIAAABQApADAYAYQAZAZAAAlQAAA0glAeQgmAfg5AAQg1AAgggUg");
	this.shape_105.setTransform(815.8,310.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AiqGEQBThAAAhaIAAi3IDcAAIgEhOIjJAAIAAjDIBkAAIAAg8IiNAAIAAg8ICNAAIAAhiIA8AAQAeAEgaATIAABLIBtAAIAAhiIA8AAQAeAEgbATIAABLICiAAIAAA8IiiAAIAAA8IB8AAIAADDIhWAAQAeAPAiAdIgiAiIBtAAIAAA8IjwAAQAHA8AmBHQAwgxAig4IAxAeQApAagtAAQgpAxgpAtQAhAlAqAAQAWAAAIhDIA4AWIgIAxQgLBLgiAAQhOAAhXhLQg8AxhsAxIgeg8QBlgiA8g1QgxhdgHhLIikAAIAABWICYAAIAAA8IiYAAQAABlhtBTgADBAzICAAAQgigegpgWIAhgaIhaAAgAD9hXIBHAAIAAhLIhHAAgAB6hXIBPAAIAAhLIhPAAgAgIhXIBNAAIAAhLIhNAAgABcjeIBtAAIAAg8IhtAAgAk4GqIAAmVQg4A4gxApIgihAQCahrBSiWIjOAAIAAhIIBtAAIAAilIBLAAQAWAEgWATIAACOIA8AAIALgPIA1AqQAaASgiAEQg0BPhABaIAABCIAPAIIBLhoIAtAeQAWAPgeAEIhHBRQApAaAiAiIgpA1QgtgtgtgeIAAFZg");
	this.shape_106.setTransform(1108.8,846);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AmjFvQBAg/AxhmIBDAmQAeAWglAEQgtBXg5BDgADwD0IA8gmQBHBPAtBPIhHAwQgthWg8hSgAAmDoIBHgWQA0BdAPBMIhWAaQgPhPglhegAiVDhIBLgTQAiBpAEBLIhXATQAAhTgahhgAmuC/IAAhHIGCAAIAAhHIk/AAIAAhHIE/AAIAAg/IiOAAIiPAAIAAlOIKAAAIAAFOIkZAAIAAA/IFOAAIAABHIlOAAIAABHIGRAAIAABHgAAeidIDOAAIAAi/IjOAAgAj+idIDSAAIAAi/IjSAAgABEi3QAphOAahTIBAAaQAiATgmAHQgaBAgmBEgAjYk+IA/gaQAmBEAaBVIhDAfQgbhaghhEg");
	this.shape_107.setTransform(1014.1,847.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AiqGEQBThAAAhaIAAi3IDcAAIgEhOIjJAAIAAjDIBkAAIAAg8IiNAAIAAg8ICNAAIAAhiIA8AAQAeAEgaATIAABLIBtAAIAAhiIA8AAQAeAEgbATIAABLICiAAIAAA8IiiAAIAAA8IB8AAIAADDIhWAAQAeAPAiAdIgiAiIBtAAIAAA8IjwAAQAHA8AmBHQAwgxAig4IAxAeQApAagtAAQgpAxgpAtQAhAlAqAAQAWAAAIhDIA4AWIgIAxQgLBLgiAAQhOAAhXhLQg8AxhsAxIgeg8QBlgiA8g1QgxhdgHhLIikAAIAABWICYAAIAAA8IiYAAQAABlhtBTgADBAzICAAAQgigegpgWIAhgaIhaAAgAD9hXIBHAAIAAhLIhHAAgAB6hXIBPAAIAAhLIhPAAgAgIhXIBNAAIAAhLIhNAAgABcjeIBtAAIAAg8IhtAAgAk4GqIAAmVQg4A4gxApIgihAQCahrBSiWIjOAAIAAhIIBtAAIAAilIBLAAQAWAEgWATIAACOIA8AAIALgPIA1AqQAaASgiAEQg0BPhABaIAABCIAPAIIBLhoIAtAeQAWAPgeAEIhHBRQApAaAiAiIgpA1QgtgtgtgeIAAFZg");
	this.shape_108.setTransform(1103,476.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AEBGbIAAgxIoBAAIAAAxIhLAAIAAqUIDlAAIA1ihIBZAXQAPAPgbAEIgzB3IFjAAIAAKUgAkAEiIIBAAIAAjKIoBAAgAkAARIIBAAIAAjCIoBAAg");
	this.shape_109.setTransform(1007.4,474.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgsFDIAAhuIBoAAIAABugAghBtIAAg4QAAg1AlgWQBSgxAxgWQApgXAAgpQAAgdgWgXQgigihlAAQhsAAgtAtQgpAqAAApIAAATIhiAAIAAgTQAAgmATgmQAPgeAagaQBLhKCdAAQCSgBA8A9QAxAwAAA1QAAAsgXAjQgaAlgxAWQhLAhghAbQgTAOAAAaIAAAfg");
	this.shape_110.setTransform(452.5,691);

	this.instance_25 = new lib.元件41();
	this.instance_25.parent = this;
	this.instance_25.setTransform(472.7,696,1,1,0,0,0,366.5,87.3);
	this.instance_25.alpha = 0.949;

	this.instance_26 = new lib._8腳部();
	this.instance_26.parent = this;
	this.instance_26.setTransform(161,364,0.452,0.452);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgsFCIAAhtIBoAAIAABtgAghBtIAAg5QAAg0AlgWQBSgxAxgWQApgXAAgpQAAgegWgWQgigihlAAQhsAAgtAtQgpAqAAApIAAATIhiAAIAAgTQAAgmATgmQAPgeAagaQBLhKCdAAQCSAAA8A7QAxAxAAA1QAAAtgXAhQgaAmgxAWQhLAhghAbQgTAOAAAaIAAAfg");
	this.shape_111.setTransform(1718,267.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("ABYGvIAAiDIjRAAIAAhHIDRAAIAAg4IjvAAIAAg8ICZAAIghhPIh4AAIAAg7IDvAAIAAhAIjGAAIAAg8IDGAAIAAhAIhzAAIhpAAIAAjGIIEAAIAADGIjdAAIAABAIDSAAIAAA8IjSAAIAABAIEOAAIAAA7IiOAAIgtBPIClAAIAAA8Ij4AAIAAA4IDhAAIAABHIjhAAIAACDgABJBxIBlAAIAmhPIilAAgADnkRIBaAAIAAhOIhaAAgABUkRIBTAAIAAhOIhTAAgAhEkRIBZAAIAAhOIhZAAgAlwGoIgIhHIA1AAQAPAAAAgPIAAjwIhLAaQgEAlgTghIgahPIB8giIAAjCIhxAAIAAhHIBxAAIAAi0IBHAAQAeAEgaASIAACeIBSAAIAABHIhSAAIAAClIA0gPIAABOIg0APIAAEsQAAA8gxAAg");
	this.shape_112.setTransform(1622.9,266.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("Am7FQICDhLIAAj4IhtAAIAAhGIC4AAIAAEyQA0BPCWAAIHgAAIgUBHInxAAQh/AAhIhaIh4BxgAixDnQB0gqBDg0IApA4QALAXgagIQg/AxhsAlgACgDBIAtg4QBaA8BhAWIgaBIQhtgbhhhHgAjECFIAAg8IClAAIAAhRIiDAAIAAg8ICDAAIAAg8IhOAAQhBAAABhAIAAh4ICzAAIAAgxIiwAAIAAg8IDwAAIAACpIizAAIAAApQgBAXAXAAIBdAAQAWAAAHgqIBAAIQgLBag4AEIAAA8ICKAAIAAg8QgsgIgBgxIAAh/IC8AAIAAgxIjDAAIAAg8IEDAAIAACpIi8AAIAAApQABAXAWAAIBlAAQAWAAAIgtIBEALQgIBehHAAIhiAAIAAA8IB8AAIAAA8Ih8AAIAABRICtAAIAAA8gAAgBJICKAAIAAhRIiKAAgAmLleIA9g8QBGAxA1BLIg/A8QgyhDhHg5g");
	this.shape_113.setTransform(1526.6,267.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("Ak1GrIAAnpQghA7gtA0Ig0hCQCOibAhj/IBTATQATAIgeASQgMBPgpB0IATAIQAWAIgeAOIAAJIgADBGdIgPhTIBHAAQAXAEgEgXIAApWImqAAIAAhIIJWAAIAABIIhhAAIAAKAQAAA7g8ABgAiED8IAAmNIEnAAIAAFnIhLAAIAAgPIiRAAIAAA1gAg5CAICRAAIAAjKIiRAAg");
	this.shape_114.setTransform(1430.6,266.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AmPFTQC5g/AwhXQg1ghg0gTIgTA0IhHgWQA8ioAiisIhtAAIAAhIIB8AAIAaioIBSAPQAPAPgaADIgaCHIBpAAIAPgPIAtAmQAWATgdADIAAA8QgBDCgsBtQA0AeAwAtIgpBAQgsgpgpgeQhBBpjKBOgAj4BNQA4ATA8AhQAmhlgFigIAAgpIhdAAQgeCSgaBogABFGEIAAqmIFLAAIAAKXIhLAAIAAhAIi0AAIAABPgACRDuIC0AAIAAnIIi0AAg");
	this.shape_115.setTransform(1333.8,266.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AhXFiQEch0CZkcIA5AtQAPAVgbAAQg0BfhEBKQBTA9BEBVIhABPQg1hdhWhMQheBei6BegAmDGmIAAkwIEVAAIAAEdIhAAAIAAgXIiWAAIAAAqgAlEFBICWAAIAAiPIiWAAgAhECnQBJgeBQhDQhEhEhKg3IA1g1IAcAXQAxhEAig8IiZAAIAAhHICrAAIAAiWIBIAAQAeAEgaASIAACAIDRAAIAABHIjZAAQgwBXhEBOQAhAeAeAdQAyglBOh/IA5AtQAPAWgbgDQhlC2jrCLgAl4A2IAAhGID/AAIAABGgAl4hMIAAhHID/AAIAABHgAmpjPIAAhHIFOAAIAABHgAl4lTIAAhHID/AAIAABHg");
	this.shape_116.setTransform(1239.3,266.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("Ah3GIIgThTIBWAAQAPAAAAgPIAAj/ImCAAIAAhRIGCAAIAAipIBHALQBOgwA8g8InuAAIAAhIIIjAAIAPgLIBHBHIgWAMQiHB4hpA8IAABWIF3AAIAABRIl3AAIAAElQAAA8g7AAg");
	this.shape_117.setTransform(1143.1,267.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AiqGEQBThAAAhaIAAi3IDcAAIgEhOIjJAAIAAjDIBkAAIAAg8IiNAAIAAg8ICNAAIAAhiIA8AAQAeAEgaATIAABLIBtAAIAAhiIA8AAQAeAEgbATIAABLICiAAIAAA8IiiAAIAAA8IB8AAIAADDIhWAAQAeAPAiAdIgiAiIBtAAIAAA8IjwAAQAHA8AmBHQAwgxAig4IAxAeQApAagtAAQgpAxgpAtQAhAlAqAAQAWAAAIhDIA4AWIgIAxQgLBLgiAAQhOAAhXhLQg8AxhsAxIgeg8QBlgiA8g1QgxhdgHhLIikAAIAABWICYAAIAAA8IiYAAQAABlhtBTgADBAzICAAAQgigegpgWIAhgaIhaAAgAD9hXIBHAAIAAhLIhHAAgAB6hXIBPAAIAAhLIhPAAgAgIhXIBNAAIAAhLIhNAAgABcjeIBtAAIAAg8IhtAAgAk4GqIAAmVQg4A4gxApIgihAQCahrBSiWIjOAAIAAhIIBtAAIAAilIBLAAQAWAEgWATIAACOIA8AAIALgPIA1AqQAaASgiAEQg0BPhABaIAABCIAPAIIBLhoIAtAeQAWAPgeAEIhHBRQApAaAiAiIgpA1QgtgtgtgeIAAFZg");
	this.shape_118.setTransform(1046.9,266.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("Al/GiIAAtDIFOAAIAAFZIhLAAIAAgTIi5AAIAAH9gAk1iXIC5AAIAAhLIi5AAgAk1keIC5AAIAAhHIi5AAgADyGXIgThHIBLAAQAMAAAAgMIAAmfIjAAAIAAAXIhLAAIAAldIFVAAIAAL4QAABAg7AAgAB2iXIDAAAIAAhLIjAAAgAB2keIDAAAIAAhHIjAAAgAixFMIAAlNIFjAAIAAE2IhAAAIAAgeIjjAAIAAA1gAhxDbIDjAAIAAihIjjAAg");
	this.shape_119.setTransform(951.3,267.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AmNGxIAAkwIEHAAIAAEhIg/AAIAAgeIiHAAIAAAtgAlMFIICHAAIAAiKIiHAAgADtGqIgQg9IA4AAQAQAAgBgOIAAhMIkGAAIAACXIg+AAIAAmyIGEAAIAAGBQAAAxgwAAgAAeDYIEGAAIAAg1IkGAAgAAeBnIEGAAIAAg1IkGAAgAl+BCIAAhHIDmAAIAABHgAhog1IAAg8IDgAAIAAg9IikAAIAAg7ICkAAIAAg8IjFAAIAAg9IDFAAIAAhOIA8AAQAeADgaATIAAA4IDWAAIAAA9IjWAAIAAA8ICpAAIAAA7IipAAIAAA9IDzAAIAAA8gAl+hEIAAhIIDmAAIAABIgAmrjLIAAhIIFAAAIAABIgAl+lLIAAhHIDmAAIAABHg");
	this.shape_120.setTransform(855.1,265.7);

	this.instance_27 = new lib.補間動畫33("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(990.1,582.7);
	this.instance_27._off = true;

	this.instance_28 = new lib.補間動畫34("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(990.1,582.7);
	this.instance_28.alpha = 0;

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgLDYIAAlEIiKAAIAAEAIgaAAIAAkaICkAAIAAhRIAZAAIAABRICiAAIAAD1QAAAQgJALQgKALgoAAIglgBIgKgbIAuABQAZAAAFgCQAFgDAAgHIAAjaIiJAAIAAFEg");
	this.shape_121.setTransform(1400,909.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgUDEQAqgYAvg0Ig6AAIAAjuIA/AAQALgiAEgXIhkAAIAAgXIDgAAIAAAXIhhAAIgPA5IBYAAIAADuIhyAAIAPAPQgvA0gtAdgAAkBfICAAAIAAg1IiAAAgAAkATICAAAIAAgvIiAAAgAAkgzICAAAIAAgsIiAAAgAByCWIARgTQAyAgAiAiIgQASQgjgigygfgAi2BkIASgSQAZAUAgAdQAyhEAKgsIieAAIAAgXIC5AAIAAAXQgBAIgSAoQgTApgeAoQAbAbASAYIgUAQQgtg7hKg4gAjWhJQA7gwAvheIAZAIIgIASQA3ArAaAkIgSASQgigrgqggQguBMgyAogAidg1IAAgZIB4AAIAAAZg");
	this.shape_122.setTransform(1351.2,909.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAHDYIAAkkIgWAiIgUgRQAwhAAghcIAZAJQgQArgWAqIBZAAQgIgogOgjIAXgKQARAtAIAoIA/AAIAAAZIhPAAIAABFIBIAAIAAAYIhIAAIAABIIBIAAIAAAYIhIAAIAABJIBUAAIAAAZIi3AAIAAAZgAAgCmIBJAAIAAhJIhJAAgAAgBFIBJAAIAAhIIhJAAgAAggbIBJAAIAAhFIhJAAgAiPC6IAcABQAWAAAFgDQAEgEAAgIIAAiqQguBzhEBAIgQgSQBGhJAnhhIhQAAIAVifIgeAAIAAgaIC5AAIAAAaIgyAAIAACGIAnAAIAAAZIgnAAIAAC0QAAARgIAKQgIAJgLACQgMABgiAAgAicggIBIAAIAAiGIg1AAg");
	this.shape_123.setTransform(1302,909.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AjVDCQBagfA8gsIASARQhAAyhZAdgAAoCLIAQgVQBlAoAyAjIgSAVQg6gphbgigAjXBbIAAgYIArAAIAAjgIBqAAIAAg5IAZAAIAAA5IBOAAIAAg5IAYAAIAAA5IBqAAIAADgIAxAAIAAAYgAA9BDIBSAAIAAhaIhSAAgAgpBDIBOAAIAAhaIhOAAgAiTBDIBRAAIAAhaIhRAAgAA9gvIBSAAIAAhXIhSAAgAgpgvIBOAAIAAhXIhOAAgAiTgvIBRAAIAAhXIhRAAg");
	this.shape_124.setTransform(1253,909.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("Ag4DCQBXgaAFhMIg1AAIAAiKIDMAAIAACKIg3AAIAABVQAAAJAJAAQAfAAAGgCQAGgCACgGQADgGAEgkIAXAJQgEArgMANQgLAMgiAAQgwAAAAggIAAhXIguAAQgBAtgeAhQgeAigtAMgAAIBGICaAAIAAgmIiaAAgAAIAKICaAAIAAghIiaAAgAjXC/QAhgIAvgOIAAiiIhHAAIAAgWIBHAAIAAg2IgtAAIAAgPIgTAUIgOgVQAxguAmhUIAWAIIgFAMQA5A5AJAOIgRAPQgaghgigeQgcAzgYAdIBuAAIAAAXIgwAAIAAA2IBCAAIAAAWIhCAAIAACZQAkgLAcgNIADAZQhoAog8AOgAjLAtIAWgHQAQAwAJA3IgXAIQgGgwgSg4gAhZB7QAOglAJgyIAXAIQgLA2gNAhgAgrhNIAAgWIBLAAQgKgegKgSIguAAIAAgWIBqAAQgIgTgLgRIAYgJQALATAKAaIBsAAIAAAWIgoAAQgMAfgKARIBGAAIAAAWgAA7hjIA6AAQAPgdAHgTIhiAAQAIATAKAdg");
	this.shape_125.setTransform(1141.5,909.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AA1APIAYgIQAKAoAOAaQAygkAWgbIAWAPQgpAqgqAdQAiA3A4AnIgSAUQhohMgbh3gAgqC4QAKgHAAgIIAAl6IDLAAIAAC+IizAAIAADBQAjgLAygVIAEAYQgxAVg+ATgAgIgrICZAAIAAg7IiZAAgAgIh+ICZAAIAAg7IiZAAgAjKCyIAAl6IB1AAIAAFvIgYAAIAAgcIhEAAIAAAngAixByIBEAAIAAhWIhEAAgAixAEIBEAAIAAhOIhEAAgAixhjIBEAAIAAhMIhEAAg");
	this.shape_126.setTransform(1093.5,910.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("ABmDRIgIgbIAjACQAkAAAGgDQAFgDAAgGIAAh3IiKAAIAACQIgbAAIAAiQIiLAAQgLBlgnA2IgXgQQAxhKABhnIAAjgIFhAAIAAF/QAAAUgOAIQgOAIgyAAIgWgBgAAmAcICKAAIAAheIiKAAgAh9AcICIAAIAAheIiIAAgAAmhdICKAAIAAhZIiKAAgAh9hdICIAAIAAhZIiIAAg");
	this.shape_127.setTransform(1042.4,910.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AATDVIgMgYIAnAAQAcAAAFgCQAEgDABgHIAAg0IkoAAIAAgXIEoAAIAAgZIAaAAIAAAZIBnAAIAAAXIhnAAIAAAvQAAAqguAAIgtgBgAiDCYIARgTQAhAQAnAfIgRAUQgigegmgSgACfA4QjFAPidABIgHgXQBZABBmgFIAAgnIicAAIAAiEICcAAIAAgiIjCAAIAAgXIDCAAIAAgeIAZAAIAAAeIDBAAIAAAXIjBAAIAAAiICaAAIAACEIgZAAQAjAeAZAkIgVANQgNgTgKgKgAAOAsQBNgEAvgFIgSgRIAQgMIh6AAgAAOgQICCAAIAAgiIiCAAgAiNgQICCAAIAAgiIiCAAgAAOhIICCAAIAAghIiCAAgAiNhIICCAAIAAghIiCAAg");
	this.shape_128.setTransform(994.6,909.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("ABfDVIgKgZQAUACASAAQAUAAAHgFQAGgFADgIQADgIAEglQAEgkACgkIgeAAQgsBohxA2IgSgSQBtg1AohXIgtAAQgwBLhtAwIgRgUQBngsApg7IgwAAQggAggqAWIgSgTQBKgmAgg0IhdAAIAAgYIEsAAIAAAYIizAAQgIAOgNATIC4AAQgCArgFAwQgFAvgDAJQgEAJgHAIQgIAIgLAEQgLAEgeABIgRgBgAjVBaQAigLAcgOIAAiJIg4AAIAAgZIA4AAIAAh0IAaAAIAAB0IAwAAIAAAZIgwAAIAAB+QAagMATgNIAEAaQhLApg0AUgAg1g6IAAiQIDpAAIAACQgAgchSIC3AAIAAglIi3AAgAgciPIC3AAIAAgjIi3AAg");
	this.shape_129.setTransform(945.3,909.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("ABuDWIgKgaIAsABQAcAAAFgEQAFgEAAgKIAAl/IAYAAIAAGHQAAAPgJALQgJAJgnAAIgnAAgAg/DVIgKgWIAdABQAVAAAJgIQAIgHAAgZIAAgMQg6AmhCAWIgNgVQBLgWA6gqQgCgLgFgLQgqAfhCAZIgOgUQBIgZAlgcQgDgKgKgHQgpAYgmAMIgOgUQAxgOAsgdIhWAAIAAgZIDLAAIAAAZIhSAAIgRANQAUAUAIAVQAZgKAkgaIAPASQgdAWgmARIABAIQAqAVAjAfIgOAWQgcgcgegRQgBAkgKARQgLASgogBIgTgBgAjNDEQAUgtAHg1QAGg1AAh6IAAg6IBkAAIAAhOIAaAAIAAAWIByAAIAAAYIhyAAIAAAgIB6AAQgGAmgPAoIgXgGQAKgaAFgWIhgAAIAAAcIBGgIIAAAXIhGAGIAAANQAAAMAMAAIBjAAIAAAWIhrAAQgMAAgIgIQgIgJABgMIAAgNIg8AGIAAgXIA8gGIAAgfIhLAAQAACTgGA/QgIBAgYAygABmB9IAAkwIAZAAIAAEwg");
	this.shape_130.setTransform(895.4,909.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AiTC5IAAlxIBlAAQDCAAAAC0QAABWg0A0Qg2AzhdAAgAhrCUIA5AAQBJAAApgoQApgoABhHQgBiQiYAAIg8AAg");
	this.shape_131.setTransform(854.6,910.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AhqCsIAAgtQAnAfAvAAQAlgBAZgSQAYgUgBgiQAAhKhnAAIgfAAIAAghIAeAAQBcAAAAhGQgBhAhGAAQgnAAgiAbIAAgoQAkgWAvABQArgBAdAZQAdAYABAoQgBBJhKAVIAAABQAoADAXAYQAYAZAAAjQAAA0gkAdQgkAeg4ABQg0gBgggTg");
	this.shape_132.setTransform(820.5,910.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AhSFFQBziJAAi6QAAi6h0iMIA1AAQByCHAADAQAAC/hyCDg");
	this.shape_133.setTransform(1807.5,339.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AEEE0IAAgvIlRAAIAAAvIgkAAIAApNIGZAAIAAJNgAhNDjIFQAAIAAnYIlQAAgAjbE0IAAmCQglBKgSAWIgVghQBEhsAui4IAiAIQgEAWgQA3IgRA2IAAHcgAgICnIAAi+IBPAAIAAhRIh0AAIAAgjIBzAAIAAhFIAkAAIAABFIB6AAIAAAjIh6AAIAABRIBUAAIAAC+gAAbCCIB/AAIAAh3Ih/AAg");
	this.shape_134.setTransform(1762.2,333.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AkuAUIAAgnIJdAAIAAAng");
	this.shape_135.setTransform(1693.6,331.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AjvEhQBYhNgBjDIgBgyQhEBCg6AnIgcgcQCShhBQiJIjbAAIAAgkIDwAAQAUgkAVgvIAkALQgTAtgQAbIFGAAIAAAkIlaAAQgaAsgaAjIFYAAIAAFsQAAAegUAMQgTAMhJgBQgcAAgagCIgSgkQAgADAlAAQA5AAALgFQAKgFAAgNIAAhbIlXAAQgSBcg8A9gAh4B7IFRAAIAAhUIlOAAQAAA2gDAegAhzACIFMAAIAAhPIlMAAg");
	this.shape_136.setTransform(1623.3,333.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AA+BfIAagcQCeCAA/BMIgeAdQhVhpiEhkgAk0ELQB6hRBMh3IAlAUQhlCMhrBHgAj2ALIAAk2IHoAAIAAE2gAjQgaIGbAAIAAjsImbAAg");
	this.shape_137.setTransform(1553.6,334.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgREzIAAi2IkeAAIAAgkIEeAAIAAgzIAjAAIAAAzIEeAAIAAAkIkeAAIAAC2gAkoELQBugtBOhDIAeAWQhWBJhrAtgABLC6IAagdQB8A3BJA1IgbAbQhRg5hzgxgAASgDQhcA6jJACIgSgiQC1AABQgmQhYgVhNgPQAdgaAagfIiMAAIAAgiICqAAQAcghAZgjIAgAOQgTAegWAYICnAAQAMgRAIgTIAjAIQgEALgJARICNAAIAAAiIijAAQgeAtgmAiQBrAaBvAnIgVAeQhXghiPgkgAiAhIQAsAJBeAWQAggWAhgtIirAAQgNARgTATgADviuIAAgsIncAAIAAAsIglAAIAAhPIEHAAQgIgSgPgYIAigLIAfA1ID0AAIAABPg");
	this.shape_138.setTransform(1483.7,333.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AC6E0IAAgjIl0AAIAAAjIgmAAIAAi9IG+AAIAAC9gAi6DvIF0AAIAAhWIl0AAgACeAXIAAAeIk9AAIAAghQg7AchFATIgXggQC/gwB2h3IAkAQQgGAJgEADQByBkCsAnIgZAhQhEgSg8gbgAiaASIEuAAQhOgkhIg8QhAA4hYAogAB3icIAkgQQAmAnAPAhIgkAPQgYgrgdgcgAidibIAkgPQATAWASApIgjARQgNgkgZgdgAkviOQBfhEAnheIAjANQgKAagVAgICfAAIAAAjIi5AAQgnAvgvAkgAABinQBCg5AghTIAjANQgMAcgSAiIC+AAIAAAiIjWAAQgbAkgXATg");
	this.shape_139.setTransform(1413.6,332.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAfFFQhxiDAAi/QAAjABxiHIA0AAQhzCNAAC5QgBC5BzCKg");
	this.shape_140.setTransform(1369.4,339.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("Ag8EFQgLgLAAgRQgBgRAMgLQAMgMAQAAQAQAAAMAMQALAMAAAQQAAAQgLAMQgLAMgRAAQgQAAgMgMgAg6B0IAAgdQAAgiANgZQANgZAogfQAoggAOgaQAOgZAAgfQAAgkgZgWQgagYgpAAQhBAAgyAwIAAg8QA7gkBAAAQBAAAAmAiQAmAjAAA5QAAAlgRAgQgSAgguAoQgiAbgMARQgKASgBAfIAAAcg");
	this.shape_141.setTransform(1322.4,333.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("ACOEqIgMglQAGABAkgBQAjgBAGgEQAHgFADgFQAEgGAGg8QAGg9ABg3IkoAAIAAlpIFaAAIAAAjIifAAIAABIICDAAIAAAhIiDAAIAABLICDAAIAAAhIiDAAIAABNICRAAQAABWgHBEQgHBEgKAQQgJAQgSAIQgTAIghAAgAgUAcIBzAAIAAhNIhzAAgAgUhSIBzAAIAAhLIhzAAgAgUi+IBzAAIAAhIIhzAAgAhzEGQAjhBAXhlIAhAHQgaBtgfA/gAAFBvIAggFQAPBegCA5IgjAJQAChIgMhTgAkhDsIAAn5IChAAIAAHoIglAAIAAguIhXAAIAAA/gAj8CJIBXAAIAAlzIhXAAgABLBuIAfgHQAUA6AIA5IggALQgJg2gShBgACTBnIAggGQAWA1AHArIgfALQgKgxgUg0g");
	this.shape_142.setTransform(1251.8,334.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("ABdCfQhOA2hgArIgaggQBzguBKg3QgYhlgGhYIh+APIgDglIB+gPQgJhWAAhMIABgpIAlAAIgBAsQAABFAHBUIDVgZIAEAjIjWAaQAGBVAVBYQBLhAA9hXIAeAVQhKBnhRA/QAYBEAcAgQAcAgAQAAQAKAAAIgHQAIgHAKglQAKgmAFgoIAiATQgIBDgVApQgUApgiAAQhFAAg9iUgAkIExIgNglQBAABANgCQAMgCAAgKIAAjAQgkAOhFASIgMgkQA/gPA2gRIAAiuIhwAAIAAgkIBwAAIAAh7IAjAAIAAB7IBcAAIAAAkIhcAAIAAChQAwgQAsgSIAIAiQgqATg6ATIAADMQAAAUgLAPQgMAPgxAAIgngBgACGkBIAdgXQA4AqAjAyIgeAYQgpg4gxglg");
	this.shape_143.setTransform(1180.9,333.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("ABdCfQhOA2hgArIgaggQBzguBKg3QgYhlgGhYIh+APIgDglIB+gPQgJhWAAhMIABgpIAlAAIgBAsQAABFAHBUIDVgZIAEAjIjWAaQAGBVAVBYQBLhAA9hXIAeAVQhKBnhRA/QAYBEAcAgQAcAgAQAAQAKAAAIgHQAIgHAKglQAKgmAFgoIAiATQgIBDgVApQgUApgiAAQhFAAg9iUgAkIExIgNglQBAABANgCQAMgCAAgKIAAjAQgkAOhFASIgMgkQA/gPA2gRIAAiuIhwAAIAAgkIBwAAIAAh7IAjAAIAAB7IBcAAIAAAkIhcAAIAAChQAwgQAsgSIAIAiQgqATg6ATIAADMQAAAUgLAPQgMAPgxAAIgngBgACGkBIAdgXQA4AqAjAyIgeAYQgpg4gxglg");
	this.shape_144.setTransform(1110.9,333.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AjPEyIAAmfQgeA3gxA5IgVgiQBahqA4ioIAjAOQgJAdgTApIgRApIAAHmgAgDEnQgdAAgQgQQgRgQAAgcIAAkPIhBAVIgEglIBFgVIAAioIAlAAIAACaIBsglIAAi1IAlAAIAACpICeg1QgCC1gjCKIgkgNQAfhyAFiNIh5AoIAAETIglAAIAAkHIhsAlIAAEfQAAAJAJAGQAIAGALAAIDoAAQANAAALgLQALgLAEhFIAlAOQgIBVgXAOQgWAOgcAAg");
	this.shape_145.setTransform(1040.8,333.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgTEyIAAh7IjRAAIAABgIgjAAIAAh7ID0AAIAAgiIjAAAIAAiLICsAAIAVgcIAjAFIgQAXIDQAAIAACLIjDAAIAAAiID2AAIAABHQAAAYgKANQgLALgRACQgSABhFgBIgLggQATACAaABQAngBAJgEQAJgFAAgKIAAgtIjUAAIAAB7gAixBeIFfAAIAAgfIlfAAgAixAkIFfAAIAAgaIlfAAgACIgsIgMggIAlABQAfAAAGgEQAGgDAAgJIAAh1IimAAIAAgfICmAAIAAhCIAjAAIAABCIA/AAIAAAfIg/AAIAAB3QAAAagQAKQgQALgogBIgfgBgAkthJQBbgCA/gGIAAgpIh2AAIAAgbIB2AAIAAgkIiWAAIAAgbICWAAIAAgiIh2AAIAAgaIB2AAIAAggIAjAAIAAAgIB0AAIAAAaIh0AAIAAAiIB/AAIAAAbIh/AAIAAAkIB0AAIAAAbIh0AAIAAAnQAggBAwgGIBEgHIAAAeQiBAQjNAHgAAwiiIAZgUQAcARAnApIgbAVQgbgggmgbg");
	this.shape_146.setTransform(971.3,333.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AiPERIAgABQAigBAKgCQAKgCAAgLIAAhxQhlAthAAWIgQgXQgIA+gaA4IgfgTQAfhSAAhVIAAi8ID7AAIAAFLQAAARgMAMQgNAMgPACQgQABg0AAgAjqB5QAAAdgDAcQBEgVBwg0IAAiIIixAAIAAAwQBJANBOAcIgQAgQhRgbg2gKgABnEsQgYAAgOgOQgPgNAAgXIAAkGIAkAAIAABkIDJAAIAAAiIjJAAIAAB9QAAAUAZAAQBrAAAPgBQAPgCAJgMQAJgNAFg/IAjAJQgDA1gMAZQgLAYgPAHQgQAHgpABgABegoQgSAAgMgOQgNgOAAgSIAAjaIAjAAIAABXIDJAAIAAAiIjJAAIAABbQAAARATAAIDCAAIAAAjgAgfiQQh+ATiHAGIgNgdQBAgyAxhtIAkAJQgpBYgzA3QBugIBVgMQgTgagpgoIAhgUQBOBPAaA6IgcAWQgLgUgQgWg");
	this.shape_147.setTransform(901.1,333.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgREzIgOgmQAjADAdAAQAkAAAAgaIAAlyIAkAAIAAFxQAAAhgRAQQgQAPg1AAQgSAAgSgCgAjQE0IAAmiQgmBAgqAzIgTglQBRhiBHiyIAjAOQgLAbgUArIgUAqIAAHqgACkgFIAggQQBBBzAvB1IgjAQQgth1hAhzgAiFDNQBBhcAtiIIAjAMQg0CZg/BUgAiMg4QBchtAsiMIAlAKQgLAegUAvIEcAAQgNBOgnBkIgigPQAbg7APhCIkBAAQgqBWg8BGg");
	this.shape_148.setTransform(831.1,333.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("ADcEqIAAg3Im3AAIAAA3IgkAAIAAmyICeAAIAAh+IjOAAIAAgjIJfAAIAAAjIjeAAIAAB+ICvAAIAAGygAjbDQIG3AAIAAk1IiKAAIAACVQAAATAPAAIBeAAIAAAiIhjAAQgUAAgNgNQgNgOAAgVIAAiaIhtAAQABCphgBMIgegZQAugkAVguQAVguAChcIh5AAgAg+iIIBsAAIAAh+IhsAAg");
	this.shape_149.setTransform(1763.5,239);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgPEyIAAjMQh8CDiTA2IgTghQCcg+BkhsIi+AAIAAjqIDgAAIAAg5IkWAAIAAgkIEWAAIAAg+IAjAAIAAA+IEYAAIAAAkIkYAAIAAA5IDdAAIAADqIi9AAQBXBnCnA/IgVAgQithEhchwIAADMgAAUAyIC5AAIAAhBIi5AAgAjJAyIC6AAIAAhBIi6AAgAAUgyIC5AAIAAhCIi5AAgAjJgyIC6AAIAAhCIi6AAg");
	this.shape_150.setTransform(1693.4,238);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AkvEgQAxhoAAjGIAAjvID9AAQgFgSgRgdIAigIQALARAOAmIEJAAIAAAhIoHAAIAACuQABDsg6B3gADlEJQjBATjTAJIgGgeQB0ggB9hLQhTAHh+AHIgHgeQByg3A1grIAfAVQguAlhNAiQAtAABLgGQBMgGAGgDQAHgDBEgwIAcAXQiYBuiUA4QCqgIBtgMQgXgXgbgYIAbgYQBKBFAtA2IggATQgOgRgYgagACPA0IAAivIhcAAIAAgfIBcAAIAAgpIAhAAIAAApIBsAAIAAAfIhsAAIAACvgAhlAzIAAiuIhVAAIAAgfIBVAAIAAgpIAhAAIAAApIBbAAIAAAfIhbAAIAACugAAtAkQAZg7AJhIIAfAJQgFA+geBGgAjBAdQAbhAAEg+IAgAHQgHBKgZA6gADeAYQgLgJAAgQIAAhbIAgAAIAABQQAAAJAGADQAHAEAwAAIgBAcQgOACgOAAQgqAAgLgKgAgggIIAAhVIAeAAIAABHQAAANAWAAIANgBIAAAdIgWABQgrAAAAgcg");
	this.shape_151.setTransform(1623.2,237.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("ABNE1IAAlvIjBAAIAAgmIDBAAIAAjRIAmAAIAADRIDCAAIAAAmIjCAAIAAFvgAjKE1IAAmbQggAxg1A1IgVghQBchcBSi3IAjAPQgTAqgXAtIgXAqIAAHZg");
	this.shape_152.setTransform(1553.2,238.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("ADHEZQgVgXgSg0QgoA3ghAdIgegUQAtgqAthEQgWhFgGjrImlAAIAAghIC0AAIAAgwIiaAAIAAgfICaAAIAAgwIAkAAIAAAwICVAAIAAAfIiVAAIAAAwIDLAAIAAh/IAlAAIAAB/ICYAAIAAAhIiXAAQAACjATBfQAthOAahtIAjALQglCGg5BfQAIAdAQAjQARAiAJAAQAHAAALgcQALgcAIg8IAiAQQgVCMgxAAQgTAAgTgYgAkyEPQBSgVBAgkIAZAaQg+AmhYAagAhQD1IAWgbQA0ATAtAjIgWAcQgxglgwgSgAkuDGIAAgfIBrAAIAAgsIhbAAIAAgeIBbAAIAAgoIhDAAIAAihIE7AAIAAChIhDAAIAAAoIBZAAIAAAeIhZAAIAAAsIBgAAIAAAfgAihCnIBxAAIAAgsIhxAAgAihBdIBxAAIAAgoIhxAAgAhWAVIBoAAIAAgiIhoAAgAjjAVIBpAAIAAgiIhpAAgAhWgsIBoAAIAAggIhoAAgAjjgsIBpAAIAAggIhpAAgADCkRIAggSQAlAkARAoIggARQgagxgcgag");
	this.shape_153.setTransform(1483.4,238.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("Ah8EoIgLgmQATADBWAAQAHAAAHgHQAFgGABgHIAAk6QCBhXBmhkInwAAIAAgmIImAAIAAAmQh7B9h9BRIAAEqQgBAfgRAMQgSAMg2AAQgeAAgfgDg");
	this.shape_154.setTransform(1413.3,239);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("Ag9ExQgfAAgQgOQgPgNAAgjIAAiXIAkAAIAACfQAAANAPAEQAPADCMAAQAfAAAJgSQAIgSACgqIAlAJQgHBDgSATQgTASgjABgACpCEIAfgWQBCBVAlBBIghAWQgkhHhBhPgAktEEQA2hJAihVIAiAQQgqBlgvA8gAglAzIAegRQA2A4AiA+IgfAQQglg6gyg7gAiTAHQgUAAgNgOQgOgPAAgVIAAiGIhlAAIAAgmIEcAAQgEgIgohGIAkgMQAhA2AOAkIELAAIAAAmInCAAIAAB8QAAAYAZAAIF6AAIAAAkg");
	this.shape_155.setTransform(1343.4,237.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AiMEMQAdACAiAAQAwAAAIgEQAJgFAAgSIAAi+IkkAAIAAgkIEkAAIAAjwQhtALiSACIgPgkQEpACDsg9IAWAhQhWAYijAVIAAD0IEaAAIAAAkIkaAAIAADUQAAAPgQAPQgOAIggACQggABg3AAgAjeikIAigRQA5BYAYA2IghASQgjhOgvhBgABugkQAxg+AohhIAlANQgjBXg0BJg");
	this.shape_156.setTransform(1273.3,237.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("ACwClQg2BPhiA+IgZgeQBhg2A+hhQA+higDlOIAkAAQAFFAg/B2QBTBbAiA+IgaAYQguhLhAhEgAjfE0IAAmYQggA3gkAtIgUghQBVh1A7idIAhANQgKAfgWAvIgVAvIAAHdgAiXDCIA+geIAAnHIAjAAIAAG1QBYgwAvgeIAAApQh2BHhnAygAgEjeIAcgUQBGBVAiBLIgdAVQgihGhFhbg");
	this.shape_157.setTransform(1203.8,238.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AkyEKQBvgZBjhDIiSAAIAAkjIHnAAIAAEjIlMAAIAUAZQheBCh9AigAjOCOIGeAAIAAg5ImeAAgAjOAzIGeAAIAAgzImeAAgAjOghIGeAAIAAgzImeAAgABDDjIATggQB+AaBeAvIgUAeQhfgth8gagAjdiiIAAiIIG/AAIAACIgAi4jEIF1AAIAAhFIl1AAg");
	this.shape_158.setTransform(1133.4,239.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("ADaEzIAAglImLAAIAAAlIglAAIAAjCIHUAAIAADCgAixDsIGLAAIAAhYImLAAgAjMA9IAAjRQglAsgkAgIgdgYQBjhZA8h5IAlALIgjA9ICpAAQgJgUgWgnIAhgLQATAcAQAqIDtAAIAAAkIjuAAIAAAxIDPAAIAAAiIjPAAIAAA2IDQAAIAAAhIjQAAIAAA4ID3AAIAAAhgAioAcIDBAAIAAg4IjBAAgAiog+IDBAAIAAg1IjBAAgAioiVIDBAAIAAgxIjBAAg");
	this.shape_159.setTransform(1063.3,237.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AhQEeQA6hWAAiWIAAiQICAAAIAAjRIAkAAIAADRICGAAIAAFjQAAAZgPALQgQALgwAAIgqgCIgMgkQAeACAgAAQAYAAAGgDQAFgDAAgHIAAiYQhhAyh7A1IgTgZQgMA+gnA9gAACCxQCMg2Big1IAAiBIjiAAIAAA6QBtADBQAVIgMAjQhQgVhhgEQAABGgMBKgAktEFQAsgIBFgSIAAjjIhhAAIAAggIBhAAIAAhLIhDAAIAAgbQgKAKgOAMIgYgaQBKhKA1hnIAeARQAAAEgIAMQA9AwAsAzIgdAYQgigug6gwQgkA9gsA0ICmAAIAAAhIhHAAIAABLIBaAAIAAAgIhaAAIAADZQAMgCBEgVIABAjQiDAqhUARgAkdBEIAggMQATA9ANBQIgkAJQgGhKgWhAgAiBCuQAVgzAJhEIAhAJQgMBHgSAygAgukMIAhgSQAtBPASA9IggAQQgOg2gyhUgADBiXQAqg3AmhTIAfAUQgoBVgnA0g");
	this.shape_160.setTransform(993.1,237.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AjREzIAAmZQggAygtA3IgYgiQBihzA+ieIAlANQgNAggXAtIgXAsIAAHdgAiKEjIAAglICNAAQgRiqg9jNIAZgNIhPAAIAAglIDPAAQgPg/gbg8IAjgMQAaA6AUBNIC3AAIAAAlIhHAAIAXAIQggDWgzCmICOAAIAAAlgAApD+IBaAAQA9jCAVjCIj7AAQA3DTAYCxg");
	this.shape_161.setTransform(923.1,238.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("Ak3EfQBvhmAch8Ih2AAIAAgkQBFhPAug/IiBAAIAAgiICuAAIAAAhQg9BSg0A9IBtAAIAAAiQgNA9gjA+QAcAgAxAXQAwAWB0AAID9AAIgMAjIj4AAQhjABg4gVQg5gUgogqQgpA4gpApgAhBDHIAAigIFAAAIAACggAgcCkID3AAIAAhaIj3AAgAhLgQIAAghIFTAAIAAAhgAhLhoIAAgjIFTAAIAAAjgAkckVIAagZQA+AyAmA1IgaAZQgvg+g1gpgAhxi/IAAgkIC5AAQgOgmgSggIAjgLQAZAsALAlIDAAAIAAAkg");
	this.shape_162.setTransform(853.8,238.1);

	this.instance_29 = new lib.fefefwfweq();
	this.instance_29.parent = this;
	this.instance_29.setTransform(106,296,1.593,1.593);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.vssw},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:1475.6,y:631.7}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},334).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]},1).to({state:[{t:this.instance_24},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_17,p:{x:1675.9,y:206.8}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:872.7,y:318.5}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},102).to({state:[{t:this.instance_24},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_17,p:{x:1675.9,y:206.8}},{t:this.shape_29}]},90).to({state:[{t:this.instance_24},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_17,p:{x:1675.9,y:206.8}},{t:this.shape_29},{t:this.shape_58},{t:this.shape_27,p:{x:870.8,y:317.9}},{t:this.shape_57},{t:this.shape_56,p:{x:951.7,y:301}},{t:this.shape_55,p:{x:1001.8,y:300.9}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.instance_24},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_17,p:{x:1675.9,y:206.8}},{t:this.shape_29},{t:this.shape_58},{t:this.shape_27,p:{x:870.8,y:317.9}},{t:this.shape_57},{t:this.shape_56,p:{x:951.7,y:301}},{t:this.shape_55,p:{x:1001.8,y:300.9}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},3).to({state:[{t:this.instance_24},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_17,p:{x:1675.9,y:206.8}},{t:this.shape_29}]},83).to({state:[{t:this.instance_24},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_17,p:{x:1675.9,y:206.8}},{t:this.shape_29},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72,p:{x:1197.9,y:306}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},14).to({state:[{t:this.instance_24},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_17,p:{x:1675.9,y:206.8}},{t:this.shape_29},{t:this.shape_105},{t:this.shape_27,p:{x:836.3,y:327.3}},{t:this.shape_104},{t:this.shape_56,p:{x:917.3,y:310.5}},{t:this.shape_55,p:{x:967.3,y:310.4}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_72,p:{x:1027.7,y:474.1}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},3).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_17,p:{x:1675.9,y:206.8}},{t:this.shape_29}]},77).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.instance_26},{t:this.instance_25},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},52).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.instance_26},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},35).to({state:[{t:this.instance_27}]},40).to({state:[{t:this.instance_28}]},9).to({state:[{t:this.instance_29},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]},1).to({state:[]},66).to({state:[{t:this.instance_24},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_17,p:{x:1675.9,y:206.8}},{t:this.shape_29},{t:this.shape_58},{t:this.shape_27,p:{x:870.8,y:317.9}},{t:this.shape_57},{t:this.shape_56,p:{x:951.7,y:301}},{t:this.shape_55,p:{x:1001.8,y:300.9}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},469).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(844).to({_off:false},0).to({_off:true,alpha:0},9).wait(537));

	// 底圖
	this.instance_30 = new lib.補間動畫9("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(960.6,594.6);
	this.instance_30._off = true;

	this.instance_31 = new lib.補間動畫10("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(960.6,596,6.558,4.638,0,0,0,0,0.3);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(320).to({_off:false},0).to({_off:true,regY:0.3,scaleX:6.56,scaleY:4.64,y:596},14).wait(1056));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(320).to({_off:false},14).wait(303).to({startPosition:0},0).wait(132).to({startPosition:0},0).wait(620).to({startPosition:0},0).wait(1));

	// 圖層 7
	this.feffewrqw = new lib.元件25();
	this.feffewrqw.parent = this;
	this.feffewrqw.setTransform(1584.8,795.6,1,1,0,0,0,200.8,56.6);
	new cjs.ButtonHelper(this.feffewrqw, 0, 1, 1);

	this.instance_32 = new lib.我準備好了();
	this.instance_32.parent = this;
	this.instance_32.setTransform(1384,739,0.437,0.437);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.feffewrqw}]},319).to({state:[{t:this.instance_32}]},14).to({state:[]},1).wait(1056));

	// 圖層 6
	this.instance_33 = new lib.歡迎來到單元測驗看來你已經熟悉了成為銷售員該如何穿著那麼你準備好要進行測驗了嗎();
	this.instance_33.parent = this;
	this.instance_33.setTransform(869,354,0.716,0.716);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(319).to({_off:false},0).wait(14).to({_off:true},1).wait(1056));

	// 配備解說
	this.instance_34 = new lib.關閉按鈕png複製6();
	this.instance_34.parent = this;
	this.instance_34.setTransform(1173,487,0.412,0.412);

	this.instance_35 = new lib._5bg();
	this.instance_35.parent = this;
	this.instance_35.setTransform(703,476,0.412,0.412);

	this.mynhtbrhbnyr = new lib.元件20();
	this.mynhtbrhbnyr.parent = this;
	this.mynhtbrhbnyr.setTransform(449,418.4,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.mynhtbrhbnyr, 0, 1, 1);

	this.hjnbrvfesgvdces = new lib.元件20();
	this.hjnbrvfesgvdces.parent = this;
	this.hjnbrvfesgvdces.setTransform(593.8,677.1,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.hjnbrvfesgvdces, 0, 1, 1);

	this.hyfuiewfhieojsp4 = new lib.元件19();
	this.hyfuiewfhieojsp4.parent = this;
	this.hyfuiewfhieojsp4.setTransform(1768.2,239.8,1.461,1.461,0,0,0,35.1,35.1);
	new cjs.ButtonHelper(this.hyfuiewfhieojsp4, 0, 1, 1);

	this.instance_36 = new lib.vcepng複製6();
	this.instance_36.parent = this;
	this.instance_36.setTransform(476,415,0.374,1.461);

	this.instance_37 = new lib.word1png複製5();
	this.instance_37.parent = this;
	this.instance_37.setTransform(696,243,1.461,1.461);

	this.instance_38 = new lib.word2png複製4();
	this.instance_38.parent = this;
	this.instance_38.setTransform(700,243,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_35,p:{scaleX:0.412,scaleY:0.412,x:703,y:476}},{t:this.instance_34,p:{scaleX:0.412,scaleY:0.412,x:1173,y:487}}]},249).to({state:[{t:this.instance_35,p:{scaleX:0.493,scaleY:0.493,x:653,y:452}},{t:this.instance_34,p:{scaleX:0.493,scaleY:0.493,x:1214,y:463}}]},1).to({state:[{t:this.instance_35,p:{scaleX:0.605,scaleY:0.605,x:583,y:416}},{t:this.instance_34,p:{scaleX:0.605,scaleY:0.605,x:1271,y:431}}]},1).to({state:[{t:this.instance_35,p:{scaleX:0.714,scaleY:0.714,x:514,y:383}},{t:this.instance_34,p:{scaleX:0.714,scaleY:0.714,x:1327,y:400}}]},1).to({state:[{t:this.instance_35,p:{scaleX:0.818,scaleY:0.818,x:449,y:351}},{t:this.instance_34,p:{scaleX:0.818,scaleY:0.818,x:1381,y:371}}]},1).to({state:[{t:this.instance_35,p:{scaleX:0.973,scaleY:0.973,x:352,y:302}},{t:this.instance_34,p:{scaleX:0.973,scaleY:0.973,x:1461,y:327}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.066,scaleY:1.066,x:294,y:273}},{t:this.instance_34,p:{scaleX:1.066,scaleY:1.066,x:1509,y:301}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.187,scaleY:1.187,x:218,y:235}},{t:this.instance_34,p:{scaleX:1.187,scaleY:1.187,x:1572,y:266}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.303,scaleY:1.303,x:146,y:199}},{t:this.instance_34,p:{scaleX:1.303,scaleY:1.303,x:1632,y:234}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.343,scaleY:1.343,x:121,y:186}},{t:this.instance_34,p:{scaleX:1.343,scaleY:1.343,x:1653,y:222}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.375,scaleY:1.375,x:102,y:175}},{t:this.instance_34,p:{scaleX:1.375,scaleY:1.375,x:1669,y:213}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.432,scaleY:1.432,x:66,y:158}},{t:this.instance_34,p:{scaleX:1.432,scaleY:1.432,x:1698,y:197}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_36,p:{scaleX:0.374,x:476,y:415}}]},8).to({state:[{t:this.instance_35,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_36,p:{scaleX:0.534,x:476,y:415}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_36,p:{scaleX:0.853,x:476,y:415}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_36,p:{scaleX:1.13,x:476,y:415}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_36,p:{scaleX:1.304,x:476,y:415}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_36,p:{scaleX:2.332,x:473,y:414}},{t:this.instance_37}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_36,p:{scaleX:0.277,x:624,y:674}}]},5).to({state:[{t:this.instance_35,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_36,p:{scaleX:0.437,x:624,y:674}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_36,p:{scaleX:0.597,x:624,y:674}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_36,p:{scaleX:0.743,x:624,y:674}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_36,p:{scaleX:0.845,x:624,y:674}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.hyfuiewfhieojsp4},{t:this.hjnbrvfesgvdces},{t:this.mynhtbrhbnyr},{t:this.instance_36,p:{scaleX:0.857,x:624,y:674}},{t:this.instance_38}]},1).to({state:[]},1).wait(1105));

	// 飾品解說
	this.instance_39 = new lib.關閉按鈕png複製4();
	this.instance_39.parent = this;
	this.instance_39.setTransform(1184,481,0.433,0.433);

	this.instance_40 = new lib._4bg();
	this.instance_40.parent = this;
	this.instance_40.setTransform(690,469,0.433,0.433);

	this.njtrefdetweygewsefe = new lib.元件18();
	this.njtrefdetweygewsefe.parent = this;
	this.njtrefdetweygewsefe.setTransform(540.7,441.7,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.njtrefdetweygewsefe, 0, 1, 1);

	this.kyntjbsrdgfewrsg = new lib.元件18();
	this.kyntjbsrdgfewrsg.parent = this;
	this.kyntjbsrdgfewrsg.setTransform(583.8,700.9,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.kyntjbsrdgfewrsg, 0, 1, 1);

	this.kumnbdfweagfgras = new lib.元件18();
	this.kumnbdfweagfgras.parent = this;
	this.kumnbdfweagfgras.setTransform(583.8,866.7,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.kumnbdfweagfgras, 0, 1, 1);

	this.tsaosha = new lib.元件17();
	this.tsaosha.parent = this;
	this.tsaosha.setTransform(1768.2,239.8,1.461,1.461,0,0,0,35.1,35.1);
	new cjs.ButtonHelper(this.tsaosha, 0, 1, 1);

	this.instance_41 = new lib.vcepng複製5();
	this.instance_41.parent = this;
	this.instance_41.setTransform(567,440,0.378,1.461);

	this.instance_42 = new lib.word1png複製4();
	this.instance_42.parent = this;
	this.instance_42.setTransform(698,243,1.461,1.461);

	this.instance_43 = new lib.word2png複製3();
	this.instance_43.parent = this;
	this.instance_43.setTransform(698,243,1.461,1.461);

	this.instance_44 = new lib.word3png複製2();
	this.instance_44.parent = this;
	this.instance_44.setTransform(696,244,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_40,p:{scaleX:0.433,scaleY:0.433,x:690,y:469}},{t:this.instance_39,p:{scaleX:0.433,scaleY:0.433,x:1184,y:481}}]},199).to({state:[{t:this.instance_40,p:{scaleX:0.526,scaleY:0.526,x:631,y:440}},{t:this.instance_39,p:{scaleX:0.526,scaleY:0.526,x:1232,y:454}}]},1).to({state:[{t:this.instance_40,p:{scaleX:0.613,scaleY:0.613,x:576,y:412}},{t:this.instance_39,p:{scaleX:0.613,scaleY:0.613,x:1277,y:430}}]},1).to({state:[{t:this.instance_40,p:{scaleX:0.692,scaleY:0.692,x:526,y:387}},{t:this.instance_39,p:{scaleX:0.692,scaleY:0.692,x:1318,y:408}}]},1).to({state:[{t:this.instance_40,p:{scaleX:0.812,scaleY:0.812,x:452,y:351}},{t:this.instance_39,p:{scaleX:0.812,scaleY:0.812,x:1381,y:374}}]},1).to({state:[{t:this.instance_40,p:{scaleX:0.927,scaleY:0.927,x:380,y:316}},{t:this.instance_39,p:{scaleX:0.927,scaleY:0.927,x:1441,y:342}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.071,scaleY:1.071,x:291,y:272}},{t:this.instance_39,p:{scaleX:1.071,scaleY:1.071,x:1515,y:301}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.187,scaleY:1.187,x:219,y:235}},{t:this.instance_39,p:{scaleX:1.187,scaleY:1.187,x:1575,y:269}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.256,scaleY:1.256,x:177,y:213}},{t:this.instance_39,p:{scaleX:1.256,scaleY:1.256,x:1610,y:250}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.331,scaleY:1.331,x:130,y:190}},{t:this.instance_39,p:{scaleX:1.331,scaleY:1.331,x:1650,y:228}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.391,scaleY:1.391,x:92,y:171}},{t:this.instance_39,p:{scaleX:1.391,scaleY:1.391,x:1680,y:212}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.442,scaleY:1.442,x:60,y:155}},{t:this.instance_39,p:{scaleX:1.442,scaleY:1.442,x:1707,y:197}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.378,x:567,y:440}}]},8).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.537,x:567,y:440}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.672,x:567,y:440}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.808,x:567,y:440}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.988,x:567,y:440}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:1.417,x:567,y:440}},{t:this.instance_42}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.268,x:614,y:697}}]},5).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.402,x:614,y:697}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.558,x:614,y:697}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.715,x:614,y:697}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.961,x:614,y:697}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.966,x:614,y:697}},{t:this.instance_43}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.313,x:611,y:864}}]},5).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.445,x:611,y:864}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.556,x:611,y:864}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.756,x:611,y:864}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.89,x:611,y:864}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.tsaosha},{t:this.kumnbdfweagfgras},{t:this.kyntjbsrdgfewrsg},{t:this.njtrefdetweygewsefe},{t:this.instance_41,p:{scaleX:0.966,x:612,y:864}},{t:this.instance_44}]},1).to({state:[]},1).wait(1145));

	// 下半身解說
	this.unybrtvcdsgesrgerscfer = new lib.元件15();
	this.unybrtvcdsgesrgerscfer.parent = this;
	this.unybrtvcdsgesrgerscfer.setTransform(1196,497.3,0.426,0.426,0,0,0,35.1,35.3);
	new cjs.ButtonHelper(this.unybrtvcdsgesrgerscfer, 0, 1, 1);

	this.instance_45 = new lib._3bg();
	this.instance_45.parent = this;
	this.instance_45.setTransform(694,471,0.426,0.426);

	this.leehowhowhandsome = new lib.元件16();
	this.leehowhowhandsome.parent = this;
	this.leehowhowhandsome.setTransform(506.9,874.3,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.leehowhowhandsome, 0, 1, 1);

	this.lyczzz = new lib.元件16();
	this.lyczzz.parent = this;
	this.lyczzz.setTransform(554.4,450.9,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.lyczzz, 0, 1, 1);

	this.instance_46 = new lib.vcepng複製4();
	this.instance_46.parent = this;
	this.instance_46.setTransform(583,447,0.359,1.461);

	this.instance_47 = new lib.word1png複製3();
	this.instance_47.parent = this;
	this.instance_47.setTransform(698,241,1.461,1.461);

	this.instance_48 = new lib.word2png複製2();
	this.instance_48.parent = this;
	this.instance_48.setTransform(698,244,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_45,p:{scaleX:0.426,scaleY:0.426,x:694,y:471}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.3,scaleX:0.426,scaleY:0.426,x:1196,y:497.3}}]},149).to({state:[{t:this.instance_45,p:{scaleX:0.525,scaleY:0.525,x:633,y:440}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.3,regY:35.5,scaleX:0.525,scaleY:0.525,x:1250.5,y:473.1}}]},1).to({state:[{t:this.instance_45,p:{scaleX:0.616,scaleY:0.616,x:576,y:412}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.3,regY:35.5,scaleX:0.616,scaleY:0.616,x:1300.8,y:450.6}}]},1).to({state:[{t:this.instance_45,p:{scaleX:0.707,scaleY:0.707,x:519,y:384}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.3,regY:35.5,scaleX:0.707,scaleY:0.707,x:1351,y:428.1}}]},1).to({state:[{t:this.instance_45,p:{scaleX:0.823,scaleY:0.823,x:447,y:348}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.3,regY:35.6,scaleX:0.823,scaleY:0.823,x:1414.8,y:399.5}}]},1).to({state:[{t:this.instance_45,p:{scaleX:0.95,scaleY:0.95,x:367,y:308}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.3,regY:35.6,scaleX:0.95,scaleY:0.95,x:1485.2,y:367.9}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.085,scaleY:1.085,x:282,y:266}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.4,regY:35.6,scaleX:1.085,scaleY:1.085,x:1559.7,y:334.6}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.213,scaleY:1.213,x:202,y:226}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.4,regY:35.6,scaleX:1.213,scaleY:1.213,x:1630.2,y:303.2}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.278,scaleY:1.278,x:161,y:206}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.4,regY:35.6,scaleX:1.278,scaleY:1.278,x:1666.7,y:287}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.316,scaleY:1.316,x:137,y:194}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.4,regY:35.6,scaleX:1.316,scaleY:1.316,x:1687.2,y:277.8}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.389,scaleY:1.389,x:92,y:171}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.4,regY:35.6,scaleX:1.389,scaleY:1.389,x:1728,y:259.6}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.426,scaleY:1.426,x:69,y:159}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.4,regY:35.6,scaleX:1.426,scaleY:1.426,x:1748.1,y:250.6}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_46,p:{scaleX:0.359,x:583,y:447}}]},8).to({state:[{t:this.instance_45,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_46,p:{scaleX:0.454,x:583,y:447}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_46,p:{scaleX:0.587,x:583,y:447}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_46,p:{scaleX:0.739,x:583,y:447}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_46,p:{scaleX:0.929,x:583,y:447}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_46,p:{scaleX:1.26,x:584,y:447}},{t:this.instance_47}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_46,p:{scaleX:0.518,x:539,y:871}}]},5).to({state:[{t:this.instance_45,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_46,p:{scaleX:0.838,x:538,y:871}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_46,p:{scaleX:1.097,x:536,y:871}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_46,p:{scaleX:1.317,x:535,y:871}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_46,p:{scaleX:1.597,x:533,y:871}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.unybrtvcdsgesrgerscfer,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.lyczzz},{t:this.leehowhowhandsome},{t:this.instance_46,p:{scaleX:1.762,x:532,y:871}},{t:this.instance_48}]},1).to({state:[]},1).wait(1205));

	// 上半身解說
	this.instance_49 = new lib.關閉按鈕png複製2();
	this.instance_49.parent = this;
	this.instance_49.setTransform(1170,488,0.407,0.407);

	this.instance_50 = new lib._2bg();
	this.instance_50.parent = this;
	this.instance_50.setTransform(706,478,0.407,0.407);

	this.dxctfvgybhjnkml = new lib.元件13();
	this.dxctfvgybhjnkml.parent = this;
	this.dxctfvgybhjnkml.setTransform(1768.2,239.8,1.461,1.461,0,0,0,35.1,35.1);
	new cjs.ButtonHelper(this.dxctfvgybhjnkml, 0, 1, 1);

	this.mnbtvrc = new lib.元件12();
	this.mnbtvrc.parent = this;
	this.mnbtvrc.setTransform(545.6,412.1,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.mnbtvrc, 0, 1, 1);

	this.kmnbtrfdvhgtyjntrhseger = new lib.元件12();
	this.kmnbtrfdvhgtyjntrhseger.parent = this;
	this.kmnbtrfdvhgtyjntrhseger.setTransform(590.1,612.3,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.kmnbtrfdvhgtyjntrhseger, 0, 1, 1);

	this.kjumnbtrveshrtjntrgbvfsderge = new lib.元件12();
	this.kjumnbtrveshrtjntrgbvfsderge.parent = this;
	this.kjumnbtrveshrtjntrgbvfsderge.setTransform(615.2,912.5,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.kjumnbtrveshrtjntrgbvfsderge, 0, 1, 1);

	this.instance_51 = new lib.vcepng複製3();
	this.instance_51.parent = this;
	this.instance_51.setTransform(568,409,0.397,1.461);

	this.instance_52 = new lib.word1();
	this.instance_52.parent = this;
	this.instance_52.setTransform(706,240,1.461,1.461);

	this.instance_53 = new lib.word2png複製();
	this.instance_53.parent = this;
	this.instance_53.setTransform(701,243,1.461,1.461);

	this.instance_54 = new lib.word3png複製4();
	this.instance_54.parent = this;
	this.instance_54.setTransform(703,240,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_50,p:{scaleX:0.407,scaleY:0.407,x:706,y:478}},{t:this.instance_49,p:{scaleX:0.407,scaleY:0.407,x:1170,y:488}}]},99).to({state:[{t:this.instance_50,p:{scaleX:0.526,scaleY:0.526,x:631,y:441}},{t:this.instance_49,p:{scaleX:0.526,scaleY:0.526,x:1232,y:454}}]},1).to({state:[{t:this.instance_50,p:{scaleX:0.625,scaleY:0.625,x:570,y:411}},{t:this.instance_49,p:{scaleX:0.625,scaleY:0.625,x:1283,y:427}}]},1).to({state:[{t:this.instance_50,p:{scaleX:0.769,scaleY:0.769,x:481,y:367}},{t:this.instance_49,p:{scaleX:0.769,scaleY:0.769,x:1357,y:386}}]},1).to({state:[{t:this.instance_50,p:{scaleX:0.897,scaleY:0.897,x:400,y:327}},{t:this.instance_49,p:{scaleX:0.897,scaleY:0.897,x:1423,y:349}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.058,scaleY:1.058,x:300,y:278}},{t:this.instance_49,p:{scaleX:1.058,scaleY:1.058,x:1506,y:304}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.16,scaleY:1.16,x:235,y:245}},{t:this.instance_49,p:{scaleX:1.16,scaleY:1.16,x:1559,y:275}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.277,scaleY:1.277,x:162,y:209}},{t:this.instance_49,p:{scaleX:1.277,scaleY:1.277,x:1619,y:241}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.317,scaleY:1.317,x:137,y:196}},{t:this.instance_49,p:{scaleX:1.317,scaleY:1.317,x:1639,y:231}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.373,scaleY:1.373,x:102,y:180}},{t:this.instance_49,p:{scaleX:1.373,scaleY:1.373,x:1669,y:215}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.416,scaleY:1.416,x:75,y:167}},{t:this.instance_49,p:{scaleX:1.416,scaleY:1.416,x:1691,y:203}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.451,scaleY:1.451,x:53,y:156}},{t:this.instance_49,p:{scaleX:1.451,scaleY:1.451,x:1708,y:193}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.instance_51,p:{scaleX:0.397,x:568,y:409}},{t:this.dxctfvgybhjnkml}]},8).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.instance_51,p:{scaleX:0.533,x:568,y:409}},{t:this.dxctfvgybhjnkml}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.instance_51,p:{scaleX:0.668,x:568,y:409}},{t:this.dxctfvgybhjnkml}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.instance_51,p:{scaleX:0.765,x:568,y:409}},{t:this.dxctfvgybhjnkml}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.instance_51,p:{scaleX:1.036,x:568,y:409}},{t:this.dxctfvgybhjnkml}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_52},{t:this.instance_51,p:{scaleX:1.461,x:568,y:409}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_51,p:{scaleX:0.416,x:618,y:608}}]},5).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_51,p:{scaleX:0.59,x:618,y:608}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_51,p:{scaleX:0.823,x:618,y:608}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_51,p:{scaleX:0.997,x:618,y:608}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_51,p:{scaleX:0.978,x:618,y:608}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_51,p:{scaleX:0.921,x:618,y:608}},{t:this.instance_53}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_51,p:{scaleX:0.337,x:646,y:909}}]},5).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_51,p:{scaleX:0.483,x:646,y:909}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_51,p:{scaleX:0.581,x:646,y:909}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_51,p:{scaleX:0.727,x:646,y:909}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.kjumnbtrveshrtjntrgbvfsderge},{t:this.kmnbtrfdvhgtyjntrhseger},{t:this.mnbtvrc},{t:this.dxctfvgybhjnkml},{t:this.instance_51,p:{scaleX:0.654,x:646,y:909}},{t:this.instance_54}]},2).to({state:[]},1).wait(1245));

	// 臉部解說
	this.ggwp = new lib.元件10();
	this.ggwp.parent = this;
	this.ggwp.setTransform(1209.9,491.1,0.452,0.452,0,0,0,35.1,35.2);
	new cjs.ButtonHelper(this.ggwp, 0, 1, 1);

	this.instance_55 = new lib._1bg();
	this.instance_55.parent = this;
	this.instance_55.setTransform(678,463,0.452,0.452);

	this.instance_56 = new lib.元件14();
	this.instance_56.parent = this;
	this.instance_56.setTransform(379.9,159.1,1.461,1.461,0,0,0,40,80);

	this.veww = new lib.元件11();
	this.veww.parent = this;
	this.veww.setTransform(525.4,637.6,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.veww, 0, 1, 1);

	this.ghghjyesdf = new lib.元件11();
	this.ghghjyesdf.parent = this;
	this.ghghjyesdf.setTransform(516.7,477.2,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.ghghjyesdf, 0, 1, 1);

	this.jytrhbfdv = new lib.元件11();
	this.jytrhbfdv.parent = this;
	this.jytrhbfdv.setTransform(375.8,312.6,1.461,1.461,0,0,0,25,25);
	new cjs.ButtonHelper(this.jytrhbfdv, 0, 1, 1);

	this.instance_57 = new lib.vce();
	this.instance_57.parent = this;
	this.instance_57.setTransform(408,304,0.514,1.461);

	this.instance_58 = new lib.word1png複製2();
	this.instance_58.parent = this;
	this.instance_58.setTransform(698,250,1.461,1.461);

	this.instance_59 = new lib.vcepng複製();
	this.instance_59.parent = this;
	this.instance_59.setTransform(541,475,0.416,1.461);

	this.instance_60 = new lib.word2();
	this.instance_60.parent = this;
	this.instance_60.setTransform(696,248,1.461,1.461);

	this.instance_61 = new lib.word3png複製3();
	this.instance_61.parent = this;
	this.instance_61.setTransform(697,245,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_55,p:{scaleX:0.452,scaleY:0.452,x:678,y:463}},{t:this.ggwp,p:{regX:35.1,regY:35.2,scaleX:0.452,scaleY:0.452,x:1209.9,y:491.1}}]},49).to({state:[{t:this.instance_55,p:{scaleX:0.545,scaleY:0.545,x:620,y:434}},{t:this.ggwp,p:{regX:35.3,regY:35.1,scaleX:0.545,scaleY:0.545,x:1261.5,y:467.9}}]},1).to({state:[{t:this.instance_55,p:{scaleX:0.643,scaleY:0.643,x:558,y:403}},{t:this.ggwp,p:{regX:35.3,regY:35.1,scaleX:0.643,scaleY:0.643,x:1315.7,y:443.6}}]},1).to({state:[{t:this.instance_55,p:{scaleX:0.76,scaleY:0.76,x:485,y:367}},{t:this.ggwp,p:{regX:35.3,regY:35.1,scaleX:0.76,scaleY:0.76,x:1380.6,y:414.6}}]},1).to({state:[{t:this.instance_55,p:{scaleX:0.853,scaleY:0.853,x:427,y:338}},{t:this.ggwp,p:{regX:35.4,regY:35.1,scaleX:0.853,scaleY:0.853,x:1432.2,y:391.6}}]},1).to({state:[{t:this.instance_55,p:{scaleX:0.966,scaleY:0.966,x:357,y:302}},{t:this.ggwp,p:{regX:35.4,regY:35.2,scaleX:0.966,scaleY:0.966,x:1494.7,y:363.8}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.069,scaleY:1.069,x:292,y:270}},{t:this.ggwp,p:{regX:35.5,regY:35.3,scaleX:1.069,scaleY:1.069,x:1551.4,y:338.6}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.169,scaleY:1.169,x:229,y:240}},{t:this.ggwp,p:{regX:35.5,regY:35.3,scaleX:1.169,scaleY:1.169,x:1606.9,y:313.9}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.241,scaleY:1.241,x:184,y:218}},{t:this.ggwp,p:{regX:35.5,regY:35.3,scaleX:1.241,scaleY:1.241,x:1646.9,y:296.1}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.312,scaleY:1.312,x:140,y:196}},{t:this.ggwp,p:{regX:35.5,regY:35.4,scaleX:1.312,scaleY:1.312,x:1686,y:278.8}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.373,scaleY:1.373,x:102,y:177}},{t:this.ggwp,p:{regX:35.5,regY:35.4,scaleX:1.373,scaleY:1.373,x:1719.8,y:263.7}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.415,scaleY:1.415,x:76,y:164}},{t:this.ggwp,p:{regX:35.5,regY:35.4,scaleX:1.415,scaleY:1.415,x:1743.1,y:253.4}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_56}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_57,p:{scaleX:0.514,x:408,y:304}}]},3).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_57,p:{scaleX:1.113,x:408,y:304}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_57,p:{scaleX:1.693,x:408,y:304}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_57,p:{scaleX:2.294,x:408,y:304}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_57,p:{scaleX:2.992,x:408,y:304}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_58},{t:this.instance_57,p:{scaleX:3.097,x:400,y:305}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_59,p:{scaleX:0.416,x:541,y:475}}]},5).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_59,p:{scaleX:0.706,x:541,y:475}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_59,p:{scaleX:0.939,x:541,y:475}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_59,p:{scaleX:1.249,x:541,y:475}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_59,p:{scaleX:1.5,x:541,y:475}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_60},{t:this.instance_59,p:{scaleX:1.657,x:541,y:475}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_59,p:{scaleX:0.432,x:555,y:634}}]},5).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_59,p:{scaleX:0.738,x:555,y:634}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_59,p:{scaleX:1.007,x:555,y:634}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_59,p:{scaleX:1.237,x:555,y:634}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_59,p:{scaleX:1.564,x:555,y:634}}]},1).to({state:[{t:this.instance_55,p:{scaleX:1.461,scaleY:1.461,x:47,y:151}},{t:this.ggwp,p:{regX:35.1,regY:35.1,scaleX:1.461,scaleY:1.461,x:1768.2,y:239.8}},{t:this.jytrhbfdv},{t:this.ghghjyesdf},{t:this.veww},{t:this.instance_59,p:{scaleX:1.542,x:554,y:634}},{t:this.instance_61}]},1).to({state:[]},1).wait(1300));

	// xxx
	this.e04e04 = new lib.e04();
	this.e04e04.parent = this;
	this.e04e04.setTransform(1770.1,124.6,1.7,1.7);
	this.e04e04._off = true;
	new cjs.ButtonHelper(this.e04e04, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.e04e04).wait(294).to({_off:false},0).to({_off:true},1).wait(1095));

	// ww
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2},{t:this.chp3},{t:this.chp11},{t:this.chp12},{t:this.chp22},{t:this.chp111},{t:this.chp112},{t:this.chp31},{t:this.chp32},{t:this.chp33},{t:this.chp34},{t:this.chp35},{t:this.chp121},{t:this.chp122},{t:this.chp1}]},294).to({state:[]},1).wait(1095));

	// 圖層 1
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

	this.chp21 = new lib.chp21();
	this.chp21.parent = this;
	this.chp21.setTransform(962.4,471.2,1.464,1.464);
	new cjs.ButtonHelper(this.chp21, 0, 1, 1);

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

	this.instance_62 = new lib.現在位置_1();
	this.instance_62.parent = this;
	this.instance_62.setTransform(959.3,542,1.477,1.477,0,0,0,0,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_62},{t:this.chp11_1},{t:this.chp12_1},{t:this.chp2_1},{t:this.ch3},{t:this.chp21},{t:this.chp22_1},{t:this.chp111_1},{t:this.chp112_1},{t:this.chp31_1},{t:this.chp32_1},{t:this.chp33_1},{t:this.chp34_1},{t:this.chp35_1},{t:this.chp121_1},{t:this.chp122_1},{t:this.chp1_1}]},289).to({state:[{t:this.instance_62},{t:this.chp21}]},5).to({state:[]},1).wait(1095));

	// 圖層 3
	this.instance_63 = new lib._500();
	this.instance_63.parent = this;
	this.instance_63.setTransform(707,113,1.706,1.706);

	this.instance_64 = new lib.CS();
	this.instance_64.parent = this;
	this.instance_64.setTransform(811,145,1.461,1.461);

	this.instance_65 = new lib.元件21();
	this.instance_65.parent = this;
	this.instance_65.setTransform(1313.5,558.3,1,1,0,0,0,606.5,445.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_64},{t:this.instance_63}]}).to({state:[{t:this.instance_64},{t:this.instance_63}]},284).to({state:[{t:this.instance_64}]},35).to({state:[{t:this.instance_64},{t:this.instance_65}]},252).to({state:[{t:this.instance_64},{t:this.instance_65}]},198).to({state:[{t:this.instance_64},{t:this.instance_65}]},620).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.face},{t:this.top},{t:this.bot},{t:this.ac},{t:this.peibei},{t:this.test}]}).to({state:[]},285).to({state:[{t:this.face},{t:this.top},{t:this.bot},{t:this.ac},{t:this.peibei},{t:this.test}]},10).to({state:[{t:this.face},{t:this.top},{t:this.bot},{t:this.ac},{t:this.peibei},{t:this.test}]},24).to({state:[{t:this.face},{t:this.top},{t:this.bot},{t:this.ac},{t:this.peibei},{t:this.test}]},252).to({state:[{t:this.face},{t:this.top},{t:this.bot},{t:this.ac},{t:this.peibei},{t:this.test}]},198).to({state:[{t:this.face},{t:this.top},{t:this.bot},{t:this.ac},{t:this.peibei},{t:this.test}]},620).wait(1));

	// 轉轉人
	this.instance_66 = new lib.轉轉人();
	this.instance_66.parent = this;
	this.instance_66.setTransform(995.7,577.1,1.461,1.461,0,0,0,489,-25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(1390));

	// BG
	this.instance_67 = new lib.U2BG();
	this.instance_67.parent = this;
	this.instance_67.setTransform(0,0,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(284).to({_off:true},1).wait(4).to({_off:false},0).wait(1101));

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
		{src:"images/chpba_atlas_.png", id:"chpba_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;