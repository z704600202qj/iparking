import React, { useState } from 'react';
import { Button, Input } from 'antd';

const { TextArea } = Input;

export interface DescProps {
  defaultTitle?: string;
  defaultDesc?: string;
  showBtn?: boolean;
  paramTitle?: string;
  paramDesc?: string;
  cbFunction?: (param: any) => void;
}

const Desc: React.FC<DescProps> = (props) => {
  const {
    showBtn = true,
    paramTitle = 'title',
    paramDesc = 'desc',
    defaultTitle = '财务中心',
    defaultDesc = '部门说明 ：蚂蚁金服务设计平台-design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案提供跨越设计与开发的体验解决方案提供跨越设计与开发的体验解决方案提供跨越设计与开发的体验解决方案提供跨越设计与开发的体验解决方案。',
    cbFunction
  } = props;
  const [edit, setEdit] = useState<boolean>(false);
  const [params, setParams] = useState<object>({});

  const handleBtn = () => {
    setEdit(!edit);
    if (cbFunction) {
      cbFunction(params);
    }
  };
  const handleInput = (param: string, target: (EventTarget & HTMLInputElement) | (EventTarget & HTMLTextAreaElement)) => {
    const cloneParams = JSON.parse(JSON.stringify(params));
    const obj = {
      [param]: target.value
    };
    setParams({
      ...cloneParams,
      ...obj
    });
  };
  return (
    <div className="desc-warp">
      <div className="desc-avator">{defaultTitle.substring(0, 1)}</div>
      <div className="desc-content">
        <h2>
          {edit
            ? <Input placeholder={defaultTitle} onChange={({ target }) => handleInput(paramTitle, target)} style={{ width: '220px' }} />
            : defaultTitle}
          {showBtn && <Button type="link" onClick={handleBtn} htmlType={edit ? 'submit' : 'button'}>{edit ? '保存' : '编辑'}</Button>}
        </h2>
        <p>
          {edit ? <TextArea rows={2} placeholder={defaultDesc} onChange={({ target }) => handleInput(paramDesc, target)} style={{ marginTop: '10px' }} /> : defaultDesc}
        </p>
      </div>
    </div>
  );
};

export default Desc;
