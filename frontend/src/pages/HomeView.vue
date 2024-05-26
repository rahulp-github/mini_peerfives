<template>
  <div>
    <button @click="handleCreateUser">Create User</button>
  </div>
</template>

<script setup>
import router from "@/router";
const handleCreateUser = () => {
  router.push("/new");
};
</script>
<style>

</style>
