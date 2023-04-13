import React from 'react'
import "./TextBlocks.css"
import LeafletMap from './LeafletMap';

function TextBlocks() {
  return (
    <div className='text-block-container'>
    <div className="text-block">
      <h1>
        Devolution #6
      </h1>

      <p>
        Devolution is exploring and dissecting the creative process of game
        development, encountering new characteristics with every new edition.
      </p>

      <p>
        Devolution #6 is examining the inspiring development process of two
        amazing games:
      </p>
      <ul style={{listStyleType:"none"}}>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://hempuli.com/baba/">Baba Is You </a>
          by
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/esadevlog"> Arvi Teikari</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://terrycavanagh.itch.io/dicey-dungeons">Dicey Dungeons </a>
          by
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/terrycavanagh"> Terry Cavanagh</a>
        </li>
      </ul>

      <p>
        Huge THANK YOU to both developers for their trust, cooperation and
        support!
      </p>
    </div>

    <div className="text-block">
    <h1>
        How To...?
      </h1>

      <p>
        Devolution #6 is accompanying
        <a target="_blank" rel="noopener noreferrer" href="https://2020.amaze-berlin.de/"> A MAZE. / TOTAL DIGITAL</a>, so it's live. <br />
        Devolution #6 is online, so it's permanent.
      </p>

      <p>
        The core experience is live, but we'll keep as-much-as-possible for
        later.<br />
        The website will be updated during the event regularly. <br />
        The website will be updated during the event regularly.<br />
        The website will be updated during the event regularly.<br />
        The website will be updated during the event regularly.<br />
        The website will be updated during the event regularly.<br />
        The website will be updated during the event regularly.<br />
        The website will be updated during the event regularly.<br />
        The website will be updated during the event regularly.<br />
        The website will be updated during the event regularly.<br />
        The website will be updated during the event regularly.<br />
        The website will be updated during the event regularly.<br />
        The website will be updated during the event regularly.<br />
        The website will be updated during the event regularly.<br />
        The website will be updated during the event regularly.<br />
        The website will be updated during the event regularly.<br />
        The website will be updated during the event regularly.<br />
      </p>
    </div>
    <div className="text-block">
    <h1>
        Placeholder Text
      </h1>
      <p>
        The similarity in fractal dimension of retinal vessels and DLA clusters led Fereydoon Family and
colleagues to conclude tentatively that at the very least this might reflect the central importance of
diffusion in both growth processes. Mark Gottlieb of Arizona State University has attempted to go
further by concocting a simple model that takes into account some of the specific biological processes
known to control vascular growth. He modelled the host tissue as a checkerboard lattice of cells,
interlaced with a system of blood vessels. To mimic the growth of the host tissue, he allowed the size of
the whole checkerboard array to increase. After each growth step, the distance of each cell from a blood
vessel is determined, and if this distance is too great then the cell becomes ischemic and a new vessel is
added, reaching from the nearest existing vessel to the centre of the ischemic cell. If two vessels are
equally distant from an ischemic cell, they both sprout new vessels, which meet end to end in the
ischemic cell. Finally, existing vessels grow wider as the host tissue expands, so that older vessels
become broader than new vessels.
      </p>
    </div>
    <div className="map-block">
        <LeafletMap/>
    </div>
    </div>
    
  )
}

export default TextBlocks