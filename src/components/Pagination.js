import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div style={{padding: "60px 0"}}>
            <ul className="pagination">
                <li className="disabled"><i className="material-icons">chevron_left</i></li>
                {/* <li className="disabled"><a href="#"><i className="material-icons">chevron_left</i></a></li> */}
                    {pageNumbers.map(number => (
                        <li key={number} className="waves-effect">
                            <a 
                                href="#"
                                onClick={() => paginate(number)}
                            >{number}</a>
                        </li>
                        ))}
                    <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
            </ul>
        </div>
    )
}

export default Pagination
