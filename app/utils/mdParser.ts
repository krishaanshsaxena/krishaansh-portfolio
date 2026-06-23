// app/utils/mdParser.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Enforces tracking inside the public static asset sandbox tree
const contentDirectory = path.join(process.cwd(), 'public', 'content');

export interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

export function getSortedPostsData(): Omit<BlogPostData, 'content'>[] {
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
