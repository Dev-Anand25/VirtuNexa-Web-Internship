export function Card({ children }) {
    return (
      <div className="border rounded-lg shadow-md bg-white p-4">{children}</div>
    );
  }
  
  export function CardContent({ children }) {
    return <div>{children}</div>;
  }
  