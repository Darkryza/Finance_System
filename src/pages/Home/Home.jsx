import React from 'react'
import "./Home.css"

function Home() {
  return (
    <>
        <div className="home-page">
            <div className="home-container">
                <div className="first-layer">
                    <div className="title">Finance System</div>
                    <div className="profile-name">Fakhrul<span className="material-symbols-outlined arrow-icon">arrow_drop_down</span></div>
                </div>
                <div className="second-layer">
                    <div className="sub-title">Current Balance</div>
                    <div className="box-balance">
                        <div className="bank-acc">
                            <div className="title">
                                Bank Account
                            </div>
                            <div className="value">
                                RM5,000.00
                            </div>
                        </div>
                        <div className="cash-balance">
                            <div className="title">
                                Cash Balance
                            </div>
                            <div className="value">
                                RM500.00
                            </div>
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