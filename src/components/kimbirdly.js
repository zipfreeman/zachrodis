import React from "react"
import {Spring } from 'react-spring/renderprops'

import '../styles/birdpage.css'
/*
svg stroke animation:
BOTH css property "stroke-dasharray"
and "stroke-dashoffset" should be adjusted to the specific length of the line they are animating

"viewBow" important to have to keep the vector scaleable

lower 'tension' to go slower
higher fiction to go faster
upper case now

*/

export default () => (

  <Spring
  config={{ tension: 100, friction: 500 }}
    from={{ x: 1000 }}
    to={{ x: 0 }}
  >
    {props => (

      <svg strokeDashoffset={props.x} viewBox="0 0 304.82 420.26">
        <path className="cls-1" d="M653.57,248.45c-7.18,9.23-25,44.93-30,62.9s-11.79,65.71-38.19,98.85-40.79,45.31-68.52,54.48c-20.83,6.88-34.32,2.91-34.32,2.91s-.56,87.32-16.34,90C456.08,559.24,449.84,543,449.84,543s3.12,33.78-5.73,35.71c-10.9,2.37-14.81-21.14-14.81-21.14s-5.68,25.07-15.22,23.38,2.83-41.63,14.06-61.29" transform="translate(-398.71 -163.28)"/>
        <path className="cls-2" d="M682.64,245.07s-9.48,9.06-16,9.06-17.9-1.9-17.9-1.9l10.95-23.37s12.43,7,15,9.19S682.64,245.07,682.64,245.07Z" transform="translate(-398.71 -163.28)"/>
        <path className="cls-3" d="M665.52,192.78s23.36,9.57,31.78,24.35.7,40.48-5.56,48.81-10.07,13.73-12.29,14.54,3.8-12.94,4.28-20.11c.43-6.36-3.91-14.6-9.36-19.27-3.4-2.92-21.15-10.38-23.11-16.46S655.66,195.38,665.52,192.78Z" transform="translate(-398.71 -163.28)"/>
        <path className="cls-1" d="M428.14,519.64C439.37,500,450,464.11,466.31,429.85" transform="translate(-398.71 -163.28)"/><path className="cls-1" d="M653.57,248.45" transform="translate(-398.71 -163.28)"/>
        <path className="cls-4" d="M665.68,196.78s-13.35-25.4-41.24-28.92S557,186,544,259" transform="translate(-398.71 -163.28)"/>
        <path className="cls-5" d="M555.78,265.3a9.14,9.14,0,0,1,3.06.42c4.89,1.75,7.63,4.56,8.63,8.86,1.85,7.94-2.73,18.56-8.24,24.24-10.37,10.72-55,62.32-71,84.38-6.58,9.09-15.93,29-26.75,52.07-11.16,23.78-23.8,50.75-36,71.4-2.09,3.55-3.61,5-4.34,5.5-2-1.77-5.83-8.86-7.49-20.6-.65-4.64,1.43-10.19,3.27-15.08,2.56-6.81,5.46-14.52,0-20.73-3.43-3.93-8.94-19.28-9.62-23.2-2.49-14.28,12.75-43.17,22.05-59.12,16.3-27.94,40.39-55.42,67.83-77.4,28.32-22.69,49.22-30.74,58.51-30.74m0-8.42c-28.6,0-96.93,49.44-133.61,112.31-11.5,19.71-26,48.07-23.08,64.82.81,4.64,6.64,21.64,11.58,27.29,4.33,5-7.17,18.24-5.3,31.45,2.09,14.78,8.07,28.08,15.76,28.08,3.59,0,7.55-2.89,11.67-9.88,24.11-40.91,49.73-105.46,62.29-122.81,15.34-21.18,59.59-72.5,70.2-83.46,11.9-12.3,18.61-38.94-3.61-46.89a17.54,17.54,0,0,0-5.9-.91Z" transform="translate(-398.71 -163.28)"/>
        <path className="cls-6" d="M455.13,350.16" transform="translate(-398.71 -163.28)"/>
        <path className="cls-6" d="M436.2,384.29" transform="translate(-398.71 -163.28)"/>
        <path className="cls-6" d="M482.53,401.36" transform="translate(-398.71 -163.28)"/>
        <path className="cls-6" d="M419.85,418.43" transform="translate(-398.71 -163.28)"/>
        <path className="cls-6" d="M466.19,401.36" transform="translate(-398.71 -163.28)"/>
        <path className="cls-6" d="M466.19,435.5" transform="translate(-398.71 -163.28)"/>
        <path className="cls-6" d="M403.5,450.53" transform="translate(-398.71 -163.28)"/>
        <path className="cls-6" d="M449.84,467.59" transform="translate(-398.71 -163.28)"/>
        <path className="cls-6" d="M386.88,479.54" transform="translate(-398.71 -163.28)"/>
        <path className="cls-6" d="M433.21,496.61" transform="translate(-398.71 -163.28)"/>
        <path d="M628.82,195.34v1.27h0A18.66,18.66,0,0,1,644.68,205a20.93,20.93,0,0,1,1.64,19.81c-.2.49-.46.49-.58.49a1.5,1.5,0,0,1-1.11-.68,1.23,1.23,0,0,1-.11-1.24,18,18,0,0,0-4.76-20.74,17,17,0,0,0-10.94-3.8,16.19,16.19,0,0,0-12.91,5.9,12.23,12.23,0,0,0-1.65,13.14,13.17,13.17,0,0,0,12.07,7.24h.29c5.2-.1,10-3.78,11.13-8.56a8.84,8.84,0,0,0-3.4-9.41c-1.71-1.26-2.89-1.8-4-1.8-2.16,0-3,2-4,4.54-.18.45-.37.95-.59,1.47l1.17.49,1.18.49a1.28,1.28,0,0,1,1.26-.8,1.31,1.31,0,0,1,1,.43c0,.06.16.24,0,.67-.88,2.12-2.4,3.28-4.27,3.28a5.92,5.92,0,0,1-5.13-3.38c-1-2-.52-4.33,1.24-6.44a8.39,8.39,0,0,1,6.53-3.31,11.68,11.68,0,0,1,8.81,4.8,11.18,11.18,0,0,1,2.26,9.63c-1.91,7.34-8.26,10-13.56,10a16.73,16.73,0,0,1-13.69-6.88,12.46,12.46,0,0,1-.89-13.23,20.09,20.09,0,0,1,16.42-10.48h.63v-1.27m0,0h-.67c-12.17.35-24.71,13.91-16.54,25.71a18,18,0,0,0,14.74,7.43c6.55,0,12.87-3.52,14.8-10.91,2.06-7.89-5.12-16-12.31-16a9.56,9.56,0,0,0-7.51,3.76c-4.91,5.93,0,11.92,4.87,11.92,2.13,0,4.24-1.18,5.45-4.07.72-1.73-.7-2.87-2.2-2.87a2.56,2.56,0,0,0-2.44,1.59c1.32-3.16,1.83-5.22,3.39-5.22.75,0,1.74.48,3.19,1.54a7.6,7.6,0,0,1,2.92,8.1c-1,4.41-5.52,7.5-9.92,7.58h-.26c-9.92,0-15.64-10.44-9.42-18.32a15.06,15.06,0,0,1,11.91-5.41,15.84,15.84,0,0,1,10.12,3.5,16.64,16.64,0,0,1,4.4,19.27,2.7,2.7,0,0,0,2.4,3.69,1.86,1.86,0,0,0,1.76-1.27c5.91-13.9-3-30-18.68-30Z" transform="translate(-398.71 -163.28)"/>

      </svg>
    )}
  </Spring>

)

//
// <div style={{margin: '20px auto', width:'80%', overflow:'hidden', textAlign: 'center'}}>
//
// <svg viewBox="0 0 304.82 420.26">
//   <path className="cls-1" d="M653.57,248.45c-7.18,9.23-25,44.93-30,62.9s-11.79,65.71-38.19,98.85-40.79,45.31-68.52,54.48c-20.83,6.88-34.32,2.91-34.32,2.91s-.56,87.32-16.34,90C456.08,559.24,449.84,543,449.84,543s3.12,33.78-5.73,35.71c-10.9,2.37-14.81-21.14-14.81-21.14s-5.68,25.07-15.22,23.38,2.83-41.63,14.06-61.29" transform="translate(-398.71 -163.28)"/>
//   <path className="cls-2" d="M682.64,245.07s-9.48,9.06-16,9.06-17.9-1.9-17.9-1.9l10.95-23.37s12.43,7,15,9.19S682.64,245.07,682.64,245.07Z" transform="translate(-398.71 -163.28)"/>
//   <path className="cls-3" d="M665.52,192.78s23.36,9.57,31.78,24.35.7,40.48-5.56,48.81-10.07,13.73-12.29,14.54,3.8-12.94,4.28-20.11c.43-6.36-3.91-14.6-9.36-19.27-3.4-2.92-21.15-10.38-23.11-16.46S655.66,195.38,665.52,192.78Z" transform="translate(-398.71 -163.28)"/>
//   <path className="cls-1" d="M428.14,519.64C439.37,500,450,464.11,466.31,429.85" transform="translate(-398.71 -163.28)"/><path className="cls-1" d="M653.57,248.45" transform="translate(-398.71 -163.28)"/>
//   <path className="cls-4" d="M665.68,196.78s-13.35-25.4-41.24-28.92S557,186,544,259" transform="translate(-398.71 -163.28)"/>
//   <path className="cls-5" d="M555.78,265.3a9.14,9.14,0,0,1,3.06.42c4.89,1.75,7.63,4.56,8.63,8.86,1.85,7.94-2.73,18.56-8.24,24.24-10.37,10.72-55,62.32-71,84.38-6.58,9.09-15.93,29-26.75,52.07-11.16,23.78-23.8,50.75-36,71.4-2.09,3.55-3.61,5-4.34,5.5-2-1.77-5.83-8.86-7.49-20.6-.65-4.64,1.43-10.19,3.27-15.08,2.56-6.81,5.46-14.52,0-20.73-3.43-3.93-8.94-19.28-9.62-23.2-2.49-14.28,12.75-43.17,22.05-59.12,16.3-27.94,40.39-55.42,67.83-77.4,28.32-22.69,49.22-30.74,58.51-30.74m0-8.42c-28.6,0-96.93,49.44-133.61,112.31-11.5,19.71-26,48.07-23.08,64.82.81,4.64,6.64,21.64,11.58,27.29,4.33,5-7.17,18.24-5.3,31.45,2.09,14.78,8.07,28.08,15.76,28.08,3.59,0,7.55-2.89,11.67-9.88,24.11-40.91,49.73-105.46,62.29-122.81,15.34-21.18,59.59-72.5,70.2-83.46,11.9-12.3,18.61-38.94-3.61-46.89a17.54,17.54,0,0,0-5.9-.91Z" transform="translate(-398.71 -163.28)"/>
//   <path className="cls-6" d="M455.13,350.16" transform="translate(-398.71 -163.28)"/>
//   <path className="cls-6" d="M436.2,384.29" transform="translate(-398.71 -163.28)"/>
//   <path className="cls-6" d="M482.53,401.36" transform="translate(-398.71 -163.28)"/>
//   <path className="cls-6" d="M419.85,418.43" transform="translate(-398.71 -163.28)"/>
//   <path className="cls-6" d="M466.19,401.36" transform="translate(-398.71 -163.28)"/>
//   <path className="cls-6" d="M466.19,435.5" transform="translate(-398.71 -163.28)"/>
//   <path className="cls-6" d="M403.5,450.53" transform="translate(-398.71 -163.28)"/>
//   <path className="cls-6" d="M449.84,467.59" transform="translate(-398.71 -163.28)"/>
//   <path className="cls-6" d="M386.88,479.54" transform="translate(-398.71 -163.28)"/>
//   <path className="cls-6" d="M433.21,496.61" transform="translate(-398.71 -163.28)"/>
//   <path d="M628.82,195.34v1.27h0A18.66,18.66,0,0,1,644.68,205a20.93,20.93,0,0,1,1.64,19.81c-.2.49-.46.49-.58.49a1.5,1.5,0,0,1-1.11-.68,1.23,1.23,0,0,1-.11-1.24,18,18,0,0,0-4.76-20.74,17,17,0,0,0-10.94-3.8,16.19,16.19,0,0,0-12.91,5.9,12.23,12.23,0,0,0-1.65,13.14,13.17,13.17,0,0,0,12.07,7.24h.29c5.2-.1,10-3.78,11.13-8.56a8.84,8.84,0,0,0-3.4-9.41c-1.71-1.26-2.89-1.8-4-1.8-2.16,0-3,2-4,4.54-.18.45-.37.95-.59,1.47l1.17.49,1.18.49a1.28,1.28,0,0,1,1.26-.8,1.31,1.31,0,0,1,1,.43c0,.06.16.24,0,.67-.88,2.12-2.4,3.28-4.27,3.28a5.92,5.92,0,0,1-5.13-3.38c-1-2-.52-4.33,1.24-6.44a8.39,8.39,0,0,1,6.53-3.31,11.68,11.68,0,0,1,8.81,4.8,11.18,11.18,0,0,1,2.26,9.63c-1.91,7.34-8.26,10-13.56,10a16.73,16.73,0,0,1-13.69-6.88,12.46,12.46,0,0,1-.89-13.23,20.09,20.09,0,0,1,16.42-10.48h.63v-1.27m0,0h-.67c-12.17.35-24.71,13.91-16.54,25.71a18,18,0,0,0,14.74,7.43c6.55,0,12.87-3.52,14.8-10.91,2.06-7.89-5.12-16-12.31-16a9.56,9.56,0,0,0-7.51,3.76c-4.91,5.93,0,11.92,4.87,11.92,2.13,0,4.24-1.18,5.45-4.07.72-1.73-.7-2.87-2.2-2.87a2.56,2.56,0,0,0-2.44,1.59c1.32-3.16,1.83-5.22,3.39-5.22.75,0,1.74.48,3.19,1.54a7.6,7.6,0,0,1,2.92,8.1c-1,4.41-5.52,7.5-9.92,7.58h-.26c-9.92,0-15.64-10.44-9.42-18.32a15.06,15.06,0,0,1,11.91-5.41,15.84,15.84,0,0,1,10.12,3.5,16.64,16.64,0,0,1,4.4,19.27,2.7,2.7,0,0,0,2.4,3.69,1.86,1.86,0,0,0,1.76-1.27c5.91-13.9-3-30-18.68-30Z" transform="translate(-398.71 -163.28)"/>
//
// </svg>
//
// </div>
