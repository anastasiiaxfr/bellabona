import { defineField, defineType } from "sanity";

export default defineType({
  name: "home-stats",
  title: "Homepage Stats",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
      name: "stats",
      title: "stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (Rule) => Rule.required().min(1).max(10),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required().min(1).max(50),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "string",
              validation: (Rule) => Rule.required().min(1).max(100),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
