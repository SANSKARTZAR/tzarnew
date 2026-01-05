"use client";
import { useState } from "react";
import services from "./services";
import "./Payment.css";

export default function PaymentPage() {
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [manualAmount, setManualAmount] = useState("");
  const [showAmountBox, setShowAmountBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [invoiceUrl, setInvoiceUrl] = useState("");

  const toggleService = (service) => {
    setSelected((prev) =>
      prev.find((s) => s.id === service.id)
        ? prev.filter((s) => s.id !== service.id)
        : [...prev, service]
    );
  };

  const startPayment = async () => {
    if (!name || !email) {
      alert("Please enter name and email");
      return;
    }

    const amount = Number(manualAmount);
    if (!amount || amount < 1) {
      alert("Please enter a valid amount (₹1 minimum)");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    setLoading(true);

    // 1️⃣ Create order
    const res = await fetch("/api/razorpay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        services: selected.map((s) => s.title),
      }),
    });

    const data = await res.json();

    // 2️⃣ Razorpay options
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: data.amount,
      currency: "INR",
      name: "Your Company",
      description: "Service Payment",
      order_id: data.orderId,

      handler: async function (response) {
        try {
          // 3️⃣ Verify payment + invoice + email
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,

              customerName: name,
              customerEmail: email,
              amount,
              services: selected.map((s) => s.title),
            }),
          });

          const result = await verifyRes.json();

          if (result.success) {
            setInvoiceUrl(result.invoiceUrl);
            alert("Payment successful! Invoice sent to email.");
          } else {
            alert("Payment verification failed");
          }
        } catch (err) {
          console.error(err);
          alert("Something went wrong after payment");
        } finally {
          setLoading(false);
        }
      },

      modal: {
        ondismiss: () => setLoading(false),
      },

      theme: { color: "#003366" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
<>
<section className="hero">
  <div className="hero-content">
    <span className="hero-badge">Premium Digital Solutions</span>

    <h1 className="hero-title">
      Transform Your <br />
      Business with <span>Expert Services</span>
    </h1>

    <p className="hero-desc">
      Select the services you need and we'll handle the rest.
      Mix and match to create your perfect solution tailored to your goals.
    </p>
  </div>

  <div className="hero-visual">
    {/* <img
      src="/hero-banner.png"
      alt="Digital Solutions Illustration"
    /> */}
  </div>
</section>
   
    <div className="payment-container">
      {/* LEFT */}
      <div>
        <h1>
          Choose Your <span>Services</span>
        </h1>
        <p>Select the services you need and proceed to payment.</p>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card ${
                selected.find((s) => s.id === service.id) ? "active" : ""
              }`}
              onClick={() => toggleService(service)}
            >
              <h3>{service.title}</h3>
              <ul>
                {service.points.map((p, i) => (
                  <li key={i}>✔ {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="right">
        <h3>Selected Services</h3>

        {selected.length === 0 && <p>No service selected</p>}

        {selected.map((s) => (
          <div key={s.id} className="selected-item">
            {s.title}
          </div>
        ))}

        {/* NAME & EMAIL */}
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {!showAmountBox && (
          <button
            onClick={() => {
              if (!name || !email) {
                alert("Please enter name and email");
                return;
              }
              if (selected.length === 0) {
                alert("Select at least one service");
                return;
              }
              setShowAmountBox(true);
            }}
          >
            Proceed to Payment
          </button>
        )}

        {showAmountBox && (
          <div className="amount-box">
            <p>Enter amount to pay (₹)</p>
            <input
              type="number"
              min="1"
              placeholder="Enter amount"
              value={manualAmount}
              onChange={(e) => setManualAmount(e.target.value)}
            />

            <button onClick={startPayment} disabled={loading}>
              {loading ? "Processing..." : `Pay ₹${manualAmount || 0}`}
            </button>
          </div>
        )}

        {/* DOWNLOAD INVOICE */}
        {invoiceUrl && (
          <a
            href={invoiceUrl}
            target="_blank"
            download
            className="download-btn"
          >
            Download Invoice (PDF)
          </a>
        )}
      </div>
    </div>
     </>
  );
}
