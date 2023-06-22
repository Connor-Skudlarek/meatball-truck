import "../styles/ProductWrapper.css";
import ProductCard from "./ProductCard";
function ProductWrapper() {
  return (
    <div className="ProductWrapper">
          <ProductCard
            title="Sourdough Garlic Parmesan Bites"
            description="Sourdough Bread Bites Toasted In Garlic Butter And Topped With Parmesan Cheese. Want To Take Your Parm Bites To The Next Level? Add A Cup Of Bruschetta To Your Order And COVER Those Bites!"
            price="$5.00"
            foodImage="https://www.gotballstruck.com/uploads/1/3/1/6/131609233/s318017020432296352_p32_i2_w2880.jpeg?width=1280&dpr=1"
            foodImageAlt="Garlic bites in a bowl with sauce cup."
          />
          <ProductCard
            title="Cheesy Garlic Bread"
            description="Fresh Garlic Bread smothered in Mozzarella Cheese. What more could you ask for?"
            price="$7.00"
            foodImage="https://www.gotballstruck.com/uploads/1/3/1/6/131609233/s318017020432296352_p35_i2_w2880.jpeg?width=1280&dpr=1"
            foodImageAlt="Cheesy garlic bread with marinara sauce on a plate."
          />
          <ProductCard
            title="Sourdough Dipping Bites"
            description="Soft, Fresh Sourdough Bread Bites With Aged Balsamic Vinegar & Fine Italian Olive Oil For Dipping! A Favorite Starter By All"
            price="$5.00"
            foodImage="https://www.gotballstruck.com/uploads/1/3/1/6/131609233/s318017020432296352_p63_i2_w2880.jpeg?width=1280&dpr=1"
            foodImageAlt="Bread pieces with oil and vinegar sauce cups in the center, held in a bowl."
          />
          <ProductCard
            title="Side Cesar Salad"
            description="Asiago Cheese, Crispy Lettuce & Homemade Croutons Tossed In Yummy Cesar Dressing. The Perfect Compliment To Any Dish You Choose"
            price="$6.00"
            foodImage="https://www.gotballstruck.com/uploads/1/3/1/6/131609233/s318017020432296352_p72_i1_w4032.jpeg?width=1280&dpr=1"
            foodImageAlt="Packed salad in a to go container."
          />
          <ProductCard
            title="Bruschetta"
            description="Classic Bruschetta with Tomatoes, Onion, Garlic and Fresh Sweet Basil on Toasted Garlic Bread, drizzled with Balsamic Glaze"
            price="$7.00"
            foodImage="https://www.gotballstruck.com/uploads/1/3/1/6/131609233/s318017020432296352_p78_i4_w2880.jpeg?width=1280&dpr=1"
            foodImageAlt="Half loaf bruschetta bread, topped with veggies, and drizzled with balsamic glaze."
          />
    </div>
  );
}

export default ProductWrapper;
