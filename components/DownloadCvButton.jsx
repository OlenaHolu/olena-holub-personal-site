import { Download } from "lucide-react";

export default function DownloadCvButton({ label = "Download CV" }) {
  return (
    <a
      href="/cv.pdf"
      download
      className="
        group
        inline-flex items-center gap-2
        w-max text-sm sm:text-base
        bg-yellow-400 text-white
        font-semibold px-4 sm:px-6 py-2 sm:py-3
        rounded-full shadow
        transition duration-300 active:scale-95
        hover:bg-yellow-500
        hover:shadow-[0_0_20px_4px_rgba(250,204,21,0.7)]
        hover:animate-bounce
      "
    >
      <Download
        className="
          w-4 h-4 transition-transform duration-300
          group-hover:translate-x-1
        "
      />
      {label}
    </a>
  );
}
