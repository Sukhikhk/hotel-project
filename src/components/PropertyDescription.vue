<template>
  <div>
    <h3>Property Description</h3>
    <p v-for="(sentence, index) in displayDescription" :key="index">
      {{ sentence.trim() }}.
    </p>
    <button @click="toggleReadMore" class="flex items-center text-[#0064d3] gap-2">
      {{ showMore ? "Read Less" : "Read More" }}
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
  </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue";

export default defineComponent({
  name: "PropertyDescription",
  props: {
    descriptionList: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const showMore = ref(false);

    const toggleReadMore = () => {
      showMore.value = !showMore.value;
    };

    const displayDescription = computed(() => {
      return showMore.value
        ? props.descriptionList.slice(0, props.descriptionList.length - 1)
        : props.descriptionList.slice(0, 3);
    });

    return {
      showMore,
      toggleReadMore,
      displayDescription,
    };
  },
});
</script>
