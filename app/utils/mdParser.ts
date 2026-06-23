// app/utils/mdParser.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

// 1. Fetches metadata arrays for listing posts on your main blog feed
export function getSortedPostsData(): Omit<BlogPostData, 'content'>[] {
  // If the directory doesn't exist yet, return a blank array to prevent build crashes
  if (!fs.existsSync(contentDirectory)) return [];

  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled Post',
        date: data.date || 'Unknown Date',
        summary: data.summary || '',
      };
    });

  return allPostsData;
}

// 2. Fetches the full individual post body for a specific slug page view
export function getPostData(slug: string): BlogPostData | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled Post',
      date: data.date || 'Unknown Date',
      summary: data.summary || '',
      content,
    };
  } catch {
    return null;
  }
}
