<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" placeholder="Name" v-model="newFriendName" />
    </div>
    <div>
      <label>Phone</label>
      <input
        type="tel"
        placeholder="123-456-789"
        v-model="newFriendPhoneNumber"
      />
    </div>
    <div>
      <label>E-Mail</label>
      <input
        type="email"
        placeholder="best@friend.com"
        v-model="newFriendEmail"
      />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
  export default {
    emits: ["add-friend"],
    data() {
      return {
        newFriendName: "",
        newFriendPhoneNumber: "",
        newFriendEmail: "",
      };
    },
    methods: {
      submitData() {
        console.log("dat is submitting");
        this.$emit(
          "add-friend",
          this.newFriendName,
          this.newFriendPhoneNumber,
          this.newFriendEmail
        );
      },
    },
  };
</script>
