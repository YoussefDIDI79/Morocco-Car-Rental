import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-car.jpg';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToCars = () => {
    const carsSection = document.getElementById('cars');
    if (carsSection) {
      carsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Car on Moroccan road"
          className="w-full h-full object-cover parallax"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 z-[5] overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl float-animation" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Rating Badge */}
          <div className="flex justify-center mb-6 hero-fade-in">
            <Badge className="glass px-4 py-2 text-white border-white/20">
              <Star className="w-4 h-4 fill-accent text-accent mr-2" />
              <span className="font-semibold">4.9/5</span>
              <span className="mx-2">•</span>
              <span>5000+ Happy Customers</span>
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight hero-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium hero-fade-in" style={{ animationDelay: '0.4s' }}>
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center hero-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-primary shadow-elevated text-lg px-8 py-6 btn-shine font-semibold"
              onClick={scrollToCars}
            >
              {t('hero.viewCars')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              className="glass hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 font-semibold"
              onClick={scrollToBooking}
            >
              {t('hero.bookNow')}
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 hero-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-white">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-white/80">Vehicles</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm text-white/80">Locations</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-white/80">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
