import { Shield, Award, CheckCircle, ThumbsUp } from 'lucide-react';

const badges = [
  { icon: Shield, text: 'Verified & Secure' },
  { icon: Award, text: 'Award Winning' },
  { icon: CheckCircle, text: 'Trusted Service' },
  { icon: ThumbsUp, text: '99% Satisfaction' },
];

const TrustBadges = () => {
  return (
    <div className="py-12 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-card hover:shadow-elevated transition-shadow"
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="font-semibold text-sm">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
