import {square} from './models.js';
import {drawPolygon} from './draw.js';

function toPoint(values) {
	return{
		x: values[0],
		y: values[1],
		z: values[2],
	}
}

function toPolygon(shape) {
	return shape.map(toPoint);
}

function toMesh(shape) {
	return shape.map(toPolygon);
}

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const mesh = toMesh(square);

function perspective(point, distance) {
	const fov = point.z + distance;
	point.x /= fov;
	point.z /= fov;
}

context.strokeStyle = "#fff";
mesh.forEach(polygon => {
	polygon.forEach(point => {
		perspective(point, 50);
	});

	drawPolygon(polygon, context);
});
console.log(mesh);