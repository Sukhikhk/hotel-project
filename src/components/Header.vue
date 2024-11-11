<template>
  <div class="container flex justify-between items-center h-full">
    <a href="/"><img src="/logos/logo-white.svg" class="h-[27px]" /></a>
    <div class="flex gap-4 items-center">
      <button
        type="button"
        class="px-2 py-1 bg-white/20 rounded-lg text-[12px] text-white"
        @click="isCurrencyVisible = !isCurrencyVisible"
      >
        {{ selectedCurrency }}
      </button>
      <div
        v-if="isCurrencyVisible"
        class="fixed w-full h-full top-0 left-0 bg-white z-10"
      >
        <div
          class="relative h-[50px] bg-[#0068EF] text-white py-[8px] px-[10px] flex justify-center font-[600] items-center"
        >
          Currencies
          <button
            class="absolute right-2"
            @click="isCurrencyVisible = !isCurrencyVisible"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4"
                y1="4"
                x2="20"
                y2="20"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
              <line
                x1="20"
                y1="4"
                x2="4"
                y2="20"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        <div class="p-[16px]">
          <h4>Popular</h4>
          <ul class="flex flex-col bigger:flex-row gap-0">
            <li
              class="border-b cursor-pointer"
              @click="
                updateCurrency(currency);
                isCurrencyVisible = !isCurrencyVisible;
              "
              v-for="currency in currencies"
            >
              <div class="flex gap-5 px-4 py-3">
                <span class="text-primary text-[14px]">{{ currency }}</span
                ><span class="text-black text-[14px]">{{ currencyList[currency] }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        v-if="isMenuVisible"
        class="absolute top-[100%] left-0 w-full bg-white flex flex-col z-10"
      >
        <a
          v-for="{ name, img_name } in MENU"
          class="py-4 px-[10px] flex gap-3 items-center"
        >
          <img :src="'/menu/' + img_name + '.svg'" class="h-[18px] w-[18px]" />
          <span class="text-black">{{ name }}</span>
        </a>
      </div>
      <div>
        <button type="button" @click="isMenuVisible = !isMenuVisible">
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- First line (100% width) -->
            <rect x="0" y="0" width="20" height="2.5" rx="1" ry="1" round fill="white" />
            <!-- Second line (75% width) -->
            <rect x="0" y="6" width="15" height="2.5" rx="1" ry="1" fill="white" />
            <!-- Third line (50% width) -->
            <rect x="0" y="12" width="10" height="2.5" rx="1" ry="1" fill="white" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import currencyList from "@/assets/currencyList.json";

const { roomData } = defineProps<{
  roomData: any;
  selectedCurrency: any;
  updateCurrency: any;
}>();

const currencies = [
  ...new Set(
    roomData.flatMap((room: any) =>
      room.rates.flatMap((rate: any) => Object.keys(rate.displayCurrency))
    )
  ),
];

const MENU = [
  {
    name: "Log In",
    img_name: "login",
  },
  {
    name: "Sign Up",
    img_name: "sign-up",
  },
  {
    name: "Find Bookings",
    img_name: "find",
  },
  {
    name: "Support Portal",
    img_name: "support",
  },
  {
    name: "1-844-738-0008",
    img_name: "call",
  },
];

const isCurrencyVisible = ref(false);
const isMenuVisible = ref(false);

onMounted(() => {});
</script>
