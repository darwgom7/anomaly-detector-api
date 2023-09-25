import { DnaDecorator } from './DnaDecorator';

export class AdvancedDnaValidator extends DnaDecorator {
  validate(dna: string[][]): boolean {
    if (!super.validate(dna)) {
      return false;
    }
    return dna.every(row => row.length === dna[0].length);
  }
}