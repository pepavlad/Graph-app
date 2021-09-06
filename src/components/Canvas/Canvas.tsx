import React, { useRef, useState } from 'react';

interface CanvasProps {
	btnType: string;
}
const Canvas: React.FC<CanvasProps> = ({ btnType }) => {
	const [numOfVertic, setNumOfVertic] = useState(0);
	const ref = useRef<HTMLCanvasElement | null>(null);
	const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
	function getMousePos(canvas: HTMLCanvasElement, event: any) {
		const rect = canvas.getBoundingClientRect();
		return {
			x: event.clientX - rect.left,
			y: event.clientY - rect.top,
		};
	}
	const draw = (event: React.MouseEvent) => {
		if (ref.current) {
			const pos = getMousePos(ref.current, event);
			canvasCtxRef.current = ref.current.getContext('2d');
			const ctx = canvasCtxRef.current;
			ctx!.beginPath();
			ctx!.fillStyle = '#3d5afe';
			ctx!.arc(pos.x, pos.y, 16.5, 0, 2 * Math.PI);
			ctx!.stroke();
			ctx!.beginPath();
			ctx!.fillStyle = '#4dd0e1';
			ctx!.arc(pos.x, pos.y, 16, 0, 2 * Math.PI);
			ctx!.fill();
			ctx!.beginPath();
			ctx!.fillStyle = '#fff';
			ctx!.font = '18px bold';
			ctx!.fillText(`${numOfVertic}`, pos.x - 5, pos.y + 4.5, 12);
			ctx!.stroke();
			setNumOfVertic(numOfVertic + 1);
		}
	};
	return (
		<canvas onMouseDown={draw} id='canvas' ref={ref} width='1000' height='600' />
	);
};
export default Canvas;
