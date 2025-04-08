import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { BlogInterface } from "@/config/blog";

interface BlogCardProps {
  blog: BlogInterface[];
}

export default function BlogCard({ blog }: Readonly<BlogCardProps>) {
  return (
    <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blog.map((article, id) => (
        <Link href={article.link} target="_blank" key={id}>
          <div className="group relative flex h-full flex-col rounded-xl border bg-background p-5 transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-md">
            {/* Article Header */}
            <div className="mb-3 flex items-start justify-between">
              <div className="flex items-center gap-2">
                <Icons.article size={20} />
                <h3 className="font-semibold line-clamp-1">{article.title}</h3>
              </div>
            </div>

            {/* Article Summary */}
            <div className="mb-4 flex-grow">
              <p className="line-clamp-3 text-sm text-muted-foreground">
                {article.summary}
              </p>
            </div>

            {/* Article Footer */}
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
                  <Icons.user className="h-3 w-3 text-muted-foreground" />
                </div>
                <span className="text-xs text-muted-foreground">
                  {article.author}
                </span>
              </div>

              <div className="transform opacity-70 transition-all group-hover:opacity-100">
                <Icons.hashnode className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
