/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Sanitize string input to prevent XSS
 */
export function sanitizeString(input: string): string {
    return input
        .trim()
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .substring(0, 10000); // Limit length
}

/**
 * Validate contact form data
 */
export interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    message: string;
}

export function validateContactForm(data: any): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }

    if (!data.email || typeof data.email !== 'string' || !isValidEmail(data.email)) {
        errors.push('Valid email address is required');
    }

    if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }

    if (data.company && typeof data.company !== 'string') {
        errors.push('Company must be a string');
    }

    return {
        valid: errors.length === 0,
        errors,
    };
}

/**
 * Sanitize contact form data
 */
export function sanitizeContactForm(data: ContactFormData): ContactFormData {
    return {
        name: sanitizeString(data.name),
        email: sanitizeString(data.email),
        company: data.company ? sanitizeString(data.company) : undefined,
        message: sanitizeString(data.message),
    };
}
