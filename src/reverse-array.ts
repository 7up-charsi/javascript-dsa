export const reverseArrayNative = (arr: unknown[]) => {
	return [...arr].reverse();
};

export const reverseArrayWith2Pointers = (arr: unknown[]) => {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		[arr[left], arr[right]] = [arr[right], arr[left]];
		left++;
		right--;
	}

	return arr;
};

export const reverseArrayWithNewArray = (arr: unknown[]) => {
	const newArray = [];

	for (let i = arr.length - 1; i >= 0; i--) {
		newArray.push(arr[i]);
	}

	return newArray;
};
