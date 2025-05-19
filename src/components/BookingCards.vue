<template>
  <main>
    <section class="cabins">
      <article class="cardWrapper">
        <div class="card">
          <figure class="picture">
            <img
              src="../assets/images/sjostugan.webp"
              alt="Stuga med brant lutande tak och stora glaspartier i skogen." loading="lazy"/>
          </figure>
          <div class="infotext">
            <h3>Sjöstugan</h3>
            <p>
              Somna till sjöns stilla vågor och vakna med soluppgången. En naturnära och rofylld tillflyktsort med
              magisk utsikt.
            </p>
            <p class="price">Från 1 399 kr</p>
          </div>
        </div>
      </article>

      <article class="cardWrapper">
        <div class="card">
          <figure class="picture">
            <img
              src="../assets/images/spegelboet.webp"
              alt="Kvadratisk spegelbeklädd kub till stuga uppe i träden. Entré via hängbro." loading="lazy"/>
          </figure>
          <div class="infotext">
            <h3>Spegelboet</h3>
            <p>
              Bo uppe i träden och låt dig smälta samman med naturen. Den spegelblanka fasaden skapar en unik,
              kamouflerad upplevelse mitt i skogens ro.
            </p>
            <p class="price">Från 1 758 kr</p>
          </div>
        </div>
      </article>

      <article class="cardWrapper">
        <div class="card">
          <figure class="picture">
            <img src="../assets/images/trakoja.webp" alt="Stuga med brant lutande tak och badtunna i skogen." loading="lazy"/>
          </figure>
          <div class="infotext">
            <h3>Träkojan</h3>
            <p>
              Njut av total avskildhet i en mysig koja, djupt inne i skogen. Här får du ro, stillhet och en chans att
              komma nära naturen på riktigt.
            </p>
            <p class="price">Från 1 549 kr</p>
          </div>
        </div>
      </article>

      <article class="cardWrapper">
        <div class="card">
          <figure class="picture">
            <img src="../assets/images/eldnastet.webp" alt="Eldstad med sprakande brasa." loading="lazy"/>
          </figure>
          <div class="infotext">
            <h3>Eldnästet</h3>
            <p>
              Samla familjen kring elden i en avskild koja och njut av lugnet i skogen. En plats för gemenskap och
              mysiga stunder.
            </p>
            <p class="price">Från 2 129 kr</p>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.cabins {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: $spacing 0;
  padding: 0;

  .cardWrapper {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;

    .card {
      background-color: $greige;
      width: 320px;
      height: auto; //Ändrat till auto från de specade 450px eftersom innehållet är så olika stort och då ger olika mycket tomt utrymme
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 5px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      margin-top: 0;
      margin-bottom: 25px;
      padding: 25px;

      .picture {
        width: 260px;
        height: 290px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 5px;
        margin: 0;
        padding: 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .infotext {
        width: 260px;
        height: auto;
        padding-top: 5px;

        h3 {
          font-family: $heading-font;
          font-weight: 400;
          font-size: pxtorem(20px);
          margin-top: 0;
          text-transform: uppercase;
        }

        .price {
          font-family: $heading-font;
          font-weight: 400;
          font-size: pxtorem(16px);
          margin-bottom: 5px;
          text-transform: uppercase;
        }

        p {
          font-family: $body-font;
          font-size: pxtorem(16px);
          margin-top: 0;
          margin-bottom: 5px; //ej specat
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .cabins {
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 50px;

    .cardWrapper {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-bottom: 35px; //Minimiavstånd satt till 25px. Ökade eftersom det kändes för lite.


      .card {
        height: 100%;
        padding: 25px;
        padding-bottom: 5px;
        position: relative;

        .price {
          position: absolute;
          bottom: 10px;
        }
      }
    }
  }
}

@media (min-width: 1400px) {
  .cabins {
    width: 100%;
    margin-bottom: 0;

    .cardWrapper {
      width: 50%;

      .card {
        background-color: $greige;
        width: 675px;
        height: 450px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 25px; //ej specat
        margin-bottom: 50px; //Minimiavstånd satt till 25px. Ökade eftersom det kändes för lite.

        .picture {
          height: 100%;
          width: 50%;
          height: 385px;
          width: 290px;
          display: block;

          img{
            object-fit: cover;
          }
        }

        .infotext {
          height: 100%;
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: start;
          padding-left: 15px; //ej specat

          h3 {
            font-size: pxtorem(36px);
          }

          .price {
            font-size: pxtorem(25px);
          }

          p {
            font-size: pxtorem(25px);
          }
        }
      }
    }
  }
}
</style>
