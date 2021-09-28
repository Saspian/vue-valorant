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
    class="px-96 h-64"
  >
    <figure class="flex bg-gray-100 h-60 rounded-xl m-8 relative">
      <img
        :src="weapon.displayIcon"
        alt="agent.developerName"
        :class="[ (weapon.displayName === 'Frenzy' || weapon.displayName === 'Classic') ? 'w-52 left-12' : 'max-w-xs' ,'absolute bottom-12']"
      >
      <div class="pt-6 pl-80 text-center w-full space-y-4">
        <h3
          class="font-extrabold text-3xl px-10 cursor-pointer text-left"
          @click="getAgentDetail(weapon.uuid)"
        >
          {{ weapon.displayName }}
        </h3>
        <blockquote>
          <p class="text-lg font-semibold px-10 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores explicabo adipisci qui numquam doloribus autem quis corrupti doloremque. Expedita, perferendis labore id ad deleniti dolorem accusamus omnis qui facilis soluta.
          </p>
        </blockquote>
        <figcaption class="font-medium px-10 text-left">
          <div class="text-gray-500">
            {{ weapon?.shopData?.categoryText }}
          </div>
        </figcaption>
      </div>
    </figure>
  </div>
  <div
    v-else
    class="text-white"
  >Loading...</div>
</template>

<script>
import { useRouter } from "vue-router";
import getWeapons from "../composables/getWeapons";

export default {
  name: "WeaponList",
  setup() {
    const router = useRouter();
    const { weapons, err, getData } = getWeapons();
    getData();
    const goBack = () => {
      router.go(-1);
    };
    return { weapons, err, goBack };
  }
};
</script>

<style>
</style>