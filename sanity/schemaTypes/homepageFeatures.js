import { defineField, defineType } from "sanity";

export default defineType({
  name: "home-features",
  title: "Homepage Features",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required().min(1).max(100),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "string",
              validation: (Rule) => Rule.required().min(1).max(200),
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "value",
            },
            prepare(selection) {
              return {
                title: selection.title || "Features",
                subtitle: selection.subtitle || "",
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
