# Admin & Business Flow — Roadmap

## Confirmed business flows

### 1. Inquiries = “Book a shot” only
- **Frontend:** One primary action — “Book a shot” (no generic contact or separate “request a quote”).
- **Backend:** Each submission creates an **inquiry** in the dashboard (and can later become a **Customer** once confirmed).
- **Frontend display:** Inquiries do **not** appear on the site. They exist only in the admin dashboard.

### 2. Reviews / Testimonials
- **Flow:**  
  1. Client **books a shot** → appears as **Customer** in dashboard.  
  2. You **confirm** the booking (e.g. mark appointment as confirmed).  
  3. You **request a review** from that customer (e.g. send email/link from dashboard).  
  4. Customer submits review → review appears in dashboard for **approval**.  
  5. Once **approved** → review shows on the **frontend** automatically (testimonials section).
- **Frontend:** Only **approved reviews/testimonials** are shown. No inquiries on the frontend.

### 3. Content & Settings
- **All** frontend-editable content is managed in **Settings**: hero, about, portfolio, packages, testimonials (source of truth for what’s shown), contact/social, etc.
- **Media library** inside Settings: upload once, then assign images to hero, gallery, about, etc.

### 4. Appointments
- **Clients can select date and time** on the frontend when booking.
- Backend stores: customer, appointment (date/time), and links to inquiry/booking.

### 5. Payments
- **Stripe** for online payments (deposit or full payment when booking).
- Suggested approach: **Stripe Checkout** or **Payment Element** for one-time payments; optional **Customer** + **PaymentMethod** if you want saved cards later.

---

## Stripe integration (suggested)

| Option | Use case | Complexity |
|--------|----------|------------|
| **Stripe Checkout (hosted)** | “Pay now” or “Pay deposit” — redirect to Stripe-hosted page, then return to your site. | Low; fastest to ship. |
| **Stripe Payment Element (embedded)** | Card form on your site; you control UI. | Medium. |
| **Stripe Customer + Subscriptions** | Recurring (e.g. retainer). | Higher; only if needed later. |

**Recommendation for v1**
- Use **Stripe Checkout** for “Book a shot”:
  - User picks date/time and package → you create a **Checkout Session** (amount = deposit or full price).
  - After payment, Stripe redirects back to your success page; you create/update **Customer** and **Appointment** and mark as “paid” (or “deposit paid”).
- Optional: “Request review” email can include a link that opens a simple form; submission creates a **Review** in the backend for approval, then appears as testimonial on the frontend.

### Environment variables

Add to `.env.local` (and use `.env.example` for the team):

- `STRIPE_SECRET_KEY` — from Stripe Dashboard → API keys
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — same
- `STRIPE_WEBHOOK_SECRET` — from `stripe listen --forward-to localhost:3000/api/webhooks/stripe` (local) or Stripe Dashboard webhooks (production)

### Implementation checklist

- [ ] Install `stripe` (server); optionally `@stripe/stripe-js` (client).
- [ ] API route: `POST /api/checkout` — create Stripe Checkout Session (line items, success/cancel URLs, customer email).
- [ ] API route: `POST /api/webhooks/stripe` — handle `checkout.session.completed`; create/update Customer, Appointment, Transaction.
- [ ] Success page: e.g. `/book/success?session_id=...` — show confirmation.
- [ ] Cancel page: e.g. `/book/cancel` — "Payment cancelled; you can try again."

---

## Admin UI adjustments (from this roadmap)

- **Inquiries** → Treat as **“Book a shot”** only (rename or relabel in nav/copy to “Bookings” or “Inquiries (Book a shot)”).
- **Reviews** → Dedicated **Reviews** admin page: Pending reviews → **Approve** → approved show on frontend as testimonials. Request review from a customer (e.g. from Customers or after confirming appointment).
- **Settings** → One place for all site content + media library.
- **Appointments** → Backend supports date/time chosen by client; frontend will have a booking flow that selects slot and then goes to Stripe.
- **Stripe** → Environment variables for keys; API route(s) to create Checkout Session and handle success/cancel; webhook for `checkout.session.completed` to create Customer/Appointment and record transaction.

---

## Phases (high level)

1. **Data & Settings** — Models for content, media, business info; Settings UI; frontend reads from API.
2. **Book a shot** — One inquiry type (“Book a shot”); form creates inquiry + (after slot selection) appointment; optional “customer” creation at booking or on confirm.
3. **Reviews** — Request review from customer → form/link → pending review in dashboard → approve → show as testimonials on frontend.
4. **Stripe** — Checkout Session for deposit/full payment; success flow creates/updates customer and appointment and records transaction.
5. **Polish** — Invoices, bookkeeping, emails, analytics as needed; ensure “business runs from dashboard” is met.

---

*Last updated from product decisions: single inquiry type (Book a shot), reviews only on frontend, all content in Settings, client picks date/time, Stripe for payments.*
