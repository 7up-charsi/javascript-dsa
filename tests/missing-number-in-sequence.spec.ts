import { describe, expect, it } from "vitest";
import { missingNumberInSequence } from "../src/missing-number-in-sequence";

describe("Missing Number In Sequence", () => {
	it("should find 2 missing from [3, 0, 1] (N=3)", () => {
		const result = missingNumberInSequence([3, 0, 1]);
		expect(result).toBe(2);
	});

	it("should find 8 missing from the middle of a large sequence (N=9)", () => {
		const result = missingNumberInSequence([9, 6, 4, 2, 3, 5, 7, 0, 1]);
		expect(result).toBe(8);
	});

	it("should find 0 missing from a sequence starting at 1 (N=2)", () => {
		const result = missingNumberInSequence([1, 2]);
		expect(result).toBe(0);
	});
});
