import { Variants } from 'framer-motion';

// GSAP Animation Constants
export const GSAP_EASING = {
    power4Out: 'power4.out',
    power3InOut: 'power3.inOut',
    elastic: 'elastic.out(1, 0.3)',
} as const;

export const GSAP_DURATION = {
    fast: 0.3,
    medium: 0.6,
    slow: 0.8,
    stagger: 0.05,
} as const;

// Framer Motion Variants
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96],
        },
    },
};

export const fadeIn: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96],
        },
    },
};

export const glimmer: Variants = {
    initial: {
        width: '0%',
    },
    hover: {
        width: '100%',
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};

// ScrollTrigger default settings
export const SCROLL_TRIGGER_DEFAULTS = {
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
} as const;
