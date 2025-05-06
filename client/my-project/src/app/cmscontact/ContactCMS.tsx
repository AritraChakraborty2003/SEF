"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type ContactForm = {
  email: string;
  phone: string;
  donation_email: string;
  donation_phone: string;
  volunteer_email: string;
  volunteer_phone: string;
  address: string;
};

const ContactCMS = () => {
  const [formData, setFormData] = useState<ContactForm>({
    email: "",
    phone: "",
    donation_email: "",
    donation_phone: "",
    volunteer_email: "",
    volunteer_phone: "",
    address: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/contacts`)
      .then((res) => {
        const contact = res.data || {};
        setFormData((prev) => ({
          ...prev,
          ...contact,
        }));
      })
      .catch(() => setMessage("Could not load contact info."));
  }, []);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/contacts`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      setMessage("✅ Contact information saved!");
    } catch {
      setMessage("❌ Error saving contact info.");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/contacts`
      );
      setFormData({
        email: "",
        phone: "",
        donation_email: "",
        donation_phone: "",
        volunteer_email: "",
        volunteer_phone: "",
        address: "",
      });
      setMessage("🗑️ Contact information deleted.");
    } catch {
      setMessage("❌ Error deleting contact info.");
    }
  };

  return (
    <div className="p-6 lg:pt-20 lg:pb-20 bg-white shadow rounded-lg w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        Manage Contact Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="email"
          value={formData.email}
          onChange={handleInput}
          placeholder="Official Email"
          className="border p-2 rounded"
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleInput}
          placeholder="Official Phone"
          className="border p-2 rounded"
        />
        <input
          name="donation_email"
          value={formData.donation_email}
          onChange={handleInput}
          placeholder="Donation Email"
          className="border p-2 rounded"
        />
        <input
          name="donation_phone"
          value={formData.donation_phone}
          onChange={handleInput}
          placeholder="Donation Phone"
          className="border p-2 rounded"
        />
        <input
          name="volunteer_email"
          value={formData.volunteer_email}
          onChange={handleInput}
          placeholder="Volunteer Email"
          className="border p-2 rounded"
        />
        <input
          name="volunteer_phone"
          value={formData.volunteer_phone}
          onChange={handleInput}
          placeholder="Volunteer Phone"
          className="border p-2 rounded"
        />
        <textarea
          name="address"
          value={formData.address}
          onChange={handleInput}
          placeholder="Address"
          className="md:col-span-2 border p-2 rounded"
          rows={3}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 mt-6 md:flex-row">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>

        {/* <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          Delete Contact Info
        </button> */}

        <button
          onClick={() => {
            if (
              confirm(
                "⚠️ Are you sure you want to delete ALL contact info? This action is irreversible."
              )
            ) {
              handleDelete();
            }
          }}
          className="bg-red-800 text-white px-6 py-2 rounded hover:bg-red-900"
        >
          Delete All Contact Info
        </button>
      </div>

      {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
    </div>
  );
};

export default ContactCMS;
