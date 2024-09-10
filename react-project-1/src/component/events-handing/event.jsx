

export function EventHandling(){
    function InsertClick(){
        alert("insert Click")
    }
    function InsertClick2(name,e){
        alert("Hello "+ name +" "+ e.clientX +" " + e.clientY)
    }
    function ParentClick(){
        alert("Parent CLick")
    }
    function ChildClick(e){
        alert("CHild click")
        e.stopPropagation()

    }
    return (
        <div className="container-fluid">
            <button onClick={InsertClick}>Insert</button>
            <button onClick={(e)=>{InsertClick2("sujal", e)}}>Insert</button>
           <form action="" onSubmit={(e)=>{ e.preventDefault(); alert("Successfully submitted !")}}>
                <h2>Login</h2>
                <input type="text" name="userName"/>            
                <button>Submit</button>
            </form> 

            <div className="bg-primary p-5 " onClick={ParentClick}>
                <h5>Parent</h5>
                <button onClick={(e)=>ChildClick(e)}>Child</button>
            </div>
        </div>
    )
}