import ImageArian from '../../assets/images/arianpng.png'
import Argentina from '../../assets/images/argentina.png'
import Skills from '../Skills'

export default function LeftColumn () {
  return (
    <div className='flex-none w-96 max-h-screen overflow-y-auto relative bg-arian-grisoscuro border-r border-arian-grisclaro scrollbar-thin scrollbar-thumb-arian-grisclaro scrollbar-track-arian-grisoscuro'>

      <section className='mx-auto rounded-2xl px-8 py-6 text-arian-blanco'>
        <div className='flex mt-6 mx-auto justify-center'>
          <img src={ImageArian} className='rounded-full w-2/4' alt='Arián Fernández' srcset='' />
        </div>

        <div className='mt-8'>
          <h2 className='font-body font-light text-2xl tracking-wide'>
            <b className='font-bold'>Arián Noel</b> Fernández
            <img className='inline ml-2 h-8 align-top' src={Argentina} />
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
