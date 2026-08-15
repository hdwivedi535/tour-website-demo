"use client";

import { useActionState, type ReactNode } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";
import type { EnquiryValues } from "@/lib/enquiry";

type EnquiryFormProps = {
  experienceSlug?: string;
  experienceTitle?: string;
};

const fieldClassName =
  "mt-2 w-full border border-border bg-paper px-4 py-3.5 text-base text-charcoal outline-none transition-colors focus:border-charcoal";

export function EnquiryForm({
  experienceSlug,
  experienceTitle,
}: EnquiryFormProps) {
  const [state, formAction, pending] = useActionState(
    submitEnquiry,
    { status: "idle" } satisfies EnquiryState,
  );

  if (state.status === "success") {
    return (
      <Confirmation
        experienceTitle={state.experienceTitle ?? experienceTitle}
      />
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {experienceSlug ? (
        <input type="hidden" name="experienceSlug" value={experienceSlug} />
      ) : null}

      {state.status === "error" && state.formError ? (
        <p
          role="alert"
          className="border border-border bg-paper px-4 py-3 t-small text-charcoal"
        >
          {state.formError}
        </p>
      ) : null}

      <Field
        id="fullName"
        label="Full name"
        error={state.fieldErrors?.fullName}
      >
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          required
          defaultValue={value(state, "fullName")}
          aria-invalid={Boolean(state.fieldErrors?.fullName)}
          aria-describedby={
            state.fieldErrors?.fullName ? "fullName-error" : undefined
          }
          className={fieldClassName}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="email" label="Email" error={state.fieldErrors?.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            defaultValue={value(state, "email")}
            aria-invalid={Boolean(state.fieldErrors?.email)}
            aria-describedby={
              state.fieldErrors?.email ? "email-error" : undefined
            }
            className={fieldClassName}
          />
        </Field>
        <Field
          id="phone"
          label="Phone / WhatsApp"
          error={state.fieldErrors?.phone}
        >
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            defaultValue={value(state, "phone")}
            aria-invalid={Boolean(state.fieldErrors?.phone)}
            aria-describedby={
              state.fieldErrors?.phone ? "phone-error" : undefined
            }
            className={fieldClassName}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="travelDate"
          label="Preferred travel date"
          error={state.fieldErrors?.travelDate}
        >
          <input
            id="travelDate"
            name="travelDate"
            type="date"
            required
            min={localToday()}
            defaultValue={value(state, "travelDate")}
            aria-invalid={Boolean(state.fieldErrors?.travelDate)}
            aria-describedby={
              state.fieldErrors?.travelDate ? "travelDate-error" : undefined
            }
            className={fieldClassName}
          />
        </Field>
        <Field
          id="travellers"
          label="Number of travellers"
          error={state.fieldErrors?.travellers}
        >
          <input
            id="travellers"
            name="travellers"
            type="number"
            inputMode="numeric"
            min={1}
            max={20}
            required
            defaultValue={value(state, "travellers")}
            aria-invalid={Boolean(state.fieldErrors?.travellers)}
            aria-describedby={
              state.fieldErrors?.travellers ? "travellers-error" : undefined
            }
            className={fieldClassName}
          />
        </Field>
      </div>

      <Field
        id="message"
        label="Message / requirements"
        optional
        error={state.fieldErrors?.message}
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          defaultValue={value(state, "message")}
          aria-invalid={Boolean(state.fieldErrors?.message)}
          aria-describedby={
            state.fieldErrors?.message ? "message-error" : undefined
          }
          className={`${fieldClassName} min-h-[8rem] resize-y`}
        />
      </Field>

      <div>
        <button
          type="submit"
          disabled={pending}
          className="t-button inline-flex w-full items-center justify-center border border-charcoal bg-charcoal px-7 py-3.5 text-ivory transition-colors duration-300 hover:bg-ink disabled:cursor-wait disabled:opacity-70 sm:w-auto"
        >
          {pending ? "Submitting enquiry…" : "Submit enquiry"}
        </button>
      </div>
    </form>
  );
}

function Confirmation({ experienceTitle }: { experienceTitle?: string }) {
  return (
    <div className="border border-border bg-paper px-6 py-10 sm:px-10 sm:py-12">
      <p className="t-label">Received</p>
      <h2 className="t-h2 mt-4">This form has received your enquiry.</h2>
      <p className="t-body mt-5 text-muted">
        {experienceTitle
          ? `Your request about ${experienceTitle} was received by this form. This is an enquiry, not a booking.`
          : "Your travel enquiry was received by this form. This is a request, not a booking."}
      </p>
    </div>
  );
}

function localToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function Field({
  id,
  label,
  optional = false,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="t-label text-earth">
        {label}
        {optional ? (
          <span className="ml-2 font-normal normal-case tracking-normal text-muted">
            Optional
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="t-small mt-2 text-earth-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function value(state: EnquiryState, key: keyof EnquiryValues) {
  return state.values?.[key] ?? "";
}
