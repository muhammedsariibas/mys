<script lang="ts">
export default {
  components: {},
  data() {
    return {
      backgroundImageSource: "src/assets/images/bg.jpg",
      icons: ["mdi-twitter", "mdi-linkedin", "mdi-github", "mdi-instagram"],
    };
  },
  mounted() {
    if (window.innerWidth < 1024) {
      this.backgroundImageSource = "src/assets/images/bg.jpg";
    } else {
      this.backgroundImageSource = "src/assets/images/bg169.jpg";
    }
  },
};
</script>

<template>
  <v-col
    cols="12"
    sm="12"
    md="12"
    class="p-0"
  >
    <v-img class="VImg" aspect-ratio="16/9" cover :src="backgroundImageSource">
      <v-col cols="12" sm="12" md="12" class="parent-col hidden-md-and-down">
        <v-col cols="12" sm="5" md="5">
          <span class="text-style">
            Hi There!
            <v-icon class="hand-wave-icon">mdi-hand-wave-outline</v-icon>
            <br />
            <span class="d-flex justify-start align-center">
              <p>I'm</p>
              <section class="text-animation">
                <div class="first"><div>Muhammed Yusuf Sarıbaş</div></div>
                <div class="second"><div>Full Stack Developer</div></div>
                <div class="third"><div>Web Developer</div></div>
              </section>
            </span>
          </span>
        </v-col>

        <v-col cols="12" sm="5" md="5" class="parent-col">
          <v-col cols="12" sm="2" md="2" class="sub-col-up">
            <v-icon class="icon-style">mdi-vuejs</v-icon>
          </v-col>

          <v-col cols="12" sm="2" md="2" class="sub-col-down">
            <v-icon class="icon-style icon-style-reverse"
              >mdi-language-java</v-icon
            >
          </v-col>

          <v-col cols="12" sm="2" md="2" class="sub-col-up">
            <v-icon class="icon-style icon-style-reverse"
              >mdi-language-typescript</v-icon
            >
          </v-col>

          <v-col cols="12" sm="2" md="2" class="sub-col-down">
            <img
              class="icon-style"
              style="padding: 30px 0px; width: 140px"
              src="\src\assets\icon _spring boot.png"
            />
          </v-col>

          <v-col cols="12" sm="2" md="2" class="sub-col-up">
            <v-icon class="icon-style">mdi-nodejs</v-icon>
          </v-col>

          <v-col cols="12" sm="2" md="2" class="sub-col-down">
            <span
              class="material-symbols-outlined icon-style icon-style-reverse"
            >
              flutter
            </span>
          </v-col>
        </v-col>
      </v-col>
      <v-col cols="12" sm="12" md="12" class="parent-col hidden-md-and-up">
        <v-col cols="12" sm="12" md="12" class="sub-col-up">
          <v-icon class="icon-style">mdi-vuejs</v-icon>
          <v-icon class="icon-style-reverse">mdi-language-java</v-icon>
        </v-col>
        <v-col cols="12" sm="12" md="12" class="sub-col-up">
          <v-icon class="icon-style">mdi-language-typescript</v-icon>
        </v-col>
        <v-col cols="12" sm="12" md="12" class="sub-col-up">
          <v-col class="text-style">
            <v-col cols="12" class="d-flex justify-center">
              Hi There! &nbsp;
              <v-icon class="hand-wave-icon">mdi-hand-wave-outline</v-icon>
            </v-col>

            <v-col cols="12" class="p-0 d-flex justify-center">
              <span>I'm</span>
              <section class="text-animation">
                <div class="first"><div>Muhammed Yusuf Sarıbaş</div></div>
                <div class="second"><div>Full Stack Developer</div></div>
                <div class="third"><div>Web Developer</div></div>
              </section>
            </v-col>
          </v-col>
        </v-col>
        <v-col cols="12" sm="12" md="12" class="sub-col-up">
          <span class="material-symbols-outlined icon-style icon-style-reverse">
            flutter
          </span>
        </v-col>
        <v-col cols="12" sm="12" md="12" class="sub-col-up">
          <img
            class="icon-style"
            style="padding: 30px 0px; width: 80px"
            src="\src\assets\icon _spring boot.png"
          />
          <v-icon class="icon-style">mdi-nodejs</v-icon>
        </v-col>
      </v-col>
    </v-img>
    <v-col cols="12" sm="12" md="12" class="p-0 d-flex flex-wrap">
      <v-col offset="2" sm="8" md="8" class="section hidden-md-and-down">
        <v-col>
          <h1>About Me</h1>
        </v-col>
        <v-divider :thickness="5" style="margin: 10px"></v-divider>
        <v-col
          cols="12"
          sm="12"
          md="12"
          class="d-flex flex-wrap justify-space-between"
        >
          <v-col cols="8" sm="8" md="8" class="p-0">
            <span>
              I am a dedicated full-stack web developer with expertise in
              <span class="about-me-distinct-text"> Vue.js and Spring</span>
              .</span
            >
            <br />
            <br />
            <span>
              I have a deep love for programming and am fluent in languages
              ​​like
              <span class="about-me-distinct-text"> Java and JavaScript</span>
              .</span
            >
            <br />
            <br />

            <span>
              My interests revolve around building innovative web technologies
              and products. I enjoy creating user-friendly and efficient web
              applications.
            </span>
            <br />
            <br />
          </v-col>
          <v-col cols="3" sm="3" md="3" class="p-0">
            <v-avatar size="200px">
              <v-img
                alt="John"
                src="src/assets/images/mys-avatar-1.jpg"
              ></v-img>
            </v-avatar>
          </v-col>
        </v-col>
        <v-divider :thickness="5" style="margin: 10px"></v-divider>
      </v-col>

      <v-col cols="12" class="section hidden-md-and-up justify-center">
        <h1 class="about-me-header">About Me</h1>

        <v-col cols="12" sm="12" md="12">
          <span class="about-me-text">
            I am a dedicated full-stack web developer with expertise in
            <span class="about-me-distinct-text"> Vue.js and Spring</span>
            .</span
          >
          <br />
          <br />
          <span class="about-me-text">
            I have a deep love for programming and am fluent in languages ​​like
            <span class="about-me-distinct-text"> Java and JavaScript</span>
            .</span
          >
          <br />
          <br />

          <span class="about-me-text">
            My interests revolve around building innovative web technologies and
            products. I enjoy creating user-friendly and efficient web
            applications.
          </span>
          <br />
          <br />
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-avatar size="250px">
            <v-img alt="John" src="src/assets/images/mys-avatar-1.jpg"></v-img>
          </v-avatar>
        </v-col>
      </v-col>
      <v-col cols="12" sm="12" md="12" class="section-contact-me p-0">
        <v-col class="d-flex justify-center flex-wrap">
          <h2 class="text-black">Connect with Me</h2>
          <v-col cols="12" md="12" sm="12" class="d-flex justify-center">
            <v-btn
              icon
              size="35"
              class="social-media-icon"
              v-for="(icon, i) in icons"
              :key="i"
            >
              <v-icon>{{ icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-col>
      </v-col>
    </v-col>
  </v-col>
</template>

<style scoped>
.VImg {
  height: calc(100vh - 90px);
}
@keyframes text-animation {
  0% {
    margin-top: 0;
  }
  10% {
    margin-top: 0;
  }
  20% {
    margin-top: -4.62rem;
  }
  30% {
    margin-top: -4.62rem;
  }
  40% {
    margin-top: -10.24rem;
  }
  60% {
    margin-top: -10.24rem;
  }
  70% {
    margin-top: -4.62rem;
  }
  80% {
    margin-top: -4.62rem;
  }
  90% {
    margin-top: 0;
  }
  100% {
    margin-top: 0;
  }
}
@keyframes scale {
  25% {
    transform: scale(0.8);
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(-15deg);
  }
  75% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
    transform: rotate(0);
  }
}
@keyframes scale-reverse {
  25% {
    transform: scale(0.8);
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(15deg);
  }
  75% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
    transform: rotate(0);
  }
}

.social-media-icon {
  margin: 7px;
}
.about-me-header {
  margin: 50px;
  color: black;
}
.about-me-text {
  color: black;
}
.about-me-distinct-text {
  color: #c10528;
}
.p-0 {
  padding: 0;
}

@media screen and (min-width: 1024px) {
  .section {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 35px;
  }
  .hand-wave-icon {
    font-size: 50px;
  }
  .first div {
    background-color: #20a7d8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .second div {
    background-color: #cd921e;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .third div {
    background-color: #c10528;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-animation div:first-child {
    animation: text-animation 8s infinite;
  }

  .text-animation > div > div {
    padding: 0.25rem 0.75rem;
    height: 2.81rem;
    margin-bottom: 2.81rem;
    display: inline-block;
  }

  .text-animation {
    font-size: 27px;
    height: 50px;
    overflow: hidden;
    margin-left: 1rem;
  }

  .parent-col {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .sub-col-up {
    height: 55%;
    display: flex;
    justify-content: center;
    align-items: start;
  }
  .sub-col-down {
    height: 55%;
    display: flex;
    justify-content: center;
    align-items: end;
  }
  .text-style {
    color: white;
    font-size: 35px;
  }
  .icon-style {
    color: white;
    font-size: 180px;
    /*animation: scale 5s infinite;*/
  }

  .icon-style-reverse {
    color: white;
    font-size: 180px;
    /*animation: scale-reverse 5s infinite;*/
  }
  .section-contact-me {
    margin: 15px 0 40px 0;
  }
}

@media screen and (max-width: 1024px) {
  .section {
    display: flex;
    flex-wrap: wrap;
  }
  .section-contact-me {
    margin: 20px 0 40px 0;
  }
  .hand-wave-icon {
    font-size: 40px;
  }
  .first div {
    background-color: #20a7d8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .second div {
    background-color: #cd921e;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .third div {
    background-color: #c10528;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-animation div:first-child {
    animation: text-animation 8s infinite;
  }

  .text-animation > div > div {
    padding: 0.25rem 0.75rem;
    height: 2.81rem;
    margin-bottom: 2.81rem;
    display: inline-block;
  }

  .text-animation {
    font-size: 12px;
    height: 50px;
    overflow: hidden;
    margin-left: 1rem;
  }

  .parent-col {
    height: 100%;
    /*display: flex;
    flex-wrap: wrap;*/
    justify-content: center;
    align-items: start;
  }
  .sub-col-up {
    height: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .text-style {
    color: white;
    font-size: 25px;
  }
  .icon-style {
    color: white;
    font-size: 75px;
    /*animation: scale 5s infinite;*/
  }

  .icon-style-reverse {
    color: white;
    font-size: 75px;
    /*animation: scale-reverse 5s infinite;*/
  }
}
</style>
