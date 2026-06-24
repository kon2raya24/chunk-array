import { describe, it, expect } from "vitest";
import { chunk } from "../chunk";

describe("chunk", () => {
  it("should be a function", () => {
    expect(typeof chunk).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => chunk(null as any)).toThrow();
  });
});
