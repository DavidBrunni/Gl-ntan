<script setup>
import { computed } from "vue";
import PrimaryButton from "./PrimaryButton.vue";
import imagePath from "/src/assets/images/hus-startsida.webp";

const showExtraImages = computed(() => window.innerWidth >= 768);
</script>

<template>
  <span class="grid-layout">
    <div class="text-and-fireplace">
      <div class="first-paragraph">
        <h2>Följ stigen till lugnet - Gläntan väntar!</h2>
        <p>
          Djupt inne i den svenska skogen, vid en spegelblank sjö, ligger Gläntan – en plats för stillhet, återhämtning
          och upplevelser i naturens rytm. Här bor du i trädkojor svävande bland grenarna, vattengömslen vid sjöns kant
          eller glashus där natthimlen blir din utsikt.
        </p>
      </div>

      <img
        class="fireplace"
        v-if="showExtraImages"
        src="/src/assets/images/eldstad-startsida.webp"
        alt="Modern stuga med eldstad och kök"
        width="500"
        height="500"
        loading="lazy"
      />
    </div>
    <br />
    <div class="forest-and-text">
      <img class="forest-top" :src="imagePath" alt="Modernt stuga ute i skogen" width="500" height="500"/>
      <div class="second-paragraph">
        <p>
          Låt vinden viska genom trädkronorna medan du slappnar av på din privata terrass. Vakna till ljudet av
          fågelsång och känn doften av nyskog. Här finns inga distraktioner, ingen stress – bara du, naturen och lugnet.
        </p>
        <PrimaryButton class="button-tablet-desktop" buttonText="Boka rum" to="/booking" />
      </div>
    </div>

    <PrimaryButton class="button-mobile" buttonText="Boka rum" to="/booking" />

    <img class="forest-botton" :src="imagePath" alt="Modernt stuga ute i skogen" width="500" height="500" />
    <img
      v-if="showExtraImages"
      class="lake"
      src="/src/assets/images/sjo-startsida.webp"
      alt="En kajak med två personer på en lugn sjö ute i skogen"
      width="500"
      height="500"
      loading="lazy"
    />
  </span>
</template>

<style lang="scss" scoped>
.grid-layout {
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}

h2 {
  font-family: $heading-font;
  font-size: 2rem;
  margin-bottom: $spacing;
  text-transform: uppercase;
  margin-top: $spacing;
  padding-left: $spacing;
  padding-right: $spacing;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  @media (min-width: 1280px) {
    font-size: 2.25rem;
  }
}

p {
  font-family: $body-font;
  font-size: 1rem;
  margin-top: 0;
  text-align: start;
  padding-left: $spacing;
  padding-right: $spacing;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    padding-right: 0;
  }

  @media (min-width: 1280px) {
    font-size: 1.5rem;
  }
}

.forest-top,
.forest-bottom,
.fireplace,
.lake {
  width: 100%;
  object-fit: cover;
}

.forest-top {
  display: none;

  @media (min-width: 768px) {
    display: block;
    grid-column: 1 / span 2;
    padding-right: 100px;
    height: 330px;
    margin-top: $spacing;
    padding-left: $spacing;
    justify-self: left;
  }

  @media (min-width: 1280px) {
    height: 350px;
  }
}

.text-and-fireplace {
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    grid-column: 3 / span 2;
    margin-left: -100px;
    padding-right: $spacing;
    padding-bottom: $spacing;
  }
}

.first-paragraph {
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    grid-column: 3 / span 2;
    grid-row: 1;
    justify-self: start;
    margin-top: $spacing;
  }
}

.forest-and-text {
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    grid-column: 1 / span 2;
    grid-row: 1;
  }
}

.second-paragraph {
  @media (min-width: 768px) {
    grid-column: 1 / span 2;
    padding-right: 100px;
    margin-top: $spacing;
  }

  @media (min-width: 1280px) {
    padding-left: $spacing;
    margin-left: $spacing;
    margin-right: $spacing;
  }
}

.second-paragraph p::first-letter {
  @media (min-width: 768px) {
    font-size: 2rem;
    font-weight: bold;
  }

  @media (min-width: 1280px) {
    font-size: 3rem;
  }
}

.fireplace {
  display: none;

  @media (min-width: 768px) {
    display: block;
    height: 280px;
    grid-column: 3 / span 2;
    margin-top: $spacing;
    padding-left: $spacing;
  }

  @media (min-width: 1280px) {
    height: 380px;
  }
}

.forest-botton {
  width: 100%;
  height: 350px;
  object-fit: cover;
  margin-bottom: $spacing;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1280px) {
    display: none;
  }
}

.lake {
  display: none;

  @media (min-width: 768px) {
    display: block;
    grid-column: 1 / span 4;
    grid-row: 2;
    height: 225px;
  }

  @media (min-width: 1280px) {
    height: 235px;
  }
}

.button-mobile {
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
}

.button-tablet-desktop {
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
}
</style>
