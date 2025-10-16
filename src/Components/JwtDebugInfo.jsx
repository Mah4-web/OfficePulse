'use client';

import { useEffect } from 'react';

export default function JWTDebugInfo({ token, user }) {
    useEffect(() => {
    console.log('🔐 JWT Token:', token);
    console.log('📦 Decoded Token:', user);
    }, [token, user]);

    return null; 
}
