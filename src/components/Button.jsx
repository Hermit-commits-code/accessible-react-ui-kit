import theme from "../../config/theme";
import { cn } from "../utils/cn";

function Button(props) {
  const { variant = "primary", children, className, ...rest } = props;
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition disabled:opacity-50 disabled:pointer-events-none";
  const variantStyles = {
    primary: `bg-[${theme.colors.primary}] text-white hover:bg-[${theme.colors.primaryDark}]`,
    secondary: `bg-[${theme.colors.secondary}] text-white hover:bg-[${theme.colors.secondaryDark}]`,
    neutral: `bg-[${theme.colors.neutral}] text-gray-900 hover:bg-[${theme.colors.neutralDark}]`,
  };
  return (
    <button
      type={rest.type || "button"}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
export default Button;
