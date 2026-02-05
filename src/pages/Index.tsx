import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MissionSection from '@/components/MissionSection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <Navigation />
      <Hero />
      <MissionSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
