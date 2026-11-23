import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Background from "./components/Background";

function App() {
    return(
        <div className="relative isolate min-h-screen bg-white">
            <Background />
            <div>
        <NavBar />
        <main>
           <section id = "home">
             <Hero />
           </section>
            <About />
        </main>
        
        </div>
        </div>
    );
}

export default App;