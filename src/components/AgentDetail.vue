<template>
  <div class="shadow-md homepage-body role h-18 w-auto p-10">
    <div class="flex justify-between h-auto">
      <img
        :src="agentDetail.fullPortrait"
        :alt="agentDetail.displayName"
        class="w-full max-w-screen-md h-auto agent-profile-image"
      >
      <img
        :src="ImageLinks"
        :alt="agentDetail?.role?.uuid"
        class="background-role-image"
      >
      <div class="w-5/6 mr-5 flex flex-col text-white font-sans pt-5 pr-52">
        <h1 class="text-3xl text-center font-black m-2">
          {{ agentDetail.displayName }}
        </h1>
        <p class="m-2">
          Role: {{ agentDetail?.role?.displayName }}
        </p>
        <p class="m-2">
          {{ agentDetail.description }}
        </p>
        <h3 class="border-b text-lg font-medium m-3 py-5">Abilities</h3>
        <div
          v-for="ability in agentDetail.abilities"
          :key="ability.slot"
        >
          <Ability :ability="ability" />
        </div>
        <div class="flex justify-end">
          <button
            class="py-2 bg-blue-50 text-red-500 w-24 font-bold rounded-md"
            @click="goBack()"
          >Back</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { computed } from "vue";
import Ability from "../components/Ability.vue";

export default {
  name: "AgentDetail",
  components: {
    Ability
  },
  setup(props) {
    const router = useRouter();
    const ImageLinks = computed(() => {
      const roleIcon = props.agentDetail?.role?.displayIcon;
      return roleIcon;
    });
    const goBack = () => {
      router.go(-1);
    };
    return { ImageLinks, goBack };
  },
  props: ["agentDetail"]
};
</script>
<style>
.agent-profile-image {
  z-index: 3;
}
.background-role-image {
  width: 100px;
  position: absolute;
  top: 25%;
  left: 5%;
  /* right: 79%; */
  transform: translate(50%, -50%);
  opacity: 0.3;
}
</style>