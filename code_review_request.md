# Code Review Request

I have fixed the Vercel deployment issues by resolving linting errors that were causing the build to fail.

## Changes:
1. **src/components/case-study/charts.tsx**:
   - Removed unused imports: `AnimatePresence` (framer-motion), `Eye`, `Search`, `ShoppingBag`, `StarIcon` (lucide-react).
2. **src/components/case-study/sections.tsx**:
   - Removed unused `lang` variable from the `Hero` component.

## Verification:
- Ran `npm run build` successfully.
- Verified the frontend renders correctly via a Playwright screenshot.
