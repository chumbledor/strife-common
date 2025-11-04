import { z } from 'zod';
export declare const AccountIdSchema: z.ZodString;
export type AccountIdData = z.infer<typeof AccountIdSchema>;
export declare const AccountSchema: z.ZodIntersection<z.ZodObject<{
    authentication: z.ZodOptional<z.ZodObject<{
        accessToken: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    email: z.ZodString;
    username: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>>;
export type AccountData = z.infer<typeof AccountSchema>;
export declare const CreateAccountSchema: z.ZodObject<{
    email: z.ZodString;
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type CreateAccountData = z.infer<typeof CreateAccountSchema>;
export declare const GetAccountsSchema: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    username: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodOptional<z.ZodObject<{
    ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>>, z.ZodOptional<z.ZodObject<{
    skip: z.ZodPipe<z.ZodOptional<z.ZodNumber>, z.ZodTransform<number | undefined, number | undefined>>;
    take: z.ZodPipe<z.ZodOptional<z.ZodNumber>, z.ZodTransform<number | undefined, number | undefined>>;
}, z.core.$strip>>>;
export type GetAccountsData = z.infer<typeof GetAccountsSchema>;
export declare const UpdateAccountSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateAccountData = z.infer<typeof UpdateAccountSchema>;
