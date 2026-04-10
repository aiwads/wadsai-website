import Hero from '@/components/Hero';
import Services from '@/components/Services';
import OrbitalSection from '@/components/OrbitalSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import EmployeeSection from '@/components/EmployeeSection';
import Testimonials from '@/components/Testimonials';
import CustomBuilt from '@/components/CustomBuilt';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <OrbitalSection />
      <HowItWorksSection />
      <EmployeeSection />
      <Testimonials />
      <CustomBuilt />
      <FAQ />
      <FinalCTA />
    </>
  );
}
