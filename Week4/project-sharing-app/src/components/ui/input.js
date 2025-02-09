export function Input({ type = "text", ...props }) {
    return (
      <input
        type={type}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    );
  }
  