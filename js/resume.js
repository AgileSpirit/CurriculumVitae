function AppController($scope) {
    $scope.resume = {
        identity: {
            firstName: 'Jérémy',
            lastName: 'Buget',
            birthDate: '20-05-1984',
            phoneNumber: '+33 6 17 06 01 05',
            email: 'jbuget@agile-spirit.fr'
        },
        presentation: {
            title: 'Agile Software Engineer',
            description: '<p>Ingénieur logiciel spécialisé dans les <strong>RIA web et mobile</strong>, je pratique depuis plusieurs années le <strong>développement agile</strong> (XP, Scrum, Kanban). Actuellement <strong>ScrumMaster</strong> au sein d’une grande structure avec une forte culture « traditionnelle » (cycle en V, Waterfall), cela me permet de confronter au quotidien les idées véhiculées par l’Agililité à la réalité d’une organisation souvent lourde et complexe. C’est aussi l’occasion d’élaborer et de mener une conduite du changement dans un contexte difficile, où les acteurs, à différents niveaux, sont partagés entre l’intérêt sincère et le doute permanent face à ces nouvelles méthodes de travail.</p>' + 
                         '<p>Au-delà de l’Agilité, je suis un <strong>passionné</strong> d’ergonomie et de design et plus généralement d’<strong>Expérience Utilisateur</strong>. Je pense, au même titre que l’Agilité – les deux étant complémentaires – que c’est un <strong>domaine d’avenir</strong> qui se dessine et se construit aujourd’hui. J’aime concevoir des interfaces soignées, belles, pratiques, homogènes, instinctives et réactives. Je suis aussi un fervent praticien de CSS et Photoshop est mon ami.</p>' + 
                         '<p>J’anime un blog - <a href="http://agile-spirit.fr/blog" target="blank">Agile Spirit</a> - dans lequel j’exprime mes opinions et je partage mes idées / expériences à propos de l’Agilité, du Développement Logiciel et de l’Expérience Utilisateur. Je possède également un compte Twitter <a href="https://twitter.com/AgileSpirit">@AgileSpirit</a> et un <a href="https://github.com/AgileSpirit">repository Github</a> sur lequel j’expose mes projets personnels et autres travaux de veille techno.</p>',
            profileImage: 'img/profileId_03_small.png'
        },
        experiences: [{
            company: 'OCTO Technology',
            title: 'Architecte SI / Tech Lead',
            missions: [{
                name: 'Questionnaire Santé',
                startDate: '01-04-2013',
                endDate: '01-07-2013',
                description: {
                    functional: '',
                    methodological: '',
                    technical: ''
                },
                tasks: [
                'Etude et réponse à lappel d’offre',
                'Elaboration et suivi du Product Backog',
                'Mise en place du socle technique et de l’usine logicielle'
                ],
                tags: [
                'Agile',
                'Java',
                'Wicket',
                'Spring',
                'Hibernate',
                'CXF',
                'HTML',
                'CSS',
                'Unix',
                'Tomcat',
                'Maven',
                'Mercurial'
                ]
            }]
        }, {
            company: 'Objet Direct',
            title: '',
            missions: [{
                name: 'IWeb',
                startDate: '01-07-2011',
                endDate: '01-07-2013',
                summary: '',
                description: {
                    functional: '<p>IWeb est une usine de sites marketing visant à gérer et présenter des produits financier pour le compte et au sein d’un institut financier mondial. Il s’agit d’une application multi-produits (listés / structurés), multi-pays (Espagne, Italie, Allemagne, Angleterre, Suède, Autriche) et multi-terminaux (web & mobile).</p>',
                    methodological: '<p>Le projet a été géré, développé et est maintenu en mode Agile : Scrum pour la conduite du projet depuis la phase de conception jusqu’à la mise en production ; Kanban pour la conduite du projet concernant les travaux de maintenance et d’amélioration ; Extrem Programming pour les pratiques de développement ; et Lean pour le management global, en particulier la gestion des risques.</p>',
                    technical: '<p>L’architecture comprend une couche métier (back-office) qui récupère et traite en temps réel les données fournies par un service tiers développé en interne, une couche contibution (middle-office) qui permet à des contributeurs de saisir via un CMS intégré des données commerciales et une couche de présentation (front-office) qui s’appuie sur les deux autres pour présenter aux utilisateurs (professionnels & particuliers) les produits gérés par la plateforme.</p>'
                },
                tasks: [
                'Mise en place de méthodes agiles : Scrum, Kanban, XP (TDD, Pair Programming, Definition of Done, Continuous Integration, etc.)',
                'Participation et animation des comités de pilotage',
                'Accompagnement de l’AMOA/MOA sur la rédaction et la validation des besoins fonctionnels',
                'Conception, développement, mise en production, stabilisation, optimisation et maintenance de la plateforme'
                ],
                tags: [
                'Scrum',
                'Kanban',
                'XP',
                'Java',
                'Tomcat',
                'Oracle',
                'PostgreSQL',
                'Maven',
                'SVN',
                'Wicket',
                'Hippo CMS',
                'Spring',
                'Hibernate',
                'ActiveMQ',
                'JMX',
                'CXF'
                ]
            }, {
                name: 'IPilotage',
                startDate: '01-09-2010',
                endDate: '01-09-2011',
                description: {
                    functional: '<p>IPilotage est un logiciel web de gestion des risques pour le compte d’un institut financier mondial. C’est une application métier critique à destination des Contrôleurs de Risque, dont le rôle est de s’assurer que les transactions financières réalisées par l’entité de Trading respectent les législations économiques et bancaires en rigueur (ex : Traité Bâle II) et ne mettent pas en danger la pérennité du groupe.</p>',
                    methodological: '<p>La consolidation des données permettant les différentes analyses par les utilisateurs se fait selon plusieurs axes correspondant aux différents types de risques (livraison, exécution, pays, émetteur, etc.). La volumétrie des données traitées quotidiennement est de l’ordre de plusieurs millions. Les calculs sont réalisés en back-office par des batches (PLSQL/Java) qui alimentent les bases de données, sur lesquelles reposent la soixantainte d’interfaces de la partie middle-office.</p>',
                    technical: ''
                },
                tasks: [
                'Rédaction de spécifications fonctionnelles et techniques',
                'Conception, développement et maintenance de l’application'
                ],
                tags: [
                'Lean',
                'REST',
                'Java',
                'Oracle',
                'Tomcat',
                'Maven',
                'SVN',
                'JSF2',
                'Spring',
                'Hibernate',
                'Jersey',
                'JAXB'
                ]
            }, {
                name: 'EyeWebHome',
                startDate: '01-03-2010',
                endDate: '01-08-2010',
                description: {
                    functional: '<p>EyeWebHome est une plateforme de vidéo-surveillance grand public. L’application est multi-sites - possibilité de monitorer plusieurs endroits à la fois - et multi-terminaux - les sites monitorés sont accessibles en temps réel depuis un navigateur web, un client lourd (Mac / PC) ou un Iphone. De plus, le logiciel permet de gérer différentes caméras, programmer des enregistrements à l’avance et de définir des alertes basées sur la détection de mouvement pour des zones d’un site et des plages horaires données. Enfin, l’application met à disposition des administrateurs une interface back-office de gestion des utilisateurs.</p>',
                    methodological: '',
                    technical: '<p>Le coeur de l’application repose sur un client lourd (Flex + AIR2) qui permet de (1) récupérer les différents flux vidéo transmis par les caméras préalablement configurées (via un programme-agent C++), (2) traiter les données reçues (déclenchement des alertes, enregistrement sur le poste, diffusion en local) et (3) diffuser les vidéos (temps réel ou différé) aux autres clients connectés via des Sockets Web. A noter que dans le cadre du projet, un format de compression/diffusion vidéo spécifique a été défini, permettant ainsi de s’affranchir d’un serveur media payant tel que Flash Media Server.</p>'
                },
                tasks: [
                'Conception, développement et maintenance de l’application',
                'Mise en place de la transmission vidéo en streaming via les Web Sockets',
                'Accompagnement du client lors de la phase de recette'
                ],
                tags: [
                'Scrum',
                'XP',
                'Flex',
                'AIR',
                'Java',
                'C++',
                'Tomcat',
                'GAE',
                'SVN',
                'Parsley',
                'Spring',
                'Hibernate',
                'OpenCV',
                'CXF'
                ]
            }]
        }, {
            company: 'People in action',
            title: '',
            missions: [{
                name: '',
                startDate: '',
                endDate: '',
                summary: '',
                description: {
                    functional: '',
                    methodological: '',
                    technical: ''
                },
                tasks: ['task1', 'task2', 'task3'],
                tags: ['tag1', 'tag2', 'tag3']
            }, {
                name: '',
                startDate: '',
                endDate: '',
                summary: '',
                description: {
                    functional: '',
                    methodological: '',
                    technical: ''
                },
                tasks: ['task1', 'task2', 'task3'],
                tags: ['tag1', 'tag2', 'tag3']
            }, {
                name: '',
                startDate: '',
                endDate: '',
                summary: '',
                description: {
                    functional: '',
                    methodological: '',
                    technical: ''
                },
                tasks: ['task1', 'task2', 'task3'],
                tags: ['tag1', 'tag2', 'tag3']
            }]
        }],
        formations: [
        {},
        {}
        ]
    };
}
