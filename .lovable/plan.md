## Goal
Switch desktop layout to a conventional top navigation bar (logo left, menu right), keep the hamburger + slide-in sidebar for mobile, and ensure the footer appears at the bottom of every page on every device.

## Changes

### 1. `src/components/SiteHeader.tsx` — desktop top nav
Rebuild as a full top header:
- Left: Sculpture logo (image) + "SCULPTURE" wordmark + tagline
- Right (desktop, `md:`): horizontal nav links (Home, About, Amenities, Floor Plan, Gallery, Location, Contact) with active state styling
- Right (mobile): nothing (hamburger handled by sidebar component)
- Sticky at top, full width, on every page

### 2. `src/components/SiteSidebar.tsx` — mobile only
- Hide entirely on `md+` (`md:hidden` on both the hamburger button and the aside)
- Keep the slide-in drawer + backdrop behavior for mobile

### 3. `src/components/Logo.tsx` — remove floating logo
The logo now lives inside the header. Either delete the floating fixed Logo or stop rendering it. Cleanest: remove `<Logo />` from `__root.tsx` and delete the file.

### 4. `src/routes/__root.tsx` — layout
- Remove the `md:ml-64` left margin (no more desktop sidebar offset)
- Structure: `<SiteHeader />` (sticky top) → `<SiteSidebar />` (mobile drawer only) → `<main className="flex-1">` → `<SiteFooter />`
- Use `flex flex-col min-h-screen` so the footer always sits at the bottom

### 5. `src/routes/index.tsx` — home hero
Ensure the full-screen video hero doesn't push the footer off-screen or overlap it. Cap hero height (e.g. `h-[calc(100vh-Xrem)]` or just `min-h-screen` removed) so the footer is reachable on scroll on every device. No content removed — only height/scroll behavior adjusted.

## Result
- Desktop/laptop: standard top header (logo left, menu right), no left sidebar, footer at page bottom.
- Mobile/tablet: hamburger opens left drawer, header still on top, footer at page bottom.
