(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"chpca_atlas_", frames: [[2110,5639,285,40],[1316,1463,49,16],[4082,0,10,583],[4070,0,10,583],[1042,6552,414,229],[0,4649,1053,192],[0,5387,1053,192],[3386,5682,90,91],[3736,4011,105,103],[2436,5294,1053,192],[3491,7271,168,202],[3225,4124,623,583],[3850,4452,219,219],[3165,5682,219,219],[221,6889,200,51],[1114,6783,219,219],[4084,585,7,21],[0,6889,219,219],[1675,6975,219,219],[1335,6993,219,219],[1114,7004,219,219],[3179,6959,219,219],[3400,6959,219,219],[0,0,1314,740],[0,742,1314,740],[884,7114,219,219],[3270,7180,219,219],[1556,7196,219,219],[1335,7214,219,219],[1777,7297,402,36],[2559,7234,437,102],[3049,7180,219,219],[4070,585,12,22],[1527,4080,98,36],[663,7056,219,219],[2828,7013,219,219],[0,7110,219,219],[3165,5940,571,321],[3165,6263,571,321],[3491,5617,571,321],[2110,6458,571,321],[1055,5464,558,102],[2632,0,1314,740],[1896,7076,219,219],[1999,7380,250,36],[442,7056,219,219],[1922,5016,210,35],[2338,7102,219,219],[3179,6856,476,101],[221,7047,219,219],[1250,1484,1248,583],[564,7335,395,35],[3842,7050,219,219],[1250,2069,1248,581],[1316,1424,437,37],[1648,3757,173,354],[1075,4080,450,35],[3621,7050,219,219],[2117,7076,219,219],[0,6357,1053,192],[0,1484,1248,583],[3808,1746,150,150],[2053,3409,65,47],[4034,1301,56,77],[1922,5068,512,512],[2500,1912,1248,583],[0,2069,1248,583],[1888,6552,187,400],[0,6551,428,336],[1105,7225,223,172],[0,2654,878,581],[1075,4570,1073,444],[2110,6264,1053,192],[1055,6164,1053,192],[1250,2652,878,581],[1055,6358,1053,192],[2436,5068,610,157],[430,6551,610,157],[880,2654,325,569],[3750,1912,325,569],[1675,6552,211,421],[2446,6781,159,319],[2150,4570,931,496],[0,4843,610,157],[2500,2497,878,581],[1055,5776,1053,192],[958,6783,154,329],[430,6710,170,335],[602,6710,165,344],[0,3757,1073,444],[3380,2945,650,118],[2053,3332,75,75],[3705,4709,332,553],[3738,5940,314,553],[2683,6458,313,553],[3738,6495,313,553],[3850,4011,215,439],[1458,6552,215,439],[4034,1496,33,25],[3165,5903,251,29],[2500,1476,33,25],[3406,6586,225,268],[3179,6586,225,268],[1055,5582,1053,192],[2110,5682,1053,192],[719,3571,147,109],[0,5775,1053,192],[3380,2497,714,446],[1205,5016,715,446],[0,3237,717,447],[1075,4124,1073,444],[2110,5876,1053,192],[0,5969,1053,192],[2110,6070,1053,192],[719,3237,158,332],[2150,4124,1073,444],[0,4203,1073,444],[1055,5970,1053,192],[1075,3757,571,321],[1316,0,1314,740],[3808,1301,224,443],[2558,1327,1248,583],[3960,1868,102,37],[3808,742,282,557],[4034,1444,50,50],[2502,1424,50,50],[3491,5294,571,321],[769,6710,187,295],[3083,4709,620,583],[1832,3564,279,35],[0,6163,1053,192],[3830,7271,165,202],[612,4843,438,144],[3080,6458,80,80],[2130,3080,950,520],[880,3235,950,520],[1832,3602,950,520],[3082,3080,950,520],[3948,244,120,120],[3948,488,120,120],[3948,366,120,120],[2266,6781,178,293],[0,5016,1203,369],[2998,6458,80,80],[3948,610,120,120],[3960,1746,120,120],[3948,122,120,120],[3083,4570,80,123],[2784,3602,950,520],[221,7268,174,216],[1832,3235,219,327],[2130,2652,324,407],[3736,3602,324,407],[2399,1424,101,40],[4034,1380,45,62],[2053,3235,69,95],[2181,7323,220,55],[2558,742,1248,583],[2625,7338,220,55],[1777,7335,220,55],[2403,7338,220,55],[564,7372,220,55],[2110,5582,220,55],[1615,5521,280,55],[564,7277,220,55],[644,3686,220,55],[2758,5227,280,55],[1755,1424,320,50],[2077,1424,320,50],[322,3686,320,50],[0,3686,320,50],[1615,5464,280,55],[2998,6586,179,374],[1316,742,1240,680],[2436,5488,1053,192],[3661,7271,167,203],[0,5581,1053,192],[397,7277,165,201],[2436,5227,320,50],[221,6942,173,57],[1896,6954,173,57],[1896,7013,173,57],[2077,6781,187,293],[3386,5775,80,80],[3948,0,120,120],[786,7372,285,40],[2607,7013,219,219]]}
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



(lib.紅茶按鈕 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.紅茶2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.分隔線 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.分隔線png複製 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.名片 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.對話1 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.對話2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.星星 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.星 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.生活館設施播放影片介紹Luxgen生活館內的各項設施 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.生活館 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._02car = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._0 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._00 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._101n2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._1png複製2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._10 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._11 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._12 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib._13 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib._14 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib._15 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib._15658833_1262594267130371_554229512_o = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib._15682537_1262594263797038_698513357_o = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib._16 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib._17 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib._18 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib._19 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib._1先生請問是要看車嗎 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib._1林先生您好我是智傑這是我的名片 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib._2png複製2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib._2是的 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib._20 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib._21 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib._22 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib._2b = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib._2f = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib._2h = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib._2q = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib._2今天就由我為您服務首先就讓我來介紹一下納智捷吧 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib._31提示 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib._3請問您貴姓呢 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib._4噢我姓林png複製 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib._5林先生您好那今天有幾位要一起看車呢 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib._6bg = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib._6兩位我跟我太太而已 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib._7bg = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib._7好的林先生汽車這邊請 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.男人客 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib._8我們 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib._9 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.a1 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.APP元件 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.arrow = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.ARROWpng複製 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.ARRR = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.BackToChp3 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.bg21 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.boy = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.bubu = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.car = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.ccc = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.ccddddd = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.ccdws = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.cd1 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.cs = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.cs2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.框 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.框png複製3 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.familymanc = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.familymancpng複製2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.familywomanc = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.feiouhwjncs = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.給手 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.flame = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.frefef = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.frfewfew = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.ghuewnifvcl = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.ghuinbrewjvk = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.girl = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.h = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.桌 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.硬幣按鈕 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.mancr = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.manctalk = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.manc = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.mancpng複製2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.manpng複製 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.manpng複製2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.minus = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.杯子 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.plus = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.pointer = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.pointerpng複製 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.s1 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.s2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.s3按鈕 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.s3png複製 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_20161211130950 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_20161211131010 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_20161211131053 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.ssss = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.sub2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.sub3 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.swsws = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.女人客 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.TALK1 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.TALK2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.ttap = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.TV畫面 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.U31BG = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.womancr = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.wtf = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.wuu = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.ww = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.x = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.xx = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.xxxxxxxxxxxx = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.繼續播放 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.門 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.亮 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.品牌DNA播放影片介紹Luxgen的品牌精神和理念 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.品牌DNA = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.接手 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.提示 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.提示1 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.提示2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.提示3 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.提示4 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.提示w = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.提示x = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.提示xw = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.暫停 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.沙發 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.現在位置w = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.現在位置x = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.現在位置xw = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.盆栽 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.矩形18拷貝 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.矩形20 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.矩形25 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.矩形4拷貝2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.矩形4 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.確認按鈕 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.箭頭 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.箭頭zzzzzzzz = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0000_創新歷程 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0000s_0000_馬路 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0001_創立理念 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0002_心路歷程 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0003_核心人物 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0004_納智捷汽車 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0005_裕隆集團 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0006_CH1公司歷程 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0000_女生服裝 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0001_男生服裝 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0002_CH2服裝儀容 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0000_數位科技體驗區 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0001_AR實車賞車 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0002_ThinkTouch = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0003_3D體驗劇場 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0005_CH3銷售SOP = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.賣車的 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.跨殺小啦 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.車款展示展現車型顏色外觀給賓客瀏覽 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.車款展示 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.迎賓服務提供多種選項讓賓客選擇自己喜愛的飲品 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.迎賓服務 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.迎賓區 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.返回按鈕png複製 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.返回按鈕2 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.返回按鈕2png複製 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.重新播放 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(182);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(183);
}).prototype = p = new cjs.Sprite();



(lib.首頁w = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(184);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖1 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(185);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖3 = function() {
	this.spriteSheet = ss["chpca_atlas_"];
	this.gotoAndStop(186);
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


(lib.補間動畫73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.BackToChp3();
	this.instance.parent = this;
	this.instance.setTransform(-70.3,-70.3,0.275,0.275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-70.3,140.6,140.6);


(lib.補間動畫72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.BackToChp3();
	this.instance.parent = this;
	this.instance.setTransform(-70.3,-70.3,0.275,0.275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-70.3,140.6,140.6);


(lib.補間動畫68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.箭頭zzzzzzzz();
	this.instance.parent = this;
	this.instance.setTransform(-34.5,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-47.5,69,95);


(lib.補間動畫67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.箭頭zzzzzzzz();
	this.instance.parent = this;
	this.instance.setTransform(-34.5,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-47.5,69,95);


(lib.補間動畫66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.箭頭zzzzzzzz();
	this.instance.parent = this;
	this.instance.setTransform(-34.5,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-47.5,69,95);


(lib.補間動畫65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ARRR();
	this.instance.parent = this;
	this.instance.setTransform(-28,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-38.5,56,77);


(lib.補間動畫64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ARRR();
	this.instance.parent = this;
	this.instance.setTransform(-28,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-38.5,56,77);


(lib.補間動畫63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ARRR();
	this.instance.parent = this;
	this.instance.setTransform(-28,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-38.5,56,77);


(lib.補間動畫62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ARROWpng複製();
	this.instance.parent = this;
	this.instance.setTransform(-32.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-23.5,65,47);


(lib.補間動畫61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ARROWpng複製();
	this.instance.parent = this;
	this.instance.setTransform(-32.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-23.5,65,47);


(lib.補間動畫60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ARROWpng複製();
	this.instance.parent = this;
	this.instance.setTransform(-32.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-23.5,65,47);


(lib.補間動畫58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.箭頭();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-31,45,62);


(lib.補間動畫57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.箭頭();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-31,45,62);


(lib.補間動畫56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.箭頭();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-31,45,62);


(lib.補間動畫52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.給手();
	this.instance.parent = this;
	this.instance.setTransform(-465.5,-248);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465.5,-248,931,496);


(lib.補間動畫51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.給手();
	this.instance.parent = this;
	this.instance.setTransform(-465.5,-248);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465.5,-248,931,496);


(lib.補間動畫50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.接手();
	this.instance.parent = this;
	this.instance.setTransform(-219,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219,-72,438,144);


(lib.補間動畫49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.接手();
	this.instance.parent = this;
	this.instance.setTransform(-219,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219,-72,438,144);


(lib.補間動畫48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.womancr();
	this.instance.parent = this;
	this.instance.setTransform(-112,-221.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-221.5,224,443);


(lib.補間動畫47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.womancr();
	this.instance.parent = this;
	this.instance.setTransform(-112,-221.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-221.5,224,443);


(lib.補間動畫46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manpng複製2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-219.5);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-219.5,448,439);


(lib.補間動畫34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ghuewnifvcl();
	this.instance.parent = this;
	this.instance.setTransform(-77,-133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-133.5,154,329);


(lib.補間動畫33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.男人客();
	this.instance.parent = this;
	this.instance.setTransform(-21,-177);

	this.instance_1 = new lib.女人客();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-152,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-177,304,354);


(lib.補間動畫32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.男人客();
	this.instance.parent = this;
	this.instance.setTransform(-21,-177);

	this.instance_1 = new lib.女人客();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-152,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-177,304,354);


(lib.補間動畫31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.男人客();
	this.instance.parent = this;
	this.instance.setTransform(-21,-177);

	this.instance_1 = new lib.女人客();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-152,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-177,304,354);


(lib.補間動畫30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.男人客();
	this.instance.parent = this;
	this.instance.setTransform(-21,-177);

	this.instance_1 = new lib.女人客();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-152,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-177,304,354);


(lib.補間動畫26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.賣車的();
	this.instance.parent = this;
	this.instance.setTransform(-89.5,-187);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-187,179,374);


(lib.補間動畫25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.賣車的();
	this.instance.parent = this;
	this.instance.setTransform(-89.5,-187);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-187,179,374);


(lib.補間動畫22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg21();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-624,-291.5,1248,583);


(lib.補間動畫21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg21();
	this.instance.parent = this;
	this.instance.setTransform(-624,-291.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-624,-291.5,1248,583);


(lib.補間動畫20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(-82.5,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-172,165,344);


(lib.補間動畫19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(-82.5,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-172,165,344);


(lib.補間動畫18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(-82.5,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-172,165,344);


(lib.補間動畫15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.boy();
	this.instance.parent = this;
	this.instance.setTransform(-93.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.5,-200,187,400);


(lib.補間動畫14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.boy();
	this.instance.parent = this;
	this.instance.setTransform(-93.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.5,-200,187,400);


(lib.補間動畫9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bubu();
	this.instance.parent = this;
	this.instance.setTransform(-214,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214,-168,428,336);


(lib.補間動畫8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bubu();
	this.instance.parent = this;
	this.instance.setTransform(-214,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214,-168,428,336);


(lib.補間動畫4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.wuu();
	this.instance.parent = this;
	this.instance.setTransform(-51,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-18.5,102,37);


(lib.補間動畫3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.wuu();
	this.instance.parent = this;
	this.instance.setTransform(-51,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-18.5,102,37);


(lib.元件93複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.cs2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件93複製, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.cd1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件93, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.cs();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件92, new cjs.Rectangle(0,0,878,581), null);


(lib.元件90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.返回按鈕2png複製();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,57);


(lib.元件89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ccddddd();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件89, new cjs.Rectangle(0,0,1073,444), null);


(lib.元件87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.pointerpng複製();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件87, new cjs.Rectangle(0,0,225,268), null);


(lib.元件86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.frfewfew();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件86, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ccc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件85, new cjs.Rectangle(0,0,878,581), null);


(lib.元件84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.swsws();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件84, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件83複製5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._2q();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件83複製5, new cjs.Rectangle(0,0,571,321), null);


(lib.元件83複製4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._2h();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件83複製4, new cjs.Rectangle(0,0,571,321), null);


(lib.元件83複製3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._2f();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件83複製3, new cjs.Rectangle(0,0,571,321), null);


(lib.元件83複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._2b();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件83複製2, new cjs.Rectangle(0,0,571,321), null);


(lib.元件83複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.xxxxxxxxxxxx();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件83複製, new cjs.Rectangle(0,0,571,321), null);


(lib.元件83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.TV畫面();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件83, new cjs.Rectangle(0,0,571,321), null);


(lib.元件82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.frefef();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件82, new cjs.Rectangle(0,0,878,581), null);


(lib.元件80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Screenshot_20161211131053();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件80, new cjs.Rectangle(0,0,717,447), null);


(lib.元件79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.pointer();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件79, new cjs.Rectangle(0,0,225,268), null);


(lib.元件77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.矩形18拷貝();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


(lib.元件76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.s3按鈕();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,109);


(lib.元件75複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ttap();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件75複製2, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.a1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件75, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.返回按鈕2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,57);


(lib.元件72複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.h();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件72複製, new cjs.Rectangle(0,0,1073,444), null);


(lib.元件72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ssss();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件72, new cjs.Rectangle(0,0,1073,444), null);


(lib.元件71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.繼續播放();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件71, new cjs.Rectangle(0,0,187,295), null);


(lib.元件70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.暫停();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件70, new cjs.Rectangle(0,0,178,293), null);


(lib.元件69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.重新播放();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件69, new cjs.Rectangle(0,0,187,293), null);


(lib.元件68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.矩形25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件68, new cjs.Rectangle(0,0,219,327), null);


(lib.元件67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ww();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件67, new cjs.Rectangle(0,0,282,557), null);


(lib.元件66複製3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ccdws();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件66複製3, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件66複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.s3png複製();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件66複製2, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件66複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.s2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件66複製, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.s1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件66, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Screenshot_20161211131010();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件65, new cjs.Rectangle(0,0,715,446), null);


(lib.元件64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.返回按鈕png複製();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,57);


(lib.元件62複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.TALK2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件62複製, new cjs.Rectangle(0,0,1073,444), null);


(lib.元件62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.TALK1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件62, new cjs.Rectangle(0,0,1073,444), null);


(lib.元件60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.硬幣按鈕();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件60, new cjs.Rectangle(0,0,75,75), null);


(lib.元件59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.確認按鈕();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,40);


(lib.元件58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.紅茶2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件58, new cjs.Rectangle(0,0,49,16), null);


(lib.元件55複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.minus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.14,scaleY:1.14,x:-2,y:-2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,25);


(lib.元件55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.minus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.14,scaleY:1.14,x:-2,y:-2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,25);


(lib.元件54複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.plus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.2,scaleY:1.2,x:-3,y:-2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,25);


(lib.元件54複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.plus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.2,scaleY:1.2,x:-3,y:-2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,25);


(lib.元件54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.plus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.2,scaleY:1.2,x:-3,y:-2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,25);


(lib.元件53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.亮();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(0,0,279,35), null);


(lib.元件51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.紅茶按鈕();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,40);


(lib.元件48複製3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.sub3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件48複製3, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件48複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.sub2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件48複製2, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件48複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.對話2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件48複製, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.對話1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件48, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Screenshot_20161211130950();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件47, new cjs.Rectangle(0,0,714,446), null);


(lib.元件44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.生活館();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,202);


(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.品牌DNA();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165,202);


(lib.元件42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.車款展示();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167,203);


(lib.元件41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.迎賓服務();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165,201);


(lib.元件35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.生活館設施播放影片介紹Luxgen生活館內的各項設施();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件35, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.車款展示展現車型顏色外觀給賓客瀏覽();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.品牌DNA播放影片介紹Luxgen的品牌精神和理念();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件33, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.迎賓服務提供多種選項讓賓客選擇自己喜愛的飲品();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件32, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.矩形20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件31, new cjs.Rectangle(0,0,174,216), null);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.APP元件();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件30, new cjs.Rectangle(0,0,1248,583), null);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.名片();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件29, new cjs.Rectangle(0,0,414,229), null);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.familymancpng複製2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件28, new cjs.Rectangle(0,0,325,569), null);


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mancpng複製2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件27, new cjs.Rectangle(0,0,313,553), null);


(lib.元件25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.沙發();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件25, new cjs.Rectangle(0,0,1203,369), null);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.杯子();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件24, new cjs.Rectangle(0,0,251,29), null);


(lib.元件23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ghuinbrewjvk();
	this.instance.parent = this;
	this.instance.setTransform(99,0);

	this.instance_1 = new lib.feiouhwjncs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件23, new cjs.Rectangle(0,0,269,345), null);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提示4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.752,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.8,117.5);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提示3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


(lib.元件18複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manctalk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18複製2, new cjs.Rectangle(0,0,314,553), null);


(lib.元件18複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mancr();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18複製, new cjs.Rectangle(0,0,332,553), null);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(0,0,313,553), null);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.familymanc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件17, new cjs.Rectangle(0,0,325,569), null);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._02car();
	this.instance.parent = this;
	this.instance.setTransform(630,0);

	this.instance_1 = new lib.分隔線();
	this.instance_1.parent = this;
	this.instance_1.setTransform(620,0);

	this.instance_2 = new lib.門();
	this.instance_2.parent = this;

	this.instance_3 = new lib.wtf();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(0,0,1253,583), null);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.矩形4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(0,0,324,407), null);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.矩形4拷貝2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(0,0,324,407), null);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提示2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提示1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,520);


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


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.課程地圖_0000s_0000s_0000_馬路();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,1248,583), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U31BG();
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
	this.instance = new lib._31提示();
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
	this.instance = new lib.迎賓區();
	this.instance.parent = this;
	this.instance.setTransform(-160,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-24,320,50);


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
	this.instance = new lib._15658833_1262594267130371_554229512_o();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan2, new cjs.Rectangle(0,1,1314,740), null);


(lib.nissan1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._15682537_1262594263797038_698513357_o();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan1, new cjs.Rectangle(0,0,1314,740), null);


(lib.元件94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// 圖層 1
	this.instance = new lib.補間動畫72("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(70.3,70.3);
	this.instance.alpha = 0;

	this.instance_1 = new lib.補間動畫73("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(70.3,70.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:1},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140.6,140.6);


(lib.元件81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫66("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(34.5,47.5);

	this.instance_1 = new lib.補間動畫67("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.5,20.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫68("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(34.5,47.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:20.5},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({_off:true,y:47.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,95);


(lib.元件78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_187 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(187).call(this.frame_187).wait(1));

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Egz4ApgMAAAhS/MBnxAAAMAAABS/g");
	var mask_graphics_187 = new cjs.Graphics().p("Egz4ApgMAAAhS/MBnxAAAMAAABS/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:224.8,y:129.7}).wait(187).to({graphics:mask_graphics_187,x:224.8,y:129.7}).wait(1));

	// 圖層 1
	this.instance = new lib.元件79();
	this.instance.parent = this;
	this.instance.setTransform(112.5,217.7,1,1,0,0,0,112.5,134);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:63.3},16).to({y:-122.5,alpha:0},13).wait(18).to({y:217.7,alpha:1},0).to({y:63.3},16).to({y:-122.5,alpha:0},13).wait(18).to({y:217.7,alpha:1},0).to({y:63.3},16).to({y:-122.5,alpha:0},13).wait(18).to({y:217.7,alpha:1},0).to({y:63.3},16).to({y:-122.5,alpha:0},13).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,83.7,225,268);


(lib.元件61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫63("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(28,38.5);

	this.instance_1 = new lib.補間動畫64("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(28,13.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫65("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(28,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:13.5},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({_off:true,y:38.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,77);


(lib.元件57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件58();
	this.instance.parent = this;
	this.instance.setTransform(24.5,8,1,1,0,0,0,24.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件57, new cjs.Rectangle(0,0,49,16), null);


(lib.元件56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫60("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.5,23.5);

	this.instance_1 = new lib.補間動畫61("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(45.4,23.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫62("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.5,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:45.4},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({_off:true,x:32.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,47);


(lib.元件52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// 圖層 1
	this.instance = new lib.元件53();
	this.instance.parent = this;
	this.instance.setTransform(137.7,-11.5,1,1,0,0,0,139.5,17.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-29,279,35);


(lib.元件50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫56("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(22.5,19);

	this.instance_1 = new lib.補間動畫57("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.5,31);
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫58("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(22.5,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:31},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({_off:true,y:19},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-12,45,62);


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件25();
	this.instance.parent = this;
	this.instance.setTransform(601.5,398.5,1,1,0,0,0,601.5,184.5);
	this.instance.alpha = 0.828;

	this.instance_1 = new lib.分隔線png複製();
	this.instance_1.parent = this;
	this.instance_1.setTransform(573,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件26, new cjs.Rectangle(0,0,1203,583), null);


(lib.元件20複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件21();
	this.instance.parent = this;
	this.instance.setTransform(83.2,58.8,1,1,0,0,0,56.4,58.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({alpha:0.039},0).wait(14).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.8,0,112.8,117.5);


(lib.元件20複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件21();
	this.instance.parent = this;
	this.instance.setTransform(56.4,58.8,1,1,0,0,0,56.4,58.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({alpha:0.02},0).wait(14).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.8,117.5);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件21();
	this.instance.parent = this;
	this.instance.setTransform(56.4,58.8,1,1,0,0,0,56.4,58.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({alpha:0.02},0).wait(14).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.8,117.5);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件7();
	this.instance.parent = this;
	this.instance.setTransform(45,45.5,1,1,0,0,0,45,45.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,105,103), null);


(lib.元件5複製5 = function(mode,startPosition,loop) {
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


(lib.元件5複製3 = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5複製2 = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5複製 = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1).to({y:78.7},0).wait(1).to({y:93.2},0).wait(1).to({scaleX:1.27,scaleY:0.63,x:52.6,y:108},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:87},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:52.4},0).wait(1).to({y:38.7},0).wait(1).to({y:27.6},0).wait(1).to({y:18.9},0).wait(1).to({y:12.7},0).wait(1).to({y:9},0).wait(1).to({y:7.7},0).wait(1).to({y:9},0).wait(1).to({y:12.7},0).wait(1).to({y:18.9},0).wait(1).to({y:27.6},0).wait(1).to({y:38.7},0).wait(1).to({y:52.4},0).wait(1).to({y:68.5},0).wait(1).to({y:87.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:52.6,y:108},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:96.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:87.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.5,y:80.4},0).wait(1).to({y:75.3},0).wait(1).to({y:72.2},0).wait(1).to({y:71.2},0).wait(1).to({y:72.2},0).wait(1).to({y:75.3},0).wait(1).to({y:80.4},0).wait(1).to({y:87.6},0).wait(1).to({y:96.9},0).wait(1).to({regY:102.7,scaleX:1.1,scaleY:0.8,x:52.6,y:108.1},0).wait(1).to({regY:102.6,scaleX:1,scaleY:1,x:52.5,y:102.2},0).wait(1).to({y:98},0).wait(1).to({y:95.4},0).wait(1).to({y:94.6},0).wait(1).to({y:95.4},0).wait(1).to({y:98},0).wait(1).to({y:102.2},0).wait(1).to({y:108.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-46.7,90,91);


(lib.元件5 = function(mode,startPosition,loop) {
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


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51,18.5);

	this.instance_1 = new lib.補間動畫4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(27,18.5);
	this.instance_1.alpha = 0.211;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},16).to({state:[]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:27,alpha:0.211},16).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,37);


(lib.az = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件94();
	this.instance.parent = this;
	this.instance.setTransform(70.3,70.3,1,1,0,0,0,70.3,70.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140.6,140.6);


(lib.補間動畫59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件52();
	this.instance.parent = this;
	this.instance.setTransform(2,29.1,1,1,0,0,0,139.5,17.5);

	this.instance_1 = new lib.點陣圖1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-142.5,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.5,-20,285,40);


(lib.補間動畫7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件4();
	this.instance.parent = this;
	this.instance.setTransform(-121,67.5,1,1,0,0,0,51,18.5);

	this.instance_1 = new lib.car();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51,-86);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172,-86,344,172);


(lib.補間動畫6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件4();
	this.instance.parent = this;
	this.instance.setTransform(-121.2,67.5,1,1,0,0,0,51,18.5);

	this.instance_1 = new lib.car();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50.7,-86);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.2,-86,344.5,172);


(lib.補間動畫5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件4();
	this.instance.parent = this;
	this.instance.setTransform(-121.1,67.5,1,1,0,0,0,51,18.5);

	this.instance_1 = new lib.car();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50.8,-86);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.1,-86,344.3,172);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		playSound("_31");
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
	this.frame_231 = function() {
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
			this.gotoAndPlay(232);
		}
	}
	this.frame_263 = function() {
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
		
		this.goooooo.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_55.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_55()
		{
			this.gotoAndPlay(264);
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
			this.gotoAndStop(4729);
		}
	}
	this.frame_421 = function() {
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
		
		this.star1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(424);
		}
	}
	this.frame_434 = function() {
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
		
		this.tip1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			this.gotoAndPlay(435);
		}
	}
	this.frame_483 = function() {
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
		
		this.star2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_9.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_9()
		{
			this.gotoAndPlay(484);
		}
	}
	this.frame_494 = function() {
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
		
		this.tip2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			this.gotoAndPlay(495);
		}
	}
	this.frame_586 = function() {
		playSound("_312");
	}
	this.frame_610 = function() {
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
		
		this.arrow1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_12.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_12()
		{
			this.gotoAndPlay(614);
		}
	}
	this.frame_614 = function() {
		playSound("_313");
	}
	this.frame_639 = function() {
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
		
		this.arrow2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_13.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_13()
		{
			this.gotoAndPlay(644);
		}
	}
	this.frame_645 = function() {
		playSound("_314");
	}
	this.frame_664 = function() {
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
		
		this.arrow3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_16.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_16()
		{
			this.gotoAndPlay(669);
		}
	}
	this.frame_670 = function() {
		playSound("_315");
	}
	this.frame_680 = function() {
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
		
		this.star3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay(681);
		}
	}
	this.frame_693 = function() {
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
		
		this.TIP3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_15.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_15()
		{
			this.gotoAndPlay(694);
		}
	}
	this.frame_706 = function() {
		playSound("_316");
	}
	this.frame_708 = function() {
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
		
		this.star4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_18.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_18()
		{
			this.gotoAndPlay(709);
		}
	}
	this.frame_723 = function() {
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
		
		this.tip4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_17.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_17()
		{
			this.gotoAndPlay(724);
		}
	}
	this.frame_890 = function() {
		playSound("_317");
	}
	this.frame_1049 = function() {
		playSound("_318");
	}
	this.frame_2261 = function() {
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
		
		this.yingbinfuwu.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_22.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_22()
		{
			this.gotoAndPlay(2262);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.pingpaidna.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_35.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_35()
		{
			this.gotoAndPlay(3029);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.chekuanzhanshi.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_39.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_39()
		{
			this.gotoAndPlay(3539);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.shenghuoguansheshi.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_47.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_47()
		{
			this.gotoAndPlay(4225);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.ezgg.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_51.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_51()
		{
			this.gotoAndPlay(272);
		}
	}
	this.frame_2303 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.skipggggggggg.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_25.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_25()
		{
			this.gotoAndPlay(2462);
		}
	}
	this.frame_2500 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.skippppppp.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_26.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_26()
		{
			this.gotoAndPlay(2576);
		}
	}
	this.frame_2615 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.redtea.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_23.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_23()
		{
			this.gotoAndPlay(2620);
		}
	}
	this.frame_2619 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_2630 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.adddddddddc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			this.gotoAndStop(2764);
		}
	}
	this.frame_2763 = function() {
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
	}
	this.frame_2764 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.pppppppap.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(2769);
		}
		
		
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.rbeiopop.addEventListener("click", fl_ClickToGoToAndStopAtFrame_14.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_14()
		{
			this.gotoAndStop(2763);
		}
	}
	this.frame_2769 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.huhuuuuuu.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(2764);
		}
		
		
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.RT.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_30.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_30()
		{
			this.gotoAndPlay(2773);
		}
	}
	this.frame_2789 = function() {
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
		
		this.ASDQWE.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_31.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_31()
		{
			this.gotoAndPlay(2790);
		}
	}
	this.frame_2824 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.gggggggggggg.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_32.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_32()
		{
			this.gotoAndPlay(2952);
		}
	}
	this.frame_2977 = function() {
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
		
		
		this.bala.addEventListener("click", fl_ClickToGoToAndStopAtFrame_16.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_16()
		{
			this.gotoAndStop(2261);
		}
	}
	this.frame_3069 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.qq.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_52.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_52()
		{
			this.gotoAndPlay(3199);
		}
	}
	this.frame_3218 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.jj.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_53.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_53()
		{
			this.gotoAndPlay(3282);
		}
	}
	this.frame_3538 = function() {
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
		
		
		this.uuuy.addEventListener("click", fl_ClickToGoToAndStopAtFrame_25.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_25()
		{
			this.gotoAndStop(2261);
		}
	}
	this.frame_3576 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.gregewfde.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_42.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_42()
		{
			this.gotoAndPlay(3702);
		}
	}
	this.frame_3727 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.kjhybrtvfdw.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_43.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_43()
		{
			this.gotoAndPlay(3735);
		}
	}
	this.frame_3734 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_3752 = function() {
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
		
		this.jtrfgsehgrethrtsd.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_44.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_44()
		{
			this.gotoAndPlay(3759);
		}
	}
	this.frame_3769 = function() {
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
		
		this.hregwetgerghregewgw.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_45.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_45()
		{
			this.gotoAndPlay(3770);
		}
	}
	this.frame_3935 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.vfvfvfvfv.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_54.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_54()
		{
			this.gotoAndPlay(4149);
		}
	}
	this.frame_4224 = function() {
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
		
		
		this.f.addEventListener("click", fl_ClickToGoToAndStopAtFrame_20.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_20()
		{
			this.gotoAndStop(2261);
		}
	}
	this.frame_4261 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.jh.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_49.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_49()
		{
			this.gotoAndPlay(4400);
		}
	}
	this.frame_4427 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.oi.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_50.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_50()
		{
			this.gotoAndPlay(4494);
		}
	}
	this.frame_4725 = function() {
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
		
		
		this.m.addEventListener("click", fl_ClickToGoToAndStopAtFrame_23.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_23()
		{
			this.gotoAndStop(2261);
		}
		
		
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.m.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("chpc.html", "_self");
		}
	}
	this.frame_4729 = function() {
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.e04.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_56.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_56()
		{
			this.gotoAndPlay(275);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(41).call(this.frame_54).wait(177).call(this.frame_231).wait(32).call(this.frame_263).wait(158).call(this.frame_421).wait(13).call(this.frame_434).wait(49).call(this.frame_483).wait(11).call(this.frame_494).wait(92).call(this.frame_586).wait(24).call(this.frame_610).wait(4).call(this.frame_614).wait(25).call(this.frame_639).wait(6).call(this.frame_645).wait(19).call(this.frame_664).wait(6).call(this.frame_670).wait(10).call(this.frame_680).wait(13).call(this.frame_693).wait(13).call(this.frame_706).wait(2).call(this.frame_708).wait(15).call(this.frame_723).wait(167).call(this.frame_890).wait(159).call(this.frame_1049).wait(1212).call(this.frame_2261).wait(42).call(this.frame_2303).wait(197).call(this.frame_2500).wait(115).call(this.frame_2615).wait(4).call(this.frame_2619).wait(11).call(this.frame_2630).wait(133).call(this.frame_2763).wait(1).call(this.frame_2764).wait(5).call(this.frame_2769).wait(20).call(this.frame_2789).wait(35).call(this.frame_2824).wait(153).call(this.frame_2977).wait(92).call(this.frame_3069).wait(149).call(this.frame_3218).wait(320).call(this.frame_3538).wait(38).call(this.frame_3576).wait(151).call(this.frame_3727).wait(7).call(this.frame_3734).wait(18).call(this.frame_3752).wait(17).call(this.frame_3769).wait(166).call(this.frame_3935).wait(289).call(this.frame_4224).wait(37).call(this.frame_4261).wait(166).call(this.frame_4427).wait(298).call(this.frame_4725).wait(4).call(this.frame_4729).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},54).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},177).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},32).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},11).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},147).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},13).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},49).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},11).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},116).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},29).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},25).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},16).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},13).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},15).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},15).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1538).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},41).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},197).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},115).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},4).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},10).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},22).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},111).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},5).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},20).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},35).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},153).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},92).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},149).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},320).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},38).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},151).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},7).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},18).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},17).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},166).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},289).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},37).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},166).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},298).to({state:[]},1).wait(4));

	// 圖層 40
	this.m = new lib.補間動畫73();
	this.m.parent = this;
	this.m.setTransform(1435.3,792,1.462,1.462);
	this.m._off = true;
	new cjs.ButtonHelper(this.m, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.m).wait(4725).to({_off:false},0).to({_off:true},1).wait(4));

	// 圖層 27
	this.m_1 = new lib.補間動畫73();
	this.m_1.parent = this;
	this.m_1.setTransform(1435.3,792,1.462,1.462);
	this.m_1.alpha = 0;
	this.m_1._off = true;
	new cjs.ButtonHelper(this.m_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.m_1).wait(4708).to({_off:false},0).to({alpha:1},16).to({_off:true},1).wait(5));

	// 圖層 26
	this.instance_2 = new lib.元件72複製();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960.9,610.9,1.462,1.462,0,0,0,536.5,222);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4708).to({_off:false},0).to({alpha:1},17).to({_off:true},1).wait(4));

	// 圖層 25
	this.instance_3 = new lib.元件71();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1558.8,471.2,1.462,1.462,0,0,0,93.5,147.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4620).to({_off:false},0).to({alpha:1},9).wait(9).to({alpha:0},10).to({_off:true},78).wait(4));

	// 圖層 24
	this.instance_4 = new lib.元件70();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1558,475.7,1.462,1.462,0,0,0,89,146.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4591).to({_off:false},0).to({alpha:1},7).wait(10).to({alpha:0},9).to({_off:true},109).wait(4));

	// 圖層 23
	this.instance_5 = new lib.元件69();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1555.8,475.7,1.462,1.462,0,0,0,93.5,146.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4570).to({_off:false},0).to({alpha:1},7).wait(8).to({alpha:0},5).to({_off:true},136).wait(4));

	// 圖層 22
	this.instance_6 = new lib.元件68();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1556,475.7,1.462,1.462,0,0,0,109.6,163.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4570).to({_off:false},0).to({alpha:1},7).wait(8).to({alpha:0},5).wait(1).to({alpha:1},7).wait(10).to({alpha:0},9).wait(3).to({alpha:1},9).wait(9).to({alpha:0},10).to({_off:true},34).wait(48));

	// 圖層 19
	this.jh = new lib.元件93();
	this.jh.parent = this;
	this.jh.setTransform(991.7,878.4,1.462,1.462,0,0,0,526.5,96);
	this.jh.alpha = 0;
	this.jh._off = true;

	this.oi = new lib.元件93複製();
	this.oi.parent = this;
	this.oi.setTransform(991.7,878.4,1.462,1.462,0,0,0,526.5,96);
	this.oi.alpha = 0;
	this.oi._off = true;

	this.instance_7 = new lib.元件66複製3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(968.3,884.2,1.462,1.462,0,0,0,526.5,96);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.jh).wait(4248).to({_off:false},0).to({alpha:1},13).wait(139).to({alpha:0},11).to({_off:true},6).wait(313));
	this.timeline.addTween(cjs.Tween.get(this.oi).wait(4417).to({_off:false},0).to({alpha:1},10).wait(67).to({alpha:0},7).to({_off:true},20).wait(209));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4521).to({_off:false},0).to({alpha:1},13).wait(165).to({alpha:0},7).to({_off:true},20).wait(4));

	// 女
	this.instance_8 = new lib.元件67();
	this.instance_8.parent = this;
	this.instance_8.setTransform(304,622,1.462,1.462,0,0,0,141,278.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4507).to({_off:false},0).to({alpha:1},11).to({_off:true},208).wait(4));

	// 圖層 17
	this.lkk = new lib.元件92();
	this.lkk.parent = this;
	this.lkk.setTransform(1426.2,618.8,1.462,1.462,0,0,0,438.8,290.4);
	this.lkk.alpha = 0;
	this.lkk._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lkk).wait(4225).to({_off:false},0).wait(1).to({x:1370.2,alpha:0.039},0).wait(1).to({x:1319.1,alpha:0.078},0).wait(1).to({regX:438.9,x:1272.7,alpha:0.129},0).wait(1).to({regX:438.8,x:1230.5,alpha:0.172},0).wait(1).to({x:1192.7,alpha:0.211},0).wait(1).to({regX:438.9,x:1158.8,alpha:0.262},0).wait(1).to({regX:438.8,x:1128.6,alpha:0.301},0).wait(1).to({x:1102,alpha:0.34},0).wait(1).to({x:1078.7,alpha:0.391},0).wait(1).to({x:1058.6,alpha:0.43},0).wait(1).to({x:1041.3,alpha:0.469},0).wait(1).to({x:1026.6,alpha:0.52},0).wait(1).to({x:1014.4,alpha:0.559},0).wait(1).to({x:1004.5,alpha:0.602},0).wait(1).to({x:996.4,alpha:0.648},0).wait(1).to({x:990.2,alpha:0.691},0).wait(1).to({regX:438.9,x:985.6,alpha:0.73},0).wait(1).to({regX:438.8,x:982.2,alpha:0.781},0).wait(1).to({x:979.9,alpha:0.82},0).wait(1).to({x:978.5,alpha:0.859},0).wait(1).to({x:977.9,alpha:0.91},0).wait(1).to({x:977.6,alpha:0.949},0).wait(1).to({x:977.5,alpha:1},0).wait(300).to({_off:true},178).wait(4));

	// 圖層 16
	this.f = new lib.元件90();
	this.f.parent = this;
	this.f.setTransform(1580.7,858.7,1.462,1.462,0,0,0,86.5,28.5);
	this.f.alpha = 0;
	this.f._off = true;
	new cjs.ButtonHelper(this.f, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.f).wait(4214).to({_off:false},0).to({alpha:1},10).to({_off:true},1).wait(505));

	// 圖層 13
	this.vfvfvf = new lib.元件89();
	this.vfvfvf.parent = this;
	this.vfvfvf.setTransform(960.9,618.2,1.462,1.462,0,0,0,536.5,222);
	this.vfvfvf.alpha = 0;
	this.vfvfvf._off = true;

	this.timeline.addTween(cjs.Tween.get(this.vfvfvf).wait(4214).to({_off:false},0).to({alpha:1},10).to({_off:true},1).wait(505));

	// 圖層 2
	this.instance_9 = new lib.元件83();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1417,505,1.462,1.462,0,0,0,285.5,160.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.元件83複製();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1417,505,1.462,1.462,0,0,0,285.5,160.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.元件83複製2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1417,505,1.462,1.462,0,0,0,285.5,160.5);

	this.instance_12 = new lib.元件83複製3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1417,505,1.462,1.462,0,0,0,285.5,160.5);

	this.instance_13 = new lib.元件83複製4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1417,505,1.462,1.462,0,0,0,285.5,160.5);

	this.instance_14 = new lib.元件83複製5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(1417,505,1.462,1.462,0,0,0,285.5,160.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},3807).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_9}]},93).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_10}]},22).to({state:[{t:this.instance_11}]},220).to({state:[{t:this.instance_12}]},6).to({state:[{t:this.instance_13}]},6).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_10}]},8).to({state:[]},40).wait(505));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3807).to({_off:false},0).to({alpha:1},7).wait(93).to({alpha:0},5).to({_off:true},4).wait(814));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3916).to({_off:false},0).to({alpha:1},22).to({_off:true},220).wait(27).to({_off:false},0).to({_off:true},40).wait(505));

	// 圖層 9
	this.instance_15 = new lib.元件87();
	this.instance_15.parent = this;
	this.instance_15.setTransform(862.3,688.3,1.462,1.462,0,0,0,112.5,134.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4157).to({_off:false},0).to({x:959.5,y:749.9},2,cjs.Ease.get(-1)).to({regY:134,x:1019.4,y:834.6},3).to({regY:134.1,x:968.9,y:945.8},3).to({regY:134,x:862.3,y:975.5},4).to({regY:134.1,x:734.9,y:959.4},4).to({regY:134,x:690.6,y:849.2},4).to({x:732.6,y:746.1},4).to({regY:134.1,x:862.3,y:688.3},4).wait(4).to({x:1091.2,y:763.1},7).to({regY:134,y:817},7).to({x:1110.2,y:754.2},5).to({_off:true},17).wait(505));

	// 圖層 10
	this.instance_16 = new lib.點陣圖3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(535,497,1.462,1.462);

	this.instance_17 = new lib._00();
	this.instance_17.parent = this;
	this.instance_17.setTransform(535,497,1.462,1.462);

	this.instance_18 = new lib._0();
	this.instance_18.parent = this;
	this.instance_18.setTransform(535,497,1.462,1.462);

	this.instance_19 = new lib._1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(535,497,1.462,1.462);

	this.instance_20 = new lib._2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(535,497,1.462,1.462);

	this.instance_21 = new lib._3();
	this.instance_21.parent = this;
	this.instance_21.setTransform(535,497,1.462,1.462);

	this.instance_22 = new lib._4();
	this.instance_22.parent = this;
	this.instance_22.setTransform(535,497,1.462,1.462);

	this.instance_23 = new lib._5();
	this.instance_23.parent = this;
	this.instance_23.setTransform(535,497,1.462,1.462);

	this.instance_24 = new lib._6();
	this.instance_24.parent = this;
	this.instance_24.setTransform(535,497,1.462,1.462);

	this.instance_25 = new lib._7();
	this.instance_25.parent = this;
	this.instance_25.setTransform(535,497,1.462,1.462);

	this.instance_26 = new lib._8();
	this.instance_26.parent = this;
	this.instance_26.setTransform(535,497,1.462,1.462);

	this.instance_27 = new lib._9();
	this.instance_27.parent = this;
	this.instance_27.setTransform(535,497,1.462,1.462);

	this.instance_28 = new lib._10();
	this.instance_28.parent = this;
	this.instance_28.setTransform(535,497,1.462,1.462);

	this.instance_29 = new lib._11();
	this.instance_29.parent = this;
	this.instance_29.setTransform(535,497,1.462,1.462);

	this.instance_30 = new lib._12();
	this.instance_30.parent = this;
	this.instance_30.setTransform(535,497,1.462,1.462);

	this.instance_31 = new lib._13();
	this.instance_31.parent = this;
	this.instance_31.setTransform(535,497,1.462,1.462);

	this.instance_32 = new lib._14();
	this.instance_32.parent = this;
	this.instance_32.setTransform(535,497,1.462,1.462);

	this.instance_33 = new lib._15();
	this.instance_33.parent = this;
	this.instance_33.setTransform(535,497,1.462,1.462);

	this.instance_34 = new lib._16();
	this.instance_34.parent = this;
	this.instance_34.setTransform(535,497,1.462,1.462);

	this.instance_35 = new lib._17();
	this.instance_35.parent = this;
	this.instance_35.setTransform(535,497,1.462,1.462);

	this.instance_36 = new lib._18();
	this.instance_36.parent = this;
	this.instance_36.setTransform(535,497,1.462,1.462);

	this.instance_37 = new lib._19();
	this.instance_37.parent = this;
	this.instance_37.setTransform(535,497,1.462,1.462);

	this.instance_38 = new lib._20();
	this.instance_38.parent = this;
	this.instance_38.setTransform(535,497,1.462,1.462);

	this.instance_39 = new lib._21();
	this.instance_39.parent = this;
	this.instance_39.setTransform(535,497,1.462,1.462);

	this.instance_40 = new lib._22();
	this.instance_40.parent = this;
	this.instance_40.setTransform(535,497,1.462,1.462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},4157).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_16}]},1).to({state:[]},43).wait(505));

	// 圖層 8
	this.vfvfvfvfv = new lib.元件86();
	this.vfvfvfvfv.parent = this;
	this.vfvfvfvfv.setTransform(959.5,879.9,1.462,1.462,0,0,0,526.5,96);
	this.vfvfvfvfv.alpha = 0;
	this.vfvfvfvfv._off = true;

	this.timeline.addTween(cjs.Tween.get(this.vfvfvfvfv).wait(3929).to({_off:false},0).to({alpha:1},6).wait(214).to({alpha:0},7).to({_off:true},69).wait(505));

	// 圖層 6
	this.instance_41 = new lib.元件85();
	this.instance_41.parent = this;
	this.instance_41.setTransform(694.2,620.6,1.462,1.462,0,0,0,439,290.6);
	this.instance_41.alpha = 0;
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(3916).to({_off:false},0).to({alpha:1},22).to({_off:true},287).wait(505));

	// 圖層 4
	this.instance_42 = new lib.元件84();
	this.instance_42.parent = this;
	this.instance_42.setTransform(959.5,890.1,1.462,1.462,0,0,0,526.5,96);
	this.instance_42.alpha = 0;
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(3807).to({_off:false},0).to({alpha:1},7).wait(93).to({alpha:0},5).to({_off:true},313).wait(505));

	// 圖層 56
	this.instance_43 = new lib.元件82();
	this.instance_43.parent = this;
	this.instance_43.setTransform(961.7,620.5,1.462,1.462,0,0,0,439,290.5);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(3780).to({_off:false},0).wait(9).to({x:698.5},16).wait(102).to({alpha:0},5).to({_off:true},1).wait(817));

	// hand
	this.instance_44 = new lib.元件78();
	this.instance_44.parent = this;
	this.instance_44.setTransform(842.5,775.7,1.462,1.462,0,0,0,112.5,134.1);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(3769).to({_off:false},0).to({_off:true},1).wait(960));

	// tip
	this.hregwetgerghregewgw = new lib.元件77();
	this.hregwetgerghregewgw.parent = this;
	this.hregwetgerghregewgw.setTransform(961.9,621.9,0.349,0.349,0,0,0,473.1,257.1);
	this.hregwetgerghregewgw._off = true;
	new cjs.ButtonHelper(this.hregwetgerghregewgw, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.hregwetgerghregewgw).wait(3759).to({_off:false},0).to({regX:472.9,scaleX:1.46,scaleY:1.46,x:961.7,y:622},10).to({regX:472.4,regY:258.6,scaleX:0.03,scaleY:0.03,y:621.9},10).to({_off:true},1).wait(950));

	// 星光美少女
	this.jtrfgsehgrethrtsd = new lib.元件5複製5();
	this.jtrfgsehgrethrtsd.parent = this;
	this.jtrfgsehgrethrtsd.setTransform(561.6,176.9,1.462,1.462,0,0,0,52.5,-0.3);
	this.jtrfgsehgrethrtsd._off = true;

	this.timeline.addTween(cjs.Tween.get(this.jtrfgsehgrethrtsd).wait(3752).to({_off:false},0).to({_off:true},1).wait(977));

	// 箭頭老師
	this.instance_45 = new lib.元件81();
	this.instance_45.parent = this;
	this.instance_45.setTransform(559,576.9,1.462,1.462,0,0,0,34.5,47.5);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(3727).to({_off:false},0).wait(7).to({_off:true},1).wait(995));

	// s3按鈕
	this.kjhybrtvfdw = new lib.元件76();
	this.kjhybrtvfdw.parent = this;
	this.kjhybrtvfdw.setTransform(441.1,299.7,1.462,1.462);
	this.kjhybrtvfdw._off = true;
	new cjs.ButtonHelper(this.kjhybrtvfdw, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.kjhybrtvfdw).wait(3727).to({_off:false},0).wait(7).to({_off:true},1).wait(995));

	// 字幕
	this.gregewfde = new lib.元件75();
	this.gregewfde.parent = this;
	this.gregewfde.setTransform(962.4,864.4,1.462,1.462,0,0,0,526.5,96);
	this.gregewfde.alpha = 0;
	this.gregewfde._off = true;

	this.instance_46 = new lib.元件75複製2();
	this.instance_46.parent = this;
	this.instance_46.setTransform(962.4,864.4,1.462,1.462,0,0,0,526.5,96);
	this.instance_46.alpha = 0;
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gregewfde).wait(3566).to({_off:false},0).to({alpha:1},6).wait(139).to({alpha:0},7).to({_off:true},3).wait(1009));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(3721).to({_off:false},0).to({alpha:1},13).to({alpha:0},11).to({_off:true},1).wait(984));

	// 車款背景
	this.eeujbhvf = new lib.元件80();
	this.eeujbhvf.parent = this;
	this.eeujbhvf.setTransform(1232.6,626.3,1.462,1.462,0,0,0,358.3,223.5);
	this.eeujbhvf.alpha = 0;
	this.eeujbhvf._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eeujbhvf).wait(3539).to({_off:false},0).wait(1).to({x:1199.2,alpha:0.039},0).wait(1).to({x:1168.6,alpha:0.078},0).wait(1).to({x:1140.9,alpha:0.129},0).wait(1).to({x:1115.8,alpha:0.172},0).wait(1).to({regX:358.4,x:1093.3,alpha:0.211},0).wait(1).to({regX:358.3,x:1073,alpha:0.262},0).wait(1).to({x:1054.9,alpha:0.301},0).wait(1).to({x:1039.1,alpha:0.34},0).wait(1).to({x:1025.2,alpha:0.391},0).wait(1).to({x:1013.1,alpha:0.43},0).wait(1).to({x:1002.8,alpha:0.469},0).wait(1).to({x:994.1,alpha:0.52},0).wait(1).to({x:986.8,alpha:0.559},0).wait(1).to({x:980.8,alpha:0.602},0).wait(1).to({x:976.1,alpha:0.648},0).wait(1).to({regX:358.4,x:972.5,alpha:0.691},0).wait(1).to({regX:358.3,x:969.6,alpha:0.73},0).wait(1).to({x:967.5,alpha:0.781},0).wait(1).to({x:966.2,alpha:0.82},0).wait(1).to({x:965.4,alpha:0.859},0).wait(1).to({x:965,alpha:0.91},0).wait(1).to({x:964.8,alpha:0.949},0).wait(1).to({regX:358.4,x:964.9,alpha:1},0).to({_off:true},218).wait(950));

	// 圖層 48
	this.uuuy = new lib.元件73();
	this.uuuy.parent = this;
	this.uuuy.setTransform(1589.4,845.5,1.462,1.462,0,0,0,86.5,28.5);
	this.uuuy.alpha = 0;
	this.uuuy._off = true;
	new cjs.ButtonHelper(this.uuuy, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.uuuy).wait(3526).to({_off:false},0).to({alpha:1},11).to({_off:true},2).wait(1191));

	// 圖層 47
	this.instance_47 = new lib.元件72();
	this.instance_47.parent = this;
	this.instance_47.setTransform(960.9,610.9,1.462,1.462,0,0,0,536.5,222);
	this.instance_47.alpha = 0;
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(3526).to({_off:false},0).to({alpha:1},11).to({_off:true},2).wait(1191));

	// 圖層 46
	this.instance_48 = new lib.元件71();
	this.instance_48.parent = this;
	this.instance_48.setTransform(1558.8,471.2,1.462,1.462,0,0,0,93.5,147.5);
	this.instance_48.alpha = 0;
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(3425).to({_off:false},0).to({alpha:1},8).wait(67).to({alpha:0},20).to({_off:true},19).wait(1191));

	// 圖層 45
	this.instance_49 = new lib.元件70();
	this.instance_49.parent = this;
	this.instance_49.setTransform(1558,475.7,1.462,1.462,0,0,0,89,146.5);
	this.instance_49.alpha = 0;
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(3400).to({_off:false},0).to({alpha:1},10).wait(90).to({alpha:0},3).to({_off:true},36).wait(1191));

	// 圖層 44
	this.instance_50 = new lib.元件69();
	this.instance_50.parent = this;
	this.instance_50.setTransform(1555.8,475.7,1.462,1.462,0,0,0,93.5,146.5);
	this.instance_50.alpha = 0;
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(3375).to({_off:false},0).to({alpha:1},13).wait(112).to({alpha:0},3).to({_off:true},36).wait(1191));

	// 圖層 43
	this.instance_51 = new lib.元件68();
	this.instance_51.parent = this;
	this.instance_51.setTransform(1556,475.7,1.462,1.462,0,0,0,109.6,163.5);
	this.instance_51.alpha = 0;
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(3375).to({_off:false},0).to({alpha:1},13).wait(112).to({alpha:0},3).to({_off:true},36).wait(1191));

	// 對話框
	this.qq = new lib.元件66();
	this.qq.parent = this;
	this.qq.setTransform(968.3,884.2,1.462,1.462,0,0,0,526.5,96);
	this.qq.alpha = 0;
	this.qq._off = true;

	this.jj = new lib.元件66複製();
	this.jj.parent = this;
	this.jj.setTransform(968.3,884.2,1.462,1.462,0,0,0,526.5,96);
	this.jj.alpha = 0;
	this.jj._off = true;

	this.instance_52 = new lib.元件66複製2();
	this.instance_52.parent = this;
	this.instance_52.setTransform(968.3,884.2,1.462,1.462,0,0,0,526.5,96);
	this.instance_52.alpha = 0;
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.qq).wait(3053).to({_off:false},0).to({alpha:1},16).wait(130).to({alpha:0},7).to({_off:true},4).wait(1520));
	this.timeline.addTween(cjs.Tween.get(this.jj).wait(3210).to({_off:false},0).to({alpha:1},8).wait(64).to({alpha:0},13).wait(4).to({_off:true},15).wait(1416));
	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(3314).to({_off:false},0).to({alpha:1},13).wait(173).to({alpha:0},20).to({_off:true},19).wait(1191));

	// 女
	this.instance_53 = new lib.元件67();
	this.instance_53.parent = this;
	this.instance_53.setTransform(304,622,1.462,1.462,0,0,0,141,278.6);
	this.instance_53.alpha = 0;
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(3299).to({_off:false},0).to({alpha:1},11).to({_off:true},229).wait(1191));

	// 品牌DNA畫面
	this.instance_54 = new lib.元件65();
	this.instance_54.parent = this;
	this.instance_54.setTransform(513,621.9,1.462,1.462,0,0,0,357.3,222.9);
	this.instance_54.alpha = 0;
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(3029).to({_off:false},0).wait(1).to({x:569.2,y:622.3,alpha:0.039},0).wait(1).to({regY:223,x:620.5,y:622.8,alpha:0.078},0).wait(1).to({regY:222.9,x:667.2,y:623,alpha:0.129},0).wait(1).to({x:709.4,y:623.3,alpha:0.172},0).wait(1).to({x:747.4,y:623.5,alpha:0.211},0).wait(1).to({x:781.4,y:623.8,alpha:0.262},0).wait(1).to({x:811.7,y:624,alpha:0.301},0).wait(1).to({x:838.3,y:624.2,alpha:0.34},0).wait(1).to({regY:223,x:861.7,y:624.5,alpha:0.391},0).wait(1).to({x:882,y:624.7,alpha:0.43},0).wait(1).to({regY:222.9,x:899.3,y:624.6,alpha:0.469},0).wait(1).to({x:914,y:624.8,alpha:0.52},0).wait(1).to({x:926.2,alpha:0.559},0).wait(1).to({x:936.3,y:624.9,alpha:0.602},0).wait(1).to({x:944.3,y:625,alpha:0.648},0).wait(1).to({x:950.6,alpha:0.691},0).wait(1).to({x:955.3,y:625.1,alpha:0.73},0).wait(1).to({x:958.6,alpha:0.781},0).wait(1).to({x:960.9,alpha:0.82},0).wait(1).to({x:962.3,alpha:0.859},0).wait(1).to({x:962.9,alpha:0.91},0).wait(1).to({x:963.2,alpha:0.949},0).wait(1).to({x:963.3,alpha:1},0).wait(188).to({_off:true},299).wait(1191));

	// 按鈕
	this.bala = new lib.元件64();
	this.bala.parent = this;
	this.bala.setTransform(1576.3,876.2,1.462,1.462,0,0,0,86.5,28.5);
	this.bala.alpha = 0;
	this.bala._off = true;
	new cjs.ButtonHelper(this.bala, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.bala).wait(2968).to({_off:false},0).to({alpha:1},9).to({_off:true},1).wait(1752));

	// 對話1
	this.gggggggggggg = new lib.元件62();
	this.gggggggggggg.parent = this;
	this.gggggggggggg.setTransform(960.9,624.1,1.462,1.462,0,0,0,536.5,222);
	this.gggggggggggg.alpha = 0.211;
	this.gggggggggggg._off = true;

	this.instance_55 = new lib.元件62複製();
	this.instance_55.parent = this;
	this.instance_55.setTransform(960.9,624.1,1.462,1.462,0,0,0,536.5,222);
	this.instance_55.alpha = 0;
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gggggggggggg).wait(2814).to({_off:false},0).to({alpha:1},10).wait(128).to({alpha:0},10).to({_off:true},6).wait(1762));
	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(2968).to({_off:false},0).to({alpha:1},9).to({_off:true},1).wait(1752));

	// 箭頭投
	this.instance_56 = new lib.元件61();
	this.instance_56.parent = this;
	this.instance_56.setTransform(1393.4,567.7,1.462,1.462,0,0,0,28,38.5);
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(2789).to({_off:false},0).to({_off:true},1).wait(1940));

	// 圖層 31 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2790 = new cjs.Graphics().p("EBXcAjuIAA2+Ib/AAIAAW+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2790).to({graphics:mask_graphics_2790,x:738.7,y:228.6}).wait(24).to({graphics:null,x:0,y:0}).wait(1916));

	// 硬幣
	this.ASDQWE = new lib.元件60();
	this.ASDQWE.parent = this;
	this.ASDQWE.setTransform(1389.2,383.7,1.462,1.462,0,0,0,37.5,37.5);
	this.ASDQWE.alpha = 0;
	this.ASDQWE._off = true;
	new cjs.ButtonHelper(this.ASDQWE, 0, 1, 1);

	var maskedShapeInstanceList = [this.ASDQWE];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.ASDQWE).wait(2781).to({_off:false},0).to({alpha:1},8).wait(1).to({regY:37.6,y:250.8},23).to({_off:true},1).wait(1916));

	// 紅茶
	this.instance_57 = new lib.元件57();
	this.instance_57.parent = this;
	this.instance_57.setTransform(1417.1,556.9,1.462,1.462,0,0,0,24.6,8);
	this.instance_57.alpha = 0;
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(2773).to({_off:false},0).to({alpha:1},7).to({_off:true},10).wait(1940));

	// 件投
	this.instance_58 = new lib.元件56();
	this.instance_58.parent = this;
	this.instance_58.setTransform(1247.6,793.3,1.462,1.462,0,0,0,32.5,23.6);
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(2769).to({_off:false},0).to({_off:true},1).wait(1960));

	// 確認
	this.RT = new lib.元件59();
	this.RT.parent = this;
	this.RT.setTransform(1395.1,789.3,1.462,1.462,0,0,0,50.5,20);
	this.RT._off = true;
	new cjs.ButtonHelper(this.RT, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.RT).wait(2769).to({_off:false},0).to({_off:true},1).wait(1960));

	// 數量
	this.instance_59 = new lib._1png複製2();
	this.instance_59.parent = this;
	this.instance_59.setTransform(817,531,1.462,1.462);

	this.instance_60 = new lib._2png複製2();
	this.instance_60.parent = this;
	this.instance_60.setTransform(817,531,1.462,1.462);

	this.instance_61 = new lib._2();
	this.instance_61.parent = this;
	this.instance_61.setTransform(817,531,1.462,1.462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_59}]},2764).to({state:[]},1).to({state:[{t:this.instance_60}]},4).to({state:[{t:this.instance_61}]},4).to({state:[]},1).wait(1956));

	// 減2
	this.huhuuuuuu = new lib.元件55複製();
	this.huhuuuuuu.parent = this;
	this.huhuuuuuu.setTransform(723.5,529.1,1.462,1.462);
	this.huhuuuuuu._off = true;
	new cjs.ButtonHelper(this.huhuuuuuu, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.huhuuuuuu).wait(2769).to({_off:false},0).to({_off:true},1).wait(1960));

	// 剪刀腳
	this.rbeiopop = new lib.元件55();
	this.rbeiopop.parent = this;
	this.rbeiopop.setTransform(723.5,529.1,1.462,1.462);
	this.rbeiopop._off = true;
	new cjs.ButtonHelper(this.rbeiopop, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.rbeiopop).wait(2764).to({_off:false},0).to({_off:true},1).wait(1965));

	// 減
	this.tttt = new lib.元件55();
	this.tttt.parent = this;
	this.tttt.setTransform(747.6,547.3,1.462,1.462,0,0,0,16.5,12.5);
	this.tttt.alpha = 0;
	this.tttt._off = true;
	new cjs.ButtonHelper(this.tttt, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.tttt).wait(2620).to({_off:false},0).to({alpha:1},10).wait(133).to({_off:true},1).wait(1966));

	// 加三
	this.instance_62 = new lib.元件54複製2();
	this.instance_62.parent = this;
	this.instance_62.setTransform(659.2,529.1,1.462,1.462);
	this.instance_62._off = true;
	new cjs.ButtonHelper(this.instance_62, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(2769).to({_off:false},0).to({_off:true},1).wait(1960));

	// 加2
	this.pppppppap = new lib.元件54複製();
	this.pppppppap.parent = this;
	this.pppppppap.setTransform(659.2,529.1,1.462,1.462);
	this.pppppppap._off = true;
	new cjs.ButtonHelper(this.pppppppap, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pppppppap).wait(2764).to({_off:false},0).to({_off:true},1).wait(1965));

	// 加
	this.adddddddddc = new lib.元件54();
	this.adddddddddc.parent = this;
	this.adddddddddc.setTransform(683.3,547.3,1.462,1.462,0,0,0,16.5,12.5);
	this.adddddddddc.alpha = 0;
	this.adddddddddc._off = true;
	new cjs.ButtonHelper(this.adddddddddc, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.adddddddddc).wait(2620).to({_off:false},0).to({alpha:1},10).to({_off:true},134).wait(1966));

	// 紅茶按鈕
	this.redtea = new lib.元件51();
	this.redtea.parent = this;
	this.redtea.setTransform(649.3,546.6,1.462,1.462,0,0,0,142.5,20);
	new cjs.ButtonHelper(this.redtea, 0, 1, 1);

	this.instance_63 = new lib.補間動畫59("synched",0);
	this.instance_63.parent = this;
	this.instance_63.setTransform(649.7,546.6,1.462,1.462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.redtea}]},2615).to({state:[{t:this.instance_63}]},5).to({state:[{t:this.instance_63}]},149).to({state:[{t:this.instance_63}]},4).to({state:[]},1).wait(1956));

	// 件投
	this.instance_64 = new lib.元件50();
	this.instance_64.parent = this;
	this.instance_64.setTransform(496.2,467.8,1.462,1.462,0,0,0,22.5,31.1);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(2615).to({_off:false},0).wait(5).to({alpha:0},14).wait(5).to({x:681.8,alpha:1},0).to({_off:true},130).wait(1961));

	// 對話框
	this.skipggggggggg = new lib.元件48();
	this.skipggggggggg.parent = this;
	this.skipggggggggg.setTransform(959.5,876.9,1.462,1.462,0,0,0,526.5,96);
	this.skipggggggggg.alpha = 0.359;
	this.skipggggggggg._off = true;

	this.skippppppp = new lib.元件48複製();
	this.skippppppp.parent = this;
	this.skippppppp.setTransform(959.5,876.9,1.462,1.462,0,0,0,526.5,96);
	this.skippppppp.alpha = 0;
	this.skippppppp._off = true;

	this.instance_65 = new lib.元件48複製2();
	this.instance_65.parent = this;
	this.instance_65.setTransform(959.5,876.9,1.462,1.462,0,0,0,526.5,96);
	this.instance_65.alpha = 0;
	this.instance_65._off = true;

	this.instance_66 = new lib.元件48複製3();
	this.instance_66.parent = this;
	this.instance_66.setTransform(959.5,876.9,1.462,1.462,0,0,0,526.5,96);
	this.instance_66.alpha = 0;
	this.instance_66._off = true;

	this.timeline.addTween(cjs.Tween.get(this.skipggggggggg).wait(2292).to({_off:false},0).to({alpha:1},11).wait(159).to({alpha:0},18).to({_off:true},3).wait(2247));
	this.timeline.addTween(cjs.Tween.get(this.skippppppp).wait(2483).to({_off:false},0).to({alpha:1},17).wait(76).to({alpha:0},15).to({_off:true},6).wait(2133));
	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(2597).to({_off:false},0).to({alpha:1},22).wait(3).to({alpha:0.859},0).to({alpha:0},12).to({_off:true},5).wait(2091));
	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(2639).to({_off:false},0).to({alpha:1},13).wait(99).to({alpha:0},12).to({_off:true},215).wait(1752));

	// 迎賓服務bg
	this.instance_67 = new lib.元件47();
	this.instance_67.parent = this;
	this.instance_67.setTransform(513.1,623.7,1.462,1.462,0,0,0,356.8,222.9);
	this.instance_67.alpha = 0;
	this.instance_67._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(2262).to({_off:false},0).wait(1).to({x:569,alpha:0.039},0).wait(1).to({x:620.2,alpha:0.078},0).wait(1).to({x:666.6,alpha:0.129},0).wait(1).to({x:708.7,alpha:0.172},0).wait(1).to({x:746.6,alpha:0.211},0).wait(1).to({x:780.5,alpha:0.262},0).wait(1).to({regX:356.9,x:810.7,alpha:0.301},0).wait(1).to({x:837.3,alpha:0.34},0).wait(1).to({regX:356.8,x:860.5,alpha:0.391},0).wait(1).to({x:880.7,alpha:0.43},0).wait(1).to({x:897.9,alpha:0.469},0).wait(1).to({x:912.6,alpha:0.52},0).wait(1).to({x:924.8,alpha:0.559},0).wait(1).to({x:934.8,alpha:0.602},0).wait(1).to({regX:356.9,x:942.9,alpha:0.648},0).wait(1).to({regX:356.8,x:949,alpha:0.691},0).wait(1).to({x:953.7,alpha:0.73},0).wait(1).to({regX:356.9,x:957.2,alpha:0.781},0).wait(1).to({regX:356.8,x:959.3,alpha:0.82},0).wait(1).to({regX:356.9,x:960.8,alpha:0.859},0).wait(1).to({regX:356.8,x:961.4,alpha:0.91},0).wait(1).to({regX:356.9,x:961.8,alpha:0.949},0).wait(1).to({regX:356.8,x:961.7,alpha:1},0).to({_off:true},693).wait(1752));

	// 返回按鈕
	this.ezgg = new lib.az();
	this.ezgg.parent = this;
	this.ezgg.setTransform(1770.5,944.6,1.462,1.462,0,0,0,70.4,70.3);
	this.ezgg._off = true;
	new cjs.ButtonHelper(this.ezgg, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ezgg).wait(2261).to({_off:false},0).to({_off:true},1).wait(2468));

	// 字幕1
	this.instance_68 = new lib.元件32();
	this.instance_68.parent = this;
	this.instance_68.setTransform(971.2,881.3,1.462,1.462,0,0,0,526.5,96);
	this.instance_68.alpha = 0.18;
	this.instance_68._off = true;

	this.instance_69 = new lib.元件33();
	this.instance_69.parent = this;
	this.instance_69.setTransform(959.5,375.6,1.462,1.462,0,0,0,526.5,96);
	this.instance_69.alpha = 0.199;
	this.instance_69._off = true;

	this.instance_70 = new lib.元件34();
	this.instance_70.parent = this;
	this.instance_70.setTransform(959.5,882.8,1.462,1.462,0,0,0,526.5,96);
	this.instance_70.alpha = 0.129;
	this.instance_70._off = true;

	this.instance_71 = new lib.元件35();
	this.instance_71.parent = this;
	this.instance_71.setTransform(959.5,396.1,1.462,1.462,0,0,0,526.5,96);
	this.instance_71.alpha = 0.199;
	this.instance_71._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(1290).to({_off:false},0).to({alpha:1},10).wait(134).to({alpha:0},9).to({_off:true},47).wait(3240));
	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(1490).to({_off:false},0).to({alpha:1},9).wait(147).to({alpha:0},9).to({_off:true},54).wait(3021));
	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(1709).to({_off:false},0).to({alpha:1},12).wait(100).to({alpha:0},10).to({_off:true},43).wait(2856));
	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(1874).to({_off:false},0).to({alpha:1},11).wait(116).to({y:392,alpha:0},8).to({_off:true},1).wait(2720));

	// 紅框1
	this.instance_72 = new lib.元件31();
	this.instance_72.parent = this;
	this.instance_72.setTransform(551,453.2,1.462,1.462,0,0,0,87,108.1);
	this.instance_72.alpha = 0.18;
	this.instance_72._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(1279).to({_off:false},0).to({alpha:1},6).wait(167).to({regY:108,y:685.1},12).to({regY:108.1,y:755.8},21).wait(176).to({x:1173.1,y:472.2},22).to({x:1365.7,y:453.1},20).wait(137).to({y:698.8},12).to({regY:108,y:753.7},17).wait(145).to({alpha:0},8).to({_off:true},2).wait(2706));

	// 平板按鈕
	this.shenghuoguansheshi = new lib.元件44();
	this.shenghuoguansheshi.parent = this;
	this.shenghuoguansheshi.setTransform(1359.2,767.3,1.462,1.462,0,0,0,84,101);
	new cjs.ButtonHelper(this.shenghuoguansheshi, 0, 1, 1);

	this.pingpaidna = new lib.元件43();
	this.pingpaidna.parent = this;
	this.pingpaidna.setTransform(562,765.8,1.462,1.462,0,0,0,82.5,101);
	new cjs.ButtonHelper(this.pingpaidna, 0, 1, 1);

	this.chekuanzhanshi = new lib.元件42();
	this.chekuanzhanshi.parent = this;
	this.chekuanzhanshi.setTransform(1360,448,1.462,1.462,0,0,0,83.5,101.5);
	new cjs.ButtonHelper(this.chekuanzhanshi, 0, 1, 1);

	this.yingbinfuwu = new lib.元件41();
	this.yingbinfuwu.parent = this;
	this.yingbinfuwu.setTransform(560.5,447.9,1.462,1.462,0,0,0,82.5,100.5);
	new cjs.ButtonHelper(this.yingbinfuwu, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.yingbinfuwu},{t:this.chekuanzhanshi},{t:this.pingpaidna},{t:this.shenghuoguansheshi}]},2261).to({state:[]},1).wait(2468));

	// 平板bg
	this.instance_73 = new lib.元件30();
	this.instance_73.parent = this;
	this.instance_73.setTransform(961.7,622,1.462,1.462,0,0,0,624,291.6);
	this.instance_73.alpha = 0;
	this.instance_73._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(1260).to({_off:false},0).to({alpha:1},10).wait(1034).to({_off:true},1476).wait(950));

	// 名片
	this.instance_74 = new lib.元件29();
	this.instance_74.parent = this;
	this.instance_74.setTransform(492.3,826.2,1.462,1.462,0,0,0,207,114.6);
	this.instance_74.alpha = 0.211;
	this.instance_74._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(1063).to({_off:false},0).to({alpha:1},16).wait(7).to({x:1450.5},15).wait(12).to({alpha:0},20).to({_off:true},18).wait(3579));

	// 男人客啦
	this.instance_75 = new lib.元件28();
	this.instance_75.parent = this;
	this.instance_75.setTransform(1440.4,630.6,1.462,1.462,0,0,0,162.5,284.5);
	this.instance_75.alpha = 0.328;
	this.instance_75._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(1024).to({_off:false},0).to({alpha:1},12).wait(223).to({_off:true},1).wait(3470));

	// JJJJ
	this.instance_76 = new lib.元件27();
	this.instance_76.parent = this;
	this.instance_76.setTransform(491.8,642.3,1.462,1.462,0,0,0,156.5,276.5);
	this.instance_76.alpha = 0.328;
	this.instance_76._off = true;

	this.instance_77 = new lib.框png複製3();
	this.instance_77.parent = this;
	this.instance_77.setTransform(56,789,1.462,1.462);

	this.instance_78 = new lib._1林先生您好我是智傑這是我的名片();
	this.instance_78.parent = this;
	this.instance_78.setTransform(96,829,1.462,1.462);

	this.instance_79 = new lib._2今天就由我為您服務首先就讓我來介紹一下納智捷吧();
	this.instance_79.parent = this;
	this.instance_79.setTransform(96,829,1.462,1.462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_76}]},1024).to({state:[{t:this.instance_76}]},12).to({state:[{t:this.instance_76},{t:this.instance_77}]},1).to({state:[{t:this.instance_76},{t:this.instance_77},{t:this.instance_78}]},8).to({state:[{t:this.instance_76},{t:this.instance_77},{t:this.instance_79}]},96).to({state:[{t:this.instance_76},{t:this.instance_77},{t:this.instance_79}]},118).to({state:[]},1).wait(3470));
	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(1024).to({_off:false},0).to({alpha:1},12).wait(223).to({_off:true},1).wait(3470));

	// 9bg
	this.instance_80 = new lib.元件26();
	this.instance_80.parent = this;
	this.instance_80.setTransform(994.6,620.6,1.462,1.462,0,0,0,601.5,291.6);
	this.instance_80.alpha = 0.219;
	this.instance_80._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(1024).to({_off:false},0).to({alpha:0.84},12).wait(223).to({_off:true},1).wait(3470));

	// 圖層 15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_979 = new cjs.Graphics().p("EhcKBIIMAAAhx1MDg8AAAMAAABx1g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(979).to({graphics:mask_1_graphics_979,x:849.8,y:461.6}).wait(3751));

	// 給手
	this.instance_81 = new lib.補間動畫51("synched",0);
	this.instance_81.parent = this;
	this.instance_81.setTransform(963.9,38,1.462,1.462);
	this.instance_81._off = true;

	this.instance_82 = new lib.補間動畫52("synched",0);
	this.instance_82.parent = this;
	this.instance_82.setTransform(963.6,555,1.462,1.462);

	var maskedShapeInstanceList = [this.instance_81,this.instance_82];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_81}]},979).to({state:[{t:this.instance_82}]},20).to({state:[{t:this.instance_82}]},24).to({state:[]},1).wait(3706));
	this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(979).to({_off:false},0).to({_off:true,x:963.6,y:555},20).wait(3731));

	// 圖層 14 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_985 = new cjs.Graphics().p("EgPbBSGMAAAgjIMB9SAAAMAAAAjIg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(985).to({graphics:mask_2_graphics_985,x:703.1,y:525.4}).wait(3745));

	// 接手
	this.instance_83 = new lib.補間動畫49("synched",0);
	this.instance_83.parent = this;
	this.instance_83.setTransform(960.2,1142.9,1.462,1.462);
	this.instance_83._off = true;

	this.instance_84 = new lib.補間動畫50("synched",0);
	this.instance_84.parent = this;
	this.instance_84.setTransform(960.2,939.8,1.462,1.462);

	var maskedShapeInstanceList = [this.instance_83,this.instance_84];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_83}]},985).to({state:[{t:this.instance_84}]},8).to({state:[{t:this.instance_84}]},30).to({state:[]},1).wait(3706));
	this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(985).to({_off:false},0).to({_off:true,y:939.8},8).wait(3737));

	// 杯水車薪
	this.instance_85 = new lib.元件24();
	this.instance_85.parent = this;
	this.instance_85.setTransform(1086.1,839.9,2.351,2.351,0,0,0,125.5,14.5);
	this.instance_85.alpha = 0.191;
	this.instance_85._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(896).to({_off:false},0).to({alpha:1},32).to({_off:true},51).wait(3751));

	// 7裝飾物
	this.instance_86 = new lib.盆栽();
	this.instance_86.parent = this;
	this.instance_86.setTransform(1017,694,1.462,1.462);

	this.instance_87 = new lib.桌();
	this.instance_87.parent = this;
	this.instance_87.setTransform(586,874,1.462,1.462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_87},{t:this.instance_86}]},822).to({state:[]},157).wait(3751));

	// 圖層 11 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_878 = new cjs.Graphics().p("Egb5BPGMAAAhlFMA/yAAAMAAABlFg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(878).to({graphics:mask_3_graphics_878,x:229.7,y:506.2}).wait(3852));

	// 那那
	this.instance_88 = new lib.補間動畫47("synched",0);
	this.instance_88.parent = this;
	this.instance_88.setTransform(-163.6,689.1,1.462,1.462);
	this.instance_88._off = true;

	this.instance_89 = new lib.補間動畫48("synched",0);
	this.instance_89.parent = this;
	this.instance_89.setTransform(287.9,689.1,1.462,1.462);

	var maskedShapeInstanceList = [this.instance_88,this.instance_89];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_88}]},878).to({state:[{t:this.instance_89}]},11).to({state:[]},90).wait(3751));
	this.timeline.addTween(cjs.Tween.get(this.instance_88).wait(878).to({_off:false},0).to({_off:true,x:287.9},11).wait(3841));

	// 人客們
	this.instance_90 = new lib.補間動畫36("synched",0);
	this.instance_90.parent = this;
	this.instance_90.setTransform(451.6,658.4,1.462,1.462);
	this.instance_90._off = true;

	this.instance_91 = new lib.補間動畫37("synched",0);
	this.instance_91.parent = this;
	this.instance_91.setTransform(486.7,623.4,1.462,1.462);
	this.instance_91._off = true;

	this.instance_92 = new lib.補間動畫38("synched",0);
	this.instance_92.parent = this;
	this.instance_92.setTransform(520.3,657,1.462,1.462);
	this.instance_92._off = true;

	this.instance_93 = new lib.補間動畫39("synched",0);
	this.instance_93.parent = this;
	this.instance_93.setTransform(555.4,621.9,1.462,1.462);
	this.instance_93._off = true;

	this.instance_94 = new lib.補間動畫40("synched",0);
	this.instance_94.parent = this;
	this.instance_94.setTransform(632.9,639.4,1.462,1.462);
	this.instance_94._off = true;

	this.instance_95 = new lib.補間動畫41("synched",0);
	this.instance_95.parent = this;
	this.instance_95.setTransform(697.2,616,1.462,1.462);
	this.instance_95._off = true;

	this.instance_96 = new lib.補間動畫42("synched",0);
	this.instance_96.parent = this;
	this.instance_96.setTransform(776.1,643.8,1.462,1.462);
	this.instance_96._off = true;

	this.instance_97 = new lib.補間動畫43("synched",0);
	this.instance_97.parent = this;
	this.instance_97.setTransform(838.9,626.3,1.462,1.462);
	this.instance_97._off = true;

	this.instance_98 = new lib.補間動畫44("synched",0);
	this.instance_98.parent = this;
	this.instance_98.setTransform(955.9,671.6,1.462,1.462);
	this.instance_98._off = true;

	this.instance_99 = new lib.補間動畫45("synched",0);
	this.instance_99.parent = this;
	this.instance_99.setTransform(1026,652.6,1.462,1.462);
	this.instance_99._off = true;

	this.instance_100 = new lib.補間動畫46("synched",0);
	this.instance_100.parent = this;
	this.instance_100.setTransform(1097.6,670.1,1.462,1.462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_90}]},822).to({state:[{t:this.instance_91}]},4).to({state:[{t:this.instance_92}]},3).to({state:[{t:this.instance_93}]},3).to({state:[{t:this.instance_94}]},3).to({state:[{t:this.instance_95}]},4).to({state:[{t:this.instance_96}]},4).to({state:[{t:this.instance_97}]},6).to({state:[{t:this.instance_98}]},7).to({state:[{t:this.instance_99}]},8).to({state:[{t:this.instance_100}]},8).to({state:[]},107).wait(3751));
	this.timeline.addTween(cjs.Tween.get(this.instance_90).wait(822).to({_off:false},0).to({_off:true,x:486.7,y:623.4},4).wait(3904));
	this.timeline.addTween(cjs.Tween.get(this.instance_91).wait(822).to({_off:false},4).to({_off:true,x:520.3,y:657},3).wait(3901));
	this.timeline.addTween(cjs.Tween.get(this.instance_92).wait(826).to({_off:false},3).to({_off:true,x:555.4,y:621.9},3).wait(3898));
	this.timeline.addTween(cjs.Tween.get(this.instance_93).wait(829).to({_off:false},3).to({_off:true,x:632.9,y:639.4},3).wait(3895));
	this.timeline.addTween(cjs.Tween.get(this.instance_94).wait(832).to({_off:false},3).to({_off:true,x:697.2,y:616},4).wait(3891));
	this.timeline.addTween(cjs.Tween.get(this.instance_95).wait(835).to({_off:false},4).to({_off:true,x:776.1,y:643.8},4).wait(3887));
	this.timeline.addTween(cjs.Tween.get(this.instance_96).wait(839).to({_off:false},4).to({_off:true,x:838.9,y:626.3},6).wait(3881));
	this.timeline.addTween(cjs.Tween.get(this.instance_97).wait(843).to({_off:false},6).to({_off:true,x:955.9,y:671.6},7).wait(3874));
	this.timeline.addTween(cjs.Tween.get(this.instance_98).wait(849).to({_off:false},7).to({_off:true,x:1026,y:652.6},8).wait(3866));
	this.timeline.addTween(cjs.Tween.get(this.instance_99).wait(856).to({_off:false},8).to({_off:true,x:1097.6,y:670.1},8).wait(3858));

	// 7背景
	this.instance_101 = new lib._7bg();
	this.instance_101.parent = this;
	this.instance_101.setTransform(51,197,1.462,1.462);
	this.instance_101._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_101).wait(822).to({_off:false},0).to({_off:true},157).wait(3751));

	// 圖層 5 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_799 = new cjs.Graphics().p("EAw6BRwMAAAhvBMBhfAAAMAAABvBg");
	var mask_4_graphics_821 = new cjs.Graphics().p("EAw6BRwMAAAhvBMBhfAAAMAAABvBg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(799).to({graphics:mask_4_graphics_799,x:936.9,y:523.2}).wait(22).to({graphics:mask_4_graphics_821,x:936.9,y:523.2}).wait(3909));

	// 買車背影
	this.instance_102 = new lib.元件23();
	this.instance_102.parent = this;
	this.instance_102.setTransform(1447.8,839.7,1.462,1.462,0,0,0,134.6,141.5);
	this.instance_102._off = true;

	var maskedShapeInstanceList = [this.instance_102];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_102).wait(799).to({_off:false},0).to({regY:141.6,y:693},22).to({_off:true},1).wait(3908));

	// 圖層 3 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_799 = new cjs.Graphics().p("EAw6BRwMAAAh88MBhfAAAMAAAB88g");
	var mask_5_graphics_821 = new cjs.Graphics().p("EAw6BRwMAAAh88MBhfAAAMAAAB88g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(799).to({graphics:mask_5_graphics_799,x:936.9,y:523.2}).wait(22).to({graphics:mask_5_graphics_821,x:936.9,y:523.2}).wait(3909));

	// 賣車背影
	this.instance_103 = new lib.補間動畫34("synched",0);
	this.instance_103.parent = this;
	this.instance_103.setTransform(1756.8,851.4,1.462,1.462);
	this.instance_103._off = true;

	var maskedShapeInstanceList = [this.instance_103];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_103).wait(799).to({_off:false},0).to({y:704.5},22).to({_off:true},1).wait(3908));

	// 6背景
	this.instance_104 = new lib._6bg();
	this.instance_104.parent = this;
	this.instance_104.setTransform(50,194,1.462,1.462);
	this.instance_104._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_104).wait(799).to({_off:false},0).to({_off:true},23).wait(3908));

	// 賣車的
	this.instance_105 = new lib.補間動畫25("synched",0);
	this.instance_105.parent = this;
	this.instance_105.setTransform(1674.2,650.4,1.462,1.462);
	this.instance_105._off = true;

	this.instance_106 = new lib.補間動畫26("synched",0);
	this.instance_106.parent = this;
	this.instance_106.setTransform(1674.2,661.9,1.462,1.462);
	this.instance_106._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_105).wait(736).to({_off:false},0).to({_off:true,y:661.9},7).wait(3987));
	this.timeline.addTween(cjs.Tween.get(this.instance_106).wait(736).to({_off:false},7).wait(5).to({startPosition:0},0).to({y:704.3},6).to({_off:true},45).wait(3931));

	// 人客
	this.instance_107 = new lib.補間動畫30("synched",0);
	this.instance_107.parent = this;
	this.instance_107.setTransform(1321.3,532,1.462,1.462);
	this.instance_107._off = true;

	this.instance_108 = new lib.補間動畫31("synched",0);
	this.instance_108.parent = this;
	this.instance_108.setTransform(1321.3,566.9,1.462,1.462);

	this.instance_109 = new lib.補間動畫32("synched",0);
	this.instance_109.parent = this;
	this.instance_109.setTransform(1321.3,566.9,1.462,1.462);
	this.instance_109._off = true;

	this.instance_110 = new lib.補間動畫33("synched",0);
	this.instance_110.parent = this;
	this.instance_110.setTransform(1321.3,617.1,1.462,1.462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_107}]},736).to({state:[{t:this.instance_108}]},8).to({state:[{t:this.instance_109}]},5).to({state:[{t:this.instance_110}]},12).to({state:[]},38).wait(3931));
	this.timeline.addTween(cjs.Tween.get(this.instance_107).wait(736).to({_off:false},0).to({_off:true,y:566.9},8).wait(3986));
	this.timeline.addTween(cjs.Tween.get(this.instance_109).wait(749).to({_off:false},0).to({_off:true,y:617.1},12).wait(3969));

	// 提示4
	this.tip4 = new lib.元件22();
	this.tip4.parent = this;
	this.tip4.setTransform(964.7,616.8,0.278,0.278,0,0,0,475.2,260.1);
	this.tip4._off = true;
	new cjs.ButtonHelper(this.tip4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.tip4).wait(709).to({_off:false},0).to({regX:475.1,scaleX:1.46,scaleY:1.46,x:964.8,y:616.9},14).to({regX:475.4,regY:261.4,scaleX:0.04,scaleY:0.04,x:964.7},12).to({_off:true},1).wait(3994));

	// 星星4
	this.star4 = new lib.元件5複製3();
	this.star4.parent = this;
	this.star4.setTransform(841.3,687.2,1.462,1.462,0,0,0,52.6,-0.3);
	this.star4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.star4).wait(708).to({_off:false},0).to({_off:true},1).wait(4021));

	// 提示3
	this.TIP3 = new lib.元件19();
	this.TIP3.parent = this;
	this.TIP3.setTransform(1017.3,616.8,0.351,0.351,0,0,0,475.1,260.1);
	this.TIP3._off = true;
	new cjs.ButtonHelper(this.TIP3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.TIP3).wait(681).to({_off:false},0).to({regX:475,scaleX:1.46,scaleY:1.46,y:616.9},12).to({regX:475.2,regY:260.9,scaleX:0.05,scaleY:0.05,y:616.8},11).to({_off:true},1).wait(4025));

	// 星星3
	this.star3 = new lib.元件5複製2();
	this.star3.parent = this;
	this.star3.setTransform(812.8,694.5,1.462,1.462,0,0,0,52.6,-0.3);
	this.star3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.star3).wait(680).to({_off:false},0).to({_off:true},1).wait(4049));

	// 顧客對話框
	this.instance_111 = new lib.框();
	this.instance_111.parent = this;
	this.instance_111.setTransform(976,780,1.462,1.462);

	this.instance_112 = new lib._2是的();
	this.instance_112.parent = this;
	this.instance_112.setTransform(1041,823,1.462,1.462);

	this.instance_113 = new lib._4噢我姓林png複製();
	this.instance_113.parent = this;
	this.instance_113.setTransform(1041,823,1.462,1.462);

	this.instance_114 = new lib._6兩位我跟我太太而已();
	this.instance_114.parent = this;
	this.instance_114.setTransform(1041,823,1.462,1.462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_111}]},569).to({state:[{t:this.instance_111},{t:this.instance_112}]},34).to({state:[{t:this.instance_111},{t:this.instance_113}]},28).to({state:[{t:this.instance_111},{t:this.instance_114}]},30).to({state:[]},75).wait(3994));

	// J對話框
	this.instance_115 = new lib.flame();
	this.instance_115.parent = this;
	this.instance_115.setTransform(60,780,1.462,1.462);

	this.instance_116 = new lib._1先生請問是要看車嗎();
	this.instance_116.parent = this;
	this.instance_116.setTransform(117,823,1.462,1.462);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnB6QAlgFAYgQIAMAMQAJAJgPgBQgWANgiAHgABAB0IANgPQAYAMAnAFIgLAWQgigFgfgTgAhZCIIAAh9IgkADQgGALgEgMIgEgRIAbAAIATgeIgqgfIAKgQIAHAGIAkg+IATAMQALAHgPACIghA1IAPANIAggzIATAMQAIAEgNAEIgwBLIAkgBIgMgVIAOgIQAQAWAKAYIgRAKIgFgNIgYACIAAB/gAiGBtQAKgeACgqIATABQALAAgJAIQgDArgIAYgAgKBjIAAhhIB/AAIAABhgAAJBVIBYAAIAAgOIhYAAgAAJA5IBYAAIAAgNIhYAAgAAJAdIBYAAIAAgNIhYAAgAg+AnIAVgFQANAeABAZIgWAIQgEgggJgagAgagHIAAhAICfAAIAABAgAgFgVIB1AAIAAgNIgmAAQgMAAAAgLIAAgMIgVAAQAAAbghAFIgIgJQAZgFAAgSIgeAAgABPgwQAAAFAEAAIAdAAIAAgOIghAAgAgLhSIAAgPIA0AAIAAgKIhGAAIAAgPIBGAAIAAgSIAUAAQAJABgIAGIAAALIBLAAIAAAPIhLAAIAAAKIA5AAIAAAPg");
	this.shape.setTransform(910.4,897.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhdCLIAAh/IggACQgHALgDgLIgEgUIAWAAIASgeQgQgPgZgQIANgRIAKAHIAcg7IAVAHQAKAEgMAFIgeA3IAMAKIAZguIAVAKQAJADgMAEIgvBOIAhgDIgJgVIATgHQAMAUAJAeIAAiPIATAAQAJABgIAGIAABmICQAAIAAAUIiQAAIAABoICWAAIAAATIiWAAIAAAQIgUAAIAAh4IgTAGIgGgQIgVADIAACAgAiJByQAIghACgsIAUAAQALAAgKAKQgBAngGAfgAhEAoIAVgFQAMAgAEAcIgXAGQgEgdgKgggAA3BTIgvAEQgFAKgDgKIgCgQIANAAIALgPIgWgPIAbgpIAOAHQAGAFgIABIgSAWIAKAHIASgcIAOAGQAHAFgKADIgdArIAVgCIgIgPIARgEIAJATIAFAAIAMgPIgYgNIAagoIAOAHQAGAFgIABIgQAVIALAGIARgbIAOAIQAHAEgLADIgcAoIASgBIgGgNIAQgGQAJAUAHASIgQAGIgGgMIgqAEIACAIIgRAFgAA0gnIgsAEQgGAKgCgKIgFgSIATAAIAJgRIgagRIAGgOIAEACIATgmIAQAGQAKAEgMADIgSAiIAJAGIARgfIANAHQAIAFgKACIgdAwIASgBIgGgRIARgEIAHAVIAHAAIAMgQIgZgSIAigyIAOAHQAHAFgKACIgWAhIALAHIAUghIANAIQAIAEgKADIgfAwIATgBIgGgQIAQgFQAKAVAGATIgSAGIgEgMIguADIACAJIgSAFg");
	this.shape_1.setTransform(879.6,897.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag6BiQA+gKAdgeQAggfAAg/IAAhXIAWACQAKABgIAGIAABXQAAApgPAbIA6AvIgSAYIgzgyQgfArhQATgAh3BlIgMgZQAHgCAXgMIgHiyIAZACQAKACgJAGIAGCcQA2gfAhgaIAMAUQgmAfhgA4QgBAFgCAAQgCAAgDgEgAgvhbIAUgTQAYARAUAbIgXASQgWgegTgNg");
	this.shape_2.setTransform(849.8,898.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhYCGIgFgbIAbAAQAGAAAAgEIAAg6Ig1AMQgHAKgDgIIgIgbQAhgEAmgIIAAgzIhDAAIAAgXIBDAAIAAgpIg3AHIgGgXQBHgHAqgPIANAXQADAGgKgCIgjAGIAAAuIA6AAIAAhLIAXAAQAKABgJAGIAABEIBWAAIAAAXIhWAAQAAAsAHAeQAWgcAOgZIAXAMQAHADgMAEQgZAmgSAUQAQAZAUAFQAKACABgZIAWAMQgFAtgYgGQglgIgVgiQgeAagiAPIgLgZQAwgWAPgQQgMgkAAg4Ig6AAIAAAuQAXgFAXgHIAEAWIgyAOIAABMQAAATgTAAgAA6hhIAUgSQAVARAKAMIgVASQgKgMgUgRg");
	this.shape_3.setTransform(818.2,897.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgyBxQBAgLAbgYIgkgVIgFANIgUgKQAUgoAFgSIgxAAIAAgWIA5AAIAQgyIAUAEQAHADgIAEQgEAPgJAYIBnAAIAAAWIgkAAQgIAogTAdQAQAJApAbIgRAYQgigbgVgOQghAkhFANgAANAnQAYALASAKQASgeAFgcIgxAAQgIAVgIAQgAh1CIIgGgaIAQAAQAFAAAAgFIAAhFQgLAFgMABQgCAIgEgFIgGgbQASgCARgDIAAhEIgfAAIAAgWIAfAAIAAg6IAWAAQAKABgIAGIAAAzIAcAAIAAAWIgcAAIAAA/QAQgEAOgFIAEATQgQAIgSAFIAABZQAAAQgTAAgABrgoIAAglIh6AAIAAAlIgXAAIAAg8IBHAAIAAgmIAWAAQAKACgJAGIAAAeIBKAAIAAA8g");
	this.shape_4.setTransform(787.5,897.2);

	this.arrow1 = new lib.元件20();
	this.arrow1.parent = this;
	this.arrow1.setTransform(859.1,957,1.098,1.098,0,0,0,56.5,58.8);

	this.instance_117 = new lib._3請問您貴姓呢();
	this.instance_117.parent = this;
	this.instance_117.setTransform(117,823,1.462,1.462);

	this.arrow2 = new lib.元件20複製();
	this.arrow2.parent = this;
	this.arrow2.setTransform(878.7,935.1,1.098,1.098,0,0,0,56.4,58.8);

	this.instance_118 = new lib._5林先生您好那今天有幾位要一起看車呢();
	this.instance_118.parent = this;
	this.instance_118.setTransform(117,823,1.462,1.462);

	this.arrow3 = new lib.元件20複製2();
	this.arrow3.parent = this;
	this.arrow3.setTransform(878.9,935.3,1.098,1.098,0,0,0,83.3,59);

	this.instance_119 = new lib._7好的林先生汽車這邊請();
	this.instance_119.parent = this;
	this.instance_119.setTransform(117,823,1.462,1.462);

	this.instance_120 = new lib._8我們();
	this.instance_120.parent = this;
	this.instance_120.setTransform(117,823,1.462,1.462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_115}]},569).to({state:[{t:this.instance_115},{t:this.instance_116}]},13).to({state:[{t:this.instance_115},{t:this.instance_116},{t:this.arrow1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},28).to({state:[{t:this.instance_115},{t:this.instance_117}]},4).to({state:[{t:this.instance_115},{t:this.instance_117},{t:this.arrow2}]},25).to({state:[{t:this.instance_115},{t:this.instance_118}]},5).to({state:[{t:this.instance_115},{t:this.instance_118},{t:this.arrow3}]},20).to({state:[{t:this.instance_115},{t:this.instance_119}]},5).to({state:[{t:this.instance_115},{t:this.instance_120}]},36).to({state:[{t:this.instance_115},{t:this.instance_120}]},30).to({state:[]},1).wait(3994));

	// J
	this.instance_121 = new lib.元件18();
	this.instance_121.parent = this;
	this.instance_121.setTransform(461.1,640.9,1.462,1.462,0,0,0,156.5,276.5);
	this.instance_121.alpha = 0.25;
	this.instance_121._off = true;

	this.instance_122 = new lib.元件18複製();
	this.instance_122.parent = this;
	this.instance_122.setTransform(461.1,640.9,1.462,1.462,0,0,0,156.5,276.5);

	this.instance_123 = new lib.元件18複製2();
	this.instance_123.parent = this;
	this.instance_123.setTransform(461.1,640.9,1.462,1.462,0,0,0,156.5,276.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_121}]},560).to({state:[{t:this.instance_121}]},9).to({state:[{t:this.instance_122}]},100).to({state:[{t:this.instance_123}]},36).to({state:[]},31).wait(3994));
	this.timeline.addTween(cjs.Tween.get(this.instance_121).wait(560).to({_off:false},0).to({alpha:1},9).to({_off:true},100).wait(4061));

	// 顧客
	this.instance_124 = new lib.元件17();
	this.instance_124.parent = this;
	this.instance_124.setTransform(1421.4,629.2,1.462,1.462,0,0,0,162.5,284.5);
	this.instance_124.alpha = 0.25;
	this.instance_124._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_124).wait(560).to({_off:false},0).to({alpha:1},9).to({_off:true},167).wait(3994));

	// 對話背景
	this.instance_125 = new lib.元件16();
	this.instance_125.parent = this;
	this.instance_125.setTransform(965.3,619,1.462,1.462,0,0,0,626.5,291.5);
	this.instance_125.alpha = 0.25;
	this.instance_125._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_125).wait(560).to({_off:false},0).to({alpha:1},9).to({_off:true},167).wait(3994));

	// 女生
	this.instance_126 = new lib.補間動畫18("synched",0);
	this.instance_126.parent = this;
	this.instance_126.setTransform(577.8,811,1.462,1.462);
	this.instance_126._off = true;

	this.instance_127 = new lib.補間動畫19("synched",0);
	this.instance_127.parent = this;
	this.instance_127.setTransform(794.2,786.3,1.462,1.462);
	this.instance_127._off = true;

	this.instance_128 = new lib.補間動畫20("synched",0);
	this.instance_128.parent = this;
	this.instance_128.setTransform(873.3,738.1,1.462,1.462);
	this.instance_128._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_126).wait(505).to({_off:false},0).to({_off:true,x:794.2,y:786.3},16).wait(4209));
	this.timeline.addTween(cjs.Tween.get(this.instance_127).wait(505).to({_off:false},16).to({_off:true,x:873.3,y:738.1},8).wait(4201));
	this.timeline.addTween(cjs.Tween.get(this.instance_128).wait(521).to({_off:false},8).wait(15).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({_off:true},11).wait(166).to({_off:false},0).wait(32).to({startPosition:0},0).to({_off:true},31).wait(3931));

	// 提示2
	this.tip2 = new lib.元件12();
	this.tip2.parent = this;
	this.tip2.setTransform(960.3,638.7,0.238,0.238,0,0,0,475.1,259.9);
	this.tip2._off = true;
	new cjs.ButtonHelper(this.tip2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.tip2).wait(484).to({_off:false},0).to({regX:475,regY:260.1,scaleX:1.46,scaleY:1.46,y:638.8},10).wait(1).to({regX:476.6,regY:262.3,scaleX:0.01,scaleY:0.01,y:638.7},9).to({_off:true},1).wait(4225));

	// 星星2
	this.star2 = new lib.元件5複製();
	this.star2.parent = this;
	this.star2.setTransform(885.1,284.6,1.462,1.462,0,0,0,52.6,-0.3);
	this.star2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.star2).wait(483).to({_off:false},0).to({_off:true},1).wait(4246));

	// 提示1
	this.tip1 = new lib.元件11();
	this.tip1.parent = this;
	this.tip1.setTransform(960.3,616.8,0.304,0.304,0,0,0,475.1,260.1);
	this.tip1._off = true;
	new cjs.ButtonHelper(this.tip1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.tip1).wait(424).to({_off:false},0).to({regX:475,scaleX:1.46,scaleY:1.46,y:616.9},10).wait(1).to({regX:476.6,regY:262.3,scaleX:0.01,scaleY:0.01,y:616.8},9).to({_off:true},1).wait(4285));

	// 星星1
	this.star1 = new lib.元件5();
	this.star1.parent = this;
	this.star1.setTransform(885.1,307.6,1.462,1.462,0,0,0,52.6,51.5);
	this.star1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.star1).wait(421).to({_off:false},0).to({_off:true},1).wait(4308));

	// 男生
	this.instance_129 = new lib.boy();
	this.instance_129.parent = this;
	this.instance_129.setTransform(753,399,1.462,1.462);

	this.instance_130 = new lib.補間動畫14("synched",0);
	this.instance_130.parent = this;
	this.instance_130.setTransform(889.4,691.3,1.462,1.462);
	this.instance_130._off = true;

	this.instance_131 = new lib.補間動畫15("synched",0);
	this.instance_131.parent = this;
	this.instance_131.setTransform(1256.2,691.3,1.462,1.462);
	this.instance_131._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_129}]},388).to({state:[{t:this.instance_130}]},57).to({state:[{t:this.instance_131}]},15).to({state:[{t:this.instance_131}]},12).to({state:[{t:this.instance_131}]},11).to({state:[{t:this.instance_131}]},61).to({state:[{t:this.instance_131}]},10).to({state:[{t:this.instance_131}]},5).to({state:[]},1).wait(4170));
	this.timeline.addTween(cjs.Tween.get(this.instance_130).wait(445).to({_off:false},0).to({_off:true,x:1256.2},15).wait(4270));
	this.timeline.addTween(cjs.Tween.get(this.instance_131).wait(445).to({_off:false},15).to({scaleX:1.24,scaleY:1.24,x:1283.3,y:626},12).to({scaleX:1.08,scaleY:1.08,x:1457.6,y:612.3},11).wait(61).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({_off:true},1).wait(4170));

	// 賓客駕駛到來背景
	this.instance_132 = new lib.bg2();
	this.instance_132.parent = this;
	this.instance_132.setTransform(50,196,1.462,1.462);

	this.instance_133 = new lib.補間動畫21("synched",0);
	this.instance_133.parent = this;
	this.instance_133.setTransform(961.7,621.9,1.462,1.462);

	this.instance_134 = new lib.補間動畫22("synched",0);
	this.instance_134.parent = this;
	this.instance_134.setTransform(961.7,621.9,1.462,1.462);
	this.instance_134._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_132}]},388).to({state:[{t:this.instance_133}]},147).to({state:[{t:this.instance_134}]},9).to({state:[{t:this.instance_134}]},10).to({state:[{t:this.instance_134}]},5).to({state:[]},1).to({state:[{t:this.instance_134}]},176).to({state:[{t:this.instance_134}]},32).to({state:[]},31).wait(3931));
	this.timeline.addTween(cjs.Tween.get(this.instance_134).wait(544).to({_off:false},0).wait(10).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({_off:true},1).wait(176).to({_off:false},0).wait(32).to({startPosition:0},0).to({_off:true},31).wait(3931));

	// 圖層 1 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_535 = new cjs.Graphics().p("EBIbA9yMAAAhc8MBJ2AAAMAAABc8g");
	var mask_6_graphics_736 = new cjs.Graphics().p("EBIbA9yMAAAhc8MBJ2AAAMAAABc8g");
	var mask_6_graphics_778 = new cjs.Graphics().p("EBIbA9yMAAAhc8MBJ2AAAMAAABc8g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(535).to({graphics:mask_6_graphics_535,x:936.1,y:395.4}).wait(25).to({graphics:null,x:0,y:0}).wait(176).to({graphics:mask_6_graphics_736,x:936.1,y:395.4}).wait(42).to({graphics:mask_6_graphics_778,x:936.1,y:395.4}).wait(3952));

	// 右門
	this.instance_135 = new lib.元件15();
	this.instance_135.parent = this;
	this.instance_135.setTransform(1635.5,493.4,1.462,1.462,0,0,0,162,203.6);
	this.instance_135._off = true;

	var maskedShapeInstanceList = [this.instance_135];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_135).wait(535).to({_off:false},0).to({x:2022.2},19).to({_off:true},6).wait(176).to({_off:false},0).wait(29).to({x:1780.2},13).to({x:1636.9},16).to({_off:true},5).wait(3931));

	// 左門
	this.instance_136 = new lib.元件13();
	this.instance_136.parent = this;
	this.instance_136.setTransform(1162.8,493.4,1.462,1.462,0,0,0,162,203.6);
	this.instance_136._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_136).wait(535).to({_off:false},0).to({x:772.2},19).to({_off:true},6).wait(176).to({_off:false},0).wait(29).to({x:1033.5},13).to({x:1163.4},16).to({_off:true},5).wait(3931));

	// 圖層 7 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_388 = new cjs.Graphics().p("EAIEA9jMAAAhceMCGJAAAMAAABceg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(388).to({graphics:mask_7_graphics_388,x:910.1,y:393.9}).wait(4342));

	// 車2
	this.instance_137 = new lib.補間動畫8("synched",0);
	this.instance_137.parent = this;
	this.instance_137.setTransform(2052,542.2,1.462,1.462);
	this.instance_137._off = true;

	this.instance_138 = new lib.補間動畫9("synched",0);
	this.instance_138.parent = this;
	this.instance_138.setTransform(1472.7,542.2,1.462,1.462);
	this.instance_138._off = true;

	var maskedShapeInstanceList = [this.instance_137,this.instance_138];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_137).wait(388).to({_off:false},0).to({x:1734.2},13).to({_off:true,x:1472.7},20).wait(4309));
	this.timeline.addTween(cjs.Tween.get(this.instance_138).wait(401).to({_off:false},20).wait(123).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({_off:true},1).wait(4170));

	// 車
	this.instance_139 = new lib.補間動畫7("synched",0);
	this.instance_139.parent = this;
	this.instance_139.setTransform(342,907.6,1.462,1.462);
	this.instance_139._off = true;

	this.instance_140 = new lib.補間動畫5("synched",0);
	this.instance_140.parent = this;
	this.instance_140.setTransform(1224.6,907.6,1.462,1.462);
	this.instance_140._off = true;

	this.instance_141 = new lib.補間動畫6("synched",0);
	this.instance_141.parent = this;
	this.instance_141.setTransform(1509.4,907.6,1.462,1.462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_139}]},314).to({state:[{t:this.instance_140}]},46).to({state:[{t:this.instance_141}]},27).to({state:[]},1).wait(4342));
	this.timeline.addTween(cjs.Tween.get(this.instance_139).wait(314).to({_off:false},0).to({_off:true,x:1224.6},46).wait(4370));
	this.timeline.addTween(cjs.Tween.get(this.instance_140).wait(314).to({_off:false},46).to({_off:true,x:1509.4},27).wait(4343));

	// 迎賓背景
	this.movieClip_1 = new lib.元件2();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(961.7,622,1.462,1.462,0,0,0,624,291.6);
	this.movieClip_1.alpha = 0.34;
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(272).to({_off:false},0).to({alpha:1},42).to({_off:true},74).wait(4342));

	// 圖層 37
	this.e04 = new lib.e04();
	this.e04.parent = this;
	this.e04.setTransform(1779.6,136.4,1.7,1.7);
	this.e04._off = true;
	new cjs.ButtonHelper(this.e04, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.e04).wait(4729).to({_off:false},0).wait(1));

	// 圖層 36
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2},{t:this.chp3},{t:this.chp11},{t:this.chp12},{t:this.chp21},{t:this.chp22},{t:this.chp111},{t:this.chp112},{t:this.chp31},{t:this.chp32},{t:this.chp33},{t:this.chp34},{t:this.chp35},{t:this.chp121},{t:this.chp122},{t:this.chp1}]},4729).wait(1));

	// 底圖
	this.instance_142 = new lib.元件1();
	this.instance_142.parent = this;
	this.instance_142.setTransform(959.8,540.5,1.462,1.462,0,0,0,656.7,369.8);
	this.instance_142.alpha = 0.34;
	this.instance_142._off = true;

	this.instance_143 = new lib.現在位置_1();
	this.instance_143.parent = this;
	this.instance_143.setTransform(959.3,542,1.477,1.477,0,0,0,0,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_142}]},272).to({state:[{t:this.instance_142}]},9).to({state:[{t:this.instance_142}]},3).to({state:[{t:this.instance_142}]},411).to({state:[{t:this.instance_142}]},455).to({state:[{t:this.instance_142}]},184).to({state:[{t:this.instance_142}]},835).to({state:[{t:this.instance_142}]},1625).to({state:[{t:this.instance_142}]},780).to({state:[{t:this.instance_142}]},151).to({state:[]},1).to({state:[{t:this.instance_142},{t:this.instance_143}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_142).wait(272).to({_off:false},0).to({alpha:1},9).wait(4444).to({_off:true},1).wait(3).to({_off:false},0).wait(1));

	// xx
	this.goooooo = new lib.x_1();
	this.goooooo.parent = this;
	this.goooooo.setTransform(1676.1,285.1,1.7,1.7);
	this.goooooo._off = true;
	new cjs.ButtonHelper(this.goooooo, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.goooooo).wait(263).to({_off:false},0).to({_off:true},9).wait(4458));

	// hint
	this.instance_144 = new lib.hint();
	this.instance_144.parent = this;
	this.instance_144.setTransform(1580.4,268,0.248,0.248);
	this.instance_144._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_144).wait(232).to({_off:false},0).to({scaleX:1.46,scaleY:1.46,x:960.7,y:547.5},6).wait(26).to({scaleX:0.25,scaleY:0.25,x:1580.4,y:268},7).to({_off:true},1).wait(4458));

	// 圖層 18
	this.movieClip_1_1 = new lib.元件2();
	this.movieClip_1_1.parent = this;
	this.movieClip_1_1.setTransform(961.7,622,1.462,1.462,0,0,0,624,291.6);
	this.movieClip_1_1.alpha = 0.34;

	this.instance_145 = new lib.元件1();
	this.instance_145.parent = this;
	this.instance_145.setTransform(959.8,540.5,1.462,1.462,0,0,0,656.7,369.8);
	this.instance_145.alpha = 0.34;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_145},{t:this.movieClip_1_1}]},232).to({state:[{t:this.instance_145},{t:this.movieClip_1_1}]},39).to({state:[]},1).wait(4458));

	// 下一頁
	this.nissannext = new lib.nissannext();
	this.nissannext.parent = this;
	this.nissannext.setTransform(1764.2,1030.9,1.462,1.462,0,0,0,100.1,25.6);
	this.nissannext._off = true;
	new cjs.ButtonHelper(this.nissannext, 0, 1, 2, false, new lib.nissannext(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nissannext).wait(229).to({_off:false},0).wait(2).to({_off:true},1).wait(4498));

	// 迎賓前2
	this.nissan2 = new lib.nissan2();
	this.nissan2.parent = this;
	this.nissan2.setTransform(961.7,541.6,1.462,1.462,0,0,0,657.1,370.2);
	this.nissan2.alpha = 0.5;
	this.nissan2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissan2).wait(113).to({_off:false},0).to({alpha:0.949},19).to({alpha:1},2).wait(97).to({_off:true},1).wait(4498));

	// 迎賓前
	this.nissan1 = new lib.nissan1();
	this.nissan1.parent = this;
	this.nissan1.setTransform(961.7,541.6,1.462,1.462,0,0,0,657.1,370.2);
	this.nissan1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.nissan1).to({alpha:1},23).wait(89).to({_off:true},1).wait(4617));

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
		{src:"images/chpca_atlas_.png", id:"chpca_atlas_"},
		{src:"sounds/_31.mp3", id:"_31"},
		{src:"sounds/_312.mp3", id:"_312"},
		{src:"sounds/_313.mp3", id:"_313"},
		{src:"sounds/_314.mp3", id:"_314"},
		{src:"sounds/_315.mp3", id:"_315"},
		{src:"sounds/_316.mp3", id:"_316"},
		{src:"sounds/_317.mp3", id:"_317"},
		{src:"sounds/_318.mp3", id:"_318"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;