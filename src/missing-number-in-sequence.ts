export function missingNumberInSequence(nums: number[]): number {
	const largest = nums.length;

	const expectedSum = (largest * (largest + 1)) / 2;

	let actualSum = 0;

	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i];

		if (typeof curr !== "number") throw new Error("invalid input");

		actualSum += curr;
	}

	const missingNumber = expectedSum - actualSum;

	return missingNumber;
}
