import heroImg from '../../../assets/images/heroImg.png'
import hero2 from '../../../assets/images/hero2.png'

const HeroCard = () => {
  return (
    <div className="max-lg:w-[348px] ml-[76px]  rounded-[8px] lg:h-[512px] lg:w-[581px] max-lg:h-[367px] overflow-hidden">
        <img src={heroImg} className="lg:hidden h-full object-cover "/>
        <img src={hero2} className="hidden lg:block h-full object-cover "/>
    </div>
  )
}

export default HeroCard