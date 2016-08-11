import React from 'react';
import _ from 'lodash';
let fullStar = require('../image/fullStar.png');
let halfStar = require('../image/halfStar.png');
let star = require('../image/star.png');
let arrowImage = require('../image/next.png');

let Cards = React.createClass ({
	getFeatures(features){
		return _.map(features,(obj,index)=>{
			return(<li key={index}>{obj}</li>);
		});
	},
	getRupeeFormat(x) {
    	return x.toString().substring(0,x.toString().length-3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + x.toString().substring(x.toString().length-3);
	},
	getRatings(rating){
		let baseArr=[-1,-1,-1,-1,-1];
		let i=0;
		for(i=0; i<_.parseInt(rating); i++){
			baseArr[i]=1;
		}
		if(_.parseInt(rating) !== rating){
			baseArr[i] = 0;
		}
		return _.map(baseArr,(n,index)=>{
			if(n===1){
				return <img src={fullStar} key={index}></img>;
			}
			else if(n===0){
				return <img src={halfStar} key={index}></img>;
			}
			else {
				return <img src={star} key={index}></img>;
			}
		});
	},
	getCards(){
		if(this.props.listings.length === 0){
			return(
					<div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 card'>
						Oops ! No data Found.
					</div>
				);
		}
		else{
			return _.map(this.props.listings,(obj)=>{
			return (<div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 card' key={obj.itemId}>
						<div className='col-md-12 cardTitle'>{obj.itemTitle}</div>
						<div className='col-md-12 itemImage'>
							<img src={obj.itemImage}></img>
						</div>
						<div className='col-md-12 ratings'>
							{this.getRatings(obj.rating)}
							<span> (243 ratings)</span>
							<img src={arrowImage}></img>
						</div>
						<div className='col-md-12 price'>Rs. {this.getRupeeFormat(obj.price)}</div>
						<div className='col-md-12 emi'>EMI from Rs. {obj.emiPrice}</div>
						<div className='col-md-12 features'>{this.getFeatures(obj.features)}</div>
						<div className='col-md-12 compare'>
							<input type="checkbox" className="card_checkbox" id={obj.itemId}/>
							<label htmlFor={obj.itemId}>Add to Compare</label>
						</div>
					</div>);
			});
		}
		
	},
    render() {
        return(
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 cards'>
            	{this.getCards()}
            </div>
        );
    }
});

module.exports = Cards;