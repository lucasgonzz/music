<template>
  
  <div id="app">
    <h1>Artistas mas escuchados</h1>
    <spinner v-show="loading"></spinner>
    <select v-model="selectedCountry" name="" id="">
      <option v-for="country in countries" :value="country.value">{{ country.name }}</option>
    </select>
    <ul>
      <artist v-for="artist in artists" :artist="artist" :key="artist.mbid">{{artist.name}}</artist>
    </ul>
  </div>
</template>

<script>
import getArtists from './api'
import Artist from './components/Artist'
import Spinner from './components/Spinner'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      artists: [],
      countries: [
        {name: 'Argentina', value: 'argentina'},
        {name: 'Colombia', value: 'colombia'},
        {name: 'España', value: 'spain'},
      ],
      selectedCountry: 'argentina',
      loading: true
    }
  },
  components: {
    Artist,
    Spinner
  },
  mounted() {
    this.refreshartists()
  },
  methods: {
    refreshartists() {
      var self = this
      // this.artists = []
      this.loading = true
      getArtists(this.selectedCountry)
      .then(artists => {
        self.loading = false
        self.artists = artists
      })
    },
  },
  watch: {
    selectedCountry() {
      this.refreshartists()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
