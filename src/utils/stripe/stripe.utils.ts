import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABE_KEY);
