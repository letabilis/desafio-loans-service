import type { Request, Response } from 'express';
import { type LoanApplication } from '@/domain/loan/loan.type.js';
import {
  CustomerSchema,
  type Customer,
} from '@/domain/customer/customer.type.js';
import { getEligibilityReport } from '@/services/loan.service.js';

export const applyForLoan = (req: Request, res: Response) => {
  const result = CustomerSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).send(result.error.message);
  } else {
    const customer: Customer = result.data;
    const loanApplication: LoanApplication = {
      age: customer.age,
      income: customer.income,
      location: customer.location,
    };
    const report = getEligibilityReport(loanApplication);
    res.status(200).json({
      name: customer.name,
      loans: report,
    });
  }
};
