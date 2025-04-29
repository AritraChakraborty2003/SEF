/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Footer from "../Components/Footer";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [sections, setSections] = useState<{ _id: string; section: string }[]>(
    []
  );
  const [formData, setFormData] = useState<{
    section: string;
    filename: string;
    file: File | string;
    title: string;
    descr: string;
    mainTitle: string;
  }>({
    section: "",
    file: "",
    filename: "",
    title: "",
    descr: "",
    mainTitle: "",
  });

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setFormData((prev) => ({
      ...prev,
      file: file,
      filename: file.name, // or use file.path if needed
    }));
  };

  const handleClick = (
    option: string,
    data: {
      section: string;
      filename: string;
      file: File | string;
      title: string;
      descr: string;
      mainTitle: string;
    }
  ) => {
    if (option === "add") {
      async function addData() {
        try {
          const newFormData = new FormData();

          newFormData.append("section", data.section);
          newFormData.append("title", data.title);
          newFormData.append("descr", data.descr);
          newFormData.append("mainTitle", data.mainTitle);
          newFormData.append("file", data.file);

          const res = await axios.post(
            process.env.NEXT_PUBLIC_API_URL_TEST + "api/v1/about",
            newFormData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );

          if (res.status === 201) {
            alert("About Data Added");
          } else {
            alert("Something went wrong");
          }
        } catch (err) {
          alert("Something went wron");
        }
      }

      addData();
    } else if (option === "update") {
      async function UpdateData() {
        try {
          const newFormData = new FormData();

          newFormData.append("title", data.title);
          newFormData.append("descr", data.descr);
          newFormData.append("mainTitle", data.mainTitle);
          newFormData.append("file", data.file);

          console.log(data.file);

          const res = await axios.patch(
            process.env.NEXT_PUBLIC_API_URL_TEST +
              `api/v1/about/section/${data.section}`,
            newFormData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );

          if (res.status === 200) {
            alert("About Data Deleted");
          } else {
            alert("Something went wrong");
          }
        } catch (err) {
          alert("Something went wrong");
        }
      }

      UpdateData();
    } else {
      async function DeleteData() {
        try {
          const res = await axios.delete(
            process.env.NEXT_PUBLIC_API_URL_TEST +
              `api/v1/about/section/${data.section}`
          );

          if (res.status === 200) {
            alert("About Data Updated");
          } else {
            alert("Something went wrong");
          }
        } catch (err) {
          alert("Something went wrong");
        }
      }

      DeleteData();
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        {/* Navigation Bar */}
        <nav className="bg-yellow-400 p-4 flex justify-between items-center">
          <h1 className="text-black text-2xl font-bold">CMS Dashboard</h1>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Logout
          </button>
        </nav>
        <nav className="flex justify-center mb-12 space-x-4 mt-6">
          {["add", "update", "delete"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium capitalize ${
                activeTab === tab
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-gray-600 hover:bg-yellow-100"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tab}
            </motion.button>
          ))}
        </nav>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          {activeTab !== "delete" ? (
            <form className="space-y-6">
              {/* Image Upload */}
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors 
                ${
                  isDragActive
                    ? "border-yellow-500 bg-yellow-100"
                    : "border-gray-300"
                }`}
              >
                <input {...getInputProps()} />
                {formData.file ? (
                  <p>{formData.filename}</p>
                ) : (
                  <p>
                    {isDragActive
                      ? "Drop image here"
                      : "Drag image or click to upload"}
                  </p>
                )}
              </div>

              {/* Only one section input, with dynamic placeholder and disabled logic */}
              <input
                type="text"
                placeholder={
                  activeTab === "update"
                    ? "Enter Section Name to Update"
                    : "Section Name"
                }
                value={formData.section}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    section: e.target.value,
                  }))
                }
                className="w-full p-3 border rounded-lg"
                required={activeTab === "add"}
                disabled={activeTab === "update"}
              />

              <input
                type="text"
                placeholder="Add title to service..."
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                className="w-full p-3 border rounded-lg"
              />
              <textarea
                placeholder="Description"
                value={formData.descr}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    descr: e.target.value,
                  }))
                }
                className="w-full p-3 border rounded-lg"
                rows={4}
              />
              <input
                type="text"
                placeholder="Main Descr.."
                value={formData.mainTitle}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    mainTitle: e.target.value,
                  }))
                }
                className="w-full p-3 border rounded-lg"
              />

              <button
                type="button"
                onClick={() => {
                  handleClick(activeTab, formData);
                  console.log("Operation:", activeTab, "Form Data:", formData);
                }}
                className={`w-full py-3 rounded-lg text-white font-medium transition-colors
                  ${
                    activeTab === "delete"
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-yellow-500 hover:bg-yellow-600"
                  }`}
              >
                {activeTab === "add"
                  ? "Create Service"
                  : activeTab === "update"
                  ? "Update Service"
                  : "Delete Service"}
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Enter Section Name to Delete"
                value={formData.section}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, section: e.target.value }))
                }
                className="w-full p-3 border rounded-lg"
                required
              />
              {/* Delete button */}
              <button
                type="button"
                onClick={() => {
                  handleClick(activeTab, formData);
                  console.log("Operation:", activeTab, "Form Data:", formData);
                }}
                className="w-full py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium"
              >
                Delete Section
              </button>
            </div>
          )}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
