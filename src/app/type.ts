export type EmailVerificationProps = {
  email: string;
  onResend?: () => void;
  onBackToLogin?: () => void;
}
