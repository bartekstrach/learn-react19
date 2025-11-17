import { type SaveUserState } from "./types";

export const saveUser = async (_prevState: SaveUserState, formData: FormData): Promise<SaveUserState> => {
    const email = formData.get("email");
    
    if (!email) {
        return {
            success: false,
            error: "Email is required",
        };
    }
    
    if (typeof email !== 'string') {
        return {
            success: false,
            error: "Email is not a string"
        };
    }

    // further email validation

    // POST request to save user

    return {
        success: true,
        user: { email },
    };
};