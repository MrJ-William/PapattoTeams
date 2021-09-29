import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/kazunari/Develop/github.com/MrJ-William/PapattoTeams/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/kazunari/Develop/github.com/MrJ-William/PapattoTeams/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
