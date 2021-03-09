// 최상단 컴포넌트 = FriedChicken
// 자식들로부터 부모가 데이터 받아오기

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/friedChicken">치킨</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
