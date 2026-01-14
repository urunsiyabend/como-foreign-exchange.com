import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/layout/PageHeader';
import Image from 'next/image';
import { Monitor, Smartphone, Laptop, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PlatformsPage() {
  const t = useTranslations('platforms');

  const customAttributes = [
    { icon: Monitor, label: t('attrWindows') },
    { icon: Smartphone, label: t('attrIos') },
    { icon: Smartphone, label: t('attrAndroid') },
    { icon: Laptop, label: t('attrMacos') }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
        attributes={customAttributes}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-32">

            {/* Windows Section */}
            <div id="windows" className="flex flex-col md:flex-row items-center gap-12 md:gap-20 scroll-mt-32">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="space-y-2">
                  <p className="text-primary font-bold tracking-wider uppercase text-sm">
                    {t('windowsSub')}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-accent-dark">
                    {t('windowsTitle')}
                  </h2>
                </div>
                <p className="text-lg text-text-main/80 leading-relaxed">
                  {t('windowsDesc')}
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 h-auto text-lg rounded-none flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  {t('windowsBtn')}
                </Button>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 p-4">
                  <Image
                    src="/wp-uploads/2022/10/como-foreign-exchange-metatrader4-windows-600x614.webp"
                    alt={t('windowsTitle')}
                    width={600}
                    height={614}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* iOS Section */}
            <div id="web" className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20 scroll-mt-32">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="space-y-2">
                  <p className="text-primary font-bold tracking-wider uppercase text-sm">
                    {t('webSub')}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-accent-dark">
                    {t('webTitle')}
                  </h2>
                </div>
                <p className="text-lg text-text-main/80 leading-relaxed">
                  {t('webDesc')}
                </p>
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 h-auto text-lg rounded-none flex items-center gap-3">
                  <ExternalLink className="w-5 h-5" />
                  {t('webBtn')}
                </Button>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 p-4">
                  <Image
                    src="/wp-uploads/2022/10/como-foreign-exchange-metatrader4-ios-600x614.webp"
                    alt={t('webTitle')}
                    width={600}
                    height={614}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Android Section */}
            <div id="android" className="flex flex-col md:flex-row items-center gap-12 md:gap-20 scroll-mt-32">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="space-y-2">
                  <p className="text-primary font-bold tracking-wider uppercase text-sm">
                    {t('androidSub')}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-accent-dark">
                    {t('androidTitle')}
                  </h2>
                </div>
                <p className="text-lg text-text-main/80 leading-relaxed">
                  {t('androidDesc')}
                </p>
                <Button className="bg-accent-dark hover:bg-accent-dark/90 text-white px-8 py-4 h-auto text-lg rounded-none flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  {t('androidBtn')}
                </Button>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 p-4">
                  <Image
                    src="/wp-uploads/2022/10/como-foreign-exchange-metatrader4-android-600x614.png"
                    alt={t('androidTitle')}
                    width={600}
                    height={614}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* macOS Section */}
            <div id="macos" className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20 scroll-mt-32">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="space-y-2">
                  <p className="text-primary font-bold tracking-wider uppercase text-sm">
                    {t('macosSub')}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-accent-dark">
                    {t('macosTitle')}
                  </h2>
                </div>
                <p className="text-lg text-text-main/80 leading-relaxed">
                  {t('macosDesc')}
                </p>
                <Button variant="outline" className="border-2 border-accent-dark text-accent-dark hover:bg-accent-dark hover:text-white px-8 py-4 h-auto text-lg rounded-none flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  {t('macosBtn')}
                </Button>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 p-4">
                  <Image
                    src="/wp-uploads/2022/10/como-foreign-exchange-metatrader4-macos-600x614.png"
                    alt={t('macosTitle')}
                    width={600}
                    height={614}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
