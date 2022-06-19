import {graphql, compose} from "react-apollo";
import {productsList} from "./clientQueries";
import {ProductsTable} from "./ProductsTable";
import {deleteProduct} from "./clientMutations";

const vars = {
    totalSize: 0, products: [], deleteProduct, page: 1, pageSize: 10, sort: 'id'
}

export const ProductsConnector = compose(
    graphql(productsList, {
        options: (props) => ({variables: vars}),
        props: ({data: {loading, products, refetch}}) => ({
            currentPage: vars.page,
            pageCount: loading ? 0 : Math.ceil(products.totalSize / vars.pageSize),
            sortKey: vars.sort,
            totalSize: loading ? 0 : products.totalSize,
            pageSize: vars.pageSize,
            products: loading ? [] : products.products,
            navigateToPage: page => {
                vars.page = Number(page);
                refetch(vars);
            },
            setPageSize: size => {
                vars.pageSize = Number(size);
                refetch(vars);
            },
            setSortProperty: key => {
                vars.sort = key;
                refetch(vars);
            }
        })
    }),
    graphql(deleteProduct, {
        options: {
            update: (cache, {data: {deleteProduct: {id}}}) => {
                const queryDetails = {query: productsList, variables: vars};
                const data = cache.readQuery(queryDetails);
                data.products.products = data.products.products.filter(p => p.id !== id);
                data.products.totalSize = data.products.totalSize - 1;
                cache.writeQuery({...queryDetails, data})
            }
        },
        props: ({mutate}) => ({
            deleteProduct: id => mutate({variables: {id}})
        })
    })
)(ProductsTable);