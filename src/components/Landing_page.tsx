import star from "../assets/star.png";

export default function OpeningPage() {
  return (
    <div
      className="w-full h-screen flex flex-col md:flex-row items-center justify-center"
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