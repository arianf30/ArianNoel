import ImageArian from '../../assets/images/arianpng.png'

export default function ColumnLeft () {
  return (
    <div className='flex-none w-96 relative bg-arian-grisoscuro border-r border-arian-grisclaro'>

      <section className='mx-auto rounded-2xl px-8 py-6 text-arian-blanco'>
        <div className='flex mt-6 mx-auto justify-center'>
          <img src={ImageArian} className='rounded-full w-2/4' alt='Arián Fernández' srcset='' />
        </div>

        <div className='mt-8'>
          <h2 className='font-light text-2xl tracking-wide'><b className='font-bold'>Arián Noel</b> Fernández</h2>
        </div>
        <p className='font-semibold mt-2.5 text-arian-amarillo mb-10'>
          <i>Sr. Frontend · Ssr. Backend | Developer</i>
        </p>

        <p className='font-mono text-sm font-normal tracking-wide'>
          {/* Line 1 */}
          <font className='text-arian-amarillo'>export default</font> <font className='text-arian-celeste'><i>function</i></font> <font className='text-arian-azul'>Skills</font> <font className='text-arian-grisclaro2'>() {'{'}</font>
          <br />
          {/* Line 2 */}
          <font className='text-arian-amarillo pl-4'>return</font> <font className='text-arian-grisclaro2'>(</font>
        </p>

        <div className='pl-4 pr-8'>
          {/* JAVASCRIPT */}
          <div className='h-1 w-full bg-arian-negro mt-8 rounded-full'>
            <div className='h-1 rounded-full w-11/12 bg-gradient-to-r from-arian-amarillo to-arian-verde' />
          </div>
          <div className='mt-3 text-sm'>
            <span className='text-gray-400 font-semibold'>JavaScript</span>
          </div>

          {/* REACT */}
          <div className='h-1 w-full bg-arian-negro mt-8 rounded-full'>
            <div className='h-1 rounded-full w-10/12 bg-gradient-to-r from-arian-amarillo to-arian-verde' />
          </div>
          <div className='mt-3 text-sm'>
            <span className='text-gray-400 font-semibold'>React</span>
          </div>

          {/* NODE */}
          <div className='h-1 w-full bg-arian-negro mt-8 rounded-full'>
            <div className='h-1 rounded-full w-4/5 bg-gradient-to-r from-arian-amarillo to-arian-verde' />
          </div>
          <div className='mt-3 text-sm'>
            <span className='text-gray-400 font-semibold'>Node.js</span>
          </div>

          {/* Express */}
          <div className='h-1 w-full bg-arian-negro mt-8 rounded-full'>
            <div className='h-1 rounded-full w-4/5 bg-gradient-to-r from-arian-amarillo to-arian-verde' />
          </div>
          <div className='mt-3 text-sm'>
            <span className='text-gray-400 font-semibold'>Express.js</span>
          </div>

          {/* HTML5 */}
          <div className='h-1 w-full bg-arian-negro mt-8 rounded-full'>
            <div className='h-1 rounded-full w-11/12 bg-gradient-to-r from-arian-amarillo to-arian-verde' />
          </div>
          <div className='mt-3 text-sm'>
            <span className='text-gray-400 font-semibold'>HTML5</span>
          </div>

          {/* CSS3 */}
          <div className='h-1 w-full bg-arian-negro mt-8 rounded-full'>
            <div className='h-1 rounded-full w-11/12 bg-gradient-to-r from-arian-amarillo to-arian-verde' />
          </div>
          <div className='mt-3 text-sm'>
            <span className='text-gray-400 font-semibold'>CSS3</span>
          </div>

          {/* MongoDb */}
          <div className='h-1 w-full bg-arian-negro mt-8 rounded-full'>
            <div className='h-1 rounded-full w-4/5 bg-gradient-to-r from-arian-amarillo to-arian-verde' />
          </div>
          <div className='mt-3 text-sm'>
            <span className='text-gray-400 font-semibold'>MongoDb</span>
          </div>

          {/* MySQL */}
          <div className='h-1 w-full bg-arian-negro mt-8 rounded-full'>
            <div className='h-1 rounded-full w-4/5 bg-gradient-to-r from-arian-amarillo to-arian-verde' />
          </div>
          <div className='mt-3 text-sm'>
            <span className='text-gray-400 font-semibold'>MySQL</span>
          </div>
        </div>

        <p className='font-mono text-sm font-normal tracking-wide mt-5'>
          {/* Line 1 */}
          <font className='text-arian-grisclaro2 pl-4'>)</font>
          <br />
          {/* Line 2 */}
          <font className='text-arian-grisclaro2'>{'}'}</font>
        </p>

      </section>

    </div>
  )
}
