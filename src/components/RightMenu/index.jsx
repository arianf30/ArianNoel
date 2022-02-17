export default function RigthMenu () {
  return (
    <div className='flex h-screen bg-arian-negro border-r border-arian-grisclaro box-border'>
      <div className='h-4/4 w-20 hover:w-24 ease-in duration-300'>
        {/* Download */}
        <div className='flex h-1/5 w-full justify-center items-center cursor-pointer fill-arian-grisclaro hover:fill-arian-blanco2 text-transparent hover:text-arian-blanco ease-in duration-300'>
          <div className='w-full text-center justify-center'>
            <svg className='inline-block' viewBox='0 0 640 512' width='38' xmlns='http://www.w3.org/2000/svg'><path d='m537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2-27.7-48-79.4-80.2-138.7-80.2-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1-56 19.7-96.2 73.1-96.2 135.9 0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7-105.4 105.4c-6.2 6.2-16.4 6.2-22.6 0l-105.4-105.4c-10.1-10.1-2.9-27.3 11.3-27.3h65.4v-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z' /></svg>
            <p className='text-xs mt-1'>Curriculum</p>
          </div>
        </div>

        {/* Email */}
        <div className='flex h-1/5 w-full justify-center items-center cursor-pointer fill-arian-grisclaro hover:fill-arian-blanco2 text-transparent hover:text-arian-blanco ease-in duration-300'>
          <div className='w-full text-center justify-center'>
            <svg className='inline-block' viewBox='0 0 24 24' width='38' xmlns='http://www.w3.org/2000/svg'><path d='m0 0h24v24h-24z' fill='none' /><path d='m12 21.95h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10s-10 4.48-10 10 4.48 10 10 10zm0-7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z' fill-opacity='.9' /></svg>
            <p className='text-xs mt-1'>Email</p>
          </div>
        </div>

        {/* Linkedin */}
        <div className='flex h-1/5 w-full justify-center items-center cursor-pointer fill-arian-grisclaro hover:fill-arian-blanco2 ease-in duration-300 text-transparent hover:text-arian-blanco'>
          <div className='w-full text-center justify-center'>
            <svg className='inline-block' viewBox='0 0 24 24' width='47' xmlns='http://www.w3.org/2000/svg'><path d='m8 19h-3v-10h3zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03z' /><ellipse cx='6.5' cy='6.5' rx='1.55' ry='1.5' /></svg>
            <p className='text-xs mt-1'>LinkedIn</p>
          </div>
        </div>

        {/* Github */}
        <div className='flex h-1/5 w-full justify-center items-center cursor-pointer fill-arian-grisclaro hover:fill-arian-blanco2 ease-in duration-300 text-transparent hover:text-arian-blanco'>
          <div className='w-full text-center justify-center'>
            <svg className='inline-block' viewBox='0 0 24 24' width='42' xmlns='http://www.w3.org/2000/svg'><path d='m12 2a10 10 0 0 0 -10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23 0-.86 0-1.69-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85v2.74c0 .27.16.59.67.5 3.97-1.34 6.83-5.08 6.83-9.5a10 10 0 0 0 -10-10z' /></svg>
            <p className='text-xs mt-1'>Github</p>
          </div>
        </div>

        {/* Instagram */}
        <div className='flex h-1/5 w-full justify-center items-center cursor-pointer fill-arian-grisclaro hover:fill-arian-blanco2 ease-in duration-300 text-transparent hover:text-arian-blanco'>
          <div className='w-full text-center justify-center'>
            <svg className='inline-block' viewBox='0 0 24 24' width='42' xmlns='http://www.w3.org/2000/svg'><path d='m20.947 8.305c-.011-.757-.151-1.508-.419-2.216-.469-1.209-1.424-2.165-2.633-2.633-.699-.263-1.438-.404-2.186-.42-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055c-.747.016-1.486.157-2.185.42-1.209.468-2.165 1.424-2.633 2.633-.263.699-.405 1.438-.419 2.185-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187.469 1.208 1.424 2.164 2.634 2.632.696.272 1.435.426 2.185.45.963.043 1.268.056 3.71.056s2.755 0 3.71-.056c.747-.015 1.486-.156 2.186-.419 1.209-.469 2.164-1.425 2.633-2.633.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623c2.552 0 4.623 2.069 4.623 4.623s-2.071 4.623-4.623 4.623zm4.807-8.339c-.597 0-1.078-.482-1.078-1.078s.481-1.078 1.078-1.078c.595 0 1.077.482 1.077 1.078s-.482 1.078-1.077 1.078z' /><circle cx='11.994' cy='11.979' r='3.003' /></svg>
            <p className='text-xs mt-1'>Instagram</p>
          </div>
        </div>
      </div>
    </div>
  )
}
