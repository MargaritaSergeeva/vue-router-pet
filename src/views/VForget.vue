<template>
  <div class="card">
    <h2>Забыл пароль? Так вспоминай!</h2>

    <router-link to="/login" v-slot="{ navigate }">
      <button class="btn" @click="navigate">Обратно к логину</button>
    </router-link>
  </div>
</template>
