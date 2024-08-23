const projects = [
  {
    name: "Image API",
    imageSource: "/patchy_api_cover.png",
    tags: ["react", "next.js", "exercise", "api"],
    deployment: "https://patchy-api.vercel.app",
    github: "https://github.com/anapecic/patchy-api",
    description:
      "This is a small app that generates a random cute image of my dog and also provides a JSON with the images.",
  },
  {
    name: "Art Gallery",
    imageSource: "/art-gallery.png",
    tags: ["react", "next.js", "exercise", "api"],
    deployment: "https://art-gallery-app-seven.vercel.app/",
    github: "https://github.com/anapecic/art-gallery-app",
    description:
      "Here I am fetching art from an API and adding some basic functionality to favorite items.",
  },
  {
    name: "Color Theme Creator",
    imageSource: "/colorpalettes.jpg",
    tags: ["react", "exercise"],
    deployment: "https://color-theme-creator.vercel.app/",
    github: "https://github.com/anapecic/color-theme-creator",
    description:
      "I wrote the code for this to exercise handling different data types. The themes were added in the end and required major refactoring which was also done as an exercise.",
  },
];

export default function getAllProjects() {
  return projects;
}
