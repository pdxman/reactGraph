import React, { useState, useEffect } from "react";


export default function Charts(){
    const [year, setYear] = useState('2021')
    const [salesNum, setSalesNum] = useState('')
    const [sales, setSales] = useState('10')


    const barStyle = {
        height: `${sales}px`,
        width: '50px',
        backgroundColor: 'red',
        margin: 'auto',
        transition: 'all 1s ease',
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0' 
    }

    const barWrap = {
        height: '250px',
        width: '300px',
        borderBottom: '2px solid #000',
        margin: '2em auto',
        position: 'relative',
        overflow: 'hidden'
    }

    function handleSubmit(event){
        event.preventDefault()
        setSales(salesNum)
    }
  
    function handleSales(event){
        const isNum = event.target.value 
        if(isNum){
            setSalesNum(isNum)
        }
        //console.log(event.target)
    }

    return(
        <div>
            <h2>Unit Sales</h2>
            <div style={barWrap}>
                <div className="bar" style={barStyle}></div>
            </div>
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    onChange={handleSales}
                />
                <button type="submit">Submit</button>
            </form>
            
            <span><strong>Year:</strong> {year}</span>
            <br />
            <span><strong>Total Sales:</strong> {salesNum}</span>
            <br />
            {sales < 50 ? 'WORK HARDER!' : 'GOOD JOB!'}
        </div>
    )
}