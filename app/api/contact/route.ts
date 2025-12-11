import { NextRequest, NextResponse } from 'next/server';
import { saveSubmission } from '@/lib/database';
import { validateContactForm, sanitizeContactForm } from '@/lib/validation';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate the form data
        const validation = validateContactForm(body);
        if (!validation.valid) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Please check your input: ' + validation.errors.join(', '),
                    errors: validation.errors
                },
                { status: 400 }
            );
        }

        // Sanitize the data
        const sanitizedData = sanitizeContactForm(body);

        // Save to database
        const submission = saveSubmission({
            ...sanitizedData,
            type: 'contact',
        });

        return NextResponse.json({
            success: true,
            message: 'Your message has been received! We\'ll get back to you soon.',
            submissionId: submission.id,
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { success: false, message: 'An error occurred. Please try again.' },
            { status: 500 }
        );
    }
}
