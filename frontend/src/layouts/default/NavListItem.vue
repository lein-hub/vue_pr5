<template>
  <v-list-item
    link
    :to="item.to"
    active-class="primary white--text"
    class="py-1"
    @click="drawer = !drawer"
  >
    <v-list-item-content>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'DefaultListItem',
  props: {
    item:  {
      type: Object,
      default: () => ({}),
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.getters['app/getDrawer']
      },
      set(value) {
        return this.$store.dispatch('app/toggleDrawer', value)
      }
    }
  }
}
</script>
