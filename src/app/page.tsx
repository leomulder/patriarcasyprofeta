import HeroSection from '@/components/landing/HeroSection';
import ContentSection from '@/components/landing/ContentSection';
import ForYouSection from '@/components/landing/ForYouSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import TransformSection from '@/components/landing/TransformSection';
import DetailsSection from '@/components/landing/DetailsSection';
import BonusSection from '@/components/landing/BonusSection';
import GuaranteeSection from '@/components/landing/GuaranteeSection';
import PricingSection from '@/components/landing/PricingSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <main>
        <ContentSection />
        <ForYouSection />
        <HowItWorksSection />
        <TransformSection />
        <DetailsSection />
        <BonusSection />
        <GuaranteeSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
