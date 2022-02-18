import ImageArian from '../../assets/images/arianpng.png'
import Skills from '../Skills'

export default function LeftColumn () {
  return (
    <div className='flex-auto md:w-full lg:w-96 md:max-h-full overflow-y-auto relative bg-arian-grisoscuro border-r border-arian-grisclaro scrollbar-thin scrollbar-thumb-arian-scroll scrollbar-track-arian-grisoscuro'>

      <section className='mx-auto rounded-2xl px-8 py-6 text-arian-blanco'>
        <p className='font-mono text-xs h-0 text-arian-naranja'>v1.0.1</p>
        <div className='flex mt-6 mx-auto justify-center'>
          <img src={ImageArian} className='rounded-full w-7/12 max-w-[212px]' alt='Foto de Arián Fernández' />
        </div>

        <div className='mt-8'>
          <h2 className='flex font-light text-2xl tracking-wide items-stretch'>
            <i><b className='font-bold'>Arián Noel</b> Fernández</i>
          </h2>
        </div>
        <p className='font-semibold mt-2.5 text-arian-amarillo mb-10'>
          <i>Sr. Frontend · Ssr. Backend | Developer</i>
        </p>

        <p className='font-mono text-sm font-medium tracking-wide'>
          {/* Line 1 */}
          <font className='text-arian-amarillo'>export default</font> <font className='text-arian-celeste'><i>function</i></font> <font className='text-arian-azul'>Skills</font> <font className='text-arian-grisclaro2'>() {'{'}</font>
          <br />
          {/* Line 2 */}
          <font className='text-arian-amarillo pl-4'>return</font> <font className='text-arian-grisclaro2'>(</font>
        </p>

        <Skills />

        <p className='font-mono text-sm font-medium tracking-wide mt-5'>
          {/* Line 3 */}
          <font className='text-arian-grisclaro2 pl-4'>)</font>
          <br />
          {/* Line 4 */}
          <font className='text-arian-grisclaro2'>{'}'}</font>
        </p>

      </section>

    </div>
  )
}
