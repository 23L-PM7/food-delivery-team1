"use client";

import Header from "@/components/Header";
import { AdminCategory } from "@/components/adminComp/adminCategory";
import { Footer } from "../../components/footer/Footer";
import { useState } from "react";

export default function Buynaa() {
  // const [uploading, setUploading] = useState(false);
  // const [image, setImage] = useState("");

  // async function handleUpload(e: any) {
  //   setUploading(true);

  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("file", file, file.name);

  //   const res = await fetch("http://localhost:9090/upload", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   if (res.ok) {
  //     const { url } = await res.json();
  //     setImage(url);
  //     setUploading(false);
  //   }
  // }
  return (
    <div>
      <Header />
      {/* <div>
        <input
          type="file"
          name="file"
          disabled={uploading}
          onChange={handleUpload}
        />

        {image && <img src={image} />}
      </div> */}
      <AdminCategory />

      <Footer />
    </div>
  );
}
