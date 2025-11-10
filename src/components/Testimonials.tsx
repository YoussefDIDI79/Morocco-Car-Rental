import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Benali',
    nameAr: 'أحمد بنعلي',
    text: 'Excellent service! The car was clean and well-maintained. Highly recommend for anyone visiting Morocco.',
    textAr: 'خدمة ممتازة! كانت السيارة نظيفة ومُصانة جيدًا. أوصي بشدة لأي شخص يزور المغرب.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    nameAr: 'سارة جونسون',
    text: 'Great prices and friendly staff. The booking process was smooth and easy. Will use again!',
    textAr: 'أسعار رائعة وموظفون ودودون. كانت عملية الحجز سلسة وسهلة. سأستخدمها مرة أخرى!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mohammed El Fassi',
    nameAr: 'محمد الفاسي',
    text: 'Very reliable service. The car was perfect for our trip through the Atlas Mountains.',
    textAr: 'خدمة موثوقة للغاية. كانت السيارة مثالية لرحلتنا عبر جبال الأطلس.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emily Davis',
    nameAr: 'إميلي ديفيس',
    text: 'Professional and efficient. The pickup and drop-off were hassle-free. Highly satisfied!',
    textAr: 'محترف وفعال. كان الاستلام والإرجاع خاليين من المتاعب. راضٍ جدًا!',
    rating: 5,
  },
];

const Testimonials = () => {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('testimonials.subtitle')}</p>
        </div>

        <div className="max-w-3xl mx-auto scroll-reveal">
          <Card className="shadow-elevated">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-lg md:text-xl text-center mb-6 text-foreground italic">
                "{language === 'ar' ? currentTestimonial.textAr : currentTestimonial.text}"
              </p>
              
              <p className="text-center font-semibold text-primary">
                {language === 'ar' ? currentTestimonial.nameAr : currentTestimonial.name}
              </p>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-border'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
