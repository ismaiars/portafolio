'use client';

export default function Methodology() {
  return (
    <section id="metodologia" className="section-animate py-8 md:py-16 bg-terminal-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-accent-green" data-es="Mi Proceso de Trabajo" data-en="My Work Process">
          Mi Proceso de Trabajo
        </h2>
        <p className="text-xl text-center mb-8 text-text-secondary max-w-3xl mx-auto" data-es="Metodología clara | Comunicación constante | Resultados de calidad" data-en="Clear methodology | Constant communication | Quality results">
          Metodología clara | Comunicación constante | Resultados de calidad
        </p>
        <p className="methodology-intro text-center text-text-secondary text-lg leading-relaxed mb-12 max-w-4xl mx-auto" data-es="Me gusta trabajar de manera organizada y transparente. Aquí te explico cómo abordo cada proyecto para asegurar que obtengas exactamente lo que necesitas." data-en="I like to work in an organized and transparent way. Here I explain how I approach each project to ensure you get exactly what you need.">
          Me gusta trabajar de manera organizada y transparente. Aquí te explico cómo abordo cada proyecto 
          para asegurar que obtengas exactamente lo que necesitas.
        </p>

        <div className="methodology-terminal max-w-5xl mx-auto bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden shadow-2xl">
          <div className="methodology-terminal-header bg-terminal-bg px-6 py-4 flex items-center justify-between border-b border-terminal-border">
            <div className="controls flex gap-2">
              <span className="control w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="control w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="control w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <span className="title text-text-primary font-mono text-sm">~/proceso.sh</span>
            <div className="w-16"></div>
          </div>
          <div className="methodology-terminal-body p-8 space-y-8">
            <div className="methodology-line">
              <div className="flex items-start gap-4">
                <span className="prompt text-accent-green font-mono text-xl mt-1">➜</span>
                <div className="command-content flex-1">
                  <h4 className="text-2xl font-bold text-accent-green mb-3 flex items-center gap-2" data-es="Paso 1: El Café Inicial ☕" data-en="Step 1: The Initial Coffee ☕">
                    Paso 1: El Café Inicial ☕
                  </h4>
                  <div className="bg-terminal-surface/30 rounded-lg p-4 mb-3">
                    <p className="text-accent-green font-semibold mb-2" data-es="✅ QUÉ INCLUYE:" data-en="✅ WHAT'S INCLUDED:">✅ QUÉ INCLUYE:</p>
                    <ul className="text-text-secondary space-y-1">
                      <li data-es="• Una buena charla para entender tu idea" data-en="• A good chat to understand your idea">• Una buena charla para entender tu idea</li>
                      <li data-es="• Definimos qué queremos construir" data-en="• We define what we want to build">• Definimos qué queremos construir</li>
                      <li data-es="• Trazamos el plan para no terminar haciendo un cohete cuando solo necesitábamos una bicicleta" data-en="• We draw up the plan so we don't end up making a rocket when we only needed a bicycle">• Trazamos el plan para no terminar haciendo un cohete cuando solo necesitábamos una bicicleta</li>
                    </ul>
                  </div>
                  <p className="text-text-secondary leading-relaxed" data-es="Primero, lo primero: una buena charla. Necesito entender tu idea. Aquí definimos qué queremos construir y trazamos el plan para no terminar haciendo un cohete cuando solo necesitábamos una bicicleta (aunque los cohetes son geniales)." data-en="First things first: a good chat. I need to understand your idea. Here we define what we want to build and draw up the plan so we don't end up making a rocket when we only needed a bicycle (although rockets are awesome).">
                    Primero, lo primero: una buena charla. Necesito entender tu idea. Aquí definimos qué queremos construir 
                    y trazamos el plan para no terminar haciendo un cohete cuando solo necesitábamos una bicicleta (aunque los cohetes son geniales).
                  </p>
                </div>
              </div>
            </div>
            
            <div className="methodology-line">
              <div className="flex items-start gap-4">
                <span className="prompt text-accent-blue font-mono text-xl mt-1">➜</span>
                <div className="command-content flex-1">
                  <h4 className="text-2xl font-bold text-accent-blue mb-3 flex items-center gap-2" data-es="Paso 2: El Boceto Maestro 🎨" data-en="Step 2: The Master Sketch 🎨">
                    Paso 2: El Boceto Maestro 🎨
                  </h4>
                  <div className="bg-terminal-surface/30 rounded-lg p-4 mb-3">
                    <p className="text-accent-blue font-semibold mb-2" data-es="✅ QUÉ INCLUYE:" data-en="✅ WHAT'S INCLUDED:">✅ QUÉ INCLUYE:</p>
                    <ul className="text-text-secondary space-y-1">
                      <li data-es="• Dibujo los planos (prototipos) para que sepas exactamente cómo se sentirá todo" data-en="• I draw the blueprints (prototypes) so you know exactly how everything will feel">• Dibujo los planos (prototipos) para que sepas exactamente cómo se sentirá todo</li>
                      <li data-es="• El objetivo es que sea tan intuitivo que no necesite un manual de 500 páginas" data-en="• The goal is for it to be so intuitive that it doesn't need a 500-page manual">• El objetivo es que sea tan intuitivo que no necesite un manual de 500 páginas</li>
                    </ul>
                  </div>
                  <p className="text-text-secondary leading-relaxed" data-es="Con el plan en mano, me pongo mi sombrero de arquitecto. Dibujo los planos (prototipos) para que sepas exactamente cómo se sentirá todo. ¡El objetivo es que sea tan intuitivo que no necesite un manual de 500 páginas!" data-en="With the plan in hand, I put on my architect hat. I draw the blueprints (prototypes) so you know exactly how everything will feel. The goal is for it to be so intuitive that it doesn't need a 500-page manual!">
                    Con el plan en mano, me pongo mi sombrero de arquitecto. Dibujo los planos (prototipos) para que sepas 
                    exactamente cómo se sentirá todo. ¡El objetivo es que sea tan intuitivo que no necesite un manual de 500 páginas!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="methodology-line">
              <div className="flex items-start gap-4">
                <span className="prompt text-accent-purple font-mono text-xl mt-1">➜</span>
                <div className="command-content flex-1">
                  <h4 className="text-2xl font-bold text-accent-purple mb-3 flex items-center gap-2" data-es="Paso 3: Magia con el Teclado ✨" data-en="Step 3: Keyboard Magic ✨">
                    Paso 3: Magia con el Teclado ✨
                  </h4>
                  <div className="bg-terminal-surface/30 rounded-lg p-4 mb-3">
                    <p className="text-accent-purple font-semibold mb-2" data-es="✅ QUÉ INCLUYE:" data-en="✅ WHAT'S INCLUDED:">✅ QUÉ INCLUYE:</p>
                    <ul className="text-text-secondary space-y-1">
                      <li data-es="• Convierto el diseño en código funcional, línea por línea" data-en="• I convert the design into functional code, line by line">• Convierto el diseño en código funcional, línea por línea</li>
                      <li data-es="• Es un proceso que involucra lógica, creatividad y una cantidad probablemente insana de café" data-en="• It's a process that involves logic, creativity and a probably insane amount of coffee">• Es un proceso que involucra lógica, creatividad y una cantidad probablemente insana de café</li>
                      <li data-es="• Te mantendré al tanto para que veas cómo tu proyecto evoluciona" data-en="• I'll keep you posted so you can see how your project evolves">• Te mantendré al tanto para que veas cómo tu proyecto evoluciona</li>
                    </ul>
                  </div>
                  <p className="text-text-secondary leading-relaxed" data-es="Aquí es donde las ideas cobran vida. Convierto el diseño en código funcional, línea por línea. Es un proceso que involucra lógica, creatividad y una cantidad probablemente insana de café. Te mantendré al tanto para que veas cómo tu proyecto evoluciona." data-en="This is where ideas come to life. I convert the design into functional code, line by line. It's a process that involves logic, creativity and a probably insane amount of coffee. I'll keep you posted so you can see how your project evolves.">
                    Aquí es donde las ideas cobran vida. Convierto el diseño en código funcional, línea por línea. Es un 
                    proceso que involucra lógica, creatividad y una cantidad probablemente insana de café. Te mantendré al tanto para que veas 
                    cómo tu proyecto evoluciona.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="methodology-line">
              <div className="flex items-start gap-4">
                <span className="prompt text-accent-orange font-mono text-xl mt-1">➜</span>
                <div className="command-content flex-1">
                  <h4 className="text-2xl font-bold text-accent-orange mb-3 flex items-center gap-2" data-es="Paso 4: Caza de Bugs 🐛" data-en="Step 4: Bug Hunt 🐛">
                    Paso 4: Caza de Bugs 🐛
                  </h4>
                  <div className="bg-terminal-surface/30 rounded-lg p-4 mb-3">
                    <p className="text-accent-orange font-semibold mb-2" data-es="✅ QUÉ INCLUYE:" data-en="✅ WHAT'S INCLUDED:">✅ QUÉ INCLUYE:</p>
                    <ul className="text-text-secondary space-y-1">
                      <li data-es="• Me convierto en un detective de bugs" data-en="• I become a bug detective">• Me convierto en un detective de bugs</li>
                      <li data-es="• Reviso cada rincón para asegurarme de que todo funcione sin problemas" data-en="• I check every corner to make sure everything works smoothly">• Reviso cada rincón para asegurarme de que todo funcione sin problemas</li>
                      <li data-es="• Mi misión es entregar un producto tan sólido que podría sobrevivir al clic de un usuario muy curioso" data-en="• My mission is to deliver a product so solid it could survive the click of a very curious user">• Mi misión es entregar un producto tan sólido que podría sobrevivir al clic de un usuario muy curioso</li>
                    </ul>
                  </div>
                  <p className="text-text-secondary leading-relaxed" data-es="Antes de lanzar, me convierto en un detective de bugs. Reviso cada rincón para asegurarme de que todo funcione sin problemas. Mi misión es entregar un producto tan sólido que podría sobrevivir al clic de un usuario muy curioso." data-en="Before launching, I become a bug detective. I check every corner to make sure everything works smoothly. My mission is to deliver a product so solid it could survive the click of a very curious user.">
                    Antes de lanzar, me convierto en un detective de bugs. Reviso cada rincón para asegurarme de que todo funcione 
                    sin problemas. Mi misión es entregar un producto tan sólido que podría sobrevivir al clic de un usuario muy curioso.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="methodology-line">
              <div className="flex items-start gap-4">
                <span className="prompt text-accent-green font-mono text-xl mt-1">➜</span>
                <div className="command-content flex-1">
                  <h4 className="text-2xl font-bold text-accent-green mb-3 flex items-center gap-2" data-es="Paso 5: ¡Despegue! 🚀" data-en="Step 5: Takeoff! 🚀">
                    Paso 5: ¡Despegue! 🚀
                  </h4>
                  <div className="bg-terminal-surface/30 rounded-lg p-4 mb-3">
                    <p className="text-accent-green font-semibold mb-2" data-es="✅ QUÉ INCLUYE:" data-en="✅ WHAT'S INCLUDED:">✅ QUÉ INCLUYE:</p>
                    <ul className="text-text-secondary space-y-1">
                      <li data-es="• ¡Luz verde para el lanzamiento! Pongo tu proyecto en línea para que el mundo lo vea" data-en="• Green light for launch! I put your project online for the world to see">• ¡Luz verde para el lanzamiento! Pongo tu proyecto en línea para que el mundo lo vea</li>
                      <li data-es="• Pero tranquilo, no desaparezco en un agujero negro después del despegue" data-en="• But don't worry, I don't disappear into a black hole after takeoff">• Pero tranquilo, no desaparezco en un agujero negro después del despegue</li>
                      <li data-es="• Estaré aquí para asegurar que todo vaya bien" data-en="• I'll be here to make sure everything goes well">• Estaré aquí para asegurar que todo vaya bien</li>
                    </ul>
                  </div>
                  <p className="text-text-secondary leading-relaxed" data-es="¡Luz verde para el lanzamiento! Pongo tu proyecto en línea para que el mundo lo vea. Pero tranquilo, no desaparezco en un agujero negro después del despegue. Estaré aquí para asegurar que todo vaya bien." data-en="Green light for launch! I put your project online for the world to see. But don't worry, I don't disappear into a black hole after takeoff. I'll be here to make sure everything goes well.">
                    ¡Luz verde para el lanzamiento! Pongo tu proyecto en línea para que el mundo lo vea. Pero tranquilo, no desaparezco 
                    en un agujero negro después del despegue. Estaré aquí para asegurar que todo vaya bien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Final */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent-green/10 to-accent-blue/10 border border-accent-green/30 rounded-lg p-8 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">🛡️</span>
              <h3 className="text-2xl font-bold text-accent-green" data-es="MI COMPROMISO CONTIGO" data-en="MY COMMITMENT TO YOU">
                MI COMPROMISO CONTIGO
              </h3>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed mb-6" data-es="Trabajo con transparencia, comunicación constante y un enfoque centrado en tus necesidades. Tu éxito es mi prioridad." data-en="I work with transparency, constant communication and a focus centered on your needs. Your success is my priority.">
              Trabajo con transparencia, comunicación constante y un enfoque centrado en tus necesidades. Tu éxito es mi prioridad.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-terminal-surface/30 rounded-lg p-4">
                <span className="text-2xl mb-2 block">⚡</span>
                <span className="text-accent-green font-semibold">Entrega puntual</span>
              </div>
              <div className="bg-terminal-surface/30 rounded-lg p-4">
                <span className="text-2xl mb-2 block">💰</span>
                <span className="text-accent-blue font-semibold">Calidad garantizada</span>
              </div>
              <div className="bg-terminal-surface/30 rounded-lg p-4">
                <span className="text-2xl mb-2 block">🎯</span>
                <span className="text-accent-purple font-semibold">Soporte 30 días incluido</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contacto" 
              className="inline-flex items-center gap-2 bg-accent-green text-terminal-bg px-8 py-4 rounded-lg font-semibold hover:bg-accent-green/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-green/25"
              data-es="💬 Hablemos de tu Proyecto" data-en="💬 Let's Talk About Your Project"
            >
              💬 Hablemos de tu Proyecto
            </a>
            <p className="text-text-secondary text-sm" data-es="⏰ Solo 3 proyectos disponibles este mes" data-en="⏰ Only 3 projects available this month">
              ⏰ Solo 3 proyectos disponibles este mes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}