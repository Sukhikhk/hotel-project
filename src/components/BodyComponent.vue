<template>
  <div class="container">
    <div class="bigger:flex flex-md-row flex-sm-column justify-content-between mb-4 mt-3">
      <div class="smaller:pr-[100px]">
        <div class="flex justify-between items-center">
          <div>
            <div class="flex gap-2 items-center mt-5">
              <span
                class="bg-gray-200 text-gray-600 font-[500] rounded-[5px] px-[7.5px] text-[12px]"
                >{{ hotelData.accommodation_type_code }}</span
              >
              <div class="flex">
                <span
                  v-for="index in 5"
                  :key="index"
                  :class="index <= hotelData.stars ? 'text-yellow-500' : 'text-gray-300'"
                >
                  ★
                </span>
              </div>
            </div>
            <h1>{{ hotelData.name }}</h1>
          </div>
          <div>
            <PriceComponent :rooms="hotelData.rooms" />
          </div>
        </div>
        <span>{{ hotelData.full_address }}</span>

        <PropertyDescription :descriptionList="descriptionList" />

        <h3>Facilities</h3>
        <h6 class="pb-[17px]">Check In Details</h6>
        <ul class="grid-cols-1 gap-0 list-disc mb-[10px] marker:text-[12px]">
          <li>
            Check-in time:
            {{ convertTo12HourFormat(hotelData.check_in_time_range.start) }}
            -
            {{ convertTo12HourFormat(hotelData.check_in_time_range.end) }}
          </li>
          <li>
            Check-out time: 12:00 PM - {{ hotelData.additional_info.checkout_time }}
          </li>
        </ul>
        <h6 class="pb-[17px]">Top Facilities</h6>
        <ul class="mb-[10px]">
          <li
            class="flex items-center gap-2"
            v-for="facility in hotelData.top_facilities"
            :key="facility.id"
          >
            <img
              class="h-[20px] w-[20px] object-contain text-[#6f7096]"
              style="
                filter: invert(0.47) sepia(0.2) saturate(5.74) hue-rotate(200deg) bright;
              "
              :src="'/outlines/' + facility.icon"
            /><span>{{ facility.name }}</span>
          </li>
        </ul>

        <OtherFacilities :facilitiesList="hotelData.facilities" />
      </div>
      <div class="bigger:w-[400px] w-full">
        <Map :latitude="hotelData.latitude" :longitude="hotelData.longitude" />
        <h3>Rating</h3>
        <div class="flex gap-2 items-center">
          <div
            class="text-white text-[18px] leading-[27px] font-[700] bg-[#0064d3] rounded-[5px] h-[42px] w-[42px] flex items-center justify-center"
          >
            {{ hotelReviews.hotels[0].score }}
          </div>
          <span class="text-black font-[500]">Outstanding</span>
          <span class="text-[14px]"
            >{{ hotelReviews.hotels[0].number_of_reviews }} ratings</span
          >
        </div>
        <div class="block bigger:block smaller:grid grid-cols-2 gap-x-4">
          <div v-for="breakdownKey in Object.keys(breakdownDict)">
            <h6>{{ breakdownDict[breakdownKey] }}</h6>
            <div class="flex gap-2 items-center">
              <div class="w-full h-[12px] bg-[#f8f8f8] rounded-[3px] overflow-hidden">
                <div
                  :class="'h-full bg-[#c3d7f3] rounded-[3px] '"
                  :style="{
                    width:
                      Math.round(
                        hotelReviews.hotels[0].breakdown[breakdownKey].score * 10
                      ) + '%',
                  }"
                ></div>
              </div>
              <span class="text-black text-[14px]">{{
                Math.round(hotelReviews.hotels[0].breakdown[breakdownKey].score * 10) / 10
              }}</span>
            </div>
          </div>
        </div>
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
            <span class="text-[14px]">{{
              hotelReviews.hotels[0].reviews[reviewIndex].reviewer.name
            }}</span>
          </div>
          <p class="text-[14px]" v-if="hotelReviews.hotels[0].reviews[reviewIndex]">
            Rated {{ hotelReviews.hotels[0].reviews[reviewIndex].score }}/10
          </p>
          <p
            class="text-[14px]"
            v-if="hotelReviews.hotels[0].reviews[reviewIndex].positive"
          >
            {{ hotelReviews.hotels[0].reviews[reviewIndex].positive }}
          </p>
          <p
            class="text-[14px]"
            v-if="hotelReviews.hotels[0].reviews[reviewIndex].negative"
          >
            {{ hotelReviews.hotels[0].reviews[reviewIndex].negative }}
          </p>
        </div>
        <div class="flex justify-between items-center">
          <span class="mx-[20px] my-[8px]">See all reviews</span>
          <div class="flex items-center mx-[20px] my-[8px] gap-2">
            <button
              @click="reviewIndex--"
              :disabled="reviewIndex === 0"
              :class="
                'text-[#0064d3] leading-none text-[25px] font-bold border rounded-[8px] w-[28px] h-[28px] flex items-center justify-center ' +
                (reviewIndex === 0 ? 'text-gray-500 bg-gray-100' : '')
              "
            >
              {{ "<" }}
            </button>
            <button
              @click="reviewIndex++"
              :disabled="reviewIndex === hotelReviews.hotels[0].reviews.length - 1"
              :class="
                'text-[#0064d3] leading-none text-[25px] font-bold border rounded-[8px] w-[28px] h-[28px] flex items-center justify-center ' +
                (reviewIndex === hotelReviews.hotels[0].reviews.length - 1
                  ? 'text-gray-500 bg-gray-100'
                  : '')
              "
            >
              {{ ">" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const breakdownDict = {
  facilities: "Amenities",
  cleanliness: "Cleanliness",
  comfort: "Comfort",
  location: "Location",
  value_for_money: "Value",
  staff: "Staff",
  free_wifi: "Free-WiFi",
};

const { hotelData, descriptionList, hotelReviews } = defineProps<{
  hotelData: any;
  descriptionList: any;
  hotelReviews: any;
}>();

const reviewIndex = ref(0);

function convertTo12HourFormat(timeStr: string) {
  // Split the time string into hours, minutes, and seconds
  const [hour, minute] = timeStr.split(":").map(Number);

  // Determine AM/PM and adjust hour for 12-hour format
  const period = hour >= 12 ? "pm" : "am";
  const hour12 = hour % 12 || 12; // Converts 0 and 12 to 12 in 12-hour format

  return `${hour12}:${minute.toString().padStart(2, "0")} ${period}`;
}

onMounted(() => {});
</script>

<style></style>
