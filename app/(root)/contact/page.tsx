import PageContainer from "@/components/common/page-container";
import { LetsConnectCard } from "@/components/contact/lets-connect-card";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1 flex justify-center ">
          <LetsConnectCard />
        </div>
      </div>
    </PageContainer>
  );
}
