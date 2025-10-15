import AuthForm from "@/Components/AuthForm.jsx";
import { loginAction } from "@/actions/login";
import { registerAction } from "@/actions/register";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-100">
      {/* Login Form */}
      <AuthForm title="Login" action={loginAction} buttonText="Login" />

      {/* Register Form */}
      <AuthForm
        title="Register"
        action={registerAction}
        buttonText="Register"
      />
    </main>
  );
}
