<template lang="">
 <section class="main-page__section cooperate">
    <div class="cooperate__info">
    <h1 class="main-page__title cooperate__title">В сотрудничестве с ведущими <br> учебными центрами</h1>
    </div>
    <div class="cooperate__partners">
      <img class="cooperate__partners-image" width="220" src="../../assets/img/partners/partner3.svg" alt="partner">
      <img class="cooperate__partners-image" width="220" src="../../assets/img/partners/partner1.svg" alt="partner">
      <img class="cooperate__partners-image" width="220" src="../../assets/img/partners/partner2.svg" alt="partner">
    </div>
  </section>
</template>
<script>
export default {
  name: 'v-cooperate'
}
</script>
<style>
.cooperate__info {
  text-align: center;
}

.cooperate__partners {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>