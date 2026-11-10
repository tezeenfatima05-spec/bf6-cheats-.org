export declare const CHECKOUT_URLS: {
  readonly bf6: string;
  readonly hwidSpoofer: string;
  readonly cloudDma: string;
};

export declare const CHECKOUT_PATH_REDIRECTS: ReadonlyMap<string, string>;

export declare function resolveCheckoutPathRedirect(pathname: string): string | null;
