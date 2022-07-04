import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <rect x="572" y="479" rx="0" ry="0" width="10" height="86" /> 
    <rect x="172" y="255" rx="0" ry="0" width="1" height="5" /> 
    <circle cx="134" cy="134" r="135" /> 
    <rect x="0" y="279" rx="10" ry="10" width="277" height="33" /> 
    <rect x="0" y="330" rx="10" ry="10" width="275" height="70" /> 
    <rect x="0" y="417" rx="10" ry="10" width="95" height="32" /> 
    <rect x="120" y="412" rx="25" ry="25" width="152" height="42" />
  </ContentLoader>
)

export default Skeleton