export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Two-letter monogram for the avatar. */
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We replaced three disconnected systems with Cybromines. Month-end close went from sixteen days to four, and our branch managers finally trust the numbers.",
    name: "Rashid Al Mansoori",
    role: "Chief Financial Officer",
    company: "Gulf Provisions Trading",
    initials: "RA",
  },
  {
    quote:
      "The AI agent now handles our supplier invoice processing end to end. The finance team stopped doing data entry and started doing analysis.",
    name: "Priya Nair",
    role: "Head of Operations",
    company: "Meridian Distribution",
    initials: "PN",
  },
  {
    quote:
      "Our WhatsApp inbox used to be chaos. With Cybromines CRM, every conversation is a tracked lead — and our response time dropped to under five minutes.",
    name: "Omar Haddad",
    role: "Sales Director",
    company: "Levant Retail Group",
    initials: "OH",
  },
];
