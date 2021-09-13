<template>
  <v-row>
    <v-col class="logo col-md-3">
      <img
        src=""
        alt=""
      >
    </v-col>
    <v-col>
      <ul class="d-flex justify-content-around">
        <li
          v-for="m in menus"
          :key="m.title"
        >
          {{ m.title }}
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          title: "News",
          url: '/news',
        },
        {
          title: "World",
          url: '/world',
        },
        {
          title: "Cast & Staff",
          url: '/casts',
        },
        {
          title: "Event",
          url: '/event',
        },
        {
          title: "Media",
          url: '/media',
        },
        {
          title: "Goods",
          url: '/merch',
        },
        {
          title: "Guidelines",
          url: '/guide',
        },
      ]
    }
  },
}
</script>
