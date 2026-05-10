import { defineField, defineType } from "sanity";

export default defineType({
  name: "home-cta",
  title: "Homepage CTA",
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
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Success", value: "success" },
          { title: "Danger", value: "danger" },
        ],
        layout: "radio",
      },
      initialValue: "success",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.min(10).max(400),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
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
  ],
});
