<template>
      <v-toolbar color="teal lighten-3" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Bitfumes</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Home</v-btn>
          <v-btn flat>About</v-btn>
          <v-btn flat>Contact</v-btn>
        </v-toolbar-items>
    </v-toolbar>

</template>
 

    <script>

export default {
  name: 'app-toolbar',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        navItem:['Home','Products','Analytics']
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      navItem:['Home','Products','Analytics']
    }
  }
}
</script>