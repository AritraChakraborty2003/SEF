"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/admin/check`,
          { withCredentials: true }
        );
        setAuthorized(true);
      } catch {
        router.push("/cmslogin");
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, [router]);

  if (loading) return <div className="text-center mt-20">Verifying...</div>;

  return <>{authorized && children}</>;
};

export default ProtectedRoute;
