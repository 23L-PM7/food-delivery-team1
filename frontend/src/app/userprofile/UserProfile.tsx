"use client";

import { useEffect, useState } from "react";
import { Call, Exit, Mail, Pencil, Timer, Person } from "../../components/icons/ProfileIcons";
import axios from "axios";
import { title } from "process";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import { Datanullandundef } from "../../components/structure";
import { UserPrinting } from "@/app/util";
import { useCurrentUser } from "@/store/useCurrentUser";

type User = {
  _id: string,
  name: string,
  email: string,
  phoneNumber: number,
  role: "admin" | 'user'

}


export function UserProfile({ editingId, onClose }: any) {
  const router = useRouter()
  const { currentUser, loading, handleLoading, login, logout } = useCurrentUser()
  const [edit, setEdit] = useState(false);;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loginModal, setLoginModal] = useState(false);




  function Access() {
    setLoginModal(!loginModal);
  }


  const getProfile = async () => {
    const token = localStorage.getItem('newtoken')
    if (!token) {
      return
    }
    handleLoading()
    try {
      const { data } = await axios.post("http://localhost:9090/users/me", {
        newtoken: token
      })
      setName(data.name);
      setPhoneNumber(data.phoneNumber);
      setEmail(data.email);

      login(data.email, data.name)
      handleLoading()
    } catch (error) {
      console.log(error)
      handleLoading()
    }
  }

  if (!currentUser && !loading) {
    router.push('/')
  }



  useEffect(() => {
    getProfile()
  }, [])

  if (!currentUser) return <p>...loading</p>

  const updateUser = async () => {
    console.log(name, email, phoneNumber, currentUser._id)
    try {
      const data = await UserPrinting(`signup/${currentUser._id}`, {
        name,
        email,
        phoneNumber
      })
      toast.success(`"${name}"  updated.`);
      localStorage.setItem('newtoken', data);
    } catch (error) {
      console.error("Error:", error);
      alert("amjiltgui")
    }
  }

  if (!currentUser) {
    return <p>...loading</p>
  }



  return (
    <div className="container mx-auto  w-[432px] px-[20px] mb-[200px] mt-[76px]">
      <div className="">
        <div className="avatar flex justify-center relative">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <button className="bg-[#FFFFFF] w-[34px] h-[34px] p-2 border rounded-full absolute bottom-0 right-[135px]" onClick={getProfile}>
            <Pencil />
          </button>
        </div>
        <h1 className="flex justify-center font-bold text-[28px] mt-[40px]">
          {currentUser.name}
        </h1>
      </div>

      <div>
        <div className="bg-[#F6F6F6] w-full rounded px-[20px] py-[8px] flex items-center  gap-[8px] mt-[40px]">
          <div className="bg-[#FFFFFF] w-[48px] h-[48px] p-3 rounded-full">
            <Person />
          </div>
          <div className="w-8/12">
            <h1 className="text-xs text-[#888A99]">Таны нэр</h1>
            <input
              placeholder="Нэр..."
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="bg-[#F6F6F6]  rounded p-2" />
          </div>
          <button className="w-2/12 justify-end flex" onClick={() => getProfile()}>
            <Pencil />
          </button>
        </div>


        <div className="bg-[#F6F6F6] w-full rounded px-[20px] py-[8px] flex items-center  gap-[8px] mt-[16px]">
          <div className="bg-[#FFFFFF] w-[48px] h-[48px] p-3 rounded-full">
            <Call />
          </div>
          <div className="w-8/12">
            <h1 className="text-xs text-[#888A99]">Утасны дугаар</h1>
            <input
              placeholder="Утасны дугаар..."
              type="number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              className="bg-[#F6F6F6]  rounded p-2" />
          </div>
          <button className="w-2/12 justify-end flex" onClick={getProfile}>
            <Pencil />
          </button>
        </div>
        <div className="bg-[#F6F6F6] w-full rounded px-[20px] py-[8px] flex items-center  gap-[8px] mt-[16px]">
          <div className="bg-[#FFFFFF] w-[48px] h-[48px] p-3 rounded-full">
            <Mail />
          </div>
          <div className="w-8/12">
            <h1 className="text-xs text-[#888A99]">Имэйл хаяг</h1>
            <input
              placeholder="Имэйл хаяг..."
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="bg-transition bg-[#F6F6F6]  rounded p-2" />
          </div>
          <button className="w-2/12 justify-end flex" onClick={getProfile} >
            <Pencil />
          </button>
        </div>

        <div className=" w-full rounded px-[20px] py-[8px] flex items-center  gap-[8px] mt-[16px]">
          <div className="bg-[#FFFFFF] w-[48px] h-[48px] p-3 rounded-full border">
            <Timer />
          </div>
          <div className="w-8/12">
            <a className="text-base ">Захиалгын түүх</a>
          </div>
        </div>

        <div className=" w-full rounded px-[20px] py-[8px] flex items-center  gap-[8px] mt-[16px]">
          <div className="bg-[#FFFFFF] w-[48px] h-[48px] p-3 rounded-full border">
            <Exit />
          </div>
          <div className="w-8/12">
            <h1
              className="text-base cursor-pointer"
              onClick={() => Access()}
            >
              Гарах
            </h1>
          </div>
        </div>
        <dialog className={loginModal ? `modal modal-open` : `modal`}>
          <div className="modal-box w-[384px] p-0">
            <p className=" font-semibold text-xl p-10 flex flex-col justify-center">
              Та системээс гарахдаа итгэлтэй байна уу?
            </p>
            <div className="modal-action p-0 mt-0 justify-center ">
              <form method="dialog" onClick={Access} className="w-full ">
                <button className="btn bg-green-100 hover:bg-green-500 w-6/12" onClick={logout}>
                  Тийм
                </button>
                <button className="btn w-6/12 bg-green-100 hover:bg-green-500">
                  Үгүй
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <button
        className="btn w-full bg-green-400 hover:bg-green-600 mt-[40px]"
        onClick={() => updateUser()}
      >
        Хадгалах
      </button>
      <Toaster position="top-right" richColors />
      <dialog className="bg-transparent" id="myDialog">
      </dialog>
      {/* <dialog className={`modal ${editingId ? "modal-open" : ""}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Create new category ({editingId})</h3>
          <input placeholder="Name" disabled={loading} className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <input placeholder="Description" disabled={loading} className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} />

          <div className="modal-action">
            <button className="btn" onClick={() => onClose()} disabled={loading}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={getProfile} disabled={loading}>
              {loading && <span className="loading loading-spinner"></span>}
              Save
            </button>
          </div>
        </div>
      </dialog> */}
    </div >

  );
}
