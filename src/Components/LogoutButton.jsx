'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton({ logoutAction }) {
    const router = useRouter();

    async function handleLogout() {
    try {
      // Calling the server action 
        await logoutAction();
      // After logout, router will redirect from server action, 
      // but just in case, refresh client router
        router.refresh();
    } catch (error) {
        console.error('Logout failed:', error);
    }
    }

    return (
    <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
    >
        Logout
    </button>
    );
}
// Notes: These are for me to remember: I was using redirect here but then read the next.js documentation and as per documentation=
// redirect can be used in a Client Component through a Server Action. If you need to use an event handler to redirect the user, you can use the useRouter hook.