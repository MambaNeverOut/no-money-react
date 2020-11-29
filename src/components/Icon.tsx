import React from 'react';

// require('icons/tags.svg')
// require('icons/money.svg')
// require('icons/statistics.svg')

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props ={
  name?:string,
  onClick?: ()=>void
}

const Icon = (props:Props)=>{
  return (
    <svg className="icon" onClick={props.onClick}>
      {props.name && <use xlinkHref={'#'+props.name}></use>}
    </svg>
  )
}

export default Icon