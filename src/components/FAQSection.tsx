import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const faqs = [
  {
    question: 'What documents do I need to rent a car?',
    questionAr: 'ما هي المستندات التي أحتاجها لاستئجار سيارة؟',
    answer: 'You need a valid driver\'s license, passport or ID card, and a credit card for the deposit.',
    answerAr: 'تحتاج إلى رخصة قيادة سارية وجواز سفر أو بطاقة هوية وبطاقة ائتمان للوديعة.',
  },
  {
    question: 'What is the minimum age to rent a car?',
    questionAr: 'ما هو الحد الأدنى لسن استئجار سيارة؟',
    answer: 'The minimum age is 21 years old. Drivers under 25 may incur an additional young driver fee.',
    answerAr: 'الحد الأدنى للسن هو 21 عامًا. قد يتحمل السائقون الذين تقل أعمارهم عن 25 عامًا رسومًا إضافية للسائق الشاب.',
  },
  {
    question: 'Is insurance included in the rental price?',
    questionAr: 'هل التأمين مشمول في سعر الإيجار؟',
    answer: 'Yes, basic insurance is included. Additional coverage options are available for extra protection.',
    answerAr: 'نعم، التأمين الأساسي مشمول. تتوفر خيارات تغطية إضافية لحماية إضافية.',
  },
  {
    question: 'Can I pick up the car in one city and drop it off in another?',
    questionAr: 'هل يمكنني استلام السيارة في مدينة وإعادتها في مدينة أخرى؟',
    answer: 'Yes, one-way rentals are available. A small fee may apply depending on the locations.',
    answerAr: 'نعم، الإيجارات أحادية الاتجاه متاحة. قد يتم تطبيق رسوم صغيرة اعتمادًا على المواقع.',
  },
  {
    question: 'What is your fuel policy?',
    questionAr: 'ما هي سياسة الوقود الخاصة بك؟',
    answer: 'We operate a full-to-full policy. You receive the car with a full tank and return it full.',
    answerAr: 'نعمل بسياسة الممتلئ إلى الممتلئ. تستلم السيارة بخزان ممتلئ وتعيدها ممتلئة.',
  },
  {
    question: 'Can I cancel or modify my reservation?',
    questionAr: 'هل يمكنني إلغاء أو تعديل حجزي؟',
    answer: 'Yes, free cancellation up to 24 hours before pickup. Contact us for modifications.',
    answerAr: 'نعم، إلغاء مجاني حتى 24 ساعة قبل الاستلام. اتصل بنا للتعديلات.',
  },
];

const FAQSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about renting with us
          </p>
        </div>

        <div className="max-w-3xl mx-auto scroll-reveal">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 border-0 shadow-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">
                    {language === 'ar' ? faq.questionAr : faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {language === 'ar' ? faq.answerAr : faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
