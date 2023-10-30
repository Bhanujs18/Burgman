import {styled} from 'styled-components';



const Wrapper = styled.section`
width: 100%;
height: 100%;
background-repeat:no-repeat;
background-size:cover;
background-position: center;
margin:0;
position: relative;
padding: 0;

.vid{
  width: 100%;
  height: 15rem;
}
.videotext{
  text-shadow: 1px 1px 2px black;
  top:50%;
  left:50%;
  font-family: 'Luckiest Guy', cursive;
  align-text: center;
  position: absolute;
  color: white;
  transform: translate(-50%,50%);
  font-size: 3rem;
  h1{
    font-family: 'Luckiest Guy', cursive;
  }
}

@media(max-width:1240px){
  .vid{
    height:25rem;
    width:100%;
  }
  .videotext{
   
    font-size:3rem;
    .tagline{
      font-size: 1.5rem;
    }
  }
}
@media(max-width:787px){
  .videotext{
    font-size:1.7rem;
    .tagline{
      font-size: 0.5rem;
    }
  }
  .vid{
    height:15rem;
   width: 100%;
  }
}

`

const MenuHeader = ({text}:any) => {
  return (
    <Wrapper>
         <div>
        <img className='vid' src='https://res.cloudinary.com/dyqynjew8/image/upload/v1698655077/Screenshot_2023-10-30_140734_zxivqh.png' alt='vid'/>
         <div className='videotext'>
          <h1>{text}</h1>
          <p className='tagline'></p>
         </div>
        </div>
    </Wrapper>
  )
}

export default MenuHeader