import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import VideoConsultSection from "@/components/home/video-consult-section";
import StatsSection from "@/components/home/stats-section";
import DoctorProfilesSection from "@/components/home/doctor-profiles-section";
import HealthManagementSection from "@/components/home/health-management-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <VideoConsultSection />
        <StatsSection />
        <DoctorProfilesSection />
        <HealthManagementSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
