export default function AuthForm({ title = 'Login', action, buttonText = 'Submit' }) {
    return (
    <form
        action={action}
        className="w-full max-w-md bg-white text-amber-500 p-6 rounded text-shadow-lg space-y-4"
    >
        <h2 className="text-2xl font-semibold">{title}</h2>

        <div className="fields space-y-1">
        <label htmlFor="username" className="text-sm text-amber-900">
            Username
        </label>
        <input
            id="username"
            name="username"
            placeholder="Username"
            required
            autoComplete="username"
            className="w-full px-3 py-2 border rounded"
        />
        </div>

        <div className="fields space-y-1">
        <label htmlFor="password" className="text-sm text-amber-900">
            Password
        </label>
        <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
            autoComplete="current-password"
            className="w-full px-3 py-2 border rounded"
        />
        </div>

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
