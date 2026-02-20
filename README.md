# Badjavii's Personal Web 

This is my personal corner of the web. A modular, dynamic static platform designed to showcase my journey through projects, articles, and blog posts. By leveraging Markdown, I decouple content from structure, ensuring seamless updates without re-writing HTML.

## Features

- **Markdown-Driven Engine**: Content is managed via `.md` files parsed in real-time by [Marked.js](https://marked.js.org/).
- **Modular Page Architecture**: Specific viewers for Blog, Projects, and Articles, allowing unique layouts and scoped styles for different content types.
- **Custom UI/UX**: A 100% original interface designed in **Figma**, focusing on a clean, developer-centric aesthetic.
- **Native Dark Mode**: Built-in theme switching using CSS Variables for an optimized reading experience.

## Dynamic Routing & Navigation

To overcome the limitations of static hosting on GitHub Pages, this project implements a **Custom 404 Redirect System**:

- **Seamless URLs**: Direct access to content via clean paths (e.g., `/blog/my-post`) managed by a specialized `404.html` router.
- **SPA Experience**: Using the **Vanilla JS History API**, we manipulate the URL in the browser to maintain a Single Page Application feel while fetching content from `src/assets/docs/`.
- **Content Viewers**: Dedicated `viewer.html` files act as templates to inject parsed Markdown, ensuring a modular and maintainable codebase.

## Tech Stack & Tools

- **Core**: HTML5, CSS3 (Custom Properties), and Vanilla JavaScript.
- **Parsing**: Marked.js for dynamic MD-to-HTML rendering.
- **Design**: UI/UX authored in Figma.
- **Deployment**: Automated via GitHub Pages.

## Workflow

I follow a **Gitflow** inspired branching model to maintain professional standards:

- **Main**: Stable, production-ready code.
- **Develop**: Active integration branch for upcoming features.

## License

This project is licensed under the **GPL-3.0 License**. See the [LICENSE](LICENSE) file for more details.

## Credits

Proudly designed and developed by **Badjavii**.
