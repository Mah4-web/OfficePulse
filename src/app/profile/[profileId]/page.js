import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';
import { logoutAction } from '@/actions/logout';

export default async function ProfilePage({ params: { profileId } }) {
    const cookiesList =  await cookies();             
    const token = cookiesList.get('token')?.value;    

    const user = verifyToken(token);

    if (!user || user.userId.toString() !== profileId) {
    return <p>Unauthorized</p>;
    }

    return (
    <main className="p-6">
        <h1>Welcome, {user.username}!</h1>
        <p>This is your profile page with ID: {profileId}</p>
        <form action={logoutAction} className="mt-6">
        <button
            type="submit"
            className="px-6 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
        >
            Logout
        </button>
        </form>
    </main>
    );
}
