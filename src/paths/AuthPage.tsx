import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { CustomInput } from "../components/form-components/CustomInput";
import { LogIn, UserPlus, Zap } from "lucide-react";

type AuthMode = "login" | "signup";

export const AuthPage = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Form data for email, password, username inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  // Store validation errors for each form field
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Update form data when user types in inputs, clear field errors as user corrects them
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate all form fields based on Sign In or Sign Up mode
  // Returns object with validation errors, empty if all fields valid
  const validateForm = (): { [key: string]: string } => {
    const newErrors: { [key: string]: string } = {};

    // Email validation - required and format check
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation - required and minimum length
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (mode === "signup") {
      // Username validation - required and minimum length
      if (!formData.username.trim()) {
        newErrors.username = "Username is required";
      } else if (formData.username.length < 3) {
        newErrors.username = "Username must be at least 3 characters";
      }

      // Confirm password validation - required and must match password
      if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      // Terms acceptance validation
      if (!agreeTerms) {
        newErrors.terms = "You must accept the terms and conditions";
      }
    }
    return newErrors;
  };

  // Toggle between Sign In and Sign Up forms, reset all form state
  const toggleForm = (): void => {
    setMode(mode === "login" ? "signup" : "login");
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    });
    setErrors({});
    setAgreeTerms(false);
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  // Handle form submission with validation
  // Shows success message, simulates API call, then redirects to home
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage(
        mode === "login"
          ? "Welcome back! Redirecting..."
          : "Account created! Redirecting..."
      );
      setTimeout(() => {
        setSuccessMessage("");
        setFormData({
          email: "",
          password: "",
          confirmPassword: "",
          username: "",
        });
        setErrors({});
        setAgreeTerms(false);
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 1500);
    }, 1200);
  };

  return (
    <>
      {/* Hero section */}
      <section className="bg-neutral-900 text-white py-16 px-4 pt-24 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={24} className="text-red-500" />
            <span className="text-red-500 font-semibold uppercase">Account</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {mode === "login" ? "Welcome Back" : "Join the Crew"}
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl">
            {mode === "login"
              ? "Sign in to your Drip-Nest account and continue shopping"
              : "Create your account and start collecting exclusive sneakers"}
          </p>
        </div>
      </section>

      {/* Auth form section */}
      <section className="bg-neutral-950 text-white px-4 py-8 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="w-full max-w-md">
          <div className="bg-neutral-900 rounded-lg p-8 shadow-xl border border-neutral-800">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                {mode === "login" ? "Sign In" : "Create Account"}
              </h2>
              <p className="text-neutral-400">
                {mode === "login"
                  ? "Enter your credentials to continue"
                  : "Join our community today"}
              </p>
            </div>

            {successMessage && (
              <div className="mb-6 flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/50 rounded-lg animate-pulse">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-green-400 flex-shrink-0"
                >
                  <path d="M9 16.2a1.2 1.2 0 0 1-.85-.35l-4.6-4.6a1.2 1.2 0 1 1 1.7-1.7l3.75 3.75 6.1-6.1a1.2 1.2 0 1 1 1.7 1.7l-6.95 6.95A1.2 1.2 0 0 1 9 16.2z" />
                </svg>
                <span className="text-green-300 font-medium text-sm">
                  {successMessage}
                </span>
              </div>
            )}

            {/* Tab toggle */}
            <div className="flex gap-4 mb-8">
              <button
                type="button"
                onClick={toggleForm}
                disabled={isLoading}
                className={`flex-1 py-3 rounded-lg font-semibold uppercase text-sm transition-all ${
                  mode === "login"
                    ? "bg-red-600 text-white"
                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 disabled:opacity-50"
                }`}
              >
                <LogIn size={16} className="inline mr-2" />
                Sign In
              </button>
              <button
                type="button"
                onClick={toggleForm}
                disabled={isLoading}
                className={`flex-1 py-3 rounded-lg font-semibold uppercase text-sm transition-all ${
                  mode === "signup"
                    ? "bg-red-600 text-white"
                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 disabled:opacity-50"
                }`}
              >
                <UserPlus size={16} className="inline mr-2" />
                Sign Up
              </button>
            </div>

            {/* Main authentication form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {mode === "signup" && (
                <CustomInput
                  type="text"
                  name="username"
                  label="Username"
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleChange}
                  error={errors.username}
                  labelClassName="text-neutral-200 text-sm font-semibold"
                  disabled={isLoading}
                  required={true}
                />
              )}

              <CustomInput
                type="email"
                name="email"
                label="Email Address"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                labelClassName="text-neutral-200 text-sm font-semibold"
                disabled={isLoading}
                required={true}
              />

              {/* Password field */}
              <div>
                <label className="block text-sm font-semibold text-neutral-200 mb-2">
                  Password
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                    className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 bg-neutral-800 text-neutral-200 placeholder:text-neutral-400 pr-10 transition-all ${
                      errors.password
                        ? "border-red-500 focus:ring-2 focus:ring-red-500"
                        : "border-neutral-700 focus:border-neutral-600 focus:ring-2 focus:ring-red-600/20"
                    } disabled:opacity-50`}
                  />
                  {/* Eye icon button to toggle password visibility */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-red-400 transition disabled:opacity-50"
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm password field - only shown in Sign Up mode */}
              {mode === "signup" && (
                <div>
                  <label className="block text-sm font-semibold text-neutral-200 mb-2">
                    Confirm Password
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      disabled={isLoading}
                      className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 bg-neutral-800 text-neutral-200 placeholder:text-neutral-400 pr-10 transition-all ${
                        errors.confirmPassword
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-neutral-700 focus:border-neutral-600 focus:ring-2 focus:ring-red-600/20"
                      } disabled:opacity-50`}
                    />
                    {/* Eye icon button to toggle confirm password visibility */}
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      disabled={isLoading}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-red-400 transition disabled:opacity-50"
                    >
                      {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              )}

              {mode === "login" && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-400 text-sm font-medium transition cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {mode === "signup" && (
                <>
                  <div className="flex items-center gap-2 p-3 bg-neutral-800/50 rounded-lg border border-neutral-700">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={agreeTerms}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setAgreeTerms(e.target.checked);
                        setErrors((prev) => ({ ...prev, terms: "" }));
                      }}
                      disabled={isLoading}
                      className="w-4 h-4 rounded bg-neutral-700 border border-neutral-600 cursor-pointer accent-red-600 flex-shrink-0"
                    />
                    <label
                      htmlFor="terms"
                      className="text-xs text-neutral-300 cursor-pointer flex-1"
                    >
                      I agree to the{" "}
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-400"
                      >
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-400"
                      >
                        Privacy Policy
                      </button>
                    </label>
                  </div>
                  {errors.terms && (
                    <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
                  )}
                </>
              )}

              {/* Submit button */}
              <Button
                type="submit"
                label={
                  isLoading
                    ? "⏳ Processing..."
                    : mode === "login"
                    ? "🚀 Sign In"
                    : "🚀 Create Account"
                }
                variant="primary"
                size="md"
                fullWidth
                disabled={isLoading}
              />
            </form>

            {/* Toggle button to switch between Sign In and Sign Up forms */}
            <p className="text-center text-neutral-400 text-sm mt-8">
              {mode === "login"
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                type="button"
                onClick={toggleForm}
                disabled={isLoading}
                className="text-red-500 hover:text-red-400 font-semibold transition cursor-pointer disabled:opacity-50"
              >
                {mode === "login" ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>

          {/* Terms text */}
          <p className="text-center text-xs text-neutral-500 mt-6">
            By {mode === "login" ? "signing in" : "creating an account"}, you
            agree to our{" "}
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </section>
    </>
  );
};
