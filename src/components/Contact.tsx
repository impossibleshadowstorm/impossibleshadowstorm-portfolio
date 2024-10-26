"use client";
import { post } from "@/lib/api";
import React, { useState } from "react";
import { AxiosError } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultFormState = {
  name: {
    value: "",
  },
  email: {
    value: "",
  },
  number: {
    value: "",
  },
  message: {
    value: "",
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (sending) {
      toast.warn("Please wait until the current request is finished.");
      return;
    }

    setSending(true);

    try {
      await post("/contact", {
        name: formData.name.value,
        email: formData.email.value,
        number: formData.number.value,
        message: formData.message.value,
      });

      toast.success("Message sent successfully!");
      setFormData(defaultFormState);
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      console.error("Submission error:", err?.response?.data?.error);
      toast.error(
        err?.response?.data?.error ||
          "Failed to send message. Please try again later."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <ToastContainer />
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-4 py-3 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-4 py-3 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
              },
            });
          }}
        />
      </div>
      <div className="mt-4">
        <input
          type="string"
          placeholder="Your contact number [+91 XXXXXXXXXXX]"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-4 py-3 rounded-md text-sm text-neutral-700 w-full"
          value={formData.number.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              number: {
                value: e.target.value,
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-4 mt-4 py-3 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
              },
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-black rounded-md font-bold text-white"
        type="submit"
        onClick={handleSubmit}
      >
        {sending ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};
