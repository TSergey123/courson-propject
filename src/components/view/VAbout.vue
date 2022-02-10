<template lang="">
  <div>
    <section class="main-page__section about">
    <div class="about__intro">
    <h1 class="main-page__title about__title">
       Развивайтесь с Courson
    </h1>
    <p class="main-page__text about__text">
        Online-образование для вас и вашей компании <br>
        от крупнейших учебных центров
    </p>
    </div>
    <div class="about__content">
      <div class="about__video">
        <video
         width="500" height="490"
         src="https://cdn.courson.ru/dist/videos/marketing/home/desktop/cast3.mp4"
         autoplay
         controls
         loop
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></video>
      </div>
      <div class="about__info">
        <ul class="about__list">
          <li class="about__item">
            <div class="about__item-image"></div>
            <div class="about__item-info">
            <h3 class="about__item-title">Документ установленного государством образца</h3>
            <p class="about__item-text">После успешного прохождения обучения вы получаете официальный документ</p>
            </div>
          </li>
          <li class="about__item">
            <div class="about__item-image"></div>
            <div class="about__item-info">
            <h3 class="about__item-title">Учиться легко, просто и комфортно</h3>
            <p class="about__item-text">Кабинеты для организаторов обучения и слушателей с интуитивным и дружелюбным интерфейсом</p>
            </div>
          </li>
          <li class="about__item">
            <div class="about__item-image"></div>
            <div class="about__item-info">
            <h3 class="about__item-title">Поддержка в чате</h3>
            <p class="about__item-text">Операторы online-чата поддержки быстро помогут решить любые вопросы</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  </div>
</template>
<script>
export default {
  name: "v-about"

}
</script>
<style scopped>

.about__intro {
  text-align: center;
}

.about__content {
  display: flex;
  flex-direction: row;
}

.about__video {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
}

.about__info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 1;
}

.about__list {
  list-style-type: none;
}

.about__item {
  display: flex;
  flex-direction: row;
  border: 1px solid #eee;
  border-radius: 24px;
  margin-bottom: 25px;
  padding: 11px;
}

.about__item-image {
  background: url(../../assets/img/about-item-image.png) no-repeat center;
  width: 25%;
}

.about__item-info {
  display: flex;
  flex-direction: column;
  width: 75%;
  text-align: left;
  padding: 10px;
  flex-shrink: 2;
}

.about__item-title {
  font-size: 20px;
  margin: 0;
}

.about__item-text {
  font-size: 16px;
  margin: 0;
} 
</style>