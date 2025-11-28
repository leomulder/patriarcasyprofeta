import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/landing/HeroSection'));
const ImpactSection = dynamic(() => import('@/components/landing/ImpactSection'));
const ContentSection = dynamic(() => import('@/components/landing/ContentSection'));
const ForYouSection = dynamic(() => import('@/components/landing/ForYouSection'));
const HowItWorksSection = dynamic(() => import('@/components/landing/HowItWorksSection'));
const TransformSection = dynamic(() => import('@/components/landing/TransformSection'));
const BonusSection = dynamic(() => import('@/components/landing/BonusSection'));
const GuaranteeSection = dynamic(() => import('@/components/landing/GuaranteeSection'));
const PricingSection = dynamic(() => import('@/components/landing/PricingSection'));
const FaqSection = dynamic(() => import('@/components/landing/FaqSection'));
const Footer = dynamic(() => import('@/components/landing/Footer'));
const WhyItWorksSection = dynamic(() => import('@/components/landing/WhyItWorksSection'));
const TestimonialsSection = dynamic(() => import('@/components/landing/TestimonialsSection'));

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
