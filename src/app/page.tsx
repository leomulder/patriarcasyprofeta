import HeroSection from '@/components/landing/HeroSection';
import ContentSection from '@/components/landing/ContentSection';
import ForYouSection from '@/components/landing/ForYouSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import AuthoritySection from '@/components/landing/AuthoritySection';
import TransformSection from '@/components/landing/TransformSection';
import DetailsSection from '@/components/landing/DetailsSection';
import BonusSection from '@/components/landing/BonusSection';
import GuaranteeSection from '@/components/landing/GuaranteeSection';
import PricingSection from '@/components/landing/PricingSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FaqSection from '@/components/landing/FaqSection';
import Footer from '@/components/landing/Footer';
import SocialProof from '@/components/landing/SocialProof';

export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <main>
        <ContentSection />
        <ForYouSection />
        <HowItWorksSection />
        <AuthoritySection />
        <TransformSection />
        <DetailsSection />
        <BonusSection />
        <GuaranteeSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
      <SocialProof />
    </div>
  );
}
