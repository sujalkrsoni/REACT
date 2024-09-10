import './data-binding.css'
export function DataBinding2(){
    let obj = {
        "Name" : "Samsung Tv",
        "Price" : 349498,
        stock : true,
        city : "Delhi"
    }

    let topics = new Map();
    topics.set(3,"This is my 3rd class")
    topics.set("Name", "My name is sujal") 

    let products = [
        {name : "Samsung Tv", price : 5939},
        {name : "fridge", price : 599}
    ]
    return (
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Product Name</dt>
                <dd>{obj.Name}</dd>
                <dt>Price</dt>
                <dd>{obj.Price}</dd>
                <dt>Stock</dt>
                <dd>{(obj.stock)?"Available":"Out of stock"}</dd>
                <dt>City</dt>
                <dd>{obj.city}</dd>
            </dl>
            <h4>Reading All keys of object</h4>
            <ol>
                {
                    Object.keys(obj).map(key => <li>{key} {obj[key]} {  delete obj.key} key =  {obj.key}</li>)   // accesing key and value              
                }
            </ol>
            <ol>
                {
                    // ("cityy" in obj)? "available" : "Not available"
                    (obj.hasOwnProperty("cityf"))?"Available":"Not available"
                }
            </ol>
            <ol>
                {
                    Object.keys(obj).map(key => <li>{delete obj.key} key =  {obj.key}</li>) // deleting key and value 
                }
            </ol>
            
            <h1>3rd class of dataBinding </h1>
           {
             topics.get(3)
           }
           <br />
           {
            topics.get("Name")
           }
            <br /> size = 
           {
             topics.size // return all keys
           }
            <br /> ALl keys & values = 
           {
             topics.entries() // return all keys
           }

           <div className='container-fluid w-50 border mb-5'> 
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => 
                        <tr keys="{product.name}">
                            <td>{product.name}</td> 
                            <td>{product.price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
           </div>
        </div>
    )
}