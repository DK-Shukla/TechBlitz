import dbConnect from './db';
import Domain from "@/models/Domain";
import Speaker from "@/models/Speaker";
import Session from "@/models/Session";
import OutreachPartner from "@/models/OutreachPartner";
import Sponsor from "@/models/Sponsor";
import Gallery from "@/models/Gallery";
import Faq from "@/models/Faq";
import SiteSettings from "@/models/SiteSettings";

// Fallback arrays to avoid completely breaking the UI if DB is empty
import { domains as fallbackDomains } from '@/data/domains';
import { speakers as fallbackSpeakers } from '@/data/speakers';
import { sessions as fallbackSessions } from '@/data/sessions';
import { outreachPartners as fallbackPartners } from '@/data/outreachPartners';
import { sponsors as fallbackSponsors } from '@/data/sponsors';
import { galleryItems as fallbackGallery } from '@/data/gallery';
import { faqs as fallbackFaqs } from '@/data/faq';
import { siteSettings as fallbackSiteSettings } from '@/data/siteSettings';

function cleanMongoData(data: any[]) {
  return data.map(item => {
    const cleaned: any = { ...item };
    if (cleaned._id) {
      cleaned.id = String((cleaned as any)._id);
      delete (cleaned as any)._id;
    }
    delete (cleaned as any).__v;
    return cleaned;
  });
}

export async function getPublicDomains() {
  try {
    const db = await dbConnect();
    if (!db) throw new Error("No DB");
    const data = await Domain.find({ active: true }).sort({ displayOrder: 1 }).lean();
    return data.length > 0 ? cleanMongoData(data) : fallbackDomains;
  } catch (e) {
    return fallbackDomains;
  }
}

export async function getPublicSpeakers() {
  try {
    const db = await dbConnect();
    if (!db) throw new Error("No DB");
    const data = await Speaker.find({ active: true }).lean();
    return data.length > 0 ? cleanMongoData(data) : fallbackSpeakers;
  } catch (e) {
    return fallbackSpeakers;
  }
}

export async function getPublicSessions() {
  try {
    const db = await dbConnect();
    if (!db) throw new Error("No DB");
    const data = await Session.find({ active: true }).sort({ number: 1 }).lean();
    return data.length > 0 ? cleanMongoData(data) : fallbackSessions;
  } catch (e) {
    return fallbackSessions;
  }
}

export async function getPublicPartners() {
  try {
    const db = await dbConnect();
    if (!db) throw new Error("No DB");
    const data = await OutreachPartner.find({ active: true }).sort({ displayOrder: 1 }).lean();
    return data.length > 0 ? cleanMongoData(data) : fallbackPartners;
  } catch (e) {
    return fallbackPartners;
  }
}

export async function getPublicSponsors() {
  try {
    const db = await dbConnect();
    if (!db) throw new Error("No DB");
    const data = await Sponsor.find({ active: true }).sort({ displayOrder: 1 }).lean();
    return data.length > 0 ? cleanMongoData(data) : fallbackSponsors;
  } catch (e) {
    return fallbackSponsors;
  }
}

export async function getPublicGallery() {
  try {
    const db = await dbConnect();
    if (!db) throw new Error("No DB");
    const data = await Gallery.find({ active: true }).sort({ displayOrder: 1 }).lean();
    return data.length > 0 ? cleanMongoData(data) : fallbackGallery;
  } catch (e) {
    return fallbackGallery;
  }
}

export async function getCompanyLogos() {
  try {
    // Attempt to extract distinct company names and their logos from speakers, 
    // or just use the fallback if not supported/available.
    const { companyLogos: fallbackCompanyLogos } = await import('@/data/gallery');
    return fallbackCompanyLogos;
  } catch (e) {
    return [];
  }
}

export async function getPublicFaqs() {
  try {
    const db = await dbConnect();
    if (!db) throw new Error("No DB");
    const data = await Faq.find({ active: true }).sort({ displayOrder: 1 }).lean();
    return data.length > 0 ? cleanMongoData(data) : fallbackFaqs;
  } catch (e) {
    return fallbackFaqs;
  }
}

export async function getPublicSiteSettings() {
  try {
    const db = await dbConnect();
    if (!db) throw new Error("No DB");
    const data = await SiteSettings.findOne().lean();
    if (data) {
      const cleaned: any = { ...data };
      if (cleaned._id) {
        cleaned.id = String((cleaned as any)._id);
        delete (cleaned as any)._id;
      }
      delete (cleaned as any).__v;
      return cleaned;
    }
    return fallbackSiteSettings;
  } catch (e) {
    return fallbackSiteSettings;
  }
}
