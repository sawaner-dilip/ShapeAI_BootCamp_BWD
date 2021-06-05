import "./styles.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Notes from "./Components/Notes";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Notes />
      <Notes />
      <Notes />
      <Footer />
    </div>
  );
}
