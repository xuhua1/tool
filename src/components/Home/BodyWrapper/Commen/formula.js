import React, {Component} from 'react';
import MathJax from 'react-mathjax';
//https://github.com/tsayen/dom-to-image
//使用dom-to-image dom转图片
import {
  Button, Popover, Col, Tag
} from 'antd';
import {
  FormulaWrap, BtnRow
} from './style';
import {
  FirstPopover
} from './components/PopoverSvg';
class Formula extends Component {
  constructor(props){
    super(props);
    this.state = {
      formulaData: `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`,
      sum: `\\sum_{i=0}^N\\int_{a}^{b}g(t,i)\\text{d}t`,
      a1: `\\prod_{a}^{b}`,
    }
  }
  render(){
    const content = (
      <FirstPopover/>
    );
    return (
      <React.Fragment>
         <BtnRow>
          <Col offset={4} span={3}>
            <Popover 
              placement="top" 
              content={content}
              autoAdjustOverflow
              >
              <Button>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" viewBox="0 0 46 24" fill="#8590a6"><g fillRule="evenodd"><path fillRule="nonzero" d="M27.21 6.302L33 16.344H21.42l5.79-10.042zm-3.623 8.79h7.247L27.21 8.806l-3.623 6.286zM6.655 17.258C4.457 17.258 3 15.48 3 12.71c0-2.764 1.465-4.55 3.655-4.55 1.32 0 2.214.62 2.662 1.786h.13v-1.63H10.8v6.595c0 .81.227 1.05.73 1.05.14 0 .262-.01.4-.03v1.18c-.203.06-.407.08-.708.08-1.034 0-1.66-.51-1.766-1.55l-.01-.08h-.13c-.47 1.12-1.375 1.7-2.66 1.7zm7.93.325C14.52 17.91 14.29 18 14 18c-.327 0-.63-.242-.526-.655l2.135-8.483C16.12 6.785 17.48 5 19.21 5c1.36 0 2.336.942 2.336 2.082 0 1.013-.466 1.868-1.295 2.47.09.1.17.205.24.318.32.485.48 1.07.48 1.69 0 2.19-1.946 3.95-4.174 3.95-.58 0-1.132-.26-1.53-.665l-.682 2.738zm5.43-10.623c0-.55-.237-.855-.826-.855-1 0-2.05 1.303-2.49 3.053l-.88 3.566c-.04.12-.04.217-.04.393 0 .782.41 1.288 1.08 1.288.8 0 1.682-.584 2.05-1.402.3-.673.44-1.212.44-1.835 0-.466-.1-.778-.32-1.023-.34.09-.588.128-.877.128h-.07c-.175.003-.29 0-.42-.012-.527-.04-.9-.23-.9-.73 0-.52.4-.74.967-.8.156-.01.285-.02.495-.02h.05c.267 0 .574.05.845.13.55-.4.887-1.17.887-1.87zM6.762 15.995c1.637 0 2.663-1.296 2.663-3.285 0-1.957-.96-3.285-2.475-3.285-1.538 0-2.5 1.23-2.5 3.285 0 2.013.913 3.285 2.313 3.285z"></path><path d="M39.914 10l2.914 3.416H37"></path></g></svg>
              </Button>
            </Popover>
          </Col>
          <Col span={3}>
            <Popover 
              placement="top" 
              content={content}
              autoAdjustOverflow={false}
              >
              <Button>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" viewBox="0 0 46 24" fill="#8590a6"><path d="M39.914 10l2.914 3.416H37m-25.02 2.062l-.984.98-3.507-3.493-3.51 3.492-.98-.98 3.504-3.49L3 8.494l.982-.98L7.49 11.01l3.506-3.492.983.98-3.51 3.49 3.506 3.492zm6.25-6.902c0-.64.53-1.182 1.186-1.182.655 0 1.187.543 1.187 1.182 0 .652-.532 1.182-1.187 1.182s-1.187-.53-1.187-1.182zm-3.658 2.73h9.688v1.387h-9.688v-1.386zm3.657 4.118c0-.652.53-1.182 1.183-1.182s1.187.53 1.187 1.182c0 .64-.53 1.182-1.186 1.182s-1.187-.544-1.187-1.182zM26.26 7H33v10h-6.74v-1.372h5.348v-2.95h-5.35v-1.385h5.35v-2.92h-5.35V7z" fillRule="evenodd"></path></svg>
              </Button>
            </Popover>
          </Col>
          <Col span={3}>
            <Popover 
              placement="top" 
              content={content}
              autoAdjustOverflow={false}
              >
              <Button>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" viewBox="0 0 46 24" fill="#8590a6"><path d="M31.265 8.03c2.66 0 4.735 1.946 4.735 4.526s-2.076 4.527-4.735 4.527h-5.93V15.66h5.93c1.863 0 3.285-1.327 3.285-3.104 0-1.777-1.422-3.102-3.285-3.102h-5.93V8.03h5.93zm-7.102 3.567H20.21l-.668 1.82h4.62v1.438h-5.147l-.938 2.595-1.365-.494.782-2.1h-3.427v-1.44h3.94l.667-1.82h-4.607v-1.423H19.2l.953-2.623 1.365.494-.782 2.13h3.427v1.423zM11.523 7l.682 1.27-8.148 4.202v.056l8.148 4.203-.683 1.27L1 12.53v-.056L11.522 7zm29.39 3l2.915 3.416H38" fillRule="evenodd"></path></svg>
              </Button>
            </Popover>
          </Col>
          <Col span={3}>
            <Popover 
              placement="top" 
              content={content}
              autoAdjustOverflow={false}
              >
              <Button>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" viewBox="0 0 46 24" fill="#8590a6"><path d="M39.914 10l2.914 3.416H37m-25.02 2.062l-.984.98-3.507-3.493-3.51 3.492-.98-.98 3.504-3.49L3 8.494l.982-.98L7.49 11.01l3.506-3.492.983.98-3.51 3.49 3.506 3.492zm6.25-6.902c0-.64.53-1.182 1.186-1.182.655 0 1.187.543 1.187 1.182 0 .652-.532 1.182-1.187 1.182s-1.187-.53-1.187-1.182zm-3.658 2.73h9.688v1.387h-9.688v-1.386zm3.657 4.118c0-.652.53-1.182 1.183-1.182s1.187.53 1.187 1.182c0 .64-.53 1.182-1.186 1.182s-1.187-.544-1.187-1.182zM26.26 7H33v10h-6.74v-1.372h5.348v-2.95h-5.35v-1.385h5.35v-2.92h-5.35V7z" fillRule="evenodd"></path></svg>
              </Button>
            </Popover>
          </Col>
          <Col span={3}>
            <Popover 
              placement="top" 
              content={content} 
              title="Title"
              autoAdjustOverflow={false}
              >
              <Button>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" viewBox="0 0 46 24" fill="#8590a6"><path d="M22.448 10.226h8.53c-.36-.486-.612-.918-1.062-1.746l1.476-.828c.684 1.458 1.08 2.124 1.8 3.006.666.81 1.17 1.278 2.34 2.142-1.17.864-1.674 1.332-2.34 2.142-.72.882-1.116 1.548-1.8 3.006l-1.476-.81c.594-1.08.648-1.188 1.026-1.746h-8.494V13.79h9.592c.27-.306.486-.522 1.008-.99-.216-.198-.774-.738-.99-.972h-9.61v-1.602zM17.326 7l3.092 3.092H17.9l-.014 7.56h-1.133l.006-7.56h-2.527L17.323 7zM2 12.326l3.092-3.09v2.517l7.56.013V12.9l-7.56-.007v2.525L2 12.326zM41.914 10l2.914 3.416H39" fillRule="evenodd"></path></svg>
             </Button>
            </Popover>
          </Col>
        </BtnRow>
        <FormulaWrap>
            <MathJax.Provider>
                <div>
                    <MathJax.Node formula={this.state.formulaData} />
                    <MathJax.Node formula={this.state.a1} />
                </div>
            </MathJax.Provider>
        </FormulaWrap>
      </React.Fragment>
    )
  }
}
export default Formula;