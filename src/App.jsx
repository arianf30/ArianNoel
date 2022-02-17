import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'
import RigthMenu from './components/RightMenu'

export default function App () {
  return (
    <div className='flex font-sans min-h-screen'>
      <RigthMenu />
      <LeftColumn />
      <RightColumn />
    </div>
  )
}
