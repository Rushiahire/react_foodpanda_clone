import React from 'react';

const JOBS = () =>{
    let id=800;
    const job_post =[
        'Back office',
        'Business development',
        'Commercial',
        'Content'
    ];

    const country =[
        'Bangladesh',
        'Japan',
        'Malaysia',
        'Pakistan',
        'Thailand'
    ];

    const table_rows = [
        
        {
            title : 'Account Management Executive -Sales - Immediate Starter (Kedah+Perlis)',
            para : 'Commercial',
            location : 'malaysia'
        },
        {
            title : 'Account Manager (Commercial) - Kedah- FMCG/E-Commerce/Startup',
            para : 'Commercial',
            location : 'malaysia'
        },
        {
            title : 'Account Manager (Commercial) - KK (Sabah) - FMCG/E-Commerce/Starts-up',
            para : 'Commercial',
            location : 'malaysia'
        },
        {
            title : 'Account Manager (Commercial)- Johor Bahru- FMCG/E-Commerce/Startup',
            para : 'Commercial',
            location : 'malaysia'
        },
        {
            title : "Account Manager (Commercial)- Johor Bahru- FMCG/E-Commerce/Startup",
            para : 'Commercial',
            location : 'malaysia'
        },
        {
            title : 'ACCOUNT MANAGER - SALES - (2 Years of Working Experience ) & ( B2B ,E-COMMERCE, FMCG) - Penang',
            para : 'Commercial',
            location : 'malaysia'
        }
    ];
    return(
        <>
        <div id="table_header">
            <p>
                show <select name="" id="">
                    <option value="">10</option>
                    <option value="">25</option>
                    <option value="">50</option>
                    <option value="">100</option>
                    </select>entries
            </p>
            <p>
                search <input type="text" name='search' id="search" autoComplete='off'/>
            </p>
        </div>
        <table id="table_1">
            <tr id="tr_1">
                <th>Job Title</th>
                <th>
                    <select name="job_post" id="job_post">
                        <option value="All">All</option>
                        {
                            job_post.map((content)=>{
                                return <option value={content} key={id++}>{content}</option>
                            })
                        }
                    </select>
                </th>
                <th>
                    <select name="country" id="country">
                        <option value="All">All</option>
                        {
                            country.map((content)=>{
                                return <option value={content} key={id++}>{content}</option>
                            })
                        }
                    </select>
                </th>
            </tr>
                {
                    table_rows.map((content)=>{
                        return <tr key={id++} id="tr_2">
                            <td>
                                <a href="#">{content.title}</a>
                            </td>
                            <td className="table_2">
                                {content.para}
                            </td>
                            <td className="table_2">
                                <a href="#">{content.location}</a>
                            </td>
                        </tr>
                    })
                }
        </table>
        <div id="pages">
            <div>
                <p>Showing 1 to 10 of 942 entries</p>
            </div>
            <ul>
                <li>Previous</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>..</li>
                <li>95</li>
                <li>Next</li>
            </ul>
        </div>
        </>
    )
}
export default JOBS;