# Cybromines — SEO Keyword & Content Plan (International Launch)

A practical, prioritised plan to rank cybromines.com internationally. The
technical foundation is already in place (canonicals, hreflang, schema, sitemap,
fast Core Web Vitals). This document covers **keyword targeting**, the
**content calendar**, **internal linking**, and **off-page authority** — the
levers that actually move rankings over time.

---

## 1. Strategy in one page

- **Search is won by topical authority.** Each product gets a *commercial pillar
  page* (already built) + a cluster of *supporting blog posts* (informational /
  buyer-intent) that link up to the pillar. Google rewards depth on a topic.
- **Two intents per cluster:**
  - **Commercial** ("ERP software UAE", "AI email agent") → the product pages.
  - **Informational** ("how to choose an ERP", "what is an AI agent") → blog
    posts that capture early-funnel traffic and funnel it to the product.
- **Geo strategy:** English-first, dual-targeted: **GCC** (high commercial intent,
  less competition — win these first) **+ international/global** (bigger volume,
  more competition — earn over time). Arabic (`hreflang ar`) is a phase-2 option
  once English rankings are established.
- **Win order:** (1) GCC + branded + long-tail commercial → fastest wins.
  (2) Informational content for authority + links. (3) Broad international head
  terms → long game, needs backlinks.

---

## 2. Keyword map (cluster → pillar page → target keywords)

> Mix of head + long-tail. Long-tail (4+ words, geo-qualified) ranks fastest.

### ERP — `/solutions/erp/`
- erp software uae / ksa / gcc · cloud erp for trading companies · erp with VAT
  compliance uae · erp with WPS payroll · best erp for distribution / wholesale ·
  multi-company erp · erp vs accounting software

### CRM — `/solutions/crm/` + `/integrations/whatsapp-crm/`
- whatsapp crm · whatsapp business api crm · crm for sales teams · omnichannel
  crm · best crm for small business gcc · crm with whatsapp integration

### POS — `/solutions/pos/`
- cloud pos system · offline pos software · multi-branch pos · retail pos uae ·
  pos with inventory integration · restaurant / retail pos system

### Inventory — `/solutions/inventory/`
- inventory management software · multi-warehouse inventory system · barcode
  inventory software · stock management software uae · inventory valuation software

### Production — `/solutions/production/`
- production management software · manufacturing erp · bom software · work order
  management system · shop floor control software

### Property — `/solutions/property/`
- property management software uae · real estate erp · lease management software ·
  tenant management system · rent collection software

### Queue — `/solutions/queue/`
- queue management system · token management system · appointment queue software ·
  digital queue system · customer flow management

### AI Agents — `/ai-agents/`
- ai agents for business · business process automation ai · ai invoice processing ·
  ai for customer support · autonomous ai agents enterprise

### AI Consulting — `/ai-consulting/`
- ai consulting · ai adoption services · ai transformation consulting · ai
  integration services · how to implement ai in business

### Email Agent (CEA) — `/email-agent/`
- ai email agent · email lead detection · automatic lead capture from email ·
  inbox to crm automation · ai that reads email · email to webhook automation

### Integrations / Services
- facebook lead ads crm sync · meta conversions api setup · custom software
  development company · enterprise mobile app development · technical seo services

---

## 3. Content calendar (supporting blog posts)

> Each post targets ONE primary keyword, answers the query thoroughly (1,000–1,800
> words), and links to its pillar product page with descriptive anchor text.
> 3 posts already published. Suggested cadence: **2 posts/week** for the launch,
> then 1/week.

### Tier 1 — fast wins (commercial-investigation, GCC + long-tail)
1. **Best ERP software for GCC trading companies (2026 buyer's guide)** → ERP
2. **AI email agents: how to capture the leads hiding in your inbox** → Email Agent
3. **WhatsApp CRM vs traditional CRM: which wins for GCC sales teams** → CRM
4. **Queue management systems explained: cut wait times with AI** → Queue
5. **ERP VAT & ZATCA compliance checklist for UAE and KSA** → ERP/Finance
6. **Offline-capable POS: why multi-branch retailers need it** → POS

### Tier 2 — authority builders (informational, broader)
7. **What is an AI agent? A plain-English guide for business owners** → AI Agents
8. **How to choose an ERP system: a 10-point framework** → ERP
9. **Inventory accuracy: 7 ways AI reduces stockouts and dead stock** → Inventory
10. **Property management software buyer's guide for landlords & agencies** → Property
11. **Manufacturing ERP vs standalone production software** → Production
12. **The real cost of leads lost in a shared inbox (and how to fix it)** → Email Agent

### Tier 3 — comparison / "alternatives" / bottom-funnel
13. **Cybromines vs legacy ERP: a side-by-side** → ERP
14. **Best AI consulting partners for mid-size enterprises** → AI Consulting
15. **How to sync Facebook lead ads to your CRM (step-by-step)** → Facebook Ads
16. **WhatsApp Business API: pricing, setup, and CRM integration** → WhatsApp CRM

> Comparison + "buyer's guide" + "how to" formats convert best and attract links.

---

## 4. Internal linking rules

- **Every blog post** links to its pillar product page (exact-ish anchor) + 1–2
  related posts. (The blog already auto-links related posts by tag — keep tagging
  consistent.)
- **Pillar pages** link across to adjacent products (already done via cross-sell).
- **Home + nav + footer** already link to all pillars (done).
- Use **descriptive anchors** ("AI email agent", not "click here").

---

## 5. Off-page authority (the other half of ranking)

This is what gets head terms to page 1 — it can't be done in code:
- **Business directories / citations:** Google Business Profile, Clutch, G2,
  Capterra, GoodFirms, LinkedIn company page, GCC tech directories. Consistent
  NAP (name/address/phone).
- **Product listings:** G2 / Capterra / Software Advice profiles for each product
  (ERP, CRM, POS…) — these rank *and* drive qualified traffic.
- **Digital PR / guest posts:** publish on GCC tech & business outlets; pitch
  data-driven stories ("State of AI adoption in GCC SMEs").
- **Partnerships & integrations pages** (Meta, WhatsApp, payment gateways) — link
  back from partner directories.
- **Backlinks from the blog content** above (skyscraper + outreach).

---

## 6. Measurement

- **Google Search Console** — impressions, clicks, average position by query/page;
  submit `sitemap.xml`; fix coverage issues.
- **GA4** — traffic, conversions (demo bookings, "Try it free" clicks).
- **Track:** keyword positions (Ahrefs/SEMrush/free GSC), indexed pages, backlinks.
- **Cadence:** review monthly; double down on pages gaining impressions.

---

## 7. 30-day action checklist

- [ ] Verify site in **Google Search Console** + **Bing Webmaster** (tokens →
      Vercel env → redeploy → click Verify).
- [ ] Submit `https://cybromines.com/sitemap.xml` in both.
- [ ] Set up **GA4** + connect to Search Console.
- [ ] Publish **Tier 1** posts (6) — 2/week.
- [ ] Create **Google Business Profile** + G2/Capterra product listings.
- [ ] Start outreach for 5–10 quality backlinks.
- [ ] Review GSC after 2–3 weeks; expand the winning clusters.
