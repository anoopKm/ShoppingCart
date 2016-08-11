import React from 'react';  
require('../scss/common.scss');
import products from '../constants/constant.js';
import SearchBox from './SearchBox.jsx';
import Filters from './Filters.jsx';
import Cards from './Cards.jsx';
import _ from 'lodash';

let Main = React.createClass ({
	getInitialState() {
		return {
            data : products,
            filter : 'Relevance'
        };
	},
    getSearchedData(str){
        if(str.length > 2){
            let temp = _.filter(products,(obj)=>{
                return obj.itemTitle.toLowerCase().indexOf(str) > -1;
            });
            this.getFilteredData(this.state.filter,temp);
        }
        else if(str.length === 0){
            this.getFilteredData(this.state.filter,products);
        }
    },
    getFilteredData(key,data){
        let temp;
        switch(key){
            case 'Relevance':
                temp = data;
                break;
            case 'Popular':
                temp = data.sort((a,b)=>{
                    let x = a['rating'];
                    let y = b['rating'];
                    return ((x < y) ? 1 : ((x > y) ? -1 : 0));
                });
                break;
            case 'Low':
                temp = data.sort((a,b)=>{
                    let x = a['price']; let y = b['price'];
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                });
                break;
            case 'High':
                temp = data.sort((a,b)=>{
                    let x = a['price']; let y = b['price'];
                    return ((x < y) ? 1 : ((x > y) ? -1 : 0));
                });
                break;
            case 'New':
                temp = data;
                break;
        }
        this.setState({data: temp, filter: key});
    },
    updateFlter(key){
        this.getFilteredData(key,this.state.data);
    },
    render() {
        return (
            <div className='row'>
            	<SearchBox 
                    getSearchedData = {this.getSearchedData} />
            	<Filters 
                    updateFlter = {this.updateFlter}
                    filter = {this.state.filter} />
            	<Cards 
            		listings = {this.state.data} />
            </div>
        );
    }
});

module.exports = Main;