import { ShoppingCart, Truck, ShieldCheck, Clock } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="py-16 bg-[#FFF7ED] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Shop at Minimartie?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Feature 1 */}
          <div className="text-center">
            <ShoppingCart className="mx-auto mb-4" size={40} color="#A16207" />
            <h3 className="text-lg font-semibold mb-2">Wide Product Range</h3>
            <p className="text-gray-600 text-sm">
              Daily essentials, snacks, drinks, and household items all in one place.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <Truck className="mx-auto mb-4" size={40} color="#A16207" />
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              Get your groceries delivered quickly and reliably.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <ShieldCheck className="mx-auto mb-4" size={40} color="#A16207" />
            <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600 text-sm">
              We ensure fresh and high-quality items for your family.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center">
            <Clock className="mx-auto mb-4" size={40} color="#A16207" />
            <h3 className="text-lg font-semibold mb-2">Open Daily</h3>
            <p className="text-gray-600 text-sm">
              Shop anytime with our extended store hours.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;