import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CheckOut = ({pay}:any) => {
  console.log("total amt " + pay);
   const navigate = useNavigate();
  const loadScript = (src:any) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };
  

  const displayRazorpay = async (pay:number) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      navigate('/OrderNotPlaced');
      return;
    }
    const options = {
      key: "rzp_test_Qkpjm8WUVjFfLA",
      currency: "INR",
      amount: pay * 100,
      name: "Burgman",
      description: "Thanks for purchasing",
      image:"./logo/1.png",

      handler: function (response:any) {
        alert(response.razorpay_payment_id+" Payment Successfully");
        navigate('/orderPlaced');
      },
      prefill: {
        name: "Burgman",
      },
    };
    const paymentObject = new (window as any).Razorpay(options);
  paymentObject.open();
};

 

  const products = useSelector((store:any) =>store.menu.cart) 
     const submit = async (e:any) => {
        e.preventDefault();
        displayRazorpay(pay);
        console.log("i m submit");
        console.log("id" + products)
        const res = await fetch('https://burgman-burgers-default-rtdb.firebaseio.com/userData.json',{
        method : "POST", 
        headers:{
          "Content-Type" : "application/json",
        },
        body:JSON.stringify({
           products,
        }),
    })
    if(res){
       console.log('data stored');
    }
    else{
        alert("store");
    }
   }

  return (
    <div style={{width:'100%' , display: "flex", justifyContent:'center'}}>
          <button className="button" onClick={submit} >Place Order</button>
    </div>
  )
}
