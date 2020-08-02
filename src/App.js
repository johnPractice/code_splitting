import React from 'react';
import './App.css';
import Page1 from "./components/Page1";
import AsyncComponent from "./components/AsyncComponent";


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
        this.setState({...this.state, route: route});
        //no code splitting

        //    whit code splitting
        //way1
        // if (route === 'page1') {
        //     this.setState({...this.state, route: route});
        // } else if (route === 'page2') {
        //     import('./components/Page2').then((Page2) => {
        //         this.setState({...this.state, component: Page2.default, route})
        //     })
        // } else if (route === 'page3') {
        //     import('./components/Page3').then((Page3) => {
        //         this.setState({...this.state, component: Page3.default, route})
        //     })
        // }
        //way1

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

        //    whit code splitting
        //way1
        // if (this.state.route === 'page1') {
        //     return <Page1 onRouteChange={this.onRouteChange}/>;
        // } else {
        //     return <this.state.component onRouteChange={this.onRouteChange}/>;
        // }
        //    whit code splitting
        //way1

        //    whit code splitting
        //    way2
        if (this.state.route === 'page1') {
            return (
                <Page1 onRouteChange={this.onRouteChange}/>
            );
        } else if (this.state.route === 'page2') {
            const AsyncPage2 = AsyncComponent(()=>import('./components/Page2'));
            return (
                <AsyncPage2 onRouteChange={this.onRouteChange}/>
            );
        } else if (this.state.route === 'page3') {
            const AsyncPage3 = AsyncComponent(()=>import('./components/Page3'));
            return (
                <AsyncPage3 onRouteChange={this.onRouteChange}/>
            );
        }
        //    whit code splitting
        //    way2

    }
}

export default App;
