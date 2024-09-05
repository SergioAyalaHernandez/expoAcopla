import React, {useEffect, useState} from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeigth = document.body.scrollHeight - window.innerHeight;

            if(scrollHeigth){
                setCompletion(Number(currentProgress / scrollHeigth)
                    .toFixed(2) *100);
            }
        };
        window.addEventListener('scroll', updateScrollCompletion);
        return () => window.removeEventListener('scroll',updateScrollCompletion);
    }, []);
    return completion;
}

export default useScrollProgress;