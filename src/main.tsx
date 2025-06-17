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
      navigate={(to) => window.location.href = to}
      appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: "#2563eb",
          colorBackground: "#ffffff",
          colorInputBackground: "#ffffff",
          colorInputText: "#1f2937",
          borderRadius: "0.375rem"
        },
        elements: {
          formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors",
          socialButtonsBlockButton: "border border-gray-300 hover:bg-gray-50 transition-colors",
          formFieldInput: "border border-gray-300 focus:border-blue-500 focus:ring-blue-500",
          card: "shadow-lg border border-gray-200",
          headerTitle: "text-xl font-semibold text-gray-900",
          headerSubtitle: "text-gray-600"
        }
      }}
    >
      <App />
    </ClerkProvider>
  </StrictMode>
);