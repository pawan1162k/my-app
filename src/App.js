//import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet';
import { Component } from 'react';
// import Hero from './components/Hero';
// import PortalDemo from './components/PortalDemo';
// import Table from './components/Table';
//import Welcome from './components/Welcome';
//import Message from './components/message';
//import Counter from './components/Counter';
//import Hello from './components/Hello';
//import NavigationBar from './components/Navigate';
//import FunctionClick from './components/FunctionClick';
//import ClassClick from './components/ClassClick';
//import EventBind from './components/EventBind';
//import ParentComponent from './components/ParentComponent';
// import MouseOver from './components/MouseOver';
//import UserGreeting from './components/UserGreeting';
//import NameList from './components/NameList';
//import StyleSheet from './components/StyleSheet';
//import Inline from './components/Inline';
//import Forms from './components/Forms';
// import LifeCycleA from './components/LifeCycleA';
// import Fragment from './components/Fragment';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import User from './components/User';
// import Counter1 from './components/Counter1';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import ComponentC from './components/ComponentC';
// import { UserProvider } from './components/userContext';
//Class component 

class App extends Component{
  render(){
    return (
      <div className='App'>
        
        
        {/* <UserProvider value='Pawan'>
          <ComponentC></ComponentC>
        </UserProvider> */}
        {/* <Counter1 render={(count,incrementCount)=> <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo> }></Counter1>
        <Counter1 render={(count,incrementCount)=> <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>  }></Counter1> */}
        {/* <ClickCounterTwo ></ClickCounterTwo> 
        <HoverCounterTwo></HoverCounterTwo> */}
        {/* <User render={(isLoggedIn)=>isLoggedIn?'Pawan':'Guest'}></User> */}
        {/* <ClickCounter name='Pawan'></ClickCounter> */}
        {/* <HoverCounter></HoverCounter> */}
        {/* <ErrorBoundary>
          <Hero heroName='Batman'></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Superman'></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Joker'></Hero>
        </ErrorBoundary> */}
        {/* <PortalDemo></PortalDemo> */}
        {/* <RefsDemo></RefsDemo> */}

        {/* <ParentComp></ParentComp> */}
        {/* <PureComp></PureComp> */}
        {/* <Table></Table> */}
        {/* <Fragment></Fragment> */}
        {/* <LifeCycleA></LifeCycleA> */}
        {/* <Forms></Forms> */}
        {/* <StyleSheet primary={true}></StyleSheet> */}
        {/* <Inline></Inline> */}
        {/* <NameList></NameList> */}
        {/* <UserGreeting></UserGreeting> */}
        {/* <MouseOver></MouseOver> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <EventBind></EventBind> */}
        {/* <NavigationBar></NavigationBar>
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}
        {/* <Greet name = 'Bruce' heroName='Batman'>
          <p>This is children props</p>
        </Greet>
        <Greet name = 'Clark' heroName='Superman'>
          <button>Action</button>
        </Greet>
        <Greet name = 'Diana' heroName='Wonder Woman'></Greet>
        <Welcome name = 'Bruce' heroName='Batman'></Welcome>
        <Welcome name = 'Clark' heroName='Superman'></Welcome>
        <Welcome name = 'Diana' heroName='Wonder Woman'></Welcome> */}
        {/* <Message></Message>
        <Counter></Counter> */}
        {/* <Hello></Hello> */}
      </div>
    );
  }
}


//Function component 
// function App() {
//   return (
//     <div className="App">
//           <Greet></Greet>
//     </div>
//   );
// }

export default App;


//FUnction vs class component
//Use func compoenent as much as possible
//Absence of this keyword
//Solution without using state
//Mainly responsible for the UI
//Stateless/Dumb/Presentational

//Class 
//More feature rich
//Maintain their own private data - state
//Complex UI logic 
//Provide lifecycle hooks
//Stateful/Smart/Container


//Jsx -> JavaScript XML - Extension to the javascript language syntax
//Write XML-like code for elements and componenets
//JSX tags have a tag name , attributes, children
//JSX is not a necessity to write React Applications
//JSX makes your react code simpler and elegant 
//JSX ultimately transpiles to pure JavaScript which is understood by the browers.



//Props vs state

//Props get passed to the component
//Function parameters
//Props are immutable 
//props - Functional components
//this.props - class Components

//State
//state is managed within the component
//varables declared in the function body
//State can be changed
//useState Hook - functional component
//this.state - Class component


//setState 
//Always make use of setState and never modify the state 
//directly Code has to be executed after the 

//state has been update? place that code in the call back
//function which is the second argument to the setState method.

//When yuo have to update state based on the previous state 
//value, pass in a function as an argument instead of the regular object.


//Context
//It provides a way to pass data through the component tree without having 
//to pass props down manually at every level. 


//React Hooks

//What are Hook?
//-> Hooks are new feature in react which allow you to use react features without havinh t o write a class

//Ex: state of component
//Hooks dont work inside class

//Why hooks?
//Reason set 1
//  1.understand how this keyword works in javascript
//  2.Remember to bind event handlers in class component
//  3.Class don't minify very well and make hot reloading very unreliable

//Reason set 2
//  1. There is no particular way to reuse stateful component logic.
//  2. HOC and render props pattern do address the problem
//  3. Makes code harder to follow
//  4. There is need to share stateful logic in a better way

//Reason set 3
//  1. Create component for complex scenarios such as data fetching and subscribing to events
//  2. Related code is not organized in one place.

