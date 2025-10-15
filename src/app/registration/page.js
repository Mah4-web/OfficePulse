import AuthForm from '@/Components/AuthForm';
import registerAction from '@/actions/register';


export default function RegisterPage() {
    return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <AuthForm title="Register" action={registerAction} buttonText="Sign Up" />
    </main>
    );
}
