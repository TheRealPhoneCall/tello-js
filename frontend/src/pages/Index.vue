<template>
  <q-page class="flex flex-center">
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
    <tello-tilt></tello-tilt>
  </q-page>
</template>

<script>
import TelloTilt from '../components/TelloTilt'

export default {
  name: 'PageIndex',
  components: {
    TelloTilt
  }
}
</script>
