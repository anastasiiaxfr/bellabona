export default {
  name: 'homepageHero',
  title: 'Homepage Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(100),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: Rule => Rule.required().min(5).max(150),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'ctaButtonText',
      title: 'Call to Action Button Text',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(50),
    },
    {
      name: 'ctaButtonLink',
      title: 'Call to Action Button Link',
      type: 'url',
      validation: Rule => Rule.required().uri({
        allowRelative: true,
      }),
    },
  ],
}