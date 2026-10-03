import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Inauguration from '@/components/inauguration/Inauguration';
import WorkshopSeries from '@/components/workshop-series/WorkshopSeries';
import Domains from '@/components/domains/Domains';
import Speakers from '@/components/speakers/Speakers';
import CompanySlider from '@/components/company-slider/CompanySlider';
import OutreachPartners from '@/components/outreach-partners/OutreachPartners';
import Sponsors from '@/components/sponsors/Sponsors';
import Gallery from '@/components/gallery/Gallery';
import Registration from '@/components/registration/Registration';
import FAQ from '@/components/faq/FAQ';
import FinalInfo from '@/components/final-info/FinalInfo';
import Footer from '@/components/footer/Footer';

import {
  getPublicDomains,
  getPublicSpeakers,
  getPublicSessions,
  getPublicPartners,
  getPublicSponsors,
  getPublicGallery,
  getCompanyLogos,
  getPublicFaqs,
} from '@/lib/data';

export default async function Home() {
  const domains = await getPublicDomains();
  const speakers = await getPublicSpeakers();
  const sessions = await getPublicSessions();
  const partners = await getPublicPartners();
  const sponsors = await getPublicSponsors();
  const galleryItems = await getPublicGallery();
  const companyLogos = await getCompanyLogos();
  const faqs = await getPublicFaqs();

  return (
    <main className="min-h-screen bg-primary-black">
      <Navbar />
      <Hero />
      <About />
      <Inauguration />
      <WorkshopSeries sessions={sessions} />
      <Domains domains={domains} />
      <Speakers speakers={speakers} />
      <CompanySlider companyLogos={companyLogos} />
      <OutreachPartners outreachPartners={partners} />
      <Sponsors sponsors={sponsors} />
      <Registration />
      <Gallery galleryItems={galleryItems} />
      <FAQ faqs={faqs} />
      <FinalInfo />
      <Footer />
    </main>
  );
}
