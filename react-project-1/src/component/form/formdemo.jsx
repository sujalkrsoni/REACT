import react from "react"
import {useState,useEffect} from "react"



export function Form(){

    const [amount , setAmount] = useState(1000000);
    const [years, setYears] = useState(3);
    const [rate , setRate] = useState(17.3);
    const [emi , setEmi] = useState(0);

    function HandleAmount(e){
        setAmount(e.target.value)
    }
    function HandleYears(e){
        setYears(e.target.value)
    }
    function HandleRate(e){
        setRate(e.target.value)
    }
    function HandleCalculate(){
        let p = amount;
        let r = rate;
        let t = years;
        let m = years*12;
        console.log(t);
        let EMI = p * r * Math.pow(1+r,m) / Math.pow(1+r,m) - 1;
        setEmi(EMI)
        console.log(EMI);
    }

    return (
        <div className="bg-dark text-white p-4 m-3">
            <h1>Personal EMI Loan Calculator</h1>
            <div className="form-control m-3 p-4 ">
                <div className="row">
                    <div className="col">
                        <span>Amount You need</span>
                        <input className=""  type="text" value={amount} size="5" />
                    </div>
                    <div className="col">
                        <span>for</span>
                        <input type="text" value={years} size="3" />
                        <span>Years</span>
                    </div>
                    <div className="col">
                        <span>Interest rate </span>
                        <input type="text" value={rate} size="3"/>
                        <span>%</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="range" value={amount} onChange={HandleAmount} min="50000" max="4000000" name="" id="" />
                    </div>
                    <div className="col">
                        <input type="range" value={years} onChange={HandleYears} min="1" max="5" name="" id="" />
                    </div>
                    <div className="col">
                        <input type="range" value={rate} onChange={HandleRate} min="10.5" max="21" step="0.1" name="" id="" />
                    </div>
                </div>
                <div className="row d-flex justify-content-around">
                    <div className="col">
                       <div className="d-flex ">
                            <span className="me-5">&#8377;50,000</span>
                            <span className="ms-5">&#8377;40,00,000</span>
                       </div>
                    </div>
                    <div className="col">
                       <div className="d-flex ">
                            <span className="me-5">1 year</span>
                            <span className="ms-5">5 years</span>
                       </div>
                    </div>
                    <div className="col">
                       <div className="d-flex ">
                            <span className="me-5">10.5%</span>
                            <span className="ms-5">21%</span>
                       </div>
                    </div>
                    <div className="d-flex justify-content-end ">
                        <button className="btn btn-primary" onClick={HandleCalculate}>Calculate</button>
                    </div>
                </div>
                <h2>Your monthly installment is   {Math.round(emi).toLocaleString('en-in',{ style : 'currency' ,currency : 'INR',})} for {years} years</h2>
            </div>
        </div>
    )
}