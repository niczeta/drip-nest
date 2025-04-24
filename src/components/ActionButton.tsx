import { Link, useNavigate } from "react-router-dom";
import { clsx } from "clsx";

type ActionButtonProps = {
  label: string;
  link: string;
  icon?: React.ReactNode;
  bgColor?: string;
  hoverColor?: string;
  onClick?: () => void;
};

export const ActionButton = ({
  label,
  link,
  icon,
  bgColor = "bg-gradient-to-r from-red-800 via-red-700 to-red-600",
  hoverColor = "hover:from-red-900 hover:via-red-800 hover:to-red-700",
  onClick
}: ActionButtonProps) => {

  const navigate = useNavigate();

  // Funzione per gestire il clic e la navigazione programmatica
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else {
      navigate(link);
    }
  };

  return (
    <Link
      to={link}
       onClick={handleClick}
      className={clsx(
        "inline-flex items-center gap-4 px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300",
        bgColor,
        hoverColor
      )}
    >
      {icon && <div>{icon}</div>}
      {label}
    </Link>
  );
};
