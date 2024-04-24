import { SendEmail } from "../utils/send-email";
import { NextRequest, NextResponse } from "next/server"

export conts POST = async (req: NextRequest) => {
    const { Subject, message, mail } = await req.json();
    await SendEmail({
        ToEmail: mail,
        Subject: Subject,
        TextPart: message,
    });
    return NextResponse.json({ message: "Email sent successfully" });
};