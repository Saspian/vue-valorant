<template>
  <div class="notfound-background">
    <h1 class="text-3xl notfound-title font-black text-white">
      Page does not exist!
    </h1>
  </div>
</template>
<script>
export default {
  name: "NotFound"
};
</script>
<style scoped>
.notfound-background {
  background: #e65154;
  height: 100vh;
  width: 100vw;
}
.notfound-title {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>