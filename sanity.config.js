"use client";

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
      schemaTypes: ["home-hero", "home-faq"],
      languageField: `language`,
      weakReferences: true,
      bulkPublish: true,
      hideLanguageFilter: true,
    }),
  ],
});
