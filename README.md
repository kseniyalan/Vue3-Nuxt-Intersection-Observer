# Vue3 Nuxt Intersection Observer

The project is a web application based on Vue 3 and Nuxt 3 technologies. It is created as an example of the implementation of the Intersection Observer API for this stack.

See [Online Demo](https://kseniyalan.github.io/Vue3-Nuxt-Intersection-Observer/) here!

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Build and deploying to GitHub Pages

1. Add the following code to `nuxt.config.ts` file:
```
ssr: true,
app: {
  baseURL: '/Vue3-Nuxt-Intersection-Observer/',
  buildAssetsDir: 'assets',
}
```
2. Run the project build for GitHub Pages. Save the content of the created `.output` directory separately.
```
npx nuxt build --preset github_pages
```

3. Create an empty branch gh-pages. Place the contents of the `.output\public` folder into the branch.
```
git checkout --orphan gh-pages
```

4. Commit and push your changes.

5. That's it! The site will be available [here](https://kseniyalan.github.io/Vue3-Nuxt-Intersection-Observer/)!
