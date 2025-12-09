"use client";

import { useEffect } from 'react';
import { initMobileViewportFix, initAnimationErrorLogging } from '@/lib/mobileUtils';

export default function MobileInit() {
    useEffect(() => {
        // Initialize mobile viewport height fix
        const cleanupViewport = initMobileViewportFix();

        // Initialize error logging
        initAnimationErrorLogging();

        // Log initialization
        console.log('[AtomNext] Mobile initialization complete');

        return () => {
            if (cleanupViewport) cleanupViewport();
        };
    }, []);

    return null;
}
