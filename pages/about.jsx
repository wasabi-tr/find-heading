import SideMenu from "@/components/SideMenu";
import { getAllCategories } from "@/lib/api";

function about(props) {
    console.log(props.allCats)
    return (
        <div>
        </div>
    );
}
export async function getStaticProps(){
    const allCats = await getAllCategories();
    // console.log(allCats)
    return {
      props: {
        allCats: allCats,
      }
    }
  }

export default about;