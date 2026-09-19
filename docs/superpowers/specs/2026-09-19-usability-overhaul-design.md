# Usability overhaul: answer-first pages and task-based navigation

Date: 2026-09-19
Status: awaiting review (revised: visual scope widened to a LinkedIn-inspired
information-density pass, at the owner's request)

## Problem

The site is hard to use. It is not visually inconsistent and it is not unpolished:
the existing Material 3 system is coherent and its accessibility basics (focus
rings, reduced motion, skip link, tap target sizes) are already in place. The
difficulty is structural, and it has two causes.

**Navigation is shaped like the database, not like the visitor's problem.** The
header offers Brands, Gateway IPs, Router Models, ISPs, Passwords and Tools. Four
of those are different doors into one room: *what are my router's login details?*
A visitor has to classify their own problem into our taxonomy before they can
begin. Adding filters to each landing page (done previously) made each door
easier to walk through without reducing the number of doors.

**The answer is below the fold.** On `/tp-link` at phone width, the password sits
beneath a logo, a badge, a title, a description, a call to action, the gateway IP
and the username. The single fact the visit exists for requires scrolling.

Four further problems follow from these:

1. `192.168.1.1 / 192.168.0.1 / tplinkwifi.net` is three values in one field with
   one Copy button, and nothing says what reaches the clipboard.
2. The homepage H1 is "Universal Router Admin & Network Directory", which serves
   no query, and it is the canonical target for `192.168.1.1` traffic.
3. The cookie banner covers roughly the bottom third of every mobile page until
   dismissed, on pages where the answer is already below the fold.
4. `src/pages/[slug].astro` is 1,353 lines containing four duplicated layouts
   (ip, brand, model, isp). That duplication is why the page types drift apart.
   The FAQ accordion is the clearest symptom: 15 hand-written `<details>` blocks
   across five files, including four inside `[slug].astro` alone, one per page
   type, each hardcoded rather than looping over the FAQ data that already
   exists in `ipData.faqs` and is already looped for the JSON-LD schema.

## Constraint

Every URL stays. No page is deleted, no body copy or FAQ is removed, no ad slot
is dropped. The site earns its traffic from 3,626 indexed pages and the work must
not put that at risk. Everything below changes what is *on* a page, never which
pages exist or what they are about.

## Measured baseline

Rendered page height at 390px phone width, cookie banner dismissed. One phone
screen is taken as 900px.

| Page | Height | Phone screens |
| --- | --- | --- |
| `/192-168-0-1` (ip) | 81,913px | 91 |
| `/tp-link` (brand) | 29,602px | 32 |
| model page | 7,665px | 8 |
| ISP page | 6,545px | 7 |

The IP page carries 280 table rows and 898 links; at phone width the responsive
table stacks every row into a block, which is where 91 screens comes from. These
numbers, not taste, are what the density and disclosure work is aimed at.

Target: no page type over 8 phone screens (~7,200px), which is a ~90% cut on the
worst case, with no content removed from the HTML.

## Visual direction

The owner asked for design inspiration from LinkedIn, explicitly not a copy. Of
the qualities on offer, three are taken: **a two-column shell**, **dense
professional information style** and **progressive disclosure**. The warm canvas
was declined, so the existing palette stays. A three-column shell was considered
and rejected as too much structure for this content.

Identity stays our own. LinkedIn's accent, typography and card chrome are not
imported; taking them would only trade looking like a Google property for looking
like a LinkedIn one. What is borrowed is how LinkedIn organises dense
information, not how it looks.

## Non-goals

- No change to the palette, the type families or the layout shell. The chosen
  LinkedIn qualities are about density and disclosure, not colour or structure.
- No URL changes, redirects or new hub pages.
- The `public/fonts/google-sans.woff2` licensing question is tracked separately
  (see Open questions) and is not addressed here.

## Design

### 1. Two-column shell

A shared layout wrapper used by the deep pages and the homepage. Main column
carries the answer and the primary content; the rail carries everything
supplementary.

```
DESKTOP (>=1024px)                        MOBILE (<1024px)
+---------------------------+----------+  +---------------------+
| breadcrumb                | [ad]     |  | breadcrumb          |
| Title                     |          |  | Title               |
| +-----------------------+ | On this  |  | +-----------------+ |
| | LoginCard  the answer | | page:    |  | | LoginCard       | |
| +-----------------------+ | - Steps  |  | +-----------------+ |
|                           | - Models |  | [ad]                |
| Steps                     | - FAQ    |  | Steps               |
| -----------------------   |          |  | Models / FAQ / copy |
| Models  (20 + show all)   | Related  |  | ------------------- |
| -----------------------   | brands   |  | Related brands      |
| FAQ                       |          |  | Tools               |
| -----------------------   | Tools    |  +---------------------+
| About / SEO copy          |          |
+---------------------------+----------+
   ~65%                       ~35%, sticky
```

- The rail absorbs `RelatedLinksGrid`, "Other popular gateways" and the tools
  links, which today stack vertically at the foot of every page. Moving them
  sideways is a direct cut to page height on desktop and costs nothing on mobile,
  where they simply follow the main column as they do now.
- The rail is sticky on desktop so the ad and the jump links stay in view.
- The leaderboard ad moves into the rail on desktop. On mobile it sits directly
  below the LoginCard, so it is still early in the page without displacing the
  answer. Slot count and formats are unchanged.
- "On this page" jump links are generated from the section headings that the page
  actually renders, not hardcoded per type.

### 2. Navigation

Six top-level destinations collapse to two, plus a search field that is always
visible rather than behind an icon.

```
NOW  logo │ Brands  Gateway IPs  Router Models  ISPs  Passwords  Tools │ search │ theme
NEW  logo │ search: "Find your router" ....................│ Browse ▾ │ Tools │ theme
                                                             ├ Router brands
                                                             ├ Router models
                                                             ├ Gateway IPs
                                                             ├ Internet providers
                                                             └ Default passwords
```

Every link that exists today still exists, inside Browse. This matters for more
than tidiness: those header links are internal links to the main category pages,
and dropping them would remove link equity. They stop being the only entry point;
they do not stop being linked.

Mobile bottom navigation becomes Home · Find · Browse · Tools, where Find opens
the search panel directly.

### 3. LoginCard

A single component, used by all four deep page types, rendered immediately after
the page title and before anything else.

```
┌────────────────────────────────────┐
│ Go to       192.168.1.1   [Open] ↗ │
│ Username    admin         [Copy]   │
│ Password    admin         [Copy]   │
├────────────────────────────────────┤
│ Also works: 192.168.0.1 · tplinkwifi.net │
└────────────────────────────────────┘
```

Rules:

- One value per row. One copy button per value. The ambiguity of a single Copy
  button beside three slash-separated addresses disappears because the addresses
  are no longer in one field.
- The first gateway address is primary and carries an Open action linking to
  `http://<ip>`. Remaining addresses are listed compactly beneath as plain text
  with their own copy affordance.
- **Not every password is a credential.** 791 of the 3,410 password values in the
  data (23.2%, 153 distinct) are instructions rather than secrets: `Printed Admin
  Password on Sticker`, `Amazon Account / OTP`, `Password on sticker`, `Empty (set
  on first login)`. Attaching a copy button to these is meaningless, and it
  affects nearly a quarter of the database. The card classifies the value and
  renders an instruction without a copy affordance when it is not a literal
  credential. The rule lives in the component, so all ~3,600 pages inherit it.
- Copy uses the existing delegated clipboard pattern from `scripts/data-table.ts`
  rather than a handler per button.

### 4. Template unification

`[slug].astro` keeps its four data branches but renders one shared sequence:

```
PageHero      breadcrumb, title, subtitle, logo or model photo
LoginCard     the answer
AdBanner      leaderboard, moved down from above the content
StepsList     existing step-by-step content
[type block]  models table / common brands / provider routers
FaqAccordion  extracted; replaces 15 hand-written blocks across 5 files
SeoSection    existing body copy, unchanged
RelatedLinks  unchanged
```

Target: 1,353 lines to roughly 400, with five new shared components. The type
branches keep only what genuinely differs between page types. `FaqAccordion`
loops over the existing FAQ data instead of hand-writing `<details>` blocks,
which removes 15 duplicated blocks across five files and keeps the visible FAQ
and the JSON-LD `FAQPage` schema reading from one source.

### 5. Ad placement

The leaderboard currently sits between the page header and the content. It moves
to directly below the LoginCard. The slot count, formats and IDs are unchanged,
so inventory is unchanged; only the order of the answer and the ad changes.

### 6. Information density

Applied to the shared components, so all ~3,600 deep pages inherit it.

- **Sections become divided regions of one card, not a stack of separate cards.**
  Today each section is its own `rounded-2xl` card with its own padding and its
  own margin, so every section pays for two borders, two paddings and a gap. One
  card with internal dividers removes that per-section overhead. This is the
  single biggest contributor to the current heights.
- **Weight carries hierarchy instead of size.** Headings step down in weight and
  colour more than in font size, so a section header stops consuming a full line
  of display type. The type families and the palette do not change.
- **Compact rows.** Credential rows, model rows and link lists use a tighter
  vertical rhythm, consistent across page types.
- **Emoji are dropped from section headings.** `📡 Hardware Routers Using...`
  and similar become plain text headings. They read as decoration, they render
  inconsistently across platforms, and they are noise in a reference document.

### 7. Progressive disclosure

The rule: content is always in the HTML, only its initial visibility changes.
Collapsed content is still indexed, so nothing is hidden from crawlers and this
is not cloaking. Nothing is removed.

- **Long model tables** on IP and brand pages show the first 20 rows with a
  "Show all N models" control, reusing the windowing already written for
  `scripts/data-table.ts`. This alone takes the 280-row IP table from ~60 phone
  screens to about 4.
- **The SEO body copy** on deep pages shows its first paragraph with a "Read
  more" control.
- **Secondary link grids** (`RelatedLinksGrid`, "Other popular gateways") collapse
  behind a single control.
- **FAQs** already use `<details>` and keep that behaviour.

Every disclosure control is a real `<button>` with `aria-expanded`, and every
collapsed region is reachable by keyboard.

### 8. Homepage

The homepage is rebuilt on the two-column shell. It is not a normal landing page:
it is the canonical target for `192.168.1.1`, so it has to answer that query as
directly as any deep page does, while still opening the directory to everyone
else.

```
+---------------------------------+----------+
| H1: 192.168.1.1 router login    | [ad]     |
| and default passwords           |          |
| +-----------------------------+ | Popular  |
| | search: find your router    | | brands   |
| +-----------------------------+ |          |
| +-----------------------------+ | Top      |
| | LoginCard for 192.168.1.1   | | gateways |
| | user / pass / Open          | |          |
| +-----------------------------+ | Tools    |
|                                 |          |
| Popular gateways                |          |
| -----------------------------   |          |
| Top brands                      |          |
| -----------------------------   |          |
| Is this your router? checker    |          |
| -----------------------------   |          |
| FAQ                             |          |
+---------------------------------+----------+
```

Changes from today:

- The full-bleed gradient hero band goes. It costs a large share of the first
  screen and carries no information.
- Search and the 192.168.1.1 answer both sit above the fold. Today the answer for
  the site's highest-value query is below a hero, a badge and a chip row.
- The tools grid, brand showcase and lookup table become divided sections of one
  card, in line with the density rules, with the supplementary links moved to the
  rail.
- Section 4 of the current page (the master hardware catalog and lookup table)
  duplicates `/routers`. It is reduced to a link into `/routers`, which is now a
  properly filterable table, rather than a second copy of the same widget.

### 9. Secondary fixes

- **Cookie consent** becomes a compact single-line bottom bar. Same consent
  behaviour, far less screen taken on mobile.
- **Naming.** The site uses two brand names at once: the header and domain say
  *19216811.page*, while *RouterSync* appears across ten source files, including
  the homepage H1 ("RouterSync Admin & Gateway Hub") and the footer. A reference
  site that cannot name itself consistently reads as untrustworthy, which matters
  more here than on most sites because visitors are being asked to trust
  credentials. Settling on one name is an owner decision (see Open questions);
  the implementation applies whichever is chosen.

## Testing

Verified against a real build, not assumed:

- All 3,626 pages build; the page count and the full URL list are identical
  before and after.
- Ad slot count per page type unchanged.
- Exactly one `h1` per page.
- For a sample across all four page types, the gateway IP, username and password
  values still appear in the HTML.
- Non-literal passwords render without a copy button; literal ones render with.
  Checked against known cases from the 153 distinct non-literal values.
- The visible FAQ and the JSON-LD FAQPage entries match, since both now derive
  from the same data.
- Headless screenshots at 500px and 1280px for one page of each type.
- Above-the-fold check: the password is within the first 900px at phone width on
  brand and model pages.
- Rendered page height re-measured for all four page types and the homepage
  against the baseline table above; none over 8 phone screens.
- At desktop width the rail renders beside the main column, and at mobile width
  it follows it, with the ad still above the main content's later sections.
- Collapsed content is present in the served HTML: the full model row count and
  the full SEO copy still appear in the page source when collapsed.
- Every disclosure control is a button with `aria-expanded`, and its region is
  reachable by keyboard.

## Open questions

1. **Homepage H1.** The homepage is the canonical target for `192.168.1.1` but
   its H1 serves no query. Proposed: "192.168.1.1 router login and default
   passwords". This should help relevance, but it is the highest-traffic page on
   the site and the change is the owner's call, not the implementer's.
2. **One name or two.** *19216811.page* or *RouterSync*? The domain and the
   header say the former, ten files say the latter. This needs an owner decision
   before the copy work, since it touches the homepage H1, the footer and the
   404 page.
3. **Google Sans licensing.** `public/fonts/google-sans.woff2` is self-hosted.
   Google Sans is Google's proprietary brand face and is generally not licensed
   for third-party sites. The file's provenance could not be verified from the
   repository. If it is Google Sans, a licensed replacement is needed; that is a
   separate change from this one.
