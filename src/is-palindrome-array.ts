export function isPalindromeArray(nums: number[]): boolean {
	const mid = Math.floor(nums.length / 2);

	let left = 0;
	let right = nums.length - 1;

	while (left < mid) {
		if (nums[left] === nums[right]) {
			left++;
			right--;
		} else {
			return false;
		}
	}

	return true;
}
