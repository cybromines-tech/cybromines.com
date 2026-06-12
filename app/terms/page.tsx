import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms governing your use of the Cybromines website, platform, and services provided by Cybromines Private Limited.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="1 June 2026"
      intro={`These Terms of Service ("Terms") govern your access to and use of the website, platform, and services provided by ${siteConfig.legalName} ("Cybromines", "we", "us"). By using our services, you agree to these Terms.`}
      sections={[
        {
          heading: "Acceptance of terms",
          body: (
            <p>
              By accessing or using our website or platform, you confirm that you accept these Terms and agree
              to comply with them. If you are using the services on behalf of an organisation, you represent
              that you have authority to bind that organisation.
            </p>
          ),
        },
        {
          heading: "Use of the services",
          body: (
            <>
              <p>You agree to use the services lawfully and not to:</p>
              <ul>
                <li>Use the services in any way that breaches applicable laws or regulations;</li>
                <li>Attempt to gain unauthorised access to any part of the platform or its systems;</li>
                <li>Interfere with or disrupt the integrity or performance of the services;</li>
                <li>Reverse engineer, copy, or resell the services except as expressly permitted.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Accounts and security",
          body: (
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all
              activity under your account. Notify us immediately of any unauthorised use or security breach.
            </p>
          ),
        },
        {
          heading: "Subscriptions and fees",
          body: (
            <p>
              Access to the Cybromines platform is provided under a separate commercial agreement or order form,
              which sets out applicable fees, terms, and service levels. Those commercial terms prevail over
              these Terms in the event of any conflict relating to paid services.
            </p>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              All intellectual property rights in the website, platform, and services — including software,
              design, and content — remain the property of Cybromines or its licensors. These Terms do not grant
              you any rights other than the limited right to use the services as permitted.
            </p>
          ),
        },
        {
          heading: "Customer data",
          body: (
            <p>
              You retain all rights to the data you submit to the platform. You grant us a limited licence to
              process that data solely to provide and improve the services, as described in our{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>
          ),
        },
        {
          heading: "Third-party services",
          body: (
            <p>
              The services may integrate with third-party platforms such as WhatsApp and Meta. Your use of those
              platforms is subject to their own terms, and we are not responsible for their availability or
              conduct.
            </p>
          ),
        },
        {
          heading: "Disclaimers and limitation of liability",
          body: (
            <p>
              The website is provided on an &quot;as is&quot; basis without warranties of any kind. To the
              maximum extent permitted by law, Cybromines shall not be liable for any indirect, incidental, or
              consequential damages arising from your use of the website. Liability relating to paid services is
              governed by the applicable commercial agreement.
            </p>
          ),
        },
        {
          heading: "Changes to these terms",
          body: (
            <p>
              We may update these Terms from time to time. Material changes will be posted on this page with an
              updated date. Continued use of the services after changes take effect constitutes acceptance.
            </p>
          ),
        },
        {
          heading: "Governing law",
          body: (
            <p>
              These Terms are governed by the laws of the United Arab Emirates, and the courts of Dubai shall
              have exclusive jurisdiction over any dispute, subject to any mandatory consumer protections.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about these Terms can be sent to{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
