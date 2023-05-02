import Header from './components/servers/header'
import ApiNavbar from './components/cliants/ApiNavbar';
import ProductsDisplayAdmin from './componentsAdmin/ProductsDisplayAdmin';
// import { getAllProductsData } from '@/utils/functions/getAllProducts';
// import ProductsCardAdmin from './componentsAdmin/ProductsCardAdmin';

export const metadata = {
  title: 'Home Page',
  description: 'Generated by create next app',
}



export const revalidate = 0.3;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export default async function Home() {

  // const productsJSONObjectFS = await getAllProductsData();
  // const productsArrayFS = productsJSONObjectFS.products;

  // console.log(` --------------------------- productsArrayFS --------------------------- `);
  // console.log(productsArrayFS);
  // console.log(` --------------------------- productsArrayFS --------------------------- `);

  return (
    <>

      <div className="flex flex-col gap-y-10 pb-20">

        <div className="w-full bg-antiquewhite rounded-b-full px-10 lg:px-20 py-2">
          <Header></Header>
        </div>
        <main className="px-5">
          

          <div className="flex flex-col gap-y-5 -mt-5">
            <ProductsDisplayAdmin isAdmin = {false}></ProductsDisplayAdmin>
          </div>

        </main>
      </div>
    </>
  )
}
