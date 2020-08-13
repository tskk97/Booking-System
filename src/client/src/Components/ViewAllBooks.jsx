import React from 'react'
import Navbar from './Navbar'
import { getAllBooks } from '../Redux/ViewAllBooks/actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Pagination from './Pagination'

class ViewAllBooks extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        const { getAllBooks, page } = this.props
        var obj = {
            'page': page
        }
        getAllBooks(obj)
    }

    handlePage = (page) => {
        const { getAllBooks } = this.props
        var obj = {
            page: page
        }
        getAllBooks(obj)
    }

    render(){
        const { isAuth, page, total_pages, data } = this.props
        if(!isAuth){
            return(
                <div>
                    <Navbar />
                    <div className="mt-5 text-center">
                        <div className="card mx-auto border-0" style={{width: "60rem"}}>
                            <table class="table border">
                                <thead class="text-light bg-danger">
                                    <tr>
                                        <th scope="col">Category</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Total Quantity</th>
                                        <th scope="col">Author</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data && data.map(item => (
                                            <tr>
                                                <td>{item.category}</td>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.author}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <div className="mx-auto mt-5">
                                <Pagination page={page} total_pages={total_pages} new_page={this.handlePage} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <Redirect to="/login" />
            )
        }
    }
}

const mapStateToProps = state => ({
    isAuth: state.login.isAuth,
    isLogin: state.login.isLogin,
    message: state.login.message,
    userData: state.login.userData,

    data: state.allbooks.data,
    total: state.allbooks.total,
    page: state.allbooks.page,
    per_page: state.allbooks.per_page,
    total_pages: state.allbooks.total_pages
})

const mapDispatchToProps = dispatch => ({
    getAllBooks: payload => dispatch(getAllBooks(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllBooks);