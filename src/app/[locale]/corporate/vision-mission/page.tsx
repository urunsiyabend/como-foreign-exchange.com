import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/layout/PageHeader';
import Image from 'next/image';

export default function VisionMissionPage() {
  const t = useTranslations('visionMission');

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-24">

            {/* Mission Section */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-extrabold text-accent-dark tracking-tight">
                  {t('missionTitle')}
                </h2>
                <div className="relative">
                  <p className="text-lg md:text-xl text-text-main/90 leading-relaxed font-medium">
                    {t('missionDesc')}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/wp-uploads/2022/10/como-foreign-exchange-mission-400x400.webp"
                      alt={t('missionTitle')}
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Section */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-extrabold text-accent-dark tracking-tight">
                  {t('visionTitle')}
                </h2>
                <div className="relative">
                  <p className="text-lg md:text-xl text-text-main/90 leading-relaxed font-medium">
                    {t('visionDesc')}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/wp-uploads/2022/10/como-foreign-exchange-vision-400x400.webp"
                      alt={t('visionTitle')}
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
