import RightMenu from '../../components/RightMenu'
import LeftColumn from '../../components/LeftColumn'
import RightColumn from '../../components/RightColumn'

export default function Home () {
  return (
    <div className='flex font-sans min-h-screen'>
      <RightMenu />
      <LeftColumn />
      <RightColumn />
    </div>
  )
}
