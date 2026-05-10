# Bellabona Project

## Overview
Bellabona is a content management project utilizing Sanity Studio for managing and structuring content. This project is designed to provide a flexible and user-friendly interface for content creators.

## Project Structure
The project consists of the following key files and directories:

- **sanity/**
  - **sanity.config.js**: Configuration file for Sanity Studio, including project ID, dataset, schema, and plugins.
  - **env.js**: Exports environment variables such as `apiVersion`, `dataset`, and `projectId`.
  - **structure.js**: Defines the structure of the Sanity Studio, organizing content types.
  - **schemaTypes/**
    - **index.js**: Entry point for schema types, exporting all schema definitions.
    - **homepageHero.js**: Defines the schema for the homepage hero section, including fields like title, subtitle, image, and call-to-action button.

- **package.json**: Configuration file for npm, listing dependencies and scripts for the project.

## Getting Started
To get started with the Bellabona project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Start the Sanity Studio:
   ```
   sanity start
   ```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.