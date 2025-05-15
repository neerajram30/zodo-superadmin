import { useGetBanner } from "../../hooks/appmanage/useGetBanner";
import BannerCard from "./BannerCard";

function BannerListing() {
  const { data, isLoading } = useGetBanner();
    console.log(isLoading);
    console.log("Banner",data);
    
  return (
    <div className="row mt-2">
      {data?.map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
          <BannerCard data={item}/>
        </div>
      ))}
    </div>
  );
}

export default BannerListing;
