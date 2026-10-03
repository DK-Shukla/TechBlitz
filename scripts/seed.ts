
import { connect, disconnect } from "mongoose";
import Theme from "../src/models/Theme";
import SiteSettings from "../src/models/SiteSettings";

async function seed() {
  await connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/techblitz");
  
  await Theme.deleteMany({});
  await Theme.create({
    primaryBackground: "#050505",
    secondaryBackground: "#0D0D0D",
    cardBackground: "#151515",
    primaryText: "#FFFFFF",
    secondaryText: "#A3A3A3",
    border: "#292929",
    primaryAccent: "#E50914",
    secondaryAccent: "#FF1E2D",
    buttonBackground: "#E50914",
    buttonText: "#FFFFFF",
    hoverColor: "#FF1E2D",
    errorColor: "#ef4444",
    successColor: "#10b981",
    headingFont: "Geist",
    bodyFont: "Geist",
    active: true
  });

  await SiteSettings.deleteMany({});
  await SiteSettings.create({
    eventName: "TECHBLITZ 2026",
    organizer: "COSMOS — The Science & Tech Community",
    guidance: "Department of Computer Science & Engineering",
    heroTitle: "TECHBLITZ",
    heroSubtitle: "2-WEEK ONLINE TECHNICAL WORKSHOP SERIES",
    heroDates: "05 — 20 OCTOBER 2026",
    registrationDeadline: "5 October 2026 Evening",
    registrationOpen: true,
    whatsappLink: "https://chat.whatsapp.com/example",
    contactEmail: "contact@techblitz.com"
  });

  console.log("Database seeded successfully.");
  await disconnect();
}

seed().catch(console.error);

