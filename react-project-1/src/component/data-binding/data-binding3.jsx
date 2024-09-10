
export function DataBinding3(){
    let date = new Date()

    return (
        <div>
            <h1>Date Binding  </h1>
            <p> Date = {date.toLocaleDateString()}</p>
        </div>
    )
} 