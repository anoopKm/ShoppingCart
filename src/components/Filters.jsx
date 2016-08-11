import React from 'react';
import _ from 'lodash';
let filterSet=['Relevance','Popular','Low','High','New'];

let Filters = React.createClass ({
    handleFilterChange(e){
        this.props.updateFlter(e.target.value);
    },
    getFilters(){
        return _.map(filterSet,(obj,index)=>{
            return(
                    <div className='col-lg-2 col-md-2 col-sm-4 col-xs-6' key={index}>
                    <label className="radio"> 
                        <input type="radio" name="filter" value={obj}
                            onChange={this.handleFilterChange}
                            checked = {this.props.filter === obj ? true : false}>
                        </input>
                        <span>{obj}</span> 
                    </label>
                    </div>
                );
        });
    },
    render() {
        return (
            <div className='row filters'>
                {this.getFilters()}
            </div>
        );
    }

});

module.exports = Filters;