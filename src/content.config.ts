import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const news = defineCollection({
	// Load Markdown and MDX files in the `src/content/news/` directory.
	loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		author: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
    // Define the slug of the site. If not provided, it will use the post id (the file name).
    slug: z.string().optional(),
    // Indicates if the news item should be published. If false, it won't be displayed on the site.
    isPublished: z.boolean().default(true),
	}),
});

export const collections = { news };
