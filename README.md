# Markdown Previewer

The Markdown Previewer allows users to write and preview GitHub-flavored markdown in real-time.

## Features

- **Markdown Input**: Write markdown syntax in a textarea.
- **Live Preview**: See a real-time preview of the rendered markdown.
- **GitHub-Flavored Markdown**: Supports standard markdown syntax with features like headings, inline code, code blocks, links, lists, blockquotes, images, and bold text.
- **Responsive Design**: Works well on both desktop and mobile devices.

## Technologies Used

- **React**: For building the user interface.
- **Marked.js**: For parsing markdown and converting it to HTML.
- **Bootstrap**: For layout and styling.

## Getting Started

### Prerequisites

- **Node.js**: Install from [Node.js](https://nodejs.org/).
- **npm or yarn**: Comes with Node.js or can be installed separately.

### Installation

1. Clone the repository: 
   ```bash 
   git clone https://github.com/abelgideon/Markdown-Previewer.git
   ```

2. Navigate to the project directory:
   ```bash  
   cd markdown-previewer
   ```

3. Install dependencies:
   ```bash  
   npm install
   ```

4. Start the development server:
   ```bash  
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. **Local Usage**:
   - Enter markdown syntax in the "Editor" textarea.
   - View the rendered output in the "Preview" section below the editor.

2. **GitHub Pages Deployment**:  
   Alternatively, you can access the live site [here](https://abelgideon.github.io/Markdown-Previewer/).

## File Structure

- `App.js`: The main React component containing the app logic.
- `index.js`: Entry point for rendering the React app.
- `styles.css`: Styling for the application.

## Project Highlights

### Real-Time Markdown Rendering

The app uses **Marked.js** to convert markdown input into HTML in real-time. Users can instantly see how their markdown will be rendered.

### User-Friendly Interface

The app includes a clean and intuitive UI with:
- A large textarea for entering markdown.
- A preview area that dynamically updates as markdown is typed.

### Responsive Design

Built with Bootstrap, the app ensures a smooth experience on devices of all sizes.

## Contributing

Contributions are welcome! Fork the repository and submit a Pull Request with your improvements.
