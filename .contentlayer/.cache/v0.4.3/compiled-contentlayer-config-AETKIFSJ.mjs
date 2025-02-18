// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkEmoji from "remark-emoji";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `post/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    published: { type: "boolean", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" } }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => {
        return doc._raw.flattenedPath;
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
      () => {
        console.log("Remark GFM applied");
        return remarkGfm;
      },
      () => {
        console.log("Remark Emoji applied");
        return remarkEmoji;
      },
      [
        () => {
          console.log("Remark TOC applied");
          return remarkToc;
        },
        { tight: true }
      ]
    ],
    rehypePlugins: [
      () => {
        console.log("Rehype Slug applied");
        return rehypeSlug;
      },
      [
        () => {
          console.log("Rehype Prism applied");
          return rehypePrism;
        },
        {
          defaultLanguage: "javascript",
          showLineNumbers: true
        }
      ],
      [
        () => {
          console.log("Rehype Autolink Headings applied");
          return rehypeAutolinkHeadings;
        },
        {
          behavior: "wrap",
          properties: {
            className: ["anchor"]
          }
        }
      ]
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-AETKIFSJ.mjs.map
