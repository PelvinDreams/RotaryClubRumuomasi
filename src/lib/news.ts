import { newsData } from "@/data/site";

export type NewsArticle = {
  slug: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  body: string;
  link: string;
};

const fallbackNews: NewsArticle[] = newsData as NewsArticle[];

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 90);
}

export async function getNewsArticles(): Promise<NewsArticle[]> {
  const apiKey = process.env.NEWSDATA_API_KEY ?? "pub_23922a4e8dd448359c0de7fdb1271c76";

  try {
    const response = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en&category=top,business,health,technology,science&country=ng`,
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) {
      throw new Error(`News API error: ${response.status}`);
    }

    const data = await response.json();
    const results = Array.isArray(data.results) ? data.results : [];

    if (results.length === 0) {
      return fallbackNews;
    }

    return results.slice(0, 3).map((item: Record<string, unknown>, index: number): NewsArticle => ({
      slug: slugify(String(item.title || `news-story-${index + 1}`)),
      title: String(item.title || fallbackNews[index]?.title || "Rotary community story"),
      category: Array.isArray(item.category) && item.category.length > 0 ? String(item.category[0]) : "Community",
      image:
        String(item.image_url || fallbackNews[index]?.image || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"),
      excerpt:
        String(item.description || fallbackNews[index]?.excerpt || "Rotary continues to create meaningful impact in local communities."),
      body:
        String(item.content || item.description || fallbackNews[index]?.body || "Rotary keeps advancing service-driven solutions that help communities thrive."),
      link: String(item.link || "#"),
    }));
  } catch (error) {
    console.error("News API fallback triggered:", error);
    return fallbackNews;
  }
}
