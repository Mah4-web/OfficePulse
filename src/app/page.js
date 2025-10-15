"use client";

import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { supabase } from "@/app/lib/supabaseClient";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      try {
        // Read token from localStorage (you can use cookies if preferred)
        const token = localStorage.getItem("jwtToken");
        if (!token) {
          setError("No token found. Please log in.");
          return;
        }

        // Decode JWT to get user email
        const decoded = jwt_decode(token);
        const email = decoded.email;

        // Fetch profile from Supabase
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("email", email)
          .single();

        if (error) throw error;
        setProfile(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchProfile();
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!profile) return <div>Loading profile...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {profile.name || profile.email}!
      </h1>
      <p className="text-gray-700">Email: {profile.email}</p>
      <p className="text-gray-700">Role: {profile.role || "user"}</p>
      {/* Dodaj więcej pól profilu jeśli chcesz */}
    </div>
  );
}
