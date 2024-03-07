# Comic-Verse

Comic-Verse is a web application that generates 10-panel comic strips based on user input text. This project uses React for the frontend and integrates with a custom AI model to create the comic strips.

## Getting Started

To get started with Comic-Verse, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/comic-verse.git
   ```

2. Install dependencies:
   ```bash
   cd comic-verse
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

- The homepage displays some example comic strips and a button to generate your own comic.
- Click on the "Generate" button to input text and create a custom comic strip.
- Separate different queries by using the "&" symbol.
- Drag and edit the thought box at the bottom of the generated image.
- Click on the top right of the speech box to change the content (only for mobile devices).

## Technologies Used

- React
- React Router
- Hugging Face API
- Dom-to-Image
- FileSaver

## Folder Structure

- `src/components/Body`: Contains the homepage content.
- `src/components/GenerationPage`: Contains the generation page content.
- `src/images`: Contains images used in the application.
- `src/App.js`: Main component that sets up the routing.
- `src/index.js`: Entry point of the application.

## Contributing

We welcome contributions to Comic-Verse! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

Feel free to explore and enjoy creating your own comic strips with Comic-Verse! If you have any questions or feedback, please don't hesitate to reach out. Thank you for using Comic-Verse! 🚀
