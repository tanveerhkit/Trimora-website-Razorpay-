# Trimora Website and Policy Pack

## Overview

This repository contains Trimora's static public website and the supporting business-policy copy prepared for payment onboarding and verification. Trimora is presented as a salon discovery and appointment-booking platform; the checked-in site is informational and does not itself implement booking or payment processing.

## Included content

- Static site files under `site/`
- Home, About, and Contact copy
- Privacy Policy and Terms
- Refund and cancellation policy
- Service fulfilment policy
- Account deletion instructions
- Website handoff notes and Trimora branding assets
- Vercel configuration for the static site

## Getting started

Open `site/index.html` in a browser to review the site locally. The layout and content are defined by:

```text
site/index.html
site/styles.css
site/config.js
site/pages.js
site/app.js
```

Review `site/config.js` before publishing and replace all business placeholders in the Markdown content, including legal name, support details, address, effective dates, and public URL.

## Publishing checklist

Confirm that every policy matches actual Trimora operations, contact details are monitored, account-deletion instructions work, and payment claims reflect the live product. This repository contains website content only; any Razorpay integration should be documented in the application that implements it.
