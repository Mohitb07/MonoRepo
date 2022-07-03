import React, { useEffect } from 'react';

const Mohit:React.FC = () => {
    useEffect(() => {
        fetch('http://localhost:3333/api')
        .then(res => res.json())
        .then(result => console.log('response', result))
    }, [])
    return <div>Hello Mohit Here</div>
}
export default Mohit;