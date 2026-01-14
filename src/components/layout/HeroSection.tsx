'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  showAboutButton?: boolean;
  aboutButtonText?: string;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  showAboutButton = false,
  aboutButtonText = 'About Us',
}: HeroSectionProps) {
  const locale = useLocale();

  return (
    <section
      className="relative min-h-[500px] md:min-h-[600px] flex items-center"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : 'linear-gradient(to right, #f5f5f5 0%, #e8e8e8 50%, #f0f0f0 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-text-main/80 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          {showAboutButton && (
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg"
            >
              <Link href={`/${locale}/corporate/como-trade`} className="flex items-center space-x-2">
                <Info className="h-5 w-5" />
                <span>{aboutButtonText}</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
