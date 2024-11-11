<template>
  <h1 class="text-[26px] font-[600] pt-[35px] pb-[20px]">Choose Your Room</h1>
  <div class="flex flex-col gap-[20px]">
    <div
      v-for="room in sorted"
      :key="room.code"
      class="border h-[180px] rounded-[12px] p-[10px]"
      style="display: grid; grid-template-columns: 47% 7% 29% 17%"
    >
      <div>
        <img
          :src="
            room?.name ? '/logos/logo.svg' : '/logos/' + room?.externalProvider + '.svg'
          "
          class="max-h-[50px] w-[200px]"
        />
        {{ room?.name || room?.roomName }}
      </div>

      <div class="hidden smaller:grid grid-cols-2 h-min overflow-hidden max-h-[160px]">
        <img
          v-for="(travel_num, index) in Array.from({ length: nOfTravelers })"
          :key="index"
          src="/logos/user_solid.svg"
          class="h-[16px] w-[16px]"
        />
      </div>
      <div class="smaller:hidden" />
      <div></div>
      <div class="flex flex-col justify-between">
        <div class="flex flex-col text-right">
          <span class="">
            {{
              (findLowestRateForRoom(room)?.baseRate * roomsNum).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              })
            }}
          </span>
          <span class>
            {{
              (findLowestRateForRoom(room)?.chargeAmount * roomsNum).toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
                }
              )
            }}
          </span>
          <span class>
            {{ nOfNights }} Night{{ nOfNights > 1 ? "s" : "" }} incl. T&F
          </span>
        </div>
        <button class="bg-green-button text-white text-[14px] font-[600] p-2 rounded-md">
          Reserve
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAllRoomOffers, findLowestRateForRoom, sortRooms } from "./utils";

const { rooms, externalLinks, roomsNum, nOfNights, nOfTravelers } = defineProps<{
  rooms: any[];
  roomsNum: number;
  externalLinks: any[];
  nOfNights: number;
  nOfTravelers: number;
}>();

const allRooms = getAllRoomOffers(rooms, externalLinks);

const sorted = sortRooms(allRooms);
</script>

<style></style>
