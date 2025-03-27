import React from 'react'
import "./Home.css"

function Home() {
  return (
    <>
        <div className="home-page">
            <div className="home-container">
                <div className="first-layer">
                    <div className="title">Finance System</div>
                    <div className="profile-name">Fakhrul<span class="material-symbols-outlined">arrow_drop_down</span></div>
                </div>
                <div className="second-layer">
                    <div className="sub-title">Current Balance</div>
                    <div className="box-balance">
                        <div className="bank-acc">

                        </div>
                        <div className="cash-balance">
                            
                        </div>
                    </div>
                </div>
                <div className="third-layer">
                    <form action="">
                        <div className="amount-layer">
                            <label htmlFor="amount">Amount</label>
                            <input type="number" name='amount'/>
                            <button className="add-btn">Add</button>
                            <button className="deduct-btn">Deduct</button>
                        </div>
                        <div className="desc-layer">
                            <label htmlFor="desc">Description</label>
                            <input type="text" />
                        </div>
                        <button className='submit-btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home