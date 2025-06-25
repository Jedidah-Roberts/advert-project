import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { apiLogin } from "../../services/auth";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isError = Object.keys(errors).length > 0;
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    setIsSubmitting(true);

    try {
      const res = await apiLogin(payload);
      localStorage.setItem("accessToken", res.data.token);
      const userRole = res.data.user.role;
      toast.success(res.data.message || "Logged In Successfully!");
      if (userRole === "vendor") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.message || "Failed. Try Again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/8902114/pexels-photo-8902114.jpeg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md p-6 rounded-lg ">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Log In</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className=" text-white w-full p-2 border border-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("email", { required: "Email address required" })}
              />
              {errors?.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border text-white border-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("password", { required: "Password is required" })}
              />
              {errors?.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
            </div>

            <div className="text-center">
              <Link to="/forgot-password" className="text-sm text-white hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isError || isSubmitting}
              className={`w-full p-2 rounded text-white transition ${
                isError
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            <p className="text-center text-sm text-white">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-green hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
