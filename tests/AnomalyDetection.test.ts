import { hasAnomaly } from "../src/core/business/AnomalyDetection";

describe("Anomaly Detection Tests", () => {
  test("Should return true for a vertical sequence", () => {
    const dna = [
      ["A", "B", "C", "D", "E"],
      ["A", "A", "A", "D", "D"],
      ["B", "U", "D", "C", "E"],
      ["A", "B", "C", "D", "A"],
      ["B", "A", "C", "D", "E"],
    ];
    expect(hasAnomaly(dna)).toBe(true);
  });

  test("Should return true for a horizontal sequence", () => {
    const dna = [
      ["A", "B", "C", "D", "E"],
      ["A", "B", "C", "D", "D"],
      ["B", "A", "D", "D", "E"],
      ["A", "B", "C", "C", "A"],
      ["B", "A", "C", "A", "E"],
    ];
    expect(hasAnomaly(dna)).toBe(true);
  });

  test("Should return true for a diagonal sequence", () => {
    const dna = [
      ["A", "B", "C", "D", "E"],
      ["A", "B", "C", "D", "C"],
      ["B", "A", "D", "C", "E"],
      ["A", "B", "C", "D", "A"],
      ["B", "A", "C", "D", "E"],
    ];
    expect(hasAnomaly(dna)).toBe(true);
  });

  test("Should return true for a reverse diagonal sequence", () => {
    const dna = [
      ["A", "B", "C", "D", "E"],
      ["A", "B", "C", "D", "B"],
      ["B", "A", "D", "A", "E"],
      ["A", "B", "A", "D", "A"],
      ["B", "B", "C", "D", "E"],
    ];
    expect(hasAnomaly(dna)).toBe(true);
  });

  test("Should return false for no sequence found", () => {
    const dna = [
      ["A", "B", "C", "D", "E"],
      ["A", "B", "C", "D", "B"],
      ["B", "A", "D", "A", "E"],
      ["A", "B", "D", "D", "A"],
      ["B", "A", "C", "D", "E"],
    ];
    expect(hasAnomaly(dna)).toBe(false);
  });
});
