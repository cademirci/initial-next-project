# Initial Next.js Project

A basic Next.js 15 app router project with pre-built template components.

While currently presented as a professionally prepared template, I plan to commit additional features such as authentication, database integration, i18n, etc.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/initial-next-project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd initial-next-project
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Development Server

To start the development server, run the following command:
```bash
npm run dev
```
or
```bash
yarn dev
```
Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the application running.

### Building for Production

To build the project for production, use the following command:
```bash
npm run build
```
or
```bash
yarn build
```
This will create an optimized production build in the `.next` directory.

### Deployment

You can deploy the project to any hosting service that supports Node.js. For example, you can use Vercel, which is the recommended platform for Next.js applications.

## Project Structure

The project structure (directories only) is as follows after set up:

```
.
public
src
  ├── app
  │   ├── [slug]
  │   ├── blog
  │   ├── components
  │   ├── lib
  │   ├── login
  │   ├── signup
  ├── constants
  ├── content
  ├── global-styles
```

## Implemented Features

- Automatic dark/light theme (adjusted based on the OS) and globally available dark and light color themes
- Responsive navigation bar that collapses into a hamburger menu on mobile sizes and equally responsive footer
- Scalable and flexible social media bar, utilizing the `react-icons` library
- HTML element selectors restructured according to design principles
- Pre-designed login and signup pages: Auth and DB is not ready, going to be implemented.
- Blog structure 

## Blog Content Structure

The `content` directory is designed to store Markdown files representing blog posts. These files are used to generate a blog system with the following features:

### 1. Main Blog Page
The main blog page dynamically lists all available blog posts by reading the Markdown files in the `content` directory. Each post's metadata (e.g., title, description, date) is extracted from the front matter of the Markdown files for display.

### 2. Individual Post Pages
Each blog post is accessible via a dynamic route based on its slug. This is achieved using the `[slug]` directory under `app`. The slug for each post is derived from the filename of the corresponding Markdown file in the `content` directory.

### Workflow

- **Adding a New Post**:  
  To create a new blog post, simply add a Markdown file to the `content` directory. Ensure the file includes proper front matter for metadata, e.g.:

  ```markdown
  ---
  title: "Your Blog Post Title"
  description: "A brief description of your post."
  date: "2025-01-23"
  slug: "your-blog-post-title"
  ---

  Write your post content here...

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
