export default function RightColumn () {
  return (
    <div className='flex-auto p-8 bg-arian-grisoscuro2 text-arian-blanco2 max-h-screen overflow-y-auto border-r border-arian-grisclaro scrollbar-thin scrollbar-thumb-arian-grisclaro scrollbar-track-arian-grisoscuro2'>

      {/* Line - import AboutUs */}
      <p className='font-mono text-sm font-medium tracking-wide'><font className='text-arian-amarillo'>import</font> <font className='text-arian-rosa'>AboutUs</font> <font className='text-arian-amarillo'>from</font> <font className='text-arian-verde'>'./components/AboutUs'</font></p>
      <p className='font-mono text-sm font-medium tracking-wide'><font className='text-arian-amarillo'>import</font> <font className='text-arian-rosa'>Formation</font> <font className='text-arian-amarillo'>from</font> <font className='text-arian-verde'>'./components/Formation'</font></p>
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
      <div className='font-body pl-8 pr-12 text-justify text-sm leading-6'>
        <p className='mb-3'>
          Tengo 31 años, soy de Resistencia, Chaco. Apasionado por la programación desde que tuve mi primer PC. Juego mucho al pádel y me encanta cualquier tipo de actividad física. También me encanta hacer música.
        </p>
        <p className='mb-3'>
          En programación, mi especialidad es React con código reutilizable, automatizado, performante y con buenas prácticas. Stack favorito: MERN. Gran experiencia en HTML5, CSS3, Javascript vanilla, Typescript, JQuery, PHP. Desarrollo de APIs con Node.js y Express.
        </p>
        <p className='mb-3'>
          Experiencia con bases de datos relacionales y no relacionales. Preferiblemente MongoDB con mongoose y MySQL.
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
      <div className='font-body pl-8 pr-12 text-justify text-sm leading-6'>
        {/* Linea experiencia London Estudio */}
        <div class='flex items-center mb-1'>
          <div class='bg-arian-blanco rounded-full h-4 w-4' />
          <div class='flex-1 ml-3 mt-1 font-medium text-arian-blanco'>London Estudio <font className='text-arian-grisclaro2'>| mar. de 2016 - actualidad · 6 años</font></div>
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
          <a href='http://chaco365.com/' target='_blank' className='text-arian-lila italic' rel='noreferrer'>Chaco365</a>, etc...
        </p>

        {/* Linea experiencia London Manager */}
        <div class='flex items-center mb-1 mt-6'>
          <div class='bg-arian-blanco rounded-full h-4 w-4' />
          <div class='flex-1 ml-3 mt-1 font-medium text-arian-blanco'>London Manager <font className='text-arian-grisclaro2'>| ene. de 2017 - actualidad · 5 años 2 meses</font></div>
        </div>
        <p className='mb-3'>
          Por la gran demanda de sistemas de gestión que tiene la agencia, creamos un socio online y offline para empresas de distintos rubros (comercios, fabricantes, gastronómicos, etc). Actualmente la aplicación cuenta con una versión Beta próxima a desplegarse y creada con el stack MERN.
        </p>

        {/* Linea experiencia London Manager */}
        <div class='flex items-center mb-1 mt-6'>
          <div class='bg-arian-blanco rounded-full h-4 w-4' />
          <div class='flex-1 ml-3 mt-1 font-medium text-arian-blanco'>Coderhouse <font className='text-arian-grisclaro2'>| oct. 2021 - actualidad · 5 meses</font></div>
        </div>
        <p className='mb-3'>
          Luego de participar en cursos de Coderhouse para actualizar conocimientos, y quedar dentro del top de mejores alumnos, apliqué para ser parte del team de tutores del curso de React Js.
          <br />
          Mis tareas son:
          <br />
          - Corregir los desafíos de todas las clases y una pre-entrega del proyecto final, basados en la creación de un e-commerce.
          <br />
          - Tomar asistencia en las clases y brindar soporte al profesor y los alumnos durante la misma.
          <br />
          - Llevar un seguimiento del alumno y apoyar en su aprendizaje y experiencia con React.
          <br />
          - Estar disponible para responder dudas y consultas sobre los trbajos.
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
      <div className='font-body pl-8 pr-12 text-justify text-sm leading-6'>
        <p className='mb-3'>
          Actualmente estoy en búsqueda de un nuevo desafío laboral. Para esto suelo necesitar enviar mi CV y por ello me pregunté:<br />-¿para qué tener uno en formato de PDF siendo un Web Developer?
        </p>
        <p className='mb-3'>
          En programación, mi especialidad es React con código reutilizable, automatizado, performante y con buenas prácticas. Stack favorito: MERN. Gran experiencia en HTML5, CSS3, Javascript vanilla, Typescript, JQuery, PHP. Desarrollo de APIs con Node.js y Express.
        </p>
        <p className='mb-3'>
          Experiencia con bases de datos relacionales y no relacionales. Preferiblemente MongoDB con mongoose y MySQL.
        </p>
        <p className='mb-3'>
          Me adapto al entorno que sea, librerías, frameworks, metodologías ágiles, estoy en costante aprendizaje y adaptación en el mundo IT.
        </p>
      </div>

      <div className='flex items-baseline m-8 mb-4 border-b border-arian-grisclaro' />

    </div>
  )
}
