import { DnaValidator } from "./DnaValidator";

export class BasicDnaValidator implements DnaValidator {
  validate(dna: string[][]): boolean {
    return dna.length > 0 && dna[0].length > 0;
  }
}