import { FaPlay } from "react-icons/fa";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  showIcon?: boolean;
  className?: string;
}

export default function PrimaryButton({ label, onClick, showIcon = true, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-3 text-white font-semibold text-base rounded-md px-8 py-3 transition-opacity hover:opacity-90 ${className}`}
      style={{
        background: "linear-gradient(90deg, #1a6ef5 0%, #a855f7 100%)",
      }}
    >
      {showIcon && <FaPlay className="w-4 h-4" />}
      {label}
    </button>
  );
}