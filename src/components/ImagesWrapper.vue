<template>
  <div class="smaller:hidden w-full relative">
    <img :src="images[imageIndex].fullsize_url" class="object-cover h-[225px] w-full" />
    <div class="absolute flex w-full justify-between top-1/2 -translate-y-1/2 px-2">
      <button
        @click="imageIndex--"
        class="p-2 py-1 bg-gray-200/75 leading-none rounded-md text-[20px]"
      >
        {{ "<" }}
      </button>
      <button
        @click="imageIndex++"
        class="p-2 py-1 bg-gray-200/75 leading-none rounded-md text-[20px]"
      >
        {{ ">" }}
      </button>
    </div>
  </div>
  <div class="hidden smaller:block container">
    <div class="grid grid-cols-4 gap-[5px] max-h-[367px] smaller:mt-[24px]">
      <img
        :src="images[0].fullsize_url"
        class="col-span-2 row-span-2 object-cover h-[367px] w-full \"
      />
      <img
        v-for="img in images.slice(1, 5)"
        :src="img.fullsize_url"
        :key="img.fullsize_url"
        class="h-[181px] w-full object-cover"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{
  images: any[];
}>();

const imageIndex = ref(0);

onMounted(() => {});
</script>

<style></style>
