import { SignIn } from "@clerk/clerk-react";
import { LogIn } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-3 rounded-xl shadow-lg">
            <LogIn className="text-white" size={32} />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Welcome back
          </h2>
          <p className="text-gray-600">
            Sign in to continue to VerityONE
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-xl sm:px-10 border border-gray-100">
          <SignIn 
            routing="path" 
            path="/login"
            redirectUrl="/dashboard"
            signUpUrl="/signup"
            fallbackRedirectUrl="/dashboard"
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "w-full shadow-none p-0 bg-transparent",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "w-full h-11 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium rounded-md transition-colors",
                socialButtonsBlockButtonText: "text-gray-600 font-medium",
                socialButtonsBlockButtonArrow: "text-gray-400",
                dividerLine: "bg-gray-200",
                dividerText: "text-gray-500 text-sm",
                formFieldLabel: "text-gray-700 font-medium text-sm",
                formFieldInput: "h-11 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md px-3 text-gray-900",
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white h-11 font-medium rounded-md transition-colors",
                footerActionLink: "text-blue-600 hover:text-blue-700 font-medium",
                identityPreviewText: "text-gray-600",
                identityPreviewEditButton: "text-blue-600 hover:text-blue-700",
                formFieldInputShowPasswordButton: "text-gray-500 hover:text-gray-700",
                otpCodeFieldInput: "border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md",
                formResendCodeLink: "text-blue-600 hover:text-blue-700",
                alertText: "text-red-600 text-sm bg-red-50 border border-red-200 rounded-md p-3",
                formFieldErrorText: "text-red-600 text-sm mt-1",
                identityPreview: "border border-gray-200 rounded-lg p-3",
                formFieldSuccessText: "text-green-600 text-sm mt-1",
                formFieldAction: "text-blue-600 hover:text-blue-700 text-sm",
                formFieldHintText: "text-gray-500 text-sm",
                formHeaderTitle: "text-xl font-semibold text-gray-900",
                formHeaderSubtitle: "text-gray-600 text-sm",
                main: "w-full",
                formContainer: "w-full",
                form: "w-full space-y-4",
                formField: "w-full",
                formFieldRow: "w-full",
                footer: "mt-6",
                footerAction: "text-center",
                footerActionText: "text-gray-600 text-sm",
                loadingSpinner: "text-blue-600"
              },
              layout: {
                socialButtonsPlacement: "top",
                socialButtonsVariant: "blockButton",
                termsPageUrl: undefined,
                privacyPageUrl: undefined,
                helpPageUrl: undefined,
                showOptionalFields: true
              },
              variables: {
                colorPrimary: "#2563eb",
                colorBackground: "#ffffff",
                colorInputBackground: "#ffffff",
                colorInputText: "#1f2937",
                borderRadius: "0.375rem"
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;