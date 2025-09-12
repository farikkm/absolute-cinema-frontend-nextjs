import AuthLayout from "@/shared/ui/auth-layout";
import AuthInput from "@/shared/ui/auth-input";

export default function Page() {
  return (
      <AuthLayout buttonText="Register">
        <AuthInput id="username" placeholder="Username" iconClass="fa-solid fa-user" />
        <AuthInput id="email" placeholder="Email" />
      </AuthLayout>
  );
}
