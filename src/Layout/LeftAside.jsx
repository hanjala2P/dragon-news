
import Categories from "../Components/Categories";
import { Suspense } from "react";

const LeftAside = () => {

    return (
        <div>
           <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            <Categories></Categories>
           </Suspense>
        </div>
    );
};

export default LeftAside;