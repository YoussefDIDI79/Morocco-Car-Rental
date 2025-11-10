import carSedan from '@/assets/car-sedan.jpg';
import carSuv from '@/assets/car-suv.jpg';
import carCompact from '@/assets/car-compact.jpg';
import carSports from '@/assets/car-sports.jpg';
import carLuxury from '@/assets/car-luxury.jpg';
import carVan from '@/assets/car-van.jpg';

export interface Car {
  id: number;
  name: string;
  nameAr: string;
  image: string;
  price: number;
  fuel: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  gearbox: 'Manual' | 'Automatic';
  seats: number;
  features: string[];
  featuresAr: string[];
  description: string;
  descriptionAr: string;
}

export const cars: Car[] = [
  {
    id: 1,
    name: 'Economy Sedan',
    nameAr: 'سيدان اقتصادية',
    image: carSedan,
    price: 250,
    fuel: 'Petrol',
    gearbox: 'Manual',
    seats: 5,
    features: ['Air Conditioning', 'Radio', 'Power Steering', 'USB Port'],
    featuresAr: ['تكييف هواء', 'راديو', 'توجيه كهربائي', 'منفذ USB'],
    description: 'Perfect for city driving and daily commutes. Fuel-efficient and reliable.',
    descriptionAr: 'مثالية للقيادة في المدينة والتنقلات اليومية. موفرة للوقود وموثوقة.',
  },
  {
    id: 2,
    name: 'Family SUV',
    nameAr: 'سيارة دفع رباعي عائلية',
    image: carSuv,
    price: 450,
    fuel: 'Diesel',
    gearbox: 'Automatic',
    seats: 7,
    features: ['4WD', 'Climate Control', 'Cruise Control', 'Parking Sensors', 'Large Boot'],
    featuresAr: ['دفع رباعي', 'تحكم مناخي', 'مثبت سرعة', 'حساسات ركن', 'صندوق كبير'],
    description: 'Spacious SUV perfect for families and long trips across Morocco.',
    descriptionAr: 'سيارة دفع رباعي واسعة مثالية للعائلات والرحلات الطويلة عبر المغرب.',
  },
  {
    id: 3,
    name: 'City Compact',
    nameAr: 'سيارة مدمجة للمدينة',
    image: carCompact,
    price: 200,
    fuel: 'Petrol',
    gearbox: 'Manual',
    seats: 4,
    features: ['Compact Size', 'Easy Parking', 'Fuel Efficient', 'Air Conditioning'],
    featuresAr: ['حجم مدمج', 'سهولة الركن', 'موفر للوقود', 'تكييف هواء'],
    description: 'Small and agile, perfect for navigating narrow streets and parking.',
    descriptionAr: 'صغيرة ورشيقة، مثالية للتنقل في الشوارع الضيقة والركن.',
  },
  {
    id: 4,
    name: 'Sports Coupe',
    nameAr: 'كوبيه رياضية',
    image: carSports,
    price: 800,
    fuel: 'Petrol',
    gearbox: 'Automatic',
    seats: 2,
    features: ['Turbo Engine', 'Sport Mode', 'Premium Sound', 'Leather Seats', 'Sunroof'],
    featuresAr: ['محرك تيربو', 'وضع رياضي', 'نظام صوتي متميز', 'مقاعد جلدية', 'فتحة سقف'],
    description: 'Experience luxury and performance with this stunning sports car.',
    descriptionAr: 'اختبر الفخامة والأداء مع هذه السيارة الرياضية المذهلة.',
  },
  {
    id: 5,
    name: 'Luxury Sedan',
    nameAr: 'سيدان فاخرة',
    image: carLuxury,
    price: 650,
    fuel: 'Hybrid',
    gearbox: 'Automatic',
    seats: 5,
    features: ['Premium Interior', 'Navigation', 'Heated Seats', 'Backup Camera', 'Bluetooth'],
    featuresAr: ['تصميم داخلي فاخر', 'نظام ملاحة', 'مقاعد مدفأة', 'كاميرا خلفية', 'بلوتوث'],
    description: 'Executive comfort with eco-friendly hybrid technology.',
    descriptionAr: 'راحة تنفيذية مع تقنية هجينة صديقة للبيئة.',
  },
  {
    id: 6,
    name: 'Family Van',
    nameAr: 'فان عائلية',
    image: carVan,
    price: 500,
    fuel: 'Diesel',
    gearbox: 'Automatic',
    seats: 8,
    features: ['Extra Space', 'Sliding Doors', 'Rear AC', 'Entertainment System', '3 Rows'],
    featuresAr: ['مساحة إضافية', 'أبواب منزلقة', 'تكييف خلفي', 'نظام ترفيهي', '3 صفوف'],
    description: 'Maximum space and comfort for large groups and families.',
    descriptionAr: 'أقصى مساحة وراحة للمجموعات الكبيرة والعائلات.',
  },
];
