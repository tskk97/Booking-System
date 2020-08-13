import React from 'react';
import { Link } from 'react-router-dom'

class Pagination extends React.Component{
    handlePage = (val) => {
        let { page } = this.props
        if (val === "Next") {
            page = page + 1
            this.setState({
                current: page
            })
            this.props.new_page(page)
        }
        else if (val === "Prev") {
            page = page - 1
            this.setState({
                current: page
            })
            this.props.new_page(page)
        }
        else{
            this.setState({
                current: val
            })
            this.props.new_page(val)
        }
    }

    render(){
        const { total_pages, page } = this.props
        let current = page
        let prev = "Prev"
        let next = "Next"
        let arr = []
        for(var i = 1; i <= total_pages; i++){
            arr.push(i)
        }
        return(
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className={current === 1 ? "page-item disabled" : "page-item"}>
                            <Link className="page-link" onClick={() => this.handlePage(prev)} >{prev}</Link>
                        </li>
                        {
                            arr.map(item => (
                                <li className={current === item ? "page-item active" : "page-item"} key={item}>
                                    <Link className="page-link" onClick={() => this.handlePage(item)}>{item}</Link>
                                </li>
                            ))
                        }
                        <li className={current === arr[arr.length - 1] ? "page-item disabled" : "page-item"}>
                            <Link className="page-link" onClick={() => this.handlePage(next)} >{next}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Pagination