import React, {Component} from "react";
import {PaginationControls} from "../PaginationControls";
import {Link} from "react-router-dom";
import {ProductsRow} from "./ProductsRow";

export class ProductsTable extends Component {
    render = () => {
        return <div>
            <h4 className="text-white p-2 text-center bg-info">
                {this.props.totalSize} Products
            </h4>
            <PaginationControls keys={["ID", "Name", "Category"]} {...this.props} />
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th className="text-right">Price</th>
                        <th className="text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products && this.props.products.map(prod => <ProductsRow key={prod.id} product={prod} deleteProduct={this.props.deleteProduct} />)}
                </tbody>
            </table>
            <div className="text-center">
                <Link to="/admin/products/create" className="btn btn-primary">
                    Create Product
                </Link>
            </div>
        </div>
    }
}