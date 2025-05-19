<template>
  <nav>
    <ul>
      <li><router-link to="/" exact-active-class="active">Hem</router-link></li>
      <li>Om oss</li>
      <li><router-link to="/booking" exact-active-class="active">Boka rum</router-link></li>
      <li>Kontakta oss</li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@media (max-width: 767px) {
  nav {
    display: none;
  }
}

@media (min-width: 768px) {
  nav {
    background-color: $skogsgron;
    width: 100%;
    height: 60px;
    display: flex;

    ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      list-style-type: none;
      justify-content: space-between;
      align-items: center;
      padding: 0 128px 0 128px; //enligt layout i komponenter

      li {
        cursor: pointer;
        font-family: $heading-font;
        font-size: pxtorem(25px);
        text-transform: uppercase;
        color: $sand;

        a {
          text-decoration: none;
          text-align: center;
          color: inherit;
        }

        &:visited {
          color: white;
        }

        &:active {
          border-bottom: 3px solid;
        }

        &:hover {
          border-bottom: 3px solid $sand;
        }
      }
    }
  }
}

@media (min-width: 1280px) {
  nav {
    height: 130px;

    ul {
      padding: 0 92px 0 92px; //enligt layout i komponenter

      li {
        font-size: pxtorem(40px); //enligt layout i komponenter
      }
    }
  }
}
</style>
