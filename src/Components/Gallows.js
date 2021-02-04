import React from 'react'

const Gallows = ({counter}) => {
    return (
        <svg width="244" height="249" viewBox="0 0 244 249" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 1">
<line id="1" y1="245.5" x2="244" y2="245.5" stroke="black" stroke-width="5"/>
<line id="2" x1="66.5" y1="248.01" x2="65.5" y2="5.01028" stroke="black" stroke-width="5"/>
<line id="3" x1="63" y1="2.5" x2="159" y2="2.5" stroke="black" stroke-width="5"/>
<line id="cantilever" x1="66.5703" y1="46.9491" x2="129.689" y2="2.94914" stroke="black" stroke-width="5"/>
{counter >=1 && <line id="line" x1="157" y1="49" x2="157" y2="2" stroke="black" stroke-width="4"/>}
{counter >=2 &&<circle id="head" cx="157" cy="71" r="19.5" stroke="black" stroke-width="5"/>}
{counter >=3 && <line id="body" x1="156.5" y1="148" x2="156.5" y2="92" stroke="black" stroke-width="5"/> }
{counter >=4 &&<line id="right hand" x1="156.265" y1="98.9428" x2="170.265" y2="128.943" stroke="black" stroke-width="5"/>}
{counter >=5 && <line id="left hand" x1="142.735" y1="128.946" x2="156.738" y2="98.9427" stroke="black" stroke-width="5"/>}
{counter >=6 && <line id="left leg" x1="132.738" y1="194.936" x2="156.738" y2="143.936" stroke="black" stroke-width="5"/>}
{counter >=7 &&<line id="right leg" x1="156.262" y1="143.936" x2="180.261" y2="194.936" stroke="black" stroke-width="5"/>}


</g>
</svg>

    )
}

export default Gallows
