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
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "w-full shadow-none p-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "w-full h-11 border border-gray-200 hover:bg-gray-50",
                socialButtonsBlockButtonText: "text-gray-600 font-medium",
                dividerLine: "bg-gray-200",
                dividerText: "text-gray-500",
                formFieldLabel: "text-gray-700",
                formFieldInput: "h-11",
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white h-11",
                footerActionLink: "text-blue-600 hover:text-blue-700",
                identityPreviewText: "text-gray-600",
                identityPreviewEditButton: "text-blue-600 hover:text-blue-700"
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;