import { useActionState } from "react";

import { saveUser } from "./actions";
import { type SaveUserState } from "./types";

const initialState: SaveUserState = {
    success: false,
};

const UserForm = () => {
    const [state, action, pending] = useActionState<SaveUserState, FormData>(saveUser, initialState);

    return (
        <form action={action}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
            />

            <button type="submit" disabled={pending}>
                {pending ? "Saving..." : "Save"}
            </button>

            {state.success && state.user && (
                <p>User saved: {state.user.email}</p>
            )}

            {state.error && <p style={{ color: "red" }}>{state.error}</p>}
        </form>
    );
};

export default UserForm;
