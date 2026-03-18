# Truth or Dare - Spinning Bottle Game 🎭

A fun and interactive Truth or Dare spinning bottle game built with React!

## Features

✨ **Interactive Spinning Bottle Animation** - Smooth rotating bottle with realistic spin physics
🎯 **Player Selection** - Bottle randomly selects from 2-10 players positioned around a circle
❓ **Truth or Dare** - Players choose between truth questions or dares
🎲 **Extensive Challenge Library** - 25+ unique truth questions and 25+ exciting dares
📜 **Game History** - Track all challenges throughout the game
📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
🎨 **Beautiful UI** - Modern gradient design with smooth animations

## Installation

### Prerequisites

- Node.js (v12 or higher)
- npm (comes with Node.js)

### Setup Steps

1. **Navigate to the project directory:**

   ```bash
   cd truth-or-dare
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Add the bottle image:**
   - Place your `bottle.png` image in the `public` folder
   - Ensure it's a transparent PNG or any image format (PNG, JPG, etc.)

4. **Start the development server:**

   ```bash
   npm start
   ```

5. **Open in browser:**
   - The app will automatically open at `http://localhost:3000`

## How to Play

1. **Setup:** Enter the number of players (2-10)
2. **Name Players:** Give each player a custom name (optional - defaults provided)
3. **Start Game:** Click "Start Game"
4. **Spin:** Click "SPIN THE BOTTLE" to start the game
5. **Choose:** After the bottle stops, the selected player chooses TRUTH or DARE
6. **Complete:** The player sees their challenge and must complete it
7. **Next Round:** Click "Next Round" to continue playing

## Customization

### Add More Challenges

Edit `src/data/challenges.js`:

```javascript
export const truthChallenges = [
  "Your custom truth question here",
  // ... more questions
];

export const dareChallenges = [
  "Your custom dare here",
  // ... more dares
];
```

### Customize Colors

Edit the CSS files in `src/styles/`:

- Change gradient colors in the CSS
- Modify the primary color from `#667eea` to your preferred color

### Bottle Image Requirements

- Recommended size: 200x200px or larger
- Format: PNG (transparent background recommended), JPG, or other image formats
- Should be a vertical bottle shape (taller than it is wide)

## Project Structure

```
truth-or-dare/
├── public/
│   ├── index.html
│   └── bottle.png (add your bottle image here)
├── src/
│   ├── components/
│   │   ├── PlayerSetup.js
│   │   ├── SpinningBottle.js
│   │   └── TruthOrDareGame.js
│   ├── data/
│   │   └── challenges.js
│   ├── styles/
│   │   ├── PlayerSetup.css
│   │   ├── SpinningBottle.css
│   │   └── TruthOrDareGame.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs tests (if configured)

## Tips for Better Experience

- Use a larger screen (desktop/tablet) for easier bottle interaction
- Make sure player names are visible and readable
- Add fun and creative challenges to make the game more entertaining
- Test on mobile devices for responsive design

## Troubleshooting

### Bottle image not showing?

- Ensure `bottle.png` is in the `public` folder
- Check that the image path is correct
- Try different image formats (PNG, JPG)

### Bottle spinning animation not smooth?

- This is normal in some browsers; refresh the page
- Try using Chrome or Firefox for best performance

### Players not positioned correctly around circle?

- This is responsive - try different screen sizes
- On mobile, the circle may be smaller to fit the screen

## Technology Stack

- **React** - UI library
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Game logic

## Future Enhancements

- Add difficulty levels for challenges
- Multiplayer online support
- Custom challenge creation in-game
- Sound effects and background music
- Dark mode theme
- Export/share game results

## License

This project is open source and available for personal and educational use.

## Enjoy! 🎉

Have fun playing Truth or Dare with your friends and family!
# spin-the-bottle
