export function minAndMaxInArrayNative(
	arr: number[],
): { min: number; max: number } | null {
	if (!arr.length) {
		return null;
	}

	if (arr.length === 1) {
		return { min: arr[0] ?? -Infinity, max: arr[0] ?? Infinity };
	}

	return {
		min: Math.min(...arr),
		max: Math.max(...arr),
	};
}

export function minAndMaxInArrayLoop(
	arr: number[],
): { min: number; max: number } | null {
	if (!arr.length) {
		return null;
	}

	if (arr.length === 1) {
		return { min: arr[0] ?? -Infinity, max: arr[0] ?? Infinity };
	}

	let min = arr[0] ?? -Infinity;
	let max = arr[0] ?? Infinity;

	for (let i = 1; i < arr.length; i++) {
		if ((arr[i] ?? -Infinity) < min) {
			min = arr[i] ?? -Infinity;
		}

		if ((arr[i] ?? Infinity) > max) {
			max = arr[i] ?? Infinity;
		}
	}

	return { min, max };
}

export function minAndMaxInArrayReduce(
	arr: number[],
): { min: number; max: number } | null {
	if (!arr.length) {
		return null;
	}

	if (arr.length === 1) {
		return { min: arr[0] ?? -Infinity, max: arr[0] ?? Infinity };
	}

	return arr.reduce(
		(acc, curr) => {
			if (curr < acc.min) {
				acc.min = curr;
			}

			if (curr > acc.max) {
				acc.max = curr;
			}

			return acc;
		},
		{
			min: arr[0] ?? -Infinity,
			max: arr[0] ?? Infinity,
		},
	);
}
