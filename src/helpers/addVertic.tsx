import React from 'react';
import getMousePos from './getMousePos';

const draw = (
	event: React.MouseEvent,
	ref: React.MutableRefObject<HTMLCanvasElement | null>,
	canvasCtxRef: React.MutableRefObject<CanvasRenderingContext2D | null>,
	numOfVertic: number,
	setNumOfVertic: (value: number) => void
) => {
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

export default draw;
