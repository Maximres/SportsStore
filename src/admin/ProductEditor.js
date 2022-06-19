import React, {Component} from "react";
import {Query} from "react-apollo";
import {product} from "./clientQueries";
import {ProductCreator} from "./ProductCreator";

export class ProductEditor extends Component {

    render = () => {
        return <Query query={product} variables={{id: this.props.match.params.id}}>
            {
                ({loading, data}) => {
                    if (!loading)
                        return <ProductCreator {...this.props} product={data.product} mode="edit"/>
                    return null;
                }
            }
        </Query>
    }
}