<template>
  <v-app>
    <default-bar />
    <default-drawer />
    <v-fade-transition>
      <default-view />
    </v-fade-transition>
  </v-app>
</template>

<script>

export default {
  name: 'DefaultLayout',
  components: {
    DefaultBar: () => System.import(/* webpackChunkName: "views-default" */'./AppBar.vue'),
    DefaultDrawer: () => System.import(/* webpackChunkName: "views-default" */'./NavDrawer.vue'),
    DefaultView: () => System.import(/* webpackChunkName: "views-default" */'./View.vue')
  },
  data () {
    return {

    }
  },
}
</script>
