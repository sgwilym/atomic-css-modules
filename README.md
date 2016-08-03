# atomic-css-modules

![Screenshot](example.png)

To run this demo, simply run `npm start`

Everything is in `src/`:

- `styles/` contains fundamental styles: commonly used colors, typography, layout.
- `atoms/` contains atom components, e.g. `Button`
- `molecules` contains a `SearchBox`, comprised of all atoms
- Each component has its own css file that composes styles from the foundational styles in an atomic fashion.

CSS modules makes it possible to combine groupings of atomic styles into single objects which are then very easily applied on components, and lend themselves very well to optimisation (obfuscation, minification, even tree-shaking).
