/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import { documentInternationalization } from "@sanity/document-internationalization";
import { internationalizedArray } from "sanity-plugin-internationalized-array";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      supportedLanguages: [
        { id: "en", title: "English" },
        { id: "de", title: "German" },
      ],
      schemaTypes: [
        "home-brands",
        "home-contact-form",
        "home-cta",
        "home-faq",
        "home-features",
        "home-hero",
        "home-metrics",
        "home-review",
        "home-services",
        "home-stats",
        "home-steps",
      ],
      languageField: `language`,
      weakReferences: true,
      bulkPublish: true,
      hideLanguageFilter: true,
    }),
    internationalizedArray({
      languages: [
        { id: "en", title: "English" },
        { id: "de", title: "German" },
      ],

      defaultLanguages: ["en"],
      fieldTypes: ["string"],
      languageFilter: {
        documentTypes: ["internationalizedPost"],
      },
      select: {
        options: [
          { title: "Europe", languages: ["en", "de"] },
          { title: "Americas", languages: ["en"] },
        ],
      },
    }),
  ],
});
