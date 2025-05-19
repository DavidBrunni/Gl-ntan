<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <header class="header">
    <h1>Gläntan</h1>
    <p>SOV MED STJÄRNORNA, VAKNA MED SKOGEN.</p>

    <!-- Menu -->
    <button :class="['menu-icon', { open: menuOpen }]" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </button>

    <!-- Mobile-menu -->
    <nav v-if="menuOpen" class="mobile-menu">
      <ul>
        <li><router-link to="/">Hem</router-link></li>
        <li>Om oss</li>
        <li><router-link to="/booking">Boka rum</router-link></li>
        <li>Kontakta oss</li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 305px;
  background-image: url("../assets/images/skog-startsidan.webp");
  background-size: cover;
  background-position: center;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  position: relative;
  padding-top: 8rem;

  @media (min-width: 768px) {
    height: 350px;
  }

  @media (min-width: 1280px) {
    height: 810px;
  }
}

li{
  text-transform: uppercase;
}

h1 {
  text-transform: uppercase;
  overflow: hidden; 
  color: $sand;
  width: auto;
  max-width: 100%;
  height: auto;
  flex-shrink: 0;
  font-family: $heading-font;
  font-size: 4.5rem;
  margin: 0 0 5px 0;
  z-index: 1;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    font-size: 4.5rem;
    margin-left: 30px;
  }

  @media (min-width: 1280px) {
    margin-left: 9.5rem;
    font-size: pxtorem(128px);
    font-style: normal;
    font-weight: 400;
    line-height: 0.54;
    letter-spacing: -2.816px;
    overflow: visible;
    margin-bottom: 50px;
  }
}
  
p {
  color: #fff;
  width: 264px;
  height: 94px;
  font-family: "Lilita One";
  font-size: pxtorem(25px);
  font-style: normal;
  font-weight: 400;
  line-height: 117%;
  letter-spacing: -0.55px;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 3rem;
  z-index: 1;

  @media (min-width: 768px) {
    margin-left: 30px;
  }

  @media (min-width: 1280px) {
    margin-left: 10rem;
    font-size: pxtorem(36px);
    width: 385px;
    margin-top: 25px;
  }
}

button.menu-icon {
  background: transparent;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 2;

  @media (min-width: 768px) {
    display: none;
  }
}

.bar {
  width: 44px;
  height: 10px;
  flex-shrink: 0;
  background-color: $sand;
  border-radius: 50px;
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}

.menu-icon.open .bar:nth-child(1) {
  transform: translateY(15px) rotate(45deg);
}

.menu-icon.open .bar:nth-child(2) {
  opacity: 0;
}

.menu-icon.open .bar:nth-child(3) {
  transform: translateY(-15px) rotate(-45deg);
}

.mobile-menu {
  position: absolute;
  top: 0;
  right: 0;
  background: #465c3e;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  height: 100vh;
  width: 75vw;
  z-index: 1;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu li {
  padding: 10px 0;
  text-align: left;
  font-size: 1.1rem;
  color: $sand;
  width: 216px;
  height: 54px;
  font-size: pxtorem(32px);
  font-family: "Lilita One";
  font-style: normal;
  letter-spacing: -0.792px;
  line-height: 150%;
  font-weight: 400;
  padding-top: 50px;
}

.mobile-menu a {
  text-decoration: none;
  color: $sand;
}

.mobile-menu a:hover {
  text-decoration: underline;
}
</style>
