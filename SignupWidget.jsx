"use client";

import React, { useState } from "react";

const SignupWidget = ({ title, content, simulateNetworkRequestTime }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setBusy(true);
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <svg
          className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
        <h3
          data-testid={"signupWidgetTitle"}
          className="text-lg font-semibold text-gray-900 dark:text-white"
        >
          {title}
        </h3>
      </div>

      {isSubscribed ? (
        <p data-testid={"signupWidgetMessage"} className="text-green-600 font-medium">
          {message}
        </p>
      ) : (
        <>
          <p
            data-testid={"signupWidgetContent"}
            className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed"
          >
            {content}
          </p>
          <form onSubmit={handleSubmit} data-testid={"signupWidget"} autoComplete="off">
            <div className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid={"signupWidgetInput"}
                disabled={busy}
                placeholder="Email address"
                className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:opacity-50 disabled:bg-gray-50 dark:disabled:bg-gray-700 dark:bg-gray-900"
              />
              <button
                type="submit"
                data-testid={"signupWidgetButton"}
                disabled={busy}
                className="px-4 py-2 text-sm bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap dark:bg-teal-500 dark:hover:bg-teal-600"
              >
                {busy ? "Joining..." : "Join"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default SignupWidget;