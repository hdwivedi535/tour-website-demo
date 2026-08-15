import { getExperienceBySlug } from "./experiences";

export type EnquiryValues = {
  fullName: string;
  email: string;
  phone: string;
  travelDate: string;
  travellers: string;
  message: string;
  experienceSlug: string;
};

export type EnquiryFieldErrors = Partial<Record<keyof EnquiryValues, string>>;

export type ParsedEnquiry = {
  values: EnquiryValues;
  experienceTitle?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export function readEnquiryValues(formData: FormData): EnquiryValues {
  return {
    fullName: readString(formData, "fullName"),
    email: readString(formData, "email"),
    phone: readString(formData, "phone"),
    travelDate: readString(formData, "travelDate"),
    travellers: readString(formData, "travellers"),
    message: readString(formData, "message"),
    experienceSlug: readString(formData, "experienceSlug"),
  };
}

function utcStamp(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function earliestStamp(now = new Date()) {
  return utcStamp(new Date(now.getTime() - 24 * 60 * 60 * 1000));
}

export function validateEnquiry(values: EnquiryValues): {
  fieldErrors: EnquiryFieldErrors;
  parsed?: ParsedEnquiry;
} {
  const fieldErrors: EnquiryFieldErrors = {};
  const fullName = values.fullName.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const travelDate = values.travelDate.trim();
  const travellersRaw = values.travellers.trim();
  const message = values.message.trim();
  const experienceSlug = values.experienceSlug.trim();

  if (fullName.length < 2) {
    fieldErrors.fullName = "Please enter your full name.";
  } else if (fullName.length > 80) {
    fieldErrors.fullName = "Please enter a shorter name.";
  }

  if (!email) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (!phone) {
    fieldErrors.phone = "Please enter a phone or WhatsApp number.";
  } else if (phoneDigits.length < 8 || phoneDigits.length > 15) {
    fieldErrors.phone = "Please enter a valid phone or WhatsApp number.";
  } else if (!/^\+?[\d\s().-]{8,20}$/.test(phone)) {
    fieldErrors.phone = "Please enter a valid phone or WhatsApp number.";
  }

  if (!travelDate) {
    fieldErrors.travelDate = "Please choose a preferred travel date.";
  } else if (!DATE_PATTERN.test(travelDate) || Number.isNaN(Date.parse(`${travelDate}T00:00:00Z`))) {
    fieldErrors.travelDate = "Please choose a valid date.";
  } else if (travelDate < earliestStamp()) {
    fieldErrors.travelDate = "Please choose today or a future date.";
  }

  const travellers = Number(travellersRaw);
  if (!travellersRaw) {
    fieldErrors.travellers = "Please enter the number of travellers.";
  } else if (!Number.isInteger(travellers) || travellers < 1 || travellers > 20) {
    fieldErrors.travellers = "Please enter between 1 and 20 travellers.";
  }

  if (message.length > 2000) {
    fieldErrors.message = "Please keep your message under 2,000 characters.";
  }

  const cleaned: EnquiryValues = {
    fullName,
    email,
    phone,
    travelDate,
    travellers: travellersRaw,
    message,
    experienceSlug,
  };

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  const experience = experienceSlug
    ? getExperienceBySlug(experienceSlug)
    : undefined;

  return {
    fieldErrors: {},
    parsed: {
      values: cleaned,
      experienceTitle: experience?.title,
    },
  };
}
