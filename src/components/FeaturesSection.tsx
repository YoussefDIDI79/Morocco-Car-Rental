import { Shield, CreditCard, Clock, HeadphonesIcon, CheckCircle, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const features = [
  {
    icon: Shield,
    title: 'Comprehensive Insurance',
    titleAr: 'تأمين شامل',
    description: 'Full coverage for worry-free driving',
    descriptionAr: 'تغطية كاملة للقيادة الخالية من القلق',
  },
  {
    icon: CreditCard,
    title: 'Flexible Payment',
    titleAr: 'دفع مرن',
    description: 'Pay online or at pickup location',
    descriptionAr: 'ادفع عبر الإنترنت أو في موقع الاستلام',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    titleAr: 'دعم على مدار الساعة',
    description: 'Round-the-clock assistance',
    descriptionAr: 'مساعدة على مدار الساعة',
  },
  {
    icon: HeadphonesIcon,
    title: 'Easy Booking',
    titleAr: 'حجز سهل',
    description: 'Book in minutes, drive in hours',
    descriptionAr: 'احجز في دقائق، اقود في ساعات',
  },
  {
    icon: CheckCircle,
    title: 'No Hidden Fees',
    titleAr: 'بدون رسوم خفية',
    description: 'Transparent pricing always',
    descriptionAr: 'تسعير شفاف دائمًا',
  },
  {
    icon: Award,
    title: 'Best Price Guarantee',
    titleAr: 'ضمان أفضل سعر',
    description: 'Competitive rates guaranteed',
    descriptionAr: 'أسعار تنافسية مضمونة',
  },
];

const FeaturesSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the difference with our premium car rental service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="card-hover shadow-card scroll-reveal border-0 gradient-border"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'ar' ? feature.titleAr : feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'ar' ? feature.descriptionAr : feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
