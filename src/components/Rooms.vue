<template>
  <h1 class="text-[26px] font-[600] pt-[35px]">Choose Your Room</h1>
  <div class="flex flex-col gap-[20px]">
    <div
      v-for="room in sorted"
      :key="room.code"
      class="border h-[180px] rounded-[12px]"
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

      <div><img src="/logos/user_solid.svg" class="h-[16px] w-[16px]" /></div>
      <div />
      <div>
        {{
          room?.baseRate.toLocaleString("en-US", { style: "currency", currency: "USD" })
        }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { rooms, externalLinks } = defineProps<{
  rooms: any[];
  externalLinks: any[];
}>();

const allRooms: any[] = [];

rooms.map((room) => {
  const updatedRoom = room;
  updatedRoom.baseRate = room.rates.reduce((min: number, rate: any) => {
    if (rate.baseRate < min) {
      return rate.baseRate;
    }
    return min;
  }, room.rates[0].baseRate);
  allRooms.push(updatedRoom);
});

Object.keys(externalLinks).forEach((key: string) => {
  const updatedLink = externalLinks[key];
  updatedLink.externalProvider = key;
  allRooms.push(updatedLink);
});

const sorted = allRooms.sort((a, b) => a.baseRate - b.baseRate);
</script>

<style></style>
