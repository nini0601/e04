(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"chpaab_atlas_", frames: [[5264,2404,1314,740],[7530,4652,500,500],[6024,4652,500,500],[6580,2404,1314,740],[7346,1771,512,512],[2747,0,2193,1267],[0,0,2745,1956],[7941,3291,168,50],[7346,2285,200,100],[6144,1202,1200,1200],[4942,1138,1200,1200],[4565,1913,239,198],[7941,3343,168,50],[6544,0,1200,1200],[7941,3239,168,50],[7860,2216,300,100],[6526,4652,500,500],[7028,4652,500,500],[2510,4761,500,500],[1004,4888,500,500],[7746,804,360,360],[4577,1269,360,360],[7915,1418,250,250],[7915,1166,250,250],[1506,4888,500,500],[3514,5090,500,500],[3012,5090,500,500],[0,4932,500,500],[502,4932,500,500],[2008,5138,500,500],[502,3928,500,500],[7346,1202,567,567],[2008,4134,500,500],[0,3928,500,500],[3187,4086,500,500],[3689,4086,500,500],[7860,2114,300,100],[4063,1269,512,512],[4427,3082,500,500],[7941,3135,210,50],[5433,3648,500,500],[2923,3255,500,500],[0,3426,500,500],[7915,1670,250,50],[7439,3146,500,500],[5933,3146,500,500],[502,3426,500,500],[3425,3584,500,500],[6437,3648,500,500],[5431,3146,500,500],[3145,3182,210,50],[1179,3382,500,500],[3927,3584,500,500],[7860,2012,300,100],[7441,3648,500,500],[1681,3382,500,500],[4063,1783,500,500],[2183,3632,500,500],[2421,3130,500,500],[4429,3648,500,500],[5935,3648,500,500],[6939,3648,500,500],[4931,3648,500,500],[7746,0,400,400],[7746,402,400,400],[2685,3757,500,500],[4929,3146,500,500],[1004,3884,500,500],[4565,2113,300,100],[1506,3884,500,500],[2923,3187,210,50],[0,2700,1177,724],[4577,1631,280,280],[3423,2753,500,500],[3925,3082,500,500],[2421,2753,1000,375],[6435,3146,500,500],[7860,1771,280,239],[4942,0,1600,1136],[6937,3146,500,500],[7203,4150,500,500],[1004,4386,500,500],[5697,4150,500,500],[0,4430,500,500],[4270,2285,250,50],[2510,4259,500,500],[2421,2700,168,50],[502,4430,500,500],[7941,3187,168,50],[4565,2215,300,100],[6199,4150,500,500],[1506,4386,500,500],[3012,4588,500,500],[6701,4150,500,500],[3514,4588,500,500],[2008,4636,500,500],[5195,4150,500,500],[5522,4652,500,500],[4016,4652,500,500],[5020,4652,500,500],[4518,4652,500,500],[4693,4150,500,500],[4191,4150,500,500],[3948,2340,1314,740],[1316,1958,1314,740],[0,1958,1314,740],[2632,2011,1314,740],[2747,1269,1314,740],[8108,1050,50,50],[8108,1102,50,50],[7896,3078,220,55],[8108,886,80,80],[8018,2728,120,120],[7896,2728,120,120],[7896,2484,120,120],[8108,968,80,80],[7896,2606,120,120],[8018,2606,120,120],[8018,2484,120,120],[4929,3082,220,55],[2923,3130,220,55],[7896,2850,220,55],[7896,2907,220,55],[7896,3021,220,55],[5586,2340,280,55],[7896,2964,220,55],[5868,2340,220,55],[7896,2427,280,55],[7548,2318,320,50],[7870,2318,320,50],[3948,2285,320,50],[6144,1138,320,50],[5264,2340,320,50],[7896,2370,280,55],[1179,2700,1240,680],[3425,3255,400,150],[3145,3130,210,50],[8108,804,80,80],[4806,1913,120,120]]}
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



(lib._0112 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._10luxgen = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._10nissan = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._10 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._124buttonback = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Anvil_Pin = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cargo = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.controlmiao = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.end = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.end1 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.end2 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.luxgen = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.miao = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.noun_69343 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.tao = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.U114animatebutton = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件國 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件蔣公 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件蔣公亮1 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件蔣公亮2 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件鐵鎚1 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件鐵鎚2 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件鐵鎚3 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件鐵鎚4 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件機 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件時間 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件救 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件發 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件動 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件嚴 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件工程帽 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件旗幟 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件裕隆 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件車車1 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件車車2 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.U114動畫物件車車3 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.U115animatebutton = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件錢 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件設備 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件設備w = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件地標工程中心 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件地標工廠 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件帽子 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件帽子w = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件時間 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件hand = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件man = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件man2 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件台灣 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件工具 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件工具w = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.U115動畫物件工廠 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.U116Animate1986 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.U116animatebutton = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.U116AnimatePresonGotIt = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.U116AnimatePresonThink = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.U116AnimateScrew = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.U116AnimateShock = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.U116AnimateShock2 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.U116AnimateSmoke1 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.U116AnimateSmoke2 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.U116AnimateSpanner = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.U116AnimateSteeringWheel = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.U116Animatethinkleft = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.U116Animatethinkright = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.U116AnimateTire = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.U116bling1 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.U116bling2 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.U117animatebutton = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件向心力 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件向心力w = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件Audi = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件BMW = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件時間 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件桃園工程 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件Ford = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件Hand = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件nissan = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件TOYOTA = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件WTO = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件台北公司 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件台灣大 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件台灣 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件新店工廠 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件柱狀 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件檔案 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件檔案w = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件溝通 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.U117動畫物件溝通w = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.U118animatebutton = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.U118AnimateScrew丟 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.U118AnimateSpanner丟 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.U118AnimateSteeringWheel丟 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.U118AnimateTire丟 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.U118動畫物件設備丟 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.U118動畫物件地標 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.U118動畫物件地標工程中心丟 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.U118動畫物件地標工廠丟 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.U118動畫物件時間 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.U118動畫物件Earth = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.U118動畫物件smoke1 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.U118動畫物件smoke2 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.U118動畫物件工具丟 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.U11YuLongBG1953 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.U11YuLongBG1981 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.U11YuLongBG1986 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.U11YuLongBG1995 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.U11YuLongBG2009 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.x = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.xx = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.心路歷程 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.提示 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.提示w = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.提示x = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.提示xw = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.現在位置w = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.現在位置x = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.現在位置xw = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0000_創新歷程 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0001_創立理念 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0003_核心人物 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0004_納智捷汽車 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0005_裕隆集團 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0006_CH1公司歷程 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0000_女生服裝 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0001_男生服裝 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0002_CH2服裝儀容 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0000_數位科技體驗區 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0001_AR實車賞車 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0002_ThinkTouch = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0003_3D體驗劇場 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0004_迎賓區 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0005_CH3銷售SOP = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.跨殺小啦 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.飛羚101 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.飛羚101word = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.首頁w = function() {
	this.spriteSheet = ss["chpaab_atlas_"];
	this.gotoAndStop(138);
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


(lib.補間動畫4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115動畫物件man();
	this.instance.parent = this;
	this.instance.setTransform(-80,-80,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-80,160,160);


(lib.補間動畫3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115動畫物件man();
	this.instance.parent = this;
	this.instance.setTransform(-80,-80,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-80,160,160);


(lib.補間動畫2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115動畫物件man2();
	this.instance.parent = this;
	this.instance.setTransform(-80,-80,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-80,160,160);


(lib.補間動畫1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115動畫物件man2();
	this.instance.parent = this;
	this.instance.setTransform(-80,-80,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-80,160,160);


(lib.play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AGjAAQAACth7B7Qh7B7itAAQisAAh7h7Qh7h7AAitQAAisB7h7QB7h7CsAAQCtAAB7B7QB7B7AACsg");
	this.shape.setTransform(0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkJjvIITDvIoSDwg");
	this.shape_1.setTransform(7.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AFhAAQAACShnBoQhoBniSAAQiRAAhnhnQhohoAAiSQAAiRBohnQBnhoCRAAQCSAABoBoQBnBnAACRg");
	this.shape_2.setTransform(0.6,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjfjKIG/DKIm+DKg");
	this.shape_3.setTransform(6.4,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,-43.8,88.8,88.8);


(lib.nissan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._10nissan();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.08,scaleY:1.08,x:-20.8,y:-25},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:16.1,y:19.3},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.N = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._10nissan();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.N, new cjs.Rectangle(-250,-250,500,500), null);


(lib.luxgen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._10luxgen();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.09,scaleY:1.09,x:-25.7,y:-21.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:23.5,y:19.6},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._10luxgen();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.L, new cjs.Rectangle(-250,-250,500,500), null);


(lib._1111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._10();
	this.instance.parent = this;
	this.instance.setTransform(-657,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1111, new cjs.Rectangle(-657,-370,1314,740), null);


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
	this.instance = new lib._0112();
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
	this.instance = new lib.心路歷程();
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


(lib.endword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.end();
	this.instance.parent = this;
	this.instance.setTransform(-99.5,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.endword, new cjs.Rectangle(-99.5,-49.5,200,100), null);


(lib.smoke2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U118動畫物件smoke2();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.smoke2, new cjs.Rectangle(-250,-250,500,500), null);


(lib.smoke1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U118動畫物件smoke1();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.smoke1, new cjs.Rectangle(-250,-250,500,500), null);


(lib.luxgen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib.luxgen();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-119.5,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.luxgen_2, new cjs.Rectangle(-119.5,-99,239,198), null);


(lib.earth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U118動畫物件Earth();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.earth, new cjs.Rectangle(-250,-250,500,500), null);


(lib.bg5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U11YuLongBG2009();
	this.instance.parent = this;
	this.instance.setTransform(-657,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg5, new cjs.Rectangle(-657,-370,1314,740), null);


(lib.back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._124buttonback();
	this.instance.parent = this;
	this.instance.setTransform(-256,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.back, new cjs.Rectangle(-256,-255,512,512), null);


(lib._2009Y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U118動畫物件時間();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2009Y, new cjs.Rectangle(-250,-250,500,500), null);


(lib._2009 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U118animatebutton();
	this.instance.parent = this;
	this.instance.setTransform(-149.5,-49.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF8C5").s().p("AtPGJQlgijAAjmQAAjlFgijQFfiiHwAAQHxAAFfCiQFgCjAADlQAADmlgCjQlfCinxAAQnwAAlfiig");
	this.shape.setTransform(-34.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.3,-54.2,304.9,111.1);


(lib._8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U118動畫物件工具丟();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._8, new cjs.Rectangle(-250,-250,500,500), null);


(lib._7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U118動畫物件地標工廠丟();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._7, new cjs.Rectangle(-250,-250,500,500), null);


(lib._6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U118動畫物件地標工程中心丟();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._6, new cjs.Rectangle(-250,-250,500,500), null);


(lib._5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U118動畫物件設備丟();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._5, new cjs.Rectangle(-250,-250,500,500), null);


(lib._4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U118AnimateTire丟();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._4, new cjs.Rectangle(-250,-250,500,500), null);


(lib._3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U118AnimateSteeringWheel丟();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._3, new cjs.Rectangle(-250,-250,500,500), null);


(lib._2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U118AnimateSpanner丟();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2, new cjs.Rectangle(-250,-250,500,500), null);


(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U118AnimateScrew丟();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1, new cjs.Rectangle(-250,-250,500,500), null);


(lib.標 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U118動畫物件地標();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.標, new cjs.Rectangle(-250,-250,500,500), null);


(lib.柱8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117動畫物件柱狀();
	this.instance.parent = this;
	this.instance.setTransform(-125,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-25,250,50);


(lib.柱7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AmSC7IMll1");
	this.shape.setTransform(1.8,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhDgBIAAAAIg1hqIDyAOIiFDKg");
	this.shape_1.setTransform(48.9,-15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-25.9,101,49.5);


(lib.柱6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AhShXIClCv");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-10.2,19.5,20.5);


(lib.柱5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AmoCbINRk1");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-17,88,34);


(lib.柱4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AipI/IAAx9IFTAAIAAR9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-57.5,34,115);


(lib.柱3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AipI/IAAx9IFTAAIAAR9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-57.5,34,115);


(lib.柱2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF66").s().p("AipI/IAAx9IFTAAIAAR9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-57.5,34,115);


(lib.柱1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("A5nAAMAzPAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.4,-1.5,331,3);


(lib.WTO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117動畫物件WTO();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.WTO, new cjs.Rectangle(-250,-250,500,500), null);


(lib.toyota = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117動畫物件TOYOTA();
	this.instance.parent = this;
	this.instance.setTransform(-800,-567.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.toyota, new cjs.Rectangle(-800,-567.5,1600,1136), null);


(lib.taiwan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117動畫物件台灣();
	this.instance.parent = this;
	this.instance.setTransform(-250,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.taiwan, new cjs.Rectangle(-250,-249.5,500,500), null);


(lib.nissan_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib.U117動畫物件nissan();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan_1, new cjs.Rectangle(-51,-119,280,239), null);


(lib.手 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117動畫物件Hand();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.手, new cjs.Rectangle(-250,-250,500,500), null);


(lib.ford = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117動畫物件Ford();
	this.instance.parent = this;
	this.instance.setTransform(-500,-187);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ford, new cjs.Rectangle(-500,-187,1000,375), null);


(lib.companyTY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117動畫物件桃園工程();
	this.instance.parent = this;
	this.instance.setTransform(-250,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.companyTY, new cjs.Rectangle(-250,-249.5,500,500), null);


(lib.companyT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#87BFF2").s().p("A0/DmIAAnLMAqAAAAIAAHLg");
	this.shape.setTransform(-6,-141);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層 1
	this.instance = new lib.U117動畫物件台北公司();
	this.instance.parent = this;
	this.instance.setTransform(-250,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.companyT, new cjs.Rectangle(-250,-249.5,500,500), null);


(lib.companySH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117動畫物件新店工廠();
	this.instance.parent = this;
	this.instance.setTransform(-250,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.companySH, new cjs.Rectangle(-250,-249.5,500,500), null);


(lib.companyM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.controlmiao();
	this.instance.parent = this;
	this.instance.setTransform(-84,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.companyM, new cjs.Rectangle(-84,-24.5,168,50), null);


(lib.bmw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117動畫物件BMW();
	this.instance.parent = this;
	this.instance.setTransform(17,-139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bmw, new cjs.Rectangle(17,-139.5,280,280), null);


(lib.bigtaiwan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117動畫物件台灣大();
	this.instance.parent = this;
	this.instance.setTransform(-250,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bigtaiwan, new cjs.Rectangle(-250,-249.5,500,500), null);


(lib.bg4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U11YuLongBG1995();
	this.instance.parent = this;
	this.instance.setTransform(-657,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg4, new cjs.Rectangle(-657,-370,1314,740), null);


(lib.audi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117動畫物件Audi();
	this.instance.parent = this;
	this.instance.setTransform(-588.5,-361.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.audi, new cjs.Rectangle(-588.5,-361.5,1177,724), null);


(lib._1995Y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117動畫物件時間();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1995Y, new cjs.Rectangle(-250,-250,500,500), null);


(lib._1995 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117animatebutton();
	this.instance.parent = this;
	this.instance.setTransform(-149.5,-49.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF8C5").s().p("AtPGJQlgijAAjmQAAjlFgijQFfiiHwAAQHxAAFfCiQFgCjAADlQAADmlgCjQlfCinxAAQnwAAlfiig");
	this.shape.setTransform(-34.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.3,-54.2,304.9,111.1);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117動畫物件向心力w();
	this.instance.parent = this;
	this.instance.setTransform(-124.9,125.5,1.19,1.19);

	this.instance_1 = new lib.U117動畫物件向心力();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-100,-99.5,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.heart, new cjs.Rectangle(-124.9,-99.5,249.9,284.5), null);


(lib.file = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117動畫物件檔案w();
	this.instance.parent = this;
	this.instance.setTransform(-100,125.5,1.19,1.19);

	this.instance_1 = new lib.U117動畫物件檔案();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-100,-99.5,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.file, new cjs.Rectangle(-100,-99.5,200,284.5), null);


(lib.communication = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U117動畫物件溝通w();
	this.instance.parent = this;
	this.instance.setTransform(-100,125.5,1.19,1.19);

	this.instance_1 = new lib.U117動畫物件溝通();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-100,-99.5,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.communication, new cjs.Rectangle(-100,-99.5,200,284.5), null);


(lib.tool4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U116AnimateTire();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tool4, new cjs.Rectangle(-250,-250,500,500), null);


(lib.tool3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U116AnimateSteeringWheel();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tool3, new cjs.Rectangle(-250,-250,500,500), null);


(lib.tool2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U116AnimateSpanner();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tool2, new cjs.Rectangle(-250,-250,500,500), null);


(lib.tool1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U116AnimateScrew();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tool1, new cjs.Rectangle(-250,-250,500,500), null);


(lib.think = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U116AnimatePresonThink();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.think, new cjs.Rectangle(-249.5,-250,500,500), null);


(lib.smoke2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib.U116AnimateSmoke2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.smoke2_1, new cjs.Rectangle(-250,-250,500,500), null);


(lib.smoke1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib.U116AnimateSmoke1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.smoke1_1, new cjs.Rectangle(-250,-250,500,500), null);


(lib.rightthink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U116Animatethinkright();
	this.instance.parent = this;
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightthink, new cjs.Rectangle(-150,-150,400,400), null);


(lib.leftthink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U116Animatethinkleft();
	this.instance.parent = this;
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leftthink, new cjs.Rectangle(-200,-200,400,400), null);


(lib.got = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U116AnimatePresonGotIt();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.got, new cjs.Rectangle(-250,-250,500,500), null);


(lib.dong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U116AnimateShock2();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dong, new cjs.Rectangle(-250,-250,500,500), null);


(lib.ding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U116AnimateShock();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ding, new cjs.Rectangle(-250,-250,500,500), null);


(lib.blingbling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U116bling2();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blingbling, new cjs.Rectangle(-250,-250,500,500), null);


(lib.bling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U116bling1();
	this.instance.parent = this;
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bling, new cjs.Rectangle(-250,-250,500,500), null);


(lib.bg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U11YuLongBG1986();
	this.instance.parent = this;
	this.instance.setTransform(-656.5,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg3, new cjs.Rectangle(-656.5,-370,1314,740), null);


(lib._1986Y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U116Animate1986();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1986Y, new cjs.Rectangle(-249.5,-250,500,500), null);


(lib._1986 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U116animatebutton();
	this.instance.parent = this;
	this.instance.setTransform(-149.5,-49.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF8C5").s().p("AtPGJQlgijAAjmQAAjlFgijQFfiiHwAAQHxAAFfCiQFgCjAADlQAADmlgCjQlfCinxAAQnwAAlfiig");
	this.shape.setTransform(-34.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.3,-54.2,304.9,111.1);


(lib._101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.飛羚101word();
	this.instance.parent = this;
	this.instance.setTransform(-120,62.7,1.19,1.192);

	this.instance_1 = new lib.飛羚101();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-200,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._101, new cjs.Rectangle(-200,-75,400,197.3), null);


(lib.苗地 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115動畫物件地標工廠();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.苗地, new cjs.Rectangle(-249.5,-249.5,500,500), null);


(lib.word = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115動畫物件帽子w();
	this.instance.parent = this;
	this.instance.setTransform(-275,-54.5,2.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.word, new cjs.Rectangle(-275,-54.5,550,110), null);


(lib.tool = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115動畫物件工具w();
	this.instance.parent = this;
	this.instance.setTransform(-222.5,-412.4,2.2,2.2);

	this.instance_1 = new lib.U115動畫物件工具();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tool, new cjs.Rectangle(-249.5,-412.4,500,663), null);


(lib.thing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115動畫物件設備w();
	this.instance.parent = this;
	this.instance.setTransform(-231,-410,2.2,2.2);

	this.instance_1 = new lib.U115動畫物件設備();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-249.5,-250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.thing, new cjs.Rectangle(-249.5,-410,500,660), null);


(lib.tao_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.tao();
	this.instance.parent = this;
	this.instance.setTransform(-83.5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tao_1, new cjs.Rectangle(-83.5,-24.5,168,50), null);


(lib.taiwan_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance_1 = new lib.U115動畫物件台灣();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.taiwan_1, new cjs.Rectangle(-249.5,-249.5,500,500), null);


(lib.strongman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115動畫物件man2();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.strongman, new cjs.Rectangle(-249.5,-249.5,500,500), null);


(lib.RC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(10.3,1,1).p("AGzAAQAAC0iACAQh/B/i0AAQizAAiAh/Qh/iAAAi0QAAizB/iAQCAh/CzAAQC0AAB/B/QCACAAACzg");
	this.shape.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.RC, new cjs.Rectangle(-48.1,-48.1,97.3,97.3), null);


(lib.money = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115動畫物件錢();
	this.instance.parent = this;
	this.instance.setTransform(-255.5,-256);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.money, new cjs.Rectangle(-255.5,-256,512,512), null);


(lib.miao_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.miao();
	this.instance.parent = this;
	this.instance.setTransform(-83.5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.miao_1, new cjs.Rectangle(-83.5,-24.5,168,50), null);


(lib.hat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115動畫物件帽子();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hat, new cjs.Rectangle(-249.5,-249.5,500,500), null);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115動畫物件hand();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(-249.5,-249.5,500,500), null);


(lib.factory = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115動畫物件工廠();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.factory, new cjs.Rectangle(-249.5,-250,500,500), null);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U11YuLongBG1981();
	this.instance.parent = this;
	this.instance.setTransform(-656.5,-369.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(-656.5,-369.5,1314,740), null);


(lib._1981Y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115動畫物件時間();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1981Y, new cjs.Rectangle(-249.5,-249.5,500,500), null);


(lib._1981 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115animatebutton();
	this.instance.parent = this;
	this.instance.setTransform(-149.5,-49.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF8C5").s().p("AtPGJQlgijAAjmQAAjlFgijQFfiiHwAAQHxAAFfCiQFgCjAADlQAADmlgCjQlfCinxAAQnwAAlfiig");
	this.shape.setTransform(-34.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.3,-54.2,304.9,111.1);


(lib.桃地 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U115動畫物件地標工程中心();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.桃地, new cjs.Rectangle(-249.5,-249.5,500,500), null);


(lib.車3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件車車3();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.車3, new cjs.Rectangle(-249.5,-249.5,500,500), null);


(lib.車2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件車車2();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.車2, new cjs.Rectangle(-249.5,-249.5,500,500), null);


(lib.車1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件車車1();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.車1, new cjs.Rectangle(-249.5,-249.5,500,500), null);


(lib.裕隆 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件裕隆();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.裕隆, new cjs.Rectangle(-249.5,-249.5,500,500), null);


(lib.槌左2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件鐵鎚2();
	this.instance.parent = this;
	this.instance.setTransform(-144.5,-144.5,0.806,0.806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.槌左2, new cjs.Rectangle(-144.5,-144.5,290,290), null);


(lib.槌左1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件鐵鎚1();
	this.instance.parent = this;
	this.instance.setTransform(-144.5,-144.5,0.806,0.806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.槌左1, new cjs.Rectangle(-144.5,-144.5,290,290), null);


(lib.槌右2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件鐵鎚4();
	this.instance.parent = this;
	this.instance.setTransform(-124.5,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.槌右2, new cjs.Rectangle(-124.5,-124.5,250,250), null);


(lib.槌右1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件鐵鎚3();
	this.instance.parent = this;
	this.instance.setTransform(-124.5,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.槌右1, new cjs.Rectangle(-124.5,-124.5,250,250), null);


(lib.旗子 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件旗幟();
	this.instance.parent = this;
	this.instance.setTransform(-283,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.旗子, new cjs.Rectangle(-283,-283,567,567), null);


(lib.拉 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件蔣公亮2();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.拉, new cjs.Rectangle(-249.5,-250,500,500), null);


(lib.動 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件動();
	this.instance.parent = this;
	this.instance.setTransform(-68.9,-68.9,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.動, new cjs.Rectangle(-68.9,-68.9,138.9,138.9), null);


(lib.發 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件發();
	this.instance.parent = this;
	this.instance.setTransform(-68.9,-68.9,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.發, new cjs.Rectangle(-68.9,-68.9,138.9,138.9), null);


(lib.煙R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.end2();
	this.instance.parent = this;
	this.instance.setTransform(-599.5,-599.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.煙R, new cjs.Rectangle(-599.5,-599.5,1200,1200), null);


(lib.煙M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.noun_69343();
	this.instance.parent = this;
	this.instance.setTransform(-144.5,-144.5,0.242,0.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsfUwIAA1iIgPAPQhfBfiGAAQiHAAhfhfQhAhAgVhSIAAinQAVhSBAhBQA9g9BOgVQALjkDZikQBnhOB6grQAXgXAagXQDbi+E0AAQE0AADaC+IAMALQDFAMCOCPQCdCdAADdQAACehPB9QAiBEAABSQAACMhjBiQhiBiiMABQiMgBhjhiQgWgWgRgYIAAUPgAVFAvQAAgrAKgnIAACmQgKgoAAgsg");
	this.shape.setTransform(19.1,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.煙M, new cjs.Rectangle(-144.5,-144.5,299.5,290), null);


(lib.煙L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.end1();
	this.instance.parent = this;
	this.instance.setTransform(-599.5,-599.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.煙L, new cjs.Rectangle(-599.5,-599.5,1200,1200), null);


(lib.創辦人 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件嚴();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.創辦人, new cjs.Rectangle(-249.5,-250,500,500), null);


(lib.救 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件救();
	this.instance.parent = this;
	this.instance.setTransform(-68.9,-68.9,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.救, new cjs.Rectangle(-68.9,-68.9,138.9,138.9), null);


(lib.giang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件蔣公();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.giang, new cjs.Rectangle(-249.5,-249.5,500,500), null);


(lib.cargo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.cargo();
	this.instance.parent = this;
	this.instance.setTransform(-131.2,-93.3,0.096,0.096);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cargo_1, new cjs.Rectangle(-131.2,-93.3,263.4,187.6), null);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U11YuLongBG1953();
	this.instance.parent = this;
	this.instance.setTransform(-656.5,-369.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(-656.5,-369.5,1314,740), null);


(lib.卡 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件蔣公亮1();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.卡, new cjs.Rectangle(-249.5,-250,500,500), null);


(lib.機 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件機();
	this.instance.parent = this;
	this.instance.setTransform(-68.9,-68.9,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.機, new cjs.Rectangle(-68.9,-68.9,138.9,138.9), null);


(lib.帽子 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件工程帽();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.帽子, new cjs.Rectangle(-249.5,-250,500,500), null);


(lib._1953Y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件時間();
	this.instance.parent = this;
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1953Y, new cjs.Rectangle(-249.5,-249.5,500,500), null);


(lib._1953 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114animatebutton();
	this.instance.parent = this;
	this.instance.setTransform(-149.5,-49.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF8C5").s().p("AtQGJQlfijAAjmQAAjlFfijQFgiiHwAAQHxAAFgCiQFfCjAADlQAADmlfCjQlgCinxAAQnwAAlgiig");
	this.shape.setTransform(-34.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.3,-54.2,304.9,111.1);


(lib.國 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U114動畫物件國();
	this.instance.parent = this;
	this.instance.setTransform(-68.9,-68.9,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.國, new cjs.Rectangle(-68.9,-68.9,138.9,138.9), null);


(lib.樁 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Anvil_Pin();
	this.instance.parent = this;
	this.instance.setTransform(-1096,-633);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.樁, new cjs.Rectangle(-1096,-633,2193,1267), null);


(lib.暗幕 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("A9SQzMAAAghlMA6lAAAMAAAAhlg");
	this.shape.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.暗幕, new cjs.Rectangle(-186.9,-107,375,215), null);


(lib.補間動畫14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.國();
	this.instance.parent = this;
	this.instance.setTransform(303.4,0,0.936,0.936,0,0,0,0.6,0.5);
	this.instance.alpha = 0;

	this.instance_1 = new lib.救();
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.1,0,0.936,0.936,0,0,0,0.5,0.5);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.機();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,0,0.936,0.936,0,0,0,0.5,0.5);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.動();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-152.2,0,0.936,0.936,0,0,0,0.5,0.5);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.發();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-303.3,0,0.936,0.936,0,0,0,0.5,0.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-368.3,-65,736.6,130.1);


(lib.補間動畫13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.國();
	this.instance.parent = this;
	this.instance.setTransform(303.4,0,0.936,0.936,0,0,0,0.6,0.5);

	this.instance_1 = new lib.救();
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.1,0,0.936,0.936,0,0,0,0.5,0.5);

	this.instance_2 = new lib.機();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,0,0.936,0.936,0,0,0,0.5,0.5);

	this.instance_3 = new lib.動();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-152.2,0,0.936,0.936,0,0,0,0.5,0.5);

	this.instance_4 = new lib.發();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-303.3,0,0.936,0.936,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-368.3,-65,736.6,130.1);


(lib.柱狀圖 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// 圖層 9
	this.instance = new lib.柱7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(118.4,-39.8,0.247,0.247,0,0,0,8.3,-4.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75).to({_off:false},0).to({regX:8.4,scaleX:0.72,scaleY:0.71,x:142,y:-53.1},7).wait(12).to({startPosition:0},0).to({alpha:0.488},15).wait(1));

	// 圖層 8
	this.instance_1 = new lib.柱6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(99,-43.9,0.371,0.371);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off:false},0).to({scaleX:0.71,scaleY:0.71,x:101.5,y:-40},4).wait(19).to({startPosition:0},0).to({alpha:0.488},15).wait(1));

	// 圖層 7
	this.instance_2 = new lib.柱5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(65.9,-32.1,0.192,0.252,0,0,0,-0.5,-0.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(63).to({_off:false},0).to({regX:-0.4,scaleX:0.45,scaleY:0.59,x:76.8,y:-37.8},8).wait(23).to({startPosition:0},0).to({alpha:0.488},15).wait(1));

	// 圖層 6
	this.instance_3 = new lib.柱6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(50,-37.9,0.371,0.371);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(58).to({_off:false},0).to({scaleX:0.71,scaleY:0.71,x:52.5,y:-34.9},5).wait(31).to({startPosition:0},0).to({alpha:0.488},15).wait(1));

	// 圖層 5
	this.instance_4 = new lib.柱5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(15.4,-27,0.192,0.252,0,0,0,-0.5,-0.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({_off:false},0).to({regX:-0.4,scaleX:0.45,scaleY:0.59,x:26.9,y:-32.5},8).wait(36).to({startPosition:0},0).to({alpha:0.488},15).wait(1));

	// 圖層 4
	this.instance_5 = new lib.柱4("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(143.6,-17.7,1,0.287);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40).to({_off:false},0).to({scaleY:1,y:-58.7},10).wait(44).to({startPosition:0},0).to({alpha:0.488},15).wait(1));

	// 圖層 3
	this.instance_6 = new lib.柱3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(95,-16.7,1,0.27);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({_off:false},0).to({scaleY:0.67,y:-39.7},10).wait(54).to({startPosition:0},0).to({alpha:0.488},15).wait(1));

	// 圖層 2
	this.instance_7 = new lib.柱2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(47,-12.7,1,0.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({scaleY:0.44,y:-26.7},10).wait(64).to({startPosition:0},0).to({alpha:0.488},15).wait(1));

	// 圖層 1
	this.instance_8 = new lib.柱1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(28,0,0.134,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:0.24,x:46},6).to({regX:1.1,scaleX:0.53,x:94.7},14).wait(74).to({startPosition:0},0).to({alpha:0.488},15).wait(1));

	// 圖層 11
	this.instance_9 = new lib.柱8("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(94.6,32,0.6,0.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50).to({_off:false},0).to({alpha:1},20).wait(24).to({startPosition:0},0).to({alpha:0.488},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,-1,46.1,2.1);


(lib.man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// man1
	this.instance = new lib.補間動畫3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-291.8,102,1.063,1.063);

	this.instance_1 = new lib.補間動畫4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.1,52.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},15).to({state:[]},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({startPosition:0},0).to({_off:true,scaleX:1,scaleY:1,x:2.1,y:52.1},15).wait(26));

	// man2
	this.instance_2 = new lib.補間動畫1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.1,52.1);
	this.instance_2._off = true;

	this.instance_3 = new lib.補間動畫2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(297.8,102,1.063,1.063);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},25).to({state:[{t:this.instance_3}]},14).to({state:[{t:this.instance_3}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({_off:true,scaleX:1.06,scaleY:1.06,x:297.8,y:102},14).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-376.8,17,170,170);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.home.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("contents.html", "_self");
		}
	}
	this.frame_79 = function() {
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
		
		this.xxx.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_100.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_100()
		{
			this.gotoAndPlay(81);
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
			this.gotoAndPlay(53);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.local.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_104.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_104()
		{
			this.gotoAndPlay(2630);
		}
	}
	this.frame_87 = function() {
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
		
		this.start.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_94.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_94()
		{
			this.gotoAndPlay(90);
		}
		
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.one.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_95.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_95()
		{
			this.gotoAndPlay(90);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.two.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_96.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_96()
		{
			this.gotoAndPlay(645);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.three.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_97.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_97()
		{
			this.gotoAndPlay(1185);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.four.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_98.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_98()
		{
			this.gotoAndPlay(1590);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.five.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_99.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_99()
		{
			this.gotoAndPlay(2340);
		}
	}
	this.frame_116 = function() {
		playSound("chp1_1_1953wav");
	}
	this.frame_643 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_665 = function() {
		playSound("chp1_1_1981wav");
	}
	this.frame_1183 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_1207 = function() {
		playSound("chp1_1_1986wav");
	}
	this.frame_1588 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_1612 = function() {
		playSound("chp1_1_1995wav");
	}
	this.frame_2338 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_2363 = function() {
		playSound("chp1_1_2009wav");
	}
	this.frame_2623 = function() {
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
		
		this.ql3ql3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_106.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_106()
		{
			this.gotoAndPlay(2640);
		}
	}
	this.frame_2634 = function() {
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
		
		this.e04.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_103.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_103()
		{
			this.gotoAndPlay(86);
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
	this.frame_2664 = function() {
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
		
		this.nissan.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			window.open("chpaa.html", "_self");
		}
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.luxgen.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.open("chpab.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(60).call(this.frame_79).wait(8).call(this.frame_87).wait(29).call(this.frame_116).wait(527).call(this.frame_643).wait(22).call(this.frame_665).wait(518).call(this.frame_1183).wait(24).call(this.frame_1207).wait(381).call(this.frame_1588).wait(24).call(this.frame_1612).wait(726).call(this.frame_2338).wait(25).call(this.frame_2363).wait(260).call(this.frame_2623).wait(11).call(this.frame_2634).wait(30).call(this.frame_2664).wait(1));

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

	this.five = new lib._2009();
	this.five.parent = this;
	this.five.setTransform(172.4,273,0.732,0.732,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.five, 0, 1, 1);

	this.four = new lib._1995();
	this.four.parent = this;
	this.four.setTransform(172.4,414.6,0.732,0.732,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.four, 0, 1, 1);

	this.three = new lib._1986();
	this.three.parent = this;
	this.three.setTransform(172.4,597.2,0.732,0.732,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.three, 0, 1, 1);

	this.two = new lib._1981();
	this.two.parent = this;
	this.two.setTransform(172.4,682.1,0.732,0.732,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.two, 0, 1, 1);

	this.one = new lib._1953();
	this.one.parent = this;
	this.one.setTransform(172.4,911.7,0.732,0.732,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.one, 0, 1, 1);

	this.instance = new lib._3nowx();
	this.instance.parent = this;
	this.instance.setTransform(1843.6,82,1.458,1.458);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.instance_1 = new lib._2hintx();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1701.7,82.2,1.458,1.458,0,0,0,-0.4,0.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},19).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},34).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},26).to({state:[{t:this.one},{t:this.two},{t:this.three},{t:this.four},{t:this.five},{t:this.home},{t:this.hint},{t:this.local}]},8).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.one},{t:this.two},{t:this.three},{t:this.four},{t:this.five},{t:this.home},{t:this.hint},{t:this.local}]},555).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.one},{t:this.two},{t:this.three},{t:this.four},{t:this.five},{t:this.home},{t:this.hint},{t:this.local}]},539).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.one},{t:this.two},{t:this.three},{t:this.four},{t:this.five},{t:this.home},{t:this.local},{t:this.hint}]},404).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.one},{t:this.two},{t:this.three},{t:this.four},{t:this.five},{t:this.home},{t:this.hint},{t:this.local}]},749).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.one},{t:this.two},{t:this.three},{t:this.four},{t:this.five},{t:this.home},{t:this.local},{t:this.hint}]},284).to({state:[]},1).to({state:[{t:this.home},{t:this.local},{t:this.instance_1}]},25).to({state:[{t:this.home},{t:this.local},{t:this.instance_1}]},15).wait(1));

	// x
	this.xxx = new lib.x_1();
	this.xxx.parent = this;
	this.xxx.setTransform(1665.5,298,1.7,1.7);
	this.xxx._off = true;
	new cjs.ButtonHelper(this.xxx, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.xxx).wait(79).to({_off:false},0).to({_off:true},1).wait(2585));

	// hint
	this.instance_2 = new lib.hint();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1583,230.7,0.24,0.24);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(53).to({_off:false},0).to({scaleX:1.45,scaleY:1.45,x:959.5,y:544.2},7).wait(20).to({scaleX:0.24,scaleY:0.24,x:1583,y:230.7},6).to({_off:true},1).wait(2578));

	// gogo
	this.ql3ql3 = new lib.back();
	this.ql3ql3.parent = this;
	this.ql3ql3.setTransform(1821.1,990.1,0.344,0.344,0,0,0,1.8,3.5);
	this.ql3ql3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ql3ql3).wait(2623).to({_off:false},0).to({_off:true},1).wait(41));

	// xx
	this.e04 = new lib.e04();
	this.e04.parent = this;
	this.e04.setTransform(1779.6,136.4,1.7,1.7);
	this.e04._off = true;
	new cjs.ButtonHelper(this.e04, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.e04).wait(2634).to({_off:false},0).to({_off:true},1).wait(30));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2},{t:this.chp3},{t:this.chp11},{t:this.chp12},{t:this.chp21},{t:this.chp22},{t:this.chp111},{t:this.chp31},{t:this.chp32},{t:this.chp33},{t:this.chp34},{t:this.chp35},{t:this.chp121},{t:this.chp122},{t:this.chp1}]},2634).to({state:[]},1).wait(30));

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

	this.chp112 = new lib.chp112();
	this.chp112.parent = this;
	this.chp112.setTransform(1350.8,196.8,1.464,1.464);
	new cjs.ButtonHelper(this.chp112, 0, 1, 1);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2_1},{t:this.chp3_1},{t:this.chp11_1},{t:this.chp12_1},{t:this.chp21_1},{t:this.chp22_1},{t:this.chp111_1},{t:this.chp112},{t:this.chp31_1},{t:this.chp32_1},{t:this.chp33_1},{t:this.chp34_1},{t:this.chp35_1},{t:this.chp121_1},{t:this.chp122_1},{t:this.chp1_1}]},2629).to({state:[{t:this.chp112}]},5).to({state:[]},1).wait(30));

	// bg
	this.instance_3 = new lib.現在位置_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(959.3,542,1.477,1.477,0,0,0,0,1.1);

	this.instance_4 = new lib.bg1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(961.6,542.9,1.463,1.463,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},2629).to({state:[{t:this.instance_4},{t:this.instance_3}]},5).to({state:[]},1).wait(30));

	// L
	this.instance_5 = new lib.L();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1363.5,680.1,1.285,1.285);
	this.instance_5.alpha = 0.02;
	this.instance_5._off = true;

	this.luxgen = new lib.luxgen_1();
	this.luxgen.parent = this;
	this.luxgen.setTransform(1042.3,358.9,1.285,1.285);
	new cjs.ButtonHelper(this.luxgen, 0, 1, 2, false, new lib.luxgen_1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},2649).to({state:[{t:this.instance_5}]},14).to({state:[{t:this.luxgen}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2649).to({_off:false},0).to({regX:0.1,regY:0.1,x:1363.6,y:680.2,alpha:0.93},14).to({_off:true,regX:0,regY:0,x:1042.3,y:358.9,alpha:1},1).wait(1));

	// N
	this.instance_6 = new lib.N();
	this.instance_6.parent = this;
	this.instance_6.setTransform(570.8,621.8,1.518,1.518);
	this.instance_6.alpha = 0.02;
	this.instance_6._off = true;

	this.nissan = new lib.nissan();
	this.nissan.parent = this;
	this.nissan.setTransform(191.3,242.3,1.518,1.518);
	new cjs.ButtonHelper(this.nissan, 0, 1, 2, false, new lib.nissan(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},2649).to({state:[{t:this.instance_6}]},14).to({state:[{t:this.nissan}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2649).to({_off:false},0).to({alpha:1},14).to({_off:true,x:191.3,y:242.3},1).wait(1));

	// 圖層 1
	this.instance_7 = new lib._1111();
	this.instance_7.parent = this;
	this.instance_7.setTransform(960.7,542.1,1.461,1.461);
	this.instance_7.alpha = 0.02;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2639).to({_off:false},0).to({alpha:1},20).wait(6));

	// 1953
	this.instance_8 = new lib._1953();
	this.instance_8.parent = this;
	this.instance_8.setTransform(172.3,911.7,1.024,1.025,0,0,0,0.1,0.1);
	this.instance_8._off = true;
	new cjs.ButtonHelper(this.instance_8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({regY:0.2,scaleX:0.73,scaleY:0.73,x:172.4,y:911.9},5).wait(613).to({_off:true},1).wait(1).to({_off:false},0).wait(538).to({_off:true},1).wait(1).to({_off:false},0).wait(403).to({_off:true},1).wait(1).to({_off:false},0).wait(748).to({_off:true},1).wait(1).to({_off:false},0).wait(283).to({_off:true},1).wait(42));

	// 1981
	this.instance_9 = new lib._1981();
	this.instance_9.parent = this;
	this.instance_9.setTransform(172.4,682.2,1.024,1.024,0,0,0,0.1,0.1);
	this.instance_9._off = true;
	new cjs.ButtonHelper(this.instance_9, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({_off:false},0).to({scaleX:0.73,scaleY:0.73,y:682.1},5).wait(608).to({_off:true},1).wait(1).to({_off:false},0).wait(538).to({_off:true},1).wait(1).to({_off:false},0).wait(403).to({_off:true},1).wait(1).to({_off:false},0).wait(748).to({_off:true},1).wait(1).to({_off:false},0).wait(283).to({_off:true},1).wait(42));

	// 1986
	this.instance_10 = new lib._1986();
	this.instance_10.parent = this;
	this.instance_10.setTransform(172.4,597.2,1.024,1.024,0,0,0,0.1,0.1);
	this.instance_10._off = true;
	new cjs.ButtonHelper(this.instance_10, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(34).to({_off:false},0).to({scaleX:0.73,scaleY:0.73},5).wait(603).to({_off:true},1).wait(1).to({_off:false},0).wait(538).to({_off:true},1).wait(1).to({_off:false},0).wait(403).to({_off:true},1).wait(1).to({_off:false},0).wait(748).to({_off:true},1).wait(1).to({_off:false},0).wait(283).to({_off:true},1).wait(42));

	// 1995
	this.instance_11 = new lib._1995();
	this.instance_11.parent = this;
	this.instance_11.setTransform(172.4,414.7,1.024,1.024,0,0,0,0.1,0.1);
	this.instance_11._off = true;
	new cjs.ButtonHelper(this.instance_11, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(39).to({_off:false},0).to({scaleX:0.73,scaleY:0.73,y:414.6},5).wait(598).to({_off:true},1).wait(1).to({_off:false},0).wait(538).to({_off:true},1).wait(1).to({_off:false},0).wait(403).to({_off:true},1).wait(1).to({_off:false},0).wait(748).to({_off:true},1).wait(1).to({_off:false},0).wait(283).to({_off:true},1).wait(42));

	// 2009
	this.instance_12 = new lib._2009();
	this.instance_12.parent = this;
	this.instance_12.setTransform(172.4,273,1.024,1.024,0,0,0,0.1,0.1);
	this.instance_12._off = true;
	new cjs.ButtonHelper(this.instance_12, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(44).to({_off:false},0).to({scaleX:0.73,scaleY:0.73},5).wait(593).to({_off:true},1).wait(1).to({_off:false},0).wait(538).to({_off:true},1).wait(1).to({_off:false},0).wait(403).to({_off:true},1).wait(1).to({_off:false},0).wait(748).to({_off:true},1).wait(1).to({_off:false},0).wait(283).to({_off:true},1).wait(42));

	// play
	this.start = new lib.play();
	this.start.parent = this;
	this.start.setTransform(1133.1,598.2,2.443,2.443);
	this.start._off = true;
	new cjs.ButtonHelper(this.start, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.start).wait(87).to({_off:false},0).to({_off:true},1).wait(2577));

	// 發動機救國
	this.instance_13 = new lib.發();
	this.instance_13.parent = this;
	this.instance_13.setTransform(663.7,325.8,1.686,1.686,0,0,0,0.6,0.6);

	this.instance_14 = new lib.動();
	this.instance_14.parent = this;
	this.instance_14.setTransform(884.9,325.7,1.686,1.686,0,0,0,0.6,0.6);

	this.instance_15 = new lib.機();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1109.1,325.7,1.686,1.686,0,0,0,0.6,0.6);

	this.instance_16 = new lib.救();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1330.3,325.7,1.686,1.686,0,0,0,0.6,0.6);

	this.instance_17 = new lib.國();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1551.5,325.7,1.686,1.686,0,0,0,0.6,0.6);

	this.instance_18 = new lib.補間動畫13("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(1107.4,325.5,1.463,1.463);
	this.instance_18._off = true;

	this.instance_19 = new lib.補間動畫14("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(1107.4,325.5,1.463,1.463);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13,p:{scaleX:1.686,scaleY:1.686,x:663.7,y:325.8}}]},212).to({state:[{t:this.instance_13,p:{scaleX:1.37,scaleY:1.37,x:663.6,y:325.6}},{t:this.instance_14,p:{regX:0.6,scaleX:1.686,scaleY:1.686,x:884.9,y:325.7}}]},5).to({state:[{t:this.instance_13,p:{scaleX:1.37,scaleY:1.37,x:663.6,y:325.6}},{t:this.instance_14,p:{regX:0.5,scaleX:1.37,scaleY:1.37,x:884.6,y:325.6}},{t:this.instance_15,p:{scaleX:1.686,scaleY:1.686,x:1109.1,y:325.7}}]},5).to({state:[{t:this.instance_13,p:{scaleX:1.37,scaleY:1.37,x:663.6,y:325.6}},{t:this.instance_14,p:{regX:0.5,scaleX:1.37,scaleY:1.37,x:884.6,y:325.6}},{t:this.instance_15,p:{scaleX:1.37,scaleY:1.37,x:1108.9,y:325.6}},{t:this.instance_16,p:{scaleX:1.686,scaleY:1.686,x:1330.3,y:325.7}}]},5).to({state:[{t:this.instance_13,p:{scaleX:1.37,scaleY:1.37,x:663.6,y:325.6}},{t:this.instance_14,p:{regX:0.5,scaleX:1.37,scaleY:1.37,x:884.6,y:325.6}},{t:this.instance_15,p:{scaleX:1.37,scaleY:1.37,x:1108.9,y:325.6}},{t:this.instance_16,p:{scaleX:1.37,scaleY:1.37,x:1330.1,y:325.6}},{t:this.instance_17,p:{scaleX:1.686,scaleY:1.686,x:1551.5,y:325.7}}]},5).to({state:[{t:this.instance_13,p:{scaleX:1.37,scaleY:1.37,x:663.6,y:325.6}},{t:this.instance_14,p:{regX:0.5,scaleX:1.37,scaleY:1.37,x:884.6,y:325.6}},{t:this.instance_15,p:{scaleX:1.37,scaleY:1.37,x:1108.9,y:325.6}},{t:this.instance_16,p:{scaleX:1.37,scaleY:1.37,x:1330.1,y:325.6}},{t:this.instance_17,p:{scaleX:1.37,scaleY:1.37,x:1551.3,y:325.6}}]},5).to({state:[{t:this.instance_18}]},26).to({state:[{t:this.instance_19}]},5).to({state:[]},1).wait(2396));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(263).to({_off:false},0).to({_off:true},5).wait(2397));

	// 蔣公
	this.instance_20 = new lib.giang();
	this.instance_20.parent = this;
	this.instance_20.setTransform(1101.4,789.8,1.061,1.061,0,0,0,0.6,0.6);
	this.instance_20.alpha = 0.5;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(171).to({_off:false},0).to({y:705.1,alpha:1},32).wait(60).to({alpha:0},5).to({_off:true},1).wait(2396));

	// 咖
	this.instance_21 = new lib.卡();
	this.instance_21.parent = this;
	this.instance_21.setTransform(1095.7,841.8,1.659,1.659,0,0,0,0.6,0.1);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(238).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(2402));

	// 啦
	this.instance_22 = new lib.拉();
	this.instance_22.parent = this;
	this.instance_22.setTransform(1095.7,841.8,1.659,1.659,0,0,0,0.6,0.1);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(243).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({alpha:0},5).to({_off:true},1).wait(2396));

	// 帽子
	this.instance_23 = new lib.帽子();
	this.instance_23.parent = this;
	this.instance_23.setTransform(1412.6,225,0.413,0.413,0,0,0,0.8,0.3);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(296).to({_off:false},0).to({regY:0.5,y:345,alpha:1},20).wait(134).to({regX:1.5,regY:0.4,scaleX:0.14,scaleY:0.14,x:1555.6,y:774.4},11).to({regX:1.2,regY:1.2,scaleX:0.09,scaleY:0.09,x:1608.3,y:842.2,alpha:0},17).to({_off:true},1).wait(2186));

	// 車走
	this.instance_24 = new lib.cargo_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(572.2,905.8,1.268,1.268,0,0,0,0.6,0.6);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(411).to({_off:false},0).to({x:1218.2},41).to({x:1389.2},9).to({x:1617.2},12).to({alpha:0},5).to({_off:true},1).wait(2186));

	// 創辦人
	this.instance_25 = new lib.創辦人();
	this.instance_25.parent = this;
	this.instance_25.setTransform(1388.3,450.9,1.27,1.27,0,0,0,0.6,0.1);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(269).to({_off:false},0).to({y:645.9,alpha:1},30).wait(151).to({regX:0.5,regY:0.3,scaleX:0.43,scaleY:0.43,x:1547.5,y:875.2},11).to({regX:0.8,regY:0,scaleX:0.26,scaleY:0.26,x:1603.3,y:904.3,alpha:0},12).wait(5).to({_off:true},1).wait(2186));

	// 裕隆
	this.instance_26 = new lib.裕隆();
	this.instance_26.parent = this;
	this.instance_26.setTransform(788.2,408.8,1.13,1.13,0,0,0,0.6,0.6);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(327).to({_off:false},0).to({y:676.8,alpha:1},66).wait(32).to({x:1110.7},22).to({regX:1.1,regY:1.1,scaleX:0.22,scaleY:0.22,x:1496.9,y:837.6},14).to({regX:0.7,regY:0.7,scaleX:0.21,scaleY:0.21,x:1607.1,y:923.9,alpha:0},17).to({_off:true},1).wait(2186));

	// 車1
	this.instance_27 = new lib.車1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(1019.3,338.3,1.347,1.347,0,0,0,0.5,0.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(479).to({_off:false},0).to({regY:0.6,y:872.7},14).wait(35).to({y:1288.6,alpha:0},25).to({_off:true},1).wait(2111));

	// 車2
	this.instance_28 = new lib.車2();
	this.instance_28.parent = this;
	this.instance_28.setTransform(1022.7,319.4,1.347,1.347,0,0,0,0.5,0.5);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(485).to({_off:false},0).to({y:660},15).wait(28).to({regY:0.6,y:1076,alpha:0},25).to({_off:true},1).wait(2111));

	// 車3
	this.instance_29 = new lib.車3();
	this.instance_29.parent = this;
	this.instance_29.setTransform(1039.7,326.4,1.347,1.347,0,0,0,0.6,0.5);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(492).to({_off:false},0).to({regY:0.6,y:455.6},14).wait(22).to({regY:0.5,y:871.4,alpha:0},25).to({_off:true},1).wait(2111));

	// flag
	this.instance_30 = new lib.旗子();
	this.instance_30.parent = this;
	this.instance_30.setTransform(1370.1,276,0.771,0.771,0,0,0,0.8,0.6);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(509).to({_off:false},0).to({y:408.7,alpha:1},6).wait(13).to({y:824.6,alpha:0},25).to({_off:true},1).wait(2111));

	// endword
	this.instance_31 = new lib.endword();
	this.instance_31.parent = this;
	this.instance_31.setTransform(1105.3,603.8,0.854,0.854,0,0,0,0.7,0.7);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(628).to({_off:false},0).to({regX:0.5,regY:0.5,scaleX:3.1,scaleY:3.1,x:1105.2,y:603.7,alpha:1},15).to({_off:true},1).wait(2021));

	// end
	this.instance_32 = new lib.暗幕();
	this.instance_32.parent = this;
	this.instance_32.setTransform(1105.4,603.7,3.174,3.571,0,0,0,0.6,0.5);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(628).to({_off:false},0).to({alpha:0.609},15).to({_off:true},1).wait(2021));

	// 鐵砧
	this.instance_33 = new lib.樁();
	this.instance_33.parent = this;
	this.instance_33.setTransform(1078.8,1009.4,0.233,0.233,0,0,0,0.7,0.8);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(568).to({_off:false},0).to({regY:0.7,y:848.4,alpha:1},15).wait(41).to({alpha:0.609},19).to({_off:true},1).wait(2021));

	// 煙m
	this.instance_34 = new lib.煙M();
	this.instance_34.parent = this;
	this.instance_34.setTransform(1102,692.3,0.906,0.906,0,0,0,5.4,0.5);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(613).to({_off:false},0).to({regY:0.6,scaleX:2.19,scaleY:2.19,x:1134.3,y:527.2},11).to({alpha:0.609},19).to({_off:true},1).wait(2021));

	// 煙L
	this.instance_35 = new lib.煙L();
	this.instance_35.parent = this;
	this.instance_35.setTransform(964.9,704.6,0.235,0.239,0,0,0,0.7,1.1);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(613).to({_off:false},0).to({regX:0.8,regY:0.8,scaleX:0.46,scaleY:0.47,x:846,y:590.5},11).to({alpha:0.609},19).to({_off:true},1).wait(2021));

	// 煙R
	this.instance_36 = new lib.煙R();
	this.instance_36.parent = this;
	this.instance_36.setTransform(1241.8,696.7,0.226,0.226,0,0,0,0.9,0.9);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(613).to({_off:false},0).to({regX:0.7,regY:0.8,scaleX:0.44,scaleY:0.44,x:1387.9,y:609.7},11).to({alpha:0.609},19).to({_off:true},1).wait(2021));

	// 槌1
	this.instance_37 = new lib.槌左1();
	this.instance_37.parent = this;
	this.instance_37.setTransform(559.7,507,1.463,1.463,0,0,0,0.6,0.6);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.instance_38 = new lib.槌左2();
	this.instance_38.parent = this;
	this.instance_38.setTransform(909.6,539.5,1.463,1.463,0,0,0,0.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_37}]},554).to({state:[{t:this.instance_37}]},29).to({state:[{t:this.instance_38}]},5).to({state:[{t:this.instance_37}]},10).to({state:[{t:this.instance_38}]},10).to({state:[{t:this.instance_37}]},10).to({state:[{t:this.instance_38}]},6).to({state:[]},1).wait(2040));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(554).to({_off:false},0).to({x:740.5,y:501.1,alpha:1},29).to({_off:true},5).wait(10).to({_off:false},0).to({_off:true},10).wait(10).to({_off:false},0).to({_off:true},6).wait(2041));

	// 槌2
	this.instance_39 = new lib.槌右1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(1610,597.8,1.463,1.463,0,0,0,0.5,0.6);
	this.instance_39.alpha = 0;
	this.instance_39._off = true;

	this.instance_40 = new lib.槌右2();
	this.instance_40.parent = this;
	this.instance_40.setTransform(1306.2,574.4,1.463,1.463,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_39}]},564).to({state:[{t:this.instance_39}]},19).to({state:[{t:this.instance_39}]},5).to({state:[{t:this.instance_40}]},10).to({state:[{t:this.instance_39}]},10).to({state:[{t:this.instance_40}]},10).to({state:[{t:this.instance_39}]},6).to({state:[]},1).wait(2040));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(564).to({_off:false},0).to({x:1408.1,alpha:1},19).wait(5).to({_off:true},10).wait(10).to({_off:false},0).to({_off:true},10).wait(6).to({_off:false},0).to({_off:true},1).wait(2040));

	// 1953
	this.instance_41 = new lib._1953Y();
	this.instance_41.parent = this;
	this.instance_41.setTransform(1103.7,343,0.872,0.872,0,0,0,0.7,0.7);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(104).to({_off:false},0).to({y:424.9},14).wait(36).to({y:339.9,alpha:0},30).to({_off:true},1).wait(2480));

	// bg1
	this.instance_42 = new lib.bg1();
	this.instance_42.parent = this;
	this.instance_42.setTransform(961.6,542.9,1.463,1.463,0,0,0,0.6,0.6);
	this.instance_42.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).to({alpha:1},24).wait(619).to({_off:true},1).wait(2021));

	// endword
	this.instance_43 = new lib.endword();
	this.instance_43.parent = this;
	this.instance_43.setTransform(1105.3,603.8,0.854,0.854,0,0,0,0.7,0.7);
	this.instance_43.alpha = 0;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(1173).to({_off:false},0).to({regX:0.5,regY:0.5,scaleX:3.1,scaleY:3.1,x:1105.2,y:603.7,alpha:1},10).to({_off:true},1).wait(1481));

	// end
	this.instance_44 = new lib.暗幕();
	this.instance_44.parent = this;
	this.instance_44.setTransform(1105.4,603.7,3.174,3.571,0,0,0,0.6,0.5);
	this.instance_44.alpha = 0;
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(1173).to({_off:false},0).to({alpha:0.609},10).to({_off:true},1).wait(1481));

	// word
	this.instance_45 = new lib.word();
	this.instance_45.parent = this;
	this.instance_45.setTransform(1082.3,320.9,1.078,1.078,0,0,0,0.1,0.7);
	this.instance_45.alpha = 0;
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(1148).to({_off:false},0).to({y:368.2,alpha:1},15).wait(9).to({_off:true},1).wait(1492));

	// hat5
	this.instance_46 = new lib.hat();
	this.instance_46.parent = this;
	this.instance_46.setTransform(1519.5,394.2,0.337,0.337,0,0,0,0.8,0.8);
	this.instance_46.alpha = 0;
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(1148).to({_off:false},0).to({y:506.2,alpha:1},15).wait(20).to({_off:true},1).wait(1481));

	// man5
	this.instance_47 = new lib.strongman();
	this.instance_47.parent = this;
	this.instance_47.setTransform(1522.1,916.3,0.732,0.732,0,0,0,0.6,0.6);
	this.instance_47.alpha = 0;
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(1136).to({_off:false},0).to({y:692.4,alpha:1},17).wait(20).to({alpha:0.609},10).to({_off:true},1).wait(1481));

	// hat4
	this.instance_48 = new lib.hat();
	this.instance_48.parent = this;
	this.instance_48.setTransform(1226.8,394.2,0.337,0.337,0,0,0,0.6,0.8);
	this.instance_48.alpha = 0;
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(1148).to({_off:false},0).to({y:506.2,alpha:1},15).wait(20).to({_off:true},1).wait(1481));

	// man4
	this.instance_49 = new lib.strongman();
	this.instance_49.parent = this;
	this.instance_49.setTransform(1229.9,916.3,0.732,0.732,0,0,0,0.6,0.6);
	this.instance_49.alpha = 0;
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(1136).to({_off:false},0).to({y:692.4,alpha:1},17).wait(20).to({alpha:0.609},10).to({_off:true},1).wait(1481));

	// hat3
	this.instance_50 = new lib.hat();
	this.instance_50.parent = this;
	this.instance_50.setTransform(942.9,394.2,0.337,0.337,0,0,0,0.8,0.8);
	this.instance_50.alpha = 0;
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(1148).to({_off:false},0).to({y:506.2,alpha:1},15).wait(20).to({_off:true},1).wait(1481));

	// man3
	this.instance_51 = new lib.strongman();
	this.instance_51.parent = this;
	this.instance_51.setTransform(944.9,916.3,0.732,0.732,0,0,0,0.6,0.6);
	this.instance_51.alpha = 0;
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(1136).to({_off:false},0).to({y:692.4,alpha:1},17).wait(20).to({alpha:0.609},10).to({_off:true},1).wait(1481));

	// hat2
	this.instance_52 = new lib.hat();
	this.instance_52.parent = this;
	this.instance_52.setTransform(666.3,394.2,0.337,0.337,0,0,0,0.6,0.8);
	this.instance_52.alpha = 0;
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(1148).to({_off:false},0).to({y:506.2,alpha:1},15).wait(20).to({_off:true},1).wait(1481));

	// man2
	this.instance_53 = new lib.strongman();
	this.instance_53.parent = this;
	this.instance_53.setTransform(669.2,916.3,0.732,0.732,0,0,0,0.6,0.6);
	this.instance_53.alpha = 0;
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(1136).to({_off:false},0).to({y:692.4,alpha:1},17).wait(20).to({alpha:0.609},10).to({_off:true},1).wait(1481));

	// factory
	this.instance_54 = new lib.factory();
	this.instance_54.parent = this;
	this.instance_54.setTransform(1095.9,407.4,1.463,1.463,0,0,0,0.6,0.1);
	this.instance_54.alpha = 0;
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(1048).to({_off:false},0).to({y:605,alpha:1},20).wait(50).to({alpha:0},20).to({_off:true},1).wait(1526));

	// man
	this.instance_55 = new lib.man();
	this.instance_55.parent = this;
	this.instance_55.setTransform(669.5,755.4,1.463,1.463,0,0,0,-291.8,102.1);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(1068).to({_off:false},0).wait(50).to({alpha:0},10).to({_off:true},1).wait(1536));

	// 設備
	this.instance_56 = new lib.thing();
	this.instance_56.parent = this;
	this.instance_56.setTransform(1103,481.3,0.702,0.702,0,0,0,0.7,0.1);
	this.instance_56.alpha = 0;
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(1008).to({_off:false},0).to({y:593.3,alpha:1},20).to({x:892.3,alpha:0},25).to({_off:true},1).wait(1611));

	// 錢
	this.instance_57 = new lib.money();
	this.instance_57.parent = this;
	this.instance_57.setTransform(920.4,601.9,0.817,0.817,0,0,0,0.7,0.1);
	this.instance_57.alpha = 0;
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(954).to({_off:false},0).to({regX:0.8,x:1131.1,alpha:1},34).to({y:466.9,alpha:0},20).to({_off:true},1).wait(1656));

	// 工具
	this.instance_58 = new lib.tool();
	this.instance_58.parent = this;
	this.instance_58.setTransform(1105,498.3,0.702,0.702,0,0,0,0.7,0.6);
	this.instance_58.alpha = 0;
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(908).to({_off:false},0).to({y:594.9,alpha:1},20).to({x:952.8,alpha:0},25).to({_off:true},1).wait(1711));

	// 手
	this.instance_59 = new lib.hand();
	this.instance_59.parent = this;
	this.instance_59.setTransform(733.9,778.4,1.813,1.813,0,0,0,0.5,0.5);
	this.instance_59.alpha = 0;
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(885).to({_off:false},0).to({x:924.2,alpha:1},23).wait(20).to({x:745.6,alpha:0},25).wait(1).to({x:924.2,alpha:1},34).wait(40).to({x:745.6,alpha:0},25).to({_off:true},1).wait(1611));

	// 工程
	this.instance_60 = new lib.桃地();
	this.instance_60.parent = this;
	this.instance_60.setTransform(918.2,218.8,0.585,0.585,0,0,0,0.6,0.7);
	this.instance_60.alpha = 0;
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(837).to({_off:false},0).to({y:327.1,alpha:1},21).wait(15).to({regX:0.5,x:1181.6,alpha:0},20).to({_off:true},1).wait(1771));

	// 桃園
	this.instance_61 = new lib.tao_1();
	this.instance_61.parent = this;
	this.instance_61.setTransform(917.6,501.7,1.829,1.828,0,0,0,0.6,0.6);
	this.instance_61.alpha = 0;
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(808).to({_off:false},0).to({alpha:1},15).wait(50).to({regX:0.7,x:1181.2,alpha:0},20).to({_off:true},1).wait(1771));

	// red
	this.instance_62 = new lib.RC();
	this.instance_62.parent = this;
	this.instance_62.setTransform(1137.1,583.1,1.463,1.463,0,0,0,0.6,0.6);
	this.instance_62.alpha = 0;
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(798).to({_off:false},0).to({alpha:1},25).wait(50).to({x:1400.5,alpha:0},20).to({_off:true},1).wait(1771));

	// 工廠
	this.instance_63 = new lib.苗地();
	this.instance_63.parent = this;
	this.instance_63.setTransform(728.6,505.3,0.636,0.636,0,0,0,0.7,0.7);
	this.instance_63.alpha = 0;
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(776).to({_off:false},0).to({regY:0.6,y:593.1,alpha:1},22).wait(75).to({x:992,alpha:0},20).to({_off:true},1).wait(1771));

	// 苗栗
	this.instance_64 = new lib.miao_1();
	this.instance_64.parent = this;
	this.instance_64.setTransform(732.2,782.7,1.742,1.742,0,0,0,0.5,0.5);
	this.instance_64.alpha = 0;
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(749).to({_off:false},0).to({alpha:1},14).wait(110).to({x:995.6,alpha:0},20).to({_off:true},1).wait(1771));

	// red
	this.instance_65 = new lib.RC();
	this.instance_65.parent = this;
	this.instance_65.setTransform(1000.3,815.7,1.463,1.463,0,0,0,0.6,0.6);
	this.instance_65.alpha = 0;
	this.instance_65._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(739).to({_off:false},0).to({alpha:1},24).wait(110).to({regX:0,regY:0,x:999.4,y:814.8},0).to({x:1262.8,alpha:0},20).to({_off:true},1).wait(1771));

	// 台灣
	this.instance_66 = new lib.taiwan_1();
	this.instance_66.parent = this;
	this.instance_66.setTransform(1114.1,898.6,1.463,1.463,0,0,0,0.6,0.6);
	this.instance_66.alpha = 0;
	this.instance_66._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(714).to({_off:false},0).to({regY:0.5,y:628.6,alpha:1},25).wait(134).to({x:1377.5,alpha:0},20).to({_off:true},1).wait(1771));

	// 1981
	this.instance_67 = new lib._1981Y();
	this.instance_67.parent = this;
	this.instance_67.setTransform(1103.7,343,0.872,0.872,0,0,0,0.7,0.7);
	this.instance_67._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(653).to({_off:false},0).to({regY:0.6,y:427.9},13).wait(36).to({regY:0.7,y:343,alpha:0},31).to({_off:true},1).wait(1931));

	// bg2
	this.instance_68 = new lib.bg2();
	this.instance_68.parent = this;
	this.instance_68.setTransform(961.6,541.6,1.463,1.463,0,0,0,0.6,0.6);
	this.instance_68._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(644).to({_off:false},0).wait(539).to({_off:true},1).wait(1481));

	// endword
	this.instance_69 = new lib.endword();
	this.instance_69.parent = this;
	this.instance_69.setTransform(1105.3,603.8,0.854,0.854,0,0,0,0.7,0.7);
	this.instance_69.alpha = 0;
	this.instance_69._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(1573).to({_off:false},0).to({regX:0.5,regY:0.5,scaleX:3.1,scaleY:3.1,x:1105.2,y:603.7,alpha:1},15).to({_off:true},1).wait(1076));

	// end
	this.instance_70 = new lib.暗幕();
	this.instance_70.parent = this;
	this.instance_70.setTransform(1105.4,603.7,3.174,3.571,0,0,0,0.6,0.5);
	this.instance_70.alpha = 0;
	this.instance_70._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(1573).to({_off:false},0).to({alpha:0.609},15).to({_off:true},1).wait(1076));

	// 101
	this.instance_71 = new lib._101();
	this.instance_71.parent = this;
	this.instance_71.setTransform(1077.8,756.1,1.005,1.005,0,0,0,0.1,0.1);
	this.instance_71.alpha = 0;
	this.instance_71._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(1493).to({_off:false},0).to({regX:0,regY:0,scaleX:1.9,scaleY:1.9,x:1077.7,y:736.1,alpha:1},45).wait(35).to({alpha:0.609},15).to({_off:true},1).wait(1076));

	// bling
	this.instance_72 = new lib.bling();
	this.instance_72.parent = this;
	this.instance_72.setTransform(1106,667.2,1.951,1.727);
	this.instance_72._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(1538).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).wait(5).to({alpha:0.609},15).to({_off:true},1).wait(1076));

	// blingbling
	this.instance_73 = new lib.blingbling();
	this.instance_73.parent = this;
	this.instance_73.setTransform(1106,667.2,1.951,1.727);
	this.instance_73._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(1543).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(1097));

	// smoke
	this.instance_74 = new lib.smoke2_1();
	this.instance_74.parent = this;
	this.instance_74.setTransform(1104.6,583,1.317,1.317,0,0,0,0.1,0.1);
	this.instance_74._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(1433).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(1187));

	// smoke
	this.instance_75 = new lib.smoke1_1();
	this.instance_75.parent = this;
	this.instance_75.setTransform(1104.5,583,0.818,0.818,0,0,0,0.1,0.1);
	this.instance_75.alpha = 0;
	this.instance_75._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(1413).to({_off:false},0).to({scaleX:1.32,scaleY:1.32,x:1104.6,alpha:1},15).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({regX:0,regY:0,scaleX:2,scaleY:2,x:1104.4,y:582.9},12).to({alpha:0},13).to({_off:true},1).wait(1161));

	// tire
	this.instance_76 = new lib.tool4();
	this.instance_76.parent = this;
	this.instance_76.setTransform(646.4,832,0.585,0.585,0,0,0,0.1,0.1);
	this.instance_76._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(1465).to({_off:false},0).wait(5).to({regX:0.3,regY:0.3,scaleX:0.36,scaleY:0.36,x:646.5,y:755.1},4).to({regX:0.4,regY:0.4,scaleX:0.28,scaleY:0.28,x:1108.1,y:631.1},4).to({_off:true},1).wait(1186));

	// steeringwheel
	this.instance_77 = new lib.tool3();
	this.instance_77.parent = this;
	this.instance_77.setTransform(1580.1,842.5,0.585,0.585,0,0,0,0.1,0);
	this.instance_77._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(1453).to({_off:false},0).wait(5).to({regY:0.3,scaleX:0.43,scaleY:0.43,x:1409.2,y:887.7},4).to({regX:0.3,scaleX:0.31,scaleY:0.31,x:1104.5,y:583},4).to({_off:true},1).wait(1198));

	// spanner
	this.instance_78 = new lib.tool2();
	this.instance_78.parent = this;
	this.instance_78.setTransform(650.1,378,0.673,0.673,0,0,0,0.1,0.1);
	this.instance_78._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(1441).to({_off:false},0).wait(5).to({regX:0.5,regY:0.3,scaleX:0.42,scaleY:0.42,x:783.1,y:346.5},4).to({regX:0.4,regY:0.4,scaleX:0.27,scaleY:0.27,x:1094.1,y:628.6},3).to({_off:true},1).wait(1211));

	// screw
	this.instance_79 = new lib.tool1();
	this.instance_79.parent = this;
	this.instance_79.setTransform(1600.8,363.5,0.585,0.585,0,0,0,0.1,0.1);
	this.instance_79._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(1428).to({_off:false},0).wait(5).to({regX:0.2,regY:0.2,scaleX:0.45,scaleY:0.45,x:1464.6,y:340.4},4).to({regX:0.3,regY:0.3,scaleX:0.32,scaleY:0.32,x:1170.9,y:601.2},4).to({_off:true},1).wait(1223));

	// dingdong
	this.instance_80 = new lib.ding();
	this.instance_80.parent = this;
	this.instance_80.setTransform(1391.3,425.6,0.195,0.195,0,0,0,1,0.5);
	this.instance_80.alpha = 0;
	this.instance_80._off = true;

	this.instance_81 = new lib.dong();
	this.instance_81.parent = this;
	this.instance_81.setTransform(1391.3,425.6,0.615,0.615,0,0,0,0.4,0.1);
	this.instance_81._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(1369).to({_off:false},0).to({regX:0.4,regY:0.1,scaleX:0.62,scaleY:0.62,alpha:1},14).to({_off:true},2).wait(1280));
	this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(1385).to({_off:false},0).wait(11).to({alpha:0},17).to({_off:true},1).wait(1251));

	// person2
	this.instance_82 = new lib.got();
	this.instance_82.parent = this;
	this.instance_82.setTransform(1097.6,692.4,1.142,1.142,0,0,0,0.1,0.1);
	this.instance_82.alpha = 0;
	this.instance_82._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(1363).to({_off:false},0).to({alpha:1},13).wait(20).to({alpha:0},17).to({_off:true},1).wait(1251));

	// person
	this.instance_83 = new lib.think();
	this.instance_83.parent = this;
	this.instance_83.setTransform(1097.7,875,1.142,1.142,0,0,0,0.7,0.1);
	this.instance_83.alpha = 0;
	this.instance_83._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(1258).to({_off:false},0).to({y:692.4,alpha:1},25).wait(80).to({alpha:0},13).to({_off:true},1).wait(1288));

	// left
	this.instance_84 = new lib.leftthink();
	this.instance_84.parent = this;
	this.instance_84.setTransform(1101.1,597.9,0.4,0.4,0,0,0,0.3,0.3);
	this.instance_84._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(1283).to({_off:false},0).to({regX:0,regY:0,scaleX:0.73,scaleY:0.73,x:699.1,y:524.7},30).wait(40).to({alpha:0},10).to({_off:true},1).wait(1301));

	// right
	this.instance_85 = new lib.rightthink();
	this.instance_85.parent = this;
	this.instance_85.setTransform(1100.1,594.7,0.382,0.382,0,0,0,50.4,50.5);
	this.instance_85._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(1313).to({_off:false},0).to({regX:50.1,regY:50,scaleX:0.73,scaleY:0.73,x:1474.1,y:438.2},30).wait(10).to({alpha:0},10).to({_off:true},1).wait(1301));

	// 1986
	this.instance_86 = new lib._1986Y();
	this.instance_86.parent = this;
	this.instance_86.setTransform(1103.7,343,0.872,0.872,0,0,0,0.7,0.1);
	this.instance_86._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(1193).to({_off:false},0).to({y:420.3},15).wait(35).to({y:262.2,alpha:0},30).to({_off:true},1).wait(1391));

	// bg3
	this.instance_87 = new lib.bg3();
	this.instance_87.parent = this;
	this.instance_87.setTransform(963,541.9,1.463,1.463,0,0,0,0.5,0.1);
	this.instance_87._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_87).wait(1184).to({_off:false},0).wait(404).to({_off:true},1).wait(1076));

	// endword
	this.instance_88 = new lib.endword();
	this.instance_88.parent = this;
	this.instance_88.setTransform(1105.3,603.8,0.854,0.854,0,0,0,0.7,0.7);
	this.instance_88.alpha = 0;
	this.instance_88._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_88).wait(2323).to({_off:false},0).to({regX:0.5,regY:0.5,scaleX:3.1,scaleY:3.1,x:1105.2,y:603.7,alpha:1},15).to({_off:true},1).wait(326));

	// end
	this.instance_89 = new lib.暗幕();
	this.instance_89.parent = this;
	this.instance_89.setTransform(1105.4,603.7,3.174,3.571,0,0,0,0.6,0.5);
	this.instance_89.alpha = 0;
	this.instance_89._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_89).wait(2323).to({_off:false},0).to({alpha:0.609},15).to({_off:true},1).wait(326));

	// 柱
	this.instance_90 = new lib.柱狀圖();
	this.instance_90.parent = this;
	this.instance_90.setTransform(867.3,742.5,3.804,3.804,0,0,0,28,0);
	this.instance_90._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_90).wait(2228).to({_off:false},0).wait(110).to({_off:true},1).wait(326));

	// file
	this.instance_91 = new lib.file();
	this.instance_91.parent = this;
	this.instance_91.setTransform(1453.1,390.1,1.463,1.463,0,0,0,0.1,0.6);
	this.instance_91.alpha = 0;
	this.instance_91._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_91).wait(2173).to({_off:false},0).to({y:538,alpha:1},35).wait(5).to({alpha:0},15).to({_off:true},1).wait(436));

	// heart
	this.instance_92 = new lib.heart();
	this.instance_92.parent = this;
	this.instance_92.setTransform(1085.8,390.8,1.463,1.463,0,0,0,0.1,0.6);
	this.instance_92.alpha = 0;
	this.instance_92._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_92).wait(2143).to({_off:false},0).to({y:538.7,alpha:1},30).wait(40).to({alpha:0},15).to({_off:true},1).wait(436));

	// commu
	this.instance_93 = new lib.communication();
	this.instance_93.parent = this;
	this.instance_93.setTransform(717.3,390.1,1.463,1.463,0,0,0,0.1,0.6);
	this.instance_93.alpha = 0;
	this.instance_93._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_93).wait(2113).to({_off:false},0).to({y:538,alpha:1},30).wait(70).to({alpha:0},15).to({_off:true},1).wait(436));

	// control
	this.instance_94 = new lib.companyM();
	this.instance_94.parent = this;
	this.instance_94.setTransform(690.8,703.7,1.742,1.742,0,0,0,0.1,0.5);
	this.instance_94.alpha = 0;
	this.instance_94._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_94).wait(2063).to({_off:false},0).to({alpha:1},5).wait(30).to({y:940.8,alpha:0},15).to({_off:true},1).wait(551));

	// CTY
	this.instance_95 = new lib.companyTY();
	this.instance_95.parent = this;
	this.instance_95.setTransform(935,498.8,0.486,0.486,0,0,0,0.2,0.6);
	this.instance_95.alpha = 0;
	this.instance_95._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_95).wait(1983).to({_off:false},0).to({y:597.6,alpha:1},30).wait(10).to({x:586.5,y:852},45).wait(30).to({y:1089.1,alpha:0},15).to({_off:true},1).wait(551));

	// CSH
	this.instance_96 = new lib.companySH();
	this.instance_96.parent = this;
	this.instance_96.setTransform(1094.2,334.7,0.584,0.584,0,0,0,0.1,0.6);
	this.instance_96.alpha = 0;
	this.instance_96._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_96).wait(1943).to({_off:false},0).to({regY:0.5,y:410.4,alpha:1},30).wait(50).to({regY:0.7,x:808,y:824.2},45).wait(30).to({regY:0.6,y:1061.2,alpha:0},15).to({_off:true},1).wait(551));

	// CT
	this.instance_97 = new lib.companyT();
	this.instance_97.parent = this;
	this.instance_97.setTransform(1293.4,309,0.395,0.395,0,0,0,0.1,0.7);
	this.instance_97.alpha = 0;
	this.instance_97._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_97).wait(1898).to({_off:false},0).to({y:371.5,alpha:1},30).wait(95).to({regX:0.3,regY:0.5,x:1001.9,y:849.9},45).wait(30).to({regY:0.7,y:1087.1,alpha:0},15).to({_off:true},1).wait(551));

	// bigtaiwan
	this.instance_98 = new lib.bigtaiwan();
	this.instance_98.parent = this;
	this.instance_98.setTransform(1114.1,898.6,1.463,1.463,0,0,0,0.1,0.6);
	this.instance_98.alpha = 0;
	this.instance_98._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_98).wait(1848).to({_off:false},0).to({regY:0.5,y:628.6,alpha:1},40).wait(210).to({y:865.6,alpha:0},15).to({_off:true},1).wait(551));

	// toyota
	this.instance_99 = new lib.toyota();
	this.instance_99.parent = this;
	this.instance_99.setTransform(1694.2,664.7,0.096,0.096,0,0,0,1.1,1.1);
	this.instance_99.alpha = 0;
	this.instance_99._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_99).wait(1809).to({_off:false},0).to({regX:0.9,regY:0.7,scaleX:0.22,scaleY:0.22,x:1518.3,alpha:1},10).wait(9).to({alpha:0},20).to({_off:true},1).wait(816));

	// bmw
	this.instance_100 = new lib.bmw();
	this.instance_100.parent = this;
	this.instance_100.setTransform(1654.8,496.1,0.463,0.463,0,0,0,157.2,0.7);
	this.instance_100.alpha = 0;
	this.instance_100._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_100).wait(1798).to({_off:false},0).to({regX:157.1,regY:0.6,scaleX:0.81,scaleY:0.81,x:1485.4,y:341.9,alpha:1},11).wait(19).to({alpha:0},20).to({_off:true},1).wait(816));

	// nissan
	this.instance_101 = new lib.nissan_1();
	this.instance_101.parent = this;
	this.instance_101.setTransform(567.5,899.8,0.575,0.575,0,0,0,89,0.5);
	this.instance_101.alpha = 0;
	this.instance_101._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_101).wait(1788).to({_off:false},0).to({regY:0.6,scaleX:1.04,scaleY:1.04,x:746.7,y:787.9,alpha:1},10).wait(30).to({alpha:0},20).to({_off:true},1).wait(816));

	// ford
	this.instance_102 = new lib.ford();
	this.instance_102.parent = this;
	this.instance_102.setTransform(1586.4,942.8,0.137,0.137,0,0,0,0.8,1.1);
	this.instance_102.alpha = 0;
	this.instance_102._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_102).wait(1778).to({_off:false},0).to({regX:0.4,regY:0.8,scaleX:0.31,scaleY:0.31,x:1365,y:901.4,alpha:1},10).wait(40).to({alpha:0},20).to({_off:true},1).wait(816));

	// audi
	this.instance_103 = new lib.audi();
	this.instance_103.parent = this;
	this.instance_103.setTransform(609.7,321.8,0.156,0.156,0,0,0,0.7,1);
	this.instance_103.alpha = 0;
	this.instance_103._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_103).wait(1768).to({_off:false},0).to({regX:0.8,regY:0.4,scaleX:0.26,scaleY:0.26,x:847.6,y:362.3,alpha:1},10).wait(50).to({alpha:0},20).to({_off:true},1).wait(816));

	// taiwan
	this.instance_104 = new lib.taiwan();
	this.instance_104.parent = this;
	this.instance_104.setTransform(1127.4,862.8,1.463,1.463,0,0,0,0.1,0.5);
	this.instance_104.alpha = 0;
	this.instance_104._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_104).wait(1753).to({_off:false},0).to({regY:0.6,y:602.8,alpha:1},15).wait(60).to({alpha:0},20).to({_off:true},1).wait(816));

	// 手
	this.instance_105 = new lib.手();
	this.instance_105.parent = this;
	this.instance_105.setTransform(1097.5,1018,2.512,2.023);
	this.instance_105.alpha = 0;
	this.instance_105._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_105).wait(1681).to({_off:false},0).to({y:751.1,alpha:1},21).wait(41).to({alpha:0},15).to({_off:true},1).wait(906));

	// WTO
	this.instance_106 = new lib.WTO();
	this.instance_106.parent = this;
	this.instance_106.setTransform(1108,225.1,1.463,1.463);
	this.instance_106.alpha = 0;
	this.instance_106._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_106).wait(1668).to({_off:false},0).to({y:407.8,alpha:1},19).wait(56).to({alpha:0},15).to({_off:true},1).wait(906));

	// 1995
	this.instance_107 = new lib._1995Y();
	this.instance_107.parent = this;
	this.instance_107.setTransform(1103.6,343,0.872,0.872,0,0,0,0.1,0.1);
	this.instance_107._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_107).wait(1598).to({_off:false},0).to({y:420.3},15).wait(35).to({y:304.4,alpha:0},30).to({_off:true},1).wait(986));

	// bg4
	this.instance_108 = new lib.bg4();
	this.instance_108.parent = this;
	this.instance_108.setTransform(961.5,541.9,1.463,1.463,0,0,0,0.1,0.1);
	this.instance_108._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_108).wait(1589).to({_off:false},0).wait(749).to({_off:true},1).wait(326));

	// endword
	this.instance_109 = new lib.endword();
	this.instance_109.parent = this;
	this.instance_109.setTransform(1105.3,603.8,0.854,0.854,0,0,0,0.7,0.7);
	this.instance_109.alpha = 0;
	this.instance_109._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_109).wait(2608).to({_off:false},0).to({regX:0.5,regY:0.5,scaleX:3.1,scaleY:3.1,x:1105.2,y:603.7,alpha:1},15).to({_off:true},1).wait(41));

	// end
	this.instance_110 = new lib.暗幕();
	this.instance_110.parent = this;
	this.instance_110.setTransform(1105.4,603.7,3.174,3.571,0,0,0,0.6,0.5);
	this.instance_110.alpha = 0;
	this.instance_110._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_110).wait(2608).to({_off:false},0).to({alpha:0.609},15).to({_off:true},1).wait(41));

	// 標5
	this.instance_111 = new lib.標();
	this.instance_111.parent = this;
	this.instance_111.setTransform(1382.3,620.7,0.338,0.338,0,0,0,0.3,0.1);
	this.instance_111.alpha = 0;
	this.instance_111._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_111).wait(2578).to({_off:false},0).to({regY:0,y:679.1,alpha:1},5).wait(25).to({alpha:0.621},15).to({_off:true},1).wait(41));

	// 標4
	this.instance_112 = new lib.標();
	this.instance_112.parent = this;
	this.instance_112.setTransform(1008.4,703,0.338,0.338,0,0,0,0.1,0.3);
	this.instance_112.alpha = 0;
	this.instance_112._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_112).wait(2573).to({_off:false},0).to({y:761.5,alpha:1},5).wait(30).to({alpha:0.621},15).to({_off:true},1).wait(41));

	// 標3
	this.instance_113 = new lib.標();
	this.instance_113.parent = this;
	this.instance_113.setTransform(1293.1,257.1,0.338,0.338,0,0,0,0.1,0.3);
	this.instance_113.alpha = 0;
	this.instance_113._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_113).wait(2568).to({_off:false},0).to({y:315.6,alpha:1},5).wait(35).to({alpha:0.621},15).to({_off:true},1).wait(41));

	// 標2
	this.instance_114 = new lib.標();
	this.instance_114.parent = this;
	this.instance_114.setTransform(1227.9,515.4,0.338,0.338,0,0,0,0.3,0);
	this.instance_114.alpha = 0;
	this.instance_114._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_114).wait(2563).to({_off:false},0).to({regY:0.6,y:574,alpha:1},5).wait(40).to({alpha:0.621},15).to({_off:true},1).wait(41));

	// 標1
	this.instance_115 = new lib.標();
	this.instance_115.parent = this;
	this.instance_115.setTransform(912.5,346.3,0.338,0.338,0,0,0,0.3,0.3);
	this.instance_115.alpha = 0;
	this.instance_115._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_115).wait(2558).to({_off:false},0).to({regY:0.1,y:404.7,alpha:1},5).wait(45).to({alpha:0.621},15).to({_off:true},1).wait(41));

	// earth
	this.instance_116 = new lib.earth();
	this.instance_116.parent = this;
	this.instance_116.setTransform(1145.6,975.1,1.463,1.463);
	this.instance_116.alpha = 0;
	this.instance_116._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_116).wait(2523).to({_off:false},0).to({y:613.9,alpha:1},30).wait(55).to({alpha:0.621},15).to({_off:true},1).wait(41));

	// luxgen
	this.instance_117 = new lib.luxgen_2();
	this.instance_117.parent = this;
	this.instance_117.setTransform(1101.5,571.6,1.012,1.012,0,0,0,0.1,0.1);
	this.instance_117.alpha = 0;
	this.instance_117._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_117).wait(2481).to({_off:false},0).to({regX:0,regY:0,scaleX:2.78,scaleY:2.78,x:1101.4,y:571.5,alpha:1},22).wait(10).to({alpha:0},15).to({_off:true},1).wait(136));

	// smoke
	this.instance_118 = new lib.smoke2();
	this.instance_118.parent = this;
	this.instance_118.setTransform(1104.6,583,1.317,1.317,0,0,0,0.1,0.1);
	this.instance_118._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_118).wait(2435).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({scaleX:0.73,scaleY:0.73,x:1104.5,y:582.9,alpha:0},15).to({_off:true},1).wait(176));

	// smoke
	this.instance_119 = new lib.smoke1();
	this.instance_119.parent = this;
	this.instance_119.setTransform(1104.5,583,0.768,0.768,0,0,0,0.1,0.1);
	this.instance_119.alpha = 0;
	this.instance_119._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_119).wait(2415).to({_off:false},0).to({scaleX:1.32,scaleY:1.32,x:1104.6,alpha:1},15).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(4).to({_off:false},0).to({_off:true},4).wait(192));

	// 1
	this.instance_120 = new lib._1();
	this.instance_120.parent = this;
	this.instance_120.setTransform(1359.5,296.4,0.352,0.352,0,0,0,0.1,0.1);
	this.instance_120.alpha = 0;
	this.instance_120._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_120).wait(2430).to({_off:false},0).to({alpha:1},8).to({regX:1,regY:2,scaleX:0.1,scaleY:0.1,x:1211.6,y:514.4},30).to({_off:true},1).wait(196));

	// 2
	this.instance_121 = new lib._2();
	this.instance_121.parent = this;
	this.instance_121.setTransform(844.1,299.4,0.421,0.421,0,0,0,0.3,0.5);
	this.instance_121.alpha = 0;
	this.instance_121._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_121).wait(2430).to({_off:false},0).to({alpha:1},8).to({regX:0.8,regY:0.4,scaleX:0.12,scaleY:0.12,x:1067.5,y:515.2},30).to({_off:true},1).wait(196));

	// 3
	this.instance_122 = new lib._3();
	this.instance_122.parent = this;
	this.instance_122.setTransform(682.6,744.3,0.407,0.407,0,0,0,0.1,0.1);
	this.instance_122.alpha = 0;
	this.instance_122._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_122).wait(2430).to({_off:false},0).to({alpha:1},8).to({regX:0.5,regY:0.5,scaleX:0.11,scaleY:0.11,x:1022.2,y:639.7},30).to({_off:true},1).wait(196));

	// 4
	this.instance_123 = new lib._4();
	this.instance_123.parent = this;
	this.instance_123.setTransform(1396.2,902.1,0.338,0.338,0,0,0,0.3,0);
	this.instance_123.alpha = 0;
	this.instance_123._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_123).wait(2430).to({_off:false},0).to({alpha:1},8).to({regX:0.6,regY:1.6,scaleX:0.1,scaleY:0.1,x:1221.9,y:683.9},30).to({_off:true},1).wait(196));

	// 5
	this.instance_124 = new lib._5();
	this.instance_124.parent = this;
	this.instance_124.setTransform(1573,655.2,0.369,0.369,0,0,0,0.1,0.3);
	this.instance_124.alpha = 0;
	this.instance_124._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_124).wait(2430).to({_off:false},0).to({alpha:1},8).to({regX:1,regY:1,scaleX:0.1,scaleY:0.1,x:1271.3,y:614.7},30).to({_off:true},1).wait(196));

	// 6
	this.instance_125 = new lib._6();
	this.instance_125.parent = this;
	this.instance_125.setTransform(890.8,900.8,0.413,0.413,0,0,0,0.3,0.5);
	this.instance_125.alpha = 0;
	this.instance_125._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_125).wait(2430).to({_off:false},0).to({alpha:1},8).to({regX:0.5,regY:0.8,scaleX:0.12,scaleY:0.12,x:1080.5,y:683.5},30).to({_off:true},1).wait(196));

	// 7
	this.instance_126 = new lib._7();
	this.instance_126.parent = this;
	this.instance_126.setTransform(1597.3,391,0.521,0.521,0,0,0,0.2,0.2);
	this.instance_126.alpha = 0;
	this.instance_126._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_126).wait(2430).to({_off:false},0).to({alpha:1},8).to({regX:1.4,regY:0.7,scaleX:0.15,scaleY:0.15,x:1278.2,y:540.9},30).to({_off:true},1).wait(196));

	// 8
	this.instance_127 = new lib._8();
	this.instance_127.parent = this;
	this.instance_127.setTransform(675.6,495.7,0.299,0.299,0,0,0,0.1,0.4);
	this.instance_127.alpha = 0;
	this.instance_127._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_127).wait(2430).to({_off:false},0).to({alpha:1},8).to({regX:2.4,regY:2.4,scaleX:0.08,scaleY:0.08,x:1020.3,y:570.2},30).to({_off:true},1).wait(196));

	// 2009
	this.instance_128 = new lib._2009Y();
	this.instance_128.parent = this;
	this.instance_128.setTransform(1103.6,343,0.872,0.872,0,0,0,0.1,0.1);
	this.instance_128._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_128).wait(2348).to({_off:false},0).to({y:422.1},15).wait(35).to({y:336.1,alpha:0},30).to({_off:true},1).wait(236));

	// bg5
	this.instance_129 = new lib.bg5();
	this.instance_129.parent = this;
	this.instance_129.setTransform(961.5,542,1.463,1.463,0,0,0,0.1,0.1);
	this.instance_129._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_129).wait(2339).to({_off:false},0).wait(284).to({_off:true},1).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,542.8,1923,1083);
// library properties:
lib.properties = {
	width: 1920,
	height: 1083,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/chpaab_atlas_.png", id:"chpaab_atlas_"},
		{src:"sounds/chp1_1_1953wav.mp3", id:"chp1_1_1953wav"},
		{src:"sounds/chp1_1_1981wav.mp3", id:"chp1_1_1981wav"},
		{src:"sounds/chp1_1_1986wav.mp3", id:"chp1_1_1986wav"},
		{src:"sounds/chp1_1_1995wav.mp3", id:"chp1_1_1995wav"},
		{src:"sounds/chp1_1_2009wav.mp3", id:"chp1_1_2009wav"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;