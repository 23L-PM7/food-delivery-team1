import { useCurrentUser } from "@/store/useCurrentUser"
import { useState } from "react"

export function EditModalName({ open, name, onClose, setName }: any) {
    const { loading } = useCurrentUser()
    return (
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit ({name})</h3>
                <input type="name"
                    placeholder="User name"
                    className="input input-bordered w-full max-w-xs"
                    value={name}
                    // disabled={loading}
                    onChange={(e) => setName(e.target.value)} />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn mr-4" onClick={() => onClose()}>Close</button>
                        <button className="btn" onClick={() => onClose()}>Submit</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export function EditModalEmail({ open, email, onClose, setEmail }: any) {
    const [loading, setLoading] = useState(false);
    return (
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit ({email})</h3>
                <input type="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs"
                    value={email}
                    // disabled={loading}
                    onChange={(e) => setEmail(e.target.value)} />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn mr-4" onClick={() => onClose()} >Close</button>
                        <button className="btn" onClick={() => onClose()}>Submit</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export function EditModalImage({ open, image, onClose, setImage }: any) {
    const { loading } = useCurrentUser()
    return (
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Pro Image</h3>
                <input type="name"
                    placeholder="User name"
                    className="input input-bordered w-full max-w-xs"
                    value={image}
                    // disabled={loading}
                    onChange={(e) => setImage(e.target.value)} />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn mr-4" onClick={() => onClose()}>Close</button>
                        <button className="btn" onClick={() => onClose()}>Submit</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export function EditModalNumber({ open, phoneNumber, onClose, setPhoneNumber }: any) {
    const { loading } = useCurrentUser()
    return (
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit ({phoneNumber})</h3>
                <input type="number"
                    placeholder="User number"
                    className="input input-bordered w-full max-w-xs"
                    value={phoneNumber}
                    // disabled={loading}
                    onChange={(e) => setPhoneNumber(e.target.value)} />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn mr-4" onClick={() => onClose()}>Cancel</button>
                        <button className="btn" onClick={() => onClose()}>Submit</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}