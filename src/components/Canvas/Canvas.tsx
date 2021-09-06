import React, { useRef, useState } from 'react';
import draw from '../../helpers/addVertic';

interface CanvasProps {
	btnType: string;
}
const Canvas: React.FC<CanvasProps> = ({ btnType }) => {
	const [numOfVertic, setNumOfVertic] = useState(0);
	const ref = useRef<HTMLCanvasElement | null>(null);
	const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
	function eventFunc(event: React.MouseEvent) {
		switch (btnType) {
			case 'add':
				draw(event, ref, canvasCtxRef, numOfVertic, setNumOfVertic);
				break;
			default:
				break;
		}
	}
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
