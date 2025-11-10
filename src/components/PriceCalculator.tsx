import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Calculator, Info } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PriceCalculatorProps {
  basePrice: number;
}

const PriceCalculator = ({ basePrice }: PriceCalculatorProps) => {
  const { language } = useLanguage();
  const [days, setDays] = useState(1);
  const [addInsurance, setAddInsurance] = useState(false);
  const [addGPS, setAddGPS] = useState(false);
  const [addChildSeat, setAddChildSeat] = useState(false);
  const [total, setTotal] = useState(basePrice);

  useEffect(() => {
    let calculatedTotal = basePrice * days;
    
    if (addInsurance) calculatedTotal += 50 * days; // 50 MAD per day
    if (addGPS) calculatedTotal += 30 * days; // 30 MAD per day
    if (addChildSeat) calculatedTotal += 20 * days; // 20 MAD per day
    
    // Apply discounts for longer rentals
    if (days >= 7) {
      calculatedTotal *= 0.85; // 15% off for 7+ days
    } else if (days >= 3) {
      calculatedTotal *= 0.95; // 5% off for 3+ days
    }
    
    setTotal(Math.round(calculatedTotal));
  }, [days, addInsurance, addGPS, addChildSeat, basePrice]);

  return (
    <Card className="gradient-border shadow-elevated">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold">
            {language === 'ar' ? 'حاسبة السعر' : 'Price Calculator'}
          </h3>
        </div>

        <div className="space-y-6">
          {/* Number of Days */}
          <div className="space-y-2">
            <Label htmlFor="days">
              {language === 'ar' ? 'عدد الأيام' : 'Number of Days'}
            </Label>
            <Input
              id="days"
              type="number"
              min="1"
              max="90"
              value={days}
              onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
              className="text-lg font-semibold"
            />
          </div>

          {/* Add-ons */}
          <div className="space-y-4 pt-4 border-t">
            <h4 className="font-semibold text-sm text-muted-foreground">
              {language === 'ar' ? 'إضافات' : 'Add-ons'}
            </h4>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Switch
                  checked={addInsurance}
                  onCheckedChange={setAddInsurance}
                />
                <Label>
                  {language === 'ar' ? 'تأمين شامل' : 'Full Insurance'}
                </Label>
              </div>
              <span className="text-sm text-muted-foreground">+50 MAD/day</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Switch
                  checked={addGPS}
                  onCheckedChange={setAddGPS}
                />
                <Label>GPS</Label>
              </div>
              <span className="text-sm text-muted-foreground">+30 MAD/day</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Switch
                  checked={addChildSeat}
                  onCheckedChange={setAddChildSeat}
                />
                <Label>
                  {language === 'ar' ? 'مقعد طفل' : 'Child Seat'}
                </Label>
              </div>
              <span className="text-sm text-muted-foreground">+20 MAD/day</span>
            </div>
          </div>

          {/* Discount Badge */}
          {days >= 3 && (
            <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
              <Info className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                {days >= 7 
                  ? language === 'ar' ? '15% خصم مطبق!' : '15% discount applied!'
                  : language === 'ar' ? '5% خصم مطبق!' : '5% discount applied!'
                }
              </span>
            </div>
          )}

          {/* Total */}
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">
                {language === 'ar' ? 'المجموع الفرعي' : 'Subtotal'}
              </span>
              <span className="font-semibold">{basePrice * days} MAD</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold">
                {language === 'ar' ? 'المجموع الكلي' : 'Total'}
              </span>
              <Badge className="text-xl font-bold px-4 py-2 bg-gradient-primary text-white">
                {total} MAD
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              {language === 'ar' 
                ? 'السعر النهائي قد يختلف حسب الموقع والتوافر'
                : 'Final price may vary based on location and availability'
              }
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;
