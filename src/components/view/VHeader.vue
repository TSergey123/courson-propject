<template lang="">
  <div class="header">
    <div class="header__content">
    <div class="header__logo">
     <router-link 
    :to="{name: 'main-page'}">
    <img class="header__logo-image" src="../../assets/img/courson-logo.svg" alt="logo">
    </router-link>
     <router-link 
    :to="{name: 'catalog-page'}">
   <link-button class="header__link-button">Каталог</link-button>
    </router-link>
    </div>
    <div class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item">В кабинет предприятия</li>
        <li class="header__nav-item">В кабинет слушателя</li>
      </ul>
    </div>
    </div>
  </div>
</template>
<script>
import LinkButton from "@/components/ui/LinkButton.vue"

export default {
  name: 'v-header',
  components: {
    LinkButton,
  }
}
</script>
<style scoped>
.header {
  padding: 20px;
  background: #fdfdfd;
}

.header__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 80%;
  margin: 0 auto;
}

.header__logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}

.header__nav {
  flex: 4;
}

.header__nav-list {
  display: flex;
  list-style-type: none;
  flex-direction: row;
  justify-content: flex-end
}

.header__nav-item {
  color: #475563;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
}

.header__nav-item::after {
  content: "|";
  padding: 0 10px;
}

.header__nav-item:last-child::after {
  display: none;
}

.header__link-button {
  margin-left: 20px;
}

.header__logo-image {
  width: 220px;
  margin-top: 10px;
}

</style>