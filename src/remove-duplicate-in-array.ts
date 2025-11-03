export function removeDuplicateInArraySet(arr: number[]): number[] {
	return Array.from(new Set(arr).values());
}

export function removeDuplicateInArrayFilter(arr: number[]): number[] {
	return arr.filter((curr, idx) => arr.indexOf(curr) === idx);
}

export function removeDuplicateInArrayLoop(arr: unknown[]): number[] {
	const newArray: number[] = [];

	outer: for (let i = 0; i < arr.length; i++) {
		const curr = arr[i];

		if (typeof curr !== "number") continue;

		for (let j = 0; j < newArray.length; j++) {
			if (newArray[j] === curr) continue outer;
		}

		newArray.push(curr);
	}

	return newArray;
}
