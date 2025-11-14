import { Link, useNavigate } from "react-router-dom";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "success" | "danger" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  label: string;
  link?: string;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  label,
  link = "#",
  icon,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  fullWidth = false,
  type = "button",
}: ButtonProps) => {
  const navigate = useNavigate();

  // Variant styles with improved visual hierarchy
  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-red-800 via-red-700 to-red-600 hover:from-red-900 hover:via-red-800 hover:to-red-700 text-white",
    secondary: "bg-neutral-800 hover:bg-neutral-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    outline:
      "bg-transparent border-2 border-gradient-to-r border-red-400 to-red-600 text-white hover:bg-gradient-to-r hover:from-red-400 hover:to-red-600 transition-all",
  };

  // Size styles
  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Handle click and navigation
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick();
    } else if (link && link !== "#" && type === "button") {
      navigate(link);
    }
  };

  const buttonClasses = clsx(
    "inline-flex items-center gap-3 rounded-lg font-semibold shadow-md transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full justify-center",
    disabled && "opacity-50 cursor-not-allowed"
  );

  // Se è un submit, usa button HTML nativo
  if (type === "submit" || type === "reset") {
    return (
      <button
        type={type}
        onClick={handleClick}
        disabled={disabled}
        className={buttonClasses}
      >
        {icon && <div className="flex items-center">{icon}</div>}
        {label}
      </button>
    );
  }

  // Altrimenti usa Link
  return (
    <Link
      to={link}
      onClick={handleClick}
      className={buttonClasses}
      aria-disabled={disabled}
    >
      {icon && <div className="flex items-center">{icon}</div>}
      {label}
    </Link>
  );
};
