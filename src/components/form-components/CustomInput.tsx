import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

type CustomInputProps = {
  type: "text" | "email" | "password" | "date" | "number";
  name: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
  labelClassName?: string;
  error?: string;
  min?: number;
  max?: number;
  step?: number;
  maskAsPassword?: boolean;
  disabled?: boolean;
  required?: boolean;
};

export const CustomInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
  label,
  labelClassName,
  error,
  min,
  max,
  step,
  maskAsPassword = false,
  disabled = false,
  required = false,
}: CustomInputProps) => {
  // Handle input change with type-specific validation
  // Prevents invalid inputs based on type (date format, numeric only)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // Validate date input - prevent years longer than 4 digits
    if (type === "date") {
      const yearPart = e.target.value.split("-")[0];
      if (yearPart && yearPart.length > 4) return;
    }

    // Validate number input - allow only numeric characters
    if (type === "number") {
      const numberValue = e.target.value;
      if (!/^\d*$/.test(numberValue)) return;
    }

    // Call parent onChange handler if validation passes
    onChange(e);
  };

  return (
    <div className={clsx("w-full", className)}>
      {/* Headless UI Field component for form control management */}
      <Field>
        {/* Optional label - displayed above input if provided */}
        {label && (
          <Label
            htmlFor={name}
            className={clsx(
              "block mb-2 font-semibold",
              labelClassName || "text-neutral-200"
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </Label>
        )}

        {/* Headless UI Input component wrapper */}
        <Input as={Fragment}>
          {/* Render function provides focus and hover state tracking */}
          {({ focus, hover }) => (
            <input
              id={name}
              name={name}
              type={type}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              disabled={disabled}
              min={min}
              max={max}
              step={step}
              className={clsx(
                // Base styles - always applied
                "w-full border p-3 rounded-lg focus:outline-none focus:ring-2 bg-neutral-800 text-neutral-200 placeholder:text-neutral-400 transition-all",

                // Focus state - red ring when focused
                focus && "focus:ring-red-600/20",

                // Hover state - subtle shadow on hover
                hover && "shadow",

                // Error state - red border and ring if error exists, otherwise red accent
                error
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-neutral-700 focus:ring-red-600/20",

                // Password masking - applies class to hide input characters
                maskAsPassword && "password-mask",

                // Disabled state
                disabled && "opacity-50 cursor-not-allowed",

                // Custom classes from props
                className
              )}
              // Accessibility attributes for error state
              aria-invalid={!!error}
              aria-describedby={error ? `${name}-error` : undefined}
            />
          )}
        </Input>

        {/* Error message - displayed below input if validation error exists */}
        {error && (
          <p id={`${name}-error`} className="text-red-500 text-sm mt-1">
            {error}
          </p>
        )}
      </Field>
    </div>
  );
};
