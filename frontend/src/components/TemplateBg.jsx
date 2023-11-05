import React from "react";

const TemplateBg = (props) => {
    return (
        <>
            <div className="bg-gray-800">
                <div className="container max-h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] mx-auto flex justify-center bg-slate-600 w-10/12">
                    <div className="mt-32 grid grid-flow-col auto-rows-max">
                        {props.component}
                    </div>
                </div>
            </div>
        </>
    )
}

export default  TemplateBg;