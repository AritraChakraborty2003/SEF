"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type TeamForm = {
  name: string;
  role: string;
  bio: string;
  phone: string;
  photo: File | null;
};

const TeamCMS = () => {
  const [activeTab, setActiveTab] = useState<"add" | "update" | "delete">(
    "add"
  );

  const [formData, setFormData] = useState<TeamForm>({
    name: "",
    role: "",
    bio: "",
    phone: "",
    photo: null,
  });

  type TeamMember = {
    name: string;
    role: string;
    bio: string;
    phone: string;
    photoUrl: string;
  };

  const [teamList, setTeamList] = useState<TeamMember[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/teams`)
      .then((res) => setTeamList(res.data))
      .catch(console.error);
  }, [activeTab]);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, photo: e.target.files[0] });
    }
  };

  const buildFormData = () => {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("role", formData.role);
    data.append("bio", formData.bio);
    data.append("phone", formData.phone);
    if (formData.photo) {
      data.append("file", formData.photo);
    }
    return data;
  };

  const handleAdd = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/teams`,
        buildFormData(),
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("Team member added!");
      resetForm();
    } catch {
      alert("Error adding team member");
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/teams/${formData.name}`,
        buildFormData(),
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("Team member updated!");
    } catch {
      alert("Error updating team member");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/teams/${formData.name}`
      );
      alert("Team member deleted!");
      resetForm();
    } catch {
      alert("Error deleting team member");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      bio: "",
      phone: "",
      photo: null,
    });
  };

  return (
    <div className="p-6 lg:pt-20 lg:pb-20 bg-white shadow rounded-lg w-full max-w-4xl mx-auto">
      <div className="flex gap-4 mb-6">
        {["add", "update", "delete"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "add" | "update" | "delete")}
            className={`px-4 py-2 rounded ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInput}
          placeholder="Name"
          className="w-full border p-2 rounded"
        />
        {(activeTab === "add" || activeTab === "update") && (
          <>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInput}
              placeholder="Role"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInput}
              placeholder="Phone"
              className="w-full border p-2 rounded"
            />
            <input
              type="file"
              name="photo"
              onChange={handleFileChange}
              accept="image/*"
              className="w-full border p-2 rounded"
            />
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInput}
              placeholder="Bio"
              className="w-full border p-2 rounded"
              rows={4}
            />
          </>
        )}
        <button
          onClick={
            activeTab === "add"
              ? handleAdd
              : activeTab === "update"
              ? handleUpdate
              : handleDelete
          }
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          {activeTab === "add"
            ? "Add Member"
            : activeTab === "update"
            ? "Update Member"
            : "Delete Member"}
        </button>
      </div>

      {activeTab !== "add" && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">All Team Members</h3>
          <ul className="space-y-2">
            {teamList.map((t) => (
              <li key={t.name} className="border p-2 rounded">
                <strong>{t.name}</strong> - {t.role}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TeamCMS;
