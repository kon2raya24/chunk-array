import { describe, it, expect } from "vitest";
import { flatten } from "../flatten";

describe("flatten", () => {
  it("should be a function", () => {
    expect(typeof flatten).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => flatten(null as any)).toThrow();
  });
});
