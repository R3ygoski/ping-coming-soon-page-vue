<script setup>
import AttributionComponent from './components/AttributionComponent.vue';
import FormComponent from './components/FormComponent.vue';
import ListComponent from './components/ListComponent.vue';

</script>

<template>
  <main class="page">
      <img class="page__logo" src="./assets/logo.svg" alt="Ping Logo"/>
    <h1 class="page__title">We are launching <span>soon!</span></h1>
    <p class="page__desc">Subscribe and get notified</p>
    <FormComponent/>
    <img class="page__dashboard" src="./assets/illustration-dashboard.png" alt="Dashboard"/>
    <ListComponent/>
    <p class="page__copyright-statement">&#169 Copyright Ping. All rights reserved.</p>
    <AttributionComponent/>
  </main>
</template>

<style lang="scss">
  @import './scss/style.scss';
</style>
