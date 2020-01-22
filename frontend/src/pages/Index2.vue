<template>
  <q-page class="flex flex-center">
    <div>
      <button @click="showMessage = !showMessage">Click me!</button>
      <p v-if="showMessage">{{ dog }}: Hallo, kuya {{ name }}!</p>
    </div>
  </q-page>
</template>

<script>
// import TelloTilt from '../components/TelloTilt'

export default {
  name: 'PageIndex',
  data () {
    return {
      name: "Ian",
      dog: "Zarah",
      showMessage: false
    }
  }
}
</script>

<style scoped>

</style>
