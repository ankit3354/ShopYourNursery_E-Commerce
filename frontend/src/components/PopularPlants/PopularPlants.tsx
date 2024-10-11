import { products } from "../../constants/products";
import FeaturedRow from "../FeaturedRow/FeaturedRow";
export default function PopularPlants() {
  const title = "Most Popular Plants";
  return <FeaturedRow title={title} products={products} />;
}