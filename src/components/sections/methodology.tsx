'use client';

export default function Methodology() {
  return (
    <section id="metodologia" className="section-animate py-20 bg-terminal-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-accent-green" data-es="Mi Plan de Juego: Cómo Creamos Magia Juntos" data-en="My Game Plan: How We Create Magic Together">
          Mi Plan de Juego: Cómo Creamos Magia Juntos
        </h2>
        <p className="methodology-intro text-center text-text-secondary text-lg leading-relaxed mb-12 max-w-4xl mx-auto" data-es="Cada proyecto es una aventura, y toda aventura necesita un buen mapa. Aquí te muestro el mío. Es un proceso diseñado para que todo fluya sin dramas, con mucha comunicación y, sobre todo, para que el resultado final te haga decir &apos;¡Wow!&apos;." data-en="Every project is an adventure, and every adventure needs a good map. Here&apos;s mine. It&apos;s a process designed to make everything flow smoothly, with lots of communication and, above all, to make the final result make you say &apos;Wow!&apos;">
          Cada proyecto es una aventura, y toda aventura necesita un buen mapa. Aquí te muestro el mío. 
          Es un proceso diseñado para que todo fluya sin dramas, con mucha comunicación y, sobre todo, 
          para que el resultado final te haga decir &apos;¡Wow!&apos;.
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
                  <p className="text-text-secondary leading-relaxed" data-es="Primero, lo primero: una buena charla. Necesito entender tu idea. Aquí definimos qué queremos construir y trazamos el plan para no terminar haciendo un cohete cuando solo necesitábamos una bicicleta (aunque los cohetes son geniales)." data-en="First things first: a good chat. I need to understand your idea. Here we define what we want to build and draw up the plan so we don't end up making a rocket when we only needed a bicycle (although rockets are awesome).">
                    Primero, lo primero: una buena charla. Necesito entender tu idea. Aquí definimos qué queremos 
                    construir y trazamos el plan para no terminar haciendo un cohete cuando solo necesitábamos una 
                    bicicleta (aunque los cohetes son geniales).
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
                  <p className="text-text-secondary leading-relaxed" data-es="Con el plan en mano, me pongo mi sombrero de arquitecto. Dibujo los planos (prototipos) para que sepas exactamente cómo se sentirá todo. ¡El objetivo es que sea tan intuitivo que no necesite un manual de 500 páginas!" data-en="With the plan in hand, I put on my architect hat. I draw the blueprints (prototypes) so you know exactly how everything will feel. The goal is to make it so intuitive that it doesn't need a 500-page manual!">
                    Con el plan en mano, me pongo mi sombrero de arquitecto. Dibujo los planos (prototipos) para que 
                    sepas exactamente cómo se sentirá todo. ¡El objetivo es que sea tan intuitivo que no necesite un 
                    manual de 500 páginas!
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
                  <p className="text-text-secondary leading-relaxed" data-es="Aquí es donde las ideas cobran vida. Convierto el diseño en código funcional, línea por línea. Es un proceso que involucra lógica, creatividad y una cantidad probablemente insana de café. Te mantendré al tanto para que veas cómo tu proyecto evoluciona." data-en="This is where ideas come to life. I convert the design into functional code, line by line. It's a process that involves logic, creativity and a probably insane amount of coffee. I'll keep you posted so you can see how your project evolves.">
                    Aquí es donde las ideas cobran vida. Convierto el diseño en código funcional, línea por línea. 
                    Es un proceso que involucra lógica, creatividad y una cantidad probablemente insana de café. 
                    Te mantendré al tanto para que veas cómo tu proyecto evoluciona.
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
                  <p className="text-text-secondary leading-relaxed" data-es="Antes de lanzar, me convierto en un detective de bugs. Reviso cada rincón para asegurarme de que todo funcione sin problemas. Mi misión es entregar un producto tan sólido que podría sobrevivir al clic de un usuario muy curioso." data-en="Before launching, I become a bug detective. I check every corner to make sure everything works smoothly. My mission is to deliver a product so solid it could survive the click of a very curious user.">
                    Antes de lanzar, me convierto en un detective de bugs. Reviso cada rincón para asegurarme de que 
                    todo funcione sin problemas. Mi misión es entregar un producto tan sólido que podría sobrevivir 
                    al clic de un usuario muy curioso.
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
                  <p className="text-text-secondary leading-relaxed" data-es="¡Luz verde para el lanzamiento! Pongo tu proyecto en línea para que el mundo lo vea. Pero tranquilo, no desaparezco en un agujero negro después del despegue. Estaré aquí para asegurar que todo vaya bien." data-en="Green light for launch! I put your project online for the world to see. But don't worry, I don't disappear into a black hole after takeoff. I'll be here to make sure everything goes well.">
                    ¡Luz verde para el lanzamiento! Pongo tu proyecto en línea para que el mundo lo vea. Pero tranquilo, 
                    no desaparezco en un agujero negro después del despegue. Estaré aquí para asegurar que todo vaya bien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-3xl mx-auto" data-es="Este proceso no es solo una metodología; es mi compromiso contigo. Cada paso está diseñado para que te sientas parte del proceso y tengas la confianza de que tu proyecto está en las mejores manos." data-en="This process is not just a methodology; it's my commitment to you. Every step is designed to make you feel part of the process and have confidence that your project is in the best hands.">
            Este proceso no es solo una metodología; es mi compromiso contigo. Cada paso está diseñado 
            para que te sientas parte del proceso y tengas la confianza de que tu proyecto está en las mejores manos.
          </p>
          <a 
            href="#contacto" 
            className="inline-flex items-center gap-2 bg-accent-green text-terminal-bg px-8 py-4 rounded-lg font-semibold hover:bg-accent-green/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-green/25"
            data-es="¿Listo para empezar? ¡Hablemos!" data-en="Ready to get started? Let's talk!"
          >
            ¿Listo para empezar? ¡Hablemos!
            <span className="text-xl">💬</span>
          </a>
        </div>
      </div>
    </section>
  );
}