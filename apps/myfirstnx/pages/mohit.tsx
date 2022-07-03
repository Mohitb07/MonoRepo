import React, { useEffect } from 'react';

const Mohit:React.FC = () => {
    useEffect(() => {
        fetch('/api/mohit')
        .then(res => res.json())
        .then(result => console.log('response', result))
    }, [])
    return <div>Hello Mohit Here</div>
}
export default Mohit;