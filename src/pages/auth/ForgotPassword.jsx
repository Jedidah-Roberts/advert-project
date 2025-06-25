import React from "react";
import { Link } from "react-router"; 

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Reset Password
        </h1>

        

        <p className="text-gray-600 text-center mb-6">
          Click <span className="font-semibold">Continue</span> to reset your password.
        </p>

        
        <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
          Continue
        </button>

        
        <p className="mt-6 text-center text-sm text-gray-600">
          <Link to="/login" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;












// import React from 'react'
// import { Link } from 'react-router'

// const ForgotPassword = () => {
//   return (
//     <div className='flex justify-center items-start py-10 px-5 bg-gray-100'>
//       <div>
//         <h1 className='text-2xl font-bold mb-6 text-center'>Reset Password</h1>
//         <p className='py-3'>Click "Continue" to reset your password</p>
//       <button>Continue</button>
//         <p><Link to="/login">Back to Login</Link></p>
        
//     </div>
      
//     </div>
    
//   )
// }

// export default ForgotPassword