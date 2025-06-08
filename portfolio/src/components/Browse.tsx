import { useState } from 'react';
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ProjectObject from './Scenes/ProjectObject'; // Assurez-vous que le chemin est correct

const tagOptions = [
  {
    label: "Type de projet",
    options: [
      { value: "Network Architecture", label: "Network Architecture" },
      { value: "Web-Application", label: "Web-Application" },
      { value: "Game Developpement", label: "Game Developpement" },
      { value: "Data Analysis", label: "Data Analysis" },
      { value: "Algorithm", label: "Algorithm" },
      { value: "AI", label: "AI" }
    ]
  },
  {
    label: "Languages/Frameworks",
    options: [
      { value: "react", label: "React" },
      { value: "typescript", label: "TypeScript" },
      { value: "node", label: "Node.js" },
      { value: "python", label: "Python" },
      { value: "java", label: "Java" },
      { value: "csharp", label: "C#" },
      { value: "R", label: "R" },
      { value: "SQL", label: "SQL" }
    ]
  },
  {
    label: "Outils",
    options: [
      { value: "Proxmox", label: "Proxmox" },
      { value: "Unity", label: "Unity" },
      { value: "Hugging Face", label: "Hugging Face" },
    ]
  }
];
const projets = [
  {
    title: "Minicoffee Network",
    description: "Création d'un réseau d'entreprise fictif",
    descriptionlg: "Ce projet consiste en la création d'un réseau d'entreprise fictif pour Minicoffee, incluant la configuration de routeurs, et de multiples services (DHCP, NAS, DNS interne, Wiki, LDAP, etc.).",
    image: 'projectimages/minicoffee.png',
    obj: 'minicoffee',
    tags: ['Network Architecture', 'Proxmox']
  },
  {
    title: 'ArtSwipe',
    description: 'Une application pour organiser vos futures visites de musées',
    descriptionlg: "Artswipe est une application web avec un fonctionnement similaire au célèbre Tinder, mais pour les musées. Vous pouvez swiper les œuvres d'art pour les aimer ou les ignorer, et ainsi organiser vos futures visites de musées, l'application utilise un algorithme de recommandation, qui permet de vous suggerer des musées adaptés a vos goûts artistiques.",
    image: 'projectimages/Artswipe.png', 
    obj: 'tableau',
    tags: ['react', 'backend', 'node', 'Algorithm']
  },
  {
    title: 'Costle',
    description: 'Un jeu multijoueur aux mécaniques non intuitives',
    descriptionlg: "Costle est un jeu multijoueur, construit grace au moteur de jeu Unity, il est inspiré notamment du jeu 'Muck', qui propose une experience de jeu unique et hilarante, avec des mécaniques de jeu non-intuitives, et un gameplay basé sur la survie.",
    image: 'projectimages/Costle.png', 
    obj: 'costle',
    tags: ['Game Developpement','Unity', 'csharp']
  },
  {
    title: 'Nutri-Score',
    description: 'Analyse de données liées a la nutrition',
    descriptionlg: "Ce projet consiste en l'analyse de données liées a la nutrition, en utilisant le langage R et SQL. Pour se faire, j'ai utilisé la base de donnée libre OpenFoodFacts, qui contient des informations sur les produits alimentaires, et j'ai réalisé des analyses statistiques pour en tirer des conclusions sur la qualité nutritionnelle des produits.",
    image: 'projectimages/nutriscore.jpg', 
    obj: 'nutriscore',
    tags: ['Data Analysis', 'R', 'SQL']
  },
  {
    title: 'Llama 1.1B',
    description: "Déploiement d'un modèle d'IA en local",
    descriptionlg: "Durant ce projet, j'ai déployé le modèle d'IA Llama 1.1B en local, en utilisant la plateforme Hugging Face. De par les contraintes materielle de l'ordinateur sur lequel j'ai installé ce modèle, j'ai du utiliser plusieurs techniques d'optimisation, comme la quantification des poids du modèle, la gestion des tokens d'entrées/sorties et la mise en place d'une IA 'routeur' (60M param) pour rediriger les requetes complexes.",
    image: 'projectimages/Tinyllama.png', 
    obj: 'Llama',
    tags: ['AI','Network Architecture','Hugging face', 'python']
  },
]


type TagOption = { value: string; label: string; };

const Selectcomp = ({ onBestMatchList }: { onBestMatchList: (indices: number[]) => void }) => {
  const [selectedTags, setSelectedTags] = useState<TagOption[]>([]);

  const handleChange = (options: readonly TagOption[] | null) => {
    setSelectedTags(options ? [...options] : []);
    // Recherche automatique de la liste des meilleurs projets à chaque changement
    const selectedValues = options ? options.map(tag => tag.value) : [];
    const sorted = projets
      .map((item, idx) => ({
        ...item,
        idx,
        commonTags: item.tags.filter(tag => selectedValues.includes(tag)).length
      }))
      .filter(item => item.commonTags > 0)
      .sort((a, b) => b.commonTags - a.commonTags);
    const indices = sorted.map(item => item.idx);
    onBestMatchList(indices);
  };

  return (
    <div>
      <Select
        isMulti
        options={tagOptions}
        onChange={handleChange}
        value={selectedTags}
        placeholder="Sélectionne des tags..."
      />
    </div>
  );
};

export default function Browse() {
  const [filteredIndices, setFilteredIndices] = useState<number[]>(projets.map((_, idx) => idx));
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? filteredIndices.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === filteredIndices.length - 1 ? 0 : prev + 1));

  const currentProject = projets[filteredIndices[current]];

  return (
    <div id="projetspage" className="h-[100vh] w-full flex flex-col items-start justify-center relative bg-white">
        <div className="w-full h-[20%] flex items-center justify-between">
            <h1
                className="m-0 ml-[10%] p-0  leading-none text-[clamp(5rem,10vw,10rem)]"
                style={{ fontFamily: "'Vina Sans', sans-serif" }}
                >
                Mes projets
                </h1>
            <div className='w-[40%]'>
                <Selectcomp onBestMatchList={(indices) => {
                  setFilteredIndices(indices.length > 0 ? indices : projets.map((_, idx) => idx));
                  setCurrent(0);
                }} />
            </div>
        </div>
        <div className="w-full h-[70%] flex justify-between p-10">  
            <div className='h-full w-[30%] flex flex-col justify-around bg-gray-100 p-5'>
              <h1 className="text-3xl" style={{ fontFamily: "'Outfit', sans-serif" }}>{currentProject.description}</h1>
              <p>{currentProject.descriptionlg}</p>
              <div className="flex flex-wrap mt-4">
                {currentProject.tags && currentProject.tags.map((tag: string) => (
                  <h2
                    key={tag}
                    className='text-2xl bg-gray-300 p-3 rounded-xl m-5'
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {tag}
                  </h2>
                ))}
              </div>
            </div>
            <div className='h-full w-[30%] flex flex-col items-center justify-center  p-5'>
                <div className='h-[30%] flex justify-around items-center w-full'>
                  {filteredIndices.length > 1 && (
                    <button onClick={prev} className='p-5'>
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                  )}
                  <h1 className="text-4xl " style={{ fontFamily: "'Outfit', sans-serif" }}>{currentProject.title}</h1>
                  {filteredIndices.length > 1 && (
                    <button onClick={next} className='p-5'>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button >
                  )}
                </div>
                <div className='h-[60%] w-full'><ProjectObject objName={currentProject.obj}/></div>
            </div>
            <div className='h-full w-[30%] bg-gray-100 p-5'>
                <img className='object-contain w-full h-full' src={currentProject.image} alt="" />
            </div>
        </div>
    </div>
  );
}