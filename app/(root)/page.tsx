import ProductList from "@/components/shared/product/product-list"
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts(); 
  const arrangedProducts = latestProducts.map(i => (
    {...i,
      rating: Number(i.rating)
    }
   ))

  return (
    <>
      <ProductList data={arrangedProducts} title='Newest Arrivals' limit={4} />
    </>
  )
}

export default Homepage