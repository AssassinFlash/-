<template>
  <h2>{{ sTotalPrice }}</h2>
  <h3>{{ storeGetters.totalPrice }}</h3>
</template>

<script setup>
import { mapGetters, useStore } from "vuex";
import { useMapper } from "./hooks/useState";
const store = useStore();
const sTotalPrice = store.getters.totalPrice;

const storeGetters = useMapper(mapGetters, ["stateCounter", "totalPrice"]);
</script>

<style scoped></style>
