const grantConsignmentLoan = (income: number): boolean => {
  if (income >= 5000) {
    return true;
  }
  return false;
};

const grantGuaranteedLoan = (
  age: number,
  income: number,
  location: string,
): boolean => {
  if (income <= 3000) {
    return true;
  }

  if (income > 5000) {
    return false;
  }

  if (age < 30 && location === 'SP') {
    return true;
  }

  return false;
};

const grantPersonalLoan = (
  age: number,
  income: number,
  location: string,
): boolean => {
  if (income <= 3000) {
    return true;
  }

  if (income > 5000) {
    return false;
  }

  if (age < 30 && location === 'SP') {
    return true;
  }

  return false;
};

export const loanRules = {
  grantConsignmentLoan,
  grantGuaranteedLoan,
  grantPersonalLoan,
};
