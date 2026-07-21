// Required for static export (output: 'export' in next.config.mjs)
export const dynamic = "force-static";

export default function sitemap() {
    return [
        {
            url: "https://trulybag.com",
            priority: 1,
            changeFrequency: "weekly",
        },
    ];
}