import parse from 'parse-duration';

export type HttpCacheHeaders = {
    headers: {
        'Cache-Control': string;
        'xkey': string; // Varnish cache key
        'Surrogate-Key': string; // Fastly cache key
    }
};
// Note: in a real project you only want one header depending you if work with Varnish or Fastly.
// Todo: Manage this via ENV variables


/**
 * Return HTTP Cache headers
 */
export function HttpCacheHeaderTagger(maxAge: string, sharedMaxAge: string, tags: string[]): HttpCacheHeaders {
    return {
        headers: {
            'Cache-Control': `public, max-age=${parse(maxAge, 's')}, s-maxage=${parse(sharedMaxAge, 's')}`,
            'xkey': tags.join(','),
            'Surrogate-Key': tags.join(',')
        }
    }
}
