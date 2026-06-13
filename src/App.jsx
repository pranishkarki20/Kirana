import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./pages/contact";
import Product from "./components/product";
import ProductPage from "./pages/product";
import Checkout from "./pages/checkout";
import Admin from "./pages/admin";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { CartProvider } from "./context/cartContext";
import Offer from "./components/offers";
import Testimony from "./components/testimony";
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="page-container">
          <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main className="content">
                  <Home />
                  <section id="Product">
                    <Product />
                  </section>
                  <Offer />
                  <Testimony/>
                </main>
                <Footer />
              </>
            }
          />  

          <Route
            path="/pages/product"
            element={
              <>
                <Navbar />
                <ProductPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/pages/contact"
            element={
              <>
              <Navbar/>
                <Contact />
                </>
            }
          />
          <Route
            path="/pages/checkout"
            element={
              <>
                <Navbar />
                <Checkout />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Navbar />
                <Checkout />
              </>
            }
          />
          
          
          <Route
            path="/pages/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pages/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          /> 
          <Route
            path="/pages/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <main className="content" style={{ padding: "24px" }}>
                  <h2>Page not found</h2>
                  <p>Use the navigation menu to return to the home page.</p>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
