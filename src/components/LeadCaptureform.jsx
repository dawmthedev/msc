// src/components/LeadCaptureForm.jsx
import React, { useState } from "react";

export default function LeadCaptureForm({ className = "" }) {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    source: window.location.pathname,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://mscbackend.vercel.app/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        source: window.location.pathname,
      });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className={`rounded-2xl bg-gray-50 p-8 ${className}`}>
      <h3 className="mb-6 text-2xl font-bold">Get in touch!</h3>
      <form onSubmit={handleSubmit} className="grid gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <input
            type="text"
            placeholder="First Name"
            required
            className="rounded-lg border-gray-200 p-3"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="rounded-lg border-gray-200 p-3"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          required
          className="rounded-lg border-gray-200 p-3"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="rounded-lg border-gray-200 p-3"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <textarea
          placeholder="How can we help?"
          rows={4}
          className="rounded-lg border-gray-200 p-3"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-colors hover:bg-primary disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Get Free Consultation"}
        </button>
      </form>
    </div>
  );
}
