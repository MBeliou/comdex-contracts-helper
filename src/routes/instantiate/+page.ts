import type { PageLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/client';
import { instantiateFormSchema } from './schema';

export const load = (async () => {
	const form = await superValidate(instantiateFormSchema);

	return { form };
}) satisfies PageLoad;
