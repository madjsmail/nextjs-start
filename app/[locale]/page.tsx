'use client'
import { Link } from '@/feature/internationalization/navigation'; // This might be unused now
import {useTranslations} from 'next-intl'; // This might be unused now
import LandingPage from '@/app/components/LandingPage/LandingPage'; // Added import

export default function HomePage() {
  const t = useTranslations('landing'); // This might be unused now
  return (
    <LandingPage /> // Replaced content
  );
}