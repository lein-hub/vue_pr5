<template>
  <v-app-bar
    app
    color="primary"
    dark
    :height="height"
  >
    <div>
      <v-img
        class="shrink"
        :src="require('../../assets/logo.png')"
        :width="$vuetify.breakpoint.smAndDown ? 40 : 80"
      />
    </div>
    <v-spacer />
    <wide-nav-list
      v-if="!$vuetify.breakpoint.smAndDown"
      :items="items"
    />
    <v-app-bar-nav-icon
      v-else
      @click="drawer = !drawer"
    />
  </v-app-bar>
</template>
<script>
import {mapState} from 'vuex'

export default {
  name: 'DefaultBar',
  components: {
    WideNavList: () => System.import(/* webpackChunkName: "views-default" */'./WideList.vue'),
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
    },
    height() {
      if(!this.$vuetify.breakpoint.smAndDown) {
        return 115;
      }
      return null;
    }
  }
}
</script>
<style lang="">

</style>
