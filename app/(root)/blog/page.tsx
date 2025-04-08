import { Metadata } from "next";

import BlogCard from "@/components/blog/blog-card";
import PageContainer from "@/components/common/page-container";
import { blogUnsorted } from "@/config/blog";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.blog.metadata.title,
  description: pagesConfig.blog.metadata.description,
};

export default function ContributonsPage() {
  return (
    <PageContainer
      title={pagesConfig.blog.title}
      description={pagesConfig.blog.description}
    >
      <BlogCard blog={blogUnsorted} />
    </PageContainer>
  );
}
