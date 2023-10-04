// import VueResponsiveGridLayout from 'vue-ts-responsive-grid-layout';
import { GridItem, GridLayout } from 'vue-ts-responsive-grid-layout';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(GridItem);
  nuxtApp.vueApp.use(GridLayout);
});

// import grid from 'vue-ts-responsive-grid-layout';
// import '@/node_modules/vue-ts-responsive-grid-layout/dist/style.css';

// export default defineNuxtPlugin(() => {
//   return {
//     provide: {
//       grid,
//     },
//   };
// });
