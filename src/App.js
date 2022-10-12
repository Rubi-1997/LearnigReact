import React , {Component, Fragment, PureComponent} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Message from './component/Message';
import Counter from './component/Counter'
import FunctionClicked from './component/FunctionClicked'
import ClassClicked from './component/ClassClicked '
import BindingEvent from './component/BindingEvent'
import ParentClass from './component/ParentClass';
import Conditional from './component/Conditional';
import ListRender from './component/ListRender';
import Stylesheet from './component/Stylesheet'
import ExternalCss from './component/ExternalCss';
import Stylesheet1 from './component/Stylesheet1';
import Stylesheet2 from './component/Stylesheet2';
import Form from './component/Form';
import Mounting from './component/Mounting';
import Updating from './component/Updating';
import Textstyle from './component/Textstyle';
import ExternalStyle from './component/ExternalStyle';
import ParentS from './component/ParentS';
import Hero from './component/Hero';
import ErrorBoundery from './component/ErrorBoundery';
import FragmentS from './component/FragmentS';
import Table from './component/Table';
import Pure from './component/Pure';
import RefReference from './component/RefReference';
import ParentRef from './component/ParentRef';
import boot from './component/boot';
import ReactAdmin from './component/reactadmin'




class App extends Component {
  render(){
  return (
    
          <div className="App">
            <ReactAdmin/>
            {/* <h1 className='text-bg-secondary'>hello</h1>
            <p>
              
            </p> */}
            {/* <h1 className=''>Hello World</h1> */}
            {/* <Pure/> */}
            {/* <ParentRef/> */}
            {/* <RefReference/> */}
            {/* <Table/> */}
            {/* <ErrorBoundery>
            <Hero heroname="Batman"/>
            </ErrorBoundery>
            <ErrorBoundery> 
            <Hero heroname="Superman"/>
            </ErrorBoundery>
            <ErrorBoundery>
            <Hero heroname="joker"/>
            </ErrorBoundery> */}
            
            {/* <Form/> */}
            {/* <Textstyle/>
            <ExternalStyle/> */}
            {/* <ParentS/> */}
            {/* <MounGRting/> */}
            {/* <Updating  text="Congratualtion"/> */}
            {/* <Stylesheet1/>
            <Stylesheet2/> */}
            {/* <ExternalCss check={true}/> */}
            {/* <Stylesheet/> */}
          {/* <Stylesheet primary={true}/> */}
             {/* <ListRender /> */}
            {/* <Conditional/> */}
            {/* <ParentClass/> */}
            {/* <BindingEvent /> */}
            {/* <Message/> */}
            {/* <FunctionClicked/>
            <ClassClicked /> */}
            {/* <Welcome name="Rekha"  heroname="Batman"/>
            <Welcome name="Ritu"  heroname="Batman"/>
            <Welcome name="Pawan"  heroname="Batman"/> */}
            {/* <Counter /> */}
            {/* <Message>
              <button>subscribe</button>
            </Message> */}
          {/* // <Greet  name="Rekha" heroname="Batman">
          //   <p>this is a children</p>
          // </Greet>
          // <Greet  name="Pawan" heroname="Batman">
          // <p>this is a children</p>
          //   </Greet>
          // <Greet name="Jeeva"  heroname="Batman">first
          //   <button>click me</button>
          //   </Greet>*}
           <Welcome  name="Rekha"  heroname="Batman"/>
           <Welcome  name="Pawan"  heroname="Batman"/>
           <Welcome  name="Jeeva"  heroname="Batman"/> 
          */}
        </div>
  )
}
}
export default App;
