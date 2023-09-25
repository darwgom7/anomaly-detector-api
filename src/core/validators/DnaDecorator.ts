import { DnaValidator } from "./DnaValidator";

export abstract class DnaDecorator implements DnaValidator {
  constructor(protected inner: DnaValidator) {}

  validate(dna: string[][]): boolean {
    return this.inner.validate(dna);
  }
}