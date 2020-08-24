// import React, { Component,useEffect } from 'react';
// import Nprogress from 'nprogress';
// import ReactPlaceholder from 'react-placeholder';
// import 'nprogress/nprogress.css';
// import 'react-placeholder/lib/reactPlaceholder.css';

// export default function asyncComponent(importComponent) {
//   class AsyncFunc extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         component: null
//       };
//     }

//     componentWillMount() {
//       Nprogress.start();
//     }
//     componentWillUnmount() {
//       this.mounted = false;
//     }
//     async componentDidMount() {
//       this.mounted = true;
//       const { default: Component } = await importComponent();
//       Nprogress.done();
//       if (this.mounted) {
//         this.setState({
//           component: <Component {...this.props} />
//         });
//       }
//     }

//     render() {
//       const Component = this.state.component || <div />;
//       return (
//         <ReactPlaceholder type="text" rows={7} ready={Component !== null}>
//           {Component}
//         </ReactPlaceholder>
//       );
//     }
//   }
//   return AsyncFunc;
// }

// import React,{useEffect,useState} from 'react'
// import Nprogress from 'nprogress';
// import ReactPlaceholder from 'react-placeholder';
// import 'nprogress/nprogress.css';
// import 'react-placeholder/lib/reactPlaceholder.css';

// export default function AsyncFunc(importComponent) {

//   const [component, setComponent] = useState(null);
//   useEffect(()=>{
//     Nprogress.start();
//   },[])


//   useEffect(()=>{
//     const { default: Component } =importComponent;
//         Nprogress.done();
//   },[])

//   render (
    
//   )
// }


