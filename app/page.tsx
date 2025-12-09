"use client";

import { useState } from 'react';
import Preloader from '@/components/Preloader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Industries from '@/components/Industries'; // What We Build
import Portfolio from '@/components/Portfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Timeline from '@/components/Timeline';
import Pricing from '@/components/Pricing';
import Guarantees from '@/components/Guarantees';
import TechStack from '@/components/TechStack';
import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {/* Preloader - stays on top */}
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

            {/* Main content - always rendered (so it loads), but hidden until loading completes */}
            <main
                className="min-h-screen transition-opacity duration-1000"
                style={{
                    opacity: isLoading ? 0 : 1,
                    pointerEvents: isLoading ? 'none' : 'auto'
                }}
            >
                <Navigation />
                <Hero />
                <Services />
                <Industries /> {/* What We Build */}
                <Portfolio />
                <WhyChooseUs />
                <Process />
                <Timeline />
                <Pricing />
                <Guarantees />
                <TechStack />
                <CTA />
                <Testimonials />
                <About />
                <FAQ />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
