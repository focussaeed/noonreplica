import React from "react";
import { Products } from "./Product";
// import { Card_Component } from "./Card_Component";

export const Section05 = () => {
  return (
    <div className="grid grid-cols-3 justify-center px-12 mt-5 gap-3">

      <div className="col-span-1 px-0 bg-slate-200">
        <div className="grid grid-rows-1 grid-flow-row p-2 ml-3">
          <h1 className="text-2xl font-bold"> More reason to shop</h1>
        </div>

        <div className="grid grid-rows-2 grid-flow-col px-5 py-5 gap-3">
          <img
            src="https://f.nooncdn.com/mpcms/EN0001/assets/904ce502-9090-47e5-a65b-c220f0570e49.png?format=avif "
            alt=""
          />

          <img
            src="https://f.nooncdn.com/mpcms/EN0001/assets/9f856ffd-3a2e-4efd-bd9f-a7619d786e41.png?format=avif "
            alt=""
          />

          <img
            src="https://f.nooncdn.com/mpcms/EN0001/assets/390764b1-df36-4b16-aad8-36389bd7cdd1.png?format=avif"
            alt=""
          />

          <img
            src="https://f.nooncdn.com/mpcms/EN0001/assets/78d6564f-25d9-4513-ad82-041e0b281f9f.png?format=avif "
            alt=""
          />
        </div>
      </div>

      <div className="col-span-1 px-0 bg-slate-200">
        <div className="grid grid-rows-1 grid-flow-row p-2 ml-3">
          <h1 className="text-2xl font-bold"> Mega Deals</h1>
        </div>

        <div className=" grid grid-flow-col bg-slate-600">
        
          <Products />  
                   

        </div>
      </div>

      <div className="col-span-1 px-0 bg-slate-200">
        <div className="grid grid-rows-1 grid-flow-row p-2 ml-3">
          <h1 className="text-2xl font-bold"> In focus</h1>
        </div>

        <div className="grid grid-rows-2 grid-flow-row px-5 py-5 gap-3">
          <img
            src="https://f.nooncdn.com/mpcms/EN0001/assets/26b5ab14-2596-473a-b1e6-411903ebcb44.png?format=avif"
            alt=""
          />

          <img
            src="https://f.nooncdn.com/mpcms/EN0001/assets/1b352827-1fc9-40cd-8d51-4f0b28b8f389.png?format=avif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
