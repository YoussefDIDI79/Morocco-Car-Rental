import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const destinations = [
  {
    name: 'Marrakech',
    nameAr: 'مراكش',
    description: 'Red City with historic palaces',
    descriptionAr: 'المدينة الحمراء ذات القصور التاريخية',
    distance: '240 km from Casablanca',
    distanceAr: '240 كم من الدار البيضاء',
  },
  {
    name: 'Chefchaouen',
    nameAr: 'شفشاون',
    description: 'Blue Pearl of Morocco',
    descriptionAr: 'اللؤلؤة الزرقاء للمغرب',
    distance: '340 km from Casablanca',
    distanceAr: '340 كم من الدار البيضاء',
  },
  {
    name: 'Sahara Desert',
    nameAr: 'الصحراء الكبرى',
    description: 'Golden dunes adventure',
    descriptionAr: 'مغامرة الكثبان الذهبية',
    distance: '550 km from Marrakech',
    distanceAr: '550 كم من مراكش',
  },
  {
    name: 'Essaouira',
    nameAr: 'الصويرة',
    description: 'Coastal gem and beaches',
    descriptionAr: 'جوهرة ساحلية وشواطئ',
    distance: '180 km from Marrakech',
    distanceAr: '180 كم من مراكش',
  },
  {
    name: 'Fes',
    nameAr: 'فاس',
    description: 'Ancient medina and culture',
    descriptionAr: 'المدينة القديمة والثقافة',
    distance: '290 km from Casablanca',
    distanceAr: '290 كم من الدار البيضاء',
  },
  {
    name: 'Agadir',
    nameAr: 'أكادير',
    description: 'Beach resort paradise',
    descriptionAr: 'منتجع شاطئي رائع',
    distance: '240 km from Marrakech',
    distanceAr: '240 كم من مراكش',
  },
];

const PopularDestinations = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Destinations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore Morocco's most beautiful places with your rental car
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="card-hover shadow-card border-0 scroll-reveal group cursor-pointer overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {language === 'ar' ? destination.nameAr : destination.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {language === 'ar' ? destination.descriptionAr : destination.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      📍 {language === 'ar' ? destination.distanceAr : destination.distance}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
