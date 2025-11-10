import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card shadow-card py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-all ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}>
            <Car className="w-8 h-8" />
            <span className="hidden sm:inline">Morocco Car Rental</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`hover:text-primary transition-colors font-medium ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('cars')}
              className={`hover:text-primary transition-colors font-medium ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {t('nav.cars')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`hover:text-primary transition-colors font-medium ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {t('nav.contact')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:text-primary transition-colors font-medium ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {t('nav.about')}
            </button>
          </div>

          {/* Language Switch & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="font-semibold"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-in slide-in-from-top">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('cars')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                {t('nav.cars')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                {t('nav.contact')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                {t('nav.about')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
