import { Request, Response, NextFunction } from 'express';
import { createReferralService } from '../services/referralService';

export const createReferral = async (req: Request, res: Response, next: NextFunction) => {
    const { referrer, referee, email } = req.body;

    try {
        if (!referrer || !referee || !email) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const referral = await createReferralService({ referrer, referee, email });
        res.status(201).json(referral);
    } catch (error) {
        next(error);
    }
};
