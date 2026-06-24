import { describe, it, expect } from "vitest";
import { shuffle } from "../shuffle";

describe("shuffle", () => {
  it("should be a function", () => {
    expect(typeof shuffle).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => shuffle(null as any)).toThrow();
  });
});
