import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import draw from '../../helpers/addVertic';
import addConnect from '../../helpers/addConnect';
import drawConnect from '../../helpers/drawConnect';
import { IVertic } from '../../interfaces/IVertic';
import render from '../../helpers/render';
import addVertic from '../../redux/thunk/graphs';

interface CanvasProps {
  btnType: string;
}

const Canvas: React.FC<CanvasProps> = ({ btnType }) => {
  const [numOfVertic, setNumOfVertic] = useState(0);
  const dispatch = useDispatch();
  // const [vertics, setVirtics] = useState<IVertic[]>([]);
  // const [toConnectVertics, setToConnectVertics] = useState<IVertic[]>([]);
  const ref = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  function eventFunc(event: any) {
    if (ref.current) {
      canvasCtxRef.current = ref.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      switch (btnType) {
        case 'add':
          dispatch(addVertic(event, ref, ctx, numOfVertic, setNumOfVertic));
          break;
        case 'connect':
          // addConnect(
          //   event,
          //   ctx,
          //   canvasCtxRef,
          //   vertics,
          //   ref,
          //   setToConnectVertics
          // );
          break;
        default:
          break;
      }
    }
  }

  // useEffect(() => {
  //   if (toConnectVertics.length === 2) {
  //     render(vertics, canvasCtxRef, ref, setToConnectVertics);
  //     drawConnect(ref, canvasCtxRef, toConnectVertics);
  //     setToConnectVertics([]);
  //   }
  // }, [vertics, toConnectVertics, setToConnectVertics]);

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
