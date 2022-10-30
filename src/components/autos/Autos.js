import AutoItem from "./AutoItem";
import AutoSkeleton from "./AutoSkeleton";
import { useGetAllAutoPosts } from "../../hooks/useRequest";

export default function Autos(){
    const { isLoading, error, data, refetch } = useGetAllAutoPosts();

    if(isLoading){return <div>Loading...</div>}
    if(error){return<div>Something went wrong...</div>}
    return (
        <section className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 px-10">

            {
                data.autos.map((item)=>(isLoading ? <AutoSkeleton key={item.id}/> : <AutoItem key={item.id} {...item}/>)) 
            }
            </div>
        </section>
    )
}