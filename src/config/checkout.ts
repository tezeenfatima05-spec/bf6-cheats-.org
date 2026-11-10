import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * External checkout URLs — server-side redirect targets only (never use as visible href).
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  bf6: 'bf6',
  hwidSpoofer: 'hwid-spoofer',
  cloudDma: 'cloud-dma',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Internal checkout path shown to users (hides external URL on hover). */
export function checkoutPath(product: CheckoutProduct = 'bf6'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** Default product checkout redirect. */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('bf6');

export const HWID_SPOOFER_CHECKOUT_PATH = checkoutPath('hwidSpoofer');
export const CLOUD_DMA_CHECKOUT_PATH = checkoutPath('cloudDma');

/** Map internal product slugs to checkout redirect paths. */
export function checkoutForSlug(_slug: string): string {
  return checkoutPath('bf6');
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  if (href.includes('%2Fproducts%2Fbf6') || href.includes('/products/bf6')) {
    return checkoutPath('bf6');
  }
  if (href.includes('%2Fproducts%2Fhwid-spoofer') || href.includes('/products/hwid-spoofer')) {
    return checkoutPath('hwidSpoofer');
  }
  if (href.includes('%2Fproducts%2Fcloud-dma') || href.includes('/products/cloud-dma')) {
    return checkoutPath('cloudDma');
  }
  if (href.includes('zadeyo.com')) {
    return checkoutPath('bf6');
  }

  return href;
}
