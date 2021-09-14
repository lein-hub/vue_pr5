<template>
  <div>
    <v-list-item
      class="py-1"
    >
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <default-drawer-list
      :items="item.items"
    />
  </div>
</template>

<script>
export default {
  name: 'DefaultListItem',
  components: {
    DefaultDrawerList: () => System.import(/* webpackChunkName: "views-default" */ './NavList')
  },
  props: {
    item:  {
      type: Object,
      default: () => ({}),
    }
  }
}
</script>
