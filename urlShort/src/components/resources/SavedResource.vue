<template>
  <li>
    <base-card>
      <header>
        <p>{{ link }}</p>

        <base-button mode="flat" @click="deleteResource(id)">
          Delete
        </base-button>
      </header>
      <nav>
        <a @click="urlSwap()" :href="givenUrl">{{description}}</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'link'],
  inject: ['deleteResource'],
  data() {
    return {
      givenUrl: this.description,
      subUrl: this.link
    }
  },
  methods: {
    urlSwap() {
      this.givenUrl = this.subUrl
    }
  }
};
</script>

<style>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
