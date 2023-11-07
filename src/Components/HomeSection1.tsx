;
import { styled } from 'styled-components';


const Wrapper = styled.section`
background-image: url('https://res.cloudinary.com/dyqynjew8/image/upload/v1698396554/Screenshot_2023-10-27_141816-min_pl8ju2.png');
background-repeat: no-repeat;
background-size: cover;
}
background-color: black;
body {
  background-color: black;
 

.container {
  width: 1200px !important;
  padding: 0 !important;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  background:transparent;
  @media screen and (min-width: 992px) and (max-width: 1439px) {
    max-width: 1279px !important;
    padding: 0 !important;
    margin: 0 80px !important;
    width: auto !important;
  }

  @media screen and (max-width: 991px) {
    max-width: 959px !important;
    margin: 0 16px !important;
    padding: 0 !important;
    width: auto !important;
  }
}

.gradient-cards {
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
  gap:2rem;
  width:100%;
  background:transparent;
  padding: 10px;
}

.container-title {
  text-align: center;
  font-size: 2.5rem;
  color: white;
  padding: 2rem 0rem;
  font-family: 'Luckiest Guy', cursive;
  letter-spacing: 1.2px;
  font-weight: 600;
  line-height: 60px;
}

.card {
  border: 0;
  background:transparent;

  display: flex;
  justify-content: center;
  align-items:center;
  margin-inline: auto;
}

.container-card {
  position: relative;
  display: flex;
  width: 20rem;
  color: green;
  border: 5px green solid;
  align-items:Center;
  background-color: white;
  background-clip: padding-box;
  border-radius: 45px;
  font-family: 'Luckiest Guy', cursive;
  padding: 0.5rem;
  .img {
    width; 7rem;
    height: 7rem;
  }
}

.bg-green-box,
.bg-white-box,
.bg-yellow-box,
.bg-blue-box {
  position: relative;
}

.bg-green-box::after,
.bg-white-box::after,
.bg-yellow-box::after,
.bg-blue-box::after {
  position: absolute;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
  content: "";
  z-index: -1;
  border-radius: 45px;
}

.bg-green-box::after {
  background: linear-gradient(71deg, #0d1212, #3da077, #0d1212);
}

.bg-white-box::after {
  background: linear-gradient(71deg, #121013, #b0afb0, #121013);
}

.bg-yellow-box::after {
  background: linear-gradient(71deg, #110e0e, #afa220, #110e0e);
}

.bg-blue-box::after {
  background: linear-gradient(71deg, #0c0a0e, #5f6fad, #0c0a0e);
}

.card-title {
  font-weight: 600;
  color: green;
  font-family: 'Luckiest Guy', cursive;
  letter-spacing: 1.2px;
  line-height: 40px;
  font-style: normal;
  font-size: 28px;
  padding-bottom: 8px;
}

.card-description {
  font-weight: 600;
  line-height: 32px;
  color: green;
  font-size: 16px;
  max-width: 470px;
}

color: green;
.hero2div{
  display: block;
  justify-content: center;
  font-size: 1rem;
  color: green;
  .heroSection-1-grids{
    width: 100%;
    
    .icons{
      width: 100%;
      text-align: center;
       color: green;
    }
}
}
`

const HomeSection1 = () => {
  return (
    <Wrapper>
   <div className="container">
  {/* <p className="container-title">Here are the features<br />we’re proud of</p>
 */}
  <div className="gradient-cards">
  <div className="card">
      
      <div className="container-card bg-blue-box">
      <img className='img' src='https://res.cloudinary.com/dyqynjew8/image/upload/v1698651582/hamburger-veggie-burger-take-out-fast-food-kebab-delicious-beef-burger-removebg-preview_tmotz6.png' />
      <div style={{width:'100%', textAlign:'center'}}>
        <p className="card-title">Jumbo King</p>
        <p className="card-description">Add To Cart</p>
        </div>
      </div>
    </div>

    <div className="card">
      
      <div className="container-card bg-blue-box">
      <img className='img' src='https://res.cloudinary.com/dyqynjew8/image/upload/v1698651580/png-transparent-whopper-india-veggie-burger-hamburger-vegetarian-cuisine-burger-king-food-beef-recipe-removebg-preview_abqjqn.png' />
      <div style={{width:'100%', textAlign:'center'}}>
        <p className="card-title">Combo</p>
        <p className="card-description">Add To Cart</p>
        </div>
      </div>
    </div>

    <div className="card">
      
      <div className="container-card bg-blue-box">
      <img className='img' src='https://res.cloudinary.com/dyqynjew8/image/upload/v1698651578/compngwingnzfif-removebg-preview_vtsxsz.png' />
      <div style={{width:'100%', textAlign:'center'}}>
        <p className="card-title">Crispy Veg</p>
        <p className="card-description">Add To Cart</p>
        </div>
      </div>
    </div>

    <div className="card">
      
      <div className="container-card bg-blue-box">
      <img className='img' src='https://res.cloudinary.com/dyqynjew8/image/upload/v1698651578/french-fries-american-food-dish-ham-and-cheese-sandwich-slider-removebg-preview_gm843g.png' />
      <div style={{width:'100%', textAlign:'center'}}>
        <p className="card-title">Burgman</p>
        <p className="card-description">Add To Cart</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </Wrapper>
  )
}

export default HomeSection1;