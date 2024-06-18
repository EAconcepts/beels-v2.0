import heroImg from '../../../assets/images/heroImg.jpeg'

const HeroCard = () => {
  return (
    <div className="w-[348px] ml-[76px] rounded-[8px] h-[367px] border-[16px] border-white border-r-0 overflow-hidden">
        <img src={heroImg} className=" h-full object-cover "/>
    </div>
  )
}

export default HeroCard