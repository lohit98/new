import React,{  } from "react";
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import "./file.css";
import html from './Contact.html';


class App12 extends React.Component {
        render() {
          return (
          <Router>
              <div>
                <h2>
                <nav>
                
                  <Link to={'/'} > Home &nbsp; </Link>

                  <Link to={'/contact'} > Contact&nbsp; </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to={'/about'} > About &nbsp;</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to={'/signin'} > Signin &nbsp;</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    
    
               
                </nav>
                </h2>
                <hr />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={About} />
                    <Route path='/signin' component={Signin} />
                </Switch>
              </div>
            </Router>
          );
        }
      }
      

class Home extends React.Component {
        render() {
          return (
              <div>
                <h2>Home</h2>
              </div>
          );
        }
      }
    class Signin extends React.Component {
            render() {
              return (
            <form>
               enter  Username <input type="text"/>
                       <br/>
               
               enter  Password <input type="text"/>
                           
                            <button >signin</button>
                            
                            <button class='cancelbtn'>cancel</button>
                            </form>

              );
            }
          }
    

    
    class About extends React.Component {
            render() {
              return (
                  <div>
                    <h2>About</h2>
                  </div>
              );
            }
          }
        

        class Contact extends React.Component {
                render() {
                  return (
                      <div>
                      <div dangerouslySetInnerHTML={{__html:html}}></div>
                      </div>
                  );
                }
              }
            
            



export default App12;



