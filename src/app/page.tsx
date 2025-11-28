import BonusSection from '@/components/landing/BonusSection';
import ContentSection from '@/components/landing/ContentSection';
import FaqSection from '@/components/landing/FaqSection';
import Footer from '@/components/landing/Footer';
import ForYouSection from '@/components/landing/ForYouSection';
import GuaranteeSection from '@/components/landing/GuaranteeSection';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import ImpactSection from '@/components/landing/ImpactSection';
import PricingSection from '@/components/landing/PricingSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import TransformSection from '@/components/landing/TransformSection';
import WhyItWorksSection from '@/components/landing/WhyItWorksSection';

export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <main>
        <ImpactSection />
        <ForYouSection />
        <ContentSection />
        <WhyItWorksSection />
        <HowItWorksSection />
        <BonusSection />
        <PricingSection />
        <GuaranteeSection />
        <TestimonialsSection />
        <FaqSection />
        <TransformSection />
      </main>
      <Footer />
    </div>
  );
}
