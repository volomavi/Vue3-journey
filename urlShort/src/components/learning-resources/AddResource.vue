<template>
  <base-dialog v-if="invalidInput" title="Invalid Input" @close="confirmAlert">
    <template #default>
      <p>It appears you have an invalid input.</p>
      <p>Please fill out all fields.</p>
    </template>
    <template #actions>
      <base-button @click="confirmAlert">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <!-- <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div> -->
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          ref="descInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input name="link" id="link" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: {
    BaseDialog
  },
  inject: ['addResource'],
  data() {
    return {
      invalidInput: false
    };
  },
  methods: {
    submitData() {
      const enteredTitle = ''
      const enteredDescription = this.$refs.descInput.value;
      const enteredUrl = this.$refs.linkInput.value;

      

      this.addResource(enteredTitle, enteredDescription, enteredUrl);
    },
    confirmAlert() {
      this.invalidInput = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
