"use server";

import {
  readEnquiryValues,
  validateEnquiry,
  type EnquiryFieldErrors,
  type EnquiryValues,
} from "@/lib/enquiry";

export type EnquiryState = {
  status: "idle" | "success" | "invalid" | "error";
  fieldErrors?: EnquiryFieldErrors;
  formError?: string;
  values?: EnquiryValues;
  experienceTitle?: string;
};

export async function submitEnquiry(
  _previous: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const values = readEnquiryValues(formData);

  try {
    const { fieldErrors, parsed } = validateEnquiry(values);

    if (!parsed) {
      return {
        status: "invalid",
        fieldErrors,
        values,
      };
    }

    console.info(
      JSON.stringify({
        type: "enquiry_received",
        experienceSlug: parsed.values.experienceSlug || null,
        experienceTitle: parsed.experienceTitle ?? null,
        travellers: parsed.values.travellers,
        travelDate: parsed.values.travelDate,
      }),
    );

    return {
      status: "success",
      experienceTitle: parsed.experienceTitle,
    };
  } catch {
    return {
      status: "error",
      formError:
        "This form could not receive your enquiry just now. Please try again.",
      values,
    };
  }
}
