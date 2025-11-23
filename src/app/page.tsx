import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/landing/HeroSection'));
const ImpactSection = dynamic(() => import('@/components/landing/ImpactSection'));
const ContentSection = dynamic(() => import('@/components/landing/ContentSection'));
const ForYouSection = dynamic(() => import('@/components/landing/ForYouSection'));
const HowItWorksSection = dynamic(() => import('@/components/landing/HowItWorksSection'));
const AuthoritySection = dynamic(() => import('@/components/landing/AuthoritySection'));
const TransformSection = dynamic(() => import('@/components/landing/TransformSection'));
const DetailsSection = dynamic(() => import('@/components/landing/DetailsSection'));
const BonusSection = dynamic(() => import('@/components/landing/BonusSection'));
const GuaranteeSection = dynamic(() => import('@/components/landing/GuaranteeSection'));
const PricingSection = dynamic(() => import('@/components/landing/PricingSection'));
const TestimonialsSection = dynamic(() => import('@/components/landing/TestimonialsSection'));
const FaqSection = dynamic(() => import('@/components/landing/FaqSection'));
const Footer = dynamic(() => import('@/components/landing/Footer'));
const SocialProof = dynamic(() => import('@/components/landing/SocialProof'));

export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <main>
        <ImpactSection />
        <TestimonialsSection />
        <ContentSection />
        <ForYouSection />
        <HowItWorksSection />
        <AuthoritySection />
        <TransformSection />
        <DetailsSection />
        <BonusSection />
        <GuaranteeSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
      <SocialProof />
    </div>
  );
}
