"use client";

import Footer from "../Components/Footer";
import Card from "./Card";
import { useRouter } from "next/navigation";
import axios from "axios";
import ProtectedRoute from "../General/ProtectedRoute";

export default function Page() {
  const router = useRouter();
  const cards = [
    { title: "About", link: "/cmsabout" },
    { title: "Services", link: "/cmsservices" },
    { title: "Gallery", link: "/cmsgallery" },
    { title: "Contact", link: "/cmscontact" },
    { title: "Teams", link: "/cmsteams" }, // ➡️ New Teams card added
  ];

  const handleLogout = async () => {
    try {
      await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/admin/logout`,
        { withCredentials: true }
      );
      router.push("/cmslogin");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        <nav className="bg-yellow-400 p-4 flex justify-between items-center">
          <h1 className="text-black text-2xl font-bold">CMS Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Logout
          </button>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 justify-items-center">
          {cards.map((card) => (
            <Card key={card.title} title={card.title} link={card.link} />
          ))}
        </div>
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
