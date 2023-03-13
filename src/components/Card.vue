<template>
  <section class="card-content card-radius">
    <header v-if="slotTitle" class="title flex-row-center-between">
      <div class="title-left" v-if="slotTitle">
        <slot name="title"></slot>
      </div>
      <div class="title-right" v-if="slotSubTitle">
        <slot name="subTitle"></slot>
      </div>
    </header>
    <slot></slot>
  </section>
</template>

<script lang="ts">
export default {
  name: 'BsCard',
};
</script>

<script setup lang="ts">
import { useSlots } from 'vue';

const slotTitle = !!useSlots().title;
const slotSubTitle = !!useSlots().subTitle;
</script>

<style lang="scss" scoped>
.card-content {
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .title {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-indent: 16px;
    .title-left {
      color: #333;
      font-weight: 700;
      text-align: left;
    }
    .title-right {
      color: #6e6e6e;
      padding-right: 10px;
    }
  }
}
</style>
