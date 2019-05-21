import React from 'react';
export const DraggerF = props => (
  <DraggerWrapper>
    <div style={{textAlign: 'right', margin: '20px 0'}}>
    <Button type="primary" onClick={props.toFM}>进入管理界面</Button>
    </div>
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">点击或拖拽上传</p>
    </Dragger>
  </DraggerWrapper>
);
export const DraggerManager = props => (
1
);