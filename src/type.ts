export interface EmailVerificationProps {
  email: string;
  onResend?: () => void;
  onBackToLogin?: () => void;
}
