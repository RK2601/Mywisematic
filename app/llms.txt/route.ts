import { SITE_URL, publishedPosts } from "@/lib/blog";

// llms.txt (https://llmstxt.org): a plain-language map of the site for AI answer engines.
export const revalidate = 3600;

const SERVICES: [string, string, string][] = [
  ["AI & Machine Learning", "/services/ai-ml", "AI assistants, document automation, retrieval-augmented generation (RAG), AI agents and ML models with guardrails and evaluation."],
  ["SaaS & Custom Software", "/services/saas", "SaaS platforms, web applications and custom business software from MVP to scale."],
  ["AR & VR", "/services/ar-vr", "WebAR product visualisation, VR training simulations and immersive 3D applications."],
  ["Game Development", "/services/game-dev", "Games, gamified apps and real-time 3D experiences in Unity and Unreal Engine."],
  ["Digital Marketing & SEO", "/services/digital-marketing", "Technical SEO, content, local SEO, paid campaigns and analytics."],
  ["Technology Consulting", "/services/tech-consultation", "Project scoping, architecture and security reviews, cloud cost optimisation and build-vs-buy advice."],
];

export function GET() {
  const posts = publishedPosts()
    .map((p) => `- [${p.title}](${SITE_URL}/blogs/${p.slug}): ${p.description}`)
    .join("\n");
  const body = `# WiseMatic

> WiseMatic (WiseMatic Inc.) is a technology company based in Toronto, Ontario, Canada. It builds AI and machine learning solutions, SaaS and custom software, AR/VR experiences and games, and provides digital marketing, SEO and technology consulting for small and mid-sized businesses in Canada and the United States.

- Address: 401, 180 Duncan Mills Road, Toronto, ON M3B 1Z6, Canada
- Email: info@wisematic.ca (general), sales@wisematic.ca (sales)
- Website: ${SITE_URL}
- LinkedIn: https://www.linkedin.com/company/wisematic-inc/

## Services

${SERVICES.map(([name, path, desc]) => `- [${name}](${SITE_URL}${path}): ${desc}`).join("\n")}

## Company

- [About WiseMatic](${SITE_URL}/about-us)
- [Careers (Toronto)](${SITE_URL}/careers)
- [Contact](${SITE_URL}/contact-us)

## Articles

${posts}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
