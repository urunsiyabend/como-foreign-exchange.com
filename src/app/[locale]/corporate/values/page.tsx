import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/layout/PageHeader';
import { History, Globe, LifeBuoy, Star, TrendingUp, Wallet, Users, Lightbulb, Heart } from 'lucide-react';

export default function ValuesPage() {
  const t = useTranslations('values');

  const customAttributes = [
    { icon: History, label: t('attrPast') },
    { icon: Globe, label: t('attrPerspective') },
    { icon: LifeBuoy, label: t('attrSupport') }
  ];

  const valuesList = [
    {
      icon: Star,
      title: t('firstClassTitle'),
      desc: t('firstClassDesc'),
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: TrendingUp,
      title: t('constantBenefitTitle'),
      desc: t('constantBenefitDesc'),
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Wallet,
      title: t('stableIncomeTitle'),
      desc: t('stableIncomeDesc'),
      color: 'bg-amber-50 text-amber-600'
    },
    {
      icon: Users,
      title: t('unityTitle'),
      desc: t('unityDesc'),
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Lightbulb,
      title: t('inspirationTitle'),
      desc: t('inspirationDesc'),
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: Heart,
      title: t('touchLivesTitle'),
      desc: t('touchLivesDesc'),
      color: 'bg-red-50 text-red-600'
    }
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
          <div className="max-w-6xl mx-auto space-y-20">

            {/* Introduction */}
            <div className="max-w-4xl">
              <h2 className="text-4xl font-extrabold text-accent-dark mb-8">
                {t('mainTitle')}
              </h2>
              <p className="text-xl text-text-main/80 leading-relaxed font-medium">
                {t('mainIntro')}
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valuesList.map((value, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl border border-gray-100 bg-[#f8fafb] hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-accent-dark mb-4">
                    {value.title}
                  </h3>
                  <p className="text-text-main/70 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
