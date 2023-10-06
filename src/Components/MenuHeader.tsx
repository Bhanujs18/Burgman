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
  height: 20rem;
}
.videotext{
  text-shadow: 1px 1px 2px black;
  top:50%;
  left:50%;
  align-text: center;
  position: absolute;
  color: white;
  transform: translate(-50%,50%);
  font-size: 3rem;
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
        <img className='vid' src='https://b.zmtcdn.com/data/pictures/2/20256032/9b4930c0ca4bd449f2a7a3bd82d645be.jpg?fit=around|960:500&crop=960:500;*,*' alt='vid'/>
         <div className='videotext'>
          <h1>{text}</h1>
          <p className='tagline'></p>
         </div>
        </div>
    </Wrapper>
  )
}

export default MenuHeader