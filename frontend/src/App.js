import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import LoginScreen from './screens/LoginScreen';
import ContactScreen from './screens/ContactScreen';
import ManageNewsScreen from './screens/ManageNewsScreen';
import NewsEditScreen from './screens/NewsEditScreen';

const App = () => {
  return (
    <Router> 
      <Header />
        <main className='pb-5'>
            <Route path='/' component={HomeScreen} exact />
            <Container>
            <Route path='/noticias/:id' component={NewsScreen} />
            <Route path='/admin' component={LoginScreen} />
            <Route path='/contacto' component={ContactScreen} />
            <Route path='/facebook' component={() => { 
                          window.location.href='https://www.facebook.com/AEBA-Asociaci%C3%B3n-de-Educadores-de-la-provincia-de-Buenos-Aires-100686775269741'; 
                          return null;  
            }} />
            <Route path='/instagram' component={() => { 
                          window.location.href='http://www.instagram.com/aeba_educadores'; 
                          return null;
            }}/>
            <Route path='/googleform' component={() => { 
                          window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSdc4dFtB0MnLnIA_0wEGriqDMjH4xljahHCtLXs24CFmK1sIA/viewform'; 
                          return null;
            }}/>
            <Route path='/gestionarnoticias' component={ManageNewsScreen} />
            <Route path='/gestionarnoticias/:id/editar' component={NewsEditScreen} />
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
