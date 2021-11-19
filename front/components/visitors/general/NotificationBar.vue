<template>
  <transition
    tag="div"
    enter-active-class="animated slideInTop"
    mode="out-in"
    leave-active-class="animated slideOutBottom"
  >
    <div
      v-for="err in notificationErrors"
      :key="err.id"
      :class="'full-background ' + err.color"
    >
      {{ err.text }}
    </div>
  </transition>
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
.animated {
  -webkit-animation-duration:0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  z-index: 4;
}
@keyframes slideInTop {
  from {
    margin-top: -41px;
  }
  to {
    margin-top: 0px;
  }
}
@keyframes slideOutBottom {
  from {
    margin-top: 0px;
  }
  to {
    margin-top: -41px;
  }
}
.slideInTop {
  animation-name: slideInTop;
}
.slideOutBottom {
  animation-name: slideOutBottom;
}
</style>
