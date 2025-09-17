import AuthLayout from "@/shared/ui/auth-layout";
import AuthInput from "@/shared/ui/auth-input";

export default function Page() {
  return (
    <AuthLayout buttonText="Register">
      <AuthInput
        id="fullname"
        placeholder="Full Name"
        iconClass="fa-solid fa-user"
      />
      <AuthInput
        type="email"
        id="email"
        placeholder="Email"
        iconClass="fa-solid fa-envelope"
      />
      <AuthInput
        id="password"
        placeholder="Password"
        iconClass="fa-solid fa-eye-slash"
      />
      <AuthInput
        id="repeat-password"
        placeholder="Repeat Password"
        iconClass="fa-solid fa-eye-slash"
      />
      <AuthInput
        id="username"
        placeholder="Username"
        iconClass="fa-solid fa-user"
      />
    </AuthLayout>
  );
}
