"use client";

import { useAppContext } from "../AppContext/AppContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Loader = () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL_TEST!;
  const {
    loading,
    setLoading,
    setAbouts,
    setServices,
    setGalleries,
    setTeams,
    setContact,
  } = useAppContext();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setProgress(0);

      setProgress(30);
      await new Promise((res) => setTimeout(res, 400));

      setProgress(70);
      await new Promise((res) => setTimeout(res, 400));

      try {
        const [abouts, services, galleries, teams, contact] = await Promise.all(
          [
            axios.get(`${API_BASE_URL}/api/v1/abouts`),
            axios.get(`${API_BASE_URL}/api/v1/services`),
            axios.get(`${API_BASE_URL}/api/v1/galleries`),
            axios.get(`${API_BASE_URL}/api/v1/teams`),
            axios.get(`${API_BASE_URL}/api/v1/contacts`),
          ]
        );

        setAbouts(abouts.data);
        setServices(services.data);
        setGalleries(galleries.data);
        setTeams(teams.data);
        setContact(contact.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      setProgress(100);
      await new Promise((res) => setTimeout(res, 400));
      setLoading(false);
    };

    fetchData();
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white/70 backdrop-blur-md z-[9999] transition-all duration-500">
      <div style={{ width: 120, height: 120 }}>
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            textColor: "#000",
            pathColor: "#facc15", // yellow
            trailColor: "#d1d5db", // light grey
            textSize: "20px",
          })}
        />
      </div>
    </div>
  );
};

export default Loader;
