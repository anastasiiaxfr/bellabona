import { defineField, defineType } from "sanity";

export default defineType({
  name: "home-faq",
  title: "Homepage FAQ",
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "German", value: "de" },
        ],
      },
    }),
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(150),
    }),
    defineField({
      name: "faqs",
      title: "FAQ items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "term",
              title: "Term",
              type: "string",
              validation: (Rule) => Rule.required().min(2).max(300),
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              options: { rows: 4 },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "term",
              subtitle: "answer",
            },
            prepare(selection) {
              return {
                title: selection.title || "No term",
                subtitle: selection.subtitle
                  ? String(selection.subtitle).slice(0, 80)
                  : "",
              };
            },
          },
        },
      ],
    }),
  ],
});
