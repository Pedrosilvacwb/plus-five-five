import Container from "@/components/Container";
import React from "react";

const Shipping = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="flex sm:flex-row flex-col items-start justify-between">
          <div className="max-w-[450px] sm:mb-0 mb-8">
            <h2 className="text-2xl font-semibold text-tree mb-6">Shipping</h2>
            <p className="text-md leading-8">
              We offer free standard shipping on all orders within Australia.
              Orders are typically processed and shipped within 2 business days.
              Delivery times may vary depending on your location and shipping
              method selected. We also offer expedited shipping options for an
              additional fee.
            </p>
          </div>
          <div className="max-w-[450px]">
            <h2 className="text-2xl font-semibold text-tree mb-4">Returns</h2>
            <p className="text-md leading-8">
              We want you to be completely satisfied with your +55 products. If
              for any reason you are not happy with your purchase, please
              contact us within 30 days of receiving your order to initiate a
              return or exchange. All returned items must be in their original
              packaging and unused. Refunds will be issued to the original
              payment method, minus any shipping and handling fees. Please note
              that we are unable to accept returns or exchanges for items
              purchased from third-party retailers.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shipping;
