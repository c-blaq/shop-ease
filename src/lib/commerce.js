import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
  process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY,
  true
);
