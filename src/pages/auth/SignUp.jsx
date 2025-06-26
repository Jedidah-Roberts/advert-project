import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { apiSignUp } from "../../services/auth";
import { toast } from "react-toastify";
import signup from "../../assets/signupimg.jpg";

const SignUp = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ shouldUnregister: true });

  const [state, setState] = useState("vendor");

  const onSubmit = async (data) => {
    const payload = {
      username: data.username,
      email: data.Email,
      password: data.password,
      country: data.location,
      role: state,
    };

    setIsSubmitting(true);
    try {
      await apiSignUp(payload);
      toast.success("User Registered Successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error?.message || "Error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isError = Object.keys(errors).length > 0;

  return (
    <div
      className="relative z-10 flex items-center justify-center min-h-screen px-4 w-full"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/8902114/pexels-photo-8902114.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Sign Up
        </h2>

        <div className="flex justify-center mb-6 gap-4">
          <button
            type="button"
            className={`py-2 px-6 text-sm font-medium rounded transition ${
              state === "vendor"
                ? " bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setState("vendor")}
          >
            Vendor
          </button>
          <button
            type="button"
            className={`py-2 px-6 text-sm font-medium rounded transition ${
              state === "user"
                ? " bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setState("user")}
          >
            Buyer
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">User Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("Email", { required: "Email is required" })}
            />
            {errors.Email && (
              <p className="text-red-500 text-sm">{errors.Email.message}</p>
            )}
          </div>

          {state === "vendor" ? (
            <div>
              <label className="block mb-1 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+233"
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("phonenumber", {
                  required: "Phone number is required",
                })}
              />
              {errors.phonenumber && (
                <p className="text-red-500 text-sm">
                  {errors.phonenumber.message}
                </p>
              )}
            </div>
          ) : null}

          <div>
            <label className="block mb-1 text-sm font-medium">Country</label>
            <select
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("location")}
            >
              <option value="">-- Select a Country --</option>
              <option value="Ghana">Ghana</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Kenya">Kenya</option>
              <option value="South Africa">South Africa</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="India">India</option>
            </select>
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("confirmPassword", {
                required: "Confirm your password",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Payment section for USERS ONLY */}
          {state === "user" && (
            <div className="border-t pt-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-800">Access Payment</h3>

              <div className="bg-orange-100 border border-orange-200 p-4 rounded text-sm text-gray-800 font-medium">
                Buyer Access Fee:{" "}
                <span className="text-orange-600 font-bold">$5</span>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  disabled
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">Expiry</label>
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="w-full p-2 border rounded-lg bg-gray-100"
                    disabled
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">CVC</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full p-2 border rounded-lg bg-gray-100"
                    disabled
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="agree" className="accent-orange-500" />
                <label htmlFor="agree" className="text-sm text-gray-700">
                  I agree to the{" "}
                  <span className="underline cursor-pointer">
                    terms and conditions
                  </span>
                </label>
              </div>

              <button
                type="button"
                onClick={() => alert("Payment simulated")}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition"
              >
                Simulate Payment
              </button>
            </div>
          )}

          <p className="text-sm">
            By signing up, you agree to our{" "}
            <Link to="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>

          <button
            type="submit"
            disabled={isError || isSubmitting}
            className={`${
              isError
                ? "bg-gray-300 cursor-not-allowed"
                : " bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
            } w-full text-white p-2 rounded transition`}
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
