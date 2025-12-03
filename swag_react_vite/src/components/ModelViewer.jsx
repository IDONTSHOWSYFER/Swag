// src/components/ModelViewer.jsx
import "@google/model-viewer";
import {useEffect, useState} from "react";

export default function ModelViewer({model, desc}) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        console.log(show)
    })

    return (
        <div className="relative h-full w-full" onClick={() => setShow(!show)}>
            <model-viewer
                src={`/models/${model}.glb`}
                auto-rotate
                camera-controls
                style={{width: "100%", height: "100%", background: "transparent"}}
            ></model-viewer>
            {/*<div className={"absolute  " + (!show ? "hidden" : "flex")} >*/}
            {/*    <p className="font-geological text-2xl">*/}
            {/*        {desc}*/}
            {/*    </p>*/}
            {/*</div>*/}
        </div>
    );
}