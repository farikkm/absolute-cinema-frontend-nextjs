import styles from "./login.module.css";

import AuthLayout from "@/shared/ui/auth-layout";
import AuthInput from "@/shared/ui/auth-input";
import AuthButton from "@/shared/ui/auth-button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { login } from "@/features/auth/api";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const errorMessageNotify = (error) => toast.error(error);

  const onSubmit = async (user) => {
    setLoading(true);
    const response = await login(user);
    setLoading(false);

    if (response === "Failed to fetch") {
      errorMessageNotify("Внутреннея серверная ошибка! Попробуйте позже!");
      return;
    }

    if (response) {
      localStorage.setItem(
        "absolute-cinema-access-token",
        response.accessToken
      );
      router.push(`/successful-auth/login/${response.user._id}`);
    } else {
      errorMessageNotify("Данные не совпадают!");
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputs}>
          <AuthInput
            type="email"
            id="email"
            placeholder="Email"
            iconClass="fa-solid fa-envelope"
            {...register("email")}
          />
          <AuthInput
            type="password"
            id="password"
            placeholder="Password"
            iconClass="fa-solid fa-eye-slash"
            {...register("password")}
          />
        </div>
        <span className={styles.forgot__password}>Forgot Password?</span>
        <div className={styles.button}>
          <AuthButton>
            {loading ? <span className="spinner"></span> : "LOGIN"}
          </AuthButton>
        </div>
      </form>

      <Toaster />
    </AuthLayout>
  );
}
