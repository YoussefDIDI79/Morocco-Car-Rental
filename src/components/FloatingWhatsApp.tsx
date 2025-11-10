import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const openWhatsApp = () => {
    window.open('https://wa.me/212762267007?text=Hello! I would like to inquire about car rental.', '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-elevated pulse-glow"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>

        {/* Chat Bubble */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-card rounded-xl shadow-elevated p-4 animate-in slide-in-from-bottom-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold">Morocco Car Rental</h4>
                <p className="text-xs text-muted-foreground">Typically replies instantly</p>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-3 mb-4">
              <p className="text-sm">
                👋 Hello! How can we help you with your car rental today?
              </p>
            </div>

            <Button
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
              onClick={openWhatsApp}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Start Chat on WhatsApp
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingWhatsApp;
