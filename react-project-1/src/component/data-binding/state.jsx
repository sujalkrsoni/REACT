import { userState, useState } from 'react';
import './data-binding.css'

export function StateBinding(){
    const [products] = useState({Name : "MI tv",Price : 200})
    const [categories] = useState(["laptop","pc","mobile"])
    const [username, setUserName] = useState('sujal');


    const [product,setProducts] = useState({Name : '',Price : 0,city : '', stock : false })
    const [formData, setFormData] = useState({Name : '',Price : 0,city : '', stock : false })
    function HandleUserName(e){
        setUserName(e.target.value) 
    }

    function HandleNameChange(e){
        setProducts({
            Name : e.target.value,
            Price : product.Price,
            city : product.city,
            stock : product.stock
        })
    }
    function HandlePriceChange(e){
        setProducts({
            Price : e.target.value,
            Name : product.Name,
            city : product.city,
            stock : product.stock
        })
    }
    function HandleCityChange(e){
        setProducts({
            city : e.target.value,
            Name : product.Name,
            Price : product.Price,
            stock : product.stock
        })
    }
    function HandleStockChange(e){
        setProducts({
            stock : e.target.checked,
            Name : product.Name,
            Price : product.Price,
            city : product.city
        })
    }

    function SubmitClick(){
        setFormData(product)
    }
    return (
        <div className='container-fluid'>
           <p>Product Name :  {product.Name}</p>
           <p>Product Pricc : {product.Price}</p>
           <ol>
            {
                categories.map(item => <li key={item}>{item}</li>)
            }
           </ol>
            <h6>Two way databinding </h6>
            <input type="text" value={username} onChange={ HandleUserName } />
            <p>hello {username}</p>

            <h2>4th Class of Databinding </h2>
            <div className='container-fluid'>
                <div className='row mt-4'>
                    <div className='col-6 '>
                        <dl className='form-control w-50'>
                            <dt>Name </dt>
                            <dd><input type="text" className='form-control' onChange={HandleNameChange} /></dd>
                            <dt>Price </dt>
                            <dd><input type="text" className='form-control' onChange={HandlePriceChange}/></dd>
                            <dt>Shipped to </dt>
                            <dd>
                                <select name="" id="" className='form-select' onChange={HandleCityChange}>
                                    <option value="delhi">delhi</option>
                                    <option value="punjab">punjab</option>
                                </select>
                            </dd>
                            <dt>stock</dt>
                            <dd className='form-switch'>
                                <input type="checkbox"  className='form-check-input' onChange={HandleStockChange}/>
                            </dd>
                            <button className='btn btn-primary w-100 ' onClick={SubmitClick} >Submit</button>
                        </dl>
                    </div>
                    <div className='col-6'>
                        <h3>Product Details</h3>
                        <dl>
                            <dt>Name</dt>
                            <dd>{formData.Name}</dd>
                            <dt>Price</dt>
                            <dd>{formData.Price}</dd>
                            <dt>City</dt>
                            <dd>{formData.city}</dd>
                            <dt>Stock</dt>
                            <dd>{(formData.stock==true)?"Avaiable":"Out of stock"}</dd>
                        </dl>
                        {/* <dl>
                            <dt>Name</dt>
                            <dd>{product.Name}</dd>
                            <dt>Price</dt>
                            <dd>{product.Price}</dd>
                            <dt>City</dt>
                            <dd>{product.city}</dd>
                            <dt>Stock</dt>
                            <dd>{(product.stock==true)?"Avaiable":"Out of stock"}</dd>
                        </dl> */}
                    </div>
                </div>
                
            </div>
        </div>
    )
}
