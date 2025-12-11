import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword, generateToken, getAdminPasswordHash } from '@/lib/auth';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { password } = body;

        if (!password) {
            return NextResponse.json(
                { success: false, message: 'Password is required' },
                { status: 400 }
            );
        }

        // Get the admin password hash
        const adminPasswordHash = await getAdminPasswordHash();

        // Verify password
        const isValid = await verifyPassword(password, adminPasswordHash);

        if (!isValid) {
            return NextResponse.json(
                { success: false, message: 'Invalid password' },
                { status: 401 }
            );
        }

        // Generate JWT token
        const token = generateToken({
            userId: 'admin',
            timestamp: Date.now(),
        });

        // Set cookie with the token
        const response = NextResponse.json({
            success: true,
            message: 'Login successful',
        });

        response.cookies.set('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: '/',
        });

        return response;

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { success: false, message: 'An error occurred during login' },
            { status: 500 }
        );
    }
}
