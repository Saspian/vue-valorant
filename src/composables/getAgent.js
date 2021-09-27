import { ref } from "vue";

const getAgent = (id) => {
    const agent = ref({});
    const err = ref(null);

    const getData = async () => {
        try {
            const data = await fetch("https://valorant-api.com/v1/agents/"+id);
            if(!data.ok) {
                throw Error("Data not found");
            }
            const response = await data.json();
            agent.value = await response.data;
        } catch (error) {
            err.value = error.message;
            console.error(err.value);
        }       
    }
    return { agent, err, getData }
}
export default getAgent;