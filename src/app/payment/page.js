"use client";

import { useEffect, useState } from "react";
import {
  Code2,
  PenTool,
  BarChart3,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import services from "../data/services";

const ICONS = {
  web: Code2,
  uiux: PenTool,
  marketing: TrendingUp,
  analytics: BarChart3,
};

export default function PaymentPage() {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const toggleService = (service) => {
    setSelected((prev) =>
      prev.find((s) => s.id === service.id)
        ? prev.filter((s) => s.id !== service.id)
        : [...prev, service]
    );
  };

  const subtotal = selected.reduce((s, i) => s + i.price, 0);
  const gst = subtotal * 0.18;
  const discount = subtotal > 50000 ? subtotal * 0.1 : 0;
  const total = subtotal + gst - discount;

  const handlePayment = async () => {
    if (!total) return alert("Select services");

    const orderRes = await fetch("/api/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total }),
    });

    const order = await orderRes.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      order_id: order.id,
      amount: order.amount,
      currency: "INR",
      name: "Your Company",
      handler: async (response) => {
        await fetch("/api/payment/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            services: selected,
            subtotal,
            gst,
            discount,
            total,
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            status: "success",
          }),
        });

        alert("Payment Successful ✅");
      },
      theme: { color: "#003366" },
    };

    new window.Razorpay(options).open();
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-14">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Choose Your <span className="text-[#003366]">Services</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {services.map((s) => {
              const Icon = ICONS[s.id];
              const active = selected.find((i) => i.id === s.id);

              return (
                <div
                  key={s.id}
                  onClick={() => toggleService(s)}
                  className={`bg-[#0a0a0a] border rounded-xl p-6 cursor-pointer
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-[0_0_25px_#003366]
                  ${
                    active
                      ? "border-[#003366] shadow-[0_0_30px_#003366]"
                      : "border-[#111]"
                  }`}
                >
                  <div className="flex justify-between mb-4">
                    <Icon className="text-[#003366]" size={28} />
                    {active && <CheckCircle className="text-[#003366]" />}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{s.desc}</p>

                  <span className="font-bold">
                    ₹{s.price.toLocaleString()}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="bg-[#0a0a0a] border border-[#111] rounded-xl p-6 sticky top-10">
            <h3 className="font-semibold mb-4">Summary</h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (18%)</span>
                <span>₹{gst.toLocaleString()}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-[#003366]">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString()}</span>
                </div>
              )}
            </div>

            <div className="border-t border-[#111] mt-4 pt-4 flex justify-between font-bold">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <button
              onClick={handlePayment}
              className="w-full mt-6 bg-[#003366] py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
