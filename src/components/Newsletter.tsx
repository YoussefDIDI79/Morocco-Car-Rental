import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const Newsletter = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error(language === 'ar' ? 'يرجى إدخال بريد إلكتروني صالح' : 'Please enter a valid email');
      return;
    }

    toast.success(language === 'ar' ? 'شكرًا لاشتراكك!' : 'Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center float-animation">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'ar' 
              ? 'احصل على عروض حصرية'
              : 'Get Exclusive Deals'
            }
          </h2>
          
          <p className="text-white/90 text-lg mb-8">
            {language === 'ar'
              ? 'اشترك في نشرتنا الإخبارية واحصل على خصم 10% على حجزك الأول'
              : 'Subscribe to our newsletter and get 10% off your first booking'
            }
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm"
            />
            <Button
              type="submit"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <Send className="w-4 h-4 mr-2" />
              {language === 'ar' ? 'اشترك' : 'Subscribe'}
            </Button>
          </form>

          <p className="text-white/70 text-xs mt-4">
            {language === 'ar'
              ? 'نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.'
              : 'We respect your privacy. Unsubscribe at any time.'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
