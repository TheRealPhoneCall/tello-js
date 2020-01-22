<template>
  <q-layout view="lHr lpR lFr">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-btn dense flat round icon="menu" @click="right = !right" /> -->
      </q-toolbar>

      <!-- <q-tabs align="center">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs> -->
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <div class="q-pa-md">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Tello App
        </q-toolbar-title>
        <q-space/>
        <div class="q-pa-md fixed-bottom flex flex-center">
          <control-buttons />

        </div>
      </div>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <div class="column" style="height: 100%">
        <div class="col-6 bg-secondary">
          IMU  
          <!-- <tello-tilt/> -->
        </div>
        <!-- <q-space/> -->
        <div class="col-6 bg-grey-3">
          MAP  
        </div>  
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          By Ian
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
// import TelloTilt from '../components/TelloTilt'
import ControlButtons from '../components/ControlButtons'

export default {
  data () {
    return {
      left: false,
      right: false
    }
  },
  components: {
    // TelloTilt
    ControlButtons
  }
}
</script>