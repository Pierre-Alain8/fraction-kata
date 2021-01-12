export class Fraction {
    constructor( private numerator: number, 
    private denominator: number) {
    }

    static add (fractionA: Fraction, fractionB: Fraction) {
        if(fractionA.denominator === fractionB.denominator){
            return new Fraction( 
                fractionA.numerator + fractionB.numerator, fractionB.denominator);
            }

            return new Fraction((fractionA.numerator * fractionB.denominator) + 
            fractionB.numerator, fractionB.denominator);
        } 
}