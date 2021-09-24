<template>
  <div v-if="err">{{ err }}</div>
  <div
    v-else-if="agents.length"
    v-for="agent in agents"
    :key="agent.uuid"
  >
    <div class="container mx-auto px-4">{{ agent.displayName }}</div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import getAgents from "../composables/getAgents";
export default {
  name: "AgentList",
  setup() {
    const { agents, err, getData } = getAgents();
    getData();
    return { agents, err };
  }
};
</script>

<style>
</style>