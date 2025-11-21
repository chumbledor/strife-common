import z from 'zod';
export declare const AccountIdSchema: z.ZodObject<{
    accountId: z.ZodString;
}, z.core.$strip>;
export type AccountIdData = z.infer<typeof AccountIdSchema>;
export declare const AccountSchema: z.ZodObject<{
    id: z.ZodString;
    authentication: z.ZodOptional<z.ZodObject<{
        accessToken: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    email: z.ZodString;
    username: z.ZodString;
}, z.core.$strip>;
export type AccountData = z.infer<typeof AccountSchema>;
export declare const CreateAccountSchema: z.ZodObject<{
    email: z.ZodString;
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type CreateAccountData = z.infer<typeof CreateAccountSchema>;
export declare const GetAccountsSchema: z.ZodObject<{
    skip: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    take: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    ids: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>, z.ZodTransform<string[] | undefined, string | string[] | undefined>>;
    username: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetAccountsData = z.infer<typeof GetAccountsSchema>;
export declare const UpdateAccountSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateAccountData = z.infer<typeof UpdateAccountSchema>;
