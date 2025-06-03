import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const data = await req.json();

    // Configure seu transporte SMTP (exemplo com Gmail)
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // seu e-mail
            pass: process.env.EMAIL_PASS, // sua senha ou app password
        },
    });

    const mailOptions = {
        from: data.email,
        to: "matheuscastroks@gmail.com",
        subject: data.subject || "Novo contato pelo portfólio",
        text: `
            Nome: ${data.name}
            E-mail: ${data.email}
            Prioridade: ${data.priority}
            Mensagem: ${data.message}
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        return NextResponse.json({ success: false, error: "Erro ao enviar e-mail" }, { status: 500 });
    }
} 