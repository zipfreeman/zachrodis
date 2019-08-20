import React from "react"
import {Spring } from 'react-spring/renderprops'

import '../../styles/svg-animation.css'

export default (props) => (
<div className="SVGAnimation">
  <Spring
  config={{ tension: 30, friction: 20 }}
    from={{ x: (props.animate ? 9000 : 0) }}
    to={{ x: 0 }}
  >
    {props => (

      <svg className="SVGAnimation" strokeDashoffset={props.x} viewBox="0 0 640 220">
        <path fill="none"  d="M98.542,622.125v-19.25h-4v-3l7-9.5c0,0-1.622,0.614-7-5.25 c-5.271-5.747-7.664-8.625-7.664-8.625s-2.255-3.694,1.873-4.124c6.154-0.641,22.564-2.408,25.119-2.313 c1.732,0.064,4.397,0.506,6.001,2.943c1.48,2.249,9.421,14.37,9.421,14.37s8.125-9.125,9.75-7s-7,8.875-7,8.875l-27,0.75 l6.625,7.75l1.6,1.75h24.4l13-16l3-4l-12.25-0.375c0,0,4.031-4.645-2.25-4.625c-4.889,0.015-7.125,0.709-7.125,0.709 s-7.958,2.792-5.833,5.167c0,0,5.505-3.185,5.583-2.75c-1.958,1.083-5.083,2.667-4.708,5.042l6.125-3.667 c0,0-3.938,3.598-2.75,4.792l5.458-4.167l8.625-1.375c0,0,13.774-3.619,12.583-16.125c0,0,2.04-11.185-4.375-13.292 c-4.25-1.396-7.574-2.245-7.574-2.245c-0.15-2.748-0.378-3.479-0.128-5.104c-0.703,0.984-2.733,1.725-3.297,1.349 c-2.289-1.526,1.834-3.75-0.833-6.5s-2.167-2-1.167-3.333s0-2.065,0-2.065s-0.998,1.703-2.872,1.523 c-0.69-0.066-1.503-0.291-1.461-1.333c0,0,0.192-1.291,1.992-1.208s1.766,0.25,1.97,0.458s0.712-1.667,0-2s-3.254-0.542-3.879,0 s-4.333-6.5-4.042-7.625s4.042,5.875,5,6.042s-2.5-5.411-2.417-6.164s7.083,7.622,9.583,7.685l2.042,4.938h1.184l0.637-1.333 l0.929-2.167c0.125-0.625,2.499-2.347,2.75,2.167c0.167,3-3.679,5.237-3.679,5.237c-1.154,2.512-4.571,6.22-4.571,6.22 s-2.979,2.917-6.979,2.917l0,0c-3.688-0.167-2.313-3.292-2.313-3.292c-0.531-1.125-1.011-2.125-0.641-3.859l0.037-0.226 c0.125-0.292,1.166-2.853,1.166-2.853s1.5,0.813,1.354,1.271c0.083,0.792-1.625,1.375-3.417,0.833s-1.167-1.75-1.167-1.75 s1.375-5.417,1.208-6.309s-2.542-0.802-3.667-0.399c-1.124,0.403-0.167,1.917,0,1.667s2.076-0.912,2.875-0.219 c0.938,0.813-0.5,1.688-0.5,1.688s-1.292,0.156-2.375-0.26s-1.583-8.583-0.417-10.417s0.833-6.083,7.417-7.25 s10.083,1.667,13.25,5.5s2,2.721,2.583,6.985s-0.646,2.056,0.104,2.723l-11.104-7.708c0,0,4.284,3,6.517,3.5 s2.483-0.084,2.983,0.083c0,0-8.417-4.416-8.667-6.333s8,4.333,7.667,3.5s-4.266-7.833-11.425-7.583s-9.076,8.083-9.242,9.417 l-0.205,0.844c-0.899,4.264,0.195,7.156,0.195,7.156c-0.266,1.278,0.302,3.042,1.469,7.625c0.71,2.79,2.075,4.671,3.354,5.025 c1.439,0.398,2.217,0.534,2.269,0.567c0,0,0.21,2.061,0.294,2.728s-1.333-0.882-1.292-2.632c-2.25,0-8.595,1.396-10.25,3.271 c-2.5,2.833-2.926,7.663-4.5,10.667c-2.89,5.517-4.449,7.042-6.333,8s9.667-5,10.917,2.333s18.167-3.25,19.75-1.5 s7.416-4.417,9.583,0.583c0,0-1.917,36.208-1.917,42.333s5.741,6.375,5.933,8.375s0.942-39.5,0.942-39.5l8,0.125v14.875l1.25,1.5 v16l-8.75,7.07L158.75,623h2.5v15h-3.817L155,640.375l-0.75,4l-0.875,2.875l-1,5.125l5.058-0.875l2.984-10.5l-2.984,10.5 l36.771,0.31l-0.325-4.063L159,646.875l0.875-3.625L193,643.375l-0.75-3.5l-30-0.625l1-2.75l29.75,0.25l1.25,15.625h6.5 l-1.875-13.125l-5.875-2.5l-2.5-3.25l-25.25,0.625l-0.5-12h4.833l0.076,12.123l3.258-0.313L172.5,622.25l4.75-0.125v11.459 l2.833,0.038L180,622.125l4.417-0.125l0.083,11.648l3.158,0.117l-0.638-11.345l3.231-0.296l0.25,11.375l5.167,3.833l-1.042-15.208 L197.75,622l-0.5-2.416l-18.5-13.959L169.625,612v-12.625c0,0,1.25-3.25,2.25-2.25S173,580.5,173,580.5s6.25-0.375,8.875-0.5 c0.569,3.359-0.125,5-0.125,5l1.75,1l-0.375,20.625l3.75,2.75L186.5,594.75l5-6.125l4.5,4.875l-0.125,1.625l2-0.5l0.125,10 l3.375-0.125l2.375,1.5v13.75l2.25,0.5v4.375l1.5-14.75c0,0,1.375-2.875,3.25-1.875l0.75-2.375l3.125-0.75l1.5,3.375v-12.375 l-12.25,0.875c0,0-0.875-2.5,5.5-2.75c0,0-16.375,0.125-10.875-1.5s2.25-2.25-0.625-2.25s-8.75-3.75-2.125-3.75 s34.745-2.324,35.333-0.167c1.75,6.417-14.583,8.167-14.583,8.167l3.917-6.917l0.333-8.083l1.25,8.125c0,0,3.125,0.75,4.75,7.625 l0.625,23.125c0,0-5.125,0.375-4.25,2.625s9.25,0.625,8.75,3.375s1.375-6.75,1.375-6.75h3.375l-0.75-17.25c0,0,1.375-1.75,2.25-1.5 s-2.5-10.095,4.875-10.75c5.147-0.458,5.065,7.562,4.862,10.269c-0.019,0.252-0.039,0.458-0.056,0.606c0,0,2.193,0.25,2.443,1 s0,13.125,0,13.125l2.625,0.875v3.25L254,604.375l5.75-0.5l1.5,1.875l6.25-1l1.875,1.875l1.625,11l7.5-0.625c0,0,3-3.5,6.5,2.75 s0.25,4.75,5.5,4.25s7,0.75,7,0.75v-4.25l10.5,1.625l-14.75-4.375v-7l4.75-2l-0.75-4.583l41.5,9.083c0,0-1.75,4,0,5.75L298,608.75 l-4.236,1.784l44.986,11.591c0,0-4.083,2.708,0.167,7.958L364,619.75l-23,5.5l23-7.5l-21.5,5l21.5-7.25l-25.25,6.25L364,612 l-23.25,5.5l21-5.5l-21.25,2.25l20-6.5L343,612l19.25-7.5l-0.5,6l3.5,0.167l-0.417,5.917l-0.417,3.5l1.417,1.749l1.333-26.667 c0,0,2.333-3,12.25-2.333s9.834-0.083,11.167,2.917c0,0,1.083,0.667-1.667,1.25s3.917-1.25,3.833,4.5s0.668,15.417,0.001,16.75 s-6.251,2.75-8.501,1s-4.833-4.917-2.167-4.417s3.167,2.75,5.5,1.75s1.75-2,1.833-2.583s0.25-11.333-0.417-12.25 s-4.833-2.167-5.833-3s-0.25-2.167,1.75-2.25l-14.083,0.083c0,0-0.5,0.167,0.583,0.75s2.917-0.334,3.25,0.833 s0.25,8.583-0.167,9.083s-1.333,3.583-0.5,5.333s2,4.666,0.75,6.5s-1.583,4.25-4.083,3.667s-4.666-0.751-3.833,0.083 s10.417,2.25,13.75,1.25s7.583-0.416,8.667-0.583s-9.417,3.333-9.417,3.333s8.916-0.5,11.583-2.5s4.167-0.082,4.167,0.584 s-13.083,2.666-13.083,2.666s13.251-1.332,15.417-1.916s-13.75,2.999-14,3.166s15.833-1.666,15.833-1.666l-10.417,3.083 l12.917-1.917l-11.333-6.5v-1.5c0,0,1.505,1.017-1.5,2.084s-21.333,2.917-25.417-0.75l-25.083,8.416l-29.833-7.5l0.602-6.265 l4.564-1.984l-0.75-5.417l12.083-3.5l-5.75-2l7.917,0.417l-4.333-1.917l2.5-0.667l4,1.833l-3.5-2.5l2.417-0.75l0.917,1L329,601.5 l1.333-2l3.083,1.583l-2.75-2.333l4.833,1.417L333.917,598l28.333,6.5l-33.417-9.417l-31.583,9.667c0,0,14.662-3.873,13.457-4.119 c-7.75-1.583-18.707-3.298-12.88-5.352c0,0,5.841-2.529-1.159-2.779c-6.079-0.217-12.583,0.167-10.667-0.917s6.75-2.25,5.5-3.5 c-1.261-1.261-1.833-1.25-10.5-1.25s-2.51-2.335-6.167-2.857c-3.917-0.559-7.667-0.726-13.917,0.774s-7.667,0.833-4.917,2.417 c0,0,7.388,2.493,4,2.667c-3.25,0.167-8,1.5-5.333,2.083c4.017,0.879,12.833-0.75,12.583,1.167c-0.261,2-13.271,1.083-12.583,3.583 c0.642,2.333,18.332-0.684,23.333,0.917c4.167,1.333-6.333,1.333-6.333,1.333s-3.895,0.423-4.417,2.25 c-0.667,2.333,6.089,1.79,11.003,2.255c4.244,0.402,6.83-1.755,12.247-0.922s5.833-0.667,9.333,0.417 c0,0-12.458-1.042-13.083-4.917s-17.661-1.033-14.375-4.625c5.375-5.875-18.125-8.375-10.5-11.875c0,0,1.875-1.5,13.125-0.375 s21.375-1.75,19.5-2.375s-20.5-2.125-17.25-3.375s24.125,1.875,18.625-0.625s-21.125-1.375-16.5-2.375s21.875,0.125,11.75-2.125 s-24.125-2-24.125-2s-19.625,0.375-15.625,1.625s14,1.125,9.125,3.5s-2.5,3.625,1,4.875s2,2.5-3.75,3s-19.491-0.099-22.875-0.125 c-5.292-0.042-12.458-3.542-0.75-4.5c14.362-1.176,11.75-1.25,6.375-2.5s-16.229,0.79-13.5-1.625 c2.167-1.917,13.083-0.75,11.875-2.125c-1.813-2.063-12.941,0.252-12.909-2.47c0.034-2.821,9.95-1.738,9.034-3.321 c-1.763-3.046-27.433,0.565-24.417-3.833c2-2.917,39.292-0.604,43.292,1.948s9.125,3.677-3,4.677s-1.708-3.25-13.958-2.375 c-15.111,1.08-22.418,0.296-23.167,2.167c-1.167,2.917,7.667,1.917,7.917,4.167c0.281,2.531-9.5,0.583-10.417,4.5 c-0.754,3.221,11.417-0.083,13.125,6.292l-11.5-2l-4.634,0.345l7.596,5.131l-7.07-0.72l-1.017-4.256l-1-7.75 c0,0,3.159-12.49-2.125-14c-3.5-1-5.375,3.375-6.5,4.125c-0.375,0.25-2.625,2.5-2.625,2.5l4.625,0.125c0,0-1.375,2.75-1.75,3.875 s-0.875,7.375,2.25,9.5l7.111,5.361l1.514,0.764l-11.782-5.946L193.5,574c0,0-5.125-4.875-2.875-7.125s0.5-3.125,0.5-3.125 l-4.5,0.125l3.25-2.25c0,0,2.375-4.125,5-1.5c1.912,1.912,1.375,3.75,1.375,3.75l0.375,9.75l1.5,9.888L196,584.125l-1-1.875 l-0.625,1.263c0,0-1.75,0.07-0.375-4.43S193.5,574,193.5,574l-12.502-7.496L178.625,565l-15.25-14.625l14.25,3.25l10.188,4.125 l-6.438,1.375l-3.7,0.75l-3.612-2.125l-5.208-2.12l9.771,9.37l15.511,9.83l0.258,2.604L169.625,563.5l-7.131-8.156L162.25,559 c0,0,1.618,3.405,1.047,5.039c-0.963,2.754-5.422,4.211-3.297,8.336s7,3.125,8.875,5.125c0,0,5.625-6.375,2.5-9.25 s-5.625-2.729-7.375-3.552s-5-10.073-5-10.073s9-10.875,6.125-12.375s-10-0.625-13.875-5.125c0,0,13.273,4.706,15.5-9.125 c2.375-14.75,6.75-19.375,6.75-19.375l6.25,2.25L179.625,514l3-2.625l-0.125,3.875l3.75-2.625l-1.125,3.625l3.625-2.75 l-0.875,3.125l3.125-2l1.875-0.375L191,517.875l3.25-2.25c0,0-0.875,7.625-5.75,6.375s-10.625-3.625-11.5-4.75l-0.29,2.953 c0,0,5.415,1.547,5.915,1.672S179,522.5,179,522.5l3.5,1.125l-5.748,0.099l3.373,0.901c0,0,0.125,1.5,0,2.75s-7-1.125-9,4.625 s-1.875,7.625-6.5,8.25l5.708-1.667c0,0-0.667,0.917,0.667,1.75s-4.75,2-4.75,2s8.583,3.583,11.25,3.5s4.5,0.75,4.5,0.75 l-2.833-2.833l4.083,1.417c0,0-0.25-2.333-3.5-3.583s-3.25-1.25-3.25-1.25l0,0c0,0,5.5-1.333,6-6.75s-2-4.917-2-4.917 s3.25,2.667,3.25,3.25s3.584-1,3.917,3.75c0,0,4.083-4.25,7.833,1.25c0,0,1.5-7.167,5.25-3.333l-2.417,5l-3.583,8.583l-5.75-0.5 l0.167,1.583l11.083,2.333l0.833-2l1.167-5.833c0,0,2.25-4.167-0.833-4.167s-3.667,1.417-2.417,3s1.25,0.667,2,0.75 s3.833-3.917,3.833-3.917l2-4l1,6.417l6.833,7.5l-2.417,2.917l1.083,1.583l6.75-5.833l-0.683-2.2l-5.233-4.466 c0,0,0.25-3.5-2.917-3s-0.833,5.083,1.083,4.333s1.875-2.5,1.125-6.667s6.542,0.667,6.542,0.417s0,0.25,0,0.25 s-2.167-8.083,3.75-5.167c0,0-0.833-7.5,2.917-6c0,0-6.05-5.961,1.099-6.88c0.104-0.014,0.209-0.026,0.318-0.036 c0,0-4.333-2.833,2.667-8.333c0,0-8.965,0.969-3.597-5.441c0.084-0.101,0.172-0.204,0.264-0.309c5.917-6.75-8.25,2.136-4.667-5.875 c0,0-10.5,4.958-9.5-1.625c0,0-6.917,4.417-6.75-0.417c0,0-9.167,4.667-8.75-2.833c0,0-6.833,9.583-8.833,2.417 c0,0-6.75,3.822-8.5-1.094c0,0-1.5,5.011-9.083,2.677c0,0,2.487,5.405-1.271,5.375c-7.938-0.063,3.063,5.75,3.063,5.75 s1.125-7.802,5.75-7.438c5.825,0.459-0.25,2.792,8.063,2.563l-5.688-2.563l13.875,1.438c0,0,5.292,1.875,3.625,4.875 s-2,2.583-2,2.583l-0.75-3l-1.5,2.833l-1.667-3.417l-2.25,3.5l-0.167-3.5c0,0-2.417,3.583-2.417,3.333s-1.25-4.167-1.25-4.167l-2,3 l-1.5-3.5l-2.333,5.25c0,0,12.167,4.583,16.417,1.75l-0.417,2.333l4.75-2.5l-3,3.75h5.083l-4.167,2.583l1,5.417l-4.667-4.25 l-0.5,3.917l-1.685-4.748l0.073,6.597c0,0-3.638,1.401-6.138-1.682l-2.5,3.417c0,0,3.12,3.606,6.704,3.19l-0.204-3.273l1.5-0.167 l0.426,3.41l2.608-0.29l-1.118-3.204l1.75-1.083L198,528.5l2.165-1.66l-2.332-3.257l1-0.833l2.667,2.083l0.167,8.333l10,0.667 c0,0-2.25,0.166-2-4.167s-0.583-7.417-0.583-7.417l-3.917,1l3.417-2.25l-1-4.083l-5.667,0.417l6.25-2l-2-7.333l-2.5,0.5 l-1.583-4.083l0.083,4.583l-3,1.167l0.083,1l3.167,1.333l2.25-1.25l0.25,1.167l3.417,3.583l0.542,1.313l2.542-0.479l-0.083,3.667 l-1.167,0.75l2.583,11.917l-0.5-11.25L216,519l-2.333-1.833l-1.754-0.439c0,0,2.275-1.415,2.421-2.811 c0.149-1.431-0.059-2.125-1.208-3.292c1.835-0.315,4.547,0.09,4.547,0.09l-0.054,2.973l-1.552,0.052l-0.65,1.927l1.667,1.5 c0,0-0.021,0.396,0.75-2.583c0.711-2.748-0.458-3.396-0.708-5.146s-4.938-0.188-4.938-0.188s-3.063-2.875-1.938-6l3.833,3.5 l0.979-4.75c0,0,3.375,3.813,2.25,6.125c-0.912,1.875,6.926,9.107,9.563,11.375c3.875,3.333,9.5,0.375,9.5,0.375l0.827-6.709 L241,507.75c0,0-3.167-2.583-2.333-4.167s2.334-2.083,3.167-0.5s0.333,3.75,0.333,3.75s8.5-0.333,7.333,3.167 s-2.958,5.906-7.083,3.417s-1.583-6.75,1.667-7.417s11.083,5.25,11.083,5.25l-5.583,3.25c0,0,0.537,1.75,1.185,2.083 s7.148-5.083,7.148-5.083l1.083,0.75l-6.333,5.75c0,0,1.25,1.25,4.5,1.417s4.083-7.167,4.083-7.167l2.417,0.75 c0,0-4,5.417-2.333,7.5s1.667,0.917,5,1.333s0.167-8.333,0.167-8.333s2.667-0.917,2.667-0.667s-0.75,7.75,1.5,7.833 s3.5-2.917,3.5-2.917l-3.25-4.583c0,0,4.583,4.417,4.833,5.25s2,8.084,10.833,2.917s-4.917-8.083-7.25-5.833l-23.917-5.5l-11-5.25 c0,0-0.333-1.917,1.083-1.75s33.333,6.833,33.333,6.833l-21.75-5.667c0,0,4.667-14.917,16.417-14.917l23.667,8 c0,0-12.417,3-13.583,12.583l4,1.417l-0.833,2.333l9.5,2.167c0,0,2.167,0.25,2,3.583s-2.5,3.583-1.5,4.5s3.333-1.083,4.25,1.417 s0,2.167-1.25,2.25s-5.5-0.583-5-3s2.5-6.167,1.75-6.25s-6.75-2.417-6.75-2.417s-1.416,4.417-1.583,6.167s-1.917,1.833-1.917,6.083 s3.167-2.583,3-4.833s-5.083,6-5.083,6l-3.667-1.333c0,0-38.083-10.25-40.75-9.333s-3.25,1.667-2.25,2.5s42.417,7.75,44.083,9.167 s0.917,1.583-1.5,1.917S277,530.5,277,530.75s-3.946,4.485-6.5,0.417c0,0-6.417,3.083-7.5-2.167c0,0-5,4-5.417-0.75 c0,0-4.5,2.333-4.167-1.583c0,0-2.241,3.701-4.333,0.083c0,0-4.729,2.068-4.583-1c0,0-3.417,3.5-4,0.25 c0,0-3.833,2.333-3.667-2.333s0,0,0,0l-2.121,0.812c0,0-2.212,3.938-2.879,7.855l2.917-3.667c0,0,0.487,4.011,4.583,1 c0,0,0.185,4.53,4.083,1.083c0,0-0.084,4.833,3.833,0.833c0,0,0.278,4.667,4.917,0.833c0,0-0.422,4.167,4.333,0.917 c0,0,1.25,4.667,4.5-0.5c0,0,0.041,5.272,4,1.917c0,0,0.167,4.75,4.25,1c0,0-0.203,6.106,4.547,0.939c0,0,0.599,5.498,4.516-0.252 l-1.563,7.479c0,0-4.75,2.396-4-3.333c0,0-4,5.417-4.333,0.25c0,0-4.833,3.75-4.417-1.25c0,0-4.667,5.146-4.75-2.021 c0,0-4.2,4.694-5.563,0.063c0,0-4.625,4.063-4.021-1.375c0,0-4.104,4-4.417-0.917c0,0-4.5,3.229-3.833-1.25 c0,0-4.75,4.333-4.083-0.583c0,0-4.25,5.084-3.667-0.083c0,0-1.917,2.333-2-0.083s0.667,2.75-1.75,3.417s0.834,4.417,4.417,3.833 c0,0-1.208-1.958,1.582-1.602c4.01,0.512,37.835,9.519,37.835,9.519s1.688,1.75-0.75,2.417c-1.366,0.374-38.456-9.66-38.456-9.66 s-3.956,0.296-5.456-3.704c0,0-7.422,6.364-2.338,9.864s50.833,11.656,50.833,11.656s1.848,0.886,4.917-4.74 c1.75-3.208,2.785-3.919,3.375-5.333c0,0,4.5-9.792,6.25-16.125s-0.875-6.25-0.625-8.5s-8.625,18-8.625,18l1.625,3.75 c0,0-4.833,10.125,7.25,8.292l10.625-3.167c0,0-9.821-23.989,5-28.25c10-2.875,13.598,4.277,17.5,3.25 c7.125-1.875,5.875-8.75,15.125-8.875c6.25-0.084,9.865,6.987,10.394,9.944c0.278,1.556,1.321,6.909,1.289,8.088 c-0.041,1.503,2.648,10.809-4.183,12.343c-6.125,1.375-7.665-1.986-14.875-1.25c-6.125,0.625-7.747,9.684-15.958,11.167 c-9.984,1.803-13.479-5.211-13.479-5.211l9.688-5.08l-2.125-15.5l3.375-1.875l2.25,18.75l-2.25-1.5l-0.5-5.5l14-2L316,538.625 L326.375,536l-10.625-0.75l11.875-1.875c0,0-3.875,6.75,6.25,5.75s5.75-8.25,6.875-5.375s-0.125-4.125-7.5-3s-4.25,1.5-4.25,1.5 l18-3.625L342.625,536l20.542-4.75L351.25,527l15.917-3.167l-1.667,6.542l13.25-3.042l-9.75-4.708l11.875-2l0.75,5.25l8.145-1.375 h3.98c0,0-2.625,3.25,0.25,4.375s2.125-4.125,2-4.125" transform="translate(-80 -450)"/>

        <path fill="none"  d="M396.125,524.75l2.125,0.75c0,0,0.875,5.5,2.5,3.5s0-3.5,0-3.5l3.5-0.25l-2-15l-4.917,1.583 c0,0,3.251-4-0.583-2.5c-3.833,1.5-1.667,3.917-1.667,3.917l-3.667,1.75c0,0,0.667-6.75-2.25-4.75s0.604,5.5,0.604,5.5l-7.77,2.917 l-2-0.417c0,0,7.833-2.417,2.083-10.917s-9.417-6.417-9.417-6.417l6.25,18.333c0,0-11.25,0-12.833-2.083l6.333-2.25L365,516.564 c0,0-2.916-2.064-2.333-4.981l7.667-2.417l-7.25,1.25l1.417-2.917l-47.75,6c0,0-6.833-5.333-3.25-11.5s1-6.5-0.167-7.75 s5.75,0.667,5.583,5.667s-2.607,4.234,0.143,9.317l47.608-5.818c0,0,4.167-3.167,5.417-2.75c0,0,5.417,4.583,6.75,9.583 s0.25,7.75,0.25,7.75l2.25,2.083l14-2.917l-12.25,5l10.583-1l6.917-1.083l4.083-0.333l4.5-2.917l-5.667-38.5l29.5-5.167l0.25,4.583 l-15.625,2.375l0.25,2.563L433.667,481l0.432,3.598l-15.765,2.152l0.354,3l16.396-1.667l0.5,3.417l-16.136,2.2l0.333,2.88 l16.553-1.497l2.25,15.5l-16.167,1.667l0.25,2.667l15.917-1.667l0.229,3.375l-15.729,1.625l0.32,2.691l16.18-1.191l0.916,6.625 L424.188,528l0.188,2.438l16.505-1.167l0.163,3.105l-16.21,1.708l0.292,2.63l16.125-1.38v3.333l-16,1.583l0.25,2.688L441.666,542 l0.334,6.667l-25.25,2.833c0,0-2.75,0.25-3.5-1.583s-3.75-31.25-3.75-31.25l-0.834-11.333l30.75-3.417l-5-32.333 c0,0,18.083-5.917,20.5-0.833s9.751,71.167,9.751,71.167s0.023,5.802-11.834,6.333s-9.833,1-9.833,1l24.033,0.048L459,467.25 l5.625,5.375l5.625-5.375l-1.5,84.261L477,467.25l4.5,4.917l4.334-3.833L471,550.5l21.5-77.125l2.125,5l5.375-2.5l-26.375,75.636 l29.625-74.261l1.875,6.625l6-2.375l-36.25,72l40.5-69.75l-0.25,7.25l4.875-3.625l-44,67L522.125,491L478.5,556l4.75-1.5 l-1.752,5.436l43.377-65.561l-39.874,67.792l6-3l-1.063,7.333l37.438-70.125l-34.374,74.292l4.5-3.333l1.166,6.667l31.583-76.75 l-28.749,78.417l6-5.333l2,7.333L532.125,498l-17.624,79.667h12c0,0,5.499,0.667,6.333-4l-9.5-1.167c0,0-3.999-0.521-1.666-6.427 l15.538-61.268c0,0,0.044-2.555,3.294-2.555c1.902,0,5.405,0.821,7.048,1.125l0.592,0.339l-1.806,9.453c0,0-1.445-1.795-2.634-0.42 c-0.116-0.872-1.574-1.663-2.075,0.003c-0.666-1.417-2.416-1.462-2.416,0.5c0,1.875,1.792,1.25,2.406,0.292 c0.177,1.292,1.813,1.388,2.016,0.288c0.524,0.902,1.746,1.15,2.62-0.121l-0.375,1.375l-0.273,1.223l-0.296,1.185 c0,0-0.604-1.875-2.182-0.304c-0.116-0.872-2.026-1.78-2.527-0.113c-0.666-1.417-2.416-1.462-2.416,0.5 c0,1.875,1.792,1.25,2.406,0.292c0.177,1.292,2.209,1.359,2.412,0.259c0.584,1.364,1.563,1.393,2.224-0.092l-0.234,1.485l0,0 l-0.239,2.026c0,0-0.469-2.195-2.046-0.625c-0.116-0.872-2.026-1.78-2.527-0.113c-0.666-1.417-2.416-1.462-2.416,0.5 c0,1.875,1.792,1.25,2.406,0.292c0.177,1.292,2.209,1.359,2.412,0.259c0.584,1.364,1.563,1.393,2.224-0.092l-0.49,1.516 l-0.131,0.545l-0.296,1.185c0,0-0.604-1.875-2.182-0.304c-0.116-0.872-2.026-1.78-2.527-0.113c-0.666-1.417-2.416-1.462-2.416,0.5 c0,1.875,1.792,1.25,2.406,0.292c0.177,1.292,2.209,1.359,2.412,0.259c0.584,1.364,1.563,1.393,2.224-0.092l-0.234,1.485l0.03,0.87 l-0.296,1.185c0,0-0.604-1.875-2.182-0.304c-0.116-0.872-2.026-1.78-2.527-0.113c-0.666-1.417-2.416-1.462-2.416,0.5 c0,1.875,1.792,1.25,2.406,0.292c0.177,1.292,2.209,1.359,2.412,0.259c0.584,1.364,1.563,1.393,2.224-0.092l-0.234,1.485l0,0 l-0.239,2.026c0,0-0.469-2.195-2.046-0.625c-0.116-0.872-2.026-1.78-2.527-0.113c-0.666-1.417-2.416-1.462-2.416,0.5 c0,1.875,1.792,1.25,2.406,0.292c0.177,1.292,2.209,1.359,2.412,0.259c0.584,1.364,1.563,1.393,2.224-0.092l-0.49,1.516 l-0.131,0.545l-0.296,1.185c0,0-0.604-1.875-2.182-0.304c-0.116-0.872-2.026-1.78-2.527-0.113c-0.666-1.417-2.416-1.462-2.416,0.5 c0,1.875,1.792,1.25,2.406,0.292c0.177,1.292,2.209,1.359,2.412,0.259c0.584,1.364,1.563,1.393,2.224-0.092l-0.234,1.485 l-0.383,1.005l-0.296,1.185c0,0-0.604-1.875-2.182-0.304c-0.116-0.872-2.026-1.78-2.527-0.113c-0.666-1.417-2.416-1.462-2.416,0.5 c0,1.875,1.792,1.25,2.406,0.292c0.177,1.292,2.209,1.359,2.412,0.259c0.584,1.364,1.563,1.393,2.224-0.092l-0.234,1.485l0,0 l-0.239,2.026c0,0-0.469-2.195-2.046-0.625c-0.116-0.872-2.026-1.78-2.527-0.113c-0.666-1.417-2.416-1.462-2.416,0.5 c0,1.875,1.792,1.25,2.406,0.292c0.177,1.292,2.209,1.359,2.412,0.259c0.584,1.364,1.563,1.393,2.224-0.092l-0.49,1.516 l-0.131,0.545l-0.296,1.185c0,0-0.604-1.875-2.182-0.304c-0.116-0.872-2.026-1.78-2.527-0.113c-0.666-1.417-2.416-1.462-2.416,0.5 c0,1.875,1.792,1.25,2.406,0.292c0.177,1.292,2.209,1.359,2.412,0.259c0.584,1.364,1.563,1.393,2.224-0.092l-0.234,1.485 l-0.541,1.016l-0.296,1.185c0,0-0.604-1.875-2.182-0.304c-0.116-0.872-2.026-1.78-2.527-0.113c-0.666-1.417-2.416-1.462-2.416,0.5 c0,1.875,1.792,1.25,2.406,0.292c0.177,1.292,2.209,1.359,2.412,0.259c0.584,1.364,1.563,1.393,2.224-0.092l-0.234,1.485l0,0 l-0.239,2.026c0,0-0.469-2.195-2.046-0.625c-0.116-0.872-2.026-1.78-2.527-0.113c-0.666-1.417-2.416-1.462-2.416,0.5 c0,1.875,1.792,1.25,2.406,0.292c0.177,1.292,2.209,1.359,2.412,0.259c0.584,1.364,1.563,1.393,2.224-0.092l-0.49,1.516 l-0.131,0.545l-0.296,1.185c0,0-0.604-1.875-2.182-0.304c-0.116-0.872-2.026-1.78-2.527-0.113c-0.666-1.417-2.416-1.462-2.416,0.5 c0,1.875,1.792,1.25,2.406,0.292c0.177,1.292,2.209,1.359,2.412,0.259c0.584,1.364,1.563,1.393,2.224-0.092l-0.234,1.485 l-2.489,9.296c-2.021,3.167,12.555-14.439,15.573-37.023c0,0,0.73-18.81-1.344-27.644l1.144-6.508c0,0-1.662-0.64-6.789-1.242 c-7.733-0.908-7.917-1.75-7.917-1.75L515.25,580h8.875c0,0,12,0.875,18.5-4.375c0,0-7,4.625-7.875,10.625 c0,0,11.375-3,12.875-9.875c0,0,3.625,7.5,9.5,7.625c0,0-8.375-26.75,0-33.5c0,0-2.875,6.375,0,10.125c0,0,0.5-3.875,1.375-4.125 c0,0,1.625,11.5,5.875,17.625c0,0-3.5-18.5,2.875-22.125c0,0,1-4.75-2.375-8.625c0,0,0.125-2.625,1.875-2.25 c0.125,1.5,0.875,6.125,6.5,3.625c0,0,3.667-6.253-2.999-6.25c-4.114,0.002-4.417,2.083-4.167,2l-3.918,2.667l0.834-3.833l-2,2 c0,0-2.834-7.334-4.167-7.667c0,0-7.001,7.834-1.167,14.167c0,0-7.604,8.229-7.791,12.042s-3.688,10.5-0.625,14.25 c-10.887,2.583-12.499,2.384-14.75,2.125c-0.25,2,14.75-2.125,14.75-2.125s1.883-8.813,3.691-13.375s2.871-12.875,9.746-16.438 c0,0,3.563-5.375,11.438-6.313s23.25,0.875,24.563,2.438c0,0,2-5.875-0.375-9.188s-4.25-6.438-3.375-10.25s1.188-4.438,1.188-4.438 l2.313,9.125c0,0,4.813-4.875,7.625-3.813s-5.375,8.063-5.375,8.063h2.375l-1.938,6l8.25-20.75c0,0,4.188-16,1.063-18.875 s-5.063-5.5-7.063-5.563s-5.375-1.188-6.063,0.313c0,0,7.063,5.5,8.063,9.563s0.125,9.125,3.25,12.438 c0,0-7.671,0.709-13.625-7.125c-3.563-4.688-5.938-12.125-8.313-13.5c0,0,4.813,9.313,4.313,13.563s-1.313,1.813-2,2.938 s0.5,2.313,0,3.75s-3.188-2.063-3.188-1.063s-0.25,3.688-1.125,5.375s-2.438,1.688-2.375,4s-2.688,0.438-3.563,3.813 s-1.875,5.125-2,6.375c0,0-6.563-10.813-5.313-17.563c0,0-1.063-1-2.688,0.563c0,0,4.188-5.438,4.625-9.375l0.5-2.938 c0,0-1.125,1.25-1.813,0.688s2.625-5.625,4.813-6.438c0,0-7.063,0.813-8.188,2.875s-5,4.688-5.438,4.875 c0,0,4.237-6.629,5.938-8.25c2.688-2.563,8.063-5.401,10.813-5.338c0,0,3.313-0.778,5.563-0.001s6.688-1.279,8.813-0.345 c0,0,1.5-2.003,3-1.816s4.188-1.063,7.125,0.375s6.5,5.25,6.813,5.625s3.063,2.802,3.188,4.375s0,5.75,0,5.75s3.375-4.938,5.75-6.5 c0,0,6.25-5.75,10.125-6.375c0,0-16.375,5.75-10.5,17.25c0,0,5.625-5.5,8.875-10.125l4.125-5c0,0,3.5,4.875,0,12 s3.5,9.875,4,14.375c0,0-3.75-11.25,6.625-18.75c0,0,0.375,0.75,0.75,1.188s1,1.125,1.25-0.813s0.875-5,2.375-3.938 s2.438,0.938,1.813-1.125c0,0-1.688-5.125-5.188-7.938s-8.813-3.313-9.063-3.438s0.25,0.125,0.25,0.125l-4.75,6.438 c0,0-13.625,16.25-14.563,18s-9.188,16-9.313,25.625c0,0,13.563-3,17.688-5.75s4.313-4.25,4.313-5.938s-4.125-0.563-4.938-0.188 s-3.125,0.5-3.125,0.5s4.25-2.75,3.563-4.25s-7.688,0.125-5.75-1.688s5-1.438,5.063-2.625s-5.313-1.188-5.563-2.125 s2.938-2,4.938-1.438s3.188,1.438,3.75,2.063s0.938-0.063,0.75-1.125s1.563-1.125,1.625,1.813s1.063,5,1.063,6.25 s-0.688,3.125,0,3.75l12.5-1c0,0,10.438-0.063,15.25,4.188c0,0-8.5-1.313-9.25-1.125s0.563,2.688,0.563,2.688l-2.813-1.375 l-0.625,2l-3.313-3.125l-2.5-0.938c0,0-10.375,1.625-13.563,5.875c0,0,4.875,0.688,6.375,4.438s-0.875,4.563-1.688,5.438 s-4.563,1.313-6.375-3.375s1.125-6,0.688-5.625c0,0-7.563,1.938-7.875,2.063s5.563-0.688,7.188,3.563 c1.327,3.47-0.063,5.125-2.625,6.313s-6.063-2.25-6.375-5.438c0,0,2.563,8.438-3.313,9.938s-7.139-3.085-7.063-4.813 c0.25-5.688,4.875-6.5,8-6.188c0,0-7.688-4-9.608,4.688l-1.101,23.385c0,0,0.917-3.657,10.917-6.073c0,0-2.832-2.25-1.666-4.75 s12.166-8,13.916-8.5c0,0,4.5-0.083,5.75,3.25l0.25,2.333L625.167,549l-2.334,2.75l-1.5-1.25c0,0-2.334,2.084-4.25,4.917 S613,559,613,559l15.917-5.583c0,0,1.999-2.083,3.249-5.5s5.166,0.667,3.25-2.333s-2.833-3.167-0.333-2.833s6.333,0,6.333,0 s4.417-9.667,8.667-9.917s9.25,1.277,10.75,2.68c0,0,12.916-4.181,17.833,3.903c0,0-11.167,0.75-12.75-0.833c0,0,0,2.666,2,3.083 s9.834,2.25,12.084,6.75s0.166,0.083-0.334,0.583s-1.917-1.25-2.25-0.583s8.044,9.888,1.417,15.167 c-1.356,1.081-1.665,0.371-1.665-0.375c0,0-6.335-9.333-7.001-9.5s-0.5-1.167-1.458-0.583s-1.083,2.125-2.083,1.708 s-3.292-3.917-3.292-5.5s1.227-4.424,1.584-5.5c0.083-0.25-1.626-3.375-1.626-3.375s2.042,9.333-13.333,14.708 c0,0-4.208-13,9.5-18.625c0,0-7.333-3.306-10.417-1.028s-3.708,7.487-4.25,9.653c0,0,2.042,20.5,8.375,29.5l-0.334-4.5 c0,0-3.444-4.083-3.078-5.551c0.053-0.21,0.183-0.366,0.412-0.449c1.833-0.667,5.5,3.167,5.5,3.167s0.5-4.333,1.5-5.833 c0,0,2,5.167-0.5,8.833l2-0.833l-1.834,2.167l1,0.5l-3.166,1.167l-0.167,5.333c0,0,15.25-2.917,20.125-1.042s5.875,2,5.875,2 l0.892-2.125l0.858,1.375c0,0,3.25-5.125,3.75-4.375s5.25,7.625,1.5,10.125c0,0,5.25,5.5,4.875,8.75c0,0,4.375,9.625,3,12.125 L694,603.75c0,0-3.625,8.25-8,9.25c0,0,4.75-13.375,2.625-16.75c0,0,1.088-9.439-5.066-12.837c-0.101-0.056-0.204-0.11-0.309-0.163 c-6.5-3.25,0.208,0.107,0.208,0.107s4.792,5.268,2.542,11.768l-0.625-1.625c0,0-1.25,9.25-5,11.625c0,0,2-10.625,1-14l-1,1.875 l-1.5-5c0,0,0.025-4.425,0.875-5.25s-2.875-3.125-2.875-3.125s2,2.375,0,4s-3.25,0.875-4.75-0.25s-0.5-4.125,1.125-4.5 c0,0-13,0.625-18.25,2.125c0,0-1,0.375-0.75,1.75s-0.125,4.375,0.875,5.5c0,0,2.5-1.875,6.25-2.375c0,0-7.375,3.625-3.75,8.125 c0,0,3.75,5.375,9.625,1.875s0-6.75-1.375-7.25s-2.75-3.375-2.75-3.375L662,583.125v2.625l-1.125-1.5l4.5,1.375l2.25,0.25l3.375,1 l-5.484,1.568l2.569,1.457l3.29-2.899l0.625-1.25l0.75,1.875l0.625-2l0.188,2.125l0.688-1.75l-0.5,1.272l0.313,0.978 c0,0,6.688,2.875,5.563,6.25s-5.293,4.875-8.75,3.625c-2.938-1.063-4.05-2.013-4.05-2.013s-7.411-2.511-8.536-8.011l-2.914,2.148 l0.25,16.5l6.875-0.125c0,0-0.875-3-0.5-3.75c0,0,2.375,3,2.25,3.5s0-2.625,1.125-3.5c0,0,0.625,1.875,0.125,4 c0,0,1.584-3.792,5.654-3.81c3.768-0.017,5.721,1.06,5.721,5.31S672.751,613.5,669.5,613c-3.047-0.469-3.75-6.625-3.75-4.625 l-0.916-0.208c0,0,2.999,3.917,2.333,6.25s-3.416,4.083-5.833,3.583s-3.667-3.417-2.75-6s2.584-3.75,4.167-3.917l-6.167,1.25 l1.167,14.167c0,0,0,1.667,1.083,1.667s7.834-4.417,9.167-3.417s4.249-1.167,5.666-0.75s3.584-0.166,3.584-0.166l1.25-1.917 l-0.584-3.5c0,0-1.916-0.25-2.416-1s0.916-1.833,0.916-1.833s1.084-1.167,0.834-1.667l1.416,1.083l1.917-1.833 c0,0-0.499,3.333,0.167,3.833s1.834-2.75,2.5-2s0.832,3.834,0.666,4.334s-4.416,3.416-4.416,3.416l-1,1.834 c0,0,6.916,0.25,9.083,2.083s1.833,1.5,1.833,1.5s-3.084-3.25-1.75-5.917l-0.083-1.25l0.917,0.417c0,0,6.75-2.666,8.5-1.75 s2.333,3.834,2.333,4.25s-1.333,1.25-1.333,1.25l1.333,1.083c0,0,0.833,0.499,0,1.333s-3.916,2.25-5.083,2.167 c0,0,2.999,1.084,3.666,2.167s1.751,3.832,1.334,4.666s-3.25,0.678-3.917-0.416S695.001,635,695.001,635l-1.584-2.583l-0.583-1.584 c0,0,0.167,2.916,0.167,3.25S691.167,633,691.167,633s-0.416,3.583-2.333,5.083c0,0-2.167-3.249-2-4.916s-1,0.5-1,0.5v-2 l-1.667,1.583c0,0,0.001-5.666,4.084-6.833c0,0-3.416-3.251-10.25-3.334h-2.167c0,0-1.583-0.583-1.333,0.417s1.5,1.501,0.5,3.667 s-2.333,3.332-2.333,3.916l-1.584-3.416c0,0-0.582,2.26-0.916,3.333c-0.146,0.47-0.324,0.48-0.479,0.344 c-0.197-0.176-0.355-0.594-0.355-0.594s-0.084,2.166-2,3.583s-3.25,1.5-3.75,1.5s1.084-4.667,1.417-5.5s-1.417,2.167-1.417,2.167 c0.451-0.763,4.667-6.667,4.917-8s-0.167-1.5-0.167-1.5s-1.166,0.334-1.416,0.417s-5.5,2.582-7.667,3.666s-1.583-0.25-1.583-0.25 l-1.5,5.24l0.666,3.844l1.667,1.333c0,0-5.667,0.001-5.25,0.167s2.833,1.25,3.333,1.25s-4.166,0.582-5.416,0.666 s1.583,1,3.083,1.167c0,0-4.999,0.834-7.333,0.667c0,0-4.666-0.416-1.25-1s0-2,2.083-2s3.167-3.084,3.167-3.084 s1.666-3.499,1.75-3.832s0,0-2.167-1.084s-7.084-1.5-7.084-1.5s-0.999,1.25-1.166,1.75l-0.833-2.25l-5.75-3.084l-0.25,0.667 c0,0,1.25,2.667,0.25,4.167c0,0-1.668-2.666-1.334-3.5l-1.916,1.166l1.166-2.083l-3.166-0.083l3.083-1.75l-2.417-2.75l-2.916-3.75 c0,0,0.25-1.499-0.25-4c-0.5-2.5-1.916,0.75-1,2.75s-2.25,1-2.25,1l2.25,2.166l1-1.25l1.5-2.916l0.333,2.25l4.917,5.916 l3.333,1.834l-1.333-6.667c0,0-1.416,1.084-2.75,0.917s0.5-1,1.25-1.417s0.083-0.583,0.083-0.583s-0.083-1.916,0.167-1.75 s2.333,1.583,2.333,1.583l1.333-0.583v1.166l-0.916,0.834l1.166,2c0,0-0.749-1,1.834-2.25s1.083,1.083,1.083,1.083 s0.583-1.166,2.083-2.083s3.834-1.25,3.834-1.25l-0.25,2.5c0,0-0.416,1.916-3.25,2.583s2.25,0.167,2.25,0.167 s-2.666,1.167-3.75,1.25s-2.75-0.584-2.75-0.584s2.832,0.584,3.416,1.584S643.001,624,643.001,624l0.75,1.167 c0,0-2.251-0.166-3.167-0.75s-0.333,0.833-0.333,0.833l-0.583-1.417l1.75,3c0,0,8.084,1.333,11.5,1.5 c0,0,1.333-15.916,0.333-17.666s-4.833-4.917-5.5-5.333s-4.5-3.5-4.75-3.5s5.916,3.417,4.583,6.75s-2.166,6-6.416,5.5 s-7.916-2.583-7-6.75s7-4.5,6.083-4.583c0,0-1.25-0.75-1.75-1.25s2.417,0.417,2.417,0.417l0.25-1.75l0.5,1.75l-10.5-0.667 c0,0,5.108,1.694,5.381,2.941c-3.799,3.122-0.914,7.809-0.914,7.809s-7.523,2.361-10.384-1c-1.862-2.188-1.316-6.357,0.601-7.524 s3.032-2.102,4.399-2.476c0.917-0.251-0.417-2.083-0.417-2.083l2.416,1.646l-5.332-0.146l-4.084,1.75c0,0-0.583,3.667-2.083,5 s-2.5,0.75-2-0.833s-2.75,3.083-3.25,4.25c0,0,1.416-6.333,3.583-8.083s-0.25-1.167-0.25-1.167l2.667-0.25l2-0.333l-0.584-1.25 l2.084,0.25l2.583-0.333c0,0,15-0.333,18.917,1.917c1.811,1.04,4.75,3.167,5.833,4.167c0,0,0.167-19.333-1-22.667 s-5.001-6.5-7.917-8.333s-7.916-3.083-7.916-3.083l-2.833-0.167c0,0,4.416,6.417,4.666,9.167s1.583,4.416-0.25,4.083 s-2.666-2.666-2.833-3.083s-0.334,3.833,0.166,5.583s-0.416,3.333-1.166,5.083s-3.333-3.583-4.083-5.333s-0.084-5-0.167-6 c0,0-1.249,6.833-1.083,7.167s-1.833-5.75-1.5-7.583s3.083-6.75,3.083-6.75l1.416-1.75c0,0-3.832,1.75-4.249,2.833 s-1.668,3.417-1.584,4.25s-0.667,3.25,0.25,3.75s5.084-12.25,5.084-12.25s-3.584-1.583-4.001,1.083s2.527,0.222,2.166,1 s2.417-2.75,2.417-2.75s-1.893-1.202-3.965-2c-1.379-0.531-2.836-0.883-3.868-0.583c-2.584,0.75,2.167,1.75,2.75,1.75 s-2.25,0.833-2.25,0.833l2.583,0.417l7-0.667c0,0,6.333,0.667,10.166,2.667c1.57,0.819,5.644,3.909,6.834,4.75 c0,0-6.25-17.917-6.75-20.917s-1.584-9.5-1.584-10.25s0-1.667,0-1.667l0.834,11.583c0,0-1.25,2.833-2,3.333s-1.083-0.917-1-1.833 s-1.084-0.166-2.167,0.917s-3.832,3.5-3.916,2.833s-2.5,1.833-3.5,3c0,0-0.166-3.417,0.5-4.667s0.917-4.144,1.5-5.03 s0.082-1.386-0.584-1.22s0.084-0.917,1.084-2.333s2-1,1.25-2.167c0,0-2.729,5.875-5.104,7.25s-13.75,4.375-15.125,5.188 s-7.875,3.938-10.063,8.313c0,0,11-2.5,14.125-2.125s4.125-1.052,4.125-1.052l0.375-3.823l2.125,3.125l1.125-2l0.25,2.698 c0,0,0.625-0.823,1.375-0.823s12.125-0.875,14.625,0c0,0-4.875,0.396-5.75,0.823s1.5,1.052,1.5,1.052l-3.75,0.375l3.875,1l-7-1.125 l-2.75-0.625c0,0-8.125,0.375-7.875,1.5s4.666,1.333,4.875,6s-2.015,8.93-7.375,7.5c-5.625-1.5-8.75-4.875-6.125-9.25 s5.625-3.875,5.625-3.875s-13.375,2.375-13.875,3c0,0-2.5,2.375-2.25,6.125s0.956,16.753,1.25,20.375 c0.375,4.625,0.875,17.333,2,19.083c0,0,8.775-11.794,10.188-13.896c1.204-1.792-2.063-3.438-2.063-3.438s-2.75,4.25-4.625,1 s2.5-1,2.5-1s-2.75-1.125-3.125-3.5s3.625,2.5,3.625,2.5l1.5-1.375l0.5,1.375c0,0,2.125,1.625,2.125,0.875s0.375-5.625,0-6.75 s-0.375-2.25-2.25-1.25s-4.75,0-3.875-0.875s-0.25-0.125-0.625-1.125s-2.625-2.125-3.125-2.25s2.125-2.75,4.875-0.875 s3.875,3,3.875,3s1.125,0.5,0.75-0.875s2.125,0.5,2.125,1.75s-0.625,2.875-0.625,2.875l0.375,6.125c0,0,2.875-6.375,7.125-7.25 s-1.875,3.75-2.5,4.875s1.375-0.75,2.125-0.75s-5.625,4.5-6.125,4.5S615.5,604,615.5,604s-10.25,13.875-9.375,17.375 s2.625,10.698,2.625,10.698s1.188,2.239,2.688,2.239l-0.375,2.75l1.916,1.723l0.962,0.631c0,0,1.872,0.021,1.872,1.271 c0,1.153-4.374,0.993-3.625,1.813c0.3,0.328,5,0.125,5.188,1.563c0.082,0.632-11.612,1.488-11.875-0.875 c-0.167-1.5,4.187-1.104,3.75-2.5c-0.378-1.21-7.749,0.313-7.249-1.188s4.999-1.125,4.874-2.625s-6.752,0.657-7.002-0.968 s3.502-1.636,3.002-3.834s-2.625-9.948-2.625-9.948s-2.885-9.413-3.803-21.141c-0.261-3.321-0.363-6.828-0.197-10.359 c0.75-16,5.109-33.977-3-33.625c-0.281-5,8.656-1.523,3.406-2.773c-0.625-2-3.688-2.227-3.688-2.227l-6.219-3.25 c0,0-0.5,1.625-0.375-1.5s-3.125-1.25-2.875-1.625s0.875,2.625,0.875,2.625l-1.875-0.125l0.5,2.25l1.5,0.625 c0,0-6.25,2.625-5.25,6.75s3.5,6.75,7.625,5.875s6.875-3,6.375-6.625s-3-6.25-5.125-6.625S577.25,549.5,577.25,549.5 s-0.219,0.218-0.547,0.25s-0.766-0.124-1.203-0.875c-0.875-1.5-0.875,1.75-2,0.375s-1.125-1.375-1.125-1.375l1.875,3.75 c0,0-10.318,0.25-8.847,6.375s4.722,7.5,9.347,7.5s3.875-1,5.625-2.625S574.5,553.75,578.5,552.5l-0.875-1.625l-5.125-7l2.5-4.5 c0,0,18.875,0.5,21.625,4.25s0.424,30.393,0.424,30.393L587,575.375c0,0,3-4.125,1.125-4.75c0,0-2.139,0-2.694,2.875 c-0.069,0.359-0.138,0.576-0.205,0.68c-0.468,0.732-0.851-4.055-0.851-4.055l0.383,4.787l-2.133,0.213L582.5,578 c0,0-0.375-9.25-6.75-8s-6.625,4.625-5.875,7.25s2,6.75,7,6c3.95-0.592,5.565-2.433,6.75-4.25c0,0-5.5,8.375,1.25,10.125 c0,0,6.5,0.5,6.75-5s-2.75-6.375-4.75-6.875s9.341,0.866,9.341,0.866s0.034,16.634-0.591,18.259c0,0-3.25,3.5-6,1.375 s-7.875-4.625-10.125-5.125s-10.875-0.375-10.875-0.375s-2.5-2.375-2-4s3.875-3.5,4-4s0.625-2-1.625-4.5s-1.125,1.25-1.125,1.25 s-1.25-3-3-3.75s-1.125,5.625-1.125,6.375s-0.75,0.75-0.75,0.75s-0.375-2.375-0.75-2.625s-1.75,0.875-0.375,4.125 S566,590.75,566,590.75l0.875,1.875c0,0-11.75,2.75-14.375,4.375s-2.625,1.625-2.625,1.625s2.625-2.625,3-7.25 s0.25-1.375,0.25-1.375l-2.5,1.875c0,0-5.625-2-7.5-3.25s-2-1.625-2.875,0.625s-3.25,2.25-1.375,4.125S538,595.104,538,595.104 l0.625,1.271c0,0-1.875,1-1.875,1.125s-0.75,0.75,3.75,2.125s5.25,1.125,5.25,1.125s-12,2.25-7.375,19.5 c0,0,0.75,2.625,1.375,1.875s1.125-3.375,1.125-2.625s-1.375,5.625,0,6.875s1.5-0.625,1.5-0.625 c2.875-1.875,2.25-7.875,1.875-12.75s2.75-10.625,2.75-10.625c0,0.625-0.375,1.75-1.625,5.5s0.375,8.625,0.375,8.625 c0.375,2.75,3.75,6.625,4.5,6.625s2.625,0.875,1.75-1.75s1.625-6.75,3.25-10s0.375-5.375,0.5-6.5s-4.25-5.25-4.25-5.25 c3.875-4,19.125-4.875,20.125-4.625s0.375,0.625-0.625,2.25s0.5,3,0.75,4.125s0.25,3.375,1.75,2.25s1.5-3,1.5-3s2.25-1.125,1.875,1 s0,2.125,0,2.125c1.875,3.625-0.625,8-0.75,8.25s-1.625,2.75-0.5,3.125s6.5-1.125,8.75-3.125s0.375-8.75-0.75-8.375 s-4.625-8.75-4.625-8.75s-0.375-2.5,3.375,1.5c0,0,8.375,6.375,10.625,4.875l2.125-0.125c0,0,2.25,21.125,3.5,23.25 s-24.25-0.5-23.75,1.625s4.125,0.75,3.75,2.25s-27.625-0.875-27.25,0.875s4.75,0.302,4.75,1.625s-29.25-1.25-29.625,0.5 s-7.125,0.823-7.125,0.823s-0.875-3.448,1.125-6.198c-6.625,1.375-14.25,4.125-23.5-0.125c-3.875-6.75-2.909-19.926-2-23.5 c0.704-2.768,0.021-3.687-0.229-4.687c0,0,12.479,2.312,23.979,0.187l-0.126,1.768c0,0-18.257,0.828-21.374-0.018 s10.875,3,16.25,2.25s5.375-0.75,5.375-0.75s2.375,9.375,2.5,16.5c0.093,5.303-1,6.875-1,6.875S509,591.5,504.75,586.5 c0,0,0.125-6.125-4-8c0,0-1.625,5.25,1.625,8.625S515.5,621.25,518,623.75c0,0-2.25,3.875-4.125,2.375s-17.25-36.5-18-38.875 s-3.875-3.625-4-7.25s0.25-2.75,0.25-2.75l1.5,3.625l-0.5-3.875c0,0,1.375,3.75,1.5,4.125s0.25-3,0.25-3s1.5,4.25,1.375,5.875 s5,9.25,7.875,13.75S516.239,622.625,516.5,624s-12.375-1.5-17.625-0.125s-2.25-9.75-2-9.875s5.625,0.5,6.625,0.25 s1.625,1.5-1.375,1.625s0.375,1.625,1.625,1.5s10.125-1.75,5.625-2.875s7.125-1.125,8.75-1.125c0,0-15.5-3.25-20.75-2.375 s-3.75,2.375-3.75,2.375L432.667,612l-23,11.334l15.667,1.333l9.25,1.333c0,0,10.166-6.583,1.166-8.083s-13.375,3.708-4.375,4.583 s10.125-3.375,10.125-3.375s12.496-5.271-1.25-5.875c-7.583-0.333-8.375,2.875-2.75,3.5c0,0,4.167,1.25,8.916-0.791 c0,0,1.84-1.984,9.834-1.459c5.084,0.334,3.333,5.25-5.081,4.68c-8.224-0.558-13.002,4.737-4.419,5.737s13.5-3.834,4-5.667 c5.667-1.083,13.75,0.917,13.75,0.917c-5.751-0.987-6.711-5.868,3.916-4.836c5.167,0.502,8.418,6.003-2.499,5.336 s-10.881,5.059-2.993,5.623c8.166,0.584,12.826-4.04,4.909-5.206L480,621.167c-4.584-1.166-6.833-5.249,2.583-5.333 s8.666,5.333,0.75,5c8,1.083,5.584,7.166-3.833,6.416l-1,2l14.75-0.416l0.916-6.334l0.334,11.834L419.583,629l-10.167-0.5 l-0.758-3.102l-0.158-0.648l-6.25-3.25c0,0-5.125,1.75-6.25,1.25s21.75-11.375,30.125-13.375L425.5,607.5l3.25-1.875 c0,0,1.75,0,4.625-1.25s-3.875,3.25-3.875,3.25l5.5-3.375c0,0-2.75,2.875-1.625,4.25s-3.25,2.5-3.25,2.5L428,611.125 c0,0-19.75,7.375-22.75,8.875s-3-6.75-0.5-12.375s-0.625-3.5-1.5-4.625s12-1.75,13.75-1s-4,1.5-2.25,4.125c0,0-6,1.5-8.5,0.75 c0,0-1.5,5.625-1.25,7.625l4.75-0.125L416.5,612l-0.875-4.5l47.25-15.875l30.375,6.25L473.375,612l16.75-17l-34.75-5l-33,17.625 L455,592l34,6.875L467.75,612c0,0-7.125-3.125-6-6.25c0,0,8.14-3.069,6.25-5.25c-1.625-1.875-4.625,1.75-7.375,2.875 c0,0,7.381-4.157,5.875-5.125c-1.75-1.125-6.25,1.875-8.5,3.375c-3.375,0.125-7.5,2.25-6.25,3.5l-0.875,0.625 c0,0,0.375,1.25,1,1.25s0.375,0.875,2.5,1.25s-1,2.375-1,2.375" transform="translate(-80 -450)"/>
      </svg>
    )}
  </Spring>
</div>

)
