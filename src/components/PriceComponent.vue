<template>
  <div class="flex flex-col text-right items-end">
    <span class="text-green-price font-[600] text-[35px] leading-[57px] text-right">{{
      Number(lowestRoom.baseRate).toLocaleString(undefined, {
        style: "currency",
        currency: "USD",
      })
    }}</span>
    <span>Per night</span>
  </div>
</template>

<script setup lang="ts">
import { getAllRoomOffers, findLowestRoom } from "./utils";

const { rooms, externalLinks } = defineProps<{
  rooms: any[];
  externalLinks: any;
}>();

const allRooms = getAllRoomOffers(rooms, externalLinks);

const lowestRoom = findLowestRoom(allRooms);
</script>

<style></style>
