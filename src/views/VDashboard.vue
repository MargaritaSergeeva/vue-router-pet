<template>
  <div class="card">
    <h1>Привет на главной</h1>

    <p>
      Тут ты можешь перейти на любую страницу и почитать заранее заготовленные
      письма :)
    </p>

    <router-link :to="{ name: 'email' }">To Mail</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    const answer = confirm("Вы уверены, что хотите перейти?");
    answer ? next() : next(false);
  },
};
</script>

<style scoped></style>
