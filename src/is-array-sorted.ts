export function isArraySortedAscending(arr: number[]): boolean {
	if (arr.length <= 1) return true;

	for (let i = 0; i < arr.length - 1; i++) {
		if ((arr[i] ?? -Infinity) > (arr[i + 1] ?? Infinity)) return false;
	}

	return true;
}

export function isArraySortedDescending(arr: number[]): boolean {
	if (!arr.length) return false;
	if (arr.length === 1) return true;

	for (let i = 0; i < arr.length - 1; i++) {
		if ((arr[i] ?? Infinity) < (arr[i + 1] ?? -Infinity)) return false;
	}

	return true;
}
