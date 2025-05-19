<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  buttonText: String,
  disabled: Boolean,
  to: String, // Ny prop för länk
});

// Beräkna om vi ska använda <RouterLink> eller <button>
const isLink = computed(() => !!props.to);
</script>

<template>
  <component
    :is="isLink ? RouterLink : 'button'"
    :to="isLink ? to : null"
    :disabled="!isLink && disabled"
    class="primary-button"
    :class="{ disabled: disabled }"
  >
    {{ buttonText }}
  </component>
</template>

<style lang="scss" scoped>
.primary-button {
  @include primary-button;

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
