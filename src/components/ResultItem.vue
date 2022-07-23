<template>
    <div class="card">
        <ul class="list-group list-group-flush">
            <li :class="setResultColor">
                <h1 class="h2 mb-3">{{setTitle}}</h1>
                <p class="h5">Tu as correctement répondu à {{nbRightAnswers}} questions sur {{nbQuestions}},<br/>
                 ce qui te fait un taux de bonne réponses de <strong>{{this.score}}</strong> %</p>
            </li>  
            <li class="list-group-item py-3 py-lg-4">
                <div class="d-grid gap-2">
                    <button 
                    class="btn btn-lg btn-dark" 
                    @click="handleRetryClick"
                    >Refaire le quizz</button>
                </div>
                
            </li>          
        </ul>        
    </div>
    

</template>

<script>
export default {

    name : 'ResultItem.vue',
    props : {
        score: {
            type: Number,
            required: true,
        },    
        nbRightAnswers: {
            type: Number,
            required: true,
        },       
        nbQuestions: {
            type: Number,
            required: true,
        },                                     
    },
    computed : {

        setResultColor(){
            let style = 'list-group-item py-3 py-lg-4 list-group-item-';
            if(this.score === 100){
                style += "success"
            }
            else if(this.score > 80){
                style += "success"
            }
            else if(this.score > 60){
                style += "info"
            }
            else if(this.score > 50){
                style += "warning"
            }            
            else{
                style += "danger"
            }

            return style;
        },

        setTitle(){
            let title = '';
            if(this.score === 100){
                title = "C'est un sans faute 😎 !"
            }
            else if(this.score > 80){
                title = "Bien joué.e 😁"
            }
            else if(this.score > 70){
                title = "Belle performance 😉"
            }            
            else if(this.score > 60){
                title = "Pas mal 😉"
            }
            else if(this.score > 50){
                title = "Tu peux encore progresser 😋"
            }            
            else{
                title = "Va falloir revoir les bases 😇"
            }

            return title;
        }
    },
    methods : {
        handleRetryClick(){
            this.$emit('retry-event')
        }
    },
}
</script>