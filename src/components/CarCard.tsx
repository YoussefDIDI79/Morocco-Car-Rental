import { useNavigate } from 'react-router-dom';
import { Fuel, Cog, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Car } from '@/data/cars';

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden card-hover shadow-card border-0 group">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={car.image}
          alt={language === 'ar' ? car.nameAr : car.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Popular badge for featured cars */}
        {car.id <= 2 && (
          <Badge className="absolute top-4 left-4 bg-accent text-white border-0 px-3 py-1">
            <Star className="w-3 h-3 mr-1 fill-white" />
            Popular
          </Badge>
        )}
        
        <div className="absolute top-4 right-4 bg-gradient-primary text-white px-4 py-2 rounded-full font-bold shadow-lg backdrop-blur-sm">
          {car.price} MAD
        </div>

        {/* Quick view button on hover */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            className="w-full bg-white/90 backdrop-blur-sm text-primary hover:bg-white"
            onClick={() => navigate(`/car/${car.id}`)}
          >
            Quick View
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors">
          {language === 'ar' ? car.nameAr : car.name}
        </h3>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-lg">
            <Fuel className="w-4 h-4 text-primary" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-lg">
            <Cog className="w-4 h-4 text-primary" />
            <span>{car.gearbox}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-lg">
            <Users className="w-4 h-4 text-primary" />
            <span>{car.seats}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-3">
        <Button
          variant="outline"
          className="flex-1 group-hover:border-primary group-hover:text-primary"
          onClick={() => navigate(`/car/${car.id}`)}
        >
          {t('cars.viewDetails')}
        </Button>
        <Button
          className="flex-1 bg-gradient-primary text-white shadow-primary btn-shine hover:shadow-elevated"
          onClick={() => {
            navigate(`/car/${car.id}`);
            setTimeout(() => {
              const bookingForm = document.getElementById('booking-form');
              if (bookingForm) {
                bookingForm.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
        >
          {t('cars.rentNow')}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
