import heroimage from '../../assets/image 3.svg'

const Hero = () => {
  return (
    <div className='container'>
        <img className= 'img-fluid w-100' src={heroimage} alt="hero-image" />
    </div>
  )
}

export default Hero