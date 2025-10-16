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
        <p>This is your super secret profile page with ID: {profileId}</p>
         {/* ✅ Displayed the JWT */}
        <section className="bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-semibold">JWT Token:</h2>
        <pre className="break-words text-sm bg-white p-2 rounded border">
            {token}
        </pre>
        </section>

      {/* ✅ Displayed decoded payload */}
        <section className="bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-semibold">Decoded Token:</h2>
        <pre className="text-sm bg-white p-2 rounded border">
            {/* JavaScript function that converts a JavaScript object into a readable JSON string, JSON.stringify(value, replacer, space) */}
            {JSON.stringify(user, null, 2)}
        </pre>
        </section>
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
