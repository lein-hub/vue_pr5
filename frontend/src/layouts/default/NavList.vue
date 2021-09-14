<template>
  <v-list
    expand
    dense
    nav
  >
    <!-- <v-list-item
      v-for="item in items"
      :key="item.title"
      link
    >
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item> -->

    <template
      v-for="(item, i) in items"
    >
      <default-list-group
        v-if="item.items"
        :key="`group-${i}`"
        :item="item"
      />
      <default-list-item
        v-else
        :key="`item-${i}`"
        :item="item"
      />
    </template>
  </v-list>
</template>

<script>
export default {
  name: 'DefaultDrawerList',
  components: {
    DefaultListItem: () => System.import(/* webpackChunkName: "views-default" */ './NavListItem'),
    DefaultListGroup: () => System.import(/* webpackChunkName: "views-default" */ './NavListGroup')
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  }
}
</script>
