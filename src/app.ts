import express from 'express';
import referralRoutes from './routes/referralRoutes';
import { errorHandler } from './utils/errorHandler';

const app = express();
app.use(express.json());

app.use('/api/referrals', referralRoutes);

app.use(errorHandler);

export default app;
