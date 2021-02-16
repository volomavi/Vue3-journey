<template>
  <ul>
    <saved-resource
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></saved-resource>
  </ul>
</template>

<script>
import SavedResource from './SavedResource.vue';

export default {
  inject: ['resources'],
  components: {
    SavedResource
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
