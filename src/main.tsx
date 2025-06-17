import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ClerkProvider } from "@clerk/clerk-react";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider 
      publishableKey={clerkPubKey}
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/dashboard"
      signInUrl="/login"
      signUpUrl="/signup"
      appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: "#2563eb",
          colorBackground: "#ffffff",
          colorInputBackground: "#ffffff",
          colorInputText: "#1f2937",
        },
        elements: {
          formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
          socialButtonsBlockButton: "border border-gray-300 hover:bg-gray-50",
          formFieldInput: "border border-gray-300 focus:border-blue-500 focus:ring-blue-500",
        }
      }}
    >
      <App />
    </ClerkProvider>
  </StrictMode>
);