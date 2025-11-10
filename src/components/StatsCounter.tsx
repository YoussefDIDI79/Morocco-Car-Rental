import { useEffect, useRef, useState } from 'react';
import { Users, Car, MapPin, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const stats = [
  { icon: Users, value: 5000, suffix: '+', label: 'Happy Customers', labelAr: 'عملاء سعداء' },
  { icon: Car, value: 50, suffix: '+', label: 'Vehicles', labelAr: 'مركبات' },
  { icon: MapPin, value: 15, suffix: '+', label: 'Locations', labelAr: 'مواقع' },
  { icon: Star, value: 4.9, suffix: '/5', label: 'Rating', labelAr: 'تقييم' },
];

const StatsCounter = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center stagger-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              {isVisible && (
                <div className="count-up">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}{stat.suffix}
                  </h3>
                  <p className="text-white/90 font-medium">
                    {language === 'ar' ? stat.labelAr : stat.label}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
