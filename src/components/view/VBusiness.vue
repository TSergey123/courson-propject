<template lang="">
  <div>
    <section class="main-page__section business">
    <div class="business__info">
      <h1 class="main-page__title business__title">
        Кабинет предприятия – оптимальное <br> решение для бизнеса</h1>
    </div>
    <div class="business__content">
      <div class="business__video">
        <img class="business__video-background" width="660" height="440" src="../../assets/img/pixel-book.png" alt="pixel book">
        <video class="business__video-source"
        width="570"
        height="420"
        preload
        autoplay
        loop
        src="https://cdn.courson.ru/dist/videos/marketing/home/desktop/cast3.mp4">
        </video>
      </div>
      <div class="business__about">
        <ul class="business__list">
          <li 
           @click="cardActiveAnimation"
           :class="{active: isCardActive}"
           class="business__item business__item--data">
            <i class="business__item-icon material-icons icons__close">account_circle</i>
            <h1 class="business__item-title">Бессрочное хранение документов</h1>
            <p class="business__item-text">После завершения обучения документы можно скачать в кабинете предприятия</p>
          </li>
         <li 
           @click="cardActiveAnimation"
           :class="{active: isCardActive}"
           class="business__item business__item--data">
            <i class="business__item-icon material-icons icons__close">account_circle</i>
            <h1 class="business__item-title">Прогресс обучения</h1>
            <p class="business__item-text">Динамика и успеваемость сотрудников доступна с любого устройства</p>
          </li>
          <li
           @click="cardActiveAnimation"
           :class="{active: isCardActive}"
           class="business__item">
            <i class="business__item-icon material-icons icons__close">account_circle</i>
            <h1 class="business__item-title">Рассылка доступов</h1>
            <p class="business__item-text">Удобное распределение обучения сотрудникам</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  </div>
</template>
<script>
export default {
  name: 'v-business',
   data() {
    return {
      isCardActive: false,
    }
  },
  methods: {
    cardActiveAnimation() {
      this.isCardActive = !this.isCardActive
    },
  }
}
</script>
<style scopped>
  
.business__info {
  text-align: center;
}

.business__content {
  display: flex;
  flex-direction: row;
}

.business__video {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
}

.business__video-image {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.business__video-source {
  position: absolute;
  left: 43px;
  top: 0;
  z-index: 1;
}

.business__about {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.business__list {
  list-style-type: none;
}

.business__item {
  border: 1px solid #eee;
  border-radius: 24px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;
  margin-bottom: 30px;
}

.business__item-title {
  width: 90%;
  padding-left: 6px;
  margin: 0;
}

.business__item-text {
  margin: 0;
}

.active {
  transition: all linear 1s;
  position: relative;
}

.active::after {
  content: "";
  position: absolute;
  transition: all linear 1s;
  width: 90%;
  left: 20px;
  bottom: 0;
  border-bottom: 1px solid green
}
</style>