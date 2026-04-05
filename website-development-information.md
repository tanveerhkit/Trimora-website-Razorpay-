# Trimora Website Development Information

This file is the developer and publishing handoff for the Trimora landing website.

## Goal

Build a clean public website that can be used for:

- Razorpay onboarding
- business verification
- public brand presence
- app store support links
- customer trust and legal policy visibility

## Required Routes

- `/`
- `/about`
- `/contact`
- `/privacy-policy`
- `/terms`
- `/refund-cancellation-policy`
- `/service-fulfillment-policy`

## Required Footer Links

Every page should include links to:

- About
- Contact Us
- Privacy Policy
- Terms & Conditions
- Cancellation & Refund Policy
- Service Fulfillment Policy

## Branding Assets

Primary logo for the website:

- `assets/trimora_logo.png`

## Content Files

Use these files as page source content:

- `home.md`
- `about.md`
- `contact.md`
- `privacy-policy.md`
- `terms.md`
- `refund-cancellation-policy.md`
- `service-fulfillment-policy.md`

## Mandatory Placeholder Replacement

Before launch, replace:

- `[Legal Business Name]`
- `[Support Email]`
- `[Support Phone]`
- `[Business Address]`
- `[City, State, India]`
- `[Effective Date]`
- `[Website URL]`

## Suggested Site Structure

Header:

- Logo
- Home
- About
- Contact

Hero section on homepage:

- headline
- short supporting text
- CTA such as `Contact Us` or `Coming Soon on Android`

Homepage sections:

- what Trimora is
- how it works
- why customers use it
- support contact

Footer:

- legal links
- contact email
- phone number
- business name
- copyright line

## Suggested Tech Options

Any of these are fine for the first version:

- static HTML/CSS site
- Next.js
- Astro
- Webflow
- Framer
- Carrd plus separate legal pages

## Minimum Quality Requirements

- use a live `https://` domain
- mobile responsive layout
- working navigation and footer links
- all pages publicly reachable
- no placeholder text left in production
- support email and phone visible
- legal business name visible

## Razorpay Readiness Notes

The live website should clearly show:

- what the business does
- how customers contact support
- refund/cancellation policy
- terms and privacy policy
- service fulfillment clarification that no physical goods are shipped

## Suggested SEO Meta Titles

Homepage:

- `Trimora | Salon Discovery and Appointment Booking`

About:

- `About Trimora`

Contact:

- `Contact Trimora`

Privacy:

- `Privacy Policy | Trimora`

Terms:

- `Terms & Conditions | Trimora`

Refund:

- `Cancellation & Refund Policy | Trimora`

Fulfillment:

- `Service Fulfillment Policy | Trimora`

## Suggested Final Deliverables

- live website deployed on Vercel, Netlify, or similar
- domain connected
- HTTPS enabled
- all content pages published
- logo displayed in header and footer
- legal placeholders replaced
- support contact verified

## Recommended Domain Examples

- `[Website URL]`
- `www.[yourdomain].com`

## Developer Note

Keep the first version intentionally simple. For Razorpay and basic business verification, clarity matters more than flashy design.
