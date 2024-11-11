<script setup>
import { ref, onMounted, capitalize } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Rooms from "@/components/Rooms.vue";
import ImagesWrapper from "@/components/ImagesWrapper.vue";
import BodyComponent from "@/components/BodyComponent.vue";
import Header from "@/components/Header.vue";
import YourSearch from "@/components/YourSearch.vue";

import "@vuepic/vue-datepicker/dist/main.css";

const hotelData = ref(null);
const hotelReviews = ref(null);
const loading = ref(true);
const error = ref(null);
const descriptionList = ref([]);
const activeCurrency = ref("USD");

const route = useRoute();
const hotelId = route.params.id;

const {
  check_in = new Date().toLocaleDateString("en-CA"),
  check_out = new Date(Date.now() + 86400000).toLocaleDateString("en-CA"),
  rooms = 1,
  currency = "USD",
  room0_adults = 2,
  room0_children = 0,
  ...other
} = route.query;

function updateCurrency(newCurrency) {
  activeCurrency.value = newCurrency;
}

function updateHotelData(newHotelData) {
  hotelData.value = newHotelData;
}

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

onMounted(async () => {
  try {
    // Use Promise.all to fetch both data and reviews concurrently
    const [dataResponse, reviewsResponse] = await Promise.all([
      axios.get(`/api/hotelData/${hotelId}`, {
        params: {
          check_in: check_in,
          check_out: check_out,
          rooms: rooms,
          currency: currency,
          room0_adults: room0_adults,
          room0_children: room0_children,
        },
      }),
      axios.get(`/api/hotelReviews/${hotelId}`, {
        params: {
          check_in: check_in,
          check_out: check_out,
          rooms: rooms,
          currency: currency,
          room0_adults: room0_adults,
          room0_children: room0_children,
        },
      }),
    ]);

    // Assign the fetched data to state variables
    hotelData.value = dataResponse.data;
    hotelReviews.value = reviewsResponse.data;
    descriptionList.value = hotelData.value.description.split(".");
    activeCurrency.value = hotelData.value.currency;
  } catch (err) {
    console.log("Error fetching data:", err);
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="h-[50px] bg-[#0068EF] relative">
    <Header
      v-if="hotelData"
      :roomData="hotelData.rooms"
      :selectedCurrency="activeCurrency"
      :updateCurrency="updateCurrency"
    />
  </div>
  <div v-if="hotelData">
    <div class="h-[46px] bg-[#C3D7F3] flex items-center">
      <div class="flex items-center gap-2 container text-[13px]">
        <svg
          fill="currentColor"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7071 6.70711C11.0976 6.31658 11.0976 5.68342 10.7071 5.29289C10.3166 4.90237 9.68342 4.90237 9.29289 5.29289L10.7071 6.70711ZM4 12L3.29289 11.2929C2.90237 11.6834 2.90237 12.3166 3.29289 12.7071L4 12ZM9.29289 18.7071C9.68342 19.0976 10.3166 19.0976 10.7071 18.7071C11.0976 18.3166 11.0976 17.6834 10.7071 17.2929L9.29289 18.7071ZM19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11V13ZM9.29289 5.29289L3.29289 11.2929L4.70711 12.7071L10.7071 6.70711L9.29289 5.29289ZM3.29289 12.7071L9.29289 18.7071L10.7071 17.2929L4.70711 11.2929L3.29289 12.7071ZM4 13H19V11H4V13Z"
          ></path>
        </svg>
        See all Hotels in {{ capitalizeWords(hotelData.city) }}
      </div>
    </div>
    <ImagesWrapper :images="hotelData.images" />
    <BodyComponent
      :hotelData="hotelData"
      :hotelReviews="hotelReviews"
      :descriptionList="descriptionList"
    />
    <YourSearch
      :hotelId="hotelId"
      :check_in="check_in"
      :check_out="check_out"
      :rooms="rooms"
      :room0_adults="room0_adults"
      :room0_children="room0_children"
      :hotelData="hotelData"
      :currency="currency"
      :updateHotelData="updateHotelData"
    />
  </div>
</template>

<style></style>
