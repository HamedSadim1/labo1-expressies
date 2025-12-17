import React from "react";
import { Theme } from "../types";

/**
 * ButtonProps Interface - Props voor de Button component
 *
 * Definieert alle mogelijke properties die aan de Button component
 * kunnen worden doorgegeven voor volledige customization.
 */
interface ButtonProps {
  /** De inhoud van de button (tekst, iconen, etc.) */
  children: React.ReactNode;

  /** Click handler functie - optioneel voor read-only buttons */
  onClick?: () => void;

  /** Button variant - bepaalt de kleur en styling */
  variant?: "primary" | "secondary";

  /** Extra CSS classes voor custom styling */
  className?: string;

  /** Theme object voor consistente styling */
  theme: Theme;

  /** Of de button disabled is - voorkomt kliks en toont disabled state */
  disabled?: boolean;

  /** Tooltip tekst die verschijnt bij hover */
  title?: string;
}

/**
 * Button Component - Herbruikbare, theme-aware button component
 *
 * Een volledig customizable button component die consistent styling
 * biedt in zowel lichte als donkere modus. Gebruikt het theme systeem
 * voor automatische kleur aanpassingen.
 *
 * Features:
 * - Theme-aware styling (licht/donker modus)
 * - Twee varianten: primary (call-to-action) en secondary
 * - Disabled state ondersteuning
 * - Tooltip ondersteuning
 * - Smooth transitions
 * - Accessible (proper button element)
 *
 * Styling Hiërarchie:
 * - Base: padding, border-radius, transitions
 * - Variant: kleuren gebaseerd op primary/secondary
 * - State: disabled styling
 * - Custom: extra classes via className prop
 *
 * @param {ButtonProps} props - Button component properties
 * @returns {JSX.Element} De gerenderde button
 *
 * @example
 * ```tsx
 * // Primaire button
 * <Button onClick={handleClick} theme={theme}>
 *   Opslaan
 * </Button>
 *
 * // Secundaire disabled button met tooltip
 * <Button
 *   variant="secondary"
 *   disabled={true}
 *   title="Niet beschikbaar"
 *   theme={theme}
 * >
 *   Laden...
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary", // Default naar primary variant
  className = "", // Default naar lege string
  theme,
  disabled = false, // Default naar false
  title,
}) => {
  // Base styling - altijd toegepast
  const baseClasses =
    "px-4 py-2 rounded-lg border transition-colors duration-200 font-medium";

  // Variant-specifieke styling gebaseerd op theme
  const variantClasses =
    variant === "primary" ? theme.buttonPrimary : theme.buttonSecondary;

  // Disabled state styling
  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed" // Visueel disabled + geen cursor
    : "cursor-pointer"; // Normale cursor voor enabled state

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};
