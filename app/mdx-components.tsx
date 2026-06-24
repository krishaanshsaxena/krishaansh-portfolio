// mdx-components.tsx
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // This allows you to scale global formatting styles or add syntax highlighters easily later
    ...components,
  };
}
