import React, { useState } from "react";

const FeedbackBox = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
    } catch (err) {
      setError("Failed to submit feedback. Please try again later.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-cover bg-center">
      <div className="relative w-full max-w-md p-6 space-y-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_0_30px_10px_rgba(255,255,255,0.2)]">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-white text-center">
              We Value Your Feedback!
            </h2>
            <p className="text-sm text-white text-center">
              Let me know what you think about my portfolio!
            </p>

            {error && (
              <div className="p-3 bg-red-500/20 text-red-200 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form
              name="feedback"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="feedback" />
              <div className="hidden">
                <label>
                  Don't fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm m-1 font-medium text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full m-1 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 text-sm backdrop-blur-sm"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm m-1 font-medium text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block m-1 w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 text-sm backdrop-blur-sm"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block m-1 text-sm font-medium text-white"
                >
                  Feedback
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 m-1 block w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 text-sm backdrop-blur-sm"
                  placeholder="Share your thoughts..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex m-1 mt-4 justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Feedback"
                )}
              </button>
            </form>

            <p className="text-xs text-white text-center">
              Thank you for helping me improve!
            </p>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center space-y-4 py-20 text-white">
            <svg
              className="w-16 h-16 text-green-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="text-2xl font-bold text-white text-center">
              Thank You!
            </h2>
            <p className="text-sm text-white text-center">
              Your feedback has been submitted successfully.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackBox;
