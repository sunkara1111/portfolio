'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import HowIBuild from '@/components/HowIBuild';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedWork />
      <HowIBuild />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
