import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const apiUrl = process.env.API_URL;

console.log("API URL:", apiUrl);

export default prisma;