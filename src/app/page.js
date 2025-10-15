import AuthForm from '@/Components/AuthForm.jsx'; 
import { loginAction } from '@/actions/login.js';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <AuthForm title="Login" action={loginAction} buttonText="Log in" />    {/* I will be using server action here in */}
    </main>
  );
}
