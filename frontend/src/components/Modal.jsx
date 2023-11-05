import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function Modal(props) {
  const handleOpen = () => props.handleClose();

  return (
    <>
      <div className="position: fixed; overflow: auto; inset: 0px; z-index: 9999;">
        <div className="grid place-items-center fixed w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="relative bg-white m-4 rounded-lg shadow-2xl text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed w-full md:w-3/4 lg:w-3/5 2xl:w-2/5 min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%] max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%]">

            <Dialog open={props.open} handler={handleOpen} size="xs" className="w-96 "
              animate={{
                mount: { scale: 1, y: 0 }, unmount: { sclae: 0.9, y: -100 }
              }}>
              <DialogHeader className="flex justify-center flex flex-col items-center pb-1">
                <img className="w-24 h-24 mb-2 rounded-full shadow-lg" src={props.person.img} alt="Bonnie image" />
                <span>{props.person.characterName}</span>
              </DialogHeader>


              <DialogBody>
                <div className="grid grid-cols-2 mb-2">
                  <span>Actor Name:</span><span>{props.person.actorName}</span>
                  <span>Episode Count:</span><span>{props.person.episodeCount}</span>
                </div>
                <span>Character Description: </span><span>{props.person.roleDescription}</span>

              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;