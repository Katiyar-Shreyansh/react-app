console.log("Hello world")
const root=document.getElementById("root");
// const h1Element=
// h1Element is virtualdom



// function component
function HelloWorld(){
    return React.createElement("h1",
    {className:"heading",
    id:"heading"
    },
        "Hello React");
}
//  babel jsx--->React.createElement
function H1(){
    return  <h1>Hello <span className="highlight">World</span></h1>
}
function App(){
    return(
        <div>
        <h1>App</h1>
        <Navbar />
        <Images />

    </div>
    )
}

function Navbar(){
    return <h2>Navbar</h2>
}

function Images(){
    return <h2>Images</h2>
}

ReactDOM.createRoot(root).render(App());
// console.log(h1Element);

