import PageTitle from "../components/PageTitle";
import InfoTabs from "../components/productDetails/InfoTabs";
import ProductGallery from "../components/productDetails/ProductGallery";

const ProductDetails = () => {
  return (
    <main className="main">
      <PageTitle pageTitle={"Product Details"} />
      <section id="product-details" className="product-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <ProductGallery />
          <InfoTabs />
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
