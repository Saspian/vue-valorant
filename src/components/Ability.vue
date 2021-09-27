<template>
  <div class="flex justify-start items-center text-justify">
    <div class="w-52 flex flex-col items-center m-5">
      <img
        :src="ability.displayIcon"
        :alt="ability.displayName"
        class="w-10"
      >
      <p class="flex-wrap">{{ ability.displayName }}</p>
    </div>
    <div class="w-10/12">
      {{ ability.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Ability",
  props: ["ability"]
};
</script>

<style scoped>
</style>