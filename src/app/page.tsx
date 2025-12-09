import dynamic from 'next/dynamic';
import HeroSection from '@/components/landing/HeroSection';
import SocialProof from '@/components/landing/SocialProof';
import { Skeleton } from '@/components/ui/skeleton';

const ImpactSection = dynamic(() => import('@/components/landing/ImpactSection'));
const ForYouSection = dynamic(() => import('@/components/landing/ForYouSection'));
const ContentSection = dynamic(() => import('@/components/landing/ContentSection'));
const WhyItWorksSection = dynamic(() => import('@/components/landing/WhyItWorksSection'));
const HowItWorksSection = dynamic(() => import('@/components/landing/HowItWorksSection'));
const BonusSection = dynamic(() => import('@/components/landing/BonusSection'));
const PricingSection = dynamic(() => import('@/components/landing/PricingSection'));
const GuaranteeSection = dynamic(() => import('@/components/landing/GuaranteeSection'));
const TestimonialsSection = dynamic(() => import('@/components/landing/TestimonialsSection'));
const FaqSection = dynamic(() => import('@/components/landing/FaqSection'));
const TransformSection = dynamic(() => import('@/components/landing/TransformSection'));
const Footer = dynamic(() => import('@/components/landing/Footer'));


export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <SocialProof />
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
