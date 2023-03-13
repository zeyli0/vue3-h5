<template>
  <div class="avatar-content flex-row-center-start">
    <img :src="avatar" alt="头像" />
    <div class="user-name">
      <span>{{ props.user_name }}</span>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BsAvatar',
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import def_user_header from '@/assets/images/def_user_header.png';

const props = defineProps<{
  user_avatar?: string;
  user_name?: string;
}>();

let avatar: Ref<string> = ref('');

avatar.value = props.user_avatar ?? def_user_header;
</script>

<style lang="scss" scoped>
.avatar-content {
  width: 90vw;
  height: 95px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
  }
  .user-name {
    margin: 0 10px;
  }
}
</style>
