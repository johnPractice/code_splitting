import React from 'react';
import './App.css';
import Page1 from "./components/Page1";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'page1',
            component: null,
        };
    }

    onRouteChange = (route) => {
        //no code splitting
        // this.setState({...this.state, route: route});
        //no code splitting

        //    whit code splitting
        if (route === 'page1') {
            this.setState({...this.state, route: route});
        } else if (route === 'page2') {
            import('./components/Page2').then((Page2) => {
                this.setState({...this.state, component: Page2.default, route})
            })
        } else if (route === 'page3') {
            import('./components/Page3').then((Page3) => {
                this.setState({...this.state, component: Page3.default, route})
            })
        }
    };

    render() {
        //no code splitting
        // if (this.state.route === 'page1') {
        //     return (
        //         <Page1 onRouteChange={this.onRouteChange}/>
        //     );
        // } else if (this.state.route === 'page2') {
        //     return (
        //         <Page2 onRouteChange={this.onRouteChange}/>
        //     );
        // } else if (this.state.route === 'page3') {
        //     return (
        //         <Page3 onRouteChange={this.onRouteChange}/>
        //     );
        // }
        //no code splitting

        if (this.state.route === 'page1') {
            return <Page1 onRouteChange={this.onRouteChange}/>;
        } else {
            return <this.state.component onRouteChange={this.onRouteChange}/>;
        }
    }
}

export default App;
