<template>
  <div class="shadow-md homepage-head h-18 w-auto p-10">
    <h1 class="text-3xl font-black text-white">
      Agent list
    </h1>
  </div>
  <div class="shadow-md homepage-body h-18 w-auto p-10 relative">
    <AgentList />
  </div>
  <footer>
    &copy; Valorant API
  </footer>
</template>
<script>
import AgentList from "../components/AgentList.vue";

export default {
  name: "Agents",
  components: {
    AgentList
  }
};
</script>
<style>
</style> 