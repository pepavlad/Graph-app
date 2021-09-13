
import { IVertic } from '../../../interfaces/IVertic';

const drawVertic = (
  ctx: CanvasRenderingContext2D | null,
  circleColor: string,
  elem:
    | {
        x: number;
        y: number;
      }
    | IVertic,
  num: number
) => {
  const circle = new Path2D();
  ctx!.beginPath();
  circle.arc(elem.x, elem.y, 16.5, 0, 2 * Math.PI);
  ctx!.fillStyle = circleColor;
  ctx!.fill(circle);
  ctx!.lineWidth = 2;
  ctx!.strokeStyle = '#006064';
  ctx!.stroke(circle);
  ctx!.fillStyle = '#fff';
  ctx!.font = '18px bold';
  ctx!.fillText(`${num}`, elem.x - 5, elem.y + 4.5, 12);
  return circle;
};

export default drawVertic;