import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    window.open('https://wa.me/212600000000', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="card-hover shadow-card scroll-reveal">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t('contact.whatsapp')}</h3>
              <Button
                variant="link"
                className="text-primary hover:text-primary/80"
                onClick={openWhatsApp}
              >
                +212 600 000 000
              </Button>
            </CardContent>
          </Card>

          <Card className="card-hover shadow-card scroll-reveal">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">{t('contact.phone')}</h3>
              <a href="tel:+212600000000" className="text-muted-foreground hover:text-secondary transition-colors">
                +212 600 000 000
              </a>
            </CardContent>
          </Card>

          <Card className="card-hover shadow-card scroll-reveal">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{t('contact.email')}</h3>
              <a href="mailto:info@moroccocarrental.com" className="text-muted-foreground hover:text-accent transition-colors">
                info@moroccocarrental.com
              </a>
            </CardContent>
          </Card>

          <Card className="card-hover shadow-card scroll-reveal">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t('contact.location')}</h3>
              <p className="text-muted-foreground text-sm">
                Casablanca, Morocco
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-elevated scroll-reveal">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.8821237824!2d-7.853138449999999!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2s!4v1234567890123"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Morocco Car Rental Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
