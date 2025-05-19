<script setup>
import PrimaryButton from "./PrimaryButton.vue";
import { ref, computed } from "vue";

const email = ref("");
const isSubscribed = ref(false);

const isDisabled = computed(() => {
  return !email.value || !isSubscribed.value;
});

const submitForm = () => {
  if (!isDisabled.value) {
    console.log("Formulär skickat!", email.value);
    alert(`Tack för att du prenumererar, ${email.value}!`);

    // Återställ formuläret
    email.value = "";
    isSubscribed.value = false;
  }
};
</script>

<template>
  <span class="grid-layout">
    <h3>Prenumerera på vårt nyhetsbrev</h3>
    <form @submit.prevent="submitForm">
      <span class="form-1">
        <label class="epost" for="epost">Mailadress</label><br />
        <input
          class="input"
          type="email"
          id="epost"
          name="epost"
          v-model="email"
          required
          autocomplete="email"
          aria-label="Ange din e-postadress"
        />
      </span>

      <span class="form-2">
        <input class="checkbox" type="checkbox" id="newsletter" name="newsletter" v-model="isSubscribed" />
        <label class="newsletter-information" for="newsletter"
          >Ja tack! Jag vill få nyhetsbrev från Gläntan med unika erbjudanden och inspiration om
          naturupplevelser.</label
        >
      </span>
      <PrimaryButton buttonText="Prenumerera" :disabled="isDisabled" :class="{ disabled: isDisabled }" />
    </form>
  </span>
</template>

<style lang="scss" scoped>
.grid-layout {
  background-color: $greige;
  padding-left: $spacing;
  padding-right: $spacing;
  margin-bottom: $spacing;
}

.primary-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

h3 {
  font-family: $heading-font;
  font-size: 2.25rem;
  margin-bottom: $spacing;
  text-transform: uppercase;
  text-align: center;
  padding-top: $spacing;
  padding-left: $spacing;
  padding-right: $spacing;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;

  @media (min-width: 1280px) {
    grid-column: 1 / span 4;
  }
}

form {
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}

.form-1 {
  text-align: left;
  padding-left: 10px;
  padding-bottom: 0;

  @media (min-width: 768px) {
    grid-column: 1 / span 2;
  }

  @media (min-width: 1280px) {
    padding-left: 40px;
  }
}

.epost {
  font-family: $heading-font;
  font-size: 1.5rem;
  text-align: start;
  text-transform: uppercase;
  width: 100%;

  @media (min-width: 768px) {
    grid-column: 1 / span 2;
    margin-left: 5px;
  }
}

.input {
  height: 40px;
  width: 100%;
  border: 1px solid $sand;
  border-radius: 15px;
  background-color: $sand;
  padding: 8px;

  @media (min-width: 768px) {
    grid-column: 1 / span 2;
    width: 90%;
  }

  @media (min-width: 1280px) {
    width: 70%;
  }
}

.form-2 {
  display: flex;
  align-items: start;
  gap: 10px;
  padding-top: $spacing;
  padding-right: 10px;

  @media (min-width: 768px) {
    grid-column: 3 / span 2;
    padding-left: $spacing;
    padding-top: 0;
    align-self: center;
    padding-top: $spacing;
  }

  @media (min-width: 1280px) {
    margin-right: 40px;
  }
}

.checkbox {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  background-color: $sand;
  border: 1px solid $skogsgron;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.checkbox:checked::after {
  content: "✔";
  font-size: 1.1rem;
  color: #333;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.newsletter-information {
  font-family: $body-font;
  font-size: 1.1rem;
  line-height: 1.4;
  flex: 1;

  @media (min-width: 768px) {
    grid-column: 3 / span 2;
  }
}

.primary-button {
  @media (min-width: 768px) {
    grid-column: 1 / span 4;
  }
}
</style>
