import { defineField, defineType } from "sanity";

export default defineType({
  name: "home-services",
  title: "Homepage Services",
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
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "category",
              title: "Category",
              type: "string",
              validation: (Rule) => Rule.required().min(1).max(30),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required().min(1).max(50),
            }),
            defineField({
              name: "percentage",
              title: "Percentage",
              type: "number",
              validation: (Rule) => Rule.required().min(1).max(100),
            }),
            defineField({
              name: "reviews",
              title: "Reviews",
              type: "number",
              validation: (Rule) => Rule.required().min(0),
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
