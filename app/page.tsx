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
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

            {!isLoading && (
                <main className="min-h-screen">
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
            )}
        </>
    );
}
