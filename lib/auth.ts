import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key-change-in-production';

export interface AdminSession {
    userId: string;
    timestamp: number;
}

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
}

/**
 * Generate a JWT token for admin session
 */
export function generateToken(payload: AdminSession): string {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: '7d', // Token expires in 7 days
    });
}

/**
 * Verify and decode a JWT token
 */
export function verifyToken(token: string): AdminSession | null {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as AdminSession;
        return decoded;
    } catch (error) {
        return null;
    }
}

/**
 * Get admin password hash from environment
 * If not set, generate one from the default password
 */
export async function getAdminPasswordHash(): Promise<string> {
    const envHash = process.env.ADMIN_PASSWORD_HASH;

    if (envHash && envHash !== '$2b$10$YourHashWillBeGeneratedHere') {
        return envHash;
    }

    // Default password for development: Nashil@807
    // In production, you should set ADMIN_PASSWORD_HASH in .env.local
    const defaultPassword = 'Nashil@807';
    return hashPassword(defaultPassword);
}
