import { useState } from "react"

export function EditModalName({ open, name, onClose, setName }: any) {
    return (
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit ({name})</h3>
                <input type="name"
                    placeholder="User name"
                    className="input input-bordered w-full max-w-xs"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn" onClick={() => onClose()}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export function EditModalEmail({ open, email, onClose, setEmail }: any) {
    return (
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit ({email})</h3>
                <input type="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn" onClick={() => onClose()}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export function EditModalImage({ open, image, onClose, setImage }: any) {
    return (
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Pro Image</h3>
                <input type="name"
                    placeholder="User name"
                    className="input input-bordered w-full max-w-xs"
                    value={image}
                    onChange={(e) => setImage(e.target.value)} />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn" onClick={() => onClose()}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export function EditModalNumber({ open, phoneNumber, onClose, setPhoneNumber }: any) {
    return (
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit ({phoneNumber})</h3>
                <input type="number"
                    placeholder="User number"
                    className="input input-bordered w-full max-w-xs"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)} />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn" onClick={() => onClose()}>Cancel</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}