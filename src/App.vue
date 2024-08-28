<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <component :is="$route.meta.layout">
    <RouterView />
  </component>
</template>

<style scoped>
</style>
