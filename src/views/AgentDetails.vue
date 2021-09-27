<template>
  <div class="shadow-md homepage-head h-18 w-auto py-10">
    <h1 class="text-3xl font-black text-white">
      Agent profile
    </h1>
  </div>
  <div v-if="err">{{ err }}</div>
  <div
    v-else-if="agent"
    class="shadow-md homepage-head h-18 w-auto"
  >
    <AgentDetail :agentDetail="agent" />
  </div>
  <div
    v-else
    class="text-white"
  >
    Loading...
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import AgentDetail from "../components/AgentDetail.vue";
import getAgent from "../composables/getAgent";

export default {
  name: "AgentDetails",
  components: {
    AgentDetail
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const { agent, err, getData } = getAgent(id);
    getData();
    return { agent, err };
  }
};
</script>
<style scoped>
</style>