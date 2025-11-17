export type User = {
    email: string;
};

export type SaveUserState = {
    success: boolean;
    user?: User;
    error?: string;
}
