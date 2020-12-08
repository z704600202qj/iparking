import React, { useState, useEffect, useRef } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import RightClick from '../RightClick';
import { RightClickItem, FileItemProps as ItemProps } from '../../utils/interface';
import { fileIcon } from '../../utils/enum';
import './style/index';

export interface FileProps {
  data: ItemProps[];
  rightMenu?: any | RightClickItem[];
  rightClick?: boolean;
}

const FileCompontent: React.FC<FileProps> = (props) => {
  const cRef = useRef<any>(null);

  const { data, rightMenu, rightClick } = props;
  const [select, SetSelect] = useState<any[]>([]);
  const [sourceData, SetSourceData] = useState<ItemProps[]>(data);

  useEffect(() => {
    if (!rightClick) return;
    document.getElementById('file-wrap')?.addEventListener('contextmenu', (e) => {
      if (cRef.current) {
        cRef.current.handleContextMenu(e);
      }
    });
    return document.getElementById('file-wrap')?.removeEventListener('contextmenu', (e) => {
      if (cRef.current) {
        cRef.current.handleContextMenu(e);
      }
    });
  }, [rightClick]);

  const handleSelect = (item: ItemProps) => {
    const cloneData = JSON.parse(JSON.stringify(sourceData));
    const selectData = JSON.parse(JSON.stringify(select));

    const indexOf = selectData.indexOf(item.id);
    if (indexOf > -1) {
      selectData.splice(indexOf, 1);
    } else {
      selectData.push(item.id);
    }

    SetSelect(selectData);
    const arr = cloneData.map((i: ItemProps) => {
      const items = JSON.parse(JSON.stringify(i));
      const status = selectData.includes(items.id);
      items.select = status;
      return items;
    });
    SetSourceData(arr);
  };
  return (
    <div className="file-wrap" id="file-wrap">
      {
        sourceData.map((item: ItemProps) => (
          <div className={item.select ? 'file-item file-select' : 'file-item '} key={item.id.toString()}>
            <CheckCircleOutlined onClick={() => handleSelect(item)} className={item.select ? 'file-select-icon' : 'file-unselect-icon'} />
            <img src={fileIcon[item.type]} alt={item.name} className="file-icon" />
            <div className="file-name">{item.name}</div>
          </div>
        ))
      }
      <RightClick ref={cRef} itemList={rightMenu} />
    </div>
  );
};
FileCompontent.defaultProps = {
  rightClick: false,
  data: [],
  rightMenu: [{
    name: '新建文件',
    handle: () => {
      alert(1);
    }
  }]
};

export default FileCompontent;
