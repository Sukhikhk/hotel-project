<style>
[data-test="dp-input"] {
  width: 100% !important;
  height: 60px !important;
  padding: 0 !important;
}
</style>
<template>
  <div class="min-h-[219px] bg-[#e8e9f3] pb-10">
    <div class="container">
      <h1 class="text-[26px] font-[600] pt-10 smaller:pt-[60px] pb-5">Your Search</h1>
      <div class="flex flex-col bigger:flex-row justify-between gap-5">
        <div class="min-w-[200px] min-h-[60px] w-full relative">
          <VueDatePicker
            v-model="dateInput"
            range
            :format="format"
            :hide-input-icon="true"
          />
          <div
            class="absolute pointer-events-none w-full flex items-center ml-3 gap-3 top-0 left-0 text-black px-[8px] py-[15px]"
          >
            <svg
              data-v-30c43fed=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-30c43fed=""
                d="M17 3L17 7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
              <path
                data-v-30c43fed=""
                d="M7 3L7 7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
              <path
                data-v-30c43fed=""
                d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V11H3V10Z"
                stroke="currentColor"
                stroke-width="2"
              ></path>
              <rect
                data-v-30c43fed=""
                x="3"
                y="6"
                width="18"
                height="15"
                rx="2"
                stroke="currentColor"
                stroke-width="2"
              ></rect>
            </svg>
            <div class="flex flex-col justify-center gap-[3px]">
              <span class="text-[12px] leading-none">Check In / Check Out</span>
              <span class="text-[15px] leading-none"
                >{{
                  dateInput[0].toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                  })
                }}
                -
                {{
                  dateInput[1].toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                  })
                }}</span
              >
            </div>
          </div>
        </div>

        <div class="relative min-w-[200px] min-h-[60px] w-full">
          <div
            v-if="showMenu"
            class="absolute top-full bg-white border rounded-lg shadow-md w-full p-4 flex flex-col"
          >
            <div class="border-b py-2 flex justify-between">
              <span>Rooms</span>
              <div class="flex gap-1">
                <button
                  @click="
                    rooms_num--;
                    rooms_occupancy.pop();
                  "
                  :disabled="rooms_num === 1"
                  type="button"
                >
                  -</button
                >{{ rooms_num
                }}<button
                  @click="
                    rooms_num++;
                    rooms_occupancy.push({ adults: 2, children: 0 });
                  "
                  :disabled="rooms_num === 10"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
            <div v-for="(room, index) in rooms_occupancy" :key="index" class="border-b">
              <div class="py-2 flex justify-between">
                <span>Adults</span>
                <div class="flex gap-1">
                  <button
                    @click="room.adults--"
                    :disabled="room.adults === 1"
                    type="button"
                  >
                    -</button
                  >{{ room.adults
                  }}<button
                    @click="room.adults++"
                    :disabled="room.adults === 5"
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="py-2 flex justify-between">
                <span>Children</span>
                <div class="flex gap-1">
                  <button
                    @click="room.children--"
                    :disabled="room.children === 0"
                    type="button"
                  >
                    -</button
                  >{{ room.children
                  }}<button
                    @click="room.children++"
                    :disabled="room.children === 10"
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <input
            @click="showMenu = !showMenu"
            class="w-full h-full border-[#ddd] rounded-[4px] border"
          />
          <div
            @click="showMenu = !showMenu"
            class="absolute bg-white w-full flex items-center pl-3 gap-3 top-0 left-0 text-black px-[8px] py-[15px] rounded-[4px] border border-[#ddd]"
          >
            <svg
              data-v-bc8f90ce=""
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-v-bc8f90ce="" clip-path="url(#clip0_12403_20276)">
                <path
                  data-v-bc8f90ce=""
                  d="M20.2274 20.4471C19.7716 19.1713 18.7672 18.0439 17.3701 17.2399C15.9729 16.4358 14.2611 16 12.5 16C10.7389 16 9.02706 16.4358 7.62991 17.2399C6.23276 18.0439 5.22839 19.1713 4.77259 20.4471"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
                <circle
                  data-v-bc8f90ce=""
                  cx="12.5"
                  cy="8"
                  r="4"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></circle>
              </g>
              <defs data-v-bc8f90ce="">
                <clipPath data-v-bc8f90ce="" id="clip0_12403_20276">
                  <rect
                    data-v-bc8f90ce=""
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5)"
                    stroke="currentColor"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <div class="flex flex-col justify-center gap-[3px]">
              <span class="text-[12px] leading-none">Rooms and Guests</span>

              <span class="text-[15px] leading-none"
                >{{ rooms_num }} room{{ rooms_num > 1 ? "s" : "" }},
                {{ nOfTravelers }} traveler{{ nOfTravelers > 1 ? "s" : "" }}</span
              >
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-primary text-white min-h-[60px] rounded-[4px]"
          @click="updateRooms"
        >
          Update Rooms
        </button>
      </div>
    </div>
  </div>
  <div v-if="isLoading">Loading Available Rooms</div>
  <div v-else class="container">
    <Rooms
      :rooms="hotelData.rooms"
      :roomsNum="rooms_num"
      :externalLinks="hotelData.externalLinks"
      :nOfNights="nOfNights"
      :nOfTravelers="nOfTravelers"
    />
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import { onMounted, ref, watch } from "vue";
import Rooms from "@/components/Rooms.vue";
import axios from "axios";

const {
  hotelId,
  check_in,
  check_out,
  rooms,
  room0_adults,
  room0_children,
  currency,
  hotelData,
  updateHotelData,
} = defineProps<{
  hotelId: string;
  check_in: string;
  check_out: string;
  rooms: number;
  room0_adults: number;
  room0_children: number;
  currency: string;
  hotelData: any;
  updateHotelData: (newHotelData: any) => void;
}>();

const format = () => {
  return ``;
};

const updateRooms = async () => {
  isLoading.value = true;
  const room_params = convert_room_occupancy(rooms_occupancy.value);

  const dataResponse = await axios.get(`/api/hotelData/${hotelId}`, {
    params: {
      check_in: dateInput.value[0].toLocaleDateString("en-CA"),
      check_out: dateInput.value[1].toLocaleDateString("en-CA"),
      rooms: rooms_num.value,
      currency: currency,
      ...room_params,
    },
  });
  updateHotelData(dataResponse.data);
  isLoading.value = false;
};

const countTravelers = (rooms_occupancy: any) => {
  return rooms_occupancy.value.reduce(
    (acc: any, room: any) => acc + room.adults + room.children,
    0
  );
};

const dateInput = ref([new Date(), new Date()]);
const showMenu = ref(false);
const rooms_occupancy = ref([{ adults: 2, children: 0 }]);

const rooms_num = ref(rooms_occupancy.value.length);

const nOfTravelers = ref(countTravelers(rooms_occupancy));
const nOfNights = ref(1);

const isLoading = ref(false);

const convert_room_occupancy = (rooms_occupancy: any) => {
  const converted = {};
  rooms_occupancy.flatMap((room: any, index: number) => {
    Object.keys(room).map((key) => {
      converted[`room${index}_${key}`] = room[key];
    });
  });
  return converted;
};

watch(
  rooms_occupancy,
  () => {
    nOfTravelers.value = countTravelers(rooms_occupancy);
  },
  { deep: true }
);

watch(
  () => hotelData,
  () => {
    nOfNights.value = (dateInput.value[1] - dateInput.value[0]) / (1000 * 60 * 60 * 24);
  },
  { deep: true }
);

onMounted(async () => {
  dateInput.value = [
    check_in ? new Date(check_in + "T00:00:00") : new Date(),
    check_out ? new Date(check_out + "T00:00:00") : new Date(),
  ];
  rooms_occupancy.value[0].adults = room0_adults;
  rooms_occupancy.value[0].children = room0_children;
  rooms_occupancy.value = Array.from({ length: rooms }, (index) => ({
    adults: room0_adults,
    children: room0_children,
  }));
  nOfNights.value = (new Date(check_out) - new Date(check_in)) / (1000 * 60 * 60 * 24);
});
</script>
