// app/utils/mdParser.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Enforces absolute node tracing during Vercel compile phases
const contentDirectory = path.join(process.cwd(), 'public/content');

export interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

export function getSortedPostsData(): Omit<BlogPostData, 'content'>[] {
  try {
    if (!fs.existsSync(contentDirectory)) return [];

    const fileNames = fs.readdirSync(contentDirectory);
    return fileNames
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
  } catch (error) {
    console.error("Failed parsing markdown data paths:", error);
    return [];
  }
}

export function getPostData(slug: string): BlogPostData | null {
  try {
    const safeSlug = path.basename(slug); // Sanitise against traversal attacks
    const fullPath = path.join(contentDirectory, `${safeSlug}.md`);
    
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: safeSlug,
      title: data.title || 'Untitled Post',
      date: data.date || 'Unknown Date',
      summary: data.summary || '',
      content,
    };
  } catch {
    return null;
  }
}
