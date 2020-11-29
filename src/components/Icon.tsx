import React from 'react';
import classnames from 'classnames'

// require('icons/tags.svg')
// require('icons/money.svg')
// require('icons/statistics.svg')

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props ={
  name?:string,
}& React.SVGAttributes<SVGElement>

const Icon = (props:Props)=>{
  const {name,className,children, ...rest} = props
  return (
    // <svg className={`icon ${className?className:''}`}  {...rest}>
    <svg className={classnames('icon',className)}  {...rest}>
      {props.name && <use xlinkHref={'#'+props.name}></use>}
    </svg>
  )
}

export default Icon