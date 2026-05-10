import { defineField, defineType } from "sanity";

export default defineType({
  name: "home-steps",
  title: "Homepage Steps",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
      name: "ctaButtonText",
      title: "Call to Action Button Text",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(50),
    }),
    defineField({
      name: "ctaButtonLink",
      title: "Call to Action Button Link",
      type: "url",
      validation: (Rule) => Rule.required().uri({ allowRelative: true }),
    }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required().min(1).max(50),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required().min(10).max(200),
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
