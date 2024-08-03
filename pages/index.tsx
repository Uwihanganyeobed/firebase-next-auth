// /pages/index.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import SignInButton from '../components/SignInButton';
import SignOutButton from '../components/SignOutButton';

const Home: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">My App</h1>
      {user ? (
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">Welcome, {user.displayName}</p>
          <SignOutButton />
        </div>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default Home;
