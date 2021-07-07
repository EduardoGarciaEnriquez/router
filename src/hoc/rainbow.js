import React from 'react' //rafce 

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'pink', 'blue', 'yellow', 'green','orange'];
    const randomColor = colors[ Math.floor(Math.random() * 5)];
    const className = randomColor+"-text";

    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;
