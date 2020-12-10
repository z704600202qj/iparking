import React, {
  useEffect, useImperativeHandle, forwardRef
} from 'react';
import './style/index';

export interface CanvasToImageProps {
  title: string;
  to?: boolean;
  height?: number;
  width?: number;
  font?: string;
  style?: React.CSSProperties;
}

const CanvasToImage: React.FC<CanvasToImageProps> = forwardRef((props, parentRef) => {
  const {
    title, width = 200, height = 200, font, style
  } = props;
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    draw(canvas);
  });
  const draw = (canvas: any) => () => {
    const txt = title.substring(0, 1);
    const ctx = canvas?.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 0)';
    ctx.fillRect(0, 0, width, height);
    ctx.font = font;
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(txt, width / 2, height / 2);
    ctx.fill();
  };
  useImperativeHandle(parentRef, () => ({
    imageUrl() {
      const canvas: any = document.getElementById('canvas');
      const tempSrc = canvas.toDataURL('image/png');
      return tempSrc;
    }
  }));
  return (<canvas id="canvas" width={width} height={height} style={{ ...style }} />);
});
CanvasToImage.defaultProps = {
  to: true,
  title: '图片',
  height: 200,
  width: 200,
  font: 'bold 53px serif'
};

export default CanvasToImage;
