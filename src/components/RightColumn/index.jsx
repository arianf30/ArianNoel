export default function RightColumn () {
  return (
    <div className='flex-auto p-8 bg-arian-grisoscuro2 text-arian-blanco2 max-h-max md:max-h-screen md:overflow-y-auto border-r border-arian-grisclaro scrollbar-thin scrollbar-thumb-arian-scroll scrollbar-track-arian-grisoscuro2'>

      {/* Line - import AboutUs */}
      <p className='font-mono text-sm font-medium tracking-wide'><font className='text-arian-amarillo'>import</font> <font className='text-arian-rosa'>AboutUs</font> <font className='text-arian-amarillo'>from</font> <font className='text-arian-verde'>'./components/AboutUs'</font></p>
      <p className='font-mono text-sm font-medium tracking-wide'><font className='text-arian-amarillo'>import</font> <font className='text-arian-rosa'>Experience</font> <font className='text-arian-amarillo'>from</font> <font className='text-arian-verde'>'./components/Experience'</font></p>
      <p className='font-mono text-sm font-medium tracking-wide'><font className='text-arian-amarillo'>import</font> <font className='text-arian-rosa'>ThisApp</font> <font className='text-arian-amarillo'>from</font> <font className='text-arian-verde'>'./components/ThisApp'</font></p>
      <br />

      {/* Line - export default app */}
      <p className='font-mono text-sm font-medium tracking-wide'>
        <font className='text-arian-amarillo'>export default</font> <font className='text-arian-celeste'><i>function</i></font> <font className='text-arian-azul'>App</font> <font className='text-arian-grisclaro2'>() {'{'}</font>
        <br />
        <font className='text-arian-amarillo pl-4'>return</font> <font className='text-arian-grisclaro2'>(</font>
      </p>

      <br />
      {/* Line - Component AboutUs */}
      <p className='font-mono text-sm font-medium tracking-wide pl-8'>
        <font className='text-arian-azul'>{'<AboutUs'}</font> <font className='text-arian-amarillo'><i>title</i></font><font className='text-arian-grisclaro2'>=</font><font className='text-arian-verde'>"Acerca de mi"</font>  <font className='text-arian-azul'>{'/>'}</font>
      </p>

      <br />
      {/* Párrafo 1 */}
      <div className='font-body pl-0 pr-0 lg:pl-8 lg:pr-12 text-justify text-sm leading-6'>
        <p className='mb-3'>
          Tengo 31 años y vivo en la ciudad de Resistencia-Chaco, Argentina.
        </p>
        <p className='mb-3'>
          Soy autodidacta y apasionado por la programación. Comencé a desarrollar webs desde que tuve mi primer PC poco después del año 2000. Juego mucho al pádel y me encanta cualquier tipo de actividad física. También me encanta hacer música.
        </p>
        <p className='mb-3'>
          Desarrollo en lenguaje JavaScript. Mi especialidad es React con código reutilizable, automatizado, performante y con buenas prácticas. Stack favorito: MERN. Gran experiencia en HTML5, CSS3, Javascript vanilla, Typescript, JQuery, PHP. Desarrollo de APIs con Node.js y Express.
        </p>
        <p className='mb-3'>
          Manejo bases de datos relacionales y no relacionales. Preferiblemente MongoDb con mongoose o MySQL.
        </p>
        <p className='mb-3'>
          Me adapto al entorno que sea, librerías, frameworks, metodologías ágiles, estoy en costante aprendizaje y adaptación en el mundo IT.
        </p>
      </div>

      <div className='flex items-baseline m-8 mb-4 border-b border-arian-grisclaro' />

      <br />
      {/* Line - Component Experience */}
      <p className='font-mono text-sm font-medium tracking-wide pl-8'>
        <font className='text-arian-azul'>{'<Experience'}</font> <font className='text-arian-amarillo'><i>title</i></font><font className='text-arian-grisclaro2'>=</font><font className='text-arian-verde'>"Experiencia Laboral"</font>  <font className='text-arian-azul'>{'/>'}</font>
      </p>

      <br />
      {/* Párrafo 2 */}
      <div className='font-body pl-0 pr-0 lg:pl-8 lg:pr-12 text-justify text-sm leading-6'>
        {/* Linea experiencia London Estudio */}
        <div className='flex items-center mb-1'>
          <div className='bg-arian-blanco rounded-full h-2 w-2' />
          <div className='flex-1 ml-3 mt-1 font-medium text-arian-blanco'>London Estudio <font className='text-arian-grisclaro2'>| mar. de 2016 - actualidad · 6 años</font></div>
        </div>
        <p className='mb-3'>
          Cuento con una experiencia laboral de 6 años como Full Stack Developer en <a href='http://londonestudio.com' target='_blank' className='underline decoration-4' rel='noreferrer'>London Estudio</a>. Desarrollando decenas de sitios web front y backend (institucionales, funcionales, portales de noticias, e-commerce, sistemas de gestión online para empresas, radios, etc). Además inicié como socio igualitario y encargado del Área Digital de la Agencia.
        </p>
        <p className='mb-3'>
          Algunos trabajos:{' '}
          <a href='https://londonmanager.com' target='_blank' className='text-arian-lila italic' rel='noreferrer'>London Manager</a>,{' '}
          <a href='https://pgfarq.com/' target='_blank' className='text-arian-lila italic' rel='noreferrer'>Paula G. Filippo Arq.</a>,{' '}
          <a href='https://ivancostaehijos.com.ar' target='_blank' className='text-arian-lila italic' rel='noreferrer'>Ivan Costa e Hijos</a>,{' '}
          <a href='https://maraluga.com' target='_blank' className='text-arian-lila italic' rel='noreferrer'>Maraluga Pádel</a>,{' '}
          <a href='https://femechacosalud.com/' target='_blank' className='text-arian-lila italic' rel='noreferrer'>FemeChaco</a>,{' '}
          <a href='http://saboratto.com/' target='_blank' className='text-arian-lila italic' rel='noreferrer'>Saboratto</a>,{' '}
          <a href='http://chaco365.com/' target='_blank' className='text-arian-lila italic' rel='noreferrer'>Chaco365</a>, entre otros...
        </p>

        {/* Linea experiencia London Manager */}
        <div className='flex items-center mb-1 mt-6'>
          <div className='bg-arian-blanco rounded-full h-2 w-2' />
          <div className='flex-1 ml-3 mt-1 font-medium text-arian-blanco'>London Manager <font className='text-arian-grisclaro2'>| ene. de 2017 - actualidad · 5 años 2 meses</font></div>
        </div>
        <p className='mb-3'>
          Por la gran demanda de sistemas de gestión que tiene la agencia, creamos un socio online y offline para empresas de distintos rubros (comercios, fabricantes, gastronómicos, etc). Actualmente la aplicación cuenta con 32 puntos de ventas activos. La versión Beta próxima a desplegarse fue creada con stack MERN.
        </p>

        {/* Linea experiencia London Manager */}
        <div className='flex items-center mb-1 mt-6'>
          <div className='bg-arian-blanco rounded-full h-2 w-2' />
          <div className='flex-1 ml-3 mt-1 font-medium text-arian-blanco'>Coderhouse <font className='text-arian-grisclaro2'>| oct. 2021 - actualidad · 5 meses</font></div>
        </div>
        <p className='mb-3'>
          Participé en cursos de Coderhouse para actualizar conocimientos, y al quedar dentro del top de mejores alumnos pude aplicar para ser tutor. Actualmente del curso de React Js.
          <br />
          Algunas tareas son: corregir desafíos y entregas; tomar asistencia en las clases y brindar soporte al profesor y los alumnos durante la misma; brindar soporte; etc.
        </p>

      </div>

      <div className='flex items-baseline m-8 mt-4 mb-6 pb-6 border-b border-arian-grisclaro' />

      <br />
      {/* Line - Component ThisApp */}
      <p className='font-mono text-sm font-medium tracking-wide pl-8'>
        <font className='text-arian-azul'>{'<ThisApp'}</font> <font className='text-arian-amarillo'><i>title</i></font><font className='text-arian-grisclaro2'>=</font><font className='text-arian-verde'>"¿Por qué realicé una web curriculum?"</font>  <font className='text-arian-azul'>{'/>'}</font>
      </p>

      <br />
      {/* Párrafo 3 */}
      <div className='font-body pl-0 pr-0 lg:pl-8 lg:pr-12 text-justify text-sm leading-6'>
        <p className='mb-3'>
          Actualmente estoy en búsqueda de un nuevo desafío laboral. Para esto necesito tener mi CV actualizado y por ello me pregunté:<br />—Siendo Web Developer, ¿por qué tendría un clásico CV en formato PDF?
        </p>
        <p className='mb-3'>
          La App por el momento es estática, desarrollada en React con Vite.js y Tailwind CSS.
        </p>
        <p className='mb-3'>
          El proyecto está compartido en <a href='https://github.com/arianf30/ArianNoel' target='_blank' className='underline decoration-4' rel='noreferrer'>Github</a> y deployado en Vercel.
        </p>
      </div>

      <p className='font-mono text-sm font-medium tracking-wide mt-5'>
        {/* Line 3 */}
        <font className='text-arian-grisclaro2 pl-4'>)</font>
        <br />
        {/* Line 4 */}
        <font className='text-arian-grisclaro2'>{'}'}</font>
      </p>
    </div>
  )
}
