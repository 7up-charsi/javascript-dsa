import { describe, expect, it } from "vitest";
import { isPalindromeArray } from "../src/is-palindrome-array";

describe("isPalindromeArray", () => {
	it("should return true for an odd-length palindrome", () => {
		const result = isPalindromeArray([1, 2, 3, 2, 1]);
		expect(result).toBe(true);
	});

	it("should return true for an even-length palindrome", () => {
		const result = isPalindromeArray([1, 2, 2, 1]);
		expect(result).toBe(true);
	});

	it("should return false for a non-palindrome array", () => {
		const result = isPalindromeArray([1, 2, 3, 4, 5]);
		expect(result).toBe(false);
	});

	it("should return true for a single element array", () => {
		const result = isPalindromeArray([5]);
		expect(result).toBe(true);
	});

	it("should return true for an empty array", () => {
		const result = isPalindromeArray([]);
		expect(result).toBe(true);
	});
});
