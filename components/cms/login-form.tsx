"use client";

import { useActionState } from "react";
import { login } from "@/app/admin/actions";

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, { error: null });

  return (
    <form action={formAction} className="mt-10 space-y-6">
      <div>
        <label htmlFor="username" className="text-eyebrow text-paper-dim">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          required
          autoComplete="username"
          autoFocus
          className="mt-2 w-full border border-line-dark bg-transparent px-4 py-3 text-background outline-none transition-colors focus:border-green-soft"
        />
      </div>
      <div>
        <label htmlFor="password" className="text-eyebrow text-paper-dim">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="mt-2 w-full border border-line-dark bg-transparent px-4 py-3 text-background outline-none transition-colors focus:border-green-soft"
        />
      </div>
      {state.error ? (
        <p role="alert" className="text-data border-l-2 border-red-400 pl-3 text-red-300">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-green-soft hover:text-foreground disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
