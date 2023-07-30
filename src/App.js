import Layout from "shared/components/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "shared/components/Container/Container";
const App = () => {
  return (
    <Container>
    <Layout />
    <ToastContainer />
    </Container>
  )
}

export default App