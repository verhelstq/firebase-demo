<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 v-for="(item , i) in items" :key="i">{{item.glossary.title}}</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src



import firebase from 'firebase';

export default {
  name: 'Home',
  data(){
    return {
      items : []
    }
  },
  mounted(){
    let _self = this;
    firebase.firestore().collection('Requests').get().then(docs =>{
      docs.forEach(doc =>{
        _self.items.push(doc.data())
      })
    })
  }
}
</script>
