"use client";

/**
 * Mobile Animation Utils
 * Handles mobile viewport height fixes and GSAP/Three.js error logging
 */

// Fix mobile 100vh issue
export function initMobileViewportFix() {
    if (typeof window === 'undefined') return;

    const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set initial value
    setVH();

    // Update on resize and orientation change
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    return () => {
        window.removeEventListener('resize', setVH);
        window.removeEventListener('orientationchange', setVH);
    };
}

// Error logging for animations
export function initAnimationErrorLogging() {
    if (typeof window === 'undefined') return;

    // Log device and browser info
    console.log('[AtomNext Mobile] Device Info:', {
        userAgent: navigator.userAgent,
        screenSize: `${window.screen.width}x${window.screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`,
        devicePixelRatio: window.devicePixelRatio,
        touchSupport: 'ontouchstart' in window,
        platform: navigator.platform,
    });

    // Listen for WebGL context loss
    const canvas = document.querySelector('canvas');
    if (canvas) {
        canvas.addEventListener('webglcontextlost', (event) => {
            event.preventDefault();
            console.error('[AtomNext Mobile] WebGL context lost!', event);
        });

        canvas.addEventListener('webglcontextrestored', () => {
            console.log('[AtomNext Mobile] WebGL context restored');
        });
    }

    // Log GSAP errors
    window.addEventListener('error', (event) => {
        if (event.message.includes('gsap') || event.message.includes('ScrollTrigger')) {
            console.error('[AtomNext Mobile] GSAP Error:', event.message, event);
        }
    });

    console.log('[AtomNext Mobile] Animation error logging initialized');
}

// Touch event helpers
export function addTouchSupport(element: HTMLElement, onTouch: (e: TouchEvent) => void) {
    if (typeof window === 'undefined' || !element) return;

    element.addEventListener('touchstart', onTouch, { passive: true });
    element.addEventListener('touchmove', onTouch, { passive: true });
    element.addEventListener('touchend', onTouch, { passive: true });

    return () => {
        element.removeEventListener('touchstart', onTouch);
        element.removeEventListener('touchmove', onTouch);
        element.removeEventListener('touchend', onTouch);
    };
}

// Check if mobile device
export function isMobile(): boolean {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768 || 'ontouchstart' in window;
}

// Get optimized particle count for mobile
export function getOptimizedParticleCount(desktop: number = 3000, mobile: number = 1000): number {
    return isMobile() ? mobile : desktop;
}
