'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { cn } from '@/lib/utils';

// Mapping des ressources vers leurs URLs officielles
const resourceLinks: Record<string, string> = {
  // Phase 1
  'FreeCodeCamp - Certification Responsive Web Design': 'https://www.freecodecamp.org/learn/responsive-web-design/',
  'MDN Web Docs - Introduction à HTML': 'https://developer.mozilla.org/fr/docs/Web/HTML',
  'CSS-Tricks - Guide Complet Flexbox': 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
  'JavaScript.info - Les fondamentaux de JavaScript': 'https://fr.javascript.info/',
  'Eloquent JavaScript (livre)': 'https://eloquentjavascript.net/',
  'FreeCodeCamp - Algorithmes JavaScript et structures de données': 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
  'Git & GitHub - Learn Git Branching': 'https://learngitbranching.js.org/',
  'VS Code et extensions essentielles': 'https://code.visualstudio.com/docs/editor/extension-marketplace',
  'Chrome DevTools - Guide de débogage': 'https://developer.chrome.com/docs/devtools/',
  // Phase 2
  'ES6 et au-delà - Nouvelles fonctionnalités JavaScript': 'https://www.freecodecamp.org/news/es6-guide/',
  'Asynchrone: Promises, Async/Await': 'https://javascript.info/async',
  'API DOM et manipulation avancée': 'https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model',
  'Documentation officielle React': 'https://fr.react.dev/',
  "React Hooks et gestion d'état": 'https://fr.react.dev/learn/state-a-complete-guide',
  'React Router pour la navigation': 'https://reactrouter.com/en/main',
  'Design responsive avancé': 'https://web.dev/responsive-web-design-basics/',
  'Frameworks CSS comme Tailwind ou Bootstrap': 'https://tailwindcss.com/',
  'Principes fondamentaux UX/UI': 'https://uxdesign.cc/',
  // Phase 3
  'Introduction à Node.js': 'https://nodejs.dev/learn',
  'Créer des API REST avec Express': 'https://expressjs.com/fr/starter/basic-routing.html',
  'Gestion des erreurs et middleware': 'https://expressjs.com/fr/guide/error-handling.html',
  'SQL vs NoSQL: MongoDB et PostgreSQL': 'https://www.mongodb.com/nosql-explained',
  'Modélisation de données': 'https://www.lucidchart.com/pages/fr/modelisation-de-donnees',
  'Requêtes et opérations CRUD': 'https://www.digitalocean.com/community/tutorials/crud-operations-meaning',
  'Déploiement sur Netlify, Vercel ou Heroku': 'https://www.netlify.com/',
  "Configuration d'environnements": 'https://12factor.net/fr/config',
  'Introduction aux conteneurs (Docker)': 'https://docs.docker.com/get-started/',
  // Phase 4
  'Python pour le développement web (Django/Flask)': 'https://www.djangoproject.com/start/',
  'Pandas et manipulation de données': 'https://pandas.pydata.org/docs/',
  'NumPy et calcul scientifique': 'https://numpy.org/doc/',
  'Algèbre linéaire et statistiques': 'https://fr.khanacademy.org/math/linear-algebra',
  'Khan Academy - Cours de mathématiques': 'https://fr.khanacademy.org/',
  "3Blue1Brown - Essence de l'algèbre linéaire": 'https://www.3blue1brown.com/lessons/linear-algebra',
  'Scikit-learn pour le machine learning': 'https://scikit-learn.org/stable/',
  'TensorFlow & Keras pour l\'apprentissage profond': 'https://www.tensorflow.org/',
  'Cours Stanford CS229 Introduction au Machine Learning': 'https://see.stanford.edu/Course/CS229',
  // Phase 5
  'Réseaux de neurones convolutifs (CNN)': 'https://en.wikipedia.org/wiki/Convolutional_neural_network',
  'Réseaux de neurones récurrents (RNN) et LSTM': 'https://en.wikipedia.org/wiki/Recurrent_neural_network',
  'Deep Learning Book par Ian Goodfellow': 'https://www.deeplearningbook.org/',
  'Traitement du langage naturel avec spaCy': 'https://spacy.io/',
  'Transformer models & BERT': 'https://huggingface.co/transformers/model_doc/bert.html',
  'HuggingFace Transformers': 'https://huggingface.co/transformers/',
  'Participation à des compétitions Kaggle': 'https://www.kaggle.com/competitions',
  'Contribution à des projets open-source': 'https://opensource.guide/how-to-contribute/',
  "Création d'un blog technique": 'https://www.gatsbyjs.com/docs/how-to/blog/',
};

export default function Home() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
  const [expandedSubsection, setExpandedSubsection] = useState<string | null>(null);
  
  const phases = [
    {
      id: 1,
      title: "Phase 1: Fondamentaux du Web (2-3 mois)",
      color: "hsl(214, 82%, 59%)",
      description: "Apprendre les bases du développement web",
      subsections: [
        {
          id: "1-1",
          title: "HTML & CSS",
          resources: [
            "FreeCodeCamp - Certification Responsive Web Design",
            "MDN Web Docs - Introduction à HTML",
            "CSS-Tricks - Guide Complet Flexbox",
            "Projet: Page de profil personnelle simple"
          ]
        },
        {
          id: "1-2",
          title: "JavaScript Fondamental",
          resources: [
            "JavaScript.info - Les fondamentaux de JavaScript",
            "Eloquent JavaScript (livre)",
            "FreeCodeCamp - Algorithmes JavaScript et structures de données",
            "Projet: Calculatrice ou Todo List interactive"
          ]
        },
        {
          id: "1-3",
          title: "Outils de Développement",
          resources: [
            "Git & GitHub - Learn Git Branching",
            "VS Code et extensions essentielles",
            "Chrome DevTools - Guide de débogage",
            "Projet: Créer un dépôt GitHub pour tous tes projets"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Phase 2: Développement Frontend Avancé (3-4 mois)",
      color: "hsl(181, 50%, 45%)",
      description: "Maîtriser les frameworks et bibliothèques modernes",
      subsections: [
        {
          id: "2-1",
          title: "JavaScript Avancé",
          resources: [
            "ES6 et au-delà - Nouvelles fonctionnalités JavaScript",
            "Asynchrone: Promises, Async/Await",
            "API DOM et manipulation avancée",
            "Projet: Application météo utilisant une API externe"
          ]
        },
        {
          id: "2-2",
          title: "React.js",
          resources: [
            "Documentation officielle React",
            "React Hooks et gestion d'état",
            "React Router pour la navigation",
            "Projet: Application de gestion de tâches avec React"
          ]
        },
        {
          id: "2-3",
          title: "Responsive Design & UX",
          resources: [
            "Design responsive avancé",
            "Frameworks CSS comme Tailwind ou Bootstrap",
            "Principes fondamentaux UX/UI",
            "Projet: Portfolio responsive moderne"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Phase 3: Backend & Full Stack (3-4 mois)",
      color: "hsl(142, 51%, 47%)",
      description: "Comprendre le développement côté serveur",
      subsections: [
        {
          id: "3-1",
          title: "Node.js & Express",
          resources: [
            "Introduction à Node.js",
            "Créer des API REST avec Express",
            "Gestion des erreurs et middleware",
            "Projet: API pour ton application React"
          ]
        },
        {
          id: "3-2",
          title: "Bases de Données",
          resources: [
            "SQL vs NoSQL: MongoDB et PostgreSQL",
            "Modélisation de données",
            "Requêtes et opérations CRUD",
            "Projet: Système de blog avec authentification"
          ]
        },
        {
          id: "3-3",
          title: "Déploiement & DevOps",
          resources: [
            "Déploiement sur Netlify, Vercel ou Heroku",
            "Configuration d'environnements",
            "Introduction aux conteneurs (Docker)",
            "Projet: Déployer ton application full stack"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Phase 4: Transition vers l'IA & ML (4-6 mois)",
      color: "hsl(31, 88%, 57%)",
      description: "Bases pour entrer dans le monde de l'IA",
      subsections: [
        {
          id: "4-1",
          title: "Python pour l'IA",
          resources: [
            "Python pour le développement web (Django/Flask)",
            "Pandas et manipulation de données",
            "NumPy et calcul scientifique",
            "Projet: Dashboard d'analyse de données"
          ]
        },
        {
          id: "4-2",
          title: "Mathématiques pour l'IA",
          resources: [
            "Algèbre linéaire et statistiques",
            "Khan Academy - Cours de mathématiques",
            "3Blue1Brown - Essence de l'algèbre linéaire",
            "Projet: Visualisation de concepts mathématiques"
          ]
        },
        {
          id: "4-3",
          title: "Premiers pas en ML/IA",
          resources: [
            "Scikit-learn pour le machine learning",
            "TensorFlow & Keras pour l'apprentissage profond",
            "Cours Stanford CS229 Introduction au Machine Learning",
            "Projet: Classification d'images simple ou analyse de sentiment"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Phase 5: Spécialisation en IA (6+ mois)",
      color: "hsl(270, 70%, 73%)",
      description: "Approfondir tes connaissances en IA",
      subsections: [
        {
          id: "5-1",
          title: "Apprentissage Profond",
          resources: [
            "Réseaux de neurones convolutifs (CNN)",
            "Réseaux de neurones récurrents (RNN) et LSTM",
            "Deep Learning Book par Ian Goodfellow",
            "Projet: Détection d'objets ou reconnaissance faciale"
          ]
        },
        {
          id: "5-2",
          title: "NLP & LLMs",
          resources: [
            "Traitement du langage naturel avec spaCy",
            "Transformer models & BERT",
            "HuggingFace Transformers",
            "Projet: Chatbot ou système de résumé automatique"
          ]
        },
        {
          id: "5-3",
          title: "Projets & Portfolio",
          resources: [
            "Participation à des compétitions Kaggle",
            "Contribution à des projets open-source",
            "Création d'un blog technique",
            "Projet: Application web avec IA intégrée"
          ]
        }
      ]
    }
  ];
  
  const handlePhaseClick = (phaseId: number) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
    setExpandedSubsection(null);
  };
  
  const handleSubsectionClick = (subsectionId: string) => {
    setExpandedSubsection(expandedSubsection === subsectionId ? null : subsectionId);
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container max-w-5xl">
          <div className="rounded-lg shadow-md bg-card p-6">
            <h1 className="text-3xl font-bold text-center text-card-foreground mb-8">Feuille de Route: Du Web à l&apos;IA</h1>
            <div className="flex flex-col space-y-5">
              {phases.map(phase => (
                <div key={phase.id} className="border rounded-lg overflow-hidden shadow-sm transition-all duration-300">
                  <div 
                    className="flex items-center p-4 cursor-pointer hover:opacity-90 transition-colors"
                    style={{ backgroundColor: `color-mix(in srgb, ${phase.color} 15%, transparent)` }}
                    onClick={() => handlePhaseClick(phase.id)}
                  >
                    <div className="w-9 h-9 rounded-full flex items-center justify-center mr-3 text-white font-bold" style={{ backgroundColor: phase.color }}>
                      {phase.id}
                    </div>
                    <h2 className="text-xl font-semibold flex-grow text-foreground">{phase.title}</h2>
                    <span className="text-2xl text-foreground">{expandedPhase === phase.id ? '−' : '+'}</span>
                  </div>
                  
                  {expandedPhase === phase.id && (
                    <div className="p-5 bg-card">
                      <p className="mb-4 text-muted-foreground">{phase.description}</p>
                      <div className="space-y-3">
                        {phase.subsections.map(subsection => (
                          <div key={subsection.id} className="border rounded overflow-hidden">
                            <div 
                              className={cn(
                                "p-3 cursor-pointer flex justify-between items-center",
                                "bg-secondary/30 hover:bg-secondary/40 transition-colors"
                              )}
                              onClick={() => handleSubsectionClick(subsection.id)}
                            >
                              <h3 className="font-medium">{subsection.title}</h3>
                              <span>{expandedSubsection === subsection.id ? '−' : '+'}</span>
                            </div>
                            
                            {expandedSubsection === subsection.id && (
                              <div className="p-4 bg-background border-t">
                                <ul className="list-disc ml-5 space-y-2">
                                  {subsection.resources.map((resource, idx) => (
                                    <li key={idx} className="text-muted-foreground">
                                      {resourceLinks[resource] ? (
                                        <a
                                          href={resourceLinks[resource]}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="underline hover:text-primary transition-colors"
                                        >
                                          {resource.replace("'", "&apos;")}
                                        </a>
                                      ) : (
                                        resource.replace("'", "&apos;")
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-5 rounded-lg border bg-primary/5 border-primary/20">
              <h3 className="font-bold text-primary mb-3">Conseils pour réussir ton parcours</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>✅ <strong>Régularité</strong> : Consacre 1-2 heures par jour plutôt que des sessions intensives occasionnelles</li>
                <li>✅ <strong>Projets</strong> : Applique tes connaissances en créant des projets personnels dès le début</li>
                <li>✅ <strong>Communauté</strong> : Rejoins des forums comme Stack Overflow, Reddit r/learnprogramming ou Discord</li>
                <li>✅ <strong>Documentation</strong> : Apprends à lire et comprendre la documentation officielle</li>
                <li>✅ <strong>Patience</strong> : La progression n&apos;est pas linéaire, les frustrations font partie du processus</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="container">
          Gibibi Course © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
