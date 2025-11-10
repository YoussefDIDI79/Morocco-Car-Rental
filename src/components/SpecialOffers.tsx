import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Clock, Percent } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const offers = [
  {
    icon: Sparkles,
    title: 'Weekend Special',
    titleAr: 'عرض نهاية الأسبوع',
    discount: '20% OFF',
    description: 'Book any car for 3+ days',
    descriptionAr: 'احجز أي سيارة لمدة 3 أيام أو أكثر',
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Early Bird',
    titleAr: 'حجز مبكر',
    discount: '15% OFF',
    description: 'Book 7 days in advance',
    descriptionAr: 'احجز قبل 7 أيام',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
  },
  {
    icon: Percent,
    title: 'Long Term',
    titleAr: 'إيجار طويل الأجل',
    discount: '30% OFF',
    description: 'Rent for 30+ days',
    descriptionAr: 'استأجر لمدة 30 يومًا أو أكثر',
    color: 'bg-gradient-to-br from-orange-500 to-red-500',
  },
];

const SpecialOffers = () => {
  const { language, t } = useLanguage();

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 scroll-reveal">
          <Badge className="mb-4 px-4 py-1 text-sm bg-gradient-primary text-white">
            Limited Time Offers
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Special Deals Just for You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Save more with our exclusive offers and promotions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-elevated card-hover scroll-reveal"
            >
              <div className={`h-2 ${offer.color}`} />
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-xl ${offer.color} flex items-center justify-center mb-4 float-animation`}>
                  <offer.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">
                  {language === 'ar' ? offer.titleAr : offer.title}
                </h3>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold gradient-text">
                    {offer.discount}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {language === 'ar' ? offer.descriptionAr : offer.description}
                </p>
                
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={scrollToBooking}
                >
                  {t('hero.bookNow')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
