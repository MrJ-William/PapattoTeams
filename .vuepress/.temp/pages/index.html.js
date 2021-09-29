export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/image/app_icon.png",
    "heroAlt": "papattologo",
    "heroText": "PapattoApp",
    "tagline": "一度来たコーデは忘れない",
    "footer": "© 2021 Papatto."
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "コンセプト",
      "slug": "コンセプト",
      "children": []
    }
  ],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1632932747000,
    "contributors": [
      {
        "name": "Kazunari-h",
        "email": "kazunario456@gmail.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
