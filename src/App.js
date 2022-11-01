
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form  from './components/form';
import Box from './components/box';
function App() {
  return (
    <>
   <Header/>
   <main style={{margin:"50px"}}> 
   <Form /> 
   {/* <Box/> */}
   </main>
   <Footer/>
   </>
  );
}

export default App;
