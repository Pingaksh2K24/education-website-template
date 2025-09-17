interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className = '', onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded transition-colors ${className}`}
      suppressHydrationWarning
    >
      {children}
    </button>
  );
}