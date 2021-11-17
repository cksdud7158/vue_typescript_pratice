import Vue from "vue";
import firebase from "firebase/compat";

declare module "vue/types/vue" {
  interface Vue {
    $firebase: typeof firebase;
  }
}
