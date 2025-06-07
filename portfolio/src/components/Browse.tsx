import React, { useState } from 'react';
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ProjectObject from './Scenes/ProjectObject'; // Assurez-vous que le chemin est correct

const tagOptions = [
  { value: "react", label: "React" },
  { value: "typescript", label: "TypeScript" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "node", label: "Node.js" },
  { value: "api", label: "API" }
];
const projets = [
  {
    title: 'Projet 1',
    description: 'Description du projet 1',
    descriptionlg: 'Description longue du projet 1. Ce projet est un exemple de ce que je peux faire en tant que développeur. Il inclut des fonctionnalités avancées et une interface utilisateur soignée.',
    image: '/testbgportfolio.png',
    obj: 'tableau',
    tags: ['react', 'typescript', 'frontend']
  },
  {
    title: 'Projet 2',
    description: 'Description du projet 2',
    descriptionlg: 'Description longue du projet 2. Ce projet met en avant mes compétences en développement web et en design. Il est conçu pour être responsive et accessible.',
    image: '/forests-beech.jpg',
    obj: 'panel3',
    tags: ['react', 'backend', 'node']
  },
  // Ajoute d'autres projets ici
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
    <div className="h-[100vh] w-full flex flex-col items-start justify-center relative bg-white">
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
                <img className='' src={currentProject.image} alt="" />
            </div>
        </div>
    </div>
  );
}