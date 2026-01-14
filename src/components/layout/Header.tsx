'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Building2, LayoutGrid, Phone } from 'lucide-react';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCorporateDropdownOpen, setIsCorporateDropdownOpen] = useState(false);
  const [isPlatformsDropdownOpen, setIsPlatformsDropdownOpen] = useState(false);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ru' : 'en';
    const currentPath = window.location.pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center">
          <Image
            src="/wp-uploads/2022/09/Logo-Mobile.png"
            alt="Co-Mo Trade"
            width={200}
            height={78}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Corporate Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsCorporateDropdownOpen(true)}
            onMouseLeave={() => setIsCorporateDropdownOpen(false)}
          >
            <button className="group flex items-center space-x-2 text-primary hover:text-[#144958] transition-colors font-medium px-2 py-1 relative">
              <Building2 className="h-5 w-5" />
              <span>{t('corporate')}</span>
              <ChevronDown className="h-4 w-4" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#144958] transition-all duration-300 group-hover:w-full"></span>
            </button>
            {isCorporateDropdownOpen && (
              <div className="absolute top-full left-0 pt-0 w-52 z-50">
                <div className="bg-white text-text-main shadow-lg border border-gray-200">
                  <Link
                    href={`/${locale}/corporate/como-trade`}
                    className="block px-5 py-3 hover:bg-primary hover:text-white transition-colors border-b border-gray-100"
                  >
                    {t('comoTrade')}
                  </Link>
                  <Link
                    href={`/${locale}/corporate/vision-mission`}
                    className="block px-5 py-3 hover:bg-primary hover:text-white transition-colors border-b border-gray-100"
                  >
                    {t('visionMission')}
                  </Link>
                  <Link
                    href={`/${locale}/corporate/values`}
                    className="block px-5 py-3 hover:bg-primary hover:text-white transition-colors"
                  >
                    {t('values')}
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsPlatformsDropdownOpen(true)}
            onMouseLeave={() => setIsPlatformsDropdownOpen(false)}
          >
            <button className="group flex items-center space-x-2 text-primary hover:text-[#144958] transition-colors font-medium px-2 py-1 relative">
              <LayoutGrid className="h-5 w-5" />
              <span>{t('platforms')}</span>
              <ChevronDown className="h-4 w-4" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#144958] transition-all duration-300 group-hover:w-full"></span>
            </button>
            {isPlatformsDropdownOpen && (
              <div className="absolute top-full left-0 pt-0 w-64 z-50">
                <div className="bg-white text-text-main shadow-lg border border-gray-200">
                  <Link
                    href={`/${locale}/platforms#windows`}
                    className="block px-5 py-3 hover:bg-primary hover:text-white transition-colors border-b border-gray-100"
                  >
                    MetaTrader 5 ПК/Windows
                  </Link>
                  <Link
                    href={`/${locale}/platforms#web`}
                    className="block px-5 py-3 hover:bg-primary hover:text-white transition-colors border-b border-gray-100"
                  >
                    MetaTrader 5 Web Trader
                  </Link>
                  <Link
                    href={`/${locale}/platforms#android`}
                    className="block px-5 py-3 hover:bg-primary hover:text-white transition-colors border-b border-gray-100"
                  >
                    MetaTrader 5 Android
                  </Link>
                  <Link
                    href={`/${locale}/platforms#macos`}
                    className="block px-5 py-3 hover:bg-primary hover:text-white transition-colors"
                  >
                    MetaTrader 5 macOS
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href={`/${locale}/contact`}
            className="group flex items-center space-x-2 text-primary hover:text-[#144958] transition-colors font-medium px-2 py-1 relative"
          >
            <Phone className="h-5 w-5" />
            <span>{t('contact')}</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#144958] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 text-sm text-text-main border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            {locale === 'en' ? 'RU' : 'EN'}
          </button>

          <Button
            asChild
            variant="outline"
            className="border-2 border-warning text-warning hover:bg-warning hover:text-white font-semibold px-6"
          >
            <a href="https://client.comoforeignexchange.com/" target="_blank" rel="noopener noreferrer">
              {t('login')}
            </a>
          </Button>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-6"
          >
            <a href="https://client.comoforeignexchange.com/" target="_blank" rel="noopener noreferrer">
              {t('register')}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-main"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 font-semibold text-primary">
                <Building2 className="h-5 w-5" />
                <span>{t('corporate')}</span>
              </div>
              <Link
                href={`/${locale}/corporate/como-trade`}
                className="block pl-7 py-2 text-text-main hover:text-accent-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('comoTrade')}
              </Link>
              <Link
                href={`/${locale}/corporate/vision-mission`}
                className="block pl-7 py-2 text-text-main hover:text-accent-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('visionMission')}
              </Link>
              <Link
                href={`/${locale}/corporate/values`}
                className="block pl-7 py-2 text-text-main hover:text-accent-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('values')}
              </Link>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 font-semibold text-primary">
                <LayoutGrid className="h-5 w-5" />
                <span>{t('platforms')}</span>
              </div>
              <Link
                href={`/${locale}/platforms#windows`}
                className="block pl-7 py-2 text-text-main hover:text-accent-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                MetaTrader 5 ПК/Windows
              </Link>
              <Link
                href={`/${locale}/platforms#web`}
                className="block pl-7 py-2 text-text-main hover:text-accent-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                MetaTrader 5 Web Trader
              </Link>
              <Link
                href={`/${locale}/platforms#android`}
                className="block pl-7 py-2 text-text-main hover:text-accent-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                MetaTrader 5 Android
              </Link>
              <Link
                href={`/${locale}/platforms#macos`}
                className="block pl-7 py-2 text-text-main hover:text-accent-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                MetaTrader 5 macOS
              </Link>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="flex items-center space-x-2 py-2 text-primary hover:text-accent-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="h-5 w-5" />
              <span>{t('contact')}</span>
            </Link>

            <div className="pt-4 space-y-2 border-t border-gray-100">
              <button
                onClick={toggleLanguage}
                className="w-full px-3 py-2 text-sm text-text-main border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                {locale === 'en' ? 'Русский' : 'English'}
              </button>
              <Button
                asChild
                variant="outline"
                className="w-full border-2 border-warning text-warning hover:bg-warning hover:text-white"
              >
                <a href="https://client.comoforeignexchange.com/" target="_blank" rel="noopener noreferrer">
                  {t('login')}
                </a>
              </Button>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a href="https://client.comoforeignexchange.com/" target="_blank" rel="noopener noreferrer">
                  {t('register')}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
