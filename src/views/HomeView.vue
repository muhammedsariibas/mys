<script lang="ts">
import { useMenuStore } from "@/stores/menuStore";
import CustomButton from "@/components/CustomButton.vue";
import Logo from "@/components/Logo.vue";
import router from "@/router";
export default {
  components: { CustomButton, Logo },
  data: function () {
    return {
      drawer: <boolean>false,
      icons: ["mdi-twitter", "mdi-linkedin", "mdi-github", "mdi-instagram"],
    };
  },
  mounted() {},
  methods: {
    routePage(path: string) {
      console.log(path);
      router.push(path);
    },
  },
  setup() {
    const menuStore = useMenuStore();
    const menu = menuStore.getMenu;

    return { menu };
  },
};
</script>

<template>
  <v-layout>
    <v-main>
      <v-app-bar height="90">
        <v-col
          offset="1"
          cols="10"
          sm="10"
          md="10"
          class="d-flex p-0 align-center"
        >
          <v-app-bar-title> <logo></logo> </v-app-bar-title>
          <v-spacer></v-spacer>
          <span class="hidden-md-and-up">
            <v-btn icon class="d-flex justify-center align-center">
              <v-icon @click.stop="drawer = !drawer">mdi-dots-vertical</v-icon>
            </v-btn>
          </span>
          <v-toolbar-items class="hidden-sm-and-down">
            <custom-button
              v-for="(item, index) in menu"
              :key="index"
              :text="item.name"
              @on-click-button="routePage(item.id)"
            ></custom-button>
          </v-toolbar-items>
        </v-col>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" persistent width="500" id="drawer">
        <v-col id="drawer-body">
          <v-icon id="close-drawer-icon" @click="drawer = !drawer"
            >mdi-close</v-icon
          >
          <v-list>
            <v-list-item
              id="list-item"
              v-for="(item, index) in menu"
              :key="index"
              >{{ item.name }}</v-list-item
            >
          </v-list>
        </v-col>
      </v-navigation-drawer>
      <v-col
        style="background-color: rgb(var(--v-theme-surface-light));"
        class="px-0 py-0"
      >
        <slot />
      </v-col>
      <v-footer class="p-0 bg-black">
        <v-col class="w-100 d-flex flex-wrap justify-space-between p-0">
          <v-col
            cols="12"
            sm="4"
            md="4"
            class="p-0 d-flex justify-center align-center footer-text"
          >
            developed by Muhammed yusuf sarıbaş
          </v-col>

          <v-col
            cols="12"
            sm="4"
            md="4"
            class="p-0 d-flex justify-center align-center footer-text"
          >
            2024 — MYS
          </v-col>

          <v-col
            cols="12"
            sm="4"
            md="4"
            class="p-0 d-flex justify-center align-center footer-text"
          >
            <v-btn
              v-for="icon in icons"
              :key="icon"
              :icon="icon"
              size="small"
              variant="plain"
            ></v-btn>
          </v-col>
        </v-col>
      </v-footer>
    </v-main>
  </v-layout>
</template>


<style scoped>
#drawer {
  background-color: #000000dc;

  display: flex;
  align-items: center;
}

#drawer-body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#close-drawer-icon {
  position: fixed;
  top: 20px;
  right: 20px;
  color: white;
  font-size: xx-large;
}

#list-item {
  color: white;
  font-size: x-large;
}

#app-bar-title {
  font-weight: bold !important;
  font-size: xx-large;
}

.footer {
  height: 60px;
  background-color: black;
}

.p-0 {
  padding: 0;
}

@media screen and (min-width: 1024px) {
  .footer-text {
    font-size: 15px;
  }
}
@media screen and (max-width: 1024px) {
  .footer-text {
    font-size: 15px;
    margin-top: 10px;
  }
}
</style>
