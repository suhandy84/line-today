// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Showbiz from './pages/showbiz'
import Covid19 from './pages/covid-19'
import News from './pages/news'
import Life from './pages/life'
// import Regional from './pages/regional';
import Sports from './pages/sports';

// var express = require('express')
// var cors = require('cors')
// var app = express()

// app.use(cors())

// var corsMiddleware = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'localhost'); //replace localhost with actual host
//   res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

//   next();
// }

// app.use(corsMiddleware);

function App() {
  return (
    <div>
      <div className="col-sm-9 col-md-7 col-lg-8 mx-auto mt-3 pt-5">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/TOP' exact component={Home} />
          <Route path='/Showbiz' exact component={Showbiz} />
          <Route path='/News' exact component={News} />
          <Route path='/Life' exact component={Life} />
          {/* <Route path='/Regional' exact component={Regional} /> */}
          <Route path='/Corona di RI' exact component={Covid19} />
          <Route path='/Sports' exact component={Sports} />
          {/* <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/manageadmin' exact component={ManageAdmin} />
        <Route path='/manageorder' exact component={ManageOrder} />
        <Route path='/productdetail/:idprod' exact component={ProductDetail} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/search' exact component={Search} />
        <Route path='/filter' exact component={filter} />
        <Route path='/usersetting' exact component={UserSetting} />
        <Route path='/statusorder' exact component={StatusOrder} />
        <Route path='/*' component={NotFound} /> */}
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
