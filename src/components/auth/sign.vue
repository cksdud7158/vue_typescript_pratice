<template>
  <v-form @submit.prevent="submit">
    <v-card>
      <v-card-title>이메일 로그인</v-card-title>
      <v-card-text>
        <v-text-field v-model="email" label="email"> </v-text-field
      ></v-card-text>
      <v-card-actions> <v-btn type="submit">submit </v-btn></v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { auth } from "@/plugins/firebase";

@Component<authSign>({
  created() {
    this.signIn();
  },
})
export default class authSign extends Vue {
  email = "";

  submit() {
    console.log("submit click");

    const actionCodeSettings = {
      url: "http://localhost:8080/finishSignup",
      // This must be true.
      handleCodeInApp: true,
    };

    auth
      .sendSignInLinkToEmail(this.email, actionCodeSettings)
      .then(() => {
        localStorage.setItem("emailForSignIn", this.email);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  signIn() {
    const email = localStorage.getItem("emailForSignIn");
    if (!email) return;
    this.email = email;
    if (!auth.isSignInWithEmailLink(location.href)) return;
    auth
      .signInWithEmailLink(this.email, location.href)
      .then((result) => {
        console.log(result);
        localStorage.removeItem("emailForSignIn");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
}
</script>

<style scoped></style>
