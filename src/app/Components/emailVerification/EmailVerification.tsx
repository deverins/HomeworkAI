"use client";

import { EmailVerificationProps } from "@/type";
import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import emailIcon from '../../../../public/email.svg'
import LiveAnnouncer from "../LiveAnnouncer";
import HeadingGroup from "../UI/heading/heading-group";
import Image from "next/image";

const EmailVerification: React.FC<EmailVerificationProps> = ({ email, onResend, onBackToLogin }) => {
  const [announcement, setAnnouncement] = useState("");

  const handleResendClick = () => {
    if (onResend) {
      onResend();
      setAnnouncement("Verification email resent");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="bg-white shadow-2xl p-8 w-full max-w-md gap-5 px-8 pt-14 md:py-10 md:w-[476px] md:px-10 text-center rounded-lg mx-auto">
        <div className="mb-4 flex justify-center">
          <Image
            src={emailIcon}
            alt="email icon"
          />
        </div>
        <HeadingGroup title="Check your Email" subtitle="We sent a verification link to " />
        <p className="text-[#9E9D9D] text-sm font-normal align-middle">{email}</p>
        <button
          className="bg-[#FF502A] text-white w-full py-2 px-4 text-base font-bold rounded-md mt-6 hover:bg-[#f65835] mb-4"
          onClick={() => setAnnouncement("Email check button clicked")}
          aria-label="Check your Email"
        >
          Check your Email
        </button>
        <div className="flex align-middle mt-3 mb-5 justify-center">
          <p className="mt-1 text-[#646261] text-xs font-normal mr-2">
            Didn’t receive a mail resend in
          </p>
          <button
            onClick={handleResendClick}
            className="text-[#FF502A]"
            aria-label="Resend email"
          >
            <strong>2:0min</strong>
          </button>
        </div>
        <div className="flex align-baseline justify-center gap-2">
          <MdArrowBack size={24} />
          <button
            onClick={onBackToLogin}
            className="text-[#393938] flex align-middle text-sm font-medium"
            aria-label="Back to log in"
          >
            Back to log in
          </button>
        </div>
      </div>
      <LiveAnnouncer message={announcement} />
    </div>
  );
};

export default EmailVerification;
