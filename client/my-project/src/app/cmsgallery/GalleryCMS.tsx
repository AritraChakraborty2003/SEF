"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type GalleryForm = {
  title: string;
  url: File | null;
  desc: string;
};

type Gallery = {
  title: string;
  desc: string;
  url: string; // stored file name from backend
};

const GalleryCMS = () => {
  const [activeTab, setActiveTab] = useState<"add" | "update" | "delete">(
    "add"
  );

  const [formData, setFormData] = useState<GalleryForm>({
    title: "",
    url: null,
    desc: "",
  });

  const [galleries, setGalleries] = useState<Gallery[]>([]);

  const fetchGalleries = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/galleries`)
      .then((res) => setGalleries(res.data))
      .catch(console.error);
  };

  useEffect(fetchGalleries, [activeTab]);

  const handleTextInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData({ ...formData, url: e.target.files[0] });
    }
  };

  const buildFormData = () => {
    const data = new FormData();
    data.append("title", formData.title);
    data.append("desc", formData.desc);
    if (formData.url) {
      data.append("file", formData.url); // matches multer field name
    }
    return data;
  };

  const handleSubmit = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/galleries`;
    try {
      if (activeTab === "add") {
        await axios.post(url, buildFormData(), {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else if (activeTab === "update") {
        await axios.put(`${url}/${formData.title}`, buildFormData(), {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else if (activeTab === "delete") {
        await axios.delete(`${url}/${formData.title}`);
      }
      fetchGalleries();
      setFormData({ title: "", url: null, desc: "" });
      alert("Data Added Successfully");
    } catch (err) {
      console.error("Gallery operation failed", err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Manage Gallery</h2>
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
        name="title"
        value={formData.title}
        onChange={handleTextInput}
        placeholder="Title"
        className="w-full p-2 border rounded mb-2"
      />
      {activeTab !== "delete" && (
        <>
          <input
            type="file"
            accept="image/*"
            name="url"
            onChange={handleFileInput}
            className="w-full p-2 border rounded mb-2"
          />
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleTextInput}
            placeholder="desciption"
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
        <ul className="mt-6 space-y-4">
          {galleries.map((g) => (
            <li
              key={g.title}
              className="p-4 border rounded flex items-center gap-4"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL_TEST}uploads/${g.url}`}
                alt={g.title}
                className="w-24 h-24 object-cover border rounded"
              />
              <div>
                <h4 className="font-bold">{g.title}</h4>
                <p className="text-gray-600 text-sm">{g.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GalleryCMS;
