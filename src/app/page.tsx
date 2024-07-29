"use client"
import React from 'react';
import EmailVerification from './Components/emailVerification/EmailVerification';

const Page: React.FC = () => {
  const handleResend = () => {
    // Logic to resend email
  };

  const handleBackToLogin = () => {
    // Logic to navigate back to login
  };

  return (
    <div className="flex flex-col w-full">
      <EmailVerification 
        email="Goody323@gmail.com" 
        onResend={handleResend} 
        onBackToLogin={handleBackToLogin} 
      />
    </div>
  );
};

export default Page;
