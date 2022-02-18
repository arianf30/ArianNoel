import SocialMenu from '../../components/SocialMenu'
import LeftColumn from '../../components/LeftColumn'
import RightColumn from '../../components/RightColumn'

export default function Home () {
  return (
    <div className='block md:flex md:h-screen font-sans min-h-screen bg-arian-negro'>
      <div className='block md:w-1/2 md:h-full lg:w-auto lg:flex'>
        <SocialMenu />
        <LeftColumn />
      </div>
      <div className='block md:flex-auto md:w-1/2'>
        <RightColumn />
      </div>
    </div>
  )
}
