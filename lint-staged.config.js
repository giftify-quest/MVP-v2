// export default {
//   "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
//   "*/**/*.{js,jsx,ts,tsx}": ["npm run format", "npm run lint"],
//   "*/**/*.{json,css,scss, md}": ["npm run format"],
// };

module.exports = {
  // this will check Typescript files
  "**/*.(ts|tsx)": () => "tsc -p tsconfig.json --noEmit",

  // This will lint and format TypeScript and                                             //JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    `npm run lint ${filenames.join(" ")}`,
    `npm run format ${filenames.join(" ")}`,
  ],

  // this will Format MarkDown and JSON
  "**/*.(md|json|css|scss)": (filenames) =>
    `npm run format ${filenames.join(" ")}`,
};
