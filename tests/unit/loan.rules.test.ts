import { loanRules } from '../../src/domain/loan/loan.rules.ts';

describe('grant personal loan – any location, income <= 3000', () => {
  test('returns true when income < 3000', () => {
    expect(loanRules.grantPersonalLoan(19, 2999, "AM")).toBe(true);
  })

  test('returns true when income = 3000', () => {
    expect(loanRules.grantPersonalLoan(21, 3000, "BH")).toBe(true);
  })

  test('returns false when income > 3000', () => {
    expect(loanRules.grantPersonalLoan(42, 3001, "RO")).toBe(false);
  })
})

describe('grant personal loan – SP, 3000 < income < 5000', () => {
  test('returns true when age < 30', () => {
    expect(loanRules.grantPersonalLoan(29, 5000, "SP")).toBe(true);
  })

  test('returns false when age >= 30', () => {
    expect(loanRules.grantPersonalLoan(30, 3001, "SP")).toBe(false);
  })
})

describe('grant consignment loan – income >= 5000', () => {
  test('returns true when income = 5000', () => {
    expect(loanRules.grantConsignmentLoan(5000)).toBe(true);
  })

  test('returns true when income > 5000', () => {
    expect(loanRules.grantConsignmentLoan(5001)).toBe(true);
  })

  test('returns false when income < 5000', () => {
    expect(loanRules.grantConsignmentLoan(4999)).toBe(false);
  })
})

describe('grant guaranteed loan – income <= 3000, any location', () => {
  test('returns true when income < 3000', () => {
    expect(loanRules.grantGuaranteedLoan(25, 2999,"AM")).toBe(true);
  })

  test('returns true when income = 3000', () => {
    expect(loanRules.grantGuaranteedLoan(30, 3000,"BH")).toBe(true);
  })

  test('returns false when income > 3000', () => {
    expect(loanRules.grantGuaranteedLoan(40, 3001,"RO")).toBe(false);
  })
})


describe('grant guaranteed loan – SP, 3000 <= income <= 5000', () => {
  test('returns true when age < 30', () => {
    expect(loanRules.grantGuaranteedLoan(29, 3000, "SP")).toBe(true);
  })

  test('returns false when age >= 30', () => {
    expect(loanRules.grantGuaranteedLoan(30, 5000, "SP")).toBe(false);
  })
})
