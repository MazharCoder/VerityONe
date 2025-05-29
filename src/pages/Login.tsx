import {  LogIn } from 'lucide-react';
import { SignIn } from '@clerk/clerk-react';

const Login = () => {


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-blue-600 p-2 rounded-md w-12 h-12 flex items-center justify-center mx-auto">
          <LogIn className="text-white" size={24} />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to VerityONE
        </h2>
      </div>
      <div className='m-auto mt-5 w-full sm:max-w-md'>
       <SignIn
        path="/login"
        routing="path"
        signUpUrl="/signup"
        redirectUrl={'/dashboard'}
       />

      </div>
      
            
      
    </div>
  );
};

export default Login;