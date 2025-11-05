export function moveZerosToEndOfArray(nums: number[]): number[] {
	let position: number = 0;

	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i];

		if (nums[i] !== 0 && typeof curr === "number") {
			nums[position] = curr;
			position++;
		}
	}

	while (position < nums.length) {
		nums[position] = 0;
		position++;
	}

	return nums;
}

// TODO: with 2 pointers but in simple way
