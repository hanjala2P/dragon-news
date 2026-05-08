import Marquee from "react-fast-marquee";

const LatestNews = () => {
  // এখানে চেক করুন Marquee কি আসলে একটা অবজেক্ট?
  // যদি তাই হয়, তবে Marquee.default ব্যবহার করতে হতে পারে
  const MarqueeComponent = Marquee.default || Marquee;

  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest News</p>
      <MarqueeComponent className='flex gap-4' speed={40} pauseOnHover={true}>
        <p className="font-semibold">
          Breaking News: Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Ex, ta, voluptatum dolor maxime
          earum beatae ducimus expedita nostrum atque! !
        </p>
        <p className="font-semibold">
          Breaking News: Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Ex, ta, voluptatum dolor maxime
          earum beatae ducimus expedita nostrum atque! !
        </p>
        <p className="font-semibold">
          Breaking News: Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Ex, ta, voluptatum dolor maxime
          earum beatae ducimus expedita nostrum atque! !
        </p>
        <p className="font-semibold">
          Breaking News: Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Ex, ta, voluptatum dolor maxime
          earum beatae ducimus expedita nostrum atque! !
        </p>
      </MarqueeComponent>
    </div>
  );
};
export default LatestNews;
