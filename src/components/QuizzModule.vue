<template>

    <ResultItem 
        v-if="viewScore" 
        :score="scoreRatio" 
        :nbRightAnswers="nbRightAnswers"
        :nbQuestions="nbQuestions"
        @retry-event="resetQuizz"
        />

    <QuestionItem 
        v-else
        :question="questions[currentQuestion]" 
        :nbQuestions="nbQuestions"
        :nbAnswers="nbAnswers"
        :currentQuestion="currentQuestion"
        :isFinished="isFinished"        
        @answer-validated="setupChanges"
        @next-question-event="getToNextQuestion"
        @view-score-event="goToScore"
         />
</template>

<script>
import QuizzContent from '../data/quizz-roles-scrum-content.json';
import QuestionItem from '../components/QuestionItem.vue'
import ResultItem from './ResultItem.vue';

export default {
  name: 'QuizzModule',
  components :{
      QuestionItem,
      ResultItem
  },

  data(){
      return{
          viewScore : false,
          isFinished : false,       // true if all questions replied from User
          currentQuestion : 0,      // Current Question read by User
          nbAnswers : 0,            // Number of Questions replied from user
          nbRightAnswers : 0,       // Number of correct answers from User
          nbQuestions : 0,          // Total number of questions
          questions : [],           // Questions of the quizz
          scoreRatio : 0,           // A ratio from 0 to 100
      }
  },

  methods : {
      getToNextQuestion(){          
          this.currentQuestion = this.currentQuestion +1

      },
      goToScore(){
          this.viewScore = true
          this.scoreRatio = Math.ceil((this.nbRightAnswers / this.nbQuestions)*100)
      },
      // Method that handle the status of answers
      // payload : object return from event to check if answer is correct
      // Also check if the Quizz is finished
      setupChanges(payload){
          this.nbAnswers = this.nbAnswers +1
          this.nbRightAnswers = payload.isCorrect ? this.nbRightAnswers +1 : this.nbRightAnswers
          this.isFinished = this.nbAnswers === this.nbQuestions ? true : false;
      },

      // Reset all data and randomise questions order
      resetQuizz(){
        this.viewScore = false
        this.isFinished = false
        this.currentQuestion = 0
        this.nbAnswers = 0
        this.nbRightAnswers = 0
        this.scoreRatio = 0
        this.randomizeQuestionsOrder()
      },
      // Sort the questions objects random
      randomizeQuestionsOrder(){
        this.questions = QuizzContent.sort(() => Math.random() - 0.5);
      },
  },
  beforeMount(){
    // We import the questions content and randomize the order
    this.randomizeQuestionsOrder()
    // Then we set the total number of questions
    this.nbQuestions = this.questions.length
  },     
  
}
</script>
