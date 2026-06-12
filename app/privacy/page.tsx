import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Cybromines Private Limited collects, uses, stores, and protects personal data across our website, platform, and integrations.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="1 June 2026"
      intro={`This Privacy Policy explains how ${siteConfig.legalName} ("Cybromines", "we", "us") collects, uses, and protects your information when you use our website, platform, and services. We are committed to handling your data responsibly and in line with applicable data protection laws.`}
      sections={[
        {
          heading: "Information we collect",
          body: (
            <>
              <p>We collect information you provide and information generated through your use of our services, including:</p>
              <ul>
                <li><strong>Contact details</strong> — name, company, email, and phone number you submit through forms or enquiries.</li>
                <li><strong>Account and usage data</strong> — information created when you use the Cybromines platform, such as logins and activity logs.</li>
                <li><strong>Technical data</strong> — IP address, device, and browser information collected automatically through cookies and analytics.</li>
                <li><strong>Communications</strong> — records of messages you exchange with us, including via email and WhatsApp.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "How we use your information",
          body: (
            <>
              <p>We use personal data to:</p>
              <ul>
                <li>Provide, operate, and improve our website and platform;</li>
                <li>Respond to enquiries and deliver the services you request;</li>
                <li>Send service updates and, where you have opted in, marketing communications;</li>
                <li>Maintain security, prevent fraud, and meet legal and regulatory obligations.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "WhatsApp and third-party integrations",
          body: (
            <p>
              Where you use our WhatsApp and Facebook integrations, data is processed through Meta&apos;s
              official Business APIs in accordance with their terms. We only access the data necessary to
              deliver the integration and never sell your data or your customers&apos; data to third parties.
            </p>
          ),
        },
        {
          heading: "Data sharing and processors",
          body: (
            <p>
              We share data only with trusted service providers who process it on our behalf (such as hosting,
              analytics, and communication providers), under contractual obligations to protect it. We may also
              disclose data where required by law.
            </p>
          ),
        },
        {
          heading: "Data retention",
          body: (
            <p>
              We keep personal data only for as long as necessary to fulfil the purposes described in this
              policy, to comply with legal obligations, and to resolve disputes. When data is no longer needed,
              we securely delete or anonymise it.
            </p>
          ),
        },
        {
          heading: "Data security",
          body: (
            <p>
              We apply appropriate technical and organisational measures — including encryption in transit,
              access controls, and tenant isolation — to protect personal data against unauthorised access,
              loss, or misuse. Platform data is logically isolated per customer.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <p>
              Subject to applicable law, you may request access to, correction of, or deletion of your personal
              data, and you may object to or restrict certain processing. To exercise any of these rights,
              contact us using the details below.
            </p>
          ),
        },
        {
          heading: "Cookies",
          body: (
            <p>
              Our website uses essential cookies to function and, where enabled, analytics cookies to understand
              usage. You can control cookies through your browser settings. Analytics only loads when configured.
            </p>
          ),
        },
        {
          heading: "Contact us",
          body: (
            <p>
              For any privacy questions or requests, email{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or write to{" "}
              {siteConfig.legalName}, {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
              {siteConfig.address.city}, {siteConfig.address.country}.
            </p>
          ),
        },
      ]}
    />
  );
}
