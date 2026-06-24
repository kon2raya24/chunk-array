export function chunk<T>(arr: T[], size: number): T[][] {
  if (!Array.isArray(arr)) throw new Error("First argument must be an array");
  if (size <= 0) throw new Error("Chunk size must be positive");
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
