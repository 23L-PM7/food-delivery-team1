import { useState } from "react"

export function EditModalName({ open, name, onClose }: any) {
    return (
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Name</h3>
                <input type="name"
                    placeholder="User name"
                    className="input input-bordered w-full max-w-xs"
                    value={name} />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn" onClick={() => onClose()}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export function EditModalEmail({ open, email, onClose }: any) {
    return (
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Email</h3>
                <input type="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs"
                    value={email} />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn" onClick={() => onClose()}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export function EditModalImage({ open, image, onClose }: any) {
    return (
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Pro Image</h3>
                <input type="name"
                    placeholder="User name"
                    className="input input-bordered w-full max-w-xs"
                    value={image} />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn" onClick={() => onClose()}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export function EditModalNumber({ open, phoneNumber, onClose }: any) {
    return (
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Number</h3>
                <input type="number"
                    placeholder="User number"
                    className="input input-bordered w-full max-w-xs"
                    value={phoneNumber} />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn" onClick={() => onClose()}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}