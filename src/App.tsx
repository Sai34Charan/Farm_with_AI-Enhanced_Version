import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ChatBot from "./components/common/ChatBot";

const queryClient = new QueryClient();

// Component to handle layout based on route
const AppLayout = () => {
  const location = useLocation();
  const isLoggedIn = location.pathname === '/dashboard';
  const hideNavAndFooter = ['/', '/login', '/signup'].includes(location.pathname);
  
  // Mock user profile (in real app, this would come from auth context)
  const userProfile = isLoggedIn ? {
    name: "John Farmer",
    avatar: undefined // Would be filled from Google auth or profile upload
  } : undefined;

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavAndFooter && (
        <Navbar isLoggedIn={isLoggedIn} userProfile={userProfile} />
      )}
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!hideNavAndFooter && (
        <Footer isLoggedIn={isLoggedIn} />
      )}
      
      {/* ChatBot - show only on dashboard */}
      {isLoggedIn && <ChatBot />}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
