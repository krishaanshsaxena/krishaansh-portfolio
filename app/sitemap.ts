// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://krishaansh.com'

  const paths = [
    '',
    '/about',
    '/projects',
    '/blog',
    '/resume',
    '/contact',
  ]

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1.0 : 0.8,
  }))
}
