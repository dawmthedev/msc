import React from "react";
import { Link } from "react-router-dom";
import LeadCaptureForm from "../components/LeadCaptureform";

export default function Services() {
  const orangeServices = [
    {
      title: "BTC ATM Leasing",
      description:
        "Flexible monthly terms and quick approvals, making Bitcoin ATM access seamless for any size business.",
      icon: "💸",
      link: "/services/leasing",
    },
    {
      title: "Financing & Buyouts",
      description:
        "Custom financing solutions for owners looking to convert their leased machines into permanent assets.",
      icon: "🤝",
      link: "/services/financing",
    },
    {
      title: "Maintenance & Support",
      description:
        "24/7 technical assistance, software updates, and compliance checks to keep your ATMs running smoothly.",
      icon: "🛠️",
      link: "/services/maintenance",
    },
    {
      title: "Crypto Compliance",
      description:
        "KYC/AML consultation and integration for businesses seeking compliant, secure transactions.",
      icon: "🛡️",
      link: "/services/compliance",
    },
  ];

  const blueServices = [
    {
      title: "ATM Upgrades",
      description:
        "Swap older equipment for advanced two-way BTMs, supporting more cryptocurrencies and higher transaction volumes.",
      icon: "⚡",
      link: "/services/upgrades",
    },
    {
      title: "End-of-Lease Options",
      description:
        "Renew, return, or upgrade—tailor your ATM strategy for evolving market demands.",
      icon: "🔄",
      link: "/services/end-of-lease",
    },
    {
      title: "Transaction Fee Analysis",
      description:
        "Optimize fee structures to maximize profits and drive more foot traffic to your location.",
      icon: "📈",
      link: "/services/analysis",
    },
    {
      title: "Portfolio Management",
      description:
        "Expert oversight for multi-ATM deployments, portfolio diversification, and streamlined operations.",
      icon: "🗂️",
      link: "/services/portfolio",
    },
  ];

  const reviews = [
    {
      author: "Carlos M.",
      rating: 5,
      text: "Their leasing process was super straightforward. We’ve already seen a surge in foot traffic!",
      date: "1 week ago",
    },
    {
      author: "Emily R.",
      rating: 5,
      text: "Highly recommend! We love the fast customer support and clear compliance guidance.",
      date: "2 days ago",
    },
    // Add more reviews as needed...
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className=" pt-20 relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-100/20" />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Bitcoin ATM Services & Solutions ⚡️
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Empower your business with our end-to-end BTM leasing, financing,
              and support options. Seamless, secure, and designed for rapid
              growth.
            </p>
          </div>
        </div>
      </div>

      {/* Orange Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {orangeServices.map((service) => (
              <Link key={service.title} to={service.link} className="group">
                <div
                  className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 
                  hover:shadow-lg hover:ring-orange-500 transition-all duration-300"
                >
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-orange-600 group-hover:text-orange-500">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Blue Services Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {blueServices.map((service) => (
              <Link key={service.title} to={service.link} className="group">
                <div
                  className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 
                  hover:shadow-lg hover:ring-blue-500 transition-all duration-300"
                >
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-blue-600 group-hover:text-blue-500">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-12">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div
                  className="absolute left-0 top-0 flex h-10 w-10 items-center 
                  justify-center rounded-lg bg-blue-600"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                Fast & Flexible Setup
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                From initial approval to full deployment, our streamlined
                process gets your ATMs up and running in record time.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div
                  className="absolute left-0 top-0 flex h-10 w-10 items-center 
                  justify-center rounded-lg bg-blue-600"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 
                         2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5
                         a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488
                         V18a2 2 0 012-2h3.064"
                    />
                  </svg>
                </div>
                Nationwide Reach
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                From coast to coast, we cater to both small shop owners and
                large corporate chains seeking the next frontier of revenue.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div
                  className="absolute left-0 top-0 flex h-10 w-10 items-center 
                  justify-center rounded-lg bg-blue-600"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2
                         2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06
                         L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905
                         .905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2
                         M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                </div>
                Transparent Pricing
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                No hidden fees or complicated contracts—just clear,
                straightforward terms that build trust and profitability.
              </dd>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Client Experiences
            </h2>
          </div>
          <div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 
            lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex flex-col bg-white p-6 rounded-2xl shadow-sm"
              >
                <div className="flex items-center gap-x-2 text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 
                        1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 
                        0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 
                        1.118l1.07 3.292c.3.921-.755 1.688-1.54 
                        1.118l-2.8-2.034a1 1 0 00-1.175 
                        0l-2.8 2.034c-.784.57-1.838-.197-1.539
                        -1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 
                        8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 
                        0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-gray-600">{review.text}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="font-semibold text-gray-900">
                    {review.author}
                  </span>
                  <span className="text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lead Capture Form */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Expand Your Crypto Footprint?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get a free quote and see how our BTM services can boost your
              business.
            </p>
          </div>
          <div className="mt-16">
            <LeadCaptureForm />
          </div>
        </div>
      </div>
    </div>
  );
}
