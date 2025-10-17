export type Loan = {
  type: LoanType;
  interest_rate: number;
};

export type LoanApplication = {
  age: number;
  income: number;
  location: string;
};

type LoanType = 'CONSIGNMENT' | 'GUARANTEED' | 'PERSONAL';

export const AnnualPercentageRate: Record<LoanType, number> = {
  CONSIGNMENT: 2,
  GUARANTEED: 3,
  PERSONAL: 4,
};
