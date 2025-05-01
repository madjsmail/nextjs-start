'use client'
import { Link } from '@/feature/internationalization/navigation';
import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslations('landing');
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}