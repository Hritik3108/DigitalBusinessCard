import MainContent from "./mainContent";
import Header from "./header";
import Footer from "./footer";

export default function Card() {
  return (
    <div className="card">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
