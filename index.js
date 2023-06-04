let mainContainer=document.getElementById("main-container");
let btn=document.getElementById("btn");
let showMenuBtn=document.getElementById("getMenu");
let displayFood=document.getElementById("displayFood");
let foodmenu=document.getElementById("foodmenu");
async function getMenu(){
    let endpoint=`https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`;
    try{

        let response=await fetch(endpoint);
        let result=await response.json();
        for(let i=0;i<result.length;i++)
        {
            let div1=document.createElement("div");
            let div2=document.createElement("div");
            
            let name=result[i].name;
            let price=result[i].price;
            
            div1.append(name);
            div2.append(price);
            foodmenu.id="f";
            foodmenu.append(div1);
            
            foodmenu.append(div2);
            displayFood.id="df";
            displayFood.append(foodmenu);


            // console.log(name);
            // console.log(price);
        }
        //console.log(result);
    }
    catch(error){
        console.log("Error Occured",error );
    }
}
//getMenu();

function TakeOrder() {
    try{

        //promise will be visible in console
        let prom=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let order={
                    burgurs :['Grilled Cheese Sandwich' , 'Caesar Salad', 'Fish and Chips']
                };
                resolve(order);
                console.log(prom);
            
                
            },2500 );
            
        });
    }
    catch(error){
        alert("something went wrong! Please place order again.");
        console.log(error);
    };
   
};
function OrderPrep(){
    try{
        //promise will be visible in console
        let promp=new Promise((resolve)=>{
            setTimeout(()=>{
                let obj={order_status:true, paid:false};
                resolve(obj);
                console.log(promp);
               
            },1500);
            
        });
    }
    catch(error)
    {
        alert("Your order is not yet completed! ");
        console.log(error);
    }
  
};
function payOrder(){
    try{

        let promp=new Promise((resolve)=>{
            setTimeout(()=>{
                let obj={order_status:true, paid:true};
                resolve(obj);
                console.log(promp);
                thankyouFnc();
            },1000);
        });
    }
    catch(error){
        alert("Payment not done! ");
        console.log(error);
    }
    
};

function thankyouFnc(){
    alert("thankyou for eating with us today!");
}