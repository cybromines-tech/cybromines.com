export interface Faq {
  question: string;
  answer: string;
}

export const whatsappFaqs: Faq[] = [
  {
    question: "Is this built on the official WhatsApp Business API?",
    answer:
      "Yes. Cybromines connects through the WhatsApp Business Cloud API, so you get verified business messaging, green-tick eligibility, and full compliance with Meta's policies — no unofficial workarounds.",
  },
  {
    question: "Can multiple agents share one WhatsApp number?",
    answer:
      "That's the point of the shared inbox. Your whole team works from a single business number, with conversations assigned, tagged, and tracked so nothing slips through.",
  },
  {
    question: "Will it connect to our ERP and CRM data?",
    answer:
      "It does. Conversations become leads and deals in the CRM pipeline, and you can pull customer balances, orders, and order status from the Cybromines ERP straight into the chat.",
  },
  {
    question: "Can we send broadcast campaigns?",
    answer:
      "You can run template-based broadcasts to opt-in audiences, schedule them, and measure delivery, read, and reply rates — all within WhatsApp's messaging rules.",
  },
];

export const facebookFaqs: Faq[] = [
  {
    question: "How quickly do leads reach our team?",
    answer:
      "Instantly. When someone submits a Facebook or Instagram lead form, the lead syncs to your CRM in real time and can trigger an automatic WhatsApp follow-up within seconds.",
  },
  {
    question: "Do you support the Conversions API?",
    answer:
      "Yes. We send server-side conversion events through Meta's Conversions API, which restores tracking accuracy lost to browser restrictions and improves ad optimisation.",
  },
  {
    question: "Can we sync audiences from our CRM?",
    answer:
      "You can build segments from CRM data — say, customers who bought a specific product — and sync them to Meta as custom or lookalike audiences for sharper targeting.",
  },
];

export const generalFaqs: Faq[] = [
  {
    question: "Can I start with just one module?",
    answer:
      "Yes. Most clients begin with one or two modules and expand. Because everything shares one platform, adding a module later is a configuration step, not a new integration project.",
  },
  {
    question: "Is Cybromines suitable for businesses outside the GCC?",
    answer:
      "While we're built for GCC compliance out of the box, the platform is multi-currency and multi-company and runs for clients across the region and beyond.",
  },
  {
    question: "How does implementation work?",
    answer:
      "We run a structured rollout: discovery, configuration, data migration, training, and go-live support. Most module deployments are live within weeks, not months.",
  },
];
