'use server';

import dbConnect from '@/lib/db';
import Speaker from '@/models/Speaker';
import Session from '@/models/Session';
import Domain from '@/models/Domain';
import OutreachPartner from '@/models/OutreachPartner';
import Sponsor from '@/models/Sponsor';
import Gallery from '@/models/Gallery';
import Faq from '@/models/Faq';

const models: Record<string, any> = {
  Speaker,
  Session,
  Domain,
  OutreachPartner,
  Sponsor,
  Gallery,
  Faq
};

export async function createDocument(modelName: string, data: any) {
  try {
    const db = await dbConnect();
    if (!db) return { success: false, error: 'Database disconnected' };
    
    const Model = models[modelName];
    if (!Model) return { success: false, error: 'Invalid model' };
    
    await Model.create(data);
    return { success: true };
  } catch (error: any) {
    console.error('Failed to create document:', error);
    return { success: false, error: error.message };
  }
}
