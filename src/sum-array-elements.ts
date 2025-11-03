export function sumArrayElementsLoop(arr: number[]): number {
	let sum = 0;

	for (const num of arr) {
		sum += num;
	}

	return sum;
}

export function sumArrayElementsReduc(arr: number[]): number {
	return arr.reduce((acc, curr) => acc + curr, 0);
}
