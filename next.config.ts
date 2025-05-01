import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const i18 = ''
 
const nextConfig: NextConfig = {};
 
const withNextIntl = createNextIntlPlugin('./feature/internationalization/request.ts');
export default withNextIntl(nextConfig);