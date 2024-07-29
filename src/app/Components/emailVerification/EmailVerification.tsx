import { EmailVerificationProps } from '@/app/type';
import React, { useState } from 'react';
import { MdAttachEmail } from 'react-icons/md';
import LiveAnnouncer from '../LiveAnnouncer';

const EmailVerification: React.FC<EmailVerificationProps> = ({ email, onResend, onBackToLogin }) => {
  const [announcement, setAnnouncement] = useState('');

  const handleResendClick = () => {
    if (onResend) {
      onResend();
      setAnnouncement('Verification email resent');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="mb-4">
          <MdAttachEmail className="h-16 w-16 text-orange-500 mx-auto" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Check your Email</h2>
        <p className="mb-4">We sent a verification link to <strong>{email}</strong></p>
        <button
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 mb-4"
          onClick={() => setAnnouncement('Email check button clicked')}
          aria-label="Check your Email"
        >
          Check your Email
        </button>
        <p className="mb-4">
          Didn’t receive an email?
          <button
            onClick={handleResendClick}
            className="text-blue-500 underline"
            aria-label="Resend email"
          >
            Resend
          </button> in 2 minutes
        </p>
        <button
          onClick={onBackToLogin}
          className="text-gray-500 underline"
          aria-label="Back to log in"
        >
          Back to log in
        </button>
      </div>
      <LiveAnnouncer message={announcement} />
    </div>
  );
};

export default EmailVerification;
