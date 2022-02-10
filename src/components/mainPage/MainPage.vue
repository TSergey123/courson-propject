<template>
  <div class="main-page">
    <main-intro></main-intro>
    <v-about></v-about>
    <v-cooperate></v-cooperate>
    <v-business></v-business>
  </div>
</template>
<script>
import MainIntro from "@/components/view/MainIntro.vue"
import VAbout from "@/components/view/VAbout.vue"
import VCooperate from "@/components/view/VCooperate.vue"
import VBusiness from "@/components/view/VBusiness.vue"

export default {
  name: 'main-page',
  components: { MainIntro, VAbout, VCooperate, VBusiness },

}
</script>
<style scopped>
.main-page {
  margin-top: 100px;
}

.main-page__section {
  margin-top: 20px;
  position: relative;
  padding-bottom: 18%;
}

.main-page::after {
  content: "";
  background: url(../../assets/img/main-page-background-image.png) no-repeat top
    right 100%;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: -70px;
  left: 50%;
}

.main-page__title {
  font-family: Effra, sans-serif;
  color: #192a3c;
  font-weight: 700;
  line-height: 1.2;
  font-size: 56px;
}

.main-page__text {
  font-family: Montserrat, Arial, sans-serif;
  font-size: 20px;
  color: #475563;
  font-weight: 500;
  line-height: 28px;
}
</style>