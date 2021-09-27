import { ref } from "vue";

const getWeapons = () => {
    const weapons = ref([]);
    const err = ref(null);

    const getData = async () => {
        try {
            const data = await fetch("https://valorant-api.com/v1/weapons");
            if(!data.ok) {
                throw Error("data not found");
            }
            const response = await data.json();
            weapons.value = await response.data;
        } catch (error) {
            err.value = error.message;
            console.error(err.value)
        }
    }
    return { weapons, err, getData }
}
export default getWeapons;