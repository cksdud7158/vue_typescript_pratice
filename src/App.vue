<template>
  <layout-normal v-if="isAuth" />
  <layout-auth v-else />
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import layoutNormal from "@/components/layouts/layoutNormal.vue";
import LayoutAuth from "@/components/layouts/auth.vue";

@Component({
  components: {
    layoutNormal,
    LayoutAuth,
  },
})
export default class App extends Vue {
  isAuth = false;
}
</script>
<style lang="scss"></style>
