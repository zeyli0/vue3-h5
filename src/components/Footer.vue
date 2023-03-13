<template>
  <v-bottom-navigation grow v-model="currentValue">
    <v-btn
      color="teal"
      v-for="(item, index) in footerList"
      :key="item['path'] + index"
      :value="(item as any).path"
      @click="handleChange(item, $event)"
    >
      <v-icon>{{ item['meta'] && item['meta']['icon'] }}</v-icon>
      {{ item['meta'] && item['meta']['title'] }}
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
export default {
  name: 'BsFooter',
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const routes = router.options.routes;

const footerList = ref([]);

// type ChildCtx = InstanceType<typeof Child>;

const func = (menus: Readonly<RouteRecordRaw[]>) => {
  menus.forEach((item: RouteRecordRaw) => {
    if (item.meta?.showInFooter) {
      (footerList.value as Array<RouteRecordRaw>).push(item);
    }
    if (item.children && item.children.length > 0) {
      func(item.children);
    }
  });
};
func(routes);

let currentValue = ref(route.path);

const handleChange = (val: RouteRecordRaw, $event: any) => {
  router.push(val.path);
};
</script>
