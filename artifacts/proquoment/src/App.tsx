import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Platform from "@/pages/Platform";
import Catalog from "@/pages/Catalog";
import UseCases from "@/pages/UseCases";
import Contact from "@/pages/Contact";
import Waitlist from "@/pages/Waitlist";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Platform} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/use-cases" component={UseCases} />
        <Route path="/contact" component={Contact} />
        <Route path="/waitlist" component={Waitlist} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
