import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="w-full">
      {/* Main Footer Area */}
      <div className="bg-[#113d49] text-white py-14">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16 px-4 md:px-8">
            {/* Logo Section */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <Link href={`/${locale}`} className="relative block">
                <Image
                  src="/wp-uploads/2022/10/como-foreign-exchange-logo-retina-600x600.webp"
                  alt="Como Foreign Exchange Logo"
                  width={240}
                  height={120}
                  className="w-auto h-auto max-w-[240px] object-contain brightness-120"
                />
              </Link>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h3
                className="text-xl font-bold mb-8 uppercase tracking-wider !text-white"
                style={{ color: 'white' }}
              >
                {t('links')}
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href={`/${locale}#account-tiers`} className="text-white hover:text-primary transition-colors duration-200">
                    {t('categories')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}#technology`} className="text-white hover:text-primary transition-colors duration-200">
                    {t('values')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/platforms`} className="text-white hover:text-primary transition-colors duration-200">
                    {t('platforms')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/contact`} className="text-white hover:text-primary transition-colors duration-200">
                    {t('contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Info Section */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-start lg:text-left">
              <h3
                className="text-xl font-bold mb-8 uppercase tracking-wider !text-white"
                style={{ color: 'white' }}
              >
                {t('company')}
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-1 opacity-90" />
                  <a href="mailto:info@como-foreign-exchange.com" className="hover:text-primary transition-colors">
                    info@como-foreign-exchange.com
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-1 opacity-90" />
                  <div className="flex flex-col">
                    <a href="tel:+996394372610" className="hover:text-primary transition-colors">+(996) 394 372 610</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-1 opacity-90" />
                  <a href="tel:+996394342055" className="hover:text-primary transition-colors">+(996) 394 342 055</a>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1 opacity-90" />
                  <span className="leading-relaxed">
                    Office 116, 191 Abdrahmanova St., Bishkek, Kyrgyzstan
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Detailed Legal Info & Risk Warnings */}
          <div className="max-w-5xl mx-auto px-6 text-center space-y-10 border-t border-white/10 pt-16 font-medium text-[15px] text-white opacity-95">
            <div className="space-y-6">
              <p>{t('restriction1')}</p>
              <p>{t('restriction2')}</p>
              <p>{t('restriction3')}</p>
            </div>

            <div className="pt-8 space-y-8">
              <h4
                className="text-lg font-bold uppercase tracking-widest !text-white"
                style={{ color: 'white' }}
              >
                {t('riskWarningTitle')}
              </h4>
              <p className="leading-relaxed text-[14px]">
                {t('riskWarningDesc')}
              </p>
              <p className="text-[14px]">{t('riskWarningExtra')}</p>
            </div>

            <div className="pt-4 space-y-6 italic opacity-90 text-[14px]">
              <p>{t('cookieWarning')}</p>
              <p>{t('regulation')}</p>
            </div>

            <div className="pt-4 font-bold tracking-wide">
              {t('copyright')}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-[#328096] text-white py-4">
        <div className="container mx-auto px-4 max-w-7xl flex justify-end items-center">
          <span className="text-sm font-medium tracking-wide">
            {t('bottomLine')}
          </span>
        </div>
      </div>
    </footer>
  );
}
