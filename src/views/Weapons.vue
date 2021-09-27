<template>
  <div class="shadow-md homepage-head h-18 w-auto p-10">
    <h1 class="text-3xl font-black text-white">
      Weapons list
    </h1>
  </div>
  <div class="shadow-md homepage-body h-18 w-auto p-10 relative">
    <WeaponList />
  </div>
  <footer>
    &copy; Valorant API
  </footer>
</template>

<script>
import WeaponList from "../components/WeaponList.vue";

export default {
  name: "Weapons",
  components: {
    WeaponList
  }
};
</script>

<style>
</style>