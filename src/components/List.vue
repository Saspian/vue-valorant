<template>
  <figure class="flex bg-gray-100 h-60 rounded-xl m-8 relative">
    <img
      :src="displayIcon"
      alt="agent.developerName"
      class="mx-auto absolute bottom-0"
    >
    <div class="pt-6 pl-64 text-center w-full space-y-4">
      <h3
        class="font-extrabold text-3xl px-10 cursor-pointer text-left"
        @click="getAgentDetail(uuid)"
      >
        {{ displayName }}
      </h3>
      <blockquote>
        <p class="text-lg font-semibold px-10 text-justify">
          {{ description}}
        </p>
      </blockquote>
      <figcaption class="font-medium px-10 text-left">
        <div class="text-gray-500">
          {{ role?.displayName }}
        </div>
      </figcaption>
    </div>
  </figure>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  name: "List",
  props: ["uuid", "displayIcon", "displayName", "description", "role"],
  setup() {
    const router = useRouter();
    const getAgentDetail = id => {
      router.push({
        name: "AgentDetails",
        params: {
          id
        }
      });
    };

    return { getAgentDetail };
  }
};
</script>
<style>
</style>