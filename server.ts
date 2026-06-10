import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import { UAParser } from "ua-parser-js";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message, platform } = req.body;
    const userAgent = req.headers["user-agent"];
    const parser = new UAParser(userAgent);
    const device = parser.getDevice();
    const os = parser.getOS();
    const browser = parser.getBrowser();

    const deviceType = device.type || "desktop";
    const osInfo = `${os.name} ${os.version}`;
    const browserInfo = `${browser.name} ${browser.version}`;
    const timestamp = new Date().toLocaleString();

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("Missing SMTP credentials in environment variables.");
      return res.status(500).json({ error: "Server email configuration missing." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      // 1. Send Notification Email to Ankur
      await transporter.sendMail({
        from: `"Portfolio Platform" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || "rikdutta1436@gmail.com",
        subject: `New Message: ${subject || "No Subject"}`,
        html: `
          <div style="font-family: sans-serif; background: #f4f4f4; padding: 20px;">
            <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Portfolio Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject || "N/A"}</p>
              <p><strong>Message:</strong></p>
              <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #3b82f6;">
                ${message}
              </div>
              <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;" />
              <p style="font-size: 12px; color: #666;">
                <strong>Platform:</strong> ${platform || "Web"}<br>
                <strong>Device:</strong> ${deviceType}<br>
                <strong>OS:</strong> ${osInfo}<br>
                <strong>Browser:</strong> ${browserInfo}<br>
                <strong>Timestamp:</strong> ${timestamp}
              </p>
            </div>
          </div>
        `,
      });

      // 2. Send Auto-Reply Confirmation Email to User
      await transporter.sendMail({
        from: `"Ankur Dutta" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Thank You for Contacting Ankur Dutta 🚀",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <div style="background: linear-gradient(135deg, #020205 0%, #1e1b4b 100%); padding: 40px; text-align: center; color: white; border-radius: 10px 10px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">Message Received!</h1>
              <p style="opacity: 0.8; margin-top: 10px;">I'll get back to you shortly.</p>
            </div>
            <div style="padding: 30px; border: 1px solid #efefef; border-top: none; border-radius: 0 0 10px 10px;">
              <p>Hello <strong>${name}</strong>,</p>
              <p>Thank you for reaching out through my portfolio platform.</p>
              <p>I’ve received your message successfully and will get back to you as soon as possible.</p>
              <p>Meanwhile, feel free to explore my projects and GitHub:</p>
              <div style="margin: 25px 0;">
                <a href="https://github.com/AnkurDuttaHQ" style="background: #24292e; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; margin-right: 10px; display: inline-block;">View GitHub</a>
                <a href="https://linkedin.com/in/ankur-dutta01" style="background: #0077b5; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; display: inline-block;">LinkedIn</a>
              </div>
              <p style="border-top: 1px solid #eee; padding-top: 20px; font-style: italic; color: #666;">
                Best Regards,<br>
                <strong>Ankur Dutta</strong><br>
                Full Stack Developer & AI/ML Enthusiast
              </p>
            </div>
          </div>
        `,
      });

      res.status(200).json({ success: true, message: "Emails sent successfully" });
    } catch (error) {
      console.error("Error sending emails:", error);
      res.status(500).json({ error: "Failed to send email. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
