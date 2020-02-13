<template>
  <div class="background">
    <main class="home" aria-labelledby="main-title">
      <header class="hero">
        <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroAlt || 'hero'"
        />

        <h1 v-if="data.heroText !== null" id="main-title">
          {{ data.heroText || $title || "Hello" }}
        </h1>
        <p class="description">{{ data.tagline || $description }}</p>

        <p class="action" v-if="data.actionText && data.actionLink">
          <NavLink class="action-button" :item="actionLink" />
        </p>
      </header>

      <a href="https://foundation.mozilla.org/en/blog/open-hardware-leaders-open-leaders-x-program/" target="blank"><div class="mozilla">
        <h3>A <img src="mozilla.png" alt="text"> OLx Program</h3>
      </div></a>

      <section class="section is-medium section--inverted">
        <div class="title is-1 has-text-centered">How it works</div>
        <div class="subtitle is-3 is-spaced has-text-centered">
          You want to take your project to the next level 👇
        </div>
        <div class="container">
          <!-- <div class> -->
            <div class="features columns container" v-if="data.features && data.features.length">
              <div
                class="column has-text-centered"
                v-for="(feature, index) in data.features"
                :key="index"
              >
                <span class="icon">
                  <font-awesome-icon
                    class="fas fa-3x has-text-centered"
                    v-bind:icon="feature.icon"
                  />
                </span>
                <div class="title is-4">{{ feature.title }}</div>
                <p class="">{{ feature.details }}</p>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </section>

      <section class="section is-medium">
        <!-- Program Section -->
        <!-- <div></div> -->
        <div class="title is-2 has-text-centered " style="">
          We help you during 14 weeks
        </div>
        <div class="subtitle is-3 is-spaced has-text-centered " style="">
          Here is how we plan to do it
        </div>
        <div class="container">
          <div
            class="features columns container container--top-padding"
            v-if="data.program && data.program.length"
          >
            <div
              class="column has-text-centered"
              v-for="(item, index) in data.program"
              :key="index"
            >
              <span class="icon">
                <font-awesome-icon
                  class="fas fa-3x has-text-centered"
                  v-bind:icon="item.icon"
                />
              </span>
              <div class="title is-4" v-html="item.title"></div>
              <p v-html="item.details"></p>
            </div>
          </div>
        </div>
      </section>
  

     <section id="team" class="section is-normal section--grey">
       <div class="container is-spaced">
         <div class="column">
           <div class="title is-2 is-spaced">Program organizers</div>
              <!-- <span>Join our team and become a mentor</span> -->
         </div>
         
       
       
       <div class="">
            <div class="grid" v-if="data.team && data.team.length">
              <div
                class="center"
                v-for="(person, index) in data.team"
              >
                <div class="">
                  <figure class="">
                    <img
                      class="is--rounded"
                      :src="person.image"
                    />
                  </figure>
                   <div class="subtitle is-6 has-text-centered">{{ person.title }}</div>
                   <!-- <div class>{{ person.email }}</div> -->
                </div>
               
              </div>
            </div>
          </div>
          </div>
     </section>


       <section class="footer-2">
        <div class="container container--padding-top">
          <div>
            <p class="has-text-centered"> Questions, ideas, collaborations? Contact us at <a href="mailto:openhardware4me@gmail.com">openhardware4me@gmail.com</a></p>
          </div>
          <div>
            <p class="has-text-centered">The content of Open Hardware Leaders program is licensed under Creative Commons attribution license <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY4.0</a></p>
          </div>
        </div>
      </section>

      <Content class="theme-default-content custom" />

      <!-- <div class="footer" v-if="data.footer">{{ data.footer }}</div> -->
    </main>
  </div>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faCheck,
  faUsers,
  faMapSigns,
  faGem,
  faCameraMovie,
  faFlagCheckered,
  faCog,
  faCalendarAlt
  // faProjectDiagram,
  // faHeartBeat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret);
library.add(faMapSigns);
library.add(faCheck);
library.add(faUsers);
library.add(faGem);
library.add(faFlagCheckered);
library.add(faCog);
library.add(faCalendarAlt);

export default {
  components: { NavLink, FontAwesomeIcon },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  }
};
</script>

<style lang="stylus">

.home {
  .hero {
    padding-top: 4em;
    text-align: center;
    background-image: url('/ohlwebsite/batthern.png');
    padding-bottom: 3em;
    paddding-top:5em;

    img {
      margin-top:5em;
      max-width: 100%;
      max-height: 380px;
      display: block;
      margin: 1rem auto 0;
    }

    h1 {
      font-size: 2rem;
    }

    h1, .description, .action {
      margin: 0.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      .icon.outbound {
        color: white;
      }

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .is--rounded {
    border-radius: 5%;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(80%);
    width 100px;
    margin: 0 auto;
    box-shadow: 0 3rem 3rem -1rem rgba(10,10,10,.3);
  }

  .is-horizontal-center {
    justify-content: center;
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid $borderColor;
    text-align: center;
    color: lighten($textColor, 25%);
  }


}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    // padding-left: 1.5rem;
    // padding-right: 1.5rem;


    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
