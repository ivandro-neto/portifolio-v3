export interface ContentItem {
  id: string;
  type: "post" | "article";
  date: string;
  title: string;
  description?: string;
  link: string;
  image?: string;
  html?: string;
  platform: "X" | "Threads" | "Medium" | "Dev.to" | "Hashnode";
}

export const contentItems: ContentItem[] = [
  {
    id: "1",
    type: "post",
    date: "Apr 6, 2025",
    title: "Want to make your app blazing fast?",
    link: "https://twitter.com/ivneto_/status/1908823986038833445?ref_src=twsrc%5Etfw",
    platform: "X",
    image: "https://pbs.twimg.com/media/Gn2Ag2LXcAAXgG4?format=jpg&name=small"
  },
  {
    id: "2",
    type: "post",
    date: "2024",
    title: "5 Simple Dev Tips to Level Up Your Code",
    link: "https://www.threads.com/@incode_r/post/DDZfH3ytOJY?xmt=AQF0Iv5i34xDSWBk9AyuFje2473JA0FwUiG-LhRWdYoRYg",
    platform: "Threads",
  },
  {
    id: "3",
    type: "article",
    date: "Jan 7, 2026",
    title: "Event-Driven Architecture in Practice: When to Use It (and When to Walk Away)",
    description: "Event-Driven Architecture (EDA) is often marketed as the ultimate cure for scalability woes. However, in practice, I’ve seen countless systems become far more complex than necessary due to decisions made out of context...",
    link: "https://ivandroneto.hashnode.dev/event-driven-architecture-in-practice-when-to-use-it-and-when-to-walk-away",
    platform: "Hashnode",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1767785262851/d1c8b2c3-2415-429a-8062-d4559f9a02c5.jpeg",
  },
  {
    id: "4",
    type: "article",
    date: "Jul 10, 2026",
    title: "Why the Entitle Node SDK has zero dependencies",
    description: "Every JavaScript SDK starts the same way. You open a new project, type npm install axios, and move on. It's the path of least resistance. Axios handles retries, error parsing, headers, timeout logic...",
    link: "https://ivandroneto.hashnode.dev/why-the-entitle-node-sdk-has-zero-dependencies",
    platform: "Hashnode",
    image: "https://cdn.hashnode.com/uploads/covers/695e432ee7cd59a6e62f2327/d7713920-bbad-4117-9d27-0e150af9a44d.png",
  },
];
