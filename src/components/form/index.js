"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Form()
{
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    profilePicture: null,
  });
  const [previewUrl, setPreviewUrl] = useState(null);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();
  const handleChange = (e) =>
  {
    const { id, value, files } = e.target;
    if (id === "file-upload" && files.length > 0)
    {
      setFormData({ ...formData, profilePicture: files[0] });
    } else
    {
      setFormData({ ...formData, [id]: value });
    }
  };

  const validate = () =>
  {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim())
    {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email)
    {
      newErrors.email = "Email is required";
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email))
    {
      newErrors.email = "Email is invalid";
    }

    // Password validation
    if (!formData.password)
    {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6)
    {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password validation
    if (formData.password !== formData.rePassword)
    {
      newErrors.rePassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0)
    {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("profilePicture", formData.profilePicture);

      try
      {
        const res = await fetch("/api/user", {
          method: "POST",
          body: data,
        });

        const result = await res.json();
        console.log(result);

        if (res.ok)
        {
          alert("Now you can see your user in the users page");
          setFormData({
            name: "",
            email: "",
            password: "",
            rePassword: "",
            profilePicture: null,
          });
          setPreviewUrl(null);
        }
        else
        {
          alert(result.message || "Something went wrong!");
        }
      } catch (err)
      {
        alert("Error: " + err.message);
      }
    }

    setIsSubmitting(false);
  };
  useEffect(() =>
  {
    // Create object URL when profile picture changes
    if (formData.profilePicture)
    {
      const objectUrl = URL.createObjectURL(formData.profilePicture);
      setPreviewUrl(objectUrl);


      return () => URL.revokeObjectURL(objectUrl);
    } else
    {
      setPreviewUrl(null);
    }
  }, [formData.profilePicture]);

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <h2 className="text-3xl font-bold text-white text-center">
            Create New User
          </h2>
          <p className="text-blue-100 text-center mt-2">Fill out the form below to add a new user</p>
        </div>
        <form className="px-8 py-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className={`mt-1 block w-full px-4 py-3 bg-gray-50 border ${errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder=""
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={`mt-1 block w-full px-4 py-3 bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder=""
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className={`mt-1 block w-full px-4 py-3 bg-gray-50 border ${errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="rePassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="rePassword"
                className={`mt-1 block w-full px-4 py-3 bg-gray-50 border ${errors.rePassword ? "border-red-500" : "border-gray-300"
                  } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="••••••••"
                value={formData.rePassword}
                onChange={handleChange}
              />
              {errors.rePassword && (
                <p className="mt-1 text-sm text-red-600">{errors.rePassword}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Picture
            </label>
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-2 border-gray-200">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Profile preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <svg
                    className="h-12 w-12 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </div>
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg px-4 py-2 text-white font-medium hover:opacity-90 transition-opacity focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
              >
                <span>Upload Image</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  accept="image/*"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium text-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-70"
            >
              {isSubmitting ? "Creating..." : "Create User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
