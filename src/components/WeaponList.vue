<template>
  <button
    @click="goBack()"
    class="py-2 bg-blue-50 text-red-500 w-24 font-bold rounded-md absolute left-10 top-16"
  >
    Back
  </button>
  <div v-if="err">{{ err }}</div>
  <div
    v-else-if="weapons.length"
    v-for="weapon in weapons"
    :key="weapon.uuid"
  >
    {{ weapon.displayName }}
    <!-- <List :uuid="weapon.uuid" :displayIcon="weapon.displayIcon" :displayName="weapon.displayName" :description="weapon" -->
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import getWeapons from "../composables/getWeapons";
import List from "../components/List.vue";

export default {
  name: "WeaponList",
  setup() {
    const { weapons, err, getData } = getWeapons();

    getData();
    return { weapons, err };
  }
};
</script>

<style>
</style>