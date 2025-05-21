'use client';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function LandingPage() {
  const t = useTranslations('LandingPage');
  return (
    <div>
      {/* Hero Section */}
      <section>
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.description')}</p>
      </section>

      {/* Features Section */}
      <section>
        <h2>{t('features.title')}</h2>
        <ul>
          <li>{t('features.item1')}</li>
          <li>{t('features.item2')}</li>
          <li>{t('features.item3')}</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section>
        <h2>{t('cta.title')}</h2>
        <button>{t('cta.button')}</button>
      </section>
    </div>
  );
}
