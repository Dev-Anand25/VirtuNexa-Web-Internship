export function Button({ children, ...props }) {
    return (
      <button
        className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        {...props}
      >
        {children}
      </button>
    );
  }
  