import React, { useState } from 'react';
import { 
  ChevronRight, 
  Brain, 
  Target, 
  ShieldCheck, 
  Cpu, 
  Layout, 
  ArrowRight,
  Zap,
  Building,
  Globe,
  Users,
  Send,
  Loader2,
  Briefcase,
  Stethoscope,
  Compass,
  Anchor,
  Truck,
  HardHat,
  Settings,
  Lightbulb,
  TrendingUp,
  Mic
} from 'lucide-react';

// --- COMPONENTES DE INTERFAZ REUTILIZABLES ---

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12">
    <div className="h-px w-12 bg-[#5F1401] mb-4"></div>
    <h2 className="text-3xl md:text-4xl font-light tracking-tighter text-[#FAF6F5] uppercase">
      {children}
    </h2>
    {subtitle && <p className="text-[#DFD3BD] mt-2 font-mono text-sm uppercase tracking-widest">{subtitle}</p>}
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('claridad');
  const [formStep, setFormStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    tipoServicio: '',
    topicoPrincipal: '',
    subTopico: '',
    objetivoPersonalizado: ''
  });

  // --- DATOS DEL DOSSIER Y NICHOS ---

  const dossierProblems = [
    {
      title: "Fragmentación Operativa",
      problem: "Empresas con talento técnico brillante pero procesos desconectados que queman recursos.",
      solution: "Sistematización del criterio mediante ingeniería de procesos y agilidad aplicada."
    },
    {
      title: "Invisibilidad del Valor Experto",
      problem: "Profesionales de nicho (médicos, arquitectos) que no logran comunicar su ventaja competitiva.",
      solution: "Arquitectura de marca personal y comunicación estratégica para salir de la zona de confort."
    },
    {
      title: "Resistencia a la Disrupción Tecnológica",
      problem: "Miedo a que la IA deshumanice el servicio o sensación de rezago frente a la competencia.",
      solution: "Upskilling enfocado en aumentar el potencial humano, no en reemplazarlo."
    },
    {
      title: "Inconsistencia en Ventas High-Ticket",
      problem: "Dependencia de referidos o métodos antiguos para vender servicios de alto valor.",
      solution: "Ingeniería de ventas B2B y diseño de ecosistemas de confianza escalables."
    },
    {
      title: "Liderazgo en 'Ruido' Operativo",
      problem: "Dueños de negocios familiares atrapados en la operación, impidiendo el crecimiento estratégico.",
      solution: "Mentoring ejecutivo bajo filosofía Maxwell para transicionar de operador a CEO Estratégico."
    }
  ];

  const targetIndustries = [
    { name: "Real Estate & Developers", icon: <Building size={16} /> },
    { name: "Ingeniería & Construcción", icon: <HardHat size={16} /> },
    { name: "Arquitectura & Diseño", icon: <Compass size={16} /> },
    { name: "Sector Salud & Doctores", icon: <Stethoscope size={16} /> },
    { name: "Logística & Zonas Francas", icon: <Anchor size={16} /> },
    { name: "Minería & Transporte", icon: <Truck size={16} /> },
    { name: "Servicios Técnicos & Consultoría", icon: <Briefcase size={16} /> },
    { name: "Empresas Familiares de Alto Valor", icon: <Users size={16} /> }
  ];

  // --- CONFIGURADOR DE CAPACITACIÓN ---

  const strategicTopics = {
    'IA & Upskilling': {
      label: 'IA Estratégica & Upskilling del "Dream Team"',
      icon: <Cpu size={20} />,
      subs: ['Adopción Ética de IA Generativa', 'Automatización de Flujos de Trabajo', 'IA para la Toma de Decisiones C-Level'],
      alignment: 'Tendencia McKinsey: Capital Humano en la era de la IA.'
    },
    'High Performance': {
      label: 'Sistemas de High Performance & Agilidad',
      icon: <Settings size={20} />,
      subs: ['Cultura de Feedback & Accountability', 'Optimización de Procesos Lean-Scrum', 'Sistematización del Criterio Operativo'],
      alignment: 'Tendencia WEF: Habilidades de autogestión y eficiencia.'
    },
    'Ventas IA': {
      label: 'Ventas Amplificadas & Ingeniería de Ventas',
      icon: <TrendingUp size={20} />,
      subs: ['Neuroventas en Ciclos B2B Complejos', 'Prospección Inteligente con Datos', 'Arquitectura de Confianza en Negociación'],
      alignment: 'Experiencia Mayerly: Fusión técnica-comercial de alto valor.'
    },
    'Liderazgo': {
      label: 'Liderazgo Exponencial & Propósito',
      icon: <Users size={20} />,
      subs: ['Liderazgo Maxwell: Influencia vs Posición', 'Gestión de la Incertidumbre', 'Comunicación de Crisis & Cambio'],
      alignment: 'Tendencia WEF: Pensamiento crítico y liderazgo social.'
    },
    'UX & Estrategia': {
      label: 'UX Strategy & Diseño de Sistemas',
      icon: <Layout size={20} />,
      subs: ['Diseño de Experiencia de Usuario (B2B)', 'Mapeo de Puntos de Contacto con Cliente', 'Estrategia de Producto Basada en Datos'],
      alignment: 'McKinsey Focus: Customer-centricity como motor de valor.'
    }
  };

  const doingData = [
    {
      category: "BASE TÉCNICA & PROCESOS",
      icon: <Layout size={24} />,
      items: [
        { title: "Ingeniería Mecánica", entity: "U. del Táchira" },
        { title: "Maestría en Gestión de Proyectos", entity: "U. Miguel de Cervantes" },
        { title: "Gestión de Equipos Ágiles", entity: "Frameworks Ágiles" }
      ]
    },
    {
      category: "VENTAS B2B & NEGOCIACIÓN",
      icon: <Briefcase size={24} />,
      items: [
        { title: "B2B Sales & Negotiation Strategy", entity: "LinkedIn Learning" },
        { title: "The Persuasion Code", entity: "Neuroventas" },
        { title: "Neuroscience of Selling", entity: "Ventas Digitales" }
      ]
    },
    {
      category: "LIDERAZGO & MENTORING",
      icon: <Target size={24} />,
      items: [
        { title: "Maxwell Leadership Certification", entity: "John Maxwell Team" },
        { title: "Developing Others", entity: "Dale Carnegie" },
        { title: "Change Mgmt. & Crisis Comm.", entity: "Gestión del Cambio" }
      ]
    },
    {
      category: "DATA, IA, UX & ESTRATEGIA",
      icon: <Cpu size={24} />,
      items: [
        { title: "UX Design & Research", entity: "Arquitectura de Interfaces" },
        { title: "Tableau & Storytelling", entity: "Análisis de Datos" },
        { title: "Python Fundamentals", entity: "Platzi" }
      ]
    }
  ];

  const trajectory = [
    {
      stage: "El Ejecutor",
      label: "FASE TÉCNICA",
      desc: "Conocimiento de ingeniería y aplicaciones de procesos para detectar de manera sencilla el: qué, por qué, cómo, dónde y cuándo.",
      transition: "Del conocimiento al sistema."
    },
    {
      stage: "El Observador",
      label: "FASE ANALÍTICA",
      desc: "Identificación de patrones que reducen competitividad para darle entrada a cultura ágil, feedback y comunicación con propósito.",
      transition: "Del dato a la información."
    },
    {
      stage: "El Intérprete",
      label: "FASE ESTRATÉGICA",
      desc: "Arquitectura de soluciones donde la IA y el propósito humano convergen para amplificar habilidades, experiencia, estrategias y resultados.",
      transition: "De la información a frameworks ejecutables que transforman el criterio de sus equipos."
    }
  ];

  const pillars = {
    claridad: {
      title: "Claridad",
      icon: <Brain size={32} />,
      content: "Sin un diagnóstico honesto y que involucre a las partes y procesos que tienen un punto de contacto con el cliente final y su experiencia de usuario, es un teatro de productividad y quema de recursos. Transformo la niebla operativa en una hoja de ruta ejecutable."
    },
    coherencia: {
      title: "Coherencia",
      icon: <Target size={32} />,
      content: "Alineamos la visión comercial con la infraestructura tecnológica. Si no es escalable y humano, no es estratégico."
    },
    confianza: {
      title: "Confianza",
      icon: <ShieldCheck size={32} />,
      content: "La creación de espacios de co-creación y comunicación con propósito fomenta la autonomía y garantiza resultados sostenibles y escalables. Más allá de tendencias pasajeras, impulsamos un cambio profundo de mindset organizacional. Profesionalización con rigor."
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateOutput = () => {
    const title = `${formData.tipoServicio}: ${formData.subTopico}`;
    const objective = `Potenciar la competitividad de ${formData.empresa || 'su organización'} mediante ${formData.subTopico.toLowerCase()}, alineando ${formData.objetivoPersonalizado.toLowerCase() || 'sus retos actuales'} con estándares globales de eficiencia y liderazgo estratégico.`;
    return { title, objective };
  };

  const analyzeMatch = (e) => {
    e.preventDefault();
    if(!formData.topicoPrincipal || !formData.subTopico || !formData.tipoServicio) return;
    setIsCalculating(true);
    const result = generateOutput();
    
    // Captura de lead a info@mayerlyalviarez.com
    fetch("https://formsubmit.co/ajax/info@mayerlyalviarez.com", {
      method: "POST",
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
          _subject: `💎 DISEÑO DE CAPACITACIÓN: ${formData.empresa}`,
          ...formData,
          Titulo_Propuesto: result.title,
          Objetivo_Generado: result.objective
      })
    }).catch(err => console.error(err));

    setTimeout(() => {
      setIsCalculating(false);
      setFormStep(2);
      document.getElementById('diagnostico').scrollIntoView({ behavior: 'smooth' });
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#100F0D] text-[#FAF6F5] selection:bg-[#5F1401] selection:text-white font-sans overflow-x-hidden">
      
      {/* NAVEGACIÓN */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-gradient-to-b from-[#100F0D] to-transparent pointer-events-none">
        <div className="flex items-center gap-2 group cursor-pointer pointer-events-auto">
          <div className="w-8 h-8 bg-[#5F1401] flex items-center justify-center font-bold text-xs text-white">MA</div>
          <span className="text-sm tracking-[0.3em] font-medium uppercase group-hover:tracking-[0.4em] transition-all">
            <span className="text-[#8E441F]">Portafolio</span> Mayerly Alviarez
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest font-semibold text-[#DFD3BD] pointer-events-auto">
          <a href="#doing" className="hover:text-[#FAF6F5] transition-colors">Doing</a>
          <a href="#trayectoria" className="hover:text-[#FAF6F5] transition-colors">Becoming</a>
          <a href="#dossier" className="hover:text-[#FAF6F5] transition-colors">Dossier</a>
          <a href="#diagnostico" className="hover:text-[#FAF6F5] transition-colors border-b border-[#5F1401] pb-1">Diseña</a>
          <a href="#resultados" className="hover:text-[#FAF6F5] transition-colors">Resultados</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 md:px-20 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 z-10">
            <h2 className="text-white text-lg md:text-xl font-medium tracking-widest uppercase mb-3">Conferencias & Capacitación</h2>
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-none mb-8">
              Transformar <br />
              <span className="italic font-serif text-[#DFD3BD]">complejidad</span> en <br />
              <div className="mt-6">
                <span className="text-white bg-[#5F1401] font-medium uppercase text-3xl md:text-5xl leading-[1.4] box-decoration-clone px-3 py-1">
                  frameworks ejecutables que transforman el criterio de sus equipos.
                </span>
              </div>
            </h1>
            <p className="max-w-xl text-lg text-[#DFD3BD] font-light leading-relaxed mb-10">
              Para tomar decisiones con datos y aplicar sistemas que incrementan competitividad y rentabilidad operativa.
            </p>
            <button 
              onClick={() => document.getElementById('diagnostico').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#5F1401] hover:bg-[#8E441F] transition-all text-sm font-bold uppercase tracking-widest flex items-center gap-2 group text-white shadow-2xl"
            >
              Diseñar Propuesta <Settings size={18} />
            </button>
          </div>
          <div className="lg:col-span-4 hidden lg:block relative group">
            <div className="relative border-r border-b border-[#5F1401]/30 pr-6 pb-6">
              <img src="https://mayerlyalviarez.com/wp-content/uploads/2026/02/Mayerly-Sobre-Mi-3-1024x1024.webp" alt="Mayerly Alviarez" className="w-full aspect-[4/5] object-cover shadow-2xl transition-transform group-hover:scale-[1.02]" />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DOING */}
      <section id="doing" className="py-24 px-6 md:px-20 border-y border-white/5 bg-[#100F0D]">
        <SectionHeading subtitle="Formación Técnica">El Doing</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doingData.map((section, idx) => (
            <div key={idx} className="p-8 border border-white/5 bg-[#1E1C1A] group hover:border-[#5F1401]/50 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-[#FAF6F5] text-[#5F1401] mb-8 shadow-lg group-hover:bg-[#5F1401] group-hover:text-white transition-all">
                {section.icon}
              </div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-[#5F1401] px-2 py-1 mb-6 inline-block">{section.category}</h3>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <div key={i} className="border-l border-white/10 pl-4">
                    <h4 className="text-white text-sm font-medium">{item.title}</h4>
                    <p className="text-[#DFD3BD] text-[9px] uppercase tracking-widest">{item.entity}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRAYECTORIA */}
      <section id="trayectoria" className="py-24 px-6 md:px-20 bg-[#1e1c1a10]">
        <SectionHeading subtitle="Evolución Estratégica">Becoming</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden md:block"></div>
          {trajectory.map((t, index) => (
            <div key={index} className="relative p-10 border border-white/5 md:border-none group hover:bg-[#5F1401]/5 transition-all">
              <div className="mb-12 flex justify-between items-start">
                <span className="text-5xl font-light text-white group-hover:scale-110 transition-transform origin-left">0{index + 1}</span>
                <div className="px-3 py-1 bg-[#1E1C1A] border border-white/20 text-[10px] uppercase font-bold text-white">{t.label}</div>
              </div>
              <h4 className="text-2xl font-light mb-4 text-white uppercase">{t.stage}</h4>
              <p className="text-[#DFD3BD] font-light text-sm leading-relaxed mb-6">{t.desc}</p>
              <div className="pt-4 border-t border-[#5F1401]/30">
                <span className="text-sm italic text-[#FAF6F5] font-serif">{t.transition}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN DOSSIER ESTRATÉGICO */}
      <section id="dossier" className="py-32 px-6 md:px-20 bg-[#100F0D]">
        <SectionHeading subtitle="Dossier de Soluciones">Problemas que Resuelvo</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-6">
            {dossierProblems.map((item, idx) => (
              <div key={idx} className="group bg-[#1E1C1A] border border-white/5 p-8 hover:border-[#5F1401]/40 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#5F1401]/5 group-hover:bg-[#5F1401]/10 transition-all rounded-bl-full"></div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-1/3">
                    <span className="text-[10px] font-bold text-[#8E441F] uppercase tracking-widest block mb-2">Reto {idx + 1}</span>
                    <h3 className="text-xl font-light text-white uppercase tracking-tight leading-tight">{item.title}</h3>
                  </div>
                  <div className="w-full md:w-2/3 space-y-4">
                    <p className="text-sm text-[#DFD3BD] leading-relaxed font-light">
                      <span className="text-white/40 font-mono text-[10px] mr-2">EL PROBLEMA:</span> {item.problem}
                    </p>
                    <div className="bg-[#100F0D] p-4 border-l border-[#5F1401]">
                      <p className="text-xs text-[#FAF6F5] font-serif italic">
                        <span className="text-[#5F1401] font-sans font-bold uppercase text-[9px] mr-2 not-italic">LA SOLUCIÓN:</span> {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div className="border-l-2 border-[#5F1401] pl-8">
              <h3 className="text-2xl font-light text-white mb-6 uppercase tracking-tighter leading-none">Audiencias &<br />Nichos de Impacto</h3>
              <p className="text-sm text-[#DFD3BD] leading-relaxed mb-8 font-light">
                Especializada en sectores donde la **complejidad técnica** se une a **servicios de alto valor**. Ayudo a expertos a salir de su zona de confort para comunicar y operar con rigor.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {targetIndustries.map((industry, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-[#1E1C1A]/50 border border-white/5 hover:bg-[#5F1401]/5 transition-all group">
                    <div className="text-[#8E441F] group-hover:scale-110 transition-transform">{industry.icon}</div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#FAF6F5]">{industry.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#5F1401]/10 p-8 border border-[#5F1401]/20">
              <h4 className="text-[10px] font-bold uppercase text-[#8E441F] mb-4 tracking-[0.3em]">Propuesta Diferencial</h4>
              <p className="text-xs text-[#DFD3BD] leading-relaxed font-serif italic">
                "No soy una coach motivacional. Soy ingeniera diseñando ecosistemas de alta performance para profesionales que venden confianza, no solo productos."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISEÑA: CONFIGURADOR DE CAPACITACIÓN */}
      <section id="diagnostico" className="py-32 px-6 md:px-20 bg-[#1E1C1A]">
        <SectionHeading subtitle="Configuración Estratégica">Diseña la capacitación de acuerdo a tus objetivos</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="bg-[#100F0D] border border-white/5 p-10 shadow-2xl relative overflow-hidden">
            {formStep === 1 ? (
              <form onSubmit={analyzeMatch} className="space-y-8 animate-in fade-in duration-500">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#8E441F]">1. Formato de Impacto</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Conferencia', 'Capacitación', 'Programa Upskilling', 'Workshop High-Perf'].map(type => (
                      <button 
                        key={type} type="button"
                        onClick={() => setFormData({...formData, tipoServicio: type})}
                        className={`p-3 text-[10px] uppercase font-bold border transition-all ${formData.tipoServicio === type ? 'bg-[#5F1401] border-[#5F1401] text-white shadow-lg' : 'border-white/10 text-[#DFD3BD] hover:border-white/30'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#8E441F]">2. Área Estratégica</label>
                  <select required name="topicoPrincipal" value={formData.topicoPrincipal} onChange={handleInputChange} className="w-full bg-[#1E1C1A] border border-white/10 p-4 text-white outline-none focus:border-[#5F1401] text-sm">
                    <option value="" disabled>Seleccione pilar...</option>
                    {Object.keys(strategicTopics).map(key => (
                      <option key={key} value={key}>{strategicTopics[key].label}</option>
                    ))}
                  </select>
                </div>

                {formData.topicoPrincipal && (
                  <div className="space-y-3 animate-in slide-in-from-top-4 duration-300">
                    <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#8E441F]">3. Especialización</label>
                    <div className="space-y-2">
                      {strategicTopics[formData.topicoPrincipal].subs.map(sub => (
                        <button key={sub} type="button" onClick={() => setFormData({...formData, subTopico: sub})} className={`w-full text-left p-4 text-xs border transition-all flex justify-between items-center ${formData.subTopico === sub ? 'border-[#5F1401] bg-[#5F1401]/10 text-white' : 'border-white/5 text-[#DFD3BD] hover:border-white/20'}`}>
                          {sub} {formData.subTopico === sub && <Zap size={14} className="text-[#5F1401]" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#8E441F]">4. Objetivos del Negocio</label>
                  <textarea required name="objetivoPersonalizado" value={formData.objetivoPersonalizado} onChange={handleInputChange} placeholder="Describa el reto principal de su equipo..." className="w-full bg-[#1E1C1A] border border-white/10 p-4 text-white outline-none focus:border-[#5F1401] text-sm h-24" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <input required type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Tu Nombre" className="bg-[#1E1C1A] border border-white/10 p-4 text-white text-sm outline-none focus:border-[#5F1401]" />
                   <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="bg-[#1E1C1A] border border-white/10 p-4 text-white text-sm outline-none focus:border-[#5F1401]" />
                </div>

                <button type="submit" disabled={isCalculating || !formData.subTopico} className="w-full py-5 bg-[#5F1401] hover:bg-[#8E441F] text-white font-bold uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-3 transition-all shadow-xl">
                  {isCalculating ? <Loader2 className="animate-spin" /> : <><Lightbulb size={16} /> Generar Estructura</>}
                </button>
              </form>
            ) : (
              <div className="text-center py-10 animate-in slide-in-from-bottom-8 duration-700">
                 <div className="w-16 h-16 bg-[#5F1401]/20 rounded-full flex items-center justify-center mx-auto mb-6"><Zap className="text-[#5F1401]" size={32} /></div>
                 <h3 className="text-xs uppercase font-bold tracking-[0.3em] text-[#8E441F] mb-4">Propuesta Generada</h3>
                 <div className="bg-[#1E1C1A] p-8 border border-white/10 text-left mb-8 shadow-inner">
                    <h4 className="text-[10px] uppercase font-bold text-[#8E441F] mb-2 tracking-widest">Título Sugerido</h4>
                    <p className="text-2xl font-serif italic text-white mb-6 leading-tight">"{generateOutput().title}"</p>
                    <h4 className="text-[10px] uppercase font-bold text-[#8E441F] mb-2 tracking-widest">Objetivo General</h4>
                    <p className="text-sm text-[#DFD3BD] leading-relaxed italic">{generateOutput().objective}</p>
                 </div>
                 <div className="flex flex-col gap-4">
                   <a href={`mailto:info@mayerlyalviarez.com?subject=Propuesta%20Formacion%20-%20${formData.empresa}`} className="w-full py-4 bg-[#FAF6F5] text-black font-bold uppercase text-[10px] tracking-widest hover:bg-[#DFD3BD] flex items-center justify-center gap-2">
                     Validar Propuesta con Mayerly <Send size={14} />
                   </a>
                   <button onClick={() => setFormStep(1)} className="text-[10px] uppercase font-bold text-[#8E441F] hover:text-white transition-colors">Volver a Editar</button>
                 </div>
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-32 space-y-10">
            <div className="border-l-2 border-[#5F1401] pl-8 py-2">
              <h3 className="text-xl font-light text-white mb-4 uppercase tracking-tighter leading-none">Alineación de<br/>Estándares Globales</h3>
              <p className="text-sm text-[#DFD3BD] leading-relaxed mb-6 font-light">
                Metodología integrada con las competencias del futuro señaladas por el **Foro Económico Mundial (WEF)** y los marcos de adopción de **McKinsey**.
              </p>
              {formData.topicoPrincipal && (
                <div className="bg-[#100F0D] p-6 border border-[#5F1401]/20 animate-in fade-in">
                  <div className="flex items-center gap-3 mb-3"><Globe className="text-[#5F1401]" size={18} /><span className="text-[10px] font-bold uppercase text-white tracking-widest">Contexto de Mercado</span></div>
                  <p className="text-xs text-[#FAF6F5] italic font-serif leading-relaxed">{strategicTopics[formData.topicoPrincipal].alignment}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="py-24 px-6 md:px-20 border-t border-white/5 bg-[#100F0D]">
        <SectionHeading subtitle="Impacto Medible">Casos de Éxito</SectionHeading>
        <div className="space-y-12">
          
          {/* ESTRATEGA CORPORATIVA */}
          <div className="bg-[#1E1C1A] border border-white/5 p-10 group relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 text-white">
              <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
                <div className="flex items-center gap-3 mb-8"><Briefcase className="text-[#8E441F]" size={24} /><h3 className="text-xl font-light uppercase tracking-widest">Estratega Corporativa</h3></div>
                <div className="space-y-8">
                   <div><span className="text-5xl font-light text-white">6 Meses</span><p className="text-[10px] font-bold text-[#8E441F] mt-1 uppercase tracking-widest">Apertura de Mercados</p></div>
                   <div><span className="text-5xl font-light text-white">Mes 3</span><p className="text-[10px] font-bold text-[#8E441F] mt-1 uppercase tracking-widest">Facturación Nueva</p></div>
                </div>
              </div>
              <div className="lg:w-2/3 text-sm text-[#DFD3BD] leading-relaxed flex items-center">
                 <p>Diseño de propuestas personalizadas que alinean la visión con la calidad operativa. Mapeo estratégico de <strong className="text-white">40 clientes regionales</strong> en 3 meses para priorizar recursos y alcanzar el <strong className="text-white">Top 5 del sector</strong> en un año.</p>
              </div>
            </div>
          </div>

          {/* MENTORA EJECUTIVA */}
          <div className="bg-[#1E1C1A] border border-white/5 p-10 group relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 text-white">
              <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-8"><TrendingUp className="text-[#5F1401]" size={24} /><h3 className="text-xl font-light uppercase tracking-widest">Mentora Ejecutiva</h3></div>
                <span className="text-7xl font-light text-white">2X</span>
                <p className="text-[10px] uppercase font-bold text-[#8E441F] mt-2 tracking-widest">Salto Profesional Post-Mentoria</p>
              </div>
              <div className="lg:w-2/3 text-sm text-[#DFD3BD] leading-relaxed flex items-center">
                <p>Acompañamiento inmersivo para la construcción de marca personal sólida y autonomía profesional mediante la adopción tecnológica adaptada a su sector. Mis clientes retoman su carrera con autoridad e integran IA en su flujo diario para amplificar su valor.</p>
              </div>
            </div>
          </div>

          {/* SPEAKER MATCH */}
          <div className="bg-[#1E1C1A] border border-white/5 p-10 group relative overflow-hidden text-white">
            <div className="relative z-10 flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-8"><Mic className="text-[#DFD3BD]" size={24} /><h3 className="text-xl font-light uppercase tracking-widest">Speaker Match</h3></div>
                <span className="text-4xl font-light uppercase tracking-tighter">Impacto Real</span>
                <p className="text-[10px] uppercase font-bold text-[#8E441F] mt-2 tracking-widest">Filosofía Maxwell</p>
              </div>
              <div className="lg:w-2/3 space-y-6 flex items-center">
                <p className="text-sm text-[#DFD3BD] leading-relaxed">Conferencias que desafían el "liderazgo tibio" en industrias high-ticket: <strong className="text-white">Real Estate, Tecnología e Ingeniería.</strong> Creamos el puente exacto entre las demandas comerciales y las nuevas habilidades técnicas requeridas hoy.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 md:px-20 border-t border-white/5 text-center flex flex-col items-center gap-6 bg-[#100F0D]">
        <div className="w-8 h-8 bg-[#5F1401] flex items-center justify-center font-bold text-xs text-white">MA</div>
        <div className="space-y-4">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#DFD3BD]">Mayerly Alviarez © 2026 • Estrategia Aplicada</p>
          <div className="max-w-xl mx-auto border-t border-white/5 pt-4">
            <p className="text-[9px] text-white/30 leading-relaxed font-light italic">
              Esto es una muestra de un prototipo realizado con IA. Hecho en 3 días y que permite tener una interacción friendly y poder comunicar al equipo de desarrollo que es lo que se quiere en menos tiempo y ahorrando horas de trabajo. Esto y más está en mi programa de upskilling.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
