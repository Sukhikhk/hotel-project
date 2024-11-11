<template>
  <div v-if="showMore">
    <h3>Other Facilities</h3>

    <div class="flex flex-col gap-[25px]">
      <div v-for="group in uniqueGroups" :key="group" class="flex flex-col gap-[15px]">
        <h6>{{ group }}</h6>
        <ul class="list-disc marker:text-[12px] grid-cols-1 smaller:grid-cols-2">
          <li
            v-for="facility in facilitiesList.filter(
              (facility) => facility.group === group
            )"
            :key="facility.facility__description"
            class="px-[4px]"
          >
            {{ facility.facility__description
            }}{{ facility.number ? `: ${facility.number}` : "" }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <button @click="toggleReadMore" class="flex items-center text-primary gap-2">
    {{ showMore ? "Show Less" : "Show All Facilities And Services" }}
    <svg
      stroke="currentColor"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :style="{ transform: showMore ? 'rotate(180deg)' : 'rotate(0deg)' }"
    >
      <path
        d="M2 5L7 10L12 5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </button>
</template>

<script>
import { defineComponent, computed, ref } from "vue";

export default defineComponent({
  name: "OtherFacilities",
  props: {
    facilitiesList: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const showMore = ref(false);

    const toggleReadMore = () => {
      showMore.value = !showMore.value;
    };

    const uniqueGroups = computed(() => {
      return Array.from(new Set(props.facilitiesList.map((item) => item.group)));
    });

    return {
      showMore,
      toggleReadMore,
      uniqueGroups,
    };
  },
});
</script>
