import React, { useEffect } from 'react';

const Mohit:React.FC = () => {
    useEffect(() => {
        fetch('https://mono-repo-ashy.vercel.app/3333/api/mohit')
        .then(res => res.json())
        .then(result => console.log('response', result))
    }, [])
    return <div>Hello Mohit Here</div>
}
export default Mohit;