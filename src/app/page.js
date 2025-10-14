import AuthForm from '@/Components/AuthForm.jsx'; 

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <AuthForm />    {/* I will be using server action here in */}
    </main>
  );
}
// TODO:
// We will be making server action for login and registration and we'll be importing it from actions so let's say I call it loginAction for then I will use it in action