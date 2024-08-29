# Intro to Vue.js

### To Do
* [x] What is Vue.js?
* [x] Installation
* [x] The Default App
* [x] Component Basics
* [x] Conditional Rendering and Looping
* [x] Event Handling
* [x] Props
* [x] Slots (`props.children`)
* [x] State
* [x] Bound Props
* [x] Lifecycle Hooks

### Vue.js
* The [official docs](https://vuejs.org/) describe Vue as being Approachable, Versatile, and Performant
* Approachable
  * It's just HTML, CSS, and JS (can be used effectively with TypeScript and SASS)
  * Minimal API to learn
* Versatile
  * Vue is a "progressive" web framework meaning that it can comprise a small part of an application or be a fully featured Vue web app, or anything in between
* Performant
  * Smaller file sizes than Angular or React ([source](https://gist.github.com/Restuta/cda69e50a853aa64912d))
  * Small file size means faster loading in browsers
* Component-based framework (similar to React)
* Reactive: When the data (state) changes, the view re-renders

### Installation
* Use `vite` directly or use the `vue` builder tool
* `vue` gives more specific Vue options while `vite` is more generic

```bash
# using vite
npm create vite@latest app-name

# using vue
npm create vue@latest app-name
```
