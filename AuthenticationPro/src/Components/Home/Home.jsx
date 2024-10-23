import { useContext } from "react";
import { AppContext } from "../../ContextProvider/ContextProvider";





const Home = () => {

    const user = useContext(AppContext)


    return (
        <div>
            
            <p className="text-red-700 text-6xl">AuthenticationPro:{user.name} </p>
            
        </div>
    );
};

export default Home;
