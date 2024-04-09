"use client";
import Menu from "@/app/mnde/menu";
import { useState } from "react";

export function Nogoonplus() {
  const [hide, setHide] = useState(true);
  const handleExtend = () => {
    if (hide) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between">
        <div className="flex gap-2">
          {" "}
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.18645 2.60351C9.15292 -0.00834179 12.8471 -0.00833988 13.8136 2.60351L14.8427 5.38482C15.1466 6.20598 15.794 6.85341 16.6152 7.15727L19.3965 8.18645C22.0083 9.15292 22.0083 12.8471 19.3965 13.8136L16.6152 14.8427C15.794 15.1466 15.1466 15.794 14.8427 16.6152L13.8136 19.3965C12.8471 22.0083 9.15292 22.0083 8.18644 19.3965L7.15727 16.6152C6.85341 15.794 6.20598 15.1466 5.38482 14.8427L2.60351 13.8136C-0.00834179 12.8471 -0.00833988 9.15292 2.60351 8.18645L5.38482 7.15727C6.20598 6.85341 6.85341 6.20598 7.15727 5.38482L8.18645 2.60351Z"
              fill="#18BA51"
            />
          </svg>
          <h1 className="font-bold">Хямдралтай</h1>
        </div>
        <button className="btn btn-link text-green-700">
          {hide ? "Бүгдийг харах >" : "Нуух >"}
        </button>
      </div>
      <div className={`${hide ? "h-[280px]" : ""}`}>
        <Menu />
      </div>
    </div>
  );
}
