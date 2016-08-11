import React from 'react';
import _ from 'lodash';
    
let SearchBox = React.createClass ({
	handleChangeSearchBox(e){
		this.props.getSearchedData(e.target.value);
	},
    render() {
        return (
            <div className='row SearchBox'>
                 <input type="text" name="search" placeholder="Search.."
                 	onChange={this.handleChangeSearchBox}>
                 </input>
            </div>
        );
    }

});

module.exports = SearchBox;