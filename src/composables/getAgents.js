import { ref } from "vue";

const getAgents = () => {
    const agents = ref([]);
    const err = ref(null);

    const getData = async () => {
        try {
            const data = await fetch("https://valorant-api.com/v1/agents");
            if(!data.ok) {
                throw Error("Data not found");
            }
            const response = await data.json();
            agents.value = await response.data;
        } catch (error) {
            err.value = error.message;
            console.error(err.value);
        }       
    }
    return { agents, err, getData }
}
export default getAgents;