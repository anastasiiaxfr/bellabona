import { defineField, defineType } from "sanity";

export default defineType({
  name: "home-review",
  title: "Homepage Review",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
      name: "cite",
      title: "Cite",
      type: "text",
      validation: (Rule) => Rule.required().min(1).max(350),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required().min(1).max(50),
    }),
    defineField({
      name: "job",
      title: "Job",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
