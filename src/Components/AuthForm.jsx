"use client";
import { useState } from "react";

export default function AuthForm({
  title = "Login",
  action,
  buttonText = "Submit",
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const token = await action(formData); // call server action
      localStorage.setItem("jwtToken", token); // save token
      alert(`${title} successful!`);
      // window.location.href = '/profile'; // optional: redirect to profile
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white text-amber-500 p-6 rounded text-shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-semibold">{title}</h2>

      <label className="fields">
        <span className="text-sm text-amber-900">Username</span>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          autoComplete="username"
          className="w-full px-3 py-2 border rounded"
        />
      </label>

      <label className="fields">
        <span className="text-sm text-amber-900">Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          autoComplete="current-password"
          className="w-full px-3 py-2 border rounded"
        />
      </label>

      <button
        type="submit"
        className="w-full py-3 px-6 text-lg font-semibold text-amber-900 rounded-xl
        bg-amber-300
        shadow-[6px_6px_12px_#d6a84f,-6px_-6px_12px_#ffd97a]
        transition-all duration-300 ease-in-out
        hover:shadow-[inset_4px_4px_6px_#d6a84f,inset_-4px_-4px_6px_#ffd97a]"
      >
        {buttonText}
      </button>
    </form>
  );
}
