// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        {
          src: "https://map.qq.com/api/gljs?v=1.exp&key=F76BZ-46ALF-FGFJC-JG4CY-WF3NQ-SJFYS&libraries=tools,service,drawing,geometry,autocomplete,convertor",
          type: "text/javascript",
          mode: "client",
        },
      ],
    },
  },
})
