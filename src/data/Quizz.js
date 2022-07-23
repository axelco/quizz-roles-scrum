export default [
    {
        name : "prio-besoins",
        type : "default",
        label : "Qui a pour mission de prioriser les besoins des Utilisateurs ?",        
        answers : [
            {
                id : 1,
                answer : "Product Owner",
                icon : "fas fa-user-astronaut",
            },
            {
                id : 2,
                answer : "Scrum Master",
                icon : "fas fa-user-graduate",
            },
            {
                id : 3,
                answer : "Développeurs",
                icon :"fas fa-user-ninja"
            }                         
        ],
        rightAnswerId : 1,
        description : "Le Product Owner est LE point d'entrée pour les utilisateurs et Parties prenantes. Il a pour mission de comprendre les besoins des Utilisateurs et d'être capable de proposer, en collaboration avec l'équipe de développement, la meilleure solution"
    },
    {
        name : "responsabilite-equipe",
        type : "default",
        label : "Le Product Owner est responsable de l'ensemble de l'équipe. Vrai ou faux ?",        
        answers : [
            {
                id : 1,
                answer : "Vrai",
                icon : "fas fa-check",
            },
            {
                id : 2,
                answer : "Faux",
                icon : "fas fa-times",
            }            
        ],
        rightAnswerId : 2,
        description : "L'un des buts premiers du cadre Scrum est de garantir une horizontalité au sein de l'équipe. Aucune personne n'est leader de l'équipe, et la responsabilité est donc du fait de l'équipe entière, et non d'une seule Personne."
    },    
    {
        name : "alimentation-backlog",
        type : "default",
        label : "Le Product Owner est le seul à pouvoir alimenter le product backlog. Vrai ou Faux ?",
        answers : [
            {
                id : 1,
                answer : "Vrai",
                icon : "fas fa-check",
            },
            {
                id : 2,
                answer : "Faux",
                icon : "fas fa-times",
            }            
        ],
        rightAnswerId : 1,
        description : "Le product Owner rédige, affine l'ensemble des User Stories. Les développeurs ne rédigent jamais de contenu dans le backlog. Cela permet au Product Owner d'avoir une maîtrise complète de son backlog."
    },
    {
        name : "ma-question-3",
        type : "default",
        label : "Qui est garant.e de la priorisation du product backlog ?",
        answers : [
            {
                id : 1,
                answer : "Product Owner",
                icon : "fas fa-user-astronaut",
            },
            {
                id : 2,
                answer : "Scrum Master",
                icon : "fas fa-user-graduate",
            },
            {
                id : 3,
                answer : "Développeurs",
                icon :"fas fa-user-ninja"
            }           
        ],
        rightAnswerId : 1,
        description : "Le Product Owner doit être capable de prioriser son backlog en fonction de la valeur des US, et de leur niveau de maturité dans le Definition of Ready."
    },
    {
        name : "ma-question-4",
        type : "default",
        label : "Qui a pour rôle de garantir le bon déroulement de la méthodologie Scrum ?",
        answers : [
            {
                id : 1,
                answer : "Product Owner",
                icon : "fas fa-user-astronaut",
            },
            {
                id : 2,
                answer : "Scrum Master",
                icon : "fas fa-user-graduate",
            },
            {
                id : 3,
                answer : "Développeurs",
                icon :"fas fa-user-ninja"
            }          
        ],
        rightAnswerId : 2,
        description : "Le scrum Master est en effet le garant du respect des normes de Scrum. Il peut donc conseiller son Product Owner dans la manière de rédiger ses stories, Vérifier que les Definition of Done et Definition of Ready sont bien respectés, de veiller au bon déroulement des cérémonies. "
    },
    {
        name : "conflit",
        type : "default",
        label : "Un conflit éclate entre des membres de l'équipe. Qui a pour responsabilité de comprendre et essayer de résoudre la situation ?",
        answers : [
            {
                id : 1,
                answer : "Product Owner",
                icon : "fas fa-user-astronaut",
            },
            {
                id : 2,
                answer : "Scrum Master",
                icon : "fas fa-user-graduate",
            },
            {
                id : 3,
                answer : "Développeurs",
                icon :"fas fa-user-ninja"
            }            
        ],
        rightAnswerId : 2,
        description : "Le Scrum Master doit être présent en cas de conflit interne dans l'équipe, afin de comprendre l'origine du conflit. De là il peut proposer une solution, ou faire appel à la hiérarchie pour en trouver."
    },
    {
        name : "gestion-budget",
        type : "default",
        label : "Qui est en charge du suivi du budget et/ou du suivi de la vélocité ?",
        answers : [
            {
                id : 1,
                answer : "Product Owner",
                icon : "fas fa-user-astronaut",
            },
            {
                id : 2,
                answer : "Scrum Master",
                icon : "fas fa-user-graduate",
            },
            {
                id : 3,
                answer : "Développeurs",
                icon :"fas fa-user-ninja"
            }          
        ],
        rightAnswerId : 1,
        description : "Le Product Owner doit surveiller la vélocité de son équipe, voire aussi du budget dans le cas où l'entreprise fonctionne par exemple en jours/homme."
    },
    {
        name : "engagement-sprint",
        type : "default",
        label : "C'est le product Owner qui " 
        +"s'engage sur la réalisation des items du Sprint. Vrai ou faux ?",
        answers : [
            {
                id : 1,
                answer : "Vrai",
                icon : "fas fa-check",
            },
            {
                id : 2,
                answer : "Faux",
                icon : "fas fa-times",
            }             
        ],
        rightAnswerId : 2,
        description : "Le product Owner fixe un objectif de Sprint, mais ce sont les développeurs qui prennent les engagements. Ils sont ainsi capables de refuser certaines US proposées par le Product Owner car ils ne peuvent pas s'engager à les réaliser dans le sprint."
    },
    {
        name : "roadmap",
        type : "default",
        label : "Qui est en charge de la Roadmap ?",
        answers : [
            {
                id : 1,
                answer : "Product Owner",
                icon : "fas fa-user-astronaut",
            },
            {
                id : 2,
                answer : "Scrum Master",
                icon : "fas fa-user-graduate",
            },
            {
                id : 3,
                answer : "Développeurs",
                icon :"fas fa-user-ninja"
            }              
        ],
        rightAnswerId : 1,
        description : "Le product Owner a pour Mission d'établir la raodmap du Produit pour donner de la visilité à ses parties prenantes. En Agilité, la roadmap n'est pas figée et le product owner a pour responsabilité de valider les priorisations"
    },    
]