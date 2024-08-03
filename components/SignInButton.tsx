// /components/SignInButton.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const SignInButton: React.FC = () => {
  const { signInWithGoogle, signInWithGitHub, signInWithFacebook } = useAuth();

  return (
    <div className="flex flex-col space-y-4">
      <button
        onClick={signInWithGoogle}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Sign in with Google
      </button>
      <button
        onClick={signInWithGitHub}
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition duration-300"
      >
        Sign in with GitHub
      </button>
      <button
        onClick={signInWithFacebook}
        className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-300"
      >
        Sign in with Facebook
      </button>
    </div>
  );
};

export default SignInButton;
