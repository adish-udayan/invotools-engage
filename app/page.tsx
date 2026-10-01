import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ProductSection } from '@/components/product-section';
import { ScienceSection } from '@/components/science-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { HowItFitsSection } from '@/components/how-it-fits-section';
import { FitWithStackSection } from '@/components/fit-with-stack-section';
import { BusinessValueSection } from '@/components/business-value-section';
import { WhyEngageSection } from '@/components/why-engage-section';
import { AiAssistedPurchaseSection } from '@/components/ai-assisted-purchase-section';
import { FaqSection } from '@/components/faq-section';
import { ContactFormSection } from '@/components/contact-form-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductSection />
      <ScienceSection />
      <HowItWorksSection />
      <HowItFitsSection />
      <FitWithStackSection />
      <BusinessValueSection />
      <WhyEngageSection />
      <AiAssistedPurchaseSection />
      <FaqSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
