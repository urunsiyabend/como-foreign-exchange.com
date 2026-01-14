import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { HeroSection } from '@/components/layout/HeroSection';
import { FeatureIconsBar } from '@/components/features/FeatureIconsBar';
import { Check } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations('home');
  const locale = useLocale();

  const featureItems = [
    { iconName: 'Globe', title: t('globalMarketsTitle'), anchor: 'global-markets' },
    { iconName: 'Users', title: t('investorCategoriesTitle'), anchor: 'account-tiers' },
    { iconName: 'Cpu', title: t('techTitle'), anchor: 'technology' },
    { iconName: 'UserPlus', title: t('createAccountTitle'), anchor: 'create-account' },
    { iconName: 'TrendingUp', title: t('expSectionTitle'), anchor: 'experience' },
  ];

  const accountTiers = [
    {
      name: t('coBasic'),
      range: t('coBasicRange'),
      commission: t('coBasicCommission'),
      color: '#328096',
    },
    {
      name: t('coClass'),
      range: t('coClassRange'),
      commission: t('coClassCommission'),
      color: '#2a7084',
    },
    {
      name: t('coPro'),
      range: t('coProRange'),
      commission: t('coProCommission'),
      color: '#1e5868',
    },
    {
      name: t('coMaster'),
      range: t('coMasterRange'),
      commission: t('coMasterCommission'),
      color: '#113d49',
    },
  ];

  const commonFeatures = [
    t('featureAssistant'),
    t('featureDailySupport'),
    t('featureRawSpread'),
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Slider Background */}
      <HeroSection
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        backgroundImage="/wp-uploads/2022/11/como-trade-homepage-slider-b.png"
        showAboutButton={true}
        aboutButtonText={t('aboutButton')}
      />

      {/* Feature Icons Bar */}
      <FeatureIconsBar features={featureItems} />

      {/* Global Markets Section */}
      <section id="global-markets" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <Image
                src="/wp-uploads/2022/10/como-foreign-exchange-global-markets-400x400.webp"
                alt="Global Markets"
                width={400}
                height={400}
                className="w-full max-w-[300px] md:max-w-[400px] h-auto"
              />
            </div>
            {/* Content */}
            <div className="w-full md:w-2/3">
              <h2 className="font-bold mb-6">
                {t('globalMarketsSectionTitle')}
              </h2>
              <p className="text-lg text-text-main/80 leading-relaxed">
                {t('globalMarketsSectionDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Account Tiers Section */}
      <section
        id="account-tiers"
        className="py-16 scroll-mt-24 relative"
        style={{
          backgroundColor: '#fefefe',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='20' y='20' fill='rgba(0,0,0,0.05)' font-size='8' font-family='Arial' text-anchor='middle' dominant-baseline='middle'%3Ex%3C/text%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="mb-14 px-4 max-w-5xl">
            <h2 className="font-extrabold text-3xl md:text-4xl mb-4 text-accent-dark">
              {t('investorCategoriesTitle')}
            </h2>
            <p className="text-text-main/70 font-medium text-lg leading-relaxed">
              {t('investorCategoriesSubtitle')}
            </p>
          </div>

          {/* Tier Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
            {accountTiers.map((tier, index) => (
              <div key={index} className="bg-white border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Specific Header Color for each account type */}
                <div
                  className="py-4 px-4 w-full"
                  style={{ backgroundColor: tier.color }}
                >
                  <h3
                    className="text-xl font-extrabold text-white !text-white text-center uppercase tracking-wider"
                    style={{ color: 'white' }}
                  >
                    {tier.name}
                  </h3>
                </div>

                {/* Price/Range Info - Not bold as requested */}
                <div className="pt-8 pb-6 px-6 text-center">
                  <p className="text-2xl text-accent-dark mb-1">
                    {tier.range}
                  </p>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-tight">
                    {t('requiredDeposit')}
                  </p>
                </div>

                <div className="px-6 mb-6">
                  <div className="h-[1px] bg-gray-100 w-full"></div>
                </div>

                {/* Features */}
                <div className="px-8 pb-10 flex-grow">
                  <p className="font-bold text-accent-dark mb-6 text-base">
                    {t('whatsIncluded')}
                  </p>
                  <ul className="space-y-4">
                    {commonFeatures.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0" />
                        <span className="text-[15px] font-medium text-text-main/90 leading-snug">{feature}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0" />
                      <span className="text-[15px] font-medium text-text-main/90 leading-snug">{tier.commission}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premier Technology Section */}
      <section id="technology" className="py-24 bg-white scroll-mt-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                <Image
                  src="/wp-uploads/2022/10/como-foreign-exchange-premier-technology-600x600.webp"
                  alt="Premier Technology"
                  width={600}
                  height={600}
                  className="w-full max-w-[500px] h-auto object-contain"
                />
              </div>
            </div>
            {/* Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-accent-dark leading-[1.1]">
                {t('techTitle')}
              </h2>
              <p className="text-lg text-text-main/80 leading-relaxed max-w-xl">
                {t('techDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Create Account Section */}
      <section
        id="create-account"
        className="relative py-24 min-h-[600px] flex items-center overflow-hidden scroll-mt-24"
        style={{
          backgroundImage: 'url("/wp-uploads/2022/10/como-foreign-exchange-create-account-background-1.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#113d49]/60 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Left: White Box */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="bg-white p-12 md:p-16 shadow-2xl max-w-lg w-full">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-accent-dark leading-tight">
                  {t('createAccountTitle')}
                </h2>
                <p className="text-lg text-text-main/80 mb-10 leading-relaxed">
                  {t('createAccountSubtitle')}
                </p>
                <Link
                  href={`/${locale}/register`}
                  className="inline-block bg-[#328096] hover:bg-[#2a6a7a] text-white font-bold py-4 px-10 transition-colors duration-300 uppercase tracking-wide text-sm"
                >
                  {t('registerButton')}
                </Link>
              </div>
            </div>

            {/* Right: Transparent Articles */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-10">
                {/* Step 1 */}
                <div className="group transition-all duration-300 hover:translate-x-2">
                  <h3
                    className="text-2xl font-bold !text-white mb-3 drop-shadow-md"
                    style={{ color: 'white' }}
                  >
                    {t('step1Title')}
                  </h3>
                  <p className="text-white/90 text-lg max-w-md drop-shadow-sm leading-relaxed">
                    {t('step1Desc')}
                  </p>
                </div>
                {/* Step 2 */}
                <div className="group transition-all duration-300 hover:translate-x-2">
                  <h3
                    className="text-2xl font-bold !text-white mb-3 drop-shadow-md"
                    style={{ color: 'white' }}
                  >
                    {t('step2Title')}
                  </h3>
                  <p className="text-white/90 text-lg max-w-md drop-shadow-sm leading-relaxed">
                    {t('step2Desc')}
                  </p>
                </div>
                {/* Step 3 */}
                <div className="group transition-all duration-300 hover:translate-x-2">
                  <h3
                    className="text-2xl font-bold !text-white mb-3 drop-shadow-md"
                    style={{ color: 'white' }}
                  >
                    {t('step3Title')}
                  </h3>
                  <p className="text-white/90 text-lg max-w-md drop-shadow-sm leading-relaxed">
                    {t('step3Desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto lg:mx-0 lg:pl-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-accent-dark mb-16 leading-tight">
              {t('expSectionTitle')}
            </h2>

            <div className="flex flex-row items-start gap-8">
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <Image
                  src="/wp-uploads/2022/10/como-foreign-exchange-icon1.webp"
                  alt="Financial Structure Icon"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-accent-dark mb-4 leading-snug">
                  {t('expFeatureTitle')}
                </h3>
                <p className="text-text-main/70 text-lg leading-relaxed max-w-2xl">
                  {t('expFeatureDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
