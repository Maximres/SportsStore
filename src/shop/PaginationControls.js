import React, {Component} from "react";
import {PaginationButtons} from "./PaginationButtons";

export class PaginationControls extends Component {
    constructor(props) {
        super(props);
        this.pageSizes = this.props.sizes || [5, 10, 25, 100];
        this.sortKeys = this.props.keys || ["Name", "Price"];
    }

    handlePageSizeChange = (ev) => {
        this.props.setPageSize(ev.target.value);
    }

    handleSortPropChange = (ev) => {
        this.props.setSortProperty(ev.target.value);
    }

    render() {
        return <div className="m-2">
            <div className="text-center m-1">
                <PaginationButtons currentPage={this.props.currentPage}
                                   pageCount={this.props.pageCount}
                                   navigate={this.props.navigateToPage}/>
            </div>
            <div className="form-inline justify-content-center">
                <select className="form-control"
                        onChange={this.handlePageSizeChange}
                        value={this.props.pageSize || this.pageSizes[0]}>
                    {this.pageSizes.map(s => <option value={s} key={s}>{s} per page</option>)}
                </select>
                <select className="form-control"
                        onChange={this.handleSortPropChange}
                        value={this.props.sortKey || this.sortKeys[0]}>
                    {this.sortKeys.map(s => <option value={s.toLowerCase()} key={s}>Sort by {s}</option>)}
                </select>
            </div>
        </div>

    }
}