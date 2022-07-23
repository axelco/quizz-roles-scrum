<template>
    <!-- Single Question Component -->
    <div class="card">
        <div class="progress" style="border-radius:0 ;  height: 1.2rem">
            <div 
                class="progress-bar bg-success" 
                role="progressbar" 
                :style="'width: '+getProgress()+'% ;'" 
                :aria-valuenow="getProgress()" 
                aria-valuemin="0" 
                aria-valuemax="100">{{nbAnswers}} / {{nbQuestions}}</div>
        </div>        
        <ul class="list-group list-group-flush">
        
            <li class="list-group-item py-3 py-lg-4">
                <h2 class="h4 mb-0 text-center">{{question.label}}</h2>

            </li>
            <li v-if="!showResult" class="list-group-item py-3 py-lg-4">
                <div class="radio-tile-group">
                    <div v-for="item in question.answers"  :key="item.id" 
                    class="input-container"
                    >
                        <input  
                        class="radio-button"
                        type="radio" 
                        :name="question.name" 
                        :id="question.name+'_'+item.id" 
                        :value="item.id"
                        @change="handleAnswerChange" 
                        />
                        <div class="radio-tile">
                            <i :class="'radio-icon '+item.icon"></i>
                            <label 
                            :for="question.name+'_'+item.id" 
                            class="radio-tile-label"
                            >{{item.answer}}</label>
                        </div>
                    </div>    
                </div> 

            </li>            
            <li :class="isCorrect ? 'list-group-item list-group-item-success py-3' : 'list-group-item list-group-item-danger py-3'" v-if="showResult">
                <h3 class="mb-3 text-center">
                    <i :class="isCorrect ? 'fas fa-check-circle me-2' : 'fas fa-times-circle me-2'"></i> 
                    {{isCorrect ? "Bonne réponse" : "Mauvaise réponse"}}
                </h3>

                <p class="text-center">{{question.description}}</p>               
            </li>            
            <li class="list-group-item py-3" v-if="selectedValue !== null">
                <div class="d-grid gap-2">
                    <button 
                        v-if="!showResult" 
                        @click="handleResultClick"
                        class="btn btn-lg btn-primary"
                        >Je valide ma réponse</button>
                    <button v-else
                        class="btn btn-lg btn-dark"
                        @click="handleNextQuestionClick"
                        >{{isFinished ? 'Voir le résultat de ton quizz' : 'Question Suivante'}}</button>
                    
                </div>
            </li>

        </ul>      
    </div>    
</template>

<script>
export default {
    name : "QuestionItem",

    props : {
        question: {
            type: Object,
            required: true,
        },     
        currentQuestion : {
            type : Number,
            required: true,
        },  
        nbQuestions: {
            type : Number,
            required: true,
        },
        nbAnswers: {
            type : Number,
            required: true,
        },        
        isFinished : {
            type : Boolean,
            required: true,
        }                   
    },

    data(){
        return{
            selectedValue : null,
            isCorrect : null,
            showResult : false,
        }
    },

    computed:{
        // As the game starts at 0 technicaly speaking, we increment the value +1 for the front side
        currentQuestionForFront(){
            return this.currentQuestion +1
        },

    },

    methods : { 


        // Return the progress of the 
        getProgress(){
            return Math.ceil((this.nbAnswers / this.nbQuestions)*100)
        },

        handleAnswerChange(e){
            this.selectedValue = e.target.value;

        },

        handleNextQuestionClick(){
            if(this.isFinished){
                this.$emit('view-score-event')
            }else{
                this.$emit('next-question-event')
            }
            
            this.reset()
        },

        handleResultClick(){
            
             const check = parseInt(this.selectedValue) === parseInt(this.question.rightAnswerId) 
            ? true : false

            this.$emit('answer-validated', {isCorrect : check})
            this.isCorrect = check
            this.showResult = true
        },

        reset(){
            this.selectedValue = null
            this.isCorrect = null
            this.showResult = false
        },
    },
}
</script>