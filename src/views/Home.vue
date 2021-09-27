<template>
  <div class="shadow-md homepage-head h-18 w-auto p-10">
    <h1 class="text-3xl font-black text-white font-sans">
      VALORANT
    </h1>
  </div>
  <div class="shadow-md homepage-body h-screen w-auto p-10 text-white flex justify-around font-bold font-sans">
    <router-link to="/agents">
      <button class="py-3 px-10 bg-white rounded-md text-red-500 font-bold">Agents list</button>
    </router-link>
    <router-link to="/weapons">
      <button class="py-3 px-10 bg-white rounded-md text-red-500 font-bold">Weapons list</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
.homepage-head {
  background: #e65154;
}
.homepage-body {
  background: #21252b;
}
</style>
