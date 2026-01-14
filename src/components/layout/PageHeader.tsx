import { Award, Shield, BookOpen, LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface PageHeaderAttribute {
    icon: LucideIcon;
    label: string;
}

interface PageHeaderProps {
    title: string;
    subtitle: string;
    showAttributes?: boolean;
    attributes?: PageHeaderAttribute[];
}

export function PageHeader({ title, subtitle, showAttributes = true, attributes }: PageHeaderProps) {
    const t = useTranslations('comoTrade');

    const defaultAttributes: PageHeaderAttribute[] = [
        { icon: Award, label: t('experienced') },
        { icon: Shield, label: t('regulated') },
        { icon: BookOpen, label: t('educational') }
    ];

    const displayAttributes = attributes || defaultAttributes;

    return (
        <section className="bg-[#113d49] pt-32 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold !text-white mb-6 leading-tight">
                        {title}
                    </h1>
                    <p className="text-base md:text-lg text-white/80 leading-relaxed font-normal mb-10 max-w-3xl">
                        {subtitle}
                    </p>

                    {showAttributes && (
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-8 border-t border-white/10 w-full max-w-3xl">
                            {displayAttributes.map((attr, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                                        <attr.icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm md:text-base font-bold text-white uppercase tracking-wider">
                                        {attr.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
