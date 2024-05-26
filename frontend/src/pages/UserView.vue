<template>
  <div>All Users</div>
</template>

<script setup>
import { fetchUsers } from '@/apis/users';
import { onMounted } from 'vue';


onMounted(async () => {
  await fetchUsers();
})
</script>
<style></style>
