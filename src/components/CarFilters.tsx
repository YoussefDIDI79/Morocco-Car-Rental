import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

interface CarFiltersProps {
  selectedGearbox: string;
  selectedFuel: string;
  onGearboxChange: (value: string) => void;
  onFuelChange: (value: string) => void;
  onReset: () => void;
}

const CarFilters = ({
  selectedGearbox,
  selectedFuel,
  onGearboxChange,
  onFuelChange,
  onReset,
}: CarFiltersProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-card rounded-xl shadow-card p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            {t('filters.gearbox')}
          </label>
          <Select value={selectedGearbox} onValueChange={onGearboxChange}>
            <SelectTrigger>
              <SelectValue placeholder={t('filters.all')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('filters.all')}</SelectItem>
              <SelectItem value="Manual">{t('filters.manual')}</SelectItem>
              <SelectItem value="Automatic">{t('filters.automatic')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            {t('filters.fuel')}
          </label>
          <Select value={selectedFuel} onValueChange={onFuelChange}>
            <SelectTrigger>
              <SelectValue placeholder={t('filters.all')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('filters.all')}</SelectItem>
              <SelectItem value="Petrol">{t('filters.petrol')}</SelectItem>
              <SelectItem value="Diesel">{t('filters.diesel')}</SelectItem>
              <SelectItem value="Hybrid">{t('filters.hybrid')}</SelectItem>
              <SelectItem value="Electric">{t('filters.electric')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="outline"
          onClick={onReset}
          className="w-full md:w-auto"
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default CarFilters;
