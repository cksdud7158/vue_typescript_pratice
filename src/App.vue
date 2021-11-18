<template>
  <!--  <layout-normal v-if="isAuth" />-->
  <!--  <layout-auth v-else />-->
  <v-app id="inspire">
    <v-main>
      <v-container>
        <layout-normal v-if="isAuth" />
        <layout-auth v-else />
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import layoutNormal from "@/components/layouts/layoutNormal.vue";
import LayoutAuth from "@/components/layouts/layoutAuth.vue";

@Component({
  components: {
    layoutNormal,
    LayoutAuth,
  },
})
export default class App extends Vue {
  isAuth = false;
  links = ["Dashboard", "Messages", "Profile", "Updates"];
}
</script>
<style lang="scss"></style>
