# Actions

## What is it?
Actions are a way to handle asynchronous operations, especially mutations, such as:
- sending form data
- submitting actions to the server
- updating state based on async operations

They are intergrated with React transitions and concurrent features:
- Suspense and Error Boundaries
- `useOptimistic()` and `useActionState()` hooks

They also can be used on both the client and server.

### Before React 19
- forms required manual `onSubmit` handlers
- loading states had to be manually implemented
- error boundaries didn't integrate with async mutations

## Usage
```tsx
const saveUser = async (formData) => {
    // data validation
    // POST request
    // etc.
};

const UserForm = () => {
    const [state, action, pending] = useActionState(saveUser);

    return (
        <form action={saveUser}>
            <input name="email" />
            <button type="submit">Save</button>
        </form>
    );
};
```

## Use cases
- submit form
- delete user by clicking button
- like/unlike post

## Hooks
### `useActionState()`
Updates state based on the result of a form action.

```tsx
const [state, formAction, isPending] = useActionState(fn, initialState, permalink?);
```

### `useOptimistic()`
Optimistically update the UI. Allows UI updates before the server confirms the action.

```tsx
const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);
```

## Server Actions
TBD

## 🔗 Resources & Links
- https://react.dev/reference/react-dom/components/form
- https://vercel.com/blog/whats-new-in-react-19#actions
- https://react.dev/reference/react/useActionState
- https://react.dev/reference/react/useOptimistic