import { useEffect, useRef, useState } from "react";

const useHeightOffset = () => {
    const refHeightElement = useRef()
    const [height, set_height] = useState()

    useEffect(() => {
        if (refHeightElement.current){
            set_height(refHeightElement.current.offsetHeight)
            
        }
    }, [refHeightElement.current])

    return [height, refHeightElement]
}

export default useHeightOffset;