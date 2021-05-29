import { Typography } from '@material-ui/core'
import React,{useState} from 'react'
import useStyles from './styles'
import './style.css'

export default function Categories() {
    const classes = useStyles()
    const categoryList = [
        {name: 'Allitems'},
        {name: 'InstantFood'},
        {name: 'Beverage'},
        {name: 'Stationary'},
        {name: 'FrozenFood'},
        {name: 'Health'},
        {name: 'Computer'},
        {name: 'Accesories'},
        {name: 'Clothes'},
        {name: 'KitchenSet'},
    ]
    return (
        <div className={'root'}>
            {
                categoryList.map((list, idx) => (
                    <Typography key={idx} className={classes.btnCategories}>{list.name}</Typography>
                ))
            }
        </div>
    )
}
// import React, { Component } from 'react';
// import ScrollMenu from 'react-horizontal-scrolling-menu';
// import './style.css';
// const list = [
//     { name: 'item1' },
//     { name: 'item2' },
//     { name: 'item3' },
//     { name: 'item4' },
//     { name: 'item5' },
//     { name: 'item6' },
//     { name: 'item7' },
//     { name: 'item8' },
//     { name: 'item9' }
//   ];
  
//   // One item component
//   // selected prop will be passed
//   const MenuItem = ({text, selected}) => {
//     return <div
//       className={`menu-item ${selected ? 'active' : ''}`}
//       >{text}</div>;
//   };
  
//   // All items component
//   // Important! add unique key
//   export const Menu = (list, selected) =>
//     list.map(el => {
//       const {name} = el;
  
//       return <MenuItem text={name} key={name} selected={selected} />;
//     });
  
  
//   const Arrow = ({ text, className }) => {
//     return (
//       <div
//         className={className}
//       >{text}</div>
//     );
//   };
  
  
//   const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
//   const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
  
//   const selected = 'item1';
  
//   export default class Categories extends Component {
//     constructor(props) {
//       super(props);
//       // call it again if items count changes
//       this.menuItems = Menu(list, selected);
//     }
  
//     state = {
//       selected
//     };
  
//     onSelect = key => {
//       this.setState({ selected: key });
//     }
  
  
//     render() {
//       const { selected } = this.state;
//       // Create menu from items
//       const menu = this.menuItems;
  
//       return (
//           <ScrollMenu
//             data={menu}
//             arrowLeft={ArrowLeft}
//             arrowRight={ArrowRight}
//             selected={selected}
//             onSelect={this.onSelect}
//           />
//       );
//     }
//   }