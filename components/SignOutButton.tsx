// /components/SignOutButton.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const SignOutButton: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <button
      onClick={signOut}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
