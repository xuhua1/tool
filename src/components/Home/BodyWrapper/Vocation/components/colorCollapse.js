import React, { Component } from 'react';
import { copyClick } from '../../utils';
import { Collapse, Row, Card, Table } from 'antd';
import { Divider, Col } from 'antd';
import {
  ComRow
} from './style.js';
import {
  CardWrapper
} from '../../Commen/style';
const { Panel } = Collapse;
//安全色
const data = {
  saftColorGB: ["#000000", "#000033", "#000066", "#000099", "#0000CC", "#0000FF", "#003300", "#003333", "#003366", "#003399", "#0033CC", "#0033FF", "#006600", "#006633", "#006666", "#006699", "#0066CC", "#0066FF", "#009900", "#009933", "#009966", "#009999", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#00FF00", "#00FF33", "#00FF66", "#00FF99", "#00FFCC", "#00FFFF"],
  saftColorRB: ["#000000", "#000033", "#000066", "#000099", "#0000CC", "#0000FF", "#330000", "#330033", "#330066", "#330099", "#3300CC", "#3300FF", "#660000", "#660033", "#660066", "#660099", "#6600CC", "#6600FF", "#990000", "#990033", "#990066", "#990099", "#9900CC", "#9900FF", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF"],
  saftColorRG: ["#000000", "#003300", "#006600", "#009900", "#00CC00", "#00FF00", "#330000", "#333300", "#336600", "#339900", "#33CC00", "#33FF00", "#660000", "#663300", "#666600", "#669900", "#66CC00", "#66FF00", "#990000", "#993300", "#996600", "#999900", "#99CC00", "#99FF00", "#CC0000", "#CC3300", "#CC6600", "#CC9900", "#CCCC00", "#CCFF00", "#FF0000", "#FF3300", "#FF6600", "#FF9900", "#FFCC00", "#FFFF00"],
  saftColorGROUND: ["#333333", "#333366", "#333399", "#3333CC", "#336633", "#336666", "#336699", "#3366CC", "#339933", "#339966", "#339999", "#3399CC", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#663333", "#663366", "#663399", "#6633CC", "#666633", "#666666", "#666699", "#6666CC", "#669933", "#669966", "#669999", "#6699CC", "#66CC33", "#66CC66", "#66CC99", "#66CCCC", "#993333", "#993366", "#993399", "#9933CC", "#996633", "#996666", "#996699", "#9966CC", "#999933", "#999966", "#999999", "#9999CC", "#99CC33", "#99CC66", "#99CC99", "#99CCCC", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC6633", "#CC6666", "#CC6699", "#CC66CC", "#CC9933", "#CC9966", "#CC9999", "#CC99CC", "#CCCC33", "#CCCC66", "#CCCC99", "#CCCCCC"],
  saftColorSOFT:  ["#666666", "#666699", "#6666CC", "#6666FF", "#669966", "#669999", "#6699CC", "#6699FF", "#66CC66", "#66CC99", "#66CCCC", "#66CCFF", "#66FF66", "#66FF99", "#66FFCC", "#66FFFF", "#996666", "#996699", "#9966CC", "#9966FF", "#999966", "#999999", "#9999CC", "#9999FF", "#99CC66", "#99CC99", "#99CCCC", "#99CCFF", "#99FF66", "#99FF99", "#99FFCC", "#99FFFF", "#CC6666", "#CC6699", "#CC66CC", "#CC66FF", "#CC9966", "#CC9999", "#CC99CC", "#CC99FF", "#CCCC66", "#CCCC99", "#CCCCCC", "#CCCCFF", "#CCFF66", "#CCFF99", "#CCFFCC", "#CCFFFF", "#FF6666", "#FF6699", "#FF66CC", "#FF66FF", "#FF9966", "#FF9999", "#FF99CC", "#FF99FF", "#FFCC66", "#FFCC99", "#FFCCCC", "#FFCCFF", "#FFFF66", "#FFFF99", "#FFFFCC", "#FFFFFF"],
  saftColorGRAY:  ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#AAAAAA", "#BBBBBB", "#CCCCCC", "#DDDDDD", "#EEEEEE", "#FFFFFF"],
  freshColor: ['1','2','3','4','5','6','7'],
  commenColor: ['1','2','3','4','5','6','7'],
};
const {
  saftColorGB,saftColorRB,saftColorRG,
  saftColorGROUND,saftColorSOFT,saftColorGRAY,
} = data;
data.all = [...new Set([].concat(saftColorGB,saftColorRB,saftColorRG,saftColorGROUND,saftColorSOFT,saftColorGRAY))];

//名称数据
const nameColorData = {
  cnName:["栗色", "暗红色", "褐玫瑰红", "火砖色", "暗深红色", "红色", "间紫罗兰色", "苍紫罗兰色", "深粉红色", "红紫色", "粉红色", "亮粉红色", "浅玫瑰色", "淡紫红", "靛青色", "紫色", "暗洋红", "暗紫色", "紫罗兰色", "暗紫罗兰色", "石蓝色", "间紫色", "间暗蓝色", "间紫色", "紫罗兰色", "洋李色", "蓟色", "淡紫色", "重褐色", "赭色", "巧可力色", "印第安红", "褐玫瑰红", "亮珊瑚色", "鲜肉色", "亮肉色", "红橙色", "西红柿色", "珊瑚色", "暗桔黄色", "沙褐色", "秘鲁色", "茶色", "实木色", "浅黄色", "鹿皮色", "纳瓦白", "桃色", "桔黄色", "古董白", "番木色", "米绸色", "老花色", "亚麻色", "海贝色", "雪白色", "花白色", "象牙色", "暗金黄色", "金麒麟色", "金色", "黄色", "暗黄褐色", "黄褐色", "苍麒麟色", "米色", "柠檬绸色", "亮金黄色", "亮黄色", "墨绿色", "暗橄榄绿", "橄榄色", "暗绿色", "森林绿", "海绿色", "间宝石绿", "黄绿色", "橙绿色", "酸橙色", "黄绿色", "草绿色", "黄绿色", "间春绿色", "春绿色", "亮绿色", "苍绿色", "碧绿色", "蜜色", "薄荷色", "中灰兰色", "海军色", "暗蓝色", "暗灰蓝色", "间兰色", "皇家蓝", "闪兰色", "菊兰色", "深天蓝色", "亮天蓝色", "亮钢兰色", "亮蓝色", "钢兰色", "暗青色", "军兰色", "暗宝石绿", "亮绿色", "青绿色", "天蓝色", "粉蓝色", "苍宝石绿", "亮青色", "天蓝色", "艾利斯兰", "黑色", "暗灰色", "灰色", "灰石色", "亮蓝灰", "暗灰色", "银色", "浅灰", "淡灰色", "烟白色", "幽灵白", "白色"],
  enName: ["maroon", "darkred", "brown", "firebrick", "crimson", "red", "mediumvioletred", "palevioletred", "deeppink", "hotpink", "pink", "lightpink", "mistyrose", "lavenderblush", "indigo", "purple", "darkmagenta", "darkorchid", "blueviolet", "darkviolet", "slateblue", "mediumpurple", "mediumslateblue", "mediumorchid", "violet", "plum", "thistle", "lavender", "saddlebrown", "sienna", "chocolate", "indianred", "rosybrown", "lightcoral", "salmon", "lightsalmon", "orangered", "tomato", "coral", "darkorange", "sandybrown", "peru", "tan", "burlywood", "wheat", "moccasin", "navajowhite", "peachpuff", "bisque", "antiquewhite", "papayawhip", "cornsilk", "oldlace", "linen", "seashell", "snow", "floralwhite", "ivory", "darkgoldenrod", "goldenrod", "gold", "yellow", "darkkhaki", "khaki", "palegoldenrod", "beige", "lemonchiffon", "lightgoldenrodyellow", "lightyellow", "darkslategray", "darkolivegreen", "olive", "darkgreen", "forestgreen", "seagreen", "madiumaquamarine", "yellowgreen", "limegreen", "lime", "chartreuse" , "lawngreen", "greenyellow", "mediumspringgreen", "springgreen", "lightgreen", "palegreen", "aquamarine", "honeydew", "mintcream", "midnightblue", "navy", "darkblue", "darkslateblue", "mediumblue", "royalblue", "dodgerblue", "cornflowerblue", "deepskyblue", "lightskyblue", "lightsteelblue", "lightblue", "steelblue", "darkcyan", "cadetblue", "darkturquoise", "mediumturquoise", "turquoise", "skyblue", "powderblue", "paleturquoise", "lightcyan", "azure", "aliceblue", "black", "dimgray", "gray", "slategray", "lightslategray", "darkgray", "silver", "lightgray", "gainsboro", "whitesmoke", "ghostwhite", "white"],
  hexVal: ["#800000", "#8B0000", "#A52A2A", "#B22222", "#DC143C", "#FF0000", "#C71585", "#D87093", "#FF1493", "#FF69B4", "#FFC0CB", "#FFB6C1", "#FFE4E1", "#FFF0F5", "#4B0082", "#800080", "#8B008B", "#9932CC", "#8A2BE2", "#9400D3", "#6A5ACD", "#9370DB", "#7B68EE", "#BA55D3", "#EE82EE", "#DDA0DD", "#D8BFD8", "#E6E6FA", "#8B4513", "#A0522D", "#D2691E", "#CD5C5C", "#BC8F8F", "#F08080", "#FA8072", "#FFA07A", "#FF4500", "#FF6347", "#FF7F50", "#FF8C00", "#F4A460", "#CD853F", "#D2B48C", "#DEB887", "#F5DEB3", "#FFE4B5", "#FFDEAD", "#FFDAB9", "#FFE4C4", "#FAEBD7", "#FFEFD5", "#FFF8DC", "#FDF5E6", "#FAF0E6", "#FFF5EE", "#FFFAFA", "#FFFAF0", "#FFFFF0", "#B8860B", "#DAA520", "#FFD700", "#FFFF00", "#BDB76B", "#F0E68C", "#EEE8AA", "#F5F5DC", "#FFFACD", "#FAFAD2", "#FFFFE0", "#2F4F4F", "#556B2F", "#808000", "#006400", "#228B22", "#2E8B57", "#66CDAA", "#9ACD32", "#32CD32", "#00FF00", "#7FFF00", "#7CFC00", "#ADFF2F", "#00FA9A", "#00FF7F", "#90EE90", "#98F898", "#7FFFD4", "#F0FFF0", "#F5FFFA", "#191970", "#000080", "#00008B", "#483D8B", "#0000CD", "#4169E1", "#1E90FF", "#6495ED", "#00BFFF", "#87CEFA", "#B0C4DE", "#ADD8E6", "#4682B4", "#008B8B", "#5F9EA0", "#00CED1", "#48D1CC", "#40E0D0", "#87CECB", "#B0E0E6", "#AFEEEE", "#E0FFFF", "#F0FFFF", "#F0F8FF", "#000000", "#696969", "#808000", "#708090", "#778899", "#A9A9A9", "#C0C0C0", "#D3D3D3", "#DCDCDC", "#F5F5F5", "#F8F8FF", "#FFFFFF"],
};

class ColorCollapse extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 'all',
      data,
      nameColorData
    }
  }
  rowClick = (e)=>{
    const {id} = e.target;
    if(id){
      this.setState({
        index: id,
      })
    }
  }
  changHex2Rgb = hexValue=> {
    const hex = hexValue.split('#').pop().split('')
                        .map((item,index,Arr)=>index%2===0?Number.parseInt(Arr[index]+Arr[index+1],16):'')
                        .filter(item=>item!=='').join(',');
    return `rgb(${hex})`;
  }
  render(){
    const { index } = this.state;
    const colorData= this.state.nameColorData.cnName.map((item,index)=>{
      return {
        key: index,
        cnName: item,
        enName: this.state.nameColorData.enName[index],
        color: this.state.nameColorData.hexVal[index],
      }
    });
    const colorDataLeft = colorData.filter((_,index)=>index%2===0);
    const colorDataRight = colorData.filter((_,index)=>index%2!==0);
    console.log(colorDataLeft,colorDataRight)
    const columns = [{
      title: '中文名',
      dataIndex: 'cnName',
      key: 'cnName',
    },{
      title: '英文名',
      dataIndex: 'enName',
      key: 'name',
    },{
      title: '颜色',
      key: 'color',
      render: text => (
        <div style={{backgroundColor:text.color, display:'float'}}>
          &nbsp;
        </div>
      ),
    },{
      title: '行为',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={()=>{copyClick(record.color)}}>{record.color}</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={()=>{copyClick(this.changHex2Rgb(record.color))}}>{this.changHex2Rgb(record.color)}</a>
        </span>
      ),
    }];
    return (
      <Collapse>
        <Panel showArrow={false} header="安全色" key="1">
          <ComRow onClick={this.rowClick}>
            <Col span={2} id="all" className={index==='all'?"selected":''}>所有</Col>
            <Col span={3} id="saftColorGB" className={index==='saftColorGB'?"selected":''}>绿色/蓝色</Col>
            <Col span={3} id="saftColorRB" className={index==='saftColorRB'?"selected":''}>红色/绿色</Col>
            <Col span={2} id="saftColorGROUND" className={index==='saftColorGROUND'?"selected":''}>大地色</Col>
            <Col span={2} id="saftColorSOFT" className={index==='saftColorSOFT'?"selected":''}>柔和</Col>
            <Col span={2} id="saftColorGRAY" className={index==='saftColorGRAY'?"selected":''}>灰色</Col>
          </ComRow>
          <CardWrapper>
            {
              this.state.data[this.state.index].map((item)=>(
                <Card
                  key={item}
                  bodyStyle={{width:200, height:100, margin:'20px 0',backgroundColor:item}}
                  actions={[
                    <div type="dashed" block="true" onClick={()=>{copyClick(item)}}>{item}</div>,
                    <div type="dashed" block="true" onClick={()=>{copyClick(this.changHex2Rgb(item))}}>{this.changHex2Rgb(item)}</div>,
                  ]}
                    >
                </Card>
              ))
            }
        </CardWrapper>
        </Panel>
        <Panel showArrow={false} header="常用舒适色" key="2">
          <p>4556</p>
        </Panel>
        <Panel showArrow={false} header="常用名称色" key="3">
          <Table style={{width:460 ,float:'left'}} pagination={false} dataSource={colorDataLeft} columns={columns} />
          <Table style={{width:460 ,float:'right' }} pagination={false} dataSource={colorDataRight} columns={columns} />
        </Panel>
      </Collapse>
    )
  }
}
export default ColorCollapse;