import { useSpring, animated } from 'react-spring'
import { FaUser } from 'react-icons/fa'
import { BsCreditCardFill } from 'react-icons/bs';
import checkIconMobile from '../../assets/mobile/checkpoint.svg'

const Content = () => {
  const customerIncrease = useSpring({customers: 15427, from: {customers: 0}})
  const cardIncrease = useSpring({cards: 198332, from: {cards: 0}})
  return (
    <section className="md:flex md:justify-around">
      <div className="md:w-[20%] ml-20 mr-20 font-bold flex flex-col items-center justify-center bg-gradient-to-b from-white/40 to-transparent shadow-md rounded-[24px]">
        <div className="my-5 gap-8 flex items-center">
          <FaUser size={'22px'} className=''/>
          <div className='text-24 flex flex-col items-center'>
            <animated.div>
              {customerIncrease.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className='text-13 md:text-16'>Customers</p>
          </div>
        </div>
        <div className="my-5 gap-8 flex items-center">
          <BsCreditCardFill size={'22px'} className=''/>
          <div className='text-24 flex flex-col items-center'>
            <animated.div>
              {cardIncrease.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className='text-13 md:text-16'>Cards Issued</p>
          </div>
        </div>
      </div>
      <div className='mt-20 text-13 flex flex-col justify-center w-[100%] font-semibold md:w-[30%] md:text-16 md:mt-0'>
        <div className='check-content'>
          <img src={checkIconMobile} alt=''/>
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className='check-content'>
          <img src={checkIconMobile} alt=''/>
          <p>No external fees</p>
        </div>
        <div className='check-content'>
          <img src={checkIconMobile} alt=''/>
          <p>Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
}
 
export default Content;