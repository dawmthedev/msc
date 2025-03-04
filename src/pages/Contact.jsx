import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/api/contact"
      : "https://mscbackend.vercel.app/api/contact";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="isolate  bg-white px-6 py-24 sm:py-32 lg:px-8 ">
      <Toaster position="top-center" />
      <div className="mx-auto max-w-2xl text-center ">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Let's Talk
        </h1>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          If you have any questions or need a quote, don’t hesitate to reach
          out. Our dedicated Account Executives are here to assist you with
          anything you need.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 
              shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 
              shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 
              shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 
              shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center 
          text-sm font-semibold text-white shadow-sm hover:bg-primary 
          focus-visible:outline focus-visible:outline-2 
          focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="text-left pt-20">
        <p className="font-semibold">Metaswap Capital, Inc.</p>
        <p className="font-normal text-gray-800">
          333 S Hope St, 21st Floor, Los Angeles, CA 90071
        </p>
        <p className="font-normal text-gray-800">
          Phone:{" "}
          <a
            href="tel:909-994-5730"
            className="hover:text-primary text-blue-600"
          >
            909-994-5730
          </a>
        </p>
        <p className="font-normal text-gray-800">
          Fax:{" "}
          <a
            href="tel:909-994-5730"
            className="hover:text-primary text-blue-600"
          >
            909-545-1560
          </a>
        </p>
      </div>

      <div className="bg-gray-800 rounded-2xl p-6 text-white mt-10">
        <a
          href="tel:909-994-5730"
          className="font-semibold block hover:text-primary"
        >
          909-994-5730
        </a>
        <a
          href="mailto:info@metaswapcap.com"
          className="font-semibold block hover:text-primary"
        >
          info@metaswapcap.com
        </a>

        <div className="pt-5">
          <p className="font-semibold">Metaswap Capital, Inc.</p>
          <p className="font-semibold">333 S Hope St, 21st Floor</p>
          <p className="font-semibold">Los Angeles, CA 90071</p>
        </div>
      </div>
    </div>
  );
}
