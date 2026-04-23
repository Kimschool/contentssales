"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/get-dictionary";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const f = dict.contactPage.form;
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const required = ["company", "name", "email", "message"];
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={f.company} name="company" required />
        <Field label={f.name} name="name" required />
        <Field label={f.email} name="email" type="email" required />
        <Field label={f.phone} name="phone" />
      </div>

      <div>
        <Label>{f.category}</Label>
        <select
          name="category"
          defaultValue={f.categories[0]}
          className="mt-2 w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-500"
        >
          {f.categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label required>{f.message}</Label>
        <textarea
          name="message"
          rows={6}
          placeholder={f.messagePlaceholder}
          className="mt-2 w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition focus:border-brand-500"
        />
      </div>

      {status === "error" ? (
        <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {f.required}
        </div>
      ) : null}
      {status === "success" ? (
        <div className="rounded-lg border border-brand-300 bg-brand-50 px-4 py-3 text-sm text-brand-800">
          {f.success}
        </div>
      ) : null}

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
      >
        {f.submit}
        <span aria-hidden>→</span>
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
    <label className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
      {children}
      {required ? <span className="ml-1 text-brand-500">*</span> : null}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <input
        type={type}
        name={name}
        className="mt-2 w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition focus:border-brand-500"
      />
    </div>
  );
}
