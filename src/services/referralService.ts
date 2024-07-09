import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface ReferralData {
    referrer: string;
    referee: string;
    email: string;
}

export const createReferralService = async (data: ReferralData) => {
    return prisma.referral.create({
        data,
    });
};
