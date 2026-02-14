"use client";

interface Props {
  recipient: string;
  message: string;
  theme: string;
  alignment: "left" | "center" | "right";
  font: string; // ✅ added
}

export default function CardPreview({
  recipient,
  message,
  theme,
  alignment,
  font
}: Props) {

  const gradients: Record<string,string> = {
    romantic:"bg-gradient-to-br from-pink-500 via-rose-500 to-[#800020]",
    dark:"bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    pastel:"bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200"
  };

  const alignClass = {
    left:"items-start text-left",
    center:"items-center text-center",
    right:"items-end text-right"
  };

  return (
    <div
      className={`w-[400px] h-[500px] rounded-2xl shadow-2xl text-white flex flex-col justify-center px-10 ${gradients[theme]} ${alignClass[alignment]}`}
    >
      <div className="text-5xl mb-6">❤️</div>

      <h2 className="text-3xl font-bold mb-6">
        Dear <span className="italic underline">
          {recipient || "Someone Special"}
        </span>,
      </h2>

      {/* MESSAGE */}
      <p
        style={{ fontFamily: font }} // ✅ font applied ONLY here
        className="text-lg leading-relaxed max-w-[280px] mb-8"
      >
        {message || "Your beautiful message will appear here..."}
      </p>

      <div className="italic text-xl">With Love ✨</div>
    </div>
  );
}
