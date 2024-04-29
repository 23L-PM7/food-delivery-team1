'use client'

import { useEffect } from "react";
import "./globals.css";
import { useCurrentUser } from "@/store/useCurrentUser";
import axios from "axios";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { login } = useCurrentUser()




  const PostProfile = async () => {
    const token = localStorage.getItem('newtoken')
    if (!token) {
      return
    }
    try {
      const { data } = await axios.post("http://localhost:9090/users/me", {
        newtoken: token
      })
      login(data.email, data.name, data.phoneNumber)
    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    PostProfile()
  }, [])

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
