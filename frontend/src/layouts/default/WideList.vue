<template>
  <v-row justify="space-around">
    <v-menu
      v-for="(item) in items"
      :key="item.title"
      rounded="0"
      offset-y
      open-on-hover
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          color="secondary"
          class="white--text ma-5"
          v-bind="attrs"
          :to="item.to"
          v-on="on"
        >
          {{ item.title }}
        </v-btn>
      </template>

      <v-list v-if="item.items">
        <v-list-item
          v-for="innerItem in item.items"
          :key="innerItem.title"
          link
          :to="innerItem.to"
        >
          <v-list-item-title v-text="innerItem.title" />
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>

  <!-- <v-row justify="space-around">
    <v-menu
      v-for="([text, rounded], index) in btns"
      :key="text"
      :rounded="rounded"
      offset-y
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          :color="colors[index]"
          class="white--text ma-5"
          v-bind="attrs"
          v-on="on"
        >
          {{ text }} Radius
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="item in itemss"
          :key="item"
          link
        >
          <v-list-item-title v-text="item" />
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row> -->
</template>

<script>
export default {
  name: 'WideNavList',
  components: {
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  },
  data: () => ({
    btns: [
      ['Removed', '0'],
      ['Large', 'lg'],
      ['Custom', 'b-xl'],
    ],
    colors: ['deep-purple accent-4', 'error', 'teal darken-1'],
    itemss: [...Array(4)].map((_, i) => `Item ${i}`),
  }),
}
</script>
