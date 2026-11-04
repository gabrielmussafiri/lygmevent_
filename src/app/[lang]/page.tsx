import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/i18n";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experiences } from "@/components/Experiences";
import { Pricing } from "@/components/Pricing";
import { WhyUs } from "@/components/WhyUs";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { CtaSection } from "@/components/CtaSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Portfolio } from "@/components/Portfolio";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  return (
    <>
      <Navbar lang={lang} t={t.nav} />
      <main id="main">
        <Hero lang={lang} t={t.hero} />
        <Experiences lang={lang} t={t.experiences} portfolioLabel={t.portfolio.comingSoon} />
        <Portfolio lang={lang} t={t.portfolio} />
        <WhyUs t={t.why} />
        <HowItWorks t={t.how} />
        <Services t={t.services} />
        <Pricing lang={lang} t={t.pricing} />
        <CtaSection lang={lang} t={t.cta} />
        <ContactForm lang={lang} t={t.contact} />
      </main>
      <Footer lang={lang} t={t.footer} nav={t.nav} brand={t.brand} />
      <WhatsAppButton lang={lang} label={t.whatsapp.float} />
    </>
  );
}
