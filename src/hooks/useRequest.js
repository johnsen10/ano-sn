import { GraphQLClient, gql } from "graphql-request";
import { useQuery } from "react-query";

const client = new GraphQLClient(process.env.REACT_APP_GRAPHQL_URL, { headers: {} })

export function useGetAllAutoPosts(){
    const allAutoPostQuery = gql`query Autos {
        autos {
          autoBrand
          description
          id
          milleage
          title
          transmission
          image {
            url
          }
        }
      }`
    //   const { allAutoPosts } = useQuery("allAutoPosts", async ()=>{
    //     return await client.request(allAutoPostQuery, {}).then((data) => console.log(data))
 
    //  });
    return useQuery("allAutoPosts",async ()=>{
        return await client.request(allAutoPostQuery);
        // return allAutoPosts ;
    })
}

export function useGetAutoPostById(id){
    
    const autoPostQuery = gql`query getAutoPostById($id : ID!){
        auto(where: {id: $id}) {
          autoBrand
          description
          id
          milleage
          title
          transmission
          updatedAt
          image {
            url
          }
        }
      }`
    return useQuery(["autoPostById",id], async ()=>{
        return await client.request(autoPostQuery, {id});
    })
}