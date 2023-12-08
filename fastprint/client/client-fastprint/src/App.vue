<script>
import { computed } from "vue";

const getPageName = computed(() => $route.name);
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style></style>
