<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  buttonText: String,
  to: String, // Ny prop för länk
});

// Beräkna om vi ska använda <RouterLink> eller <button>
const isLink = computed(() => !!props.to);
</script>

<template>
  <component
    :is="isLink ? RouterLink : 'button'"
    :to="isLink ? to : null"
    class="secondary-button"
  >
    {{ buttonText }}
  </component>
</template>

<style lang="scss" scoped>
.secondary-button {
  @include secondary-button;
}
</style>