import star from "../assets/star.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OpeningPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/profiles");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="w-full min-h-[100dvh] flex flex-col md:flex-row items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to right, #1DA1F2, #6C3CF0, #FF2D95)",
      }}
    >
      <img
        src={star}
        alt="star"
        className="w-[200px] h-[200px] md:w-[170px] md:h-[170px] md:-mr-10"
      />

      <h1 className="text-white text-[55px] md:text-[90px] font-semibold tracking-tight text-center md:text-left">
        SrimanNarayana
      </h1>
    </div>
  );
}