<template>
  <v-layout>
    <div class="layout-content">
      <router-view></router-view>
    </div>
    <BsFooter class="main-footer"></BsFooter>
  </v-layout>
</template>
<script lang="ts">
export default {
  name: 'BsLayout',
};
</script>

<script setup lang="ts">
import BsFooter from '@/components/Footer.vue';
const bgColor = '#f6f3f7';
</script>

<style lang="scss" scoped>
.v-layout {
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-color: v-bind(bgColor);
  .layout-content {
    height: calc(100vh - 56px);
    overflow: auto;
  }
}
</style>
