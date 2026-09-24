'use client';

import React from 'react';
import { HeroSection } from './HeroSection';
import { AiModelsGrid } from './AiModelsGrid';
import { FeaturesSection } from './FeaturesSection';
import { ExtensionShowcase } from './ExtensionShowcase';
import { ComparisonTable } from './ComparisonTable';
import { PricingSection } from './PricingSection';
import { FaqSection } from './FaqSection';
import { Footer } from './Footer';

export const LandingView: React.FC = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <HeroSection />
      <AiModelsGrid />
      <FeaturesSection />
      <ExtensionShowcase />
      <ComparisonTable />
      <PricingSection />
      <FaqSection />
      <Footer />
    </div>
  );
};
