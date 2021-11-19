<template>
  <div>
  <div
    v-for="err in notificationErrors"
    :key="err.id"
    :class="'full-background ' + err.color"
  >
    {{ err.text }}
  </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationBar',
  data: () => ({
    notificationErrors: [{ color: 'red', id: 0, text: 'Oh, we are having some issues' }]
  })
}
</script>

<style scoped>
.full-background {
  padding: 10px;
  z-index: 0;
  position: relative;
  text-align: center;
  color: rgb(231, 230, 230);
}
</style>
