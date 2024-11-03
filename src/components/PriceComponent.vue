<template>
  <div class="flex flex-col text-right items-end">
    <span class="text-[#158d1d] font-[600] text-[35px] leading-[57px] text-right">{{
      minPrice.toLocaleString("en-US", { currency: "USD", style: "currency" })
    }}</span>
    <span>Per night</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  rooms: any[];
}>();

const minPrice = Math.min(
  ...props.rooms.map((room) => room.rates.map((rate: any) => rate.baseRate)).flat()
);
</script>

<style></style>
