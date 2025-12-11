import { NextRequest, NextResponse } from 'next/server';
import { saveSubmission } from '@/lib/database';
import { sanitizeString, isValidEmail } from '@/lib/validation';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { name, email, phone, countryCode, company, message, preferredDate, preferredTime } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, message: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { success: false, message: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Format full phone number if provided
        const fullPhone = (phone && countryCode) ? `${countryCode} ${phone}` : phone;

        // Save meeting request to database
        const submission = saveSubmission({
            name: sanitizeString(name),
            email: sanitizeString(email),
            company: company ? sanitizeString(company) : undefined,
            message: sanitizeString(message),
            type: 'meeting',
            meetingDetails: {
                preferredDate: preferredDate ? sanitizeString(preferredDate) : undefined,
                preferredTime: preferredTime ? sanitizeString(preferredTime) : undefined,
                phone: fullPhone ? sanitizeString(fullPhone) : undefined,
            },
        });

        return NextResponse.json({
            success: true,
            message: 'Meeting request received! We\'ll contact you soon to confirm.',
            submissionId: submission.id,
        });

    } catch (error) {
        console.error('Meeting schedule error:', error);
        return NextResponse.json(
            { success: false, message: 'An error occurred. Please try again.' },
            { status: 500 }
        );
    }
}
