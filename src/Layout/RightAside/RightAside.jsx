import FindUs from "../../Components/FindUs";
import QZone from "../../Components/QZone";
import SocialLogin from "./SocialLogin";


const RightAside = () => {
    return (
        <div className="space-y-8">
          <SocialLogin></SocialLogin>
          <FindUs></FindUs>
          <QZone></QZone>
        </div>
    );
};

export default RightAside;