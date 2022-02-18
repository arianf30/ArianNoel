import ItemSkill from './ItemSkill'

export default function Skills () {
  return (
    <div className='pl-4 pr-8'>
      <ItemSkill width='w-10/12' name='JavaSript' />
      <ItemSkill width='w-10/12' name='React' />
      <ItemSkill width='w-8/12' name='Node.js' />
      <ItemSkill width='w-9/12' name='Express.js' />
      <ItemSkill width='w-11/12' name='HTML5' />
      <ItemSkill width='w-11/12' name='CSS3' />
      <ItemSkill width='w-9/12' name='MongoDb' />
      <ItemSkill width='w-9/12' name='MySQL' />
    </div>
  )
}
