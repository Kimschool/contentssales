"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/get-dictionary";

export function CreatorsForm({ dict }: { dict: Dictionary }) {
  const f = dict.creators.form;
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const required = ["name", "email", "role", "portfolio1", "intro"];
    for (const key of required) {
      if (!String(data.get(key) ?? "").trim()) {
        setStatus("error");
        return;
      }
    }
    setStatus("success");
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={f.name} name="name" required />
        <Field label={f.email} name="email" type="email" required />
      </div>

      <div>
        <Label required>{f.role}</Label>
        <select
          name="role"
          defaultValue=""
          className="mt-2 w-full border-0 border-b border-ink-200 bg-transparent py-3 text-sm text-ink-900 outline-none transition focus:border-brand-500"
        >
          <option value="" disabled>
            —
          </option>
          {f.roleOptions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <Field
        label={f.portfolio1}
        name="portfolio1"
        type="url"
        required
        placeholder="https://"
      />
      <Field
        label={f.portfolio2}
        name="portfolio2"
        type="url"
        placeholder="https://"
      />

      <div>
        <Label>{f.source}</Label>
        <div className="mt-3 flex flex-wrap gap-2">
          {f.sourceOptions.map((s, i) => (
            <label
              key={s}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-xs font-semibold text-ink-600 transition hover:border-ink-900 hover:text-ink-900 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-500 has-[:checked]:text-white"
            >
              <input
                type="radio"
                name="source"
                value={s}
                defaultChecked={i === 0}
                className="sr-only"
              />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label required>{f.intro}</Label>
        <textarea
          name="intro"
          rows={5}
          placeholder={f.introPlaceholder}
          className="mt-2 w-full border-0 border-b border-ink-200 bg-transparent py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition focus:border-brand-500"
        />
      </div>

      {status === "error" ? (
        <div className="border-l-2 border-red-500 bg-red-50 px-4 py-3 text-sm text-red-700">
          {f.required}
        </div>
      ) : null}
      {status === "success" ? (
        <div className="border-l-2 border-brand-500 bg-brand-50 px-4 py-3 text-sm text-brand-700">
          {f.success}
        </div>
      ) : null}

      <button
        type="submit"
        className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-brand-600"
      >
        {f.submit}
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </button>
    </form>
  );
}

function Label({
  children,
  required
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
      {children}
      {required ? <span className="ml-1 text-brand-500">*</span> : null}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full border-0 border-b border-ink-200 bg-transparent py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition focus:border-brand-500"
      />
    </div>
  );
}
