import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { getAllSubmissions, updateSubmissionStatus, deleteSubmission, getSubmissionStats } from '@/lib/database';

/**
 * Verify admin authentication from cookie
 */
function verifyAdmin(request: NextRequest): boolean {
    const token = request.cookies.get('admin_token')?.value;
    if (!token) return false;

    const session = verifyToken(token);
    return session !== null;
}

/**
 * GET - Retrieve all submissions
 */
export async function GET(request: NextRequest) {
    if (!verifyAdmin(request)) {
        return NextResponse.json(
            { success: false, message: 'Unauthorized' },
            { status: 401 }
        );
    }

    try {
        const submissions = getAllSubmissions();
        const stats = getSubmissionStats();

        return NextResponse.json({
            success: true,
            submissions,
            stats,
        });
    } catch (error) {
        console.error('Error fetching submissions:', error);
        return NextResponse.json(
            { success: false, message: 'Error fetching submissions' },
            { status: 500 }
        );
    }
}

/**
 * PATCH - Update submission status
 */
export async function PATCH(request: NextRequest) {
    if (!verifyAdmin(request)) {
        return NextResponse.json(
            { success: false, message: 'Unauthorized' },
            { status: 401 }
        );
    }

    try {
        const body = await request.json();
        const { id, status } = body;

        if (!id || !status || (status !== 'read' && status !== 'unread')) {
            return NextResponse.json(
                { success: false, message: 'Invalid request' },
                { status: 400 }
            );
        }

        const success = updateSubmissionStatus(id, status);

        if (!success) {
            return NextResponse.json(
                { success: false, message: 'Submission not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Submission updated',
        });
    } catch (error) {
        console.error('Error updating submission:', error);
        return NextResponse.json(
            { success: false, message: 'Error updating submission' },
            { status: 500 }
        );
    }
}

/**
 * DELETE - Delete a submission
 */
export async function DELETE(request: NextRequest) {
    if (!verifyAdmin(request)) {
        return NextResponse.json(
            { success: false, message: 'Unauthorized' },
            { status: 401 }
        );
    }

    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { success: false, message: 'Submission ID is required' },
                { status: 400 }
            );
        }

        const success = deleteSubmission(id);

        if (!success) {
            return NextResponse.json(
                { success: false, message: 'Submission not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Submission deleted',
        });
    } catch (error) {
        console.error('Error deleting submission:', error);
        return NextResponse.json(
            { success: false, message: 'Error deleting submission' },
            { status: 500 }
        );
    }
}
