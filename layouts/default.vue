<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-tile v-for="(item, i) in $store.state.genres" :to="item.to" :key="i" router exact>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.name" class="text-xs-center"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
      <v-bottom-nav absolute :value="true" color="white">
        <v-btn color="teal" flat value="inspire">
          <span>Recent</span>
          <v-icon>history</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="favorites">
          <span>Favorites</span>
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="nearby">
          <span>Nearby</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      title: "Best rated movies all time"
    };
  }
};
</script>
