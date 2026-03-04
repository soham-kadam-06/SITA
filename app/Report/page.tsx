"use client";

import { useState } from "react";
import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const Page = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    priority: "",
    description: "",
    email: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", form);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-10">
        <h1 className="font-playfair text-3xl font-bold text-gray-900 mb-2">
          Submit a Report
        </h1>
        <p className="font-lato text-gray-500 mb-8 text-sm">
          Help us improve by reporting issues or requesting features.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-lato text-sm font-semibold text-gray-700 block mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="Brief description of the issue"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-lato focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-lato text-sm font-semibold text-gray-700 block mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {["Bug Report", "Feature Request", "Performance", "Security", "Other"].map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => handleChange("category", cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-lato border transition ${
                    form.category === cat
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-lato text-sm font-semibold text-gray-700 block mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Describe the issue in detail..."
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-lato focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <div>
            <label className="font-lato text-sm font-semibold text-gray-700 block mb-1">
              Email <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-lato focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-lato font-semibold py-3 rounded-lg transition text-sm"
          >
            Submit Report →
          </button>
        </form>
      </div>
    </main>
  );
};

export default Page;