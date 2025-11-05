import { describe, expect, it } from "vitest";
import { countOccurrencesInArray } from "../src/count-occurrences-in-array";

describe("Count Occurrences In Array", () => {
	it("should return 3 for the number 2 in a standard array", () => {
		const result = countOccurrencesInArray([1, 2, 2, 3, 2, 4], 2);
		expect(result).toBe(3);
	});

	it("should return 0 when the element is not present", () => {
		const result = countOccurrencesInArray([5, 6, 7], 1);
		expect(result).toBe(0);
	});

	it("should return the total length for an array of identical elements", () => {
		const result = countOccurrencesInArray([9, 9, 9, 9], 9);
		expect(result).toBe(4);
	});
});
