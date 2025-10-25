import { NavLink } from "react-router";
import Header from "../components/Header";
import { Post } from "../components/Posts";

export function Home() {
    return(
        <>    
            <Header />
            <Post />
            <NavLink to="/Posts">Iris para Postas</NavLink>    
            <br/>  
            <a href="/Posts">Link para Posts</a>;
        </>
    )
}
