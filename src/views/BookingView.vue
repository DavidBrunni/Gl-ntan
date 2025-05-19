<script setup>
import NavBar from "../components/NavBar.vue";
import BookingCards from "../components/BookingCards.vue";
import MainFooter from "../components/MainFooter.vue";
import NewMobileHeader from "../components/NewMobileHeader.vue";
</script>

<template>
  <NewMobileHeader />

  <div>
    <NavBar />
    <BookingCards />
    <MainFooter />
  </div>
</template>

<style lang="scss" scoped>
main {
  background-color: $sand;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
