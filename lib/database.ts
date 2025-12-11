import fs from 'fs';
import path from 'path';

const DATA_DIR = process.env.DATA_PATH || path.join(process.cwd(), 'data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'submissions.json');

export interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    company?: string;
    message: string;
    type: 'contact' | 'meeting';
    status: 'unread' | 'read';
    timestamp: number;
    meetingDetails?: {
        preferredDate?: string;
        preferredTime?: string;
        phone?: string;
    };
}

export interface SubmissionsData {
    submissions: ContactSubmission[];
}

/**
 * Initialize data directory and file if they don't exist
 */
function initializeDataStore(): void {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (!fs.existsSync(SUBMISSIONS_FILE)) {
        const initialData: SubmissionsData = { submissions: [] };
        fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(initialData, null, 2));
    }
}

/**
 * Read all submissions from the data store
 */
export function getAllSubmissions(): ContactSubmission[] {
    initializeDataStore();

    try {
        const data = fs.readFileSync(SUBMISSIONS_FILE, 'utf-8');
        const parsed: SubmissionsData = JSON.parse(data);
        return parsed.submissions || [];
    } catch (error) {
        console.error('Error reading submissions:', error);
        return [];
    }
}

/**
 * Save a new submission to the data store
 */
export function saveSubmission(submission: Omit<ContactSubmission, 'id' | 'timestamp' | 'status'>): ContactSubmission {
    initializeDataStore();

    const newSubmission: ContactSubmission = {
        ...submission,
        id: generateId(),
        timestamp: Date.now(),
        status: 'unread',
    };

    const submissions = getAllSubmissions();
    submissions.unshift(newSubmission); // Add to beginning of array

    const data: SubmissionsData = { submissions };
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(data, null, 2));

    return newSubmission;
}

/**
 * Update a submission's status
 */
export function updateSubmissionStatus(id: string, status: 'read' | 'unread'): boolean {
    const submissions = getAllSubmissions();
    const index = submissions.findIndex(sub => sub.id === id);

    if (index === -1) return false;

    submissions[index].status = status;

    const data: SubmissionsData = { submissions };
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(data, null, 2));

    return true;
}

/**
 * Delete a submission by ID
 */
export function deleteSubmission(id: string): boolean {
    const submissions = getAllSubmissions();
    const filteredSubmissions = submissions.filter(sub => sub.id !== id);

    if (filteredSubmissions.length === submissions.length) {
        return false; // No submission was deleted
    }

    const data: SubmissionsData = { submissions: filteredSubmissions };
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(data, null, 2));

    return true;
}

/**
 * Generate a unique ID for submissions
 */
function generateId(): string {
    return `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Get statistics about submissions
 */
export function getSubmissionStats() {
    const submissions = getAllSubmissions();
    const now = Date.now();
    const sevenDaysAgo = now - (7 * 24 * 60 * 60 * 1000);

    return {
        total: submissions.length,
        unread: submissions.filter(s => s.status === 'unread').length,
        recentCount: submissions.filter(s => s.timestamp >= sevenDaysAgo).length,
        contactForms: submissions.filter(s => s.type === 'contact').length,
        meetingRequests: submissions.filter(s => s.type === 'meeting').length,
    };
}
