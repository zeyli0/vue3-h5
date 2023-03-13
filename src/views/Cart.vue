<template>
  <div class="cart-content">
    <ul>
      <li v-for="(item, index) in dataList" :key="item['id']! + index">
        <input type="checkbox" :name="item['id']" :id="item['id']" />
        <img :src="item['imgUrl']" alt="图片" />
        <div>
          {{ item['id']! }}----
          <div>{{ item['name'] }}</div>
          <div>
            <div>{{ item['price'] }}</div>
            <div>gg</div>
            <div>-[]+</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BsCart',
};
</script>

<script setup lang="ts">
import { ref } from 'vue';

interface dataPropType {
  id?: string;
  imgUrl?: string;
  price?: number;
  oldPrice?: number;
  name?: string;
}
const dataList = ref<dataPropType[]>();
const loadData = function () {
  setTimeout(() => {
    dataList.value = [
      {
        id: '1111',
        imgUrl: 'http://39.98.123.211:8300/images/cate-6.png',
        price: 199,
        oldPrice: 299,
        name: '',
      },
    ];
  }, 100);
};
loadData();
</script>

<style lang="scss" scoped>
.cart-content {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
