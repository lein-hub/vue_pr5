<template>
  <v-expand-transition>
    <v-card
      v-show="drawer"
      id="navDrawer"
      v-bind="$attrs"
      width="auto"
      height="100%"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <!-- <default-drawer-header /> -->

      <v-divider />

      <!-- <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list> -->

      <wide-drawer-list :items="items" />
    </v-card>
  </v-expand-transition>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'WideDrawer',
  components: {
    // DefaultDrawerHeader: () => System.import(/* webpackChunkName: "views-default" */'./NavHeader.vue'),
    WideDrawerList: () => System.import(/* webpackChunkName: "views-default" */'./WideList.vue'),
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState('app', ['items']),
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
