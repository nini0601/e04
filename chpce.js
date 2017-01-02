(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"chpce_atlas_", frames: [[1316,1424,380,51],[2114,5031,1053,192],[2114,4837,1053,192],[2114,5225,1053,192],[3980,2183,106,104],[3539,3901,200,51],[3169,5300,558,102],[3781,5059,213,36],[0,742,1314,740],[3169,5092,561,102],[1651,4779,398,35],[1055,5968,1053,135],[2110,6241,1053,135],[2110,6104,1053,135],[1055,5694,1053,135],[0,5831,1053,135],[2110,5830,1053,135],[1055,6790,1053,135],[0,6242,1053,135],[0,6379,1053,135],[1055,6653,1053,135],[3539,3667,161,154],[1055,6242,1053,135],[2500,1565,55,87],[0,3239,1248,583],[1250,3239,1248,583],[1250,2654,1248,583],[1055,6379,1053,135],[1055,5831,1053,135],[2110,5967,1053,135],[0,6105,1053,135],[0,2069,1248,583],[2500,2497,1248,583],[2500,1912,1248,583],[0,6790,1053,135],[0,5968,1053,135],[2110,6789,1053,135],[2110,6378,1053,135],[2500,1476,55,87],[0,4994,610,157],[3169,4933,610,157],[3808,742,241,492],[3750,2649,223,455],[3750,3106,219,460],[3750,3568,201,426],[3539,4099,508,85],[1250,2069,1248,583],[2078,3897,245,70],[1055,6105,1053,135],[0,2654,1248,583],[2078,4252,1037,583],[2500,3082,1248,583],[1250,1484,1248,583],[2110,6515,1053,135],[0,6516,1053,135],[1055,6516,1053,135],[2110,6652,1053,135],[0,6653,1053,135],[0,4409,1037,583],[0,6927,1053,135],[2110,6926,1053,135],[1055,6927,1053,135],[1039,4409,766,254],[0,5153,560,102],[562,5153,436,36],[3169,5196,560,102],[3539,4186,473,35],[3808,1703,228,478],[3750,2183,228,464],[2110,5693,1053,135],[1055,5557,1053,135],[1039,3824,1037,583],[1698,1424,510,36],[3539,3996,435,101],[0,5694,1053,135],[0,5557,1053,135],[612,4994,361,37],[3976,2771,120,61],[0,5283,1053,135],[1807,4409,223,68],[2632,0,1314,740],[1316,0,1314,740],[0,0,1314,740],[3539,3823,195,76],[0,5420,1053,135],[2558,742,1248,583],[1055,5283,1053,135],[1055,5420,1053,135],[3808,1236,236,465],[3980,2535,95,59],[4046,1288,50,50],[0,1484,1248,583],[2210,1424,320,50],[4046,1236,50,50],[2500,3667,1037,583],[1039,4837,1073,444],[3169,4774,610,157],[2110,5556,1053,135],[0,3824,1037,583],[2110,5419,1053,135],[1039,4665,610,157],[2078,3824,244,71],[3980,2453,80,80],[3117,4252,950,520],[3976,2649,120,120],[3948,0,120,120],[3948,610,120,120],[3980,2289,80,80],[3948,488,120,120],[3948,122,120,120],[3948,366,120,120],[3781,5002,220,55],[3781,4831,220,55],[3781,4774,220,55],[1807,4548,220,55],[1807,4605,220,55],[612,5033,220,55],[1651,4665,280,55],[3781,4945,220,55],[3781,4888,220,55],[1651,4722,280,55],[2078,4021,320,50],[2078,3969,320,50],[2078,4073,320,50],[2078,4125,320,50],[2078,4177,280,55],[1316,742,1240,680],[1807,4479,221,67],[2558,1327,1248,583],[3980,2371,80,80],[3948,244,120,120]]}
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



(lib.紅茶 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.對話1 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.對話2 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.對話3 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.星星 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._101n2 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._33提示 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.aa = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.aaa = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ab = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ac = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.ad = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.af = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.ag = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.ba = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.bb = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.bbb = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.bbq = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.bc = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.bfd = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.bg3 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.bq = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.ca = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.cb = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.cc = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.ccc = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.comeonbitch = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.comeonbitchpng複製 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.cq = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.da = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.db = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.dc = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.ddd = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.ee = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.框 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.框2 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.familymanc = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.familymancpng複製 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.familywomanc = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.familywomancpng複製 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.ff = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.fq = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.fu = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.fz = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.ggg = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hf = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hhh = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hjhj = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.ja = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.jb = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.jc = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.jd = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.je = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.jj = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.k = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.kk = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.kkk = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.桌 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.lg = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.lh = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.lj = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.lk = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.manc = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.mancpng複製 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.mm = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.nn = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.pg = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.pi = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.po = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.pp = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.ppo = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.pu = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.r1 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.rrr = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.ss = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.U35BG = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.U35學習目標1 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.U35學習目標2 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.uiuiu = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.uy = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.wa = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.wb = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.wc = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.womancr = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.www = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.x = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.數位科技區 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.數位科技體驗區 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.xx = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.y = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.yt = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.yy = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.za = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.zb = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.zx = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.zz = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.zzz = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.提示 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.提示_1 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.提示w = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.提示x = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.提示xw = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.現在位置w = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.現在位置x = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.現在位置xw = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0000_創新歷程 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0001_創立理念 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0002_心路歷程 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0003_核心人物 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0004_納智捷汽車 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0005_裕隆集團 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0000s_0006_CH1公司歷程 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0000_女生服裝 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0001_男生服裝 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0001s_0002_CH2服裝儀容 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0001_AR實車賞車 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0002_ThinkTouch = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0003_3D體驗劇場 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0004_迎賓區 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.課程地圖_0002s_0005_CH3銷售SOP = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.跨殺小啦 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.車種 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.銷輔螢幕畫面 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.首頁w = function() {
	this.spriteSheet = ss["chpce_atlas_"];
	this.gotoAndStop(130);
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


(lib.補間動畫20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bfd();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-43.5,55,87);


(lib.補間動畫19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bfd();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-43.5,55,87);


(lib.補間動畫18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bfd();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-43.5,55,87);


(lib.補間動畫17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ff();
	this.instance.parent = this;
	this.instance.setTransform(-254,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254,-42.5,508,85);


(lib.補間動畫16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ff();
	this.instance.parent = this;
	this.instance.setTransform(-254,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254,-42.5,508,85);


(lib.補間動畫14複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.zx();
	this.instance.parent = this;
	this.instance.setTransform(-526.5,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-526.5,-67.5,1053,135);


(lib.補間動畫14複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.uy();
	this.instance.parent = this;
	this.instance.setTransform(-526.5,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-526.5,-67.5,1053,135);


(lib.補間動畫14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.nn();
	this.instance.parent = this;
	this.instance.setTransform(-526.5,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-526.5,-67.5,1053,135);


(lib.補間動畫13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ee();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-43.5,55,87);


(lib.補間動畫12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ee();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-43.5,55,87);


(lib.補間動畫11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ee();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-43.5,55,87);


(lib.補間動畫7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.www();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-29.5,95,59);


(lib.補間動畫6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.www();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-29.5,95,59);


(lib.補間動畫5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.www();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-29.5,95,59);


(lib.補間動畫4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.familywomancpng複製();
	this.instance.parent = this;
	this.instance.setTransform(-269,-198.5);

	this.instance_1 = new lib.familymancpng複製();
	this.instance_1.parent = this;
	this.instance_1.setTransform(46,-227.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269,-227.5,538,455);


(lib.補間動畫3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.familywomancpng複製();
	this.instance.parent = this;
	this.instance.setTransform(-269,-198.5);

	this.instance_1 = new lib.familymancpng複製();
	this.instance_1.parent = this;
	this.instance_1.setTransform(46,-227.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269,-227.5,538,455);


(lib.補間動畫2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.familymanc();
	this.instance.parent = this;
	this.instance.setTransform(-46,-246,1.081,1.081);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-195,-214,1.09,1.08);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,-246,390,492);


(lib.補間動畫1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.familymanc();
	this.instance.parent = this;
	this.instance.setTransform(-46,-246,1.081,1.081);

	this.instance_1 = new lib.familywomanc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-195,-214,1.09,1.08);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,-246,390,492);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bbq();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161,154);


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.yt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件27, new cjs.Rectangle(0,0,1073,444), null);


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.fu();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,70);


(lib.元件25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提示_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件25, new cjs.Rectangle(0,0,950,520), null);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.星星();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件24, new cjs.Rectangle(0,0,106,104), null);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.uiuiu();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件21, new cjs.Rectangle(0,0,195,76), null);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ss();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,68);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.車種();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,67);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.zzz();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244,71);


(lib.元件14複製14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.comeonbitchpng複製();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14複製14, new cjs.Rectangle(0,0,1248,583), null);


(lib.元件14複製13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.wa();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14複製13, new cjs.Rectangle(0,0,1248,583), null);


(lib.元件14複製12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.hjhj();
	this.instance.parent = this;
	this.instance.setTransform(-4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14複製12, new cjs.Rectangle(-4,0,1248,583), null);


(lib.元件14複製11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.fq();
	this.instance.parent = this;
	this.instance.setTransform(-4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14複製11, new cjs.Rectangle(-4,0,1248,583), null);


(lib.元件14複製10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.cq();
	this.instance.parent = this;
	this.instance.setTransform(-4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14複製10, new cjs.Rectangle(-4,0,1248,583), null);


(lib.元件14複製9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bq();
	this.instance.parent = this;
	this.instance.setTransform(-4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14複製9, new cjs.Rectangle(-4,0,1248,583), null);


(lib.元件14複製8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.pg();
	this.instance.parent = this;
	this.instance.setTransform(110,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14複製8, new cjs.Rectangle(110,0,1037,583), null);


(lib.元件14複製7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.zb();
	this.instance.parent = this;
	this.instance.setTransform(110,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14複製7, new cjs.Rectangle(110,0,1037,583), null);


(lib.元件14複製6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.hf();
	this.instance.parent = this;
	this.instance.setTransform(110,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14複製6, new cjs.Rectangle(110,0,1037,583), null);


(lib.元件14複製5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.jj();
	this.instance.parent = this;
	this.instance.setTransform(110,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14複製5, new cjs.Rectangle(110,0,1037,583), null);


(lib.元件14複製3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.y();
	this.instance.parent = this;
	this.instance.setTransform(120,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14複製3, new cjs.Rectangle(120,0,1037,583), null);


(lib.元件14複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ggg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14複製2, new cjs.Rectangle(0,0,1248,583), null);


(lib.元件14複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.hhh();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14複製, new cjs.Rectangle(0,0,1248,583), null);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ggg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(0,0,1248,583), null);


(lib.元件13複製7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.k();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13複製7, new cjs.Rectangle(0,0,1053,135), null);


(lib.元件13複製6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.kk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13複製6, new cjs.Rectangle(0,0,1053,135), null);


(lib.元件13複製5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.kkk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13複製5, new cjs.Rectangle(0,0,1053,135), null);


(lib.元件13複製4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.rrr();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13複製4, new cjs.Rectangle(0,0,1053,135), null);


(lib.元件13複製3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ddd();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13複製3, new cjs.Rectangle(0,0,1053,135), null);


(lib.元件13複製2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ccc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13複製2, new cjs.Rectangle(0,0,1053,135), null);


(lib.元件13複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bbb();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13複製, new cjs.Rectangle(0,0,1053,135), null);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.aaa();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(0,0,1053,135), null);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.銷輔螢幕畫面();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(0,0,1248,583), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(0,0,558,102), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.comeonbitch();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(0,0,1248,583), null);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mancpng複製();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(0,0,228,464), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.紅茶();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(0,0,380,51), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.對話3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.womancr();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,236,465), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.對話2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.對話1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,1053,192), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.manc();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1.03);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,228,478), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U35BG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,1314,740), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.數位科技區();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,1248,583), null);


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
	this.instance = new lib._33提示();
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
	this.instance = new lib.數位科技體驗區();
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
	this.instance = new lib.U35學習目標2();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan2, new cjs.Rectangle(0,1,1314,740), null);


(lib.nissan1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.U35學習目標1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nissan1, new cjs.Rectangle(0,0,1314,740), null);


(lib.補間動畫17複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-279.5,-67.5);

	this.instance_1 = new lib.補間動畫19("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-279.5,-55.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫20("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-279.5,-67.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},17).to({state:[{t:this.instance_2}]},18).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-55.5},17).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},17).to({_off:true,y:-67.5},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307,-111,55,87);


(lib.元件23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_50 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(1));

	// 圖層 1
	this.instance = new lib.元件24();
	this.instance.parent = this;
	this.instance.setTransform(53.2,65.2,1.001,1,0,0,0,53,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:74.5},0).wait(1).to({scaleX:1,y:84.2},0).wait(1).to({y:94.3},0).wait(1).to({y:104.8},0).wait(1).to({x:53.1,y:115.6},0).wait(1).to({x:53.2,y:126.8},0).wait(1).to({y:138.4},0).wait(1).to({x:53.1,y:150.4},0).wait(1).to({y:162.7},0).wait(1).to({y:175.5},0).wait(1).to({y:188.6},0).wait(1).to({scaleX:1.81,scaleY:0.64,x:53.2,y:202.1},0).wait(1).to({scaleX:1.91,scaleY:0.6,y:183.1},0).wait(1).to({scaleX:1.81,scaleY:0.64,y:166.3},0).wait(1).to({scaleX:1,scaleY:1,x:53.1,y:151.7},0).wait(1).to({y:139.4},0).wait(1).to({x:53.2,y:129.4},0).wait(1).to({y:121.5},0).wait(1).to({y:115.9},0).wait(1).to({scaleX:1,x:53.1,y:112.6},0).wait(1).to({y:111.4},0).wait(1).to({y:112.6},0).wait(1).to({y:115.9},0).wait(1).to({x:53.2,y:121.5},0).wait(1).to({y:129.4},0).wait(1).to({y:139.4},0).wait(1).to({scaleX:1,x:53.1,y:151.7},0).wait(1).to({y:166.3},0).wait(1).to({y:183.1},0).wait(1).to({y:202.1},0).wait(1).to({regY:103.6,scaleX:1.63,scaleY:0.78,x:53.2,y:192},0).wait(1).to({scaleX:1.71,scaleY:0.75,y:183.7},0).wait(1).to({regY:103.5,scaleX:1.63,scaleY:0.78,y:177.1},0).wait(1).to({scaleX:1,scaleY:1,x:53.1,y:172.5},0).wait(1).to({y:169.7},0).wait(1).to({y:168.8},0).wait(1).to({y:169.7},0).wait(1).to({y:172.5},0).wait(1).to({y:177.1},0).wait(1).to({y:183.6},0).wait(1).to({y:191.9},0).wait(1).to({y:202.1},0).wait(1).to({scaleX:1.5,scaleY:0.8,y:196.8},0).wait(1).to({scaleX:1,scaleY:1,y:192.9},0).wait(1).to({y:190.6},0).wait(1).to({y:189.8},0).wait(1).to({y:190.6},0).wait(1).to({y:192.9},0).wait(1).to({y:196.7},0).wait(1).to({y:202.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-38.3,106.2,104);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件23();
	this.instance.parent = this;
	this.instance.setTransform(53,-102.5,1,1,0,0,0,53.1,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-154.5,106.2,104);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(27.5,43.5);

	this.instance_1 = new lib.補間動畫12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.5,63.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫13("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(27.5,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},17).to({state:[{t:this.instance_2}]},16).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:63.5},17).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},17).to({_off:true,y:43.5},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,87);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(47.5,29.5);

	this.instance_1 = new lib.補間動畫6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.5,29.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},18).to({state:[{t:this.instance_2}]},16).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:15.5},18).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},18).to({_off:true,x:47.5},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95,59);


// stage content:
(lib._35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		playSound("_351");
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
	}
	this.frame_223 = function() {
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
			this.gotoAndStop(5329);
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
		
		this.gogoooo.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
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
		
		this.hint.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
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
		
		
		this.local.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop(5329);
		}
	}
	this.frame_344 = function() {
		playSound("_352");
	}
	this.frame_1464 = function() {
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
		
		this.aaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(1465);
		}
	}
	this.frame_1480 = function() {
		playSound("_353");
	}
	this.frame_1887 = function() {
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
		
		this.io.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(1888);
		}
	}
	this.frame_1904 = function() {
		playSound("_354");
	}
	this.frame_2239 = function() {
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
		
		this.lp.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(2240);
		}
	}
	this.frame_2264 = function() {
		playSound("_355");
	}
	this.frame_2751 = function() {
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
		
		this.tree.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay(2752);
		}
	}
	this.frame_2763 = function() {
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
		
		this.qwewqe.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(2764);
		}
	}
	this.frame_2778 = function() {
		playSound("_356");
	}
	this.frame_4142 = function() {
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
		
		this.lkjhbv.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(4143);
		}
	}
	this.frame_4146 = function() {
		playSound("_357");
	}
	this.frame_5327 = function() {
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
		
		this.liars.addEventListener("click", fl_ClickToGoToWebPage);
		
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
		
		
		this.local.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop(5334);
		}
	}
	this.frame_5329 = function() {
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
		
		this.chp32.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("chpcb.html", "_self");
		}
	}
	this.frame_5334 = function() {
		/* 按一下前往影格並停止
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並停止影片。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.gg.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(5327);
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
			window.open("chpcb", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(45).call(this.frame_54).wait(168).call(this.frame_222).wait(1).call(this.frame_223).wait(26).call(this.frame_249).wait(95).call(this.frame_344).wait(1120).call(this.frame_1464).wait(16).call(this.frame_1480).wait(407).call(this.frame_1887).wait(17).call(this.frame_1904).wait(335).call(this.frame_2239).wait(25).call(this.frame_2264).wait(487).call(this.frame_2751).wait(12).call(this.frame_2763).wait(15).call(this.frame_2778).wait(1364).call(this.frame_4142).wait(4).call(this.frame_4146).wait(1181).call(this.frame_5327).wait(2).call(this.frame_5329).wait(5).call(this.frame_5334).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},54).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},168).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local}]},26).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},9).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1206).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},423).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},352).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},512).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},12).to({state:[{t:this.home},{t:this.instance_1},{t:this.instance}]},1379).to({state:[{t:this.home},{t:this.local},{t:this.instance_1}]},1185).to({state:[]},1).wait(7));

	// 圖層 19
	this.instance_2 = new lib.元件16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1656.4,450.8,1.461,1.461,0,0,0,47.6,29.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1464).to({_off:false},0).to({_off:true},1).wait(3870));

	// 圖層 18
	this.aaa = new lib.元件15();
	this.aaa.parent = this;
	this.aaa.setTransform(1344.3,459.5,1.461,1.461,0,0,0,122,35.5);
	this.aaa._off = true;
	new cjs.ButtonHelper(this.aaa, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.aaa).wait(1464).to({_off:false},0).to({_off:true},1).wait(3870));

	// 圖層 21
	this.qwewqe = new lib.元件25();
	this.qwewqe.parent = this;
	this.qwewqe.setTransform(960,621.1,0.442,0.442,0,0,0,475.1,260.2);
	this.qwewqe._off = true;
	new cjs.ButtonHelper(this.qwewqe, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qwewqe).wait(2752).to({_off:false},0).to({regY:260.1,scaleX:1.46,scaleY:1.46,x:960.1},11).to({regX:475.7,regY:260.4,scaleX:0.06,scaleY:0.06,y:621},11).to({_off:true},1).wait(2560));

	// 圖層 20
	this.instance_3 = new lib.元件18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(374.8,873.2,1.461,1.461,0,0,0,27.5,43.6);

	this.instance_4 = new lib.補間動畫16("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(989.2,950.5,1.461,1.461);
	this.instance_4.alpha = 0.379;
	this.instance_4._off = true;

	this.instance_5 = new lib.補間動畫17("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(989.2,950.5,1.461,1.461);

	this.instance_6 = new lib.補間動畫17複製("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(989.2,950.5,1.461,1.461);

	this.instance_7 = new lib.元件21();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1007.5,945.4,1.461,1.461,0,0,0,97.5,38);
	this.instance_7.alpha = 0.379;
	this.instance_7._off = true;

	this.tree = new lib.元件22();
	this.tree.parent = this;
	this.tree.setTransform(197.3,759.8,1.461,1.461,0,0,0,53,52);
	new cjs.ButtonHelper(this.tree, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3,p:{x:374.8}}]},1645).to({state:[{t:this.instance_3,p:{x:255.9}}]},128).to({state:[]},103).to({state:[{t:this.instance_4}]},135).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},99).to({state:[]},114).to({state:[{t:this.instance_7}]},420).to({state:[{t:this.instance_7}]},14).to({state:[{t:this.instance_7},{t:this.tree}]},88).to({state:[]},1).wait(2583));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2011).to({_off:false},0).to({_off:true,alpha:1},5).wait(3319));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2649).to({_off:false},0).to({alpha:1},14).wait(88).to({_off:true},1).wait(2583));

	// 圖層 4
	this.liars = new lib.元件28();
	this.liars.parent = this;
	this.liars.setTransform(1564.4,800,1.461,1.461,0,0,0,80.5,77);
	this.liars._off = true;
	new cjs.ButtonHelper(this.liars, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.liars).wait(5327).to({_off:false},0).to({_off:true},1).wait(7));

	// 對話
	this.instance_8 = new lib.元件13();
	this.instance_8.parent = this;
	this.instance_8.setTransform(975.3,924.2,1.461,1.461,0,0,0,526.5,67.5);

	this.instance_9 = new lib.元件13複製();
	this.instance_9.parent = this;
	this.instance_9.setTransform(975.3,924.2,1.461,1.461,0,0,0,526.5,67.5);

	this.instance_10 = new lib.元件13複製2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(975.3,924.2,1.461,1.461,0,0,0,526.5,67.5);
	this.instance_10._off = true;

	this.instance_11 = new lib.元件13複製3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(975.3,924.2,1.461,1.461,0,0,0,526.5,67.5);

	this.instance_12 = new lib.元件13複製4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(975.3,924.2,1.461,1.461,0,0,0,526.5,67.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.元件13複製5();
	this.instance_13.parent = this;
	this.instance_13.setTransform(975.3,924.2,1.461,1.461,0,0,0,526.5,67.5);

	this.instance_14 = new lib.元件13複製6();
	this.instance_14.parent = this;
	this.instance_14.setTransform(960.6,316.2,1.461,1.461,0,0,0,526.5,67.5);

	this.instance_15 = new lib.元件13複製7();
	this.instance_15.parent = this;
	this.instance_15.setTransform(960.6,316.2,1.461,1.461,0,0,0,526.5,67.5);

	this.io = new lib.元件19();
	this.io.parent = this;
	this.io.setTransform(1390.3,558.9,1.461,1.461,0,0,0,110.5,33.5);
	new cjs.ButtonHelper(this.io, 0, 1, 1);

	this.instance_16 = new lib.元件16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1688.5,564,1.461,1.461,0,0,0,47.6,29.5);

	this.instance_17 = new lib.pp();
	this.instance_17.parent = this;
	this.instance_17.setTransform(190,839,1.461,1.461);

	this.instance_18 = new lib.補間動畫14("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(982.6,935.9,1.461,1.461);

	this.instance_19 = new lib.補間動畫14複製("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(982.6,935.9,1.461,1.461);
	this.instance_19._off = true;

	this.instance_20 = new lib.補間動畫14複製2("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(982.6,706.8,1.461,1.461);

	this.lp = new lib.元件20();
	this.lp.parent = this;
	this.lp.setTransform(1390.3,657.6,1.461,1.461,0,0,0,111.5,34);
	new cjs.ButtonHelper(this.lp, 0, 1, 1);

	this.instance_21 = new lib.mm();
	this.instance_21.parent = this;
	this.instance_21.setTransform(190,830,1.461,1.461);

	this.instance_22 = new lib.ja();
	this.instance_22.parent = this;
	this.instance_22.setTransform(203,850,1.461,1.461);

	this.instance_23 = new lib.jb();
	this.instance_23.parent = this;
	this.instance_23.setTransform(203,850,1.461,1.461);

	this.instance_24 = new lib.jc();
	this.instance_24.parent = this;
	this.instance_24.setTransform(203,850,1.461,1.461);

	this.instance_25 = new lib.jd();
	this.instance_25.parent = this;
	this.instance_25.setTransform(203,207,1.461,1.461);

	this.instance_26 = new lib.je();
	this.instance_26.parent = this;
	this.instance_26.setTransform(203,210,1.461,1.461);

	this.instance_27 = new lib.ppo();
	this.instance_27.parent = this;
	this.instance_27.setTransform(187,831,1.461,1.461);

	this.instance_28 = new lib.za();
	this.instance_28.parent = this;
	this.instance_28.setTransform(187,831,1.461,1.461);

	this.instance_29 = new lib.aa();
	this.instance_29.parent = this;
	this.instance_29.setTransform(187,831,1.461,1.461);

	this.instance_30 = new lib.ab();
	this.instance_30.parent = this;
	this.instance_30.setTransform(187,213,1.461,1.461);

	this.instance_31 = new lib.ac();
	this.instance_31.parent = this;
	this.instance_31.setTransform(187,216,1.461,1.461);

	this.instance_32 = new lib.ad();
	this.instance_32.parent = this;
	this.instance_32.setTransform(187,216,1.461,1.461);

	this.instance_33 = new lib.r1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(1116,909,1.461,1.461);

	this.instance_34 = new lib.af();
	this.instance_34.parent = this;
	this.instance_34.setTransform(187,221,1.461,1.461);

	this.instance_35 = new lib.ag();
	this.instance_35.parent = this;
	this.instance_35.setTransform(187,221,1.461,1.461);

	this.instance_36 = new lib.ba();
	this.instance_36.parent = this;
	this.instance_36.setTransform(188,821,1.461,1.461);

	this.instance_37 = new lib.bb();
	this.instance_37.parent = this;
	this.instance_37.setTransform(188,821,1.461,1.461);

	this.instance_38 = new lib.bc();
	this.instance_38.parent = this;
	this.instance_38.setTransform(188,821,1.461,1.461);

	this.instance_39 = new lib.ca();
	this.instance_39.parent = this;
	this.instance_39.setTransform(188,821,1.461,1.461);

	this.instance_40 = new lib.cb();
	this.instance_40.parent = this;
	this.instance_40.setTransform(188,821,1.461,1.461);

	this.instance_41 = new lib.cc();
	this.instance_41.parent = this;
	this.instance_41.setTransform(188,821,1.461,1.461);

	this.lkjhbv = new lib.元件26();
	this.lkjhbv.parent = this;
	this.lkjhbv.setTransform(1340.8,755.6,1.461,1.461,0,0,0,122.6,35.1);
	new cjs.ButtonHelper(this.lkjhbv, 0, 1, 1);

	this.instance_42 = new lib.fz();
	this.instance_42.parent = this;
	this.instance_42.setTransform(190,826,1.461,1.461);

	this.instance_43 = new lib.da();
	this.instance_43.parent = this;
	this.instance_43.setTransform(190,826,1.461,1.461);

	this.instance_44 = new lib.db();
	this.instance_44.parent = this;
	this.instance_44.setTransform(190,826,1.461,1.461);

	this.instance_45 = new lib.dc();
	this.instance_45.parent = this;
	this.instance_45.setTransform(190,826,1.461,1.461);

	this.instance_46 = new lib.wb();
	this.instance_46.parent = this;
	this.instance_46.setTransform(190,826,1.461,1.461);

	this.instance_47 = new lib.wc();
	this.instance_47.parent = this;
	this.instance_47.setTransform(190,826,1.461,1.461);

	this.instance_48 = new lib.lk();
	this.instance_48.parent = this;
	this.instance_48.setTransform(105,852,1.461,1.461);

	this.instance_49 = new lib.lj();
	this.instance_49.parent = this;
	this.instance_49.setTransform(89,837,1.461,1.461);

	this.instance_50 = new lib.po();
	this.instance_50.parent = this;
	this.instance_50.setTransform(1024,839,1.461,1.461);

	this.instance_51 = new lib.pi();
	this.instance_51.parent = this;
	this.instance_51.setTransform(1024,839,1.461,1.461);

	this.instance_52 = new lib.lh();
	this.instance_52.parent = this;
	this.instance_52.setTransform(110,839,1.461,1.461);

	this.instance_53 = new lib.lg();
	this.instance_53.parent = this;
	this.instance_53.setTransform(98,839,1.461,1.461);

	this.instance_54 = new lib.pu();
	this.instance_54.parent = this;
	this.instance_54.setTransform(1056,839,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},1156).to({state:[{t:this.instance_9}]},62).to({state:[{t:this.instance_10}]},103).to({state:[{t:this.instance_10}]},117).to({state:[{t:this.instance_10}]},11).to({state:[{t:this.instance_11}]},15).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},9).to({state:[{t:this.instance_13}]},62).to({state:[{t:this.instance_14}]},109).to({state:[{t:this.instance_15}]},128).to({state:[]},103).to({state:[{t:this.instance_17},{t:this.instance_16,p:{x:1688.5,y:564}},{t:this.io}]},11).to({state:[]},1).to({state:[{t:this.instance_18}]},10).to({state:[{t:this.instance_19}]},106).to({state:[{t:this.instance_19}]},7).to({state:[{t:this.instance_20}]},104).to({state:[]},114).to({state:[{t:this.instance_21},{t:this.lp},{t:this.instance_16,p:{x:1681.9,y:651}}]},10).to({state:[]},1).to({state:[{t:this.instance_22}]},10).to({state:[{t:this.instance_23}]},102).to({state:[{t:this.instance_24}]},154).to({state:[{t:this.instance_25}]},71).to({state:[{t:this.instance_26}]},72).to({state:[{t:this.instance_26}]},102).to({state:[]},1).to({state:[{t:this.instance_27}]},23).to({state:[{t:this.instance_28}]},85).to({state:[{t:this.instance_28}]},106).to({state:[{t:this.instance_29}]},7).to({state:[{t:this.instance_30}]},65).to({state:[{t:this.instance_31}]},116).to({state:[{t:this.instance_32}]},114).to({state:[{t:this.instance_34},{t:this.instance_33,p:{x:1116}}]},158).to({state:[{t:this.instance_35},{t:this.instance_33,p:{x:963}}]},91).to({state:[{t:this.instance_35},{t:this.instance_33,p:{x:963}}]},98).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},63).to({state:[{t:this.instance_38}]},127).to({state:[{t:this.instance_39}]},105).to({state:[{t:this.instance_40}]},59).to({state:[{t:this.instance_41}]},89).to({state:[]},74).to({state:[{t:this.instance_42},{t:this.instance_16,p:{x:1688.5,y:755.2}},{t:this.lkjhbv}]},9).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},106).to({state:[{t:this.instance_45}]},42).to({state:[{t:this.instance_46}]},133).to({state:[{t:this.instance_47}]},107).to({state:[]},83).to({state:[{t:this.instance_48}]},13).to({state:[{t:this.instance_49}]},61).to({state:[{t:this.instance_49},{t:this.instance_50}]},148).to({state:[{t:this.instance_49},{t:this.instance_51}]},127).to({state:[{t:this.instance_52},{t:this.instance_51}]},91).to({state:[{t:this.instance_53},{t:this.instance_51}]},63).to({state:[{t:this.instance_53},{t:this.instance_54}]},131).to({state:[{t:this.instance_53},{t:this.instance_54}]},66).to({state:[]},1).to({state:[]},13).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1321).to({_off:false},0).wait(117).to({alpha:0},11).to({_off:true},15).wait(3871));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1465).to({_off:false},0).to({alpha:1},9).to({_off:true},62).wait(3799));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(2004).to({_off:false},0).to({y:706.8},7).to({_off:true},104).wait(3220));

	// 圖層 22
	this.instance_55 = new lib.yy();
	this.instance_55.parent = this;
	this.instance_55.setTransform(972,796,1.461,1.461);

	this.instance_56 = new lib.zz();
	this.instance_56.parent = this;
	this.instance_56.setTransform(54,796,1.461,1.461);

	this.instance_57 = new lib.元件27();
	this.instance_57.parent = this;
	this.instance_57.setTransform(985.5,629.8,1.461,1.461,0,0,0,536.5,222);
	this.instance_57.alpha = 0.398;
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_56},{t:this.instance_55}]},4627).to({state:[{t:this.instance_57}]},688).to({state:[{t:this.instance_57}]},12).to({state:[]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(5315).to({_off:false},0).to({alpha:1},12).to({_off:true},1).wait(7));

	// 圖層 16
	this.instance_58 = new lib.元件12();
	this.instance_58.parent = this;
	this.instance_58.setTransform(961.4,618.8,1.461,1.461,0,0,0,624,291.5);
	this.instance_58.alpha = 0.43;
	this.instance_58._off = true;

	this.instance_59 = new lib.元件14();
	this.instance_59.parent = this;
	this.instance_59.setTransform(960,623.2,1.461,1.461,0,0,0,624,291.5);
	this.instance_59.alpha = 0.32;
	this.instance_59._off = true;

	this.instance_60 = new lib.元件14複製();
	this.instance_60.parent = this;
	this.instance_60.setTransform(960,623.2,1.461,1.461,0,0,0,624,291.5);
	this.instance_60.alpha = 0.422;
	this.instance_60._off = true;

	this.instance_61 = new lib.元件14複製2();
	this.instance_61.parent = this;
	this.instance_61.setTransform(960,623.2,1.461,1.461,0,0,0,624,291.5);
	this.instance_61.alpha = 0.379;
	this.instance_61._off = true;

	this.instance_62 = new lib.元件14複製3();
	this.instance_62.parent = this;
	this.instance_62.setTransform(960,623.2,1.461,1.461,0,0,0,624,291.5);
	this.instance_62.alpha = 0.379;
	this.instance_62._off = true;

	this.instance_63 = new lib.元件14複製5();
	this.instance_63.parent = this;
	this.instance_63.setTransform(962,621.3,1.461,1.461,0,0,0,624,291.5);
	this.instance_63.alpha = 0.379;
	this.instance_63._off = true;

	this.instance_64 = new lib.元件14複製6();
	this.instance_64.parent = this;
	this.instance_64.setTransform(962,621.3,1.461,1.461,0,0,0,624,291.5);

	this.instance_65 = new lib.元件14複製7();
	this.instance_65.parent = this;
	this.instance_65.setTransform(962,621.3,1.461,1.461,0,0,0,624,291.5);
	this.instance_65.alpha = 0.379;
	this.instance_65._off = true;

	this.instance_66 = new lib.元件14複製8();
	this.instance_66.parent = this;
	this.instance_66.setTransform(962,621.3,1.461,1.461,0,0,0,624,291.5);

	this.instance_67 = new lib.元件14複製9();
	this.instance_67.parent = this;
	this.instance_67.setTransform(962,621.3,1.461,1.461,0,0,0,624,291.5);

	this.instance_68 = new lib.元件14複製10();
	this.instance_68.parent = this;
	this.instance_68.setTransform(962,621.3,1.461,1.461,0,0,0,624,291.5);

	this.instance_69 = new lib.元件14複製11();
	this.instance_69.parent = this;
	this.instance_69.setTransform(962,621.3,1.461,1.461,0,0,0,624,291.5);
	this.instance_69.alpha = 0.398;
	this.instance_69._off = true;

	this.instance_70 = new lib.元件14複製12();
	this.instance_70.parent = this;
	this.instance_70.setTransform(964.3,621.3,1.461,1.461,0,0,0,624,291.5);

	this.instance_71 = new lib.元件14複製13();
	this.instance_71.parent = this;
	this.instance_71.setTransform(962,621.3,1.461,1.461,0,0,0,624,291.5);

	this.instance_72 = new lib.元件14複製14();
	this.instance_72.parent = this;
	this.instance_72.setTransform(962,621.3,1.461,1.461,0,0,0,624,291.5);
	this.instance_72.alpha = 0.398;
	this.instance_72._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_58}]},1136).to({state:[{t:this.instance_58}]},15).to({state:[{t:this.instance_59}]},300).to({state:[{t:this.instance_59}]},13).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},9).to({state:[{t:this.instance_61}]},402).to({state:[{t:this.instance_61}]},11).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_62}]},9).to({state:[{t:this.instance_62}]},119).to({state:[{t:this.instance_61}]},213).to({state:[{t:this.instance_61}]},10).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},10).to({state:[{t:this.instance_64}]},525).to({state:[{t:this.instance_65}]},115).to({state:[{t:this.instance_65}]},30).to({state:[{t:this.instance_66}]},53).to({state:[{t:this.instance_67}]},643).to({state:[{t:this.instance_68}]},295).to({state:[{t:this.instance_69}]},222).to({state:[{t:this.instance_69}]},9).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},281).to({state:[{t:this.instance_72}]},190).to({state:[{t:this.instance_72}]},10).to({state:[{t:this.instance_72}]},3).to({state:[{t:this.instance_72}]},131).to({state:[]},570).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(1136).to({_off:false},0).to({alpha:1},15).to({_off:true},300).wait(3884));
	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(1451).to({_off:false},0).to({alpha:1},13).to({_off:true},1).wait(3870));
	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(1465).to({_off:false},0).to({alpha:1},9).to({_off:true},402).wait(3459));
	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(1876).to({_off:false},0).to({alpha:1},11).to({_off:true},1).wait(341).to({_off:false,x:962,y:621.3,alpha:0.379},0).to({alpha:1},10).to({_off:true},1).wait(3095));
	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(1888).to({_off:false},0).to({alpha:1},9).wait(119).to({_off:true},213).wait(3106));
	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(2240).to({_off:false},0).to({alpha:1},10).to({_off:true},525).wait(2560));
	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(2890).to({_off:false},0).to({alpha:1},30).to({_off:true},53).wait(2362));
	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(4133).to({_off:false},0).to({alpha:1},9).to({_off:true},1).wait(1192));
	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(4614).to({_off:false},0).to({alpha:1},10).wait(134).to({_off:true},570).wait(7));

	// 客話
	this.instance_73 = new lib._2();
	this.instance_73.parent = this;
	this.instance_73.setTransform(1027,833,1.461,1.461);

	this.instance_74 = new lib._4();
	this.instance_74.parent = this;
	this.instance_74.setTransform(1024,839,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_73}]},904).to({state:[{t:this.instance_73}]},44).to({state:[{t:this.instance_74}]},138).to({state:[]},50).wait(4199));

	// J話
	this.instance_75 = new lib.元件11();
	this.instance_75.parent = this;
	this.instance_75.setTransform(501.2,907.4,1.461,1.461,0,0,0,279,51);

	this.instance_76 = new lib._3();
	this.instance_76.parent = this;
	this.instance_76.setTransform(88,833,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_75}]},791).to({state:[{t:this.instance_75}]},112).to({state:[{t:this.instance_76}]},46).to({state:[{t:this.instance_76}]},136).to({state:[{t:this.instance_76}]},50).to({state:[]},1).wait(4199));

	// 框框
	this.instance_77 = new lib.框2();
	this.instance_77.parent = this;
	this.instance_77.setTransform(973,792,1.461,1.461);

	this.instance_78 = new lib.框();
	this.instance_78.parent = this;
	this.instance_78.setTransform(56,792,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_78},{t:this.instance_77}]},785).to({state:[{t:this.instance_78},{t:this.instance_77}]},350).to({state:[]},1).wait(4199));

	// 圖層 12
	this.instance_79 = new lib.元件10();
	this.instance_79.parent = this;
	this.instance_79.setTransform(961.4,621.9,1.461,1.461,0,0,0,624,291.6);
	this.instance_79.alpha = 0.43;
	this.instance_79._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(771).to({_off:false},0).to({alpha:1},14).wait(350).to({_off:true},1).wait(4199));

	// 對話
	this.instance_80 = new lib.元件4();
	this.instance_80.parent = this;
	this.instance_80.setTransform(959.3,865,1.461,1.461,0,0,0,526.5,96);
	this.instance_80.alpha = 0.5;
	this.instance_80._off = true;

	this.instance_81 = new lib.元件5();
	this.instance_81.parent = this;
	this.instance_81.setTransform(959.3,884,1.461,1.461,0,0,0,526.5,96);
	this.instance_81.alpha = 0.398;
	this.instance_81._off = true;

	this.instance_82 = new lib.元件7();
	this.instance_82.parent = this;
	this.instance_82.setTransform(959.3,884.3,1.461,1.461,0,0,0,526.5,96);
	this.instance_82.alpha = 0.441;
	this.instance_82._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(329).to({_off:false},0).to({alpha:1},14).wait(145).to({alpha:0},13).to({_off:true},1).wait(4833));
	this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(509).to({_off:false},0).to({alpha:1},9).wait(70).to({alpha:0},11).to({_off:true},1).wait(4735));
	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(646).to({_off:false},0).to({alpha:1},13).wait(66).to({alpha:0},14).to({_off:true},1).wait(4595));

	// 紅茶
	this.instance_83 = new lib.元件8();
	this.instance_83.parent = this;
	this.instance_83.setTransform(1132.4,664.2,1.461,1.461,0,0,0,190,25.6);
	this.instance_83.alpha = 0.441;
	this.instance_83._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(662).to({_off:false},0).to({alpha:1},11).to({_off:true},69).wait(4593));

	// 桌
	this.instance_84 = new lib.桌();
	this.instance_84.parent = this;
	this.instance_84.setTransform(400,675,1.461,1.461);
	this.instance_84._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(604).to({_off:false},0).to({_off:true},167).wait(4564));

	// N
	this.instance_85 = new lib.元件6();
	this.instance_85.parent = this;
	this.instance_85.setTransform(52.6,643.6,1.461,1.461,0,0,0,118,232.5);
	this.instance_85._off = true;

	this.instance_86 = new lib.元件9();
	this.instance_86.parent = this;
	this.instance_86.setTransform(1762.2,618.2,1.461,1.461,0,0,0,114,232.1);
	this.instance_86._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(634).to({_off:false},0).to({x:236.2},11).to({_off:true},97).wait(4593));
	this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(742).to({_off:false},0).to({x:806},28).to({_off:true},1).wait(4564));

	// 人客
	this.instance_87 = new lib.補間動畫3("synched",0);
	this.instance_87.parent = this;
	this.instance_87.setTransform(434.2,607.1,1.461,1.461);
	this.instance_87._off = true;

	this.instance_88 = new lib.補間動畫4("synched",0);
	this.instance_88.parent = this;
	this.instance_88.setTransform(962.9,607.1,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_87}]},604).to({state:[{t:this.instance_88}]},28).to({state:[]},110).to({state:[]},335).wait(4258));
	this.timeline.addTween(cjs.Tween.get(this.instance_87).wait(604).to({_off:false},0).to({_off:true,x:962.9},28).wait(4703));

	// bg2
	this.instance_89 = new lib.bg2();
	this.instance_89.parent = this;
	this.instance_89.setTransform(50,194,1.461,1.461);

	this.instance_90 = new lib.bg3();
	this.instance_90.parent = this;
	this.instance_90.setTransform(50,194,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_89}]},604).to({state:[{t:this.instance_90}]},138).to({state:[]},29).to({state:[]},306).wait(4258));

	// 人客
	this.instance_91 = new lib.補間動畫1("synched",0);
	this.instance_91.parent = this;
	this.instance_91.setTransform(2271,683.8,1.461,1.461);
	this.instance_91._off = true;

	this.instance_92 = new lib.補間動畫2("synched",0);
	this.instance_92.parent = this;
	this.instance_92.setTransform(1570.7,683.8,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_91}]},309).to({state:[{t:this.instance_92}]},15).to({state:[]},280).to({state:[]},473).wait(4258));
	this.timeline.addTween(cjs.Tween.get(this.instance_91).wait(309).to({_off:false},0).to({_off:true,x:1570.7},15).wait(5011));

	// j
	this.instance_93 = new lib.元件3();
	this.instance_93.parent = this;
	this.instance_93.setTransform(1706.6,694,1.461,1.461,0,0,0,114,239);
	this.instance_93._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_93).wait(278).to({_off:false},0).to({x:245.2},31).to({_off:true},295).wait(4731));

	// bg1
	this.instance_94 = new lib.元件1();
	this.instance_94.parent = this;
	this.instance_94.setTransform(961.4,617.4,1.461,1.461,0,0,0,624,291.5);
	this.instance_94.alpha = 0.5;
	this.instance_94._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_94).wait(263).to({_off:false},0).to({alpha:1},11).to({_off:true},330).wait(4731));

	// 底圖
	this.instance_95 = new lib.元件2();
	this.instance_95.parent = this;
	this.instance_95.setTransform(960,540.7,1.461,1.461,0,0,0,657,370);
	this.instance_95.alpha = 0.5;
	this.instance_95._off = true;

	this.instance_96 = new lib.U35BG();
	this.instance_96.parent = this;
	this.instance_96.setTransform(0,0,1.461,1.461);
	this.instance_96._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_95).wait(258).to({_off:false},0).to({alpha:1},10).wait(336).to({_off:true},472).wait(4259));
	this.timeline.addTween(cjs.Tween.get(this.instance_96).wait(1076).to({_off:false},0).wait(4096).to({_off:true},156).wait(7));

	// 圖層 10
	this.gogoooo = new lib.x_1();
	this.gogoooo.parent = this;
	this.gogoooo.setTransform(1687.6,300.7,1.7,1.7);
	this.gogoooo._off = true;
	new cjs.ButtonHelper(this.gogoooo, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.gogoooo).wait(249).to({_off:false},0).to({_off:true},1).wait(5085));

	// 圖層 9
	this.instance_97 = new lib.hint();
	this.instance_97.parent = this;
	this.instance_97.setTransform(1608.5,248.9,0.182,0.182,0,0,0,0.6,0.6);
	this.instance_97._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_97).wait(223).to({_off:false},0).to({regX:0.4,regY:0.4,scaleX:1.46,scaleY:1.46,x:961.3,y:545.9},6).wait(21).to({regX:0.6,regY:0.6,scaleX:0.18,scaleY:0.18,x:1608.5,y:248.9},7).to({_off:true},1).wait(5077));

	// 圖層 8
	this.instance_98 = new lib.元件2();
	this.instance_98.parent = this;
	this.instance_98.setTransform(960,540.7,1.461,1.461,0,0,0,657,370);
	this.instance_98.alpha = 0.5;
	this.instance_98._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_98).wait(223).to({_off:false},0).wait(34).to({_off:true},1).wait(5077));

	// 下一頁
	this.nissannext = new lib.nissannext();
	this.nissannext.parent = this;
	this.nissannext.setTransform(1763.7,1030.6,1.462,1.462,0,0,0,100.1,25.6);
	this.nissannext._off = true;
	new cjs.ButtonHelper(this.nissannext, 0, 1, 2, false, new lib.nissannext(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nissannext).wait(220).to({_off:false},0).wait(2).to({_off:true},1).wait(5112));

	// 迎賓前2
	this.nissan2 = new lib.nissan2();
	this.nissan2.parent = this;
	this.nissan2.setTransform(961.4,541.4,1.462,1.462,0,0,0,657.1,370.2);
	this.nissan2.alpha = 0.5;
	this.nissan2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissan2).wait(113).to({_off:false},0).to({alpha:0.949},19).to({alpha:1},2).wait(52).to({_off:true},37).wait(5112));

	// 迎賓前
	this.nissan1 = new lib.nissan1();
	this.nissan1.parent = this;
	this.nissan1.setTransform(961.4,541.4,1.462,1.462,0,0,0,657.1,370.2);
	this.nissan1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.nissan1).to({alpha:1},23).wait(89).to({_off:true},1).wait(5222));

	// 圖層 23
	this.gg = new lib.e04();
	this.gg.parent = this;
	this.gg.setTransform(1779.6,136.4,1.7,1.7);
	this.gg._off = true;
	new cjs.ButtonHelper(this.gg, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.gg).wait(5334).to({_off:false},0).wait(1));

	// 圖層 17
	this.chp35 = new lib.chp35();
	this.chp35.parent = this;
	this.chp35.setTransform(1447.4,993,1.61,1.61);
	new cjs.ButtonHelper(this.chp35, 0, 1, 1);

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

	this.chp34a = new lib.chp34();
	this.chp34a.parent = this;
	this.chp34a.setTransform(1447.4,902.9,1.61,1.61);
	new cjs.ButtonHelper(this.chp34a, 0, 1, 1);

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

	this.instance_99 = new lib.現在位置_1();
	this.instance_99.parent = this;
	this.instance_99.setTransform(959.3,542,1.477,1.477,0,0,0,0,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_99},{t:this.chp2a},{t:this.chp3a},{t:this.chp11a},{t:this.chp12a},{t:this.chp21a},{t:this.chp22a},{t:this.chp111a},{t:this.chp112a},{t:this.chp31a},{t:this.chp33a},{t:this.chp34a},{t:this.chp121a},{t:this.chp122a},{t:this.chp1a},{t:this.chp32a},{t:this.chp35}]},5334).wait(1));

	// 圖層 15
	this.e04 = new lib.e04();
	this.e04.parent = this;
	this.e04.setTransform(1779.6,136.4,1.7,1.7);
	this.e04._off = true;
	new cjs.ButtonHelper(this.e04, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.e04).wait(5329).to({_off:false},0).to({_off:true},1).wait(5));

	// 圖層 14
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

	this.chp35_1 = new lib.chp35();
	this.chp35_1.parent = this;
	this.chp35_1.setTransform(1447.4,993,1.61,1.61);
	new cjs.ButtonHelper(this.chp35_1, 0, 1, 1);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chp2},{t:this.chp3},{t:this.chp11},{t:this.chp12},{t:this.chp21},{t:this.chp22},{t:this.chp111},{t:this.chp112},{t:this.chp31},{t:this.chp32},{t:this.chp33},{t:this.chp34},{t:this.chp35_1},{t:this.chp121},{t:this.chp122},{t:this.chp1}]},5329).to({state:[]},1).wait(5));

	// 圖層 5
	this.instance_100 = new lib.現在位置_1();
	this.instance_100.parent = this;
	this.instance_100.setTransform(959.3,542,1.477,1.477,0,0,0,0,1.1);

	this.instance_101 = new lib.U35BG();
	this.instance_101.parent = this;
	this.instance_101.setTransform(0,0,1.461,1.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_101},{t:this.instance_100}]},5329).to({state:[]},1).to({state:[{t:this.instance_101},{t:this.instance_100}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960.9,541.3,1920.8,1081.8);
// library properties:
lib.properties = {
	width: 1920,
	height: 1082,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/chpce_atlas_.png", id:"chpce_atlas_"},
		{src:"sounds/_351.mp3", id:"_351"},
		{src:"sounds/_352.mp3", id:"_352"},
		{src:"sounds/_353.mp3", id:"_353"},
		{src:"sounds/_354.mp3", id:"_354"},
		{src:"sounds/_355.mp3", id:"_355"},
		{src:"sounds/_356.mp3", id:"_356"},
		{src:"sounds/_357.mp3", id:"_357"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;