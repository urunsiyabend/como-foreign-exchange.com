'use client';

import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Headphones, Zap } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const customAttributes = [
    { icon: Headphones, label: t('attrSupport') },
    { icon: Zap, label: t('attrSolutions') }
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
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* Contact Information */}
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-6">
                  <h2 className="text-4xl font-extrabold text-accent-dark tracking-tight">
                    {t('infoTitle')}
                  </h2>
                  <div className="space-y-8">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-accent-dark">Office</p>
                        <p className="text-text-main/80 text-lg leading-snug">
                          Office 116, 191 Abdrahmanova St., Bishkek, Kyrgyzstan
                        </p>
                      </div>
                    </div>

                    {/* Phones */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <p className="font-bold text-accent-dark">Phone Numbers</p>
                        <div className="space-y-1">
                          <a href="tel:+996394372610" className="block text-text-main/80 text-lg hover:text-primary transition-colors">+(996) 394 372 610</a>
                          <a href="tel:+996394342055" className="block text-text-main/80 text-lg hover:text-primary transition-colors">+(996) 394 342 055</a>
                        </div>
                      </div>
                    </div>

                    {/* Email Group */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="font-bold text-accent-dark mb-1">{t('emailInquiries')}</p>
                          <a href="mailto:info@como-foreign-exchange.com" className="text-text-main/80 text-lg hover:text-primary transition-colors block italic">
                            info@como-foreign-exchange.com
                          </a>
                        </div>

                        <div className="grid grid-cols-1 gap-3 pt-2 border-t border-gray-100">
                          <div>
                            <span className="text-sm font-bold text-accent-dark uppercase tracking-wider block mb-0.5">Information:</span>
                            <a href="mailto:info@como-foreign-exchange.com" className="text-text-main/70 hover:text-primary transition-colors">info@como-foreign-exchange.com</a>
                          </div>
                          <div>
                            <span className="text-sm font-bold text-accent-dark uppercase tracking-wider block mb-0.5">Marketing:</span>
                            <a href="mailto:marketing@como-foreign-exchange.com" className="text-text-main/70 hover:text-primary transition-colors">marketing@como-foreign-exchange.com</a>
                          </div>
                          <div>
                            <span className="text-sm font-bold text-accent-dark uppercase tracking-wider block mb-0.5">Support:</span>
                            <a href="mailto:support@como-foreign-exchange.com" className="text-text-main/70 hover:text-primary transition-colors">support@como-foreign-exchange.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="lg:col-span-7 bg-[#f8fafb] border border-gray-100 p-8 md:p-12 rounded-none">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-extrabold text-accent-dark">
                      {t('formTitle')}
                    </h2>
                    <p className="text-lg text-text-main/70 leading-relaxed">
                      {t('formIntro')}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-base font-bold text-accent-dark">
                          {t('firstName')} <span className="text-primary italic">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder={t('firstName')}
                          className="bg-white border-gray-200 h-14 rounded-none focus:ring-primary focus:border-primary"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-base font-bold text-accent-dark">
                          {t('lastName')} <span className="text-primary italic">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder={t('lastName')}
                          className="bg-white border-gray-200 h-14 rounded-none focus:ring-primary focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-bold text-accent-dark">
                        {t('email')} <span className="text-primary italic">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                        className="bg-white border-gray-200 h-14 rounded-none focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-bold text-accent-dark">
                        {t('phone')}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+0 000 000 00 00"
                        className="bg-white border-gray-200 h-14 rounded-none focus:ring-primary focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-bold text-accent-dark">
                        {t('message')} <span className="text-primary italic">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="..."
                        className="bg-white border-gray-200 rounded-none focus:ring-primary focus:border-primary resize-none"
                        required
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-50 text-green-700 border border-green-200 font-medium">
                        Your message has been sent successfully!
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 text-red-700 border border-red-200 font-medium">
                        There was an error sending your message. Please try again.
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 h-auto text-lg rounded-none transition-all duration-300 transform active:scale-[0.98]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? '...' : t('submit')}
                    </Button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
