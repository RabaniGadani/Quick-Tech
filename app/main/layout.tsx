import Footer from "../conponents/footer";
import { Header } from "../conponents/header";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      
              <Header />
        
        {children}
        <Footer />

    </section>
  );
}