import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cars } from '@/data/cars';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CarCard from '@/components/CarCard';
import CarFilters from '@/components/CarFilters';
import BookingForm from '@/components/BookingForm';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StatsCounter from '@/components/StatsCounter';
import FeaturesSection from '@/components/FeaturesSection';
import FAQSection from '@/components/FAQSection';
import SpecialOffers from '@/components/SpecialOffers';
import PopularDestinations from '@/components/PopularDestinations';
import TrustBadges from '@/components/TrustBadges';
import Newsletter from '@/components/Newsletter';

const Index = () => {
  const { t } = useLanguage();
  const [selectedGearbox, setSelectedGearbox] = useState('all');
  const [selectedFuel, setSelectedFuel] = useState('all');

  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const filteredCars = cars.filter((car) => {
    if (selectedGearbox !== 'all' && car.gearbox !== selectedGearbox) return false;
    if (selectedFuel !== 'all' && car.fuel !== selectedFuel) return false;
    return true;
  });

  const resetFilters = () => {
    setSelectedGearbox('all');
    setSelectedFuel('all');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingWhatsApp />
      
      <Hero />

      <TrustBadges />

      <FeaturesSection />

      <StatsCounter />

      <SpecialOffers />

      {/* Cars Section */}
      <section id="cars" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cars.title')}</h2>
            <p className="text-muted-foreground text-lg">{t('cars.subtitle')}</p>
          </div>

          <CarFilters
            selectedGearbox={selectedGearbox}
            selectedFuel={selectedFuel}
            onGearboxChange={setSelectedGearbox}
            onFuelChange={setSelectedFuel}
            onReset={resetFilters}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div key={car.id} className="scroll-reveal">
                <CarCard car={car} />
              </div>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No cars found matching your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('booking.title')}</h2>
              <p className="text-muted-foreground text-lg">
                Fill in your details to book your perfect car
              </p>
            </div>
            <div className="scroll-reveal">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <PopularDestinations />

      {/* Testimonials */}
      <Testimonials />

      <FAQSection />

      <Newsletter />

      {/* Contact */}
      <Contact />

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Title Section */}
            <div className="text-center mb-16 scroll-reveal">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  {t('footer.about')}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                Morocco Car Rental
              </h2>
            </div>

            {/* Content Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Card 1 */}
              <div className="scroll-reveal group">
                <div className="relative h-full p-8 rounded-3xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Your Trusted Partner</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Morocco Car Rental is your trusted partner for exploring the beautiful landscapes of Morocco. 
                      With a diverse fleet of well-maintained vehicles and competitive pricing, we make your journey comfortable and affordable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="scroll-reveal group" style={{ animationDelay: '0.2s' }}>
                <div className="relative h-full p-8 rounded-3xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Flexible & Reliable</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Whether you're visiting for business or pleasure, we offer flexible rental options to suit your needs. 
                      Our commitment is to provide safe, reliable vehicles and excellent customer service throughout your rental experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
