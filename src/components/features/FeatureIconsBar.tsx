'use client';

import {
  Globe,
  Users,
  Cpu,
  UserPlus,
  TrendingUp,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Users,
  Cpu,
  UserPlus,
  TrendingUp,
};

interface FeatureItem {
  iconName: string;
  title: string;
  anchor: string;
}

interface FeatureIconsBarProps {
  features: FeatureItem[];
}

export function FeatureIconsBar({ features }: FeatureIconsBarProps) {
  const handleClick = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hidden md:block bg-white py-2 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.iconName];
            return (
              <button
                key={index}
                onClick={() => handleClick(feature.anchor)}
                className="flex flex-col items-center text-center cursor-pointer hover:text-primary transition-colors group"
              >
                {Icon && <Icon className="h-5 w-5 text-gray-400 mb-1 group-hover:text-primary transition-colors" strokeWidth={1.5} />}
                <span className="text-[11px] text-gray-400 leading-tight max-w-[90px] group-hover:text-primary transition-colors">
                  {feature.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
