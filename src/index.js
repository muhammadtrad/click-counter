import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class ClickCounter extends React.Component {
      constructor(props){
        super(props)
        this.state = { count: 0 };
      }

      click(event){
        event.preventDefault();
        this.setState({ count: this.state.count +1 });
      }

      reset(event)

      render() {
        return (
          <div>
            <button onClick={this.click.bind(this)}>CLICK ME!!!</button>
            <span>{this.state.count}</span>
            <button onClick={this.reset.bind(this)}>Reset!</button>
          </div>
        );
        }
      };

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
