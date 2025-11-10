import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Fuel, Cog, Users, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { cars } from '@/data/cars';
import BookingForm from '@/components/BookingForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PriceCalculator from '@/components/PriceCalculator';
import { useEffect } from 'react';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  
  const car = cars.find((c) => c.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Car not found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const features = language === 'ar' ? car.featuresAr : car.features;
  const description = language === 'ar' ? car.descriptionAr : car.description;
  const carName = language === 'ar' ? car.nameAr : car.name;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingWhatsApp />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            {t('details.backToCars')}
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Car Image & Info */}
            <div className="space-y-6 scroll-reveal">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-elevated group">
                <img
                  src={car.image}
                  alt={carName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gradient-primary text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg pulse-glow">
                  {car.price} MAD / {t('cars.perDay')}
                </div>
              </div>

              <Card className="shadow-card gradient-border">
                <CardContent className="p-6">
                  <h1 className="text-3xl font-bold mb-6">{carName}</h1>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                      <Fuel className="w-6 h-6 text-primary mb-2" />
                      <span className="text-sm text-muted-foreground">{t('cars.fuel')}</span>
                      <span className="font-semibold">{car.fuel}</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                      <Cog className="w-6 h-6 text-primary mb-2" />
                      <span className="text-sm text-muted-foreground">{t('cars.gearbox')}</span>
                      <span className="font-semibold">{car.gearbox}</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                      <Users className="w-6 h-6 text-primary mb-2" />
                      <span className="text-sm text-muted-foreground">{t('cars.seats')}</span>
                      <span className="font-semibold">{car.seats}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">{t('details.description')}</h2>
                    <p className="text-muted-foreground">{description}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-3">{t('details.features')}</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form & Price Calculator */}
            <div className="space-y-6">
              <div className="scroll-reveal">
                <PriceCalculator basePrice={car.price} />
              </div>
              <div className="scroll-reveal lg:sticky lg:top-24">
                <BookingForm carName={carName} carPrice={car.price} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CarDetails;
