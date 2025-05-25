import React from "react";

const MyForm = () => {

    return (
        <div className="box">
            <form autoComplete="off">
                <div>
                    <label htmlFor="user">Username:  </label>
                    <input type="text" id="name" name="name" />
                </div>
                    
                <div>
                    <label htmlFor="email">Email:  </label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:  </label>
                    <input type="password" id="password" name="password" />  
                </div>
                    
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MyForm; // Exportamos el componente MyForm