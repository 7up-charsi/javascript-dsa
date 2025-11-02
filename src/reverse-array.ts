export const reverseArrayNative = (arr: unknown[]) => {
	return [...arr].reverse();
};

export const reverseArrayTwoPointers = (arr: unknown[]) => {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		[arr[left], arr[right]] = [arr[right], arr[left]];
		left++;
		right--;
	}

	return arr;
};

export const reverseArrayNewArray = (arr: unknown[]) => {
	const newArray = [];

	for (let i = arr.length - 1; i >= 0; i--) {
		newArray.push(arr[i]);
	}

	return newArray;
};

export const reverseArrayReduce = (arr: unknown[]) => {
	return arr.reduce<unknown[]>((acc, ele) => [ele, ...acc], []);
};

export const reverseArrayWhile = (arr: unknown[]) => {
	const existingArray = [...arr];
	const newArray = [];

	while (existingArray.length) {
		newArray.push(existingArray.pop());
	}

	return newArray;
};

export const reverseArrayRecursive = (arr: unknown[]) => {
	const recursive = (arr: unknown[]): unknown[] => {
		if (arr.length === 0) return [];

		const [first, ...rest] = arr;

		return [...recursive(rest), first];
	};

	return recursive(arr);
};
