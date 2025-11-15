import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Loader } from "./components/Loader";
import { Layout } from "./sections/Layout";
import { Checkout } from "./sections/Checkout";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollToTop } from "./sections/ScrollToTop";
import { Cart } from "./paths/Cart";
import { Shop } from "./paths/Shop";
import { Home } from "./paths/Home";
import { Drops } from "./paths/Drops";
import { Community } from "./paths/Community";
import { AuthPage } from "./paths/AuthPage";

// Wrapper component for animated page transitions
function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-neutral-950"
    >
      <ScrollToTop />
      {children}
    </motion.div>
  );
}

// Routes wrapper to capture location changes for animations
function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/shop" element={<AnimatedPage><Shop /></AnimatedPage>} />
          <Route path="/drops" element={<AnimatedPage><Drops /></AnimatedPage>} />
          <Route path="/community" element={<AnimatedPage><Community /></AnimatedPage>} />
          <Route path="/cart" element={<AnimatedPage><Cart /></AnimatedPage>} />
          <Route path="/checkout" element={<AnimatedPage><Checkout /></AnimatedPage>} />
          <Route path="/auth" element={<AnimatedPage><AuthPage /></AnimatedPage>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <div className="font-sans bg-neutral-950 min-h-screen">
            <AppRoutes />
          </div>
        </Router>
      )}
    </>
  );
}
