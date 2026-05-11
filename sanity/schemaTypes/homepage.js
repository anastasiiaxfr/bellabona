import { defineField, defineType } from "sanity"

const languageField = defineField({
  name: "language",
  title: "Language",
  type: "string",
  options: {
    list: [
      { title: "English", value: "en" },
      { title: "German", value: "de" },
    ],
    layout: "radio",
  },
  initialValue: "en",
  validation: (Rule) => Rule.required(),
})

export default defineType({
  name: "home-page",
  title: "Homepage",
  type: "document",
  groups: [
    { name: "general", title: "General" },
    { name: "hero", title: "Hero" },
    { name: "brands", title: "Brands" },
    { name: "metrics", title: "Metrics" },
    { name: "services", title: "Services" },
    { name: "stats", title: "Stats" },
    { name: "steps", title: "Steps" },
    { name: "review", title: "Review" },
    { name: "features", title: "Features" },
    { name: "faq", title: "FAQ" },
    { name: "contactForm", title: "Contact" },
    { name: "cta", title: "CTA" },
  ],
  fields: [
    defineField({
      ...languageField,
      group: "general",
    }),
    defineField({
      name: "hero",
      title: "Hero section",
      type: "object",
      group: "hero",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required().min(10).max(100),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
          validation: (Rule) => Rule.required().min(5).max(150),
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
    }),
    defineField({
      name: "brands",
      title: "Brands section",
      type: "object",
      group: "brands",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required().min(10).max(100),
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
    }),
    defineField({
      name: "metrics",
      title: "Metrics section",
      type: "array",
      group: "metrics",
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
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required().min(1).max(50),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "services",
      title: "Services section",
      type: "object",
      group: "services",
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
    }),
    defineField({
      name: "stats",
      title: "Stats section",
      type: "object",
      group: "stats",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required().min(10).max(100),
        }),
        defineField({
          name: "stats",
          title: "Stats",
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
    }),
    defineField({
      name: "steps",
      title: "Steps section",
      type: "object",
      group: "steps",
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
    }),
    defineField({
      name: "review",
      title: "Review section",
      type: "object",
      group: "review",
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
    }),
    defineField({
      name: "features",
      title: "Features section",
      type: "object",
      group: "features",
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
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: "faq",
      title: "FAQ section",
      type: "object",
      group: "faq",
      fields: [
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
                  }
                },
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "contactForm",
      title: "Contact form section",
      type: "object",
      group: "contactForm",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required().min(10).max(100),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "string",
          validation: (Rule) => Rule.required().min(5).max(150),
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "name",
          title: "Name",
          type: "string",
          validation: (Rule) => Rule.required().min(2).max(50),
        }),
        defineField({
          name: "email",
          title: "Email",
          type: "string",
          validation: (Rule) => Rule.required().email(),
        }),
        defineField({
          name: "phone",
          title: "Phone",
          type: "string",
          validation: (Rule) => Rule.required().min(10).max(20),
        }),
      ],
    }),
    defineField({
      name: "cta",
      title: "Homepage CTA section",
      type: "object",
      group: "cta",
      fields: [
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
    }),
  ],
  preview: {
    select: {
      language: "language",
    },
    prepare(selection) {
      return {
        title: "Homepage",
        subtitle: selection.language ? `Language: ${selection.language}` : "",
      }
    },
  },
})
