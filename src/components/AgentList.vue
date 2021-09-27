<template>
  <button
    @click="goBack()"
    class="py-2 bg-blue-50 text-red-500 w-24 font-bold rounded-md absolute left-10 top-16"
  >
    Back
  </button>
  <div v-if="err">{{ err }}</div>
  <div
    v-else-if="agents.length"
    v-for="agent in agents"
    :key="agent.uuid"
    class="px-96 h-64"
  >
    <List
      :uuid="agent.uuid"
      :displayIcon="agent.displayIcon"
      :description="agent.description"
      :displayName="agent.displayName"
      :role="agent.role"
    />
  </div>
  <div
    v-else
    class="text-white"
  >
    Loading...
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import getAgents from "../composables/getAgents";
import List from "../components/List.vue";

export default {
  name: "AgentList",
  components: {
    List
  },
  setup() {
    const router = useRouter();
    const { agents, err, getData } = getAgents();
    getData();
    const getAgentDetail = id => {
      router.push({
        name: "AgentDetails",
        params: {
          id
        }
      });
    };
    const goBack = () => {
      router.go(-1);
    };
    return { agents, err, goBack };
  }
};
</script>

<style>
</style>