import { Fraction } from ".";


describe("Test first function", () =>{
  it(`Should return Fraction instance with numerator  
  = 0 and denominator = 1`, () =>{
    //given
      const fractionA = new Fraction(0,1);
      const fractionB = new Fraction(0,1);
    //When
      const result = Fraction.add(fractionA, fractionB);
    //Then
      const expectedResult = new Fraction(0,1);      

      expect(result).toEqual(expectedResult);
  })

  it(`Should return Fraction instance with numerator = 
  1 and denominators = 1`, () =>{
    //given
    const fractionA = new Fraction(1,1);
    const fractionB = new Fraction(0,1);
    //When

    const result = Fraction.add(fractionA, fractionB);
  
    //Then
    const expectedResult = new Fraction(1,1);      

    expect(result).toEqual(expectedResult);
  })

  it(`Should return Fraction instance with numerator = 
  1 and denominators = 1`, () =>{
    //given
    const fractionA = new Fraction(1,1);
    const fractionB = new Fraction(1,1);
    //When

    const result = Fraction.add(fractionA, fractionB);
  
    //Then
    const expectedResult = new Fraction(2,1);      

    expect(result).toEqual(expectedResult);
  })

  it(`Should return Fraction instance with numerator = 
  1 and denominators = 6`, () =>{
    //given
    const fractionA = new Fraction(1,6);
    const fractionB = new Fraction(1,6);
    //When

    const result = Fraction.add(fractionA, fractionB);
  
    //Then
    const expectedResult = new Fraction(2,6);      

    expect(result).toEqual(expectedResult);
  })

  it(`Should return Fraction instance with numerator = 
  1 and denominator is not equal`, () =>{
    //given
    const fractionA = new Fraction(1,1);
    const fractionB = new Fraction(1,3);
    //When

    const result = Fraction.add(fractionA, fractionB);
  
    //Then
    const expectedResult = new Fraction(4,3);      

    expect(result).toEqual(expectedResult);
  })
});