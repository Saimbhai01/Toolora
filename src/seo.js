const SITE_URL = 'https://YOUR-DOMAIN.example'; // Replace with your real custom domain before launch.
const DEFAULT_TITLE = 'Toolora — Free Online Tools for Everyday Work';
const DEFAULT_DESCRIPTION = 'Use free online text, image, developer, calculator and converter tools. Fast, simple and privacy-friendly browser-based utilities.';

function upsertMeta(attribute, key, content) {
  let node = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!node) { node = document.createElement('meta'); node.setAttribute(attribute, key); document.head.appendChild(node); }
  node.setAttribute('content', content);
}
function upsertLink(rel, href) {
  let node = document.head.querySelector(`link[rel="${rel}"]`);
  if (!node) { node = document.createElement('link'); node.setAttribute('rel', rel); document.head.appendChild(node); }
  node.setAttribute('href', href);
}
export function updateSeo(tool = null) {
  const title = tool ? `${tool.name} — Free Online Tool | Toolora` : DEFAULT_TITLE;
  const description = tool ? `${tool.desc} Use this free ${tool.name.toLowerCase()} online tool in your browser with no installation required.` : DEFAULT_DESCRIPTION;
  document.title = title;
  upsertMeta('name', 'description', description);
  upsertMeta('name', 'robots', 'index,follow,max-image-preview:large');
  upsertMeta('property', 'og:type', 'website');
  upsertMeta('property', 'og:site_name', 'Toolora');
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:url', window.location.origin + window.location.pathname);
  upsertMeta('name', 'twitter:card', 'summary');
  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', description);
  upsertLink('canonical', window.location.origin + window.location.pathname);
  let schema = document.getElementById('toolora-seo-schema');
  if (!schema) { schema = document.createElement('script'); schema.id = 'toolora-seo-schema'; schema.type = 'application/ld+json'; document.head.appendChild(schema); }
  const data = tool ? {
    '@context':'https://schema.org', '@type':'WebApplication', name:tool.name,
    applicationCategory:'UtilitiesApplication', operatingSystem:'Any', description,
    isAccessibleForFree:true, offers:{'@type':'Offer',price:'0',priceCurrency:'USD'}
  } : {
    '@context':'https://schema.org', '@type':'WebSite', name:'Toolora', url:window.location.origin,
    description:DEFAULT_DESCRIPTION, potentialAction:{'@type':'SearchAction',target:window.location.origin+'/?q={search_term_string}', 'query-input':'required name=search_term_string'}
  };
  schema.textContent = JSON.stringify(data);
}
