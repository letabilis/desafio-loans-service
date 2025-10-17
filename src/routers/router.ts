import { Router } from 'express';
import { checkHealth } from '@/controllers/health.controller.js';
import { applyForLoan } from '@/controllers/loan.controller.js';

export const router = Router();

router.get('/health-check', checkHealth);
router.post('/customer-loans', applyForLoan);
