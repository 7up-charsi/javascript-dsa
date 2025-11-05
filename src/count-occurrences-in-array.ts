export function countOccurrencesInArray(
	nums: number[],
	toFind: number,
): number {
	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === toFind) count++;
	}

	return count;
}
