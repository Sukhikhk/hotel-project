<template>
  <div id="map"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import L from "leaflet";

const props = defineProps<{
  latitude: number;
  longitude: number;
}>();

onMounted(() => {
  try {
    const map = L.map("map").setView([props.latitude, props.longitude], 16);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    var marker = L.marker([props.latitude, props.longitude]).addTo(map);
  } catch (err) {}
});
</script>

<style>
/* Set a specific height for the map container */
#map {
  height: 278px;
  width: 100%;
  z-index: 0;
}
</style>
