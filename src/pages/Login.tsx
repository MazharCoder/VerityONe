import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Sign in to VerityONE
          </h2>
          <p className="text-gray-600">
            Access your QA testing dashboard
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                socialButtonsBlockButton: "w-full",
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
                footerActionLink: "text-blue-600 hover:text-blue-700"
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;