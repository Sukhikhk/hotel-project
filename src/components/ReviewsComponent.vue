<template>
  <div class="mx-[8px] my-[12px] border rounded-[8px] p-[20px]">
    <div class="flex items-center gap-2">
      <svg
        data-v-95fbb59c=""
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 -2 24 22"
        fill="none"
      >
        <path
          data-v-95fbb59c=""
          d="M19.6515 19.4054C20.2043 19.2902 20.5336 18.7117 20.2589 18.2183C19.6533 17.1307 18.6993 16.1749 17.4788 15.4465C15.907 14.5085 13.9812 14 12 14C10.0188 14 8.09292 14.5085 6.52112 15.4465C5.30069 16.1749 4.34666 17.1307 3.74108 18.2183C3.46638 18.7117 3.79562 19.2902 4.34843 19.4054C9.39524 20.4572 14.6047 20.4572 19.6515 19.4054Z"
          fill="#ADAEC6"
        ></path>
        <circle data-v-95fbb59c="" cx="12" cy="8" r="5" fill="#ADAEC6"></circle>
      </svg>
      <span class="text-[14px]">{{ hotelReviews[reviewIndex].reviewer.name }}</span>
    </div>
    <p class="text-[14px]" v-if="hotelReviews[reviewIndex]">
      Rated {{ hotelReviews[reviewIndex].score }}/10
    </p>
    <p
      :class="'text-[14px] ' + (showFullReviews ? '' : 'truncated')"
      v-if="hotelReviews[reviewIndex].positive"
      @click="showFullReviews = true"
    >
      {{ hotelReviews[reviewIndex].positive }}
    </p>
    <p
      :class="'text-[14px] ' + (showFullReviews ? '' : 'truncated')"
      v-if="hotelReviews[reviewIndex].negative"
      @click="showFullReviews = true"
    >
      {{ hotelReviews[reviewIndex].negative }}
    </p>
  </div>
  <div class="flex justify-between items-center">
    <span class="mx-[20px] my-[8px] text-green-button font-[600]">See all reviews</span>
    <div class="flex items-center mx-[20px] my-[8px] gap-2">
      <button
        @click="
          reviewIndex--;
          showFullReviews = false;
        "
        :disabled="reviewIndex === 0"
        :class="
          'text-primary leading-none text-[25px] font-bold border rounded-[8px] w-[28px] h-[28px] flex items-center justify-center ' +
          (reviewIndex === 0 ? 'text-gray-500 bg-gray-100' : '')
        "
      >
        {{ "<" }}
      </button>
      <button
        @click="
          reviewIndex++;
          showFullReviews = false;
        "
        :disabled="reviewIndex === hotelReviews.length - 1"
        :class="
          'text-primary leading-none text-[25px] font-bold border rounded-[8px] w-[28px] h-[28px] flex items-center justify-center ' +
          (reviewIndex === hotelReviews.length - 1 ? 'text-gray-500 bg-gray-100' : '')
        "
      >
        {{ ">" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { hotelReviews } = defineProps<{
  hotelReviews: any;
}>();

const reviewIndex = ref(0);
const showFullReviews = ref(false);
</script>

<style scoped></style>
