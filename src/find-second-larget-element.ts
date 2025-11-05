export function findSecondLargestElemtInArray(nums: number[]): number {
	let largest = Number.NEGATIVE_INFINITY;
	let secondLargest = Number.NEGATIVE_INFINITY;

	if (nums.length === 1) {
		const first = nums[0];

		if (typeof first !== "number") throw new Error("invalid input");

		return first;
	}

	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i];

		if (typeof curr !== "number") throw new Error("invalid input");

		if (curr > largest) {
			secondLargest = largest;
			largest = curr;
		} else if (curr > secondLargest && curr < largest) {
			secondLargest = curr;
		}
	}

	return secondLargest;
}
