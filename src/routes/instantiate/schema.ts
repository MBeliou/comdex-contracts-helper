import { z } from 'zod';

export const instantiateFormSchema = z.object({
	codeID: z.number(),
	label: z.string().min(2).max(40),
	adminAddress: z.optional(z.string()),
	instantiateMessage: z.string().default("{}")
});
// export const formSchema: SuperValidated<InstantiateFormSchema> = superValidate(instantiateFormSchema);
export type InstantiateFormSchema = typeof instantiateFormSchema;
