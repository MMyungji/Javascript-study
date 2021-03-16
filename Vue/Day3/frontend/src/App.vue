<template>
  <div id="app">
    <Nav-Menu/>
    <router-view/>
  </div>
</template>


<script>
import NavMenu from './components/NavMenu'
export default{
  components: {
    NavMenu
  }
}
</script>
