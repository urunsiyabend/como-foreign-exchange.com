import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/layout/PageHeader';

export default function ComoTradePage() {
  const t = useTranslations('comoTrade');

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
      />

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold text-accent-dark">
                {t('aboutTitle')}
              </h2>
              <div className="space-y-6 text-lg text-text-main/80 leading-relaxed">
                <p>{t('aboutDesc1')}</p>
                <p>{t('aboutDesc2')}</p>
                <p>{t('aboutDesc3')}</p>
              </div>
            </div>

            <div className="bg-[#113d49]/5 p-10 md:p-14 border-l-8 border-[#328096]">
              <p className="text-2xl md:text-3xl font-bold text-accent-dark leading-snug">
                {t('missionDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
