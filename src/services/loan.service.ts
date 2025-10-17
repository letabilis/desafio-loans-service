import {
  type LoanApplication,
  type Loan,
  AnnualPercentageRate,
} from '@/domain/loan/loan.type.js';
import { loanRules } from '@/domain/loan/loan.rules.js';

export const getEligibilityReport = (data: LoanApplication): Loan[] => {
  const report: Loan[] = [];

  if (loanRules.grantConsignmentLoan(data.income)) {
    report.push({
      type: 'CONSIGNMENT',
      interest_rate: AnnualPercentageRate['CONSIGNMENT'],
    });
  }

  if (loanRules.grantPersonalLoan(data.age, data.income, data.location)) {
    report.push({
      type: 'PERSONAL',
      interest_rate: AnnualPercentageRate['PERSONAL'],
    });
  }

  if (loanRules.grantGuaranteedLoan(data.age, data.income, data.location)) {
    report.push({
      type: 'GUARANTEED',
      interest_rate: AnnualPercentageRate['GUARANTEED'],
    });
  }

  return report;
};
