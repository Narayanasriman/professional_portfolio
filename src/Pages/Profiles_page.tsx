import smilyface1 from "../assets/smilyface1.jpg";
import smilyface2 from "../assets/smilyfaceblue.png";
import star from "../assets/star.png";
import smilyface3 from "../assets/smilyface2.jpg";
import {useNavigate} from "react-router-dom";

export function ProfilesPage() {
  const profiles = [
    { name: "Portfolio", type: "avatar", image: smilyface1 },
    { name: "HireME", type: "avatar", image: smilyface2 },
    { name: "Experience", type: "avatar", image: smilyface3 },
    { name: "Add Profile", type: "add" },
  ];
const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden bg-[#0f0f0f]">

      {/* Header */}
      <div className="relative flex items-center px-6 md:px-8 py-6">

        {/* Star */}
        <img src={star} alt="star" className="w-10 md:w-14 h-10 md:h-14" />

        {/* Title (UNCHANGED POSITION) */}
        <h1 className="absolute left-1/2 -translate-x-1/2 top-24 md:top-30 text-white font-bold text-2xl md:text-4xl whitespace-nowrap">
          Check Here More?
        </h1>

      </div>

      {/* Profiles */}
      <div className="flex flex-col items-center mt-28 md:mt-32">

        <div className="
        grid grid-cols-2
        md:flex
        gap-8 md:gap-10
        ">

          {profiles.map((profile) => (
            <div
  key={profile.name}
  onClick={() => {
    if (profile.type === "avatar") {
      navigate("/home");
    }
  }}
  className="flex flex-col items-center gap-4 cursor-pointer group"
>

              <div className="
              w-24 h-24
              md:w-36 md:h-36
              rounded-full
              flex items-center justify-center
              transition-transform duration-200
              group-hover:scale-105
              ">

                {profile.type === "avatar" && (
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                )}

                {profile.type === "add" && (
                  <div className="w-full h-full rounded-full flex items-center justify-center bg-zinc-800">
                    <span className="text-white text-5xl md:text-[85px] leading-none flex items-center justify-center">
                      +
                    </span>
                  </div>
                )}

              </div>

              <span className="text-white text-sm md:text-base font-medium text-center">
                {profile.name}
              </span>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}