import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Timeline from "./pages/Timeline";
import NotFound from "./pages/NotFound";
import HeadDump from "./pages/writeups/HeadDump";
import TextTypography from "./pages/blogs/TextTypography";
import OTWBandit from "./pages/blogs/OTWBandit";
import VulnHubBoot2Root from "./pages/blogs/VulnHubBoot2Root";
import ExampleWriteup from "./pages/writeups/ExampleWriteup";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/timeline" element={<Timeline />} />
            {/* Writeups */}
            <Route path="/writeups" element={<div className="text-center py-20"><h1 className="text-2xl font-bold text-muted-foreground">CTF Write-ups Coming Soon</h1></div>} />
            <Route path="/writeups/head-dump" element={<HeadDump />} />
            <Route path="/writeups/example" element={<ExampleWriteup />} />
            {/* Blogs */}
            <Route path="/blogs" element={<div className="text-center py-20"><h1 className="text-2xl font-bold text-muted-foreground">Blog Posts Coming Soon</h1></div>} />
            <Route path="/blogs/text-typography" element={<TextTypography />} />
            <Route path="/blogs/otw-bandit-0-10" element={<OTWBandit />} />
            <Route path="/blogs/vulnhub-boot2root" element={<VulnHubBoot2Root />} />
            <Route path="/tags" element={<div className="text-center py-20"><h1 className="text-2xl font-bold text-muted-foreground">Tags Page Coming Soon</h1></div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
