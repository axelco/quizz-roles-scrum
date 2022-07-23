<template>
  <section class="container text-center">
    <div>
      <img src="../assets/agile-team.png" />
      <h1 class="my-3 my-lg-5">Quizz sur les rôles du scrum (débutant)</h1>
      <p class="lead mb-3 mb-lg-5">Répondez à quelques questions pour savoir si vous avez un niveau de connaissance de base des différents rôles d'une équipe Scrum en agilité.</p>
      <router-link class="btn btn-lg btn-primary" :to="{ name: 'quizz'}">C'est parti !</router-link>    
          
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>
