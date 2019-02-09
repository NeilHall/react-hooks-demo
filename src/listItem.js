import React from 'react';

function ListItem({ className, component: Component = "li", ...props}) {
    return (
        <Component
            className={["anarchist-list-item", className].join(" ")}
            {...props}
        />
    )
}

export default ListItem