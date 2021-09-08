import React, { useRef, useState, useEffect, useCallback } from 'react';
import draw from '../../helpers/addVertic';
import addConnect from '../../helpers/addConnect';
import drawConnect from '../../helpers/drawConnect';
import { IVertic } from '../../interfaces/IVertic';
import { Link } from '../../interfaces/links';

interface CanvasProps {
  btnType: string;
}

const Canvas: React.FC<CanvasProps> = ({ btnType }) => {
  const [numOfVertic, setNumOfVertic] = useState(0);
  const [vertics, setVirtics] = useState<IVertic[]>([]);
  const [toConnectVertics, setToConnectVertics] = useState<IVertic[]>([]);
  const ref = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  function eventFunc(event: any) {
    if (ref.current) {
      canvasCtxRef.current = ref.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      switch (btnType) {
        case 'add':
          draw(
            event,
            ref,
            ctx,
            numOfVertic,
            setNumOfVertic,
            vertics,
            setVirtics
          );
          break;
        case 'connect':
          addConnect(event, ctx, vertics, setToConnectVertics);
          break;
        default:
          break;
      }
    }
  }

  useEffect(() => {
    if (toConnectVertics.length === 2) {
      drawConnect(ref, canvasCtxRef, toConnectVertics);
      vertics.forEach(e => {
        e.isSelected = false;
      });
      setToConnectVertics([]);
    }
  }, [vertics, toConnectVertics, setToConnectVertics]);

  return (
    <canvas
      onMouseDown={eventFunc}
      id='canvas'
      ref={ref}
      width='1000'
      height='600'
    />
  );
};
export default Canvas;
