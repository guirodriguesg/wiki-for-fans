import React from "react";

const TemplateBg = (props) => {
    return (
        <>
            <div className="h-screen static bg-slate-400">
                <div className="h-screen mx-10 bg-slate-900">
                    <div className="h-screen flex items-center justify-center bg-slate-900">
                        <div className="h-screen grid grid-cols-1 gap-4">
                            {props.component}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default  TemplateBg;