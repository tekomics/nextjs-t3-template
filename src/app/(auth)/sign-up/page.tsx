import { SignUp } from '@clerk/nextjs/app-beta';

export default function SignUpPage() {
  return <SignUp signInUrl="/sign-in" />;
}
