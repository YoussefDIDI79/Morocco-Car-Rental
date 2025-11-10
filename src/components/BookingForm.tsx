import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { Calendar, MapPin, Phone, Mail, User } from 'lucide-react';

interface BookingFormProps {
  carName?: string;
  carPrice?: number;
}

const BookingForm = ({ carName, carPrice }: BookingFormProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    pickupCity: '',
    pickupDate: '',
    returnDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.pickupCity ||
      !formData.pickupDate ||
      !formData.returnDate
    ) {
      toast.error(t('booking.error'));
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(t('booking.error'));
      return;
    }

    // Date validation
    const pickup = new Date(formData.pickupDate);
    const returnD = new Date(formData.returnDate);
    if (returnD <= pickup) {
      toast.error(t('booking.error'));
      return;
    }

    // Create WhatsApp message
    const message = `Booking Request:\n\nCar: ${carName || 'N/A'}\nPrice: ${carPrice || 'N/A'} MAD/day\nName: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nPickup City: ${formData.pickupCity}\nPickup Date: ${formData.pickupDate}\nReturn Date: ${formData.returnDate}`;
    const whatsappUrl = `https://wa.me/212762267007?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success(t('booking.success'));
    
    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      pickupCity: '',
      pickupDate: '',
      returnDate: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} id="booking-form" className="space-y-6 bg-card p-6 md:p-8 rounded-xl shadow-card">
      <h3 className="text-2xl font-bold mb-6">{t('booking.title')}</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            {t('booking.fullName')}
          </Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder={t('booking.fullName')}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            {t('booking.phone')}
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+212 762 267 007"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            {t('booking.email')}
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="pickupCity" className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            {t('booking.pickupCity')}
          </Label>
          <Input
            id="pickupCity"
            name="pickupCity"
            value={formData.pickupCity}
            onChange={handleChange}
            placeholder="Casablanca, Marrakech, Rabat..."
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="pickupDate" className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              {t('booking.pickupDate')}
            </Label>
            <Input
              id="pickupDate"
              name="pickupDate"
              type="date"
              value={formData.pickupDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="returnDate" className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              {t('booking.returnDate')}
            </Label>
            <Input
              id="returnDate"
              name="returnDate"
              type="date"
              value={formData.returnDate}
              onChange={handleChange}
              min={formData.pickupDate || new Date().toISOString().split('T')[0]}
              required
            />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground shadow-primary btn-shine text-lg py-6">
        {t('booking.submit')}
      </Button>
    </form>
  );
};

export default BookingForm;
