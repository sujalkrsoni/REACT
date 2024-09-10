import './data-binding.css'


export function DataBinding(){
    var name = "sujal";
    let price = 500847;
    let email = "sujalsoni740@gmail.com"
    let stock = false;
    let ProductName = "Samsung Tv"
    let ProductPrice;
    let Discount;
    // let Discount = prompt("Enter Discount");
    let arr = ["apple","mango","banana","orange"];
    let sales = [200,352,23,233,552,23523,233,35533]
    let menu = ["Home","About","Contact","blog"]
    

    return  (
        <div>
            <h2>Data Binding .... </h2> 
            <p>hello {name.toUpperCase()} !</p>
            <p>{price.toLocaleString('en-in',{style :'currency' , currency : 'INR'})}</p>
            <p>{price.toLocaleString('en-US',{style :'currency' , currency : 'USD'})}</p>
            
            <p>Your Email id : {email.substring(0,email.indexOf('@'))}</p>
            <p>Domain : <span className="text-primary"> {email.slice(email.indexOf('@')+1)}</span> </p>
            <p>{(email.endsWith("gmail.com")? "You have Google Account": "you have microsoft Account ")}</p>
            <p>{stock}</p> /* here boolean or condition value can't be written , we can only use ternary operator */
            <p>{(stock==true)?"true":"false"}</p>

            <h1>2nd class of DataBinding</h1>
            
            
            <dl>
                <dt>Name</dt>
                <dd>{ProductName}</dd>
                {
                    (ProductPrice)? <div><dt>Price</dt><dd>{ProductPrice}</dd></div> : " price is not defined  "
                }
                {
                    // (Discount==null)? "" : <div><dt>Discount</dt> <dd>{Discount}</dd></div> 
                }
            </dl>

            <h2>Non primitive Type </h2>
            <div>
                <ol>
                    {
                        arr.map( item =>
                            <li key={item}><input type="radio" name="fruit"></input>{item} <input type="checkbox" name="fruit"></input></li>
                        )
                    }
                </ol>
                <select className="m-4">
                    {
                        arr.map(item => <option><input type="checkbox" name="fruit"></input>{item.toUpperCase()}</option>)
                    }
                </select>
                <ol className='scrollable'>
                    {
                        arr.map( item =>
                            <li className='form-switch' key={item}><input className='form-check-input' type="checkbox" name="fruit"></input>{item}</li>
                        )
                    }
                </ol>
                <h6>Only sales which are greater than 500</h6>
                <ol>
                    {
                        sales.filter(items => items>500).map(item => <li key={item}>{item}</li>)
                    }
                </ol>

                <div className='contianer-fluid mb-5'>
                    <nav className='bg-dark navbar navbar-expand-lg pe-5'>
                        <div className='container-fluid'>
                            <h2 className='navbar-brand text-white'>Amazon.</h2>
                            <button className='navbar-toggler text-white'><span className='navbar-toggler-icon'></span></button>
                            <ul className='navbar-nav text-white'>
                               { menu.map(item => <li className='nav-item ms-4' key={item} >{item}</li>)}
                            </ul>
                        </div>

                    </nav>

                </div>
            </div>
        </div>
    )
}