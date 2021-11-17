<template>
  <v-app>
    <v-main>
      <v-container class="">
        <auth-sign />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import authSign from "@/components/auth/sign.vue";

@Component({
  components: {
    authSign,
  },
})
export default class LayoutAuth extends Vue {
  async test() {
    const ref = this.$firebase.firestore().collection("test").doc("aaa");
    await ref.set({ a: 111 });
    const doc = await ref.get();
    console.log(doc.data());
  }
}
</script>

<style scoped></style>
