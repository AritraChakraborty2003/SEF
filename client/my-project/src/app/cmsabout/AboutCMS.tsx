"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type AboutForm = {
  image: File | null;
  subtitle: string;
  descr: string;
  type: string;
};

type About = {
  image: string;
  subtitle: string;
  descr: string;
  type: string;
};

const AboutCMS = () => {
  const [activeTab, setActiveTab] = useState<"add" | "update" | "delete">(
    "add"
  );

  const [formData, setFormData] = useState<AboutForm>({
    image: null,
    subtitle: "",
    descr: "",
    type: "",
  });

  const [abouts, setAbouts] = useState<About[]>([]);

  const fetchAbouts = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/abouts`)
      .then((res) => setAbouts(res.data))
      .catch(console.error);
  };

  useEffect(fetchAbouts, [activeTab]);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const buildFormData = () => {
    const data = new FormData();
    data.append("type", formData.type);
    data.append("subtitle", formData.subtitle);
    data.append("descr", formData.descr);
    if (formData.image) {
      data.append("file", formData.image); // matches multer field
    }
    return data;
  };

  const handleSubmit = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/abouts`;
    try {
      if (activeTab === "add") {
        await axios.post(url, buildFormData(), {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else if (activeTab === "update") {
        await axios.put(`${url}/${formData.type}`, buildFormData(), {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else if (activeTab === "delete") {
        await axios.delete(`${url}/${formData.type}`);
      }
      alert("Process Successful!!!");
      setFormData({ image: null, subtitle: "", descr: "", type: "" });
      fetchAbouts();
    } catch (err) {
      console.error("About CMS error:", err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Manage About Section</h2>

      <div className="flex gap-4 mb-6">
        {["add", "update", "delete"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as typeof activeTab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <input
        name="type"
        value={formData.type}
        onChange={handleInput}
        placeholder="Type (identifier)"
        className="w-full p-2 border rounded mb-2"
      />

      {activeTab !== "delete" && (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            name="subtitle"
            value={formData.subtitle}
            onChange={handleInput}
            placeholder="Subtitle"
            className="w-full p-2 border rounded mb-2"
          />
          <textarea
            name="descr"
            value={formData.descr}
            onChange={handleInput}
            placeholder="Description"
            className="w-full p-2 border rounded mb-2"
            rows={3}
          />
        </>
      )}

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-6 py-2 rounded mt-2"
      >
        {activeTab === "add"
          ? "Add"
          : activeTab === "update"
          ? "Update"
          : "Delete"}
      </button>

      {activeTab !== "add" && (
        <ul className="mt-6 space-y-4">
          {abouts.map((a) => (
            <li
              key={a.type}
              className="p-4 border rounded flex items-center gap-4"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL_TEST}uploads/${a.image}`}
                alt={a.type}
                className="w-24 h-24 object-cover border rounded"
              />
              <div>
                <h4 className="font-bold">{a.type}</h4>
                <p className="text-gray-700 text-sm">{a.subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AboutCMS;
