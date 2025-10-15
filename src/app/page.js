import AuthForm from '@/Components/AuthForm.jsx'; 
import { loginAction } from '@/actions/login.js';

export default function HomePage() {
  return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-amber-500 mb-8">OfficePulse</h1>
      <AuthForm title="Login" action={loginAction} buttonText="Log in" /> 
        <p className="mt-4 text-sm text-gray-600">
        Don&apos;t have an account?{' '}
        <a href="/registration" className="text-amber-500 hover:underline">
          Register here
        </a>
      </p>
    </main>
  );
}
