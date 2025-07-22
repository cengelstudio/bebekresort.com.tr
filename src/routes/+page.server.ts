import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  // Redirect to default locale (English)
  throw redirect(302, '/en');
};
