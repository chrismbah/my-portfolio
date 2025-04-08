export interface BlogInterface {
  title: string;
  summary: string;
  author: string;
  link: string;
}

export const blogUnsorted: BlogInterface[] = [
  {
    title: "What Does Simple Addition Look Like in 10 Programming Languages?",
    summary:
      "An entertaining comparison of how different programming languages handle the most basic task: adding two numbers.",
    author: "Christian Mbah",
    link: "https://chrismbah.hashnode.dev/what-does-simple-addition-look-like-in-10-programming-languages",
  },
  {
    title: "How to Build a simple REST API with Node, Express and MongoDB",
    summary:
      "A practical guide for beginners to build and understand a RESTful API using Node.js, Express, and MongoDB.",
    author: "Christian Mbah",
    link: "https://chrismbah.hashnode.dev/how-to-build-a-simple-rest-api-with-node-express-and-mongodb",
  },
  {
    title: "Step-by-Step Guide to Becoming a Web3 Developer in 2025",
    summary:
      "Everything you need to know to get started in Web3—from fundamentals to tools, roadmap, and opportunities in 2025.",
    author: "Christian Mbah",
    link: "https://chrismbah.hashnode.dev/step-by-step-guide-to-becoming-a-web3-developer-in-2025",
  },
  {
    title: "My Journey as a Full-Stack Developer | What I’ve Learnt So Far",
    summary:
      "A personal reflection on my growth, challenges, and key lessons from working as a full-stack developer.",
    author: "Christian Mbah",
    link: "https://chrismbah.hashnode.dev/my-journey-as-a-full-stack-developer-what-ive-learnt-so-far",
  },
];

export const featuredBlog: BlogInterface[] = blogUnsorted.slice(0, 4);
