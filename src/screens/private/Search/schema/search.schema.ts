import * as zod from "zod";

export const SearchSchema = zod.object({
  searchItem: zod.string().min(1).nonempty(),
});

export type SearchFormData = zod.infer<typeof SearchSchema>;
