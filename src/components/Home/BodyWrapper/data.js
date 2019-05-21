const arr = [
  {"name":"北京大学","location":"北京","is985211":"211985","belong":"综合","property":"教育部","url":"www.pku.edu.cn","srcId":1,"pm":1},
  {"name":"中国人民大学","location":"北京","is985211":"211985","belong":"综合","property":"教育部","url":"www.ruc.edu.cn","srcId":2,"pm":4},
  {"name":"清华大学","location":"北京","is985211":"211985","belong":"工科","property":"教育部","url":"www.tsinghua.edu.cn","srcId":3,"pm":2},
  {"name":"北京理工大学","location":"北京","is985211":"211985","belong":"工科","property":"工业与信息化部","url":"www.bit.edu.cn","srcId":5,"pm":32},
  {"name":"北京航空航天大学","location":"北京","is985211":"211985","belong":"工科","property":"工业与信息化部","url":"www.buaa.edu.cn","srcId":4,"pm":31},
  {"name":"中央民族大学","location":"北京","is985211":"211985","belong":"民族","property":"国家民族事务委员会","url":"www.muc.edu.cn","srcId":8,"pm":96},
  {"name":"中国农业大学","location":"北京","is985211":"211985","belong":"农业","property":"教育部","url":"www.cau.edu.cn","srcId":6,"pm":29},
  {"name":"北京师范大学","location":"北京","is985211":"211985","belong":"师范","property":"教育部","url":"www.bnu.edu.cn","srcId":7,"pm":8},
  {"name":"天津大学","location":"天津","is985211":"211985","belong":"工科","property":"教育部","url":"www.tju.edu.cn","srcId":10,"pm":23},
  {"name":"南开大学","location":"天津","is985211":"211985","belong":"综合","property":"教育部","url":"www.nankai.edu.cn","srcId":9,"pm":15},
  {"name":"大连理工大学","location":"辽宁","is985211":"211985","belong":"工科","property":"教育部","url":"www.dlut.edu.cn","srcId":11,"pm":49},
  {"name":"东北大学","location":"辽宁","is985211":"211985","belong":"工科","property":"教育部","url":"www.neu.edu.cn","srcId":12,"pm":48},
  {"name":"吉林大学","location":"吉林","is985211":"211985","belong":"综合","property":"教育部","url":"www.jlu.edu.cn","srcId":13,"pm":17},
  {"name":"哈尔滨工业大学（威海）","location":"黑龙江","is985211":"211985","belong":"工科","property":"工业与信息化部","url":"www.hit.edu.cn","srcId":41},
  {"name":"复旦大学","location":"上海","is985211":"211985","belong":"综合","property":"教育部","url":"www.fudan.edu.cn","srcId":15,"pm":3},
  {"name":"同济大学","location":"上海","is985211":"211985","belong":"工科","property":"教育部","url":"www.tongji.edu.cn","srcId":16,"pm":12},
  {"name":"上海交通大学","location":"上海","is985211":"211985","belong":"综合","property":"教育部","url":"www.sjtu.edu.cn","srcId":17,"pm":9},
  {"name":"华东师范大学","location":"上海","is985211":"211985","belong":"师范","property":"教育部","url":"www.ecnu.edu.cn","srcId":18,"pm":20},
  {"name":"南京大学","location":"江苏","is985211":"211985","belong":"综合","property":"教育部","url":"www.nju.edu.cn","srcId":19,"pm":10},
  {"name":"东南大学","location":"江苏","is985211":"211985","belong":"综合","property":"教育部","url":"www.seu.edu.cn","srcId":20,"pm":24},
  {"name":"中国矿业大学(北京)","location":"江苏","is985211":"211","belong":"工科","property":"教育部","url":"www.cumt.edu.cn","srcId":254},
  {"name":"浙江大学","location":"浙江","is985211":"211985","belong":"综合","property":"教育部","url":"www.zju.edu.cn","srcId":22,"pm":6},
  {"name":"中国科学技术大学","location":"安徽","is985211":"211985","belong":"工科","property":"中国科学院","url":"www.ustc.edu.cn","srcId":23,"pm":39},
  {"name":"山东大学威海分校","location":"山东","is985211":"211985","belong":"综合","property":"教育部","url":"www.bkzs.sdu.edu.cn","srcId":40,"pm":479},
  {"name":"厦门大学","location":"福建","is985211":"211985","belong":"综合","property":"教育部","url":"www.xmu.edu.cn","srcId":24,"pm":13},
  {"name":"山东大学中国海洋大学","location":"山东","is985211":"211985","belong":"综合","property":"教育部","url":"www.ouc.edu.cn","srcId":25},
  {"name":"武汉大学","location":"湖北","is985211":"211985","belong":"综合","property":"教育部","url":"www.whu.edu.cn","srcId":26,"pm":5},
  {"name":"湖南大学","location":"湖南","is985211":"211985","belong":"综合","property":"教育部","url":"www.hnu.edu.cn","srcId":27,"pm":59},
  {"name":"中山大学","location":"广东","is985211":"211985","belong":"综合","property":"教育部","url":"www.sysu.edu.cn","srcId":28,"pm":7},
  {"name":"华南理工大学","location":"广东","is985211":"211985","belong":"工科","property":"教育部","url":"www.scut.edu.cn","srcId":29,"pm":27},
  {"name":"西安交通大学","location":"陕西","is985211":"211985","belong":"综合","property":"教育部","url":"www.xjtu.edu.cn","srcId":32,"pm":19},
  {"name":"电子科技大学","location":"四川","is985211":"211985","belong":"工科","property":"教育部","url":"www.uestc.edu.cn","srcId":31,"pm":35},
  {"name":"西北工业大学","location":"陕西","is985211":"211985","belong":"工科","property":"工业与信息化部","url":"www.nwpu.edu.cn","srcId":33,"pm":67},
  {"name":"重庆大学","location":"重庆","is985211":"211985","belong":"综合","property":"教育部","url":"www.cqu.edu.cn","srcId":30,"pm":33},
  {"name":"兰州大学","location":"甘肃","is985211":"211985","belong":"综合","property":"教育部","url":"www.lzu.edu.cn","srcId":34,"pm":38},
  {"name":"四川大学","location":"四川","is985211":"211985","belong":"综合","property":"教育部","url":"www.scu.edu.cn","srcId":35,"pm":16},
  {"name":"中南大学","location":"湖南","is985211":"211985","belong":"综合","property":"教育部","url":"www.csu.edu.cn","srcId":37,"pm":21},
  {"name":"西北农林科技大学","location":"陕西","is985211":"211985","belong":"农业","property":"教育部","url":"www.nwsuaf.edu.cn","srcId":36,"pm":127},
  {"name":"华中科技大学","location":"湖北","is985211":"211985","belong":"工科","property":"教育部","url":"www.hust.edu.cn","srcId":38,"pm":14},
  {"name":"东北大学秦皇岛分校","location":"河北","is985211":"211985","belong":"工科","property":"教育部","url":"www.neuq.edu.cn","srcId":39,"pm":664},
  {"name":"山东大学威海分校","location":"山东","is985211":"211985","belong":"综合","property":"教育部","url":"www.wh.sdu.edu.cn","srcId":40,"pm":479},
  {"name":"哈尔滨工业大学（威海）","location":"山东","is985211":"211985","belong":"综合","property":"工业和信息化部","url":"www.hitwh.edu.cn","srcId":41},
  {"name":"北京交通大学","location":"北京","is985211":"211","belong":"工科","property":"教育部","url":"www.bjtu.edu.cn","srcId":42,"pm":90},
  {"name":"北京工业大学","location":"北京","is985211":"211","belong":"工科","property":"北京市教育委员会","url":"www.bjut.edu.cn","srcId":43,"pm":87},
  {"name":"北京科技大学","location":"北京","is985211":"211","belong":"工科","property":"教育部","url":"www.ustb.edu.cn","srcId":44,"pm":52},
  {"name":"北京化工大学","location":"北京","is985211":"211","belong":"工科","property":"教育部","url":"www.goto.buct.edu.cn","srcId":45,"pm":118},
  {"name":"北京协和医学院","location":"北京","is985211":"211985","belong":"医药","property":"卫生部","url":"www.pumc.edu.cn","srcId":48},
  {"name":"北京邮电大学","location":"北京","is985211":"211","belong":"工科","property":"教育部","url":"www.bupt.edu.cn","srcId":46,"pm":66},
  {"name":"南京理工大学北京外国语大学","location":"北京","is985211":"211","belong":"语言","property":"教育部","url":"www.bfsu.edu.cn","srcId":74},
  {"name":"北京中医药大学","location":"北京","is985211":"211","belong":"医药","property":"教育部","url":"www.bucm.edu.cn","srcId":49,"pm":74},
  {"name":"对外经济贸易大学","location":"北京","is985211":"211","belong":"财经","property":"教育部","url":"www.uibe.edu.cn","srcId":76,"pm":64},
  {"name":"中央财经大学","location":"北京","is985211":"211","belong":"财经","property":"教育部","url":"www.cufe.edu.cn","srcId":51,"pm":42},
  {"name":"北京体育大学","location":"北京","is985211":"211","belong":"体育","property":"国家体育总局","url":"www.bsu.edu.cn","srcId":53,"pm":121},
  {"name":"中国政法大学","location":"北京","is985211":"211","belong":"政法","property":"教育部","url":"www.cupl.edu.cn","srcId":55,"pm":25},
  {"name":"北京林业大学","location":"北京","is985211":"211","belong":"林业","property":"教育部","url":"www.bjfu.edu.cn","srcId":47,"pm":106},
  {"name":"中央音乐学院","location":"北京","is985211":"211","belong":"艺术","property":"教育部","url":"www.ccom.edu.cn","srcId":54},
  {"name":"华北电力大学","location":"北京","is985211":"211","belong":"工科","property":"教育部","url":"www.ncepu.edu.cn","srcId":56,"pm":138},
  {"name":"华北电力大学","location":"河北","is985211":"211","belong":"工科","property":"教育部","url":"www.ncepu.edu.cn","srcId":56,"pm":138},
  {"name":"河北工业大学","location":"天津","is985211":"211","belong":"工科","property":"河北省教育厅","url":"www.hebut.edu.cn","srcId":58,"pm":195},
  {"name":"太原理工大学","location":"山西","is985211":"211","belong":"工科","property":"山西省教育厅","url":"www.tyut.edu.cn","srcId":59,"pm":149},
  {"name":"内蒙古大学","location":"内蒙古","is985211":"211","belong":"综合","property":"内蒙古自治区教育厅","url":"www.imu.edu.cn","srcId":60,"pm":144},
  {"name":"辽宁大学","location":"辽宁","is985211":"211","belong":"综合","property":"辽宁省教育厅","url":"www.lnu.edu.cn","srcId":61,"pm":108},
  {"name":"大连海事大学","location":"辽宁","is985211":"211","belong":"工科","property":"交通运输部","url":"www.dlmu.edu.cn","srcId":62,"pm":154},
  {"name":"延边大学","location":"吉林","is985211":"211","belong":"综合","property":"吉林省教育厅","url":"www.ybu.edu.cn","srcId":63,"pm":192},
  {"name":"东北师范大学","location":"吉林","is985211":"211","belong":"师范","property":"教育部","url":"www.nenu.edu.cn","srcId":64,"pm":44},
  {"name":"哈尔滨工程大学","location":"黑龙江","is985211":"211","belong":"工科","property":"工业与信息化部","url":"www.hrbeu.edu.cn","srcId":89,"pm":143},
  {"name":"东北林业大学","location":"黑龙江","is985211":"211","belong":"林业","property":"教育部","url":"www.nefu.edu.cn","srcId":66,"pm":170},
  {"name":"华东理工大学","location":"上海","is985211":"211","belong":"工科","property":"教育部","url":"www.ecust.edu.cn","srcId":67,"pm":78},
  {"name":"东华大学","location":"上海","is985211":"211","belong":"工科","property":"教育部","url":"www.dhu.edu.cn","srcId":68,"pm":86},
  {"name":"上海外国语大学","location":"上海","is985211":"211","belong":"语言","property":"教育部","url":"www.shisu.edu.cn","srcId":94,"pm":83},
  {"name":"上海财经大学","location":"上海","is985211":"211","belong":"财经","property":"教育部","url":"www.shufe.edu.cn","srcId":71,"pm":50},
  {"name":"苏州大学","location":"江苏","is985211":"211","belong":"综合","property":"江苏省教育厅","url":"www.suda.edu.cn","srcId":72,"pm":41},
  {"name":"南京航空航天大学","location":"江苏","is985211":"211","belong":"工科","property":"工业与信息化部","url":"www.nuaa.edu.cn","srcId":97,"pm":105},
  {"name":"南京理工大学","location":"江苏","is985211":"211","belong":"工科","property":"工业与信息化部","url":"www.njust.edu.cn","srcId":98,"pm":110},
  {"name":"河海大学","location":"江苏","is985211":"211","belong":"工科","property":"教育部","url":"www.hhu.edu.cn","srcId":99,"pm":111},
  {"name":"江南大学","location":"江苏","is985211":"211","belong":"综合","property":"教育部","url":"www.jiangnan.edu.cn","srcId":100,"pm":131},
  {"name":"南京农业大学","location":"江苏","is985211":"211","belong":"农业","property":"教育部","url":"www.njau.edu.cn","srcId":101,"pm":115},
  {"name":"南京师范大学","location":"江苏","is985211":"211","belong":"师范","property":"江苏省教育厅","url":"www.njnu.edu.cn","srcId":103,"pm":40},
  {"name":"中国药科大学","location":"江苏","is985211":"211","belong":"医药","property":"教育部","url":"www.cpu.edu.cn","srcId":102,"pm":164},
  {"name":"安徽大学","location":"安徽","is985211":"211","belong":"综合","property":"安徽省教育厅","url":"www.ahu.edu.cn","srcId":104,"pm":70},
  {"name":"合肥工业大学","location":"安徽","is985211":"211","belong":"工科","property":"教育部","url":"www.hfut.edu.cn","srcId":105,"pm":93},
  {"name":"福州大学","location":"福建","is985211":"211","belong":"工科","property":"福建省教育厅","url":"www.fzu.edu.cn","srcId":106,"pm":103},
  {"name":"郑州大学","location":"河南","is985211":"211","belong":"综合","property":"河南省教育厅","url":"www.zzu.edu.cn","srcId":107,"pm":28},
  {"name":"华中农业大学","location":"湖北","is985211":"211","belong":"农业","property":"教育部","url":"www.hzau.edu.cn","srcId":108,"pm":99},
  {"name":"华中师范大学","location":"湖北","is985211":"211","belong":"师范","property":"教育部","url":"www.ccnu.edu.cn","srcId":109,"pm":36},
  {"name":"湖南师范大学","location":"湖南","is985211":"211","belong":"师范","property":"湖南省教育厅","url":"www.hunnu.edu.cn","srcId":110,"pm":71},
  {"name":"暨南大学","location":"广东","is985211":"211","belong":"综合","property":"国务院侨务办公室","url":"www.jnu.edu.cn","srcId":111,"pm":37},
  {"name":"华南师范大学","location":"广东","is985211":"211","belong":"师范","property":"广东省教育厅","url":"www.scnu.edu.cn","srcId":114,"pm":57},
  {"name":"海南大学","location":"海南","is985211":"211","belong":"综合","property":"海南省教育厅","url":"www.hainu.edu.cn","srcId":115,"pm":109},
  {"name":"广西大学","location":"广西","is985211":"211","belong":"综合","property":"广西壮族自治区教育厅","url":"www.gxu.edu.cn","srcId":116,"pm":84},
  {"name":"西南交通大学","location":"四川","is985211":"211","belong":"工科","property":"教育部","url":"www.swjtu.edu.cn","srcId":117,"pm":69},
  {"name":"四川农业大学","location":"四川","is985211":"211","belong":"农业","property":"四川省教育厅","url":"www.sicau.edu.cn","srcId":118,"pm":206},
  {"name":"西南大学","location":"重庆","is985211":"211","belong":"师范","property":"教育部","url":"www.swnu.edu.cn","srcId":119,"pm":56},
  {"name":"西南财经大学","location":"四川","is985211":"211","belong":"财经","property":"教育部","url":"www.swufe.edu.cn","srcId":120,"pm":73},
  {"name":"贵州大学","location":"贵州","is985211":"211","belong":"综合","property":"贵州省教育厅","url":"www.gzu.edu.cn","srcId":121,"pm":120},
  {"name":"云南大学","location":"云南","is985211":"211","belong":"综合","property":"云南省教育厅","url":"www.ynu.edu.cn","srcId":122,"pm":72},
  {"name":"西藏大学","location":"西藏","is985211":"211","belong":"综合","property":"西藏自治区教育厅","url":"www.utibet.edu.cn","srcId":123,"pm":292},
  {"name":"西北大学","location":"陕西","is985211":"211","belong":"综合","property":"陕西省教育厅","url":"www.nwu.edu.cn","srcId":124,"pm":47},
  {"name":"西安电子科技大学","location":"陕西","is985211":"211","belong":"工科","property":"教育部","url":"www.xidian.edu.cn","srcId":248,"pm":76},
  {"name":"陕西师范大学","location":"陕西","is985211":"211","belong":"师范","property":"教育部","url":"www.snnu.edu.cn","srcId":126,"pm":55},
  {"name":"青海大学","location":"青海","is985211":"211","belong":"综合","property":"青海省教育厅","url":"www.qhu.edu.cn","srcId":127,"pm":313},
  {"name":"宁夏大学","location":"宁夏","is985211":"211","belong":"综合","property":"宁夏回族自治区教育厅","url":"www.nxu.edu.cn","srcId":128,"pm":199},
  {"name":"新疆大学","location":"新疆","is985211":"211","belong":"综合","property":"新疆维吾尔自治区教育厅","url":"www.xju.edu.cn","srcId":129,"pm":165},
  {"name":"中国矿业大学(北京)","location":"北京","is985211":"211","belong":"工科","property":"教育部","url":"www.cumtb.edu.cn","srcId":254},
  {"name":"石河子大学","location":"新疆","is985211":"211","belong":"综合","property":"新疆生产建设兵团","url":"www.shzu.edu.cn","srcId":130,"pm":287},
  {"name":"中国地质大学(武汉)","location":"北京","is985211":"211","belong":"工科","property":"教育部","url":"www.cugb.edu.cn","srcId":268},
  {"name":"南昌大学","location":"江西","is985211":"211","belong":"综合","property":"江西省教育厅","url":"www.ncu.edu.cn","srcId":133,"pm":58},
  {"name":"上海大学","location":"上海","is985211":"211","belong":"综合","property":"上海市教育委员会","url":"www.shu.edu.cn","srcId":134,"pm":60},
  {"name":"天津医科大学","location":"天津","is985211":"211","belong":"医药","property":"天津市教育委员会","url":"www.tijmu.edu.cn","srcId":135,"pm":150},
  {"name":"长安大学","location":"陕西","is985211":"211","belong":"工科","property":"教育部","url":"www.chd.edu.cn","srcId":136,"pm":175},
  {"name":"中南财经政法大学","location":"湖北","is985211":"211","belong":"财经","property":"教育部","url":"www.znufe.edu.cn","srcId":260,"pm":65},
  {"name":"武汉理工大学","location":"湖北","is985211":"211","belong":"工科","property":"教育部","url":"www.whut.edu.cn","srcId":138,"pm":63},
  {"name":"东北农业大学","location":"黑龙江","is985211":"211","belong":"农业","property":"黑龙江省教育厅","url":"www.neau.edu.cn","srcId":139,"pm":245},
  {"name":"中国人民解放军第二军医大学","location":"湖南","is985211":"211985","belong":"军事","property":"中国人民解放军总政治部","url":"www.nudt.edu.cn","srcId":264},
  {"name":"中国人民解放军第二军医大学","location":"上海","is985211":"211","belong":"军事","property":"中国人民解放军总政治部","url":"www.smmu.edu.cn","srcId":264},
  {"name":"第四军医大学","location":"陕西","is985211":"211","belong":"军事","property":"中国人民解放军总政治部","url":"www.fmmu.edu.cn","srcId":142},
  {"name":"上海交通大学","location":"上海","is985211":"211985","belong":"医药","property":"教育部","url":"www.bjtu.edu.cn","srcId":17,"pm":9},
  {"name":"中国传媒大学","location":"北京","is985211":"211","belong":"语言","property":"教育部","url":"www.cuc.edu.cn","srcId":144,"pm":18},
  {"name":"中国地质大学(武汉)","location":"湖北","is985211":"211","belong":"工科","property":"教育部","url":"www.cug.edu.cn","srcId":268},
  {"name":"中国石油大学(华东)","location":"北京","is985211":"211","belong":"工科","property":"教育部","url":"www.cup.edu.cn","srcId":270},
  {"name":"中国石油大学(华东)","location":"山东","is985211":"211","belong":"工科","property":"教育部","url":"www.upc.edu.cn","srcId":270},
  {"name":"首都师范大学","location":"北京","is985211":"211","belong":"师范","property":"北京市教育委员会","url":"www.cnu.edu.cn","srcId":205,"pm":46}
];
export default arr;