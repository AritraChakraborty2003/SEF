"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type ServiceForm = {
  icon: File | null;
  topic: string;
  descr: string;
  maindescr: string;
};

const ServiceCMS = () => {
  const [activeTab, setActiveTab] = useState<"add" | "update" | "delete">(
    "add"
  );
  const [formData, setFormData] = useState<ServiceForm>({
    icon: null,
    topic: "",
    descr: "",
    maindescr: "",
  });
  type Service = {
    topic: string;
    descr: string;
    maindescr: string;
    iconUrl?: string; // Adjust fields based on your API response
  };

  const [services, setServices] = useState<Service[]>([]);

  const fetchServices = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/services`)
      .then((res) => setServices(res.data))
      .catch(console.error);
  };

  useEffect(fetchServices, [activeTab]);

  const handleTextInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, icon: e.target.files[0] });
    }
  };

  const buildFormData = () => {
    const data = new FormData();
    data.append("topic", formData.topic);
    data.append("descr", formData.descr);
    data.append("maindescr", formData.maindescr);
    if (formData.icon) {
      data.append("file", formData.icon); // Must match backend field name
    }
    return data;
  };

  const handleSubmit = async () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/services`;
    try {
      if (activeTab === "add") {
        await axios.post(baseUrl, buildFormData(), {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else if (activeTab === "update") {
        await axios.put(`${baseUrl}/${formData.topic}`, buildFormData(), {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else if (activeTab === "delete") {
        await axios.delete(`${baseUrl}/${formData.topic}`);
      }
      fetchServices();
      setFormData({ icon: null, topic: "", descr: "", maindescr: "" });
      alert("Data added successfully");
    } catch (err) {
      console.error("Service operation failed", err);
    }
  };

  return (
    <div className="p-6 lg:pt-20 lg:pb-20 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Manage Services</h2>
      <div className="flex gap-4 mb-6">
        {["add", "update", "delete"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "add" | "update" | "delete")}
            className={
              activeTab === tab
                ? "bg-blue-600 text-white px-4 py-2 rounded"
                : "bg-gray-200 px-4 py-2 rounded"
            }
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <input
        name="topic"
        value={formData.topic}
        onChange={handleTextInput}
        placeholder="Topic"
        className="w-full p-2 border rounded mb-2"
      />

      {activeTab !== "delete" && (
        <>
          <input
            type="file"
            accept="image/*"
            name="icon"
            onChange={handleFileChange}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            name="descr"
            value={formData.descr}
            onChange={handleTextInput}
            placeholder="Short Description"
            className="w-full p-2 border rounded mb-2"
          />
          <textarea
            name="maindescr"
            value={formData.maindescr}
            onChange={handleTextInput}
            placeholder="Main Description"
            className="w-full p-2 border rounded mb-2"
            rows={3}
          />
        </>
      )}

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 rounded mt-2"
      >
        {activeTab === "add"
          ? "Add"
          : activeTab === "update"
          ? "Update"
          : "Delete"}
      </button>

      {activeTab !== "add" && (
        <ul className="mt-6 space-y-2">
          {services.map((s) => (
            <li key={s.topic} className="p-2 border rounded">
              {s.topic} - {s.descr}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCMS;
