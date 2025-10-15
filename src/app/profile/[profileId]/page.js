import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';

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
    </main>
    );
}
