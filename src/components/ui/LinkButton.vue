<template>
  <div class="link-button">
    <slot class="link-button__text">qwerty</slot>
  </div>
</template>
<script>
export default {
  name: 'link-button',
}
</script>
<style>
.link-button {
  background-color: #05c86a;
  border-radius: 25px;
  font-size: 18px;
  line-height: 40px;
  padding: 0 32px;
  text-decoration: none;
  color: white;
}
.link-button:hover {
  background-color: #20bf55; 
  background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
}
.link-button__text {
  text-decoration: none;
}
a {
  text-decoration: none;
}
</style>