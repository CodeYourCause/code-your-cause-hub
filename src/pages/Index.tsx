import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import OrganizationForm from "@/components/OrganizationForm";
import VolunteerForm from "@/components/VolunteerForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <CTASection />
        <OrganizationForm />
        <VolunteerForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;