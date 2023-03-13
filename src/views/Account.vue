<template>
  <div :style="{ backgroundImage: `url(${banner})` }" class="banner"></div>
  <BsCard style="margin: 10px auto; margin-top: -20px">
    <BsAvatar :user_name="user_name" />
  </BsCard>

  <BsCard style="margin: 10px auto">
    <template v-slot:title>我的订单</template>
    <template v-slot:subTitle>
      <span @click="handleMore">查看更多>></span>
    </template>
    <div class="orders flex-row-center-around">
      <div class="item flex-column-center">
        <v-icon>mdi-order-bool-descending</v-icon>
        <span>商品订单</span>
      </div>
      <div class="item flex-column-center">
        <v-icon>mdi-gift-open-outline</v-icon>
        <span>礼品订单</span>
      </div>
      <div class="item flex-column-center">
        <v-icon>mdi-human-dolly</v-icon>
        <span>退款/售后</span>
      </div>
    </div>
  </BsCard>

  <BsCard style="margin: 10px auto">
    <template v-slot:title>我的功能</template>
    <div class="orders flex-row-center-start">
      <div class="item flex-column-center">
        <v-icon style="color: aquamarine">mdi-map-marker</v-icon>
        <span>地址管理</span>
      </div>
      <div class="item flex-column-center">
        <v-icon style="color: rgb(250, 186, 12)">mdi-face-agent</v-icon>
        <span>我的客服</span>
      </div>
    </div>
  </BsCard>

  <BsCard style="margin: 10px auto">
    <template v-slot:title>关于售前售后服务</template>
    <ul class="tips">
      <li><v-icon>mdi-face-agent</v-icon>可与小程序客服实时聊天或电话咨询</li>
      <li><v-icon>mdi-clock-time-five-outline</v-icon>小程序客服工作时间为: 8:30~20:30</li>
      <li><v-icon>mdi-map-marker</v-icon>制作完毕情况下暂不支持退款</li>
      <li><v-icon>mdi-currency-usd</v-icon>可以提前7-15天预订重大节假日不支持定时配</li>
    </ul>
  </BsCard>
</template>
<script lang="ts">
export default {
  name: 'BsAccount',
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import banner from '@/assets/images/banner1.jpg';
import BsAvatar from '@/components/Avatar.vue';
import BsCard from '@/components/Card.vue';

let user_name = ref('');
setTimeout(() => {
  user_name.value = '一个小可爱';
}, 1000);

const handleMore = () => {
  // todo
  console.log('handleMore');
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 30vh;
  background-position: center;
  background-size: cover;
}
.orders {
  .item {
    width: 20vw;
    height: 100px;
    padding-top: 10px;
    .mdi {
      font-size: 45px;
      margin-bottom: 5px;
    }
  }
}

.tips {
  text-align: left;
  text-indent: 16px;
  li {
    list-style-type: none;
    margin-bottom: 8px;
    color: #a8a8a8;
    .mdi {
      margin-right: 8px;
    }
  }
}
</style>
