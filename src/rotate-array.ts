export function rorateArraySimpleLeftSide(arr: unknown[]): unknown[] {
	const n = arr.length;
	if (!n || n === 1) return arr;

	const [first, ...rest] = arr;

	return [...rest, first];
}

export function rotateArrayLeftSide(
	arr: unknown[],
	toRotate: number,
): unknown[] {
	const n = arr.length;
	if (n === 0 || n === 1 || !toRotate) return arr;

	const rotate = toRotate % n;
	if (rotate === 0) return arr;

	const result = new Array(n);
	let newIndex = 0;

	// Move elements after rotation point to the front
	for (let i = rotate; i < n; i++) {
		result[newIndex++] = arr[i];
	}

	// Move the rotated-out elements to the end
	for (let i = 0; i < rotate; i++) {
		result[newIndex++] = arr[i];
	}

	return result;
}

export function rotateArrayRightSide(
	arr: unknown[],
	toRotate: number,
): unknown[] {
	const n = arr.length;
	if (n === 0 || n === 1 || !toRotate) return arr;

	const rotate = toRotate % n;
	if (rotate === 0) return arr;

	const result = new Array(n);
	let newIndex = 0;

	// Take last `rotate` elements first
	for (let i = n - rotate; i < n; i++) {
		result[newIndex++] = arr[i];
	}

	// Then fill the remaining from the start
	for (let i = 0; i < n - rotate; i++) {
		result[newIndex++] = arr[i];
	}

	return result;
}
